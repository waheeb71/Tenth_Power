// netlify/functions/send-contact.js
const { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } = process.env;

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const body = JSON.parse(event.body);
    const { name, phone, email, service, message, preferredMethod } = body;

    // التحقق من الحقول المطلوبة
    if (!name || !phone || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'الرجاء تعبئة الحقول المطلوبة' })
      };
    }

    // تحويل اسم الخدمة
    const serviceLabels = {
      glass: 'أعمال الزجاج',
      aluminum: 'أعمال الألمنيوم',
      contracting: 'المقاولات العامة',
      consultation: 'استشارة',
      '': 'غير محدد'
    };

    const methodLabels = {
      whatsapp: 'واتساب',
      phone: 'مكالمة هاتفية',
      email: 'بريد إلكتروني',
      any: 'أي وسيلة متاحة'
    };

    const text = `
📬 *رسالة جديدة من الموقع الإلكتروني*

*الاسم:* ${escapeMarkdown(name)}
*الهاتف:* ${escapeMarkdown(phone)}
*البريد الإلكتروني:* ${email ? escapeMarkdown(email) : 'غير متوفر'}
*الخدمة:* ${serviceLabels[service] || 'مخصصة'}
*طريقة التواصل المفضلة:* ${methodLabels[preferredMethod] || 'غير محددة'}
*الرسالة:*
${escapeMarkdown(message)}

⏰ ${new Date().toLocaleString('ar-SA')}
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

    const data = await response.json();

    if (!response.ok) {
      console.error('Telegram API Error:', data);
      return { statusCode: 500, body: JSON.stringify({ error: 'فشل الإرسال إلى تليجرام' }) };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };
  } catch (error) {
    console.error('Server Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'حدث خطأ داخلي' })
    };
  }
};

// وظيفة لتهريب Markdown
function escapeMarkdown(text) {
  return text
    .toString()
    .replace(/[_*[\]()~`>#+\-=|{}.!]/g, '\\$&')
    .replace(/(\w+)(@)(\w+)/g, '$1\\@$3');
}