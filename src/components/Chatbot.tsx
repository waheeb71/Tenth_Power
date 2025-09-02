import React, { useState, useEffect, useRef } from 'react';
import { Bot, X, Send, MessageCircle, User } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [showNotification, setShowNotification] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { language, t } = useLanguage();

  const predefinedResponses = {
    ar: {
      'خدمات': 'نقدم خدمات متنوعة في أعمال الزجاج والألمنيوم والمقاولات العامة. يمكنكم زيارة صفحة خدماتنا لمزيد من التفاصيل.',
      'أسعار': 'أسعارنا تنافسية ومناسبة لجميع الميزانيات. يرجى التواصل معنا لمعرفة تفاصيل الأسعار حسب مشروعكم.',
      'مشاريع': 'لدينا العديد من المشاريع المنجزة بنجاح. يمكنكم مشاهدة معرض أعمالنا في صفحة المشاريع.',
      'تواصل': 'يمكنكم التواصل معنا عبر الهاتف:+966532438253 أو البريد الإلكتروني: Zjajkryt78@gmail.com',
      'default': 'شكراً لاستفساركم. سيقوم فريقنا بالرد عليكم في أقرب وقت. يرجى ترك رسالة في صفحة التواصل للحصول على رد مفصل.'
    },
    en: {
      'services': 'We offer various services in glass works, aluminum, and general contracting. Please visit our services page for more details.',
      'prices': 'Our prices are competitive and suitable for all budgets. Please contact us for pricing details based on your project.',
      'projects': 'We have many successfully completed projects. You can view our portfolio on the projects page.',
      'contact': 'You can contact us by phone:+966532438253 or email: Zjajkryt78@gmail.com',
      'default': 'Thank you for your inquiry. Our team will respond to you soon. Please leave a message on the contact page for a detailed response.'
    }
  };

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    const responses = predefinedResponses[language];
    
    if (message.includes('خدمات') || message.includes('services')) {
      return responses['خدمات'] || responses['services'];
    }
    if (message.includes('أسعار') || message.includes('سعر') || message.includes('price')) {
      return responses['أسعار'] || responses['prices'];
    }
    if (message.includes('مشاريع') || message.includes('أعمال') || message.includes('projects')) {
      return responses['مشاريع'] || responses['projects'];
    }
    if (message.includes('تواصل') || message.includes('اتصال') || message.includes('contact')) {
      return responses['تواصل'] || responses['contact'];
    }
    
    return responses['default'];
  };

  // رسالة ترحيب تلقائية عند تحميل الصفحة
  useEffect(() => {
    const welcomeMessage = {
      id: '0',
      text: language === 'ar'
        ? 'مرحباً بكم في شركة القوة العاشرة! كيف يمكنني مساعدتكم اليوم؟'
        : 'Hello! Welcome to Tenth Power. How can I help you today?',
      sender: 'bot' as const,
      timestamp: new Date()
    };

    setMessages([welcomeMessage]);
    setShowNotification(true);

    // إخفاء الإشعار بعد 8 ثواني إذا لم يفتح المستخدم
    const notificationTimer = setTimeout(() => {
      setShowNotification(false);
    }, 8000);

    return () => clearTimeout(notificationTimer);
  }, [language]);

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setShowNotification(false); // إخفاء الإشعار عند الرد

    // تأثير "البوت يكتب..."
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputText),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1200);
  };

  // التمرير التلقائي لأخر رسالة
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  return (
    <>
      {/* Floating Chat Button (Top-Right) */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          if (!isOpen) setShowNotification(false); // إخفاء الإشعار عند فتح الشات
        }}
        className="fixed top-24 left-6 w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center z-50 group animate-bounce-slow"
        aria-label="افتح مساعد الشركة"
      >
        {isOpen ? (
          <X className="w-5 h-5" />
        ) : (
          <>
            <Bot className="w-6 h-6" />
            {/* Notification Badge */}
            {showNotification && (
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
            )}
          </>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed top-20 left-20 w-96 h-96 bg-white rounded-2xl shadow-3xl border border-gray-200 flex flex-col z-50 overflow-hidden transition-all duration-300 animate-fade-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Bot className="w-6 h-6" />
                <div>
                  <h3 className="font-semibold">مساعد القوة العاشرة</h3>
                  <p className="text-xs opacity-90">متاح دائماً للمساعدة</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 p-1 rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs rounded-2xl px-4 py-2 ${
                    message.sender === 'user'
                      ? 'bg-amber-500 text-white'
                      : 'bg-white text-gray-800 shadow-sm'
                  }`}
                >
                  <div className="flex items-start space-x-2 rtl:space-x-reverse">
                    {message.sender === 'bot' && (
                      <Bot className="w-4 h-4 mt-0.5 text-amber-500 flex-shrink-0" />
                    )}
                    {message.sender === 'user' && (
                      <User className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    )}
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  </div>
                  <p className="text-xs opacity-70 mt-1 text-right">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 px-4 py-2 rounded-2xl shadow-sm max-w-xs">
                  <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    <Bot className="w-4 h-4 text-amber-500" />
                    <span className="text-sm text-gray-500">يكتب...</span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-gray-200 p-4 bg-white">
            <div className="flex space-x-2 rtl:space-x-reverse">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder={language === 'ar' ? 'اكتب رسالتك...' : 'Type your message...'}
                className="flex-1 border border-gray-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              <button
                onClick={handleSendMessage}
                className="bg-amber-500 text-white p-2 rounded-xl hover:bg-amber-600 transition-colors duration-200 aspect-square"
                disabled={!inputText.trim()}
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;

/* إضافات في Tailwind (أضفها لملف tailwind.config.js أو في CSS) */
/*
animate-bounce-slow {
  animation: bounce 2s infinite;
}
animate-fade-in {
  animation: fadeIn 0.3s ease-out;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}
*/