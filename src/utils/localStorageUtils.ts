// src/utils/localStorageUtils.ts
import { Message } from '../types/chatbot';

const STORAGE_KEY = 'tenth-power-chat-history';

export const loadChatHistory = (): Message[] => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return [];
    return JSON.parse(saved).map((msg: any) => ({
      ...msg,
      timestamp: new Date(msg.timestamp)
    }));
  } catch (e) {
    console.error('Failed to load chat history', e);
    return [];
  }
};

export const saveChatHistory = (messages: Message[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  } catch (e) {
    console.error('Failed to save chat history', e);
  }
};