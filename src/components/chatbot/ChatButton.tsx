// src/components/chatbot/ChatButton.tsx
import { Bot, X } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClick: () => void;
  showNotification: boolean;
}

const ChatButton: React.FC<Props> = ({ isOpen, onClick, showNotification }) => {
  return (
    <button
      onClick={onClick}
      className="fixed top-24 left-6 w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center z-50 group"
    >
      {isOpen ? <X className="w-5 h-5" /> : <Bot className="w-6 h-6" />}
      {showNotification && (
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
      )}
    </button>
  );
};

export default ChatButton;