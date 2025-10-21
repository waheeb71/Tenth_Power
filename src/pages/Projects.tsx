import React, { useState } from 'react';
import { Calendar, MapPin, Star, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import SectionWithBackground from "../components/SectionWithBackground";
import { Helmet } from 'react-helmet-async';

interface Project {
  id: string;
  title: string;
  category: 'glass' | 'aluminum' | 'aluminum';
  description: string;
  image: string;
  location: string;
  date: string;
  rating: number;
  keywords: string[];
  seoTitle: string;
}

// مكون لتحسين عرض الصور
const OptimizedImage: React.FC<{
  src: string;
  alt: string;
  title: string;
  className?: string;
  onClick?: () => void;
}> = ({ src, alt, title, className = '', onClick }) => {
  return (
    <picture>
      <source srcSet={src} type="image/webp" />
      <source srcSet={src} type="image/jpeg" />
      <source srcSet={src} type="image/jpg" />
      <source srcSet={src} type="image/png" />
      <img
        src={src || '/images/logo.jpg'}
        alt={alt}
        title={title}
        loading="lazy"
        decoding="async"
        className={className}
        onClick={onClick}
        style={{ cursor: onClick ? 'pointer' : 'default' }}
      />
    </picture>
  );
};

// مكون Lightbox لعرض الصور بحجم كامل
const ImageLightbox: React.FC<{
  images: Project[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}> = ({ images, currentIndex, onClose, onNext, onPrev }) => {
  const currentProject = images[currentIndex];

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fadeIn">
      {/* زر الإغلاق */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="إغلاق"
      >
        <X className="w-6 h-6" />
      </button>

      {/* زر السابق */}
      <button
        onClick={onPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm hidden md:block"
        aria-label="الصورة السابقة"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      {/* زر التالي */}
      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm hidden md:block"
        aria-label="الصورة التالية"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* محتوى الصورة */}
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
        {/* الصورة */}
        <div className="relative w-full max-h-[70vh] flex items-center justify-center mb-6">
          <img
            src={currentProject.image}
            alt={currentProject.title}
            className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
          />
        </div>

        {/* معلومات المشروع */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-2xl w-full text-white">
          <h3 className="text-2xl font-bold mb-3">{currentProject.title}</h3>
          {currentProject.description && (
            <p className="text-white/90 mb-4 leading-relaxed">{currentProject.description}</p>
          )}
          <div className="flex flex-wrap gap-4 text-sm">
            {currentProject.location && (
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>{currentProject.location}</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>{currentProject.date}</span>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < currentProject.rating ? 'text-yellow-400 fill-current' : 'text-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* عداد الصور */}
        <div className="mt-4 text-white/70 text-sm">
          {currentIndex + 1} / {images.length}
        </div>

        {/* أزرار التنقل للموبايل */}
        <div className="flex gap-4 mt-4 md:hidden">
          <button
            onClick={onPrev}
            className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          >
            السابق
          </button>
          <button
            onClick={onNext}
            className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          >
            التالي
          </button>
        </div>
      </div>
    </div>
  );
};

// مكون Schema Markup للمشاريع
const ProjectSchema: React.FC<{ project: Project }> = ({ project }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.seoTitle,
    "creator": {
      "@type": "Organization",
      "name": "القوة العاشرة للزجاج والألمنيوم",
      "url": "https://stunning-bubblegum-f108c3.netlify.app",
      "description": "شركة رائدة في أعمال الزجاج والألمنيوم في المملكة العربية السعودية"
    },
    "image": {
      "@type": "ImageObject",
      "url": project.image,
      "description": project.description,
      "keywords": project.keywords.join(', ')
    },
    "description": project.description,
    "locationCreated": {
      "@type": "Place",
      "name": project.location,
      "addressCountry": "SA"
    },
    "dateCreated": project.date,
    "keywords": project.keywords.join(', '),
    "inLanguage": "ar"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

const Projects: React.FC = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects: Project[] = [
    {
      id: '1',
      title: 'اعمال زجاج سكريت واجهات القوة العاشرة',
      seoTitle: 'اعمال زجاج سكريت واجهات القوة العاشرة - الرياض 2024',
      category: 'glass',
      description: 'مشاريع زجاج سكريت واجهات عالية الجودة من شركة القوة العاشرة في الرياض - تركيب وصيانة زجاج المباني التجارية والسكنية بأحدث التقنيات والمعايير العالمية',
      image: '/images/al-quwwa-al-ashira-glass-facade-riyadh-2024.jpg',
      location: 'الرياض',
      date: '2024',
      rating: 5,
      keywords: ['القوة العاشرة', 'زجاج الرياض', 'واجهات زجاجية', 'زجاج سكريت', 'القوة العاشرة زجاج', 'شركة زجاج الرياض']
    },
    {
      id: '2',
      title: 'اعمال الومنيوم القوة العاشرة',
      seoTitle: 'اعمال الومنيوم القوة العاشرة - نوافذ وأبواب جدة 2024',
      category: 'aluminum',
      description: 'تصميم وتركيب نوافذ وأبواب الألمنيوم الفاخرة مع عزل حراري متقدم من شركة القوة العاشرة في جدة - حلول ألمنيوم مبتكرة للمباني الحديثة',
      image: '/images/al-quwwa-al-ashira-aluminum-jeddah-2024.jpeg',
      location: 'جدة',
      date: '2024',
      rating: 5,
      keywords: ['القوة العاشرة', 'الومنيوم جدة', 'نوافذ الومنيوم', 'أبواب الومنيوم', 'القوة العاشرة الومنيوم', 'شركة الومنيوم جدة']
    },
    {
      id: '3',
      title: 'مقاولات عامة القوة العاشرة',
      seoTitle: 'مقاولات عامة القوة العاشرة - مشاريع الدمام 2023',
      category: 'aluminum',
      description: 'مشاريع مقاولات عامة احترافية من شركة القوة العاشرة في الدمام - تنفيذ مشاريع البناء والتشييد بأعلى معايير الجودة والسلامة',
      image: '/images/al-quwwa-al-ashira-contracting-dammam-2023.jpeg',
      location: 'الدمام',
      date: '2023',
      rating: 5,
      keywords: ['القوة العاشرة', 'مقاولات الدمام', 'مقاولات عامة', 'بناء وتشييد', 'القوة العاشرة مقاولات', 'شركة مقاولات الدمام']
    },
    {
      id: '4',
      title: 'اعمال زجاج متقدمة القوة العاشرة',
      seoTitle: 'اعمال زجاج متقدمة القوة العاشرة - تقنيات حديثة الرياض 2023',
      category: 'glass',
      description: 'تطبيق أحدث تقنيات الزجاج المعماري من شركة القوة العاشرة - زجاج ذكي وحلول زجاجية مبتكرة للمباني العصرية في الرياض',
      image: '/images/al-quwwa-al-ashira-advanced-glass-riyadh-2023.jpeg',
      location: 'الرياض',
      date: '2023',
      rating: 5,
      keywords: ['القوة العاشرة', 'زجاج متقدم', 'زجاج ذكي', 'تقنيات زجاج', 'القوة العاشرة زجاج', 'زجاج معماري الرياض']
    },
    {
      id: '5',
      title: 'اعمال الومنيوم والاستانلس ستيل القوة العاشرة',
      seoTitle: 'اعمال الومنيوم والاستانلس ستيل القوة العاشرة - درج فاخر الخبر 2023',
      category: 'aluminum',
      description: 'تنفيذ وصناعة درج ألومنيوم متين مع درابزين أنيق من الستانلس ستيل من شركة القوة العاشرة، بجودة عالية وتشطيب احترافي يناسب جميع المساحات في الخبر',
      image: '/images/al-quwwa-al-ashira-stainless-steel-khobar-2023.jpeg',
      location: 'الخبر',
      date: '2023',
      rating: 4,
      keywords: ['القوة العاشرة', 'استانلس ستيل', 'درج الومنيوم', 'درابزين', 'القوة العاشرة معادن', 'شركة معادن الخبر']
    },
    {
      id: '6',
      title: 'مجمع سكني متكامل',
      seoTitle: 'مجمع سكني متكامل - مكة المكرمة',
      category: 'aluminum',
      description: 'تطوير مجمع سكني متكامل بوحدات سكنية عصرية',
      image: '/images/al-quwwa-al-ashira-residential-makkah-2022.jpeg',
      location: 'مكة المكرمة',
      date: '2022',
      rating: 5,
      keywords: ['القوة العاشرة', 'مجمع سكني', 'وحدات سكنية', 'مكة المكرمة', 'القوة العاشرة إسكان', 'تطوير عقاري مكة']
    },
    {
      id: '7',
      title: 'مشروع زجاج خاص القوة العاشرة',
      seoTitle: 'مشروع زجاج خاص القوة العاشرة - حلول زجاجية مخصصة الرياض 2025',
      category: 'glass',
      description: 'تصميم وتنفيذ مشاريع زجاج فريدة تلبي احتياجات العملاء الخاصة في الرياض',
      image: '/images/al-quwwa-al-ashira-custom-glass-riyadh-2025-1.jpeg',
      location: 'الرياض',
      date: '2025',
      rating: 5,
      keywords: ['القوة العاشرة', 'زجاج مخصص', 'حلول زجاجية', 'تصميم زجاج', 'القوة العاشرة زجاج خاص', 'زجاج فريد الرياض']
    },
    {
      id: '8',
      title: 'واجهات زجاجية حديثة القوة العاشرة',
      seoTitle: 'واجهات زجاجية حديثة القوة العاشرة - تصاميم عصرية الرياض 2025',
      category: 'glass',
      description: 'تصميم وتنفيذ واجهات زجاجية بتقنيات حديثة من شركة القوة العاشرة - واجهات عصرية تجمع بين الجمال والوظائف المتقدمة في الرياض',
      image: '/images/al-quwwa-al-ashira-modern-facade-riyadh-2025-2.jpeg',
      location: 'الرياض',
      date: '2025',
      rating: 5,
      keywords: ['القوة العاشرة', 'واجهات حديثة', 'واجهات زجاجية', 'تصاميم عصرية', 'القوة العاشرة واجهات', 'زجاج معماري حديث']
    },
    {
      id: '9',
      title: 'أنظمة زجاج ذكية القوة العاشرة',
      seoTitle: 'أنظمة زجاج ذكية القوة العاشرة - تكنولوجيا متقدمة الرياض 2025',
      category: 'glass',
      description: 'تركيب أنظمة زجاج ذكية ومتطورة من شركة القوة العاشرة - زجاج يتفاعل مع البيئة ويوفر كفاءة في الطاقة والراحة في الرياض',
      image: '/images/al-quwwa-al-ashira-smart-glass-riyadh-2025-3.jpg',
      location: 'الرياض',
      date: '2025',
      rating: 5,
      keywords: ['القوة العاشرة', 'زجاج ذكي', 'أنظمة زجاج', 'تكنولوجيا زجاج', 'القوة العاشرة تقنية', 'زجاج تفاعلي الرياض']
    },
    {
      id: '10',
      title: 'حلول زجاج توفير الطاقة القوة العاشرة',
      seoTitle: 'حلول زجاج توفير الطاقة القوة العاشرة - زجاج صديق البيئة الرياض 2025',
      category: 'glass',
      description: 'زجاج عازل ومقاوم للحرارة من شركة القوة العاشرة - حلول زجاجية صديقة للبيئة تساهم في توفير الطاقة وتحسين كفاءة المباني في الرياض',
      image: '/images/al-quwwa-al-ashira-energy-glass-riyadh-2025-4.jpg',
      location: 'الرياض',
      date: '2025',
      rating: 4,
      keywords: ['القوة العاشرة', 'زجاج عازل', 'توفير طاقة', 'زجاج صديق البيئة', 'القوة العاشرة بيئة', 'عزل حراري زجاج']
    },
    {
      id: '11',
      title: 'زجاج أمان وحماية',
      seoTitle: 'زجاج أمان وحماية - الرياض',
      category: 'glass',
      description: 'حلول زجاج أمان متقدمة للحماية والسلامة',
      image: '/images/al-quwwa-al-ashira-security-glass-riyadh-2025-5.jpg',
      location: 'الرياض',
      date: '2025',
      rating: 4,
      keywords: ['القوة العاشرة', 'زجاج أمان', 'زجاج حماية', 'أمان مباني', 'القوة العاشرة أمان', 'زجاج مقاوم كسر']
    },
    {
      id: '12',
      title: 'واجهات تجارية زجاجية',
      seoTitle: 'واجهات تجارية زجاجية - الرياض',
      category: 'glass',
      description: 'تصميم واجهات زجاجية للمحلات والمباني التجارية',
      image: '/images/al-quwwa-al-ashira-commercial-glass-riyadh-2025-6.jpg',
      location: 'الرياض',
      date: '2025',
      rating: 5,
      keywords: ['القوة العاشرة', 'واجهات تجارية', 'زجاج تجاري', 'مباني تجارية', 'القوة العاشرة تجاري', 'واجهات محلات']
    },
    {
      id: '13',
      title: 'أبواب زجاجية أوتوماتيكية',
      seoTitle: 'أبواب زجاجية أوتوماتيكية - الرياض',
      category: 'glass',
      description: 'تركيب أبواب زجاجية أوتوماتيكية من شركة القوة العاشرة - أبواب ذكية تعمل بأحدث التقنيات لسهولة الدخول والخروج في الرياض',
      image: '/images/al-quwwa-al-ashira-automatic-doors-riyadh-2025-7.jpg',
      location: 'الرياض',
      date: '2025',
      rating: 4,
      keywords: ['القوة العاشرة', 'أبواب أوتوماتيكية', 'أبواب زجاجية', 'تقنية أبواب', 'القوة العاشرة أبواب', 'أبواب ذكية']
    },
    {
      id: '14',
      title: 'نوافذ عازلة للصوت والحرارة',
      seoTitle: 'نوافذ عازلة - الرياض',
      category: 'glass',
      description: 'نوافذ عازلة للصوت والحرارة بتقنيات متقدمة',
      image: '/images/al-quwwa-al-ashira-insulated-windows-riyadh-2025-8.jpg',
      location: 'الرياض',
      date: '2025',
      rating: 4,
      keywords: ['القوة العاشرة', 'نوافذ عازلة', 'عزل صوتي', 'عزل حراري', 'القوة العاشرة نوافذ', 'نوافذ زجاجية عازلة']
    },
    {
      id: '15',
      title: 'زجاج ديكوري فني',
      seoTitle: 'زجاج ديكوري فني - الرياض',
      category: 'glass',
      description: 'تصاميم زجاج ديكورية فنية راقية',
      image: '/images/al-quwwa-al-ashira-decorative-glass-riyadh-2025-9.jpg',
      location: 'الرياض',
      date: '2025',
      rating: 5,
      keywords: ['القوة العاشرة', 'زجاج ديكوري', 'زجاج فني', 'تصاميم زجاج', 'القوة العاشرة ديكور', 'زجاج راقي']
    },
    {
      id: '16',
      title: 'أسقف زجاجية شفافة',
      seoTitle: 'أسقف زجاجية - الرياض',
      category: 'glass',
      description: 'أسقف زجاجية تسمح بدخول الضوء الطبيعي',
      image: '/images/al-quwwa-al-ashira-glass-ceiling-riyadh-2025-10.jpg',
      location: 'الرياض',
      date: '2025',
      rating: 4,
      keywords: ['القوة العاشرة', 'أسقف زجاجية', 'زجاج شفاف', 'إضاءة طبيعية', 'القوة العاشرة أسقف', 'سقف زجاج']
    },
    {
      id: '17',
      title: 'حوائط وفواصل زجاجية',
      seoTitle: 'فواصل زجاجية - الرياض',
      category: 'glass',
      description: 'فواصل وحوائط زجاجية عصرية',
      image: '/images/al-quwwa-al-ashira-glass-partitions-riyadh-2025-11.jpg',
      location: 'الرياض',
      date: '2025',
      rating: 5,
      keywords: ['القوة العاشرة', 'حوائط زجاجية', 'فواصل زجاج', 'تقسيم مساحات', 'القوة العاشرة فواصل', 'جدران زجاج']
    },
    {
      id: '18',
      title: 'زجاج مقاوم للعوامل الجوية',
      seoTitle: 'زجاج مقاوم للطقس - الرياض',
      category: 'glass',
      description: 'زجاج متين مقاوم للعوامل الجوية القاسية',
      image: '/images/al-quwwa-al-ashira-weather-resistant-glass-riyadh-2025-12.jpg',
      location: 'الرياض',
      date: '2025',
      rating: 5,
      keywords: ['القوة العاشرة', 'زجاج مقاوم طقس', 'زجاج متين', 'مقاومة عوامل جوية', 'القوة العاشرة مقاومة', 'زجاج قوي']
    },
    {
      id: '19',
      title: 'مشروع زجاج متكامل القوة العاشرة',
      seoTitle: 'مشروع زجاج متكامل القوة العاشرة - حلول شاملة الرياض 2025',
      category: 'glass',
      description: 'مشروع زجاج شامل بحلول متكاملة',
      image: '/images/al-quwwa-al-ashira-integrated-glass-riyadh-2025-13.jpg',
      location: 'الرياض',
      date: '2025',
      rating: 5,
      keywords: ['القوة العاشرة', 'مشروع زجاج متكامل', 'حلول شاملة', 'زجاج شامل', 'القوة العاشرة متكامل', 'مشروع زجاج كامل']
    },
    {
      id: '20',
      title: 'تطبيقات زجاج مبتكرة',
      seoTitle: 'زجاج مبتكر - الرياض',
      category: 'glass',
      description: 'تطبيقات زجاج مبتكرة وحديثة',
      image: '/images/al-quwwa-al-ashira-innovative-glass-riyadh-2025-14.jpg',
      location: 'الرياض',
      date: '2025',
      rating: 5,
      keywords: ['القوة العاشرة', 'زجاج مبتكر', 'تطبيقات زجاج', 'ابتكار زجاج', 'القوة العاشرة ابتكار', 'زجاج متطور']
    },
    {
      id: '21',
      title: 'مشروع إنشائي حديث',
      seoTitle: 'مشروع إنشائي - الرياض',
      category: 'aluminum',
      description: 'مشروع إنشائي بتقنيات بناء حديثة',
      image: '/images/al-quwwa-al-ashira-modern-construction-riyadh-2025-1.jpg',
      location: 'الرياض',
      date: '2025',
      rating: 4,
      keywords: ['القوة العاشرة', 'مشروع إنشائي', 'بناء متطور', 'تقنيات حديثة', 'القوة العاشرة بناء', 'إنشاءات الرياض']
    },
    {
      id: '22',
      title: 'تطوير عقاري فاخر',
      seoTitle: 'تطوير عقاري فاخر - الرياض',
      category: 'aluminum',
      description: 'مشاريع تطوير عقاري راقية',
      image: '/images/al-quwwa-al-ashira-luxury-development-riyadh-2025-2.jpg',
      location: 'الرياض',
      date: '2025',
      rating: 5,
      keywords: ['القوة العاشرة', 'تطوير عقاري', 'مشاريع فاخرة', 'عقارات راقية', 'القوة العاشرة عقاري', 'تطوير فاخر']
    },
    {
      id: '23',
      title: 'مركز تجاري متكامل',
      seoTitle: 'مركز تجاري - جدة',
      category: 'aluminum',
      description: 'مجمع تجاري حديث بمرافق متكاملة',
      image: '/images/al-quwwa-al-ashira-commercial-center-jeddah-2025-3.jpg',
      location: 'جدة',
      date: '2025',
      rating: 5,
      keywords: ['القوة العاشرة', 'مجمع تجاري', 'مركز تسوق', 'مباني تجارية', 'القوة العاشرة تجاري', 'تطوير جدة']
    },
    {
      id: '24',
      title: 'أعمال الومنيوم متطورة القوة العاشرة',
      seoTitle: 'أعمال الومنيوم متطورة القوة العاشرة - تقنيات حديثة الرياض 2025',
      category: 'aluminum',
      description: 'أعمال الومنيوم بتقنيات متطورة من شركة القوة العاشرة - حلول الومنيوم مبتكرة تجمع بين الجودة والتصميم الحديث في الرياض',
      image: '/images/al-quwwa-al-ashira-advanced-aluminum-riyadh-2025-4.jpg',
      location: 'الرياض',
      date: '2025',
      rating: 5,
      keywords: ['القوة العاشرة', 'الومنيوم متطور', 'تقنيات الومنيوم', 'حلول الومنيوم', 'القوة العاشرة الومنيوم', 'الومنيوم حديث']
    },
    {
      id: '25',
      title: 'مشاريع بنية تحتية',
      seoTitle: 'بنية تحتية - الرياض',
      category: 'aluminum',
      description: 'تطوير بنية تحتية أساسية',
      image: '/images/al-quwwa-al-ashira-infrastructure-riyadh-2025-5.jpg',
      location: 'الرياض',
      date: '2025',
      rating: 5,
      keywords: ['القوة العاشرة', 'بنية تحتية', 'مشاريع أساسية', 'تطوير بنية', 'القوة العاشرة بنية', 'مشاريع حيوية']
    },
    {
      id: '26',
      title: 'مباني خضراء مستدامة',
      seoTitle: 'مباني خضراء - الرياض',
      category: 'aluminum',
      description: 'بناء مستدام صديق للبيئة',
      image: '/images/al-quwwa-al-ashira-green-building-riyadh-2025-6.jpg',
      location: 'الرياض',
      date: '2025',
      rating: 4,
      keywords: ['القوة العاشرة', 'مباني خضراء', 'بناء مستدام', 'صديق البيئة', 'القوة العاشرة بيئة', 'مباني كفؤة طاقة']
    },
    {
      id: '27',
      title: 'مجمعات سكنية عصرية',
      seoTitle: 'مجمعات سكنية - الرياض',
      category: 'aluminum',
      description: 'مجمعات سكنية بتصاميم حديثة',
      image: '/images/al-quwwa-al-ashira-residential-complex-riyadh-2025-7.jpg',
      location: 'الرياض',
      date: '2025',
      rating: 5,
      keywords: ['القوة العاشرة', 'مجمعات سكنية', 'وحدات سكنية', 'تشييد سكني', 'القوة العاشرة سكن', 'مساكن عصرية']
    },
    {
      id: '28',
      title: 'مشاريع إدارية متكاملة القوة العاشرة',
      seoTitle: 'مباني إدارية - الرياض',
      category: 'aluminum',
      description: 'مباني مكاتب حديثة',
      image: '/images/al-quwwa-al-ashira-office-buildings-riyadh-2025-8.jpg',
      location: 'الرياض',
      date: '2025',
      rating: 5,
      keywords: ['القوة العاشرة', 'مشاريع إدارية', 'مباني مكاتب', 'مكاتب حديثة', 'القوة العاشرة إداري', 'بيئة عمل']
    },
    {
      id: '29',
      title: 'مرافق ترفيهية متطورة القوة العاشرة',
      seoTitle: 'مرافق ترفيهية - الرياض',
      category: 'aluminum',
      description: 'مراكز ترفيهية ورياضية',
      image: '/images/al-quwwa-al-ashira-entertainment-facilities-riyadh-2025-9.jpg',
      location: 'الرياض',
      date: '2025',
      rating: 5,
      keywords: ['القوة العاشرة', 'مرافق ترفيهية', 'مراكز ترفيه', 'مرافق رياضية', 'القوة العاشرة ترفيه', 'مراكز حديثة']
    },
    {
      id: '30',
      title: 'مشاريع تعليمية رائدة القوة العاشرة',
      seoTitle: 'مشاريع تعليمية - الرياض',
      category: 'aluminum',
      description: 'مدارس ومرافق تعليمية حديثة',
      image: '/images/al-quwwa-al-ashira-educational-projects-riyadh-2025-10.jpg',
      location: 'الرياض',
      date: '2025',
      rating: 5,
      keywords: ['القوة العاشرة', 'مشاريع تعليمية', 'مدارس حديثة', 'مرافق تعليمية', 'القوة العاشرة تعليم', 'مباني تعليمية']
    },
    {
      id: '31',
      title: 'مرافق صحية متطورة',
      seoTitle: 'مرافق صحية - الرياض',
      category: 'aluminum',
      description: 'مستشفيات ومراكز طبية حديثة',
      image: '/images/al-quwwa-al-ashira-healthcare-facilities-riyadh-2025-11.jpg',
      location: 'الرياض',
      date: '2025',
      rating: 5,
      keywords: ['القوة العاشرة', 'مرافق صحية', 'مستشفيات حديثة', 'مشاريع طبية', 'القوة العاشرة صحة', 'مباني طبية']
    },
    {
      id: '32',
      title: 'مشاريع متنوعة شاملة القوة العاشرة',
      seoTitle: 'مشاريع متنوعة شاملة القوة العاشرة - حلول متكاملة الرياض 2025',
      category: 'aluminum',
      description: 'مجموعة متنوعة من المشاريع المتكاملة',
      image: '/images/al-quwwa-al-ashira-diverse-projects-riyadh-2025-13.jpg',
      location: 'الرياض',
      date: '2025',
      rating: 4,
      keywords: ['القوة العاشرة', 'مشاريع متنوعة', 'حلول شاملة', 'مشاريع متكاملة', 'القوة العاشرة متنوع', 'خدمات شاملة']
    },
    {
      id: '33',
      title: 'مشاريع القوة العاشرة المتنوعة',
      seoTitle: 'مشاريع متنوعة شاملة القوة العاشرة - حلول متكاملة الرياض 2025',
      category: 'aluminum',
      description: 'مشاريع متنوعة بجودة عالية',
      image: '/images/al-quwwa-al-ashira-diverse-projects-riyadh-2025-14.jpeg',
      location: 'الرياض',
      date: '2025',
      rating: 4,
      keywords: ['القوة العاشرة', 'مشاريع متنوعة', 'حلول شاملة', 'مشاريع متكاملة', 'القوة العاشرة متنوع', 'خدمات شاملة']
    },
    {
      id: '34',
      title: 'مشاريع القوة العاشرة المتنوعة',
      seoTitle: 'مشاريع متنوعة شاملة القوة العاشرة - حلول متكاملة الرياض 2025',
      category: 'aluminum',
      description: 'تنفيذ مشاريع بمعايير عالية',
      image: '/images/al-quwwa-al-ashira-diverse-projects-riyadh-2025-15.jpeg',
      location: 'الرياض',
      date: '2025',
      rating: 4,
      keywords: ['القوة العاشرة', 'مشاريع متنوعة', 'حلول شاملة', 'مشاريع متكاملة', 'القوة العاشرة متنوع', 'خدمات شاملة']
    },
    {
      id: '35',
      title: 'مشاريع القوة العاشرة المتنوعة',
      seoTitle: 'مشاريع متنوعة شاملة القوة العاشرة - حلول متكاملة الرياض 2025',
      category: 'aluminum',
      description: 'خدمات شاملة ومتكاملة',
      image: '/images/al-quwwa-al-ashira-diverse-projects-riyadh-2025-16.jpeg',
      location: 'الرياض',
      date: '2025',
      rating: 4,
      keywords: ['القوة العاشرة', 'مشاريع متنوعة', 'حلول شاملة', 'مشاريع متكاملة', 'القوة العاشرة متنوع', 'خدمات شاملة']
    },
    {
      id: '36',
      title: 'مشاريع القوة العاشرة المتنوعة',
      seoTitle: 'مشاريع متنوعة شاملة القوة العاشرة - حلول متكاملة الرياض 2025',
      category: 'aluminum',
      description: 'أعمال احترافية متميزة',
      image: '/images/al-quwwa-al-ashira-diverse-projects-riyadh-2025-17.jpeg',
      location: 'الرياض',
      date: '2025',
      rating: 4,
      keywords: ['القوة العاشرة', 'مشاريع متنوعة', 'حلول شاملة', 'مشاريع متكاملة', 'القوة العاشرة متنوع', 'خدمات شاملة']
    },
    {
      id: '37',
      title: 'مشاريع القوة العاشرة المتنوعة',
      seoTitle: 'مشاريع متنوعة - الرياض',
      category: 'aluminum',
      description: 'تنفيذ بأعلى معايير الجودة',
      image: '/images/al-quwwa-al-ashira-diverse-projects-riyadh-2025-18.jpeg',
      location: 'الرياض',
      date: '2025',
      rating: 5,
      keywords: ['القوة العاشرة', 'مشاريع متنوعة', 'حلول شاملة', 'مشاريع متكاملة', 'القوة العاشرة متنوع', 'خدمات شاملة']
    },
    {
      id: '38',
      title: 'أعمال متميزة',
      seoTitle: 'أعمال متميزة - الرياض',
      category: 'aluminum',
      description: 'مشاريع بجودة استثنائية',
      image: '/images/al-quwwa-al-ashira-diverse-projects-riyadh-2025-19.jpeg',
      location: 'الرياض',
      date: '2025',
      rating: 4,
      keywords: ['القوة العاشرة', 'مشاريع متنوعة', 'حلول شاملة', 'مشاريع متكاملة', 'القوة العاشرة متنوع', 'خدمات شاملة']
    },
    {
      id: '39',
      title: 'مشاريع احترافية',
      seoTitle: 'مشاريع احترافية - الرياض',
      category: 'aluminum',
      description: 'تنفيذ احترافي متقن',
      image: '/images/al-quwwa-al-ashira-diverse-projects-riyadh-2025-20.jpeg',
      location: 'الرياض',
      date: '2025',
      rating: 4,
      keywords: ['القوة العاشرة', 'مشاريع متنوعة', 'حلول شاملة', 'مشاريع متكاملة', 'القوة العاشرة متنوع', 'خدمات شاملة']
    },
    {
      id: '40',
      title: 'أعمال مميزة',
      seoTitle: 'أعمال مميزة',
      category: 'aluminum',
      description: 'مشاريع فريدة ومميزة',
      image: '/images/al-quwwa-al-ashira-diverse-projects-riyadh-2025-21.jpeg',
      location: '',
      date: '2025',
      rating: 4,
      keywords: ['القوة العاشرة', 'مشاريع متنوعة', 'حلول شاملة', 'مشاريع متكاملة', 'القوة العاشرة متنوع', 'خدمات شاملة']
    },
    {
      id: '41',
      title: 'تنفيذ متقن',
      seoTitle: 'تنفيذ متقن',
      category: 'aluminum',
      description: 'دقة في التنفيذ والإنجاز',
      image: '/images/al-quwwa-al-ashira-diverse-projects-riyadh-2025-22.jpeg',
      location: '',
      date: '2025',
      rating: 4,
      keywords: ['القوة العاشرة', 'مشاريع متنوعة', 'حلول شاملة', 'مشاريع متكاملة', 'القوة العاشرة متنوع', 'خدمات شاملة']
    },
    {
      id: '42',
      title: 'جودة عالية',
      seoTitle: 'جودة عالية',
      category: 'aluminum',
      description: 'التزام بأعلى معايير الجودة',
      image: '/images/al-quwwa-al-ashira-diverse-projects-riyadh-2025-23.jpeg',
      location: '',
      date: '2025',
      rating: 4,
      keywords: ['القوة العاشرة', 'مشاريع متنوعة', 'حلول شاملة', 'مشاريع متكاملة', 'القوة العاشرة متنوع', 'خدمات شاملة']
    },
    {
      id: '43',
      title: 'أعمال متنوعة 1',
      seoTitle: 'أعمال متنوعة',
      category: 'aluminum',
      description: 'تنوع في الخدمات والتنفيذ',
      image: '/images/IMG-20251020-WA0002.jpg',
      location: '',
      date: '2025',
      rating: 4,
      keywords: ['القوة العاشرة', 'مشاريع متنوعة', 'حلول شاملة', 'مشاريع متكاملة', 'القوة العاشرة متنوع', 'خدمات شاملة']
    },
    {
      id: '44',
      title: 'أعمال متنوعة 2',
      seoTitle: 'أعمال متنوعة',
      category: 'aluminum',
      description: 'خدمات متكاملة',
      image: '/images/IMG-20251020-WA0003.jpg',
      location: '',
      date: '2025',
      rating: 4,
      keywords: ['القوة العاشرة', 'مشاريع متنوعة', 'حلول شاملة', 'مشاريع متكاملة', 'القوة العاشرة متنوع', 'خدمات شاملة']
    },
    {
      id: '45',
      title: 'أعمال متنوعة 3',
      seoTitle: 'أعمال متنوعة',
      category: 'aluminum',
      description: 'تنفيذ شامل ومتكامل',
      image: '/images/IMG-20251020-WA0004.jpg',
      location: '',
      date: '2025',
      rating: 4,
      keywords: ['القوة العاشرة', 'مشاريع متنوعة', 'حلول شاملة', 'مشاريع متكاملة', 'القوة العاشرة متنوع', 'خدمات شاملة']
    },
    {
      id: '46',
      title: 'أعمال متنوعة 4',
      seoTitle: 'أعمال متنوعة',
      category: 'aluminum',
      description: 'مشاريع بجودة عالية',
      image: '/images/IMG-20251020-WA0005.jpg',
      location: '',
      date: '2025',
      rating: 4,
      keywords: ['القوة العاشرة', 'مشاريع متنوعة', 'حلول شاملة', 'مشاريع متكاملة', 'القوة العاشرة متنوع', 'خدمات شاملة']
    },
    {
      id: '47',
      title: 'أعمال متنوعة 5',
      seoTitle: 'أعمال متنوعة',
      category: 'aluminum',
      description: 'إنجازات متميزة',
      image: '/images/IMG-20251020-WA0006.jpg',
      location: '',
      date: '2025',
      rating: 4,
      keywords: ['القوة العاشرة', 'مشاريع متنوعة', 'حلول شاملة', 'مشاريع متكاملة', 'القوة العاشرة متنوع', 'خدمات شاملة']
    },
    {
      id: '48',
      title: 'أعمال متنوعة 6',
      seoTitle: 'أعمال متنوعة',
      category: 'aluminum',
      description: 'تنفيذ احترافي',
      image: '/images/IMG-20251020-WA0007.jpg',
      location: '',
      date: '2025',
      rating: 4,
      keywords: ['القوة العاشرة', 'مشاريع متنوعة', 'حلول شاملة', 'مشاريع متكاملة', 'القوة العاشرة متنوع', 'خدمات شاملة']
    },
    {
      id: '49',
      title: 'أعمال متنوعة 7',
      seoTitle: 'أعمال متنوعة',
      category: 'aluminum',
      description: 'مشاريع متكاملة',
      image: '/images/IMG-20251020-WA0008.jpg',
      location: '',
      date: '2025',
      rating: 4,
      keywords: ['القوة العاشرة', 'مشاريع متنوعة', 'حلول شاملة', 'مشاريع متكاملة', 'القوة العاشرة متنوع', 'خدمات شاملة']
    },
    {
      id: '50',
      title: 'أعمال متنوعة 8',
      seoTitle: 'أعمال متنوعة',
      category: 'aluminum',
      description: 'خدمات شاملة',
      image: '/images/IMG-20251020-WA0009.jpg',
      location: '',
      date: '2025',
      rating: 4,
      keywords: ['القوة العاشرة', 'مشاريع متنوعة', 'حلول شاملة', 'مشاريع متكاملة', 'القوة العاشرة متنوع', 'خدمات شاملة']
    },
    {
      id: '51',
      title: 'أعمال متنوعة 9',
      seoTitle: 'أعمال متنوعة',
      category: 'aluminum',
      description: 'تنفيذ بجودة عالية',
      image: '/images/IMG-20251020-WA0010.jpg',
      location: '',
      date: '2025',
      rating: 4,
      keywords: ['القوة العاشرة', 'مشاريع متنوعة', 'حلول شاملة', 'مشاريع متكاملة', 'القوة العاشرة متنوع', 'خدمات شاملة']
    },
    {
      id: '52',
      title: 'أعمال متنوعة 10',
      seoTitle: 'أعمال متنوعة',
      category: 'aluminum',
      description: 'إنجازات متميزة',
      image: '/images/IMG-20251020-WA0011.jpg',
      location: '',
      date: '2025',
      rating: 4,
      keywords: ['القوة العاشرة', 'مشاريع متنوعة', 'حلول شاملة', 'مشاريع متكاملة', 'القوة العاشرة متنوع', 'خدمات شاملة']
    },
    {
      id: '53',
      title: 'أعمال متنوعة 11',
      seoTitle: 'أعمال متنوعة',
      category: 'aluminum',
      description: 'مشاريع احترافية',
      image: '/images/IMG-20251020-WA0012.jpg',
      location: '',
      date: '2025',
      rating: 4,
      keywords: ['القوة العاشرة', 'مشاريع متنوعة', 'حلول شاملة', 'مشاريع متكاملة', 'القوة العاشرة متنوع', 'خدمات شاملة']
    },
    {
      id: '54',
      title: 'أعمال متنوعة 12',
      seoTitle: 'أعمال متنوعة',
      category: 'aluminum',
      description: 'تنفيذ متقن',
      image: '/images/IMG-20251020-WA0013.jpg',
      location: '',
      date: '2025',
      rating: 4,
      keywords: ['القوة العاشرة', 'مشاريع متنوعة', 'حلول شاملة', 'مشاريع متكاملة', 'القوة العاشرة متنوع', 'خدمات شاملة']
    },
    {
      id: '55',
      title: 'أعمال متنوعة 13',
      seoTitle: 'أعمال متنوعة',
      category: 'aluminum',
      description: 'جودة استثنائية',
      image: '/images/IMG-20251020-WA0014.jpg',
      location: '',
      date: '2025',
      rating: 4,
      keywords: ['القوة العاشرة', 'مشاريع متنوعة', 'حلول شاملة', 'مشاريع متكاملة', 'القوة العاشرة متنوع', 'خدمات شاملة']
    },
    {
      id: '56',
      title: 'أعمال متنوعة 14',
      seoTitle: 'أعمال متنوعة',
      category: 'aluminum',
      description: 'خدمات متميزة',
      image: '/images/IMG-20251020-WA0015.jpg',
      location: '',
      date: '2025',
      rating: 4,
      keywords: ['القوة العاشرة', 'مشاريع متنوعة', 'حلول شاملة', 'مشاريع متكاملة', 'القوة العاشرة متنوع', 'خدمات شاملة']
    },
    {
      id: '57',
      title: 'أعمال متنوعة 15',
      seoTitle: 'أعمال متنوعة',
      category: 'aluminum',
      description: 'تنفيذ شامل',
      image: '/images/IMG-20251020-WA0016.jpg',
      location: '',
      date: '2025',
      rating: 4,
      keywords: ['القوة العاشرة', 'مشاريع متنوعة', 'حلول شاملة', 'مشاريع متكاملة', 'القوة العاشرة متنوع', 'خدمات شاملة']
    },
    {
      id: '58',
      title: 'أعمال متنوعة 16',
      seoTitle: 'أعمال متنوعة',
      category: 'aluminum',
      description: 'مشاريع متطورة',
      image: '/images/IMG-20251020-WA0017.jpg',
      location: '',
      date: '2025',
      rating: 4,
      keywords: ['القوة العاشرة', 'مشاريع متنوعة', 'حلول شاملة', 'مشاريع متكاملة', 'القوة العاشرة متنوع', 'خدمات شاملة']
    },
    {
      id: '59',
      title: 'أعمال متنوعة 17',
      seoTitle: 'أعمال متنوعة',
      category: 'aluminum',
      description: 'إنجازات مميزة',
      image: '/images/IMG-20251020-WA0018.jpg',
      location: '',
      date: '2025',
      rating: 4,
      keywords: ['القوة العاشرة', 'مشاريع متنوعة', 'حلول شاملة', 'مشاريع متكاملة', 'القوة العاشرة متنوع', 'خدمات شاملة']
    },
    {
      id: '60',
      title: 'أعمال متنوعة 18',
      seoTitle: 'أعمال متنوعة',
      category: 'aluminum',
      description: 'تنفيذ بمعايير عالية',
      image: '/images/IMG-20251020-WA0019.jpg',
      location: '',
      date: '2025',
      rating: 4,
      keywords: ['القوة العاشرة', 'مشاريع متنوعة', 'حلول شاملة', 'مشاريع متكاملة', 'القوة العاشرة متنوع', 'خدمات شاملة']
    },
    {
      id: '61',
      title: 'أعمال متنوعة 19',
      seoTitle: 'أعمال متنوعة',
      category: 'aluminum',
      description: 'خدمات احترافية',
      image: '/images/IMG-20251020-WA0020.jpg',
      location: '',
      date: '2025',
      rating: 4,
      keywords: ['القوة العاشرة', 'مشاريع متنوعة', 'حلول شاملة', 'مشاريع متكاملة', 'القوة العاشرة متنوع', 'خدمات شاملة']
    },
    {
      id: '62',
      title: 'أعمال متنوعة 20',
      seoTitle: 'أعمال متنوعة',
      category: 'aluminum',
      description: 'مشاريع بجودة فائقة',
      image: '/images/IMG-20251020-WA0021.jpg',
      location: '',
      date: '2025',
      rating: 4,
      keywords: ['القوة العاشرة', 'مشاريع متنوعة', 'حلول شاملة', 'مشاريع متكاملة', 'القوة العاشرة متنوع', 'خدمات شاملة']
    },
    {
      id: '63',
      title: 'أعمال متنوعة 21',
      seoTitle: 'أعمال متنوعة',
      category: 'aluminum',
      description: 'تنفيذ دقيق ومتقن',
      image: '/images/IMG-20251020-WA0022.jpg',
      location: '',
      date: '2025',
      rating: 4,
      keywords: ['القوة العاشرة', 'مشاريع متنوعة', 'حلول شاملة', 'مشاريع متكاملة', 'القوة العاشرة متنوع', 'خدمات شاملة']
    },
    {
      id: '64',
      title: 'أعمال متنوعة 22',
      seoTitle: 'أعمال متنوعة',
      category: 'aluminum',
      description: 'إنجازات شاملة',
      image: '/images/IMG-20251020-WA0023.jpg',
      location: '',
      date: '2025',
      rating: 4,
      keywords: ['القوة العاشرة', 'مشاريع متنوعة', 'حلول شاملة', 'مشاريع متكاملة', 'القوة العاشرة متنوع', 'خدمات شاملة']
    }
  ];

  const categories = [
    { key: 'all', label: t('projects.filter.all') },
    { key: 'glass', label: t('projects.filter.glass') },
    { key: 'aluminum', label: t('projects.filter.aluminum') }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  // دوال للتحكم في Lightbox
  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  // التحكم بلوحة المفاتيح
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') prevImage();
      if (e.key === 'ArrowLeft') nextImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  // إنشاء Schema للصفحة الرئيسية
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "مشاريع القوة العاشرة للزجاج والألمنيوم",
    "description": "اكتشف مشاريع شركة القوة العاشرة المتميزة في أعمال الزجاج والألمنيوم في المملكة العربية السعودية",
    "url": "https://stunning-bubblegum-f108c3.netlify.app/projects",
    "publisher": {
      "@type": "Organization",
      "name": "القوة العاشرة للزجاج والألمنيوم",
      "url": "https://stunning-bubblegum-f108c3.netlify.app",
      "logo": "https://stunning-bubblegum-f108c3.netlify.app/logo.png",
      "sameAs": [
        "https://www.instagram.com/alquwwaalashira",
        "https://www.facebook.com/alquwwaalashira",
        "https://www.linkedin.com/company/alquwwaalashira"
      ]
    },
    "inLanguage": "ar",
    "keywords": "القوة العاشرة, زجاج القوة العاشرة, الومنيوم القوة العاشرة, مقاولات القوة العاشرة, شركة زجاج الرياض, شركة الومنيوم جدة"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-amber-50/30">
      {/* SEO Head */}
      <Helmet>
        <title>مشاريع القوة العاشرة للزجاج والألمنيوم | أعمال زجاج واجهات الرياض جدة الدمام</title>
        <meta name="description" content="اكتشف مشاريع شركة القوة العاشرة المتميزة في أعمال الزجاج والألمنيوم في الرياض وجدة والدمام. زجاج القوة العاشرة - واجهات زجاجية - الومنيوم عالي الجودة - مقاولات احترافية" />
        <meta name="keywords" content="القوة العاشرة, زجاج القوة العاشرة, الومنيوم القوة العاشرة, مقاولات القوة العاشرة, شركة زجاج الرياض, شركة الومنيوم جدة, واجهات زجاجية, زجاج سكريت, نوافذ الومنيوم, أبواب الومنيوم, مقاولات عامة, بناء وتشييد, زجاج واجهات, زجاج ديكوري, زجاج أمان, أعمال الومنيوم, مشاريع القوة العاشرة" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="مشاريع القوة العاشرة للزجاج والألمنيوم" />
        <meta property="og:description" content="اكتشف مشاريع شركة القوة العاشرة المتميزة في أعمال الزجاج والألمنيوم في المملكة العربية السعودية" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://stunning-bubblegum-f108c3.netlify.app/projects" />
        <meta property="og:image" content="https://stunning-bubblegum-f108c3.netlify.app/images/al-quwwa-al-ashira-projects-overview.jpg" />
        <meta property="og:locale" content="ar_SA" />
        <meta property="og:site_name" content="القوة العاشرة للزجاج والألمنيوم" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="مشاريع القوة العاشرة للزجاج والألمنيوم" />
        <meta name="twitter:description" content="اكتشف مشاريع شركة القوة العاشرة المتميزة في أعمال الزجاج والألمنيوم" />
        <meta name="twitter:image" content="https://stunning-bubblegum-f108c3.netlify.app/images/al-quwwa-al-ashira-projects-overview.jpg" />
        
        {/* Additional SEO Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="language" content="Arabic" />
        <meta name="geo.region" content="SA" />
        <meta name="geo.placename" content="Saudi Arabia" />
        <meta name="geo.position" content="24.7136;46.6753" />
        <meta name="ICBM" content="24.7136, 46.6753" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://stunning-bubblegum-f108c3.netlify.app/projects" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(pageSchema)}
        </script>
      </Helmet>

      {/* إضافة Schema لكل مشروع */}
      {filteredProjects.slice(0, 10).map(project => (
        <ProjectSchema key={project.id} project={project} />
      ))}

      {/* Lightbox */}
      {lightboxOpen && (
        <ImageLightbox
          images={filteredProjects}
          currentIndex={currentImageIndex}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}

      {/* Hero Section */}
      <SectionWithBackground section="projects" t={t}>
        <div className="animate-fadeIn">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white drop-shadow-2xl">
            {t('projects.title')} - القوة العاشرة
          </h1>
          <p className="text-xl lg:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            اكتشفوا مجموعة من أفضل مشاريع القوة العاشرة المنجزة بنجاح والتي تعكس خبرتنا وإتقاننا في أعمال الزجاج والألمنيوم
          </p>
        </div>
      </SectionWithBackground>

      {/* Filter Section */}
      <section className="py-8 bg-white/80 backdrop-blur-sm border-b border-amber-100 sticky top-0 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`px-8 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category.key
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-xl scale-105'
                    : 'bg-white text-gray-700 hover:bg-amber-50 shadow-md hover:shadow-lg'
                }`}
                aria-label={`فلترة المشاريع حسب ${category.label}`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {filteredProjects.map((project, index) => (
              <article
                key={project.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fadeIn"
                style={{ animationDelay: `${index * 0.05}s` }}
                itemScope
                itemType="http://schema.org/CreativeWork"
              >
                <div className="relative overflow-hidden h-64 bg-gradient-to-br from-gray-100 to-gray-200">
                  <OptimizedImage
                    src={project.image}
                    alt={`${project.title || project.seoTitle} - ${project.category === 'glass' ? 'زجاج' : 'الومنيوم'} القوة العاشرة`}
                    title={`${project.title || project.seoTitle} - القوة العاشرة ${project.location} ${project.date}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 cursor-pointer"
                    onClick={() => openLightbox(index)}
                  />
                  
                  {/* Overlay عند الـ Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="text-4xl mb-2">🔍</div>
                      <p className="font-bold text-lg">اضغط للعرض</p>
                    </div>
                  </div>
                  
                  {/* Logo/Watermark */}
                  <div className="absolute bottom-3 right-3 bg-gradient-to-r from-amber-600 to-amber-500 text-white px-4 py-2 text-xs rounded-lg font-bold shadow-lg">
                    القوة العاشرة
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-2 rounded-full shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                    <span className="text-sm font-bold">
                      {project.category === 'glass' ? ' زجاج' : ' ألمنيوم'}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <header className="mb-3">
                    <h3 className="text-lg font-bold text-gray-900 line-clamp-2 group-hover:text-amber-600 transition-colors duration-300" itemProp="name">
                      {project.title || project.seoTitle || 'مشروع القوة العاشرة'}
                    </h3>
                  </header>
                  
                  {project.description && (
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2" itemProp="description">
                      {project.description}
                    </p>
                  )}

                  <div className="space-y-2 mb-4">
                    {project.location && (
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0" />
                        <span itemProp="locationCreated" className="truncate">{project.location}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4 text-amber-500 flex-shrink-0" />
                      <time itemProp="dateCreated">{project.date}</time>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-1" itemProp="aggregateRating" itemScope itemType="http://schema.org/AggregateRating">
                      <span className="sr-only" itemProp="ratingValue">{project.rating}</span>
                      <span className="sr-only" itemProp="bestRating">5</span>
                      <span className="sr-only" itemProp="reviewCount">1</span>
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 transition-all duration-300 ${
                            i < project.rating ? 'text-yellow-400 fill-current scale-110' : 'text-gray-300'
                          }`}
                          aria-label={i < project.rating ? 'نجمة مملوءة' : 'نجمة فارغة'}
                        />
                      ))}
                    </div>
                    
                    <button
                      onClick={() => openLightbox(index)}
                      className="text-primary-600 hover:text-primary-700 font-semibold text-sm transition-colors duration-300 group-hover:underline"
                    >
                      عرض المشروع ←
                    </button>
                  </div>

                  {/* Hidden SEO Content */}
                  <div className="hidden" itemProp="keywords">
                    {project.keywords.join(', ')}
                  </div>
                  
                  {/* Hidden Company Info */}
                  <div className="hidden" itemProp="creator" itemScope itemType="http://schema.org/Organization">
                    <span itemProp="name">القوة العاشرة للمقاولات والزجاج والألمنيوم</span>
                    <span itemProp="url">https://stunning-bubblegum-f108c3.netlify.app</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section 
      <section className="py-20 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 drop-shadow-lg">
              إنجازات القوة العاشرة في أرقام
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6 rounded-full"></div>
            <p className="text-xl opacity-95 max-w-2xl mx-auto">
              أكثر من 15 عام من الخبرة في خدمة عملائنا الكرام
            </p>
          </header>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8" itemScope itemType="http://schema.org/Organization">
            {[
              { number: '500+', label: 'مشروع منجز بنجاح', description: 'مشاريع زجاج والومنيوم ومقاولات', icon: '🏆' },
              { number: '15+', label: 'سنة خبرة متخصصة', description: 'في أعمال الزجاج والألمنيوم', icon: '⭐' },
              { number: '98%', label: 'رضا العملاء', description: 'معدل رضا عالي من عملاء القوة العاشرة', icon: '😊' },
              { number: '1M+', label: 'متر مربع منفذ', description: 'مساحة إجمالية للمشاريع المنجزة', icon: '📐' }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center group hover:transform hover:scale-110 transition-all duration-300 animate-fadeIn bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-5xl lg:text-6xl font-bold mb-3 drop-shadow-lg group-hover:text-yellow-200 transition-colors duration-300" itemProp="numberOfEmployees">
                  {stat.number}
                </div>
                <div className="text-xl font-bold mb-2">{stat.label}</div>
                <div className="text-sm opacity-90 leading-relaxed">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>*/}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-amber-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIgZmlsbD0iI2Y1OTUxNSIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 animate-fadeIn">
            <div className="text-6xl mb-6">📞</div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              هل لديك مشروع تريد تنفيذه مع القوة العاشرة؟
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              تواصل معنا اليوم للحصول على استشارة مجانية وعرض سعر مخصص لمشروعك
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+966123456789"
                className="group bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center gap-3"
                aria-label="اتصل بنا هاتفياً"
              >
                <span className="text-2xl group-hover:rotate-12 transition-transform duration-300">📞</span>
                اتصل بنا الآن
              </a>
              <a
                href="https://wa.me/966123456789"
                className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center gap-3"
                aria-label="تواصل معنا عبر واتساب"
              >
                <span className="text-2xl group-hover:scale-125 transition-transform duration-300">💬</span>
                واتساب
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Data for Local Business */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "القوة العاشرة للزجاج والألمنيوم",
          "alternateName": ["زجاج القوة العاشرة", "الومنيوم القوة العاشرة", "مقاولات القوة العاشرة"],
          "description": "شركة رائدة في أعمال الزجاج والألمنيوم العامة في المملكة العربية السعودية",
          "url": "https://stunning-bubblegum-f108c3.netlify.app",
          "telephone": "+966123456789",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "شارع الملك فهد",
            "addressLocality": "الرياض",
            "addressRegion": "منطقة الرياض",
            "postalCode": "11564",
            "addressCountry": "SA"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 24.7136,
            "longitude": 46.6753
          },
          "openingHours": "Mo-Sa 08:00-18:00",
          "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": 24.7136,
              "longitude": 46.6753
            },
            "geoRadius": "1000"
          },
          "areaServed": ["الرياض", "جدة", "الدمام", "مكة المكرمة", "الخبر"],
          "services": [
            "أعمال الزجاج والواجهات الزجاجية",
            "تصنيع وتركيب الألمنيوم",
            "المقاولات العامة والبناء",
            "الزجاج السكريت والأمان",
            "النوافذ والأبواب",
            "الدرابزين والاستانلس ستيل"
          ],
          "priceRange": "$$",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "500"
          }
        })}
      </script>

      {/* CSS للأنيميشن */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* تحسين الأداء */
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* تحسين الانتقالات */
        button, a {
          -webkit-tap-highlight-color: transparent;
        }
      `}</style>
    </div>
  );
};

export default Projects;
