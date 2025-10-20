export interface Project {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  category: 'glass' | 'aluminum' |  'aluminum';
  images: string[];
  location: string;
  locationEn: string;
  completedDate: string;
  clientName?: string;
  projectValue?: number;
  duration?: string;
  featured: boolean;
  status: 'planning' | 'in-progress' | 'completed' | 'on-hold';
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
  read: boolean;
  replied: boolean;
  createdAt: string;
  ip?: string;
  userAgent?: string;
}

export interface User {
  id: string;
  email: string;
  role: 'admin' | 'editor' | 'viewer';
  name: string;
  avatar?: string;
  lastLogin: string;
  createdAt: string;
}

export interface SiteContent {
  id: string;
  key: string;
  titleAr: string;
  titleEn: string;
  contentAr: string;
  contentEn: string;
  type: 'text' | 'image' | 'video' | 'html';
  published: boolean;
  updatedAt: string;
  updatedBy: string;
}

export interface ServiceCategory {
  id: string;
  nameAr: string;
  nameEn: string;
  descriptionAr: string;
  descriptionEn: string;
  icon: string;
  featured: boolean;
  order: number;
}

export interface ChatbotMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  language: 'ar' | 'en';
  sessionId?: string;
}

export interface SiteStats {
  totalProjects: number;
  activeProjects: number;
  completedProjects: number;
  totalMessages: number;
  unreadMessages: number;
  monthlyVisitors: number;
  conversionRate: number;
}

export type Language = 'ar' | 'en';
export type Theme = 'light' | 'dark';