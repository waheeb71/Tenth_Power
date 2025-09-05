import { Project, ContactMessage, SiteStats } from '../types';

export const mockProjects: Project[] = [
  {
    id: '1',
    title: 'مجمع الرياض التجاري الكبير',
    titleEn: 'Riyadh Grand Commercial Complex',
    description: 'تركيب واجهات زجاجية متطورة للمجمع التجاري بمساحة 15,000 متر مربع مع أنظمة تحكم ذكية وعزل حراري متقدم',
    descriptionEn: 'Installation of advanced glass facades for the commercial complex with an area of 15,000 square meters with smart control systems and advanced thermal insulation',
    category: 'glass',
    images: [
      'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
      'https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg'
    ],
    location: 'الرياض، حي العليا',
    locationEn: 'Riyadh, Al-Olaya District',
    completedDate: '2024-01-15',
    clientName: 'شركة الرياض للتطوير العقاري',
    projectValue: 2500000,
    duration: '8 أشهر',
    featured: true,
    status: 'completed',
    tags: ['واجهات زجاجية', 'أنظمة ذكية', 'عزل حراري', 'مجمع تجاري'],
    createdAt: '2023-05-10',
    updatedAt: '2024-01-15'
  },
  {
    id: '2',
    title: 'فيلا العائلة الملكية الفاخرة',
    titleEn: 'Luxury Royal Family Villa',
    description: 'تصميم وتركيب نوافذ وأبواب الألمنيوم الفاخرة مع عزل حراري وصوتي متقدم وتقنيات الأمان الحديثة',
    descriptionEn: 'Design and installation of luxury aluminum windows and doors with advanced thermal and acoustic insulation and modern security technologies',
    category: 'aluminum',
    images: [
      'https://images.pexels.com/photos/271667/pexels-photo-271667.jpeg',
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg'
    ],
    location: 'جدة، حي الشاطئ',
    locationEn: 'Jeddah, Beach District',
    completedDate: '2024-02-20',
    clientName: 'عائلة آل سعود',
    projectValue: 1800000,
    duration: '6 أشهر',
    featured: true,
    status: 'completed',
    tags: ['ألمنيوم فاخر', 'عزل متقدم', 'أنظمة أمان', 'فيلا ملكية'],
    createdAt: '2023-08-15',
    updatedAt: '2024-02-20'
  },
  {
    id: '3',
    title: 'مستشفى الملك فهد التخصصي',
    titleEn: 'King Fahd Specialist Hospital',
    description: 'إنجاز مشروع توسعة المستشفى مع جميع التشطيبات والمرافق الطبية المتخصصة وأنظمة التكييف المتقدمة',
    descriptionEn: 'Completion of hospital expansion project with all finishes and specialized medical facilities and advanced air conditioning systems',
    category: 'contracting',
    images: [
      'https://images.pexels.com/photos/1216544/pexels-photo-1216544.jpeg',
      'https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg'
    ],
    location: 'الدمام، الحي الطبي',
    locationEn: 'Dammam, Medical District',
    completedDate: '2023-12-10',
    clientName: 'وزارة الصحة السعودية',
    projectValue: 5000000,
    duration: '12 شهر',
    featured: true,
    status: 'completed',
    tags: ['مستشفى', 'توسعة', 'مرافق طبية', 'تكييف متقدم'],
    createdAt: '2022-12-01',
    updatedAt: '2023-12-10'
  },
  {
    id: '4',
    title: 'برج الأعمال المركزي',
    titleEn: 'Central Business Tower',
    description: 'تركيب واجهة زجاجية ذكية لبرج من 25 طابق مع أنظمة تحكم متطورة وتقنيات توفير الطاقة',
    descriptionEn: 'Installation of smart glass facade for a 25-story tower with advanced control systems and energy-saving technologies',
    category: 'glass',
    images: [
      'https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg'
    ],
    location: 'الرياض، حي الملك فهد',
    locationEn: 'Riyadh, King Fahd District',
    completedDate: '2023-11-30',
    clientName: 'مجموعة الأعمال السعودية',
    projectValue: 3200000,
    duration: '10 أشهر',
    featured: false,
    status: 'completed',
    tags: ['برج', 'واجهة ذكية', 'توفير طاقة', '25 طابق'],
    createdAt: '2023-01-15',
    updatedAt: '2023-11-30'
  },
  {
    id: '5',
    title: 'مصنع الصناعات الغذائية المتطور',
    titleEn: 'Advanced Food Industries Factory',
    description: 'تصميم وتنفيذ هياكل الألمنيوم للمصنع مع أنظمة التهوية الصناعية وحلول العزل المتخصصة',
    descriptionEn: 'Design and implementation of aluminum structures for the factory with industrial ventilation systems and specialized insulation solutions',
    category: 'aluminum',
    images: [
      'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg'
    ],
    location: 'الخبر، المنطقة الصناعية',
    locationEn: 'Khobar, Industrial Area',
    completedDate: '2023-09-15',
    clientName: 'شركة الصناعات الغذائية المتحدة',
    projectValue: 1500000,
    duration: '7 أشهر',
    featured: false,
    status: 'completed',
    tags: ['مصنع', 'تهوية صناعية', 'هياكل ألمنيوم', 'عزل متخصص'],
    createdAt: '2023-02-10',
    updatedAt: '2023-09-15'
  }
];

export const mockMessages: ContactMessage[] = [
  {
    id: '1',
    name: 'محمد أحمد العتيبي',
    email: 'mohamed.al-otaibi@example.com',
    phone: '+966501234567',
    service: 'glass',
    message: 'أرغب في الحصول على عرض سعر لتركيب واجهة زجاجية لمبنى تجاري جديد في الرياض. المبنى مكون من 5 طوابق ومساحة الواجهة حوالي 800 متر مربع.',
    read: false,
    replied: false,
    createdAt: '2024-01-20T10:30:00Z',
    ip: '192.168.1.1',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
  },
  {
    id: '2',
    name: 'فاطمة علي الشهري',
    email: 'fatima.alshehri@example.com',
    phone: '+966509876543',
    service: 'aluminum',
    message: 'مرحباً، أحتاج إلى تركيب نوافذ ألمنيوم لفيلا جديدة. الفيلا مكونة من دورين وتحتاج إلى 15 نافذة و3 أبواب. هل يمكنكم زيارة الموقع لأخذ المقاسات؟',
    read: true,
    replied: true,
    createdAt: '2024-01-19T14:45:00Z',
    ip: '192.168.1.2',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15'
  },
  {
    id: '3',
    name: 'عبدالله خالد المطيري',
    email: 'abdullah.almutairi@example.com',
    phone: '+966512345678',
    service: 'contracting',
    message: 'نخطط لبناء مجمع سكني يتكون من 4 مباني، كل مبنى 6 طوابق. نحتاج إلى مقاول عام للمشروع كاملاً. هل لديكم خبرة في المشاريع السكنية الكبيرة؟',
    read: false,
    replied: false,
    createdAt: '2024-01-18T09:15:00Z',
    ip: '192.168.1.3',
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
  }
];

export const mockStats: SiteStats = {
  totalProjects: 156,
  activeProjects: 23,
  completedProjects: 133,
  totalMessages: 47,
  unreadMessages: 8,
  monthlyVisitors: 12540,
  conversionRate: 15.8
};

export const serviceCategories = [
  {
    id: 'glass',
    nameAr: 'أعمال الزجاج',
    nameEn: 'Glass Works',
    descriptionAr: 'تركيب وصيانة جميع أنواع الزجاج المعماري والديكوري بأحدث التقنيات',
    descriptionEn: 'Installation and maintenance of all types of architectural and decorative glass with the latest technologies',
    icon: 'Shield',
    featured: true,
    order: 1
  },
  {
    id: 'aluminum',
    nameAr: 'أعمال الألمنيوم',
    nameEn: 'Aluminum Works',
    descriptionAr: 'تصنيع وتركيب هياكل الألمنيوم والنوافذ والأبواب بجودة عالية',
    descriptionEn: 'Manufacturing and installation of aluminum structures, windows and doors with high quality',
    icon: 'Settings',
    featured: true,
    order: 2
  },
  {
    id: 'contracting',
    nameAr: 'المقاولات العامة',
    nameEn: 'General Contracting',
    descriptionAr: 'إدارة وتنفيذ المشاريع الإنشائية من التخطيط حتى التسليم النهائي',
    descriptionEn: 'Management and execution of construction projects from planning to final delivery',
    icon: 'Building',
    featured: true,
    order: 3
  }
];