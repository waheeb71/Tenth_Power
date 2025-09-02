// src/types/chatbot.d.ts
export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export interface QuickReply {
  label: string;
  message: string;
}