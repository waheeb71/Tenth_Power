import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: 'ar' | 'en';
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.services': 'خدماتنا',
    'nav.projects': 'مشاريعنا',
    'nav.contact': 'تواصل معنا',
    'nav.admin': 'لوحة التحكم',
    
    // Home Page
    'home.hero.title': 'القوة العاشرة للمقاولات العامة',
    'home.hero.subtitle': 'رؤيتنا تحويل أحلامكم إلى واقع ملموس',
    'home.hero.description': 'نحن شركة رائدة في مجال المقاولات العامة، متخصصون في الزجاج والألمنيوم مع خبرة تمتد لسنوات في تنفيذ المشاريع المعمارية المتميزة',
    'home.hero.cta': 'اطلب خدمتك الآن',
    'home.hero.explore': 'استكشف مشاريعنا',
    
    // Services
    'services.title': 'خدماتنا المتميزة',
    'services.glass.title': 'أعمال الزجاج',
    'services.glass.description': 'تركيب وصيانة جميع أنواع الزجاج المعماري والديكوري',
    'services.aluminum.title': 'أعمال الألمنيوم',
    'services.aluminum.description': 'تصنيع وتركيب هياكل الألمنيوم والنوافذ والأبواب',
    'services.contracting.title': 'المقاولات العامة',
    'services.contracting.description': 'إدارة وتنفيذ المشاريع الإنشائية من التخطيط حتى التسليم',
    'services.stainless.title': 'أعمال الاستانلس ستيل',
    'services.stainless.description': 'تصميم وتنفيذ التركيبات المعدنية المصنوعة من الاستانلس ستيل بجودة عالية',

    
    // About
    'about.title': 'من نحن',
    'about.description': 'شركة القوة العاشرة للمقاولات العامة، شريكك الموثوق في تحقيق المشاريع المعمارية المتميزة',
    
    // Projects
    'projects.title': 'مشاريعنا السابقة',
    'projects.filter.all': 'جميع المشاريع',
    'projects.filter.glass': 'الزجاج',
    'projects.filter.aluminum': 'الألمنيوم',
    'projects.filter.contracting': 'المقاولات',
    
    // Contact
    'contact.title': 'تواصل معنا',
    'contact.form.name': 'الاسم الكامل',
    'contact.form.email': 'البريد الإلكتروني',
    'contact.form.phone': 'رقم الهاتف',
    'contact.form.service': 'نوع الخدمة',
    'contact.form.message': 'رسالتك',
    'contact.form.submit': 'إرسال الرسالة',
    
    // Admin
    'admin.title': 'لوحة التحكم',
    'admin.login': 'تسجيل الدخول',
    'admin.projects': 'إدارة المشاريع',
    'admin.messages': 'رسائل العملاء',
    'admin.content': 'إدارة المحتوى',
    
    // Common
    'common.loading': 'جاري التحميل...',
    'common.error': 'حدث خطأ',
    'common.success': 'تم بنجاح',
    'common.cancel': 'إلغاء',
    'common.save': 'حفظ',
    'common.edit': 'تعديل',
    'common.delete': 'حذف',
    'common.view': 'عرض'
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.admin': 'Admin',
    
    // Home Page
    'home.hero.title': 'The Tenth Power General Contracting',
    'home.hero.subtitle': 'Transforming Your Vision Into Reality',
    'home.hero.description': 'We are a leading company in general contracting, specializing in glass and aluminum with years of experience in executing distinguished architectural projects',
    'home.hero.cta': 'Request Service Now',
    'home.hero.explore': 'Explore Our Projects',
    
    // Services
    'services.title': 'Our Distinguished Services',
    'services.glass.title': 'Glass Works',
    'services.glass.description': 'Installation and maintenance of all types of architectural and decorative glass',
    'services.aluminum.title': 'Aluminum Works',
    'services.aluminum.description': 'Manufacturing and installation of aluminum structures, windows and doors',
    'services.contracting.title': 'General Contracting',
    'services.contracting.description': 'Management and execution of construction projects from planning to delivery',
    'services.stainless.title': 'Stainless Steel Works',
'services.stainless.description': 'Design and implementation of high-quality stainless steel installations',

    // About
    'about.title': 'About Us',
    'about.description': 'The Tenth Power General Contracting, your trusted partner in achieving distinguished architectural projects',
    
    // Projects
    'projects.title': 'Our Previous Projects',
    'projects.filter.all': 'All Projects',
    'projects.filter.glass': 'Glass',
    'projects.filter.aluminum': 'Aluminum',
    'projects.filter.contracting': 'Contracting',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.phone': 'Phone Number',
    'contact.form.service': 'Service Type',
    'contact.form.message': 'Your Message',
    'contact.form.submit': 'Send Message',
    
    // Admin
    'admin.title': 'Admin Dashboard',
    'admin.login': 'Login',
    'admin.projects': 'Manage Projects',
    'admin.messages': 'Customer Messages',
    'admin.content': 'Content Management',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'An error occurred',
    'common.success': 'Success',
    'common.cancel': 'Cancel',
    'common.save': 'Save',
    'common.edit': 'Edit',
    'common.delete': 'Delete',
    'common.view': 'View'
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ar' ? 'en' : 'ar');
    document.documentElement.dir = language === 'ar' ? 'ltr' : 'rtl';
    document.documentElement.lang = language === 'ar' ? 'en' : 'ar';
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['ar']] || key;
  };

  React.useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};