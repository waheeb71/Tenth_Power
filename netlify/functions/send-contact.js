// netlify/functions/send-contact.js

// ❗️ ضع هذه القيم في Netlify Environment Variables
const { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID, ADMIN_USER_ID } = process.env;

// ✅ تخزين بسيط للإحصائيات (في الذاكرة - للعرض فقط)
// في بيئة إنتاج حقيقية، استخدم قاعدة بيانات (مثل Firebase أو Netlify KV)
let stats = {
  totalMessages: 0,
  messagesToday: 0,
  today: new Date().toDateString()
};

// تحديث الإحصائيات
function updateStats() {
  const today = new Date().toDateString();
  if (today !== stats.today) {
    stats.messagesToday = 0;
    stats.today = today;
  }
  stats.totalMessages += 1;
  stats.messagesToday += 1;
}

// تنسيق الإحصائيات
function getStatsText() {
  return `
📊 *إحصائيات الرسائل*

📌 *اليوم:* ${stats.messagesToday} رسالة
📌 *الإجمالي:* ${stats.totalMessages} رسالة
📆 آخر تحديث: ${new Date().toLocaleString('ar-SA')}
  `.trim();
}

// وظيفة لتهريب Markdown
function escapeMarkdown(text) {
  return text
    .toString()
    .replace(/[_*[\]()~`>#+\-=|{}.!]/g, '\\$&')
    .replace(/(\w+)(@)(\w+)/g, '$1\\@$3');
}

// تحويل رقم الجوال إلى رابط واتساب
function phoneToWaLink(phone) {
  const cleanPhone = phone.replace(/\D/g, '');
  return `https://wa.me/${cleanPhone}`;
}

// دالة رئيسية
exports.handler = async (event, context) => {
  if (event.httpMethod === 'POST') {
    return handleContactForm(event);
  } else if (event.httpMethod === 'GET') {
    return handleTelegramWebhook(event);
  } else {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }
};

// التعامل مع نموذج الاتصال
async function handleContactForm(event) {
  try {
    const body = JSON.parse(event.body);
    const { name, phone, email, service, message, preferredMethod } = body;

    if (!name || !phone || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'الرجاء تعبئة الحقول المطلوبة' })
      };
    }

    // ترجمة الخدمة وطريقة التواصل
    const serviceLabels = {
      glass: 'أعمال الزجاج',
      aluminum: 'أعمال الألمنيوم',
      contracting: 'المقاولات العامة',
      consultation: 'استشارة',
      steel: 'أعمال الستيل',
      '': 'غير محدد'
    };

    const methodLabels = {
      whatsapp: 'واتساب',
      phone: 'مكالمة هاتفية',
      email: 'بريد إلكتروني',
      any: 'أي وسيلة متاحة'
    };

    // تحديث الإحصائيات
    updateStats();

    // رسالة منظمة جدًا
    const text = `
📬 *رسالة جديدة من الموقع الإلكتروني*

👤 *الاسم:* ${escapeMarkdown(name)}
📞 *الهاتف:* [${escapeMarkdown(phone)}](${phoneToWaLink(phone)})
✉️ *البريد:* \`${email || 'غير متوفر'}\`
🔧 *الخدمة:* ${serviceLabels[service] || 'مخصصة'}
💬 *طريقة التواصل:* ${methodLabels[preferredMethod] || 'غير محددة'}

📝 *الرسالة:*
\`\`\`
${escapeMarkdown(message)}
\`\`\`

⏰ *الوقت:* ${new Date().toLocaleString('ar-SA')}
${getStatsText()}
    `.trim();

    // إرسال إلى Telegram
    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: text,
          parse_mode: 'Markdown'
        })
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Telegram Error:', errorData);
      return { statusCode: 500, body: JSON.stringify({ error: 'فشل الإرسال' }) };
    }

    return { statusCode: 200, body: JSON.stringify({ success: true }) };

  } catch (error) {
    console.error('Server Error:', error);
    return { statusCode: 500, body: JSON.stringify({ error: 'حدث خطأ داخلي' }) };
  }
}

// التعامل مع أوامر البوت (مثل /start)
async function handleTelegramWebhook(event) {
  try {
    const url = new URL(event.url);
    const query = url.searchParams;
    const command = query.get('cmd');
    const user_id = query.get('user_id');

    if (!command || !user_id) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing parameters' })
      };
    }

    let replyText = '';

    if (command === 'start') {
      if (user_id === ADMIN_USER_ID) {
        replyText = `أهلين محمد 👋\n\nمرحباً بك في لوحة تحكم بوت *القوة العاشرة*.\n\n${getStatsText()}`;
      } else {
        replyText = 'المعذرة، لا يمكن استخدام هذا البوت إلا من قبل صاحب المعرف @Ponamoha.';
      }
    } else {
      replyText = 'الأمر غير معروف.';
    }

    // إرسال رد للمستخدم
    await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: user_id,
          text: replyText,
          parse_mode: 'Markdown'
        })
      }
    );

    return { statusCode: 200, body: JSON.stringify({ success: true }) };

  } catch (error) {
    console.error('Webhook Error:', error);
    return { statusCode: 500, body: JSON.stringify({ error: 'Internal Error' }) };
  }
}