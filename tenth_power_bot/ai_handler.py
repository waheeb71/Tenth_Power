# ai_handler.py
import requests
import json
from config import GEMINI_API_KEY, COMPANY_NAME, CONTACT_PHONE, CONTACT_EMAIL, SERVICES

GEMINI_API_URL = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key={GEMINI_API_KEY}"

def get_ai_response(user_message: str) -> str:
    services_list = ", ".join(SERVICES)
    
    prompt = f"""
أنت TENTH POWER BOT، مساعد ذكي لشركة '{COMPANY_NAME}'، شركة رائدة في مجال المقاولات العامة والزجاج والألمنيوم في المملكة العربية السعودية.
الردود تكون:
- بلغة المستخدم (عربي/إنجليزي)
- مختصرة (2-3 جمل كحد أقصى)
- محترفة، ودودة، وواثقة
- لا تختلق معلومات. إذا لم تكن متأكدًا، اطلب من المستخدم الاتصال بالفريق.

الخدمات: {services_list}
للتواصل: الهاتف {CONTACT_PHONE}، البريد {CONTACT_EMAIL}

السياق: {user_message}
"""

    headers = {
        "Content-Type": "application/json"
    }

    data = {
        "contents": [
            {
                "parts": [
                    {"text": prompt}
                ]
            }
        ],
        "generationConfig": {
            "temperature": 0.5,
            "topK": 40,
            "topP": 0.9,
            "maxOutputTokens": 200
        }
    }

    try:
        response = requests.post(GEMINI_API_URL, headers=headers, data=json.dumps(data), timeout=10)
        
        if response.status_code == 200:
            result = response.json()
            return result['candidates'][0]['content']['parts'][0]['text'].strip()
        else:
            error_msg = response.json().get("error", {}).get("message", "خطأ في الاتصال بـ Gemini")
            print(f"Gemini API Error: {error_msg}")
            return (
                "عذرًا، لا يمكنني الرد حاليًا. "
                f"يرجى المحاولة لاحقًا أو الاتصال بنا على {CONTACT_PHONE}."
            )
    except Exception as e:
        print(f"Exception in Gemini request: {e}")
        return (
            "عذرًا، حدث خطأ تقني. "
            f"يرجى التواصل معنا على {CONTACT_PHONE} أو {CONTACT_EMAIL}."
        )