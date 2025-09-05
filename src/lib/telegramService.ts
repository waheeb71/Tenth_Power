// src/lib/telegramService.ts
import { ContactFormData, PreferredContactMethod } from '../types/contact';

// ⚠️ استبدل بالـ Token الخاص بك
const TELEGRAM_BOT_TOKEN = "";
const TELEGRAM_CHAT_ID = "5887234832"; 


export const sendToTelegram = async (data: ContactFormData): Promise<boolean> => {
  try {
    const methodLabels: Record<PreferredContactMethod, string> = {
      whatsapp: 'واتساب',
      phone: 'مكالمة هاتفية',
      email: 'بريد إلكتروني',
      any: 'أي وسيلة متاحة'
    };

    const message = `
📬 *رسالة جديدة من الموقع الإلكتروني*

*الاسم:* ${escapeMarkdown(data.name)}
*الهاتف:* ${escapeMarkdown(data.phone)}
*البريد (اختياري):* ${data.email ? escapeMarkdown(data.email) : 'غير مطلوب'}
*الخدمة:* ${translateService(data.service)}
*طريقة التواصل المفضلة:* ${methodLabels[data.preferredMethod]}
*الرسالة:*
${escapeMarkdown(data.message)}

⏰ ${new Date().toLocaleString('ar-SA')}
    `.trim();

    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'Markdown'
      })
    });

    return response.ok;
  } catch (error) {
    console.error('فشل في إرسال الرسالة إلى تليجرام', error);
    return false;
  }
};

const translateService = (service: string): string => {
  const map: Record<string, string> = {
    glass: 'أعمال الزجاج',
    aluminum: 'أعمال الألمنيوم',
    contracting: 'المقاولات العامة',
    consultation: 'استشارة',
    '': 'غير محدد'
  };
  return map[service] || 'مخصص';
};

const escapeMarkdown = (text: string): string => {
  return text.replace(/[_*[\]()~`>#+\-=|{}.!]/g, '\\$&');
};