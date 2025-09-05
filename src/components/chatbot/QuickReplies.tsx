// src/components/chatbot/QuickReplies.tsx
import { useLanguage } from '../../contexts/LanguageContext';

interface Props {
  onSend: (msg: string) => void;
}

const QuickReplies: React.FC<Props> = ({ onSend }) => {
  const { language } = useLanguage();

  const quickReplies = language === 'ar'
    ? [
        { label: 'عرض الخدمات', message: 'ما الخدمات التي تقدمونها؟' },
        { label: 'طلب عرض سعر', message: 'كيف أطلب عرض سعر؟' },
        { label: 'مشاريع سابقة', message: 'هل لديكم مشاريع سابقة؟' },
        { label: 'تواصل معنا', message: 'كيف أتواصل معكم؟' }
      ]
    : [
        { label: 'View Services', message: 'What services do you offer?' },
        { label: 'Get a Quote', message: 'How can I get a quote?' },
        { label: 'Past Projects', message: 'Can I see past projects?' },
        { label: 'Contact Us', message: 'How to contact you?' }
      ];

  return (
    <div className="flex flex-wrap gap-2 p-2 bg-gray-50 rounded-lg mb-3 border-b border-gray-200">
      {quickReplies.map((reply, i) => (
        <button
          key={i}
          onClick={() => onSend(reply.message)}
          className="text-xs bg-white text-gray-700 px-3 py-1 rounded-full border border-gray-300 hover:bg-amber-50 transition-colors"
        >
          {reply.label}
        </button>
      ))}
    </div>
  );
};

export default QuickReplies;