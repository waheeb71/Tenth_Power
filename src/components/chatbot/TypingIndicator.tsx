// src/components/chatbot/TypingIndicator.tsx
import { Bot } from 'lucide-react';

const TypingIndicator = () => (
  <div className="flex justify-start">
    <div className="bg-white text-gray-800 px-4 py-2 rounded-2xl shadow-sm max-w-xs">
      <div className="flex items-center space-x-1 rtl:space-x-reverse">
        <Bot className="w-4 h-4 text-amber-500" />
        <span className="text-sm text-gray-500">يكتب...</span>
      </div>
    </div>
  </div>
);

export default TypingIndicator;