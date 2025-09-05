// src/components/chatbot/Chatbot.tsx
import { useState, useEffect } from 'react';
import { loadChatHistory, saveChatHistory } from '../../utils/localStorageUtils';
import { sendToGemini } from '../../lib/geminiService';
import ChatButton from './ChatButton';
import ChatWindow from './ChatWindow';
import { Message } from '../../types/chatbot';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  // تحميل التاريخ
  useEffect(() => {
    const history = loadChatHistory();
    setMessages(history.length ? history : getWelcomeMessage());
    setShowNotification(true);

    const timer = setTimeout(() => setShowNotification(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  const getWelcomeMessage = (): Message[] => [
    {
      id: '0',
      text: 'مرحباً! كيف يمكنني مساعدتك اليوم؟',
      sender: 'bot',
      timestamp: new Date()
    }
  ];

  const handleSendMessage = async (text: string) => {
    const userMsg: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => {
      const updated = [...prev, userMsg];
      saveChatHistory(updated);
      return updated;
    });

    setIsTyping(true);
    setShowNotification(false);

    const replyText = await sendToGemini([...messages, userMsg]);

    const botMsg: Message = {
      id: (Date.now() + 1).toString(),
      text: replyText,
      sender: 'bot',
      timestamp: new Date()
    };

    setMessages(prev => {
      const updated = [...prev, botMsg];
      saveChatHistory(updated);
      return updated;
    });

    setIsTyping(false);
  };

  return (
    <>
      <ChatButton 
        isOpen={isOpen} 
        onClick={() => setIsOpen(!isOpen)} 
        showNotification={showNotification} 
      />
      <ChatWindow
        messages={messages}
        isOpen={isOpen}
        isTyping={isTyping}
        onClose={() => setIsOpen(false)}
        onSendMessage={handleSendMessage}
      />
    </>
  );
};

export default Chatbot;