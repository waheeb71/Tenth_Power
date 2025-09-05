// src/components/chatbot/ChatWindow.tsx
import { X, Bot, User, Send } from 'lucide-react';
import { Message } from '../../types/chatbot';
import TypingIndicator from './TypingIndicator';
import QuickReplies from './QuickReplies';
import { useRef } from 'react';
import React, { useState, useEffect } from 'react';

interface Props {
  messages: Message[];
  isOpen: boolean;
  isTyping: boolean;
  onClose: () => void;
  onSendMessage: (msg: string) => void;
}

const ChatWindow: React.FC<Props> = ({ 
  messages, 
  isOpen, 
  isTyping, 
  onClose, 
  onSendMessage 
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  return (
    <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 sm:left-20 sm:transform-none w-[90%] max-w-sm sm:w-96 h-[80%] sm:h-96 bg-white rounded-2xl shadow-3xl border border-gray-200 flex flex-col z-50 overflow-hidden ${isOpen ? 'block' : 'hidden'}`}>

   
      <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <Bot className="w-6 h-6" />
            <div>
              <h3 className="font-semibold">مساعد القوة العاشرة</h3>
              <p className="text-xs opacity-90">متاح دائماً للمساعدة</p>
            </div>
          </div>
          <button onClick={onClose} className="text-white hover:bg-white/20 p-1 rounded">
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
        <QuickReplies onSend={onSendMessage} />
        
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs rounded-2xl px-4 py-2 ${msg.sender === 'user' ? 'bg-amber-500 text-white' : 'bg-white shadow-sm'}`}>
              <div className="flex items-start space-x-2 rtl:space-x-reverse">
                {msg.sender === 'bot' && <Bot className="w-4 h-4 mt-0.5 text-amber-500 flex-shrink-0" />}
                {msg.sender === 'user' && <User className="w-4 h-4 mt-0.5 flex-shrink-0" />}
                <p className="text-sm">{msg.text}</p>
              </div>
              <p className="text-xs opacity-70 mt-1 text-right">
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}

        {isTyping && <TypingIndicator />}
        <div ref={messagesEndRef} />
      </div>

      <ChatInput onSendMessage={onSendMessage} />
    </div>
  );
};

// Input Component
const ChatInput = ({ onSendMessage }: { onSendMessage: (msg: string) => void }) => {
  const [input, setInput] = useState('');

  return (
    <div className="border-t border-gray-200 p-4 bg-white">
      <div className="flex space-x-2 rtl:space-x-reverse">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && input.trim() && handleSubmit()}
          placeholder="اكتب رسالتك..."
          className="flex-1 border border-gray-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
        />
        <button
          onClick={handleSubmit}
          className="bg-amber-500 text-white p-2 rounded-xl hover:bg-amber-600"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );

  function handleSubmit() {
    if (input.trim()) {
      onSendMessage(input);
      setInput('');
    }
  }
};

export default ChatWindow;