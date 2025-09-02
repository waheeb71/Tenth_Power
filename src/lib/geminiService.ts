// src/lib/geminiService.ts
import { Message } from '../types/chatbot';

// Load prompt from JSON
import companyPrompt from '../prompts/companyPrompt.json';

const GEMINI_API_KEY = "AIzaSyB9DnVoEcEXkUjEos-z6PZ9eb-5CUiAaH8";
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;

export const sendToGemini = async (messages: Message[]): Promise<string> => {
  const lastMessage = messages[messages.length - 1] || { text: '' };
  try {
    const formattedHistory = messages.slice(0, -1).map(msg => ({
      role: msg.sender === 'user' ? 'user' : 'model',
      parts: [{ text: msg.text }]
    }));

    const prompt = `
${JSON.stringify(companyPrompt, null, 2)}

Conversation History:
${formattedHistory.map(m => `${m.role}: ${m.parts[0].text}`).join('\n')}

User: ${lastMessage.text}
Assistant: 
    `.trim();

    const response = await fetch(GEMINI_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 200
        }
      })
    });

    if (!response.ok) throw new Error('Gemini API error');

    const data = await response.json();
    if (!data.candidates?.[0]?.content?.parts?.[0]?.text) throw new Error('Invalid Gemini response');

    return data.candidates[0].content.parts[0].text.trim();
  } catch (error) {
    console.error('Gemini API Error:', error);
    return getDefaultResponse(lastMessage.text);
  }
};

const getDefaultResponse = (message: string): string => {
  if (message.toLowerCase().includes('سعر') || message.includes('price')) {
    return 'للحصول على عرض سعر دقيق، يرجى التواصل معنا عبر الهاتف أو إرسال تفاصيل مشروعك.';
  }
  return 'شكراً لاستفسارك. سيقوم فريقنا بالرد عليك قريباً. يمكنك أيضاً زيارة صفحة الخدمات لمزيد من التفاصيل.';
};