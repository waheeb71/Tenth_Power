import React, { useState } from 'react';
import { Calendar, MapPin, Star, Filter } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import SectionWithBackground from "../components/SectionWithBackground"; 



import { Helmet } from 'react-helmet-async';

interface Project {
  id: string;
  title: string;
  category: 'glass' | 'aluminum' | 'contracting';
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
}> = ({ src, alt, title, className = '' }) => {
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
      />
    </picture>
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
      "name": "القوة العاشرة للمقاولات والزجاج والألمنيوم",
      "url": "https://stunning-bubblegum-f108c3.netlify.app",
      "description": "شركة رائدة في أعمال الزجاج والألمنيوم والمقاولات في المملكة العربية السعودية"
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
      category: 'contracting',
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
      title: "",
      seoTitle: "",
      category: 'contracting',
      description: "",
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
      description: ' تصميم وتنفيذ مشاريع زجاج فريدة تلبي احتياجات العملاء الخاصة في الرياض',
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
      title: "",
      seoTitle: "",
      category: 'glass',
      description: "",
      image: '/images/al-quwwa-al-ashira-security-glass-riyadh-2025-5.jpg',
      location: 'الرياض',
      date: '2025',
      rating: 4,
      keywords: ['القوة العاشرة', 'زجاج أمان', 'زجاج حماية', 'أمان مباني', 'القوة العاشرة أمان', 'زجاج مقاوم كسر']
    },
    {
      id: '12',
      title: "",
      seoTitle:"",
      category: 'glass',
      description:"",
      image: '/images/al-quwwa-al-ashira-commercial-glass-riyadh-2025-6.jpg',
      location: 'الرياض',
      date: '2025',
      rating: 5,
      keywords: ['القوة العاشرة', 'واجهات تجارية', 'زجاج تجاري', 'مباني تجارية', 'القوة العاشرة تجاري', 'واجهات محلات']
    },
    {
      id: '13',
      title: "",
      seoTitle: "",
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
      title: "",
      seoTitle: "",
      category: 'glass',
      description: "",
      image: '/images/al-quwwa-al-ashira-insulated-windows-riyadh-2025-8.jpg',
      location: 'الرياض',
      date: '2025',
      rating: 4,
      keywords: ['القوة العاشرة', 'نوافذ عازلة', 'عزل صوتي', 'عزل حراري', 'القوة العاشرة نوافذ', 'نوافذ زجاجية عازلة']
    },
    {
      id: '15',
      title: "",
      seoTitle: "",
      category: 'glass',
      description: "",
      image: '/images/al-quwwa-al-ashira-decorative-glass-riyadh-2025-9.jpg',
      location: 'الرياض',
      date: '2025',
      rating: 5,
      keywords: ['القوة العاشرة', 'زجاج ديكوري', 'زجاج فني', 'تصاميم زجاج', 'القوة العاشرة ديكور', 'زجاج راقي']
    },
    {
      id: '16',
      title: "",
      seoTitle: "",
      category: 'glass',
      description: "",
      image: '/images/al-quwwa-al-ashira-glass-ceiling-riyadh-2025-10.jpg',
      location: 'الرياض',
      date: '2025',
      rating: 4,
      keywords: ['القوة العاشرة', 'أسقف زجاجية', 'زجاج شفاف', 'إضاءة طبيعية', 'القوة العاشرة أسقف', 'سقف زجاج']
    },
    {
      id: '17',
      title:"",
      seoTitle: "",
      category: 'glass',
      description: "",
      image: '/images/al-quwwa-al-ashira-glass-partitions-riyadh-2025-11.jpg',
      location: 'الرياض',
      date: '2025',
      rating: 5,
      keywords: ['القوة العاشرة', 'حوائط زجاجية', 'فواصل زجاج', 'تقسيم مساحات', 'القوة العاشرة فواصل', 'جدران زجاج']
    },
    {
      id: '18',
      title: "",
      seoTitle: "",
      category: 'glass',
      description:"",
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
      description: "",
      image: '/images/al-quwwa-al-ashira-integrated-glass-riyadh-2025-13.jpg',
      location: 'الرياض',
      date: '2025',
      rating: 5,
      keywords: ['القوة العاشرة', 'مشروع زجاج متكامل', 'حلول شاملة', 'زجاج شامل', 'القوة العاشرة متكامل', 'مشروع زجاج كامل']
    },
    {
      id: '20',
      title: "",
      seoTitle: "",
      category: 'glass',
      description: "",
      image: '/images/al-quwwa-al-ashira-innovative-glass-riyadh-2025-14.jpg',
      location: 'الرياض',
      date: '2025',
      rating: 5,
      keywords: ['القوة العاشرة', 'زجاج مبتكر', 'تطبيقات زجاج', 'ابتكار زجاج', 'القوة العاشرة ابتكار', 'زجاج متطور']
    },
    {
      id: '21',
      title: "",
      seoTitle:"",
      category: 'contracting',
      description:"",
      image: '/images/al-quwwa-al-ashira-modern-construction-riyadh-2025-1.jpg',
      location: 'الرياض',
      date: '2025',
      rating: 4,
      keywords: ['القوة العاشرة', 'مشروع إنشائي', 'بناء متطور', 'تقنيات حديثة', 'القوة العاشرة بناء', 'إنشاءات الرياض']
    },
    {
      id: '22',
      title: "",
      seoTitle: "",
      category: 'contracting',
      description: "",
      image: '/images/al-quwwa-al-ashira-luxury-development-riyadh-2025-2.jpg',
      location: 'الرياض',
      date: '2025',
      rating: 5,
      keywords: ['القوة العاشرة', 'تطوير عقاري', 'مشاريع فاخرة', 'عقارات راقية', 'القوة العاشرة عقاري', 'تطوير فاخر']
    },
    {
      id: '23',
      title: "",
      seoTitle: "",
      category: 'contracting',
      description: "",
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
      title: "",
      seoTitle: "",
      category: 'contracting',
      description: "",
      image: '/images/al-quwwa-al-ashira-infrastructure-riyadh-2025-5.jpg',
      location: 'الرياض',
      date: '2025',
      rating: 5,
      keywords: ['القوة العاشرة', 'بنية تحتية', 'مشاريع أساسية', 'تطوير بنية', 'القوة العاشرة بنية', 'مشاريع حيوية']
    },
    {
      id: '26',
      title: "",
      seoTitle: "",
      category: 'contracting',
      description:"",
      image: '/images/al-quwwa-al-ashira-green-building-riyadh-2025-6.jpg',
      location: 'الرياض',
      date: '2025',
      rating: 4,
      keywords: ['القوة العاشرة', 'مباني خضراء', 'بناء مستدام', 'صديق البيئة', 'القوة العاشرة بيئة', 'مباني كفؤة طاقة']
    },
    {
      id: '27',
      title: "",
      seoTitle: "",
      category: 'contracting',
      description:"",
      image: '/images/al-quwwa-al-ashira-residential-complex-riyadh-2025-7.jpg',
      location: 'الرياض',
      date: '2025',
      rating: 5,
      keywords: ['القوة العاشرة', 'مجمعات سكنية', 'وحدات سكنية', 'تشييد سكني', 'القوة العاشرة سكن', 'مساكن عصرية']
    },
    {
      id: '28',
      title: 'مشاريع إدارية متكاملة القوة العاشرة',
      seoTitle: "",
      category: 'contracting',
      description: "",
      image: '/images/al-quwwa-al-ashira-office-buildings-riyadh-2025-8.jpg',
      location: 'الرياض',
      date: '2025',
      rating: 5,
      keywords: ['القوة العاشرة', 'مشاريع إدارية', 'مباني مكاتب', 'مكاتب حديثة', 'القوة العاشرة إداري', 'بيئة عمل']
    },
    {
      id: '29',
      title: 'مرافق ترفيهية متطورة القوة العاشرة',
      seoTitle: "",
      category: 'contracting',
      description: "",
      image: '/images/al-quwwa-al-ashira-entertainment-facilities-riyadh-2025-9.jpg',
      location: 'الرياض',
      date: '2025',
      rating: 5,
      keywords: ['القوة العاشرة', 'مرافق ترفيهية', 'مراكز ترفيه', 'مرافق رياضية', 'القوة العاشرة ترفيه', 'مراكز حديثة']
    },
    {
      id: '30',
      title: 'مشاريع تعليمية رائدة القوة العاشرة',
      seoTitle:"",
      category: 'contracting',
      description: "",
      image: '/images/al-quwwa-al-ashira-educational-projects-riyadh-2025-10.jpg',
      location: 'الرياض',
      date: '2025',
      rating: 5,
      keywords: ['القوة العاشرة', 'مشاريع تعليمية', 'مدارس حديثة', 'مرافق تعليمية', 'القوة العاشرة تعليم', 'مباني تعليمية']
    },
    {
      id: '31',
      title: "",
      seoTitle: "",
      category: 'contracting',
      description:"",
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
      category: 'contracting',
      description: "",
      image: '/images/al-quwwa-al-ashira-diverse-projects-riyadh-2025-13.jpg',
      location: 'الرياض',
      date: '2025',
      rating: 4,
      keywords: ['القوة العاشرة', 'مشاريع متنوعة', 'حلول شاملة', 'مشاريع متكاملة', 'القوة العاشرة متنوع', 'خدمات شاملة']
    } , {
      id: '33',
      title: 'مشاريع القوة العاشرة المتنوعة',
      seoTitle: 'مشاريع متنوعة شاملة القوة العاشرة - حلول متكاملة الرياض 2025',
      category: 'contracting',
      description: "",
      image: '/images/al-quwwa-al-ashira-diverse-projects-riyadh-2025-14.jpeg',
      location: 'الرياض',
      date: '2025',
      rating: 4,
      keywords: ['القوة العاشرة', 'مشاريع متنوعة', 'حلول شاملة', 'مشاريع متكاملة', 'القوة العاشرة متنوع', 'خدمات شاملة']
    } 
    , {
      id: '34',
      title: 'مشاريع القوة العاشرة المتنوعة',
      seoTitle: 'مشاريع متنوعة شاملة القوة العاشرة - حلول متكاملة الرياض 2025',
      category: 'contracting',
      description: "",
      image: '/images/al-quwwa-al-ashira-diverse-projects-riyadh-2025-15.jpeg',
      location: 'الرياض',
      date: '2025',
      rating: 4,
      keywords: ['القوة العاشرة', 'مشاريع متنوعة', 'حلول شاملة', 'مشاريع متكاملة', 'القوة العاشرة متنوع', 'خدمات شاملة']
    } 
    ,{
      id: '35',
      title: 'مشاريع القوة العاشرة المتنوعة',
      seoTitle: 'مشاريع متنوعة شاملة القوة العاشرة - حلول متكاملة الرياض 2025',
      category: 'contracting',
      description: "",
      image: '/images/al-quwwa-al-ashira-diverse-projects-riyadh-2025-16.jpeg',
      location: 'الرياض',
      date: '2025',
      rating: 4,
      keywords: ['القوة العاشرة', 'مشاريع متنوعة', 'حلول شاملة', 'مشاريع متكاملة', 'القوة العاشرة متنوع', 'خدمات شاملة']
    } , {
      id: '36',
      title: 'مشاريع القوة العاشرة المتنوعة',
      seoTitle: 'مشاريع متنوعة شاملة القوة العاشرة - حلول متكاملة الرياض 2025',
      category: 'contracting',
      description: "",
      image: '/images/al-quwwa-al-ashira-diverse-projects-riyadh-2025-17.jpeg',
      location: 'الرياض',
      date: '2025',
      rating: 4,
      keywords: ['القوة العاشرة', 'مشاريع متنوعة', 'حلول شاملة', 'مشاريع متكاملة', 'القوة العاشرة متنوع', 'خدمات شاملة']
    } 
    , {
      id: '37',
      title: 'مشاريع القوة العاشرة المتنوعة',
      seoTitle: "",
      category: 'contracting',
      description: "",
      image: '/images/al-quwwa-al-ashira-diverse-projects-riyadh-2025-18.jpeg',
      location: "",
      date: '2025',
      rating: 5,
      keywords: ['القوة العاشرة', 'مشاريع متنوعة', 'حلول شاملة', 'مشاريع متكاملة', 'القوة العاشرة متنوع', 'خدمات شاملة']
    } , {
      id: '38',
      title: "",
      seoTitle: "",
      category: 'contracting',
      description: "",
      image: '/images/al-quwwa-al-ashira-diverse-projects-riyadh-2025-19.jpeg',
      location: 'الرياض',
      date: '2025',
      rating: 4,
      keywords: ['القوة العاشرة', 'مشاريع متنوعة', 'حلول شاملة', 'مشاريع متكاملة', 'القوة العاشرة متنوع', 'خدمات شاملة']
    } , {
      id: '39',
      title: "",
      seoTitle: "",
      category: 'contracting',
      description: "",
      image: '/images/al-quwwa-al-ashira-diverse-projects-riyadh-2025-20.jpeg',
      location: 'الرياض',
      date: '2025',
      rating: 4,
      keywords: ['القوة العاشرة', 'مشاريع متنوعة', 'حلول شاملة', 'مشاريع متكاملة', 'القوة العاشرة متنوع', 'خدمات شاملة']
    } , {
      id: '40',
      title: "",
      seoTitle: "",
      category: 'contracting',
      description: "",
      image: '/images/al-quwwa-al-ashira-diverse-projects-riyadh-2025-21.jpeg',
      location:"",
      date: '2025',
      rating: 4,
      keywords: ['القوة العاشرة', 'مشاريع متنوعة', 'حلول شاملة', 'مشاريع متكاملة', 'القوة العاشرة متنوع', 'خدمات شاملة']
    } 
    , {
      id: '41',
      title: "",
      seoTitle: "",
      category: 'contracting',
      description: "",
      image: '/images/al-quwwa-al-ashira-diverse-projects-riyadh-2025-22.jpeg',
      location:"",
      date: '2025',
      rating: 4,
      keywords: ['القوة العاشرة', 'مشاريع متنوعة', 'حلول شاملة', 'مشاريع متكاملة', 'القوة العاشرة متنوع', 'خدمات شاملة']
    } , {
      id: '42',
      title: "",
      seoTitle: "",
      category: 'contracting',
      description: "",
      image: '/images/al-quwwa-al-ashira-diverse-projects-riyadh-2025-23.jpeg',
      location:"",
      date: '2025',
      rating: 4,
      keywords: ['القوة العاشرة', 'مشاريع متنوعة', 'حلول شاملة', 'مشاريع متكاملة', 'القوة العاشرة متنوع', 'خدمات شاملة']
    } 
  ];

  const categories = [
    { key: 'all', label: t('projects.filter.all') },
    { key: 'glass', label: t('projects.filter.glass') },
    { key: 'aluminum', label: t('projects.filter.aluminum') },
    { key: 'contracting', label: t('projects.filter.contracting') }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  // إنشاء Schema للصفحة الرئيسية
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "مشاريع القوة العاشرة للزجاج والألمنيوم والمقاولات",
    "description": "اكتشف مشاريع شركة القوة العاشرة المتميزة في أعمال الزجاج والألمنيوم والمقاولات في المملكة العربية السعودية",
    "url": "https://stunning-bubblegum-f108c3.netlify.app/projects",
    "publisher": {
      "@type": "Organization",
      "name": "القوة العاشرة للمقاولات والزجاج والألمنيوم",
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
    <div className="min-h-screen bg-white">
      {/* SEO Head */}
      <Helmet>
        <title>مشاريع القوة العاشرة للزجاج والألمنيوم والمقاولات | أعمال زجاج واجهات الرياض جدة الدمام</title>
        <meta name="description" content="اكتشف مشاريع شركة القوة العاشرة المتميزة في أعمال الزجاج والألمنيوم والمقاولات في الرياض وجدة والدمام. زجاج القوة العاشرة - واجهات زجاجية - الومنيوم عالي الجودة - مقاولات احترافية" />
        <meta name="keywords" content="القوة العاشرة, زجاج القوة العاشرة, الومنيوم القوة العاشرة, مقاولات القوة العاشرة, شركة زجاج الرياض, شركة الومنيوم جدة, واجهات زجاجية, زجاج سكريت, نوافذ الومنيوم, أبواب الومنيوم, مقاولات عامة, بناء وتشييد, زجاج واجهات, زجاج ديكوري, زجاج أمان, أعمال الومنيوم, مشاريع القوة العاشرة" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="مشاريع القوة العاشرة للزجاج والألمنيوم والمقاولات" />
        <meta property="og:description" content="اكتشف مشاريع شركة القوة العاشرة المتميزة في أعمال الزجاج والألمنيوم والمقاولات في المملكة العربية السعودية" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://stunning-bubblegum-f108c3.netlify.app/projects" />
        <meta property="og:image" content="https://stunning-bubblegum-f108c3.netlify.app/images/al-quwwa-al-ashira-projects-overview.jpg" />
        <meta property="og:locale" content="ar_SA" />
        <meta property="og:site_name" content="القوة العاشرة للمقاولات والزجاج والألمنيوم" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="مشاريع القوة العاشرة للزجاج والألمنيوم والمقاولات" />
        <meta name="twitter:description" content="اكتشف مشاريع شركة القوة العاشرة المتميزة في أعمال الزجاج والألمنيوم والمقاولات" />
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

      {/* Hero Section */}
      <SectionWithBackground section="projects" t={t}>
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
          {t('projects.title')} - القوة العاشرة
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          اكتشفوا مجموعة من أفضل مشاريع القوة العاشرة المنجزة بنجاح والتي تعكس خبرتنا وإتقاننا في أعمال الزجاج والألمنيوم والمقاولات
        </p>
        
        {/* إضافة نص مخفي للـ SEO */}
        <div className="hidden">
          <h2>زجاج القوة العاشرة - أعمال زجاج واجهات احترافية</h2>
          <p>شركة القوة العاشرة رائدة في أعمال الزجاج والواجهات الزجاجية في الرياض وجدة والدمام. نقدم حلول زجاج سكريت، زجاج أمان، زجاج ديكوري، وجميع أنواع الزجاج المعماري.</p>
          
          <h3>الومنيوم القوة العاشرة - نوافذ وأبواب عالية الجودة</h3>
          <p>تخصصنا في تصنيع وتركيب نوافذ وأبواب الألمنيوم، درابزين استانلس ستيل، وجميع أعمال المعادن بأعلى معايير الجودة.</p>
          
          <h4>مقاولات القوة العاشرة - مشاريع بناء وتشييد متميزة</h4>
          <p>نفذنا أكثر من 500 مشروع في مجال المقاولات العامة، البنية التحتية، المجمعات السكنية، والمباني التجارية في جميع أنحاء المملكة.</p>
        </div>
      </SectionWithBackground>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.key
                    ? 'bg-amber-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                itemScope
                itemType="http://schema.org/CreativeWork"
              >
                <div className="relative overflow-hidden">
                  <OptimizedImage
                    src={project.image}
                    alt={`${project.seoTitle} - صور أعمال ${project.category === 'glass' ? 'زجاج' : project.category === 'aluminum' ? 'الومنيوم' : 'مقاولات'} القوة العاشرة في ${project.location}`}
                    title={`مشروع ${project.title} - القوة العاشرة ${project.location} ${project.date}`}
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  
                  {/* Logo/Watermark */}
                  <div className="absolute bottom-3 right-3 bg-black/80 text-white px-3 py-1 text-sm rounded-lg font-bold">
                    القوة العاشرة
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 bg-amber-500/95 text-white px-3 py-1 rounded-full shadow-lg">
                    <span className="text-sm font-semibold">
                      {project.category === 'glass' ? 'زجاج القوة العاشرة' : 
                       project.category === 'aluminum' ? 'ألمنيوم القوة العاشرة' : 'مقاولات القوة العاشرة'}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <header>
                    <h3 className="text-xl font-bold text-gray-900 mb-3" itemProp="name">
                      {project.title}
                    </h3>
                  </header>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed" itemProp="description">
                    {project.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-gray-500">
                      <MapPin className="w-4 h-4 text-amber-500" />
                      <span itemProp="locationCreated">{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-gray-500">
                      <Calendar className="w-4 h-4 text-amber-500" />
                      <time itemProp="dateCreated">{project.date}</time>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse" itemProp="aggregateRating" itemScope itemType="http://schema.org/AggregateRating">
                      <span className="sr-only" itemProp="ratingValue">{project.rating}</span>
                      <span className="sr-only" itemProp="bestRating">5</span>
                      <span className="sr-only" itemProp="reviewCount">1</span>
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < project.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                          aria-label={i < project.rating ? 'نجمة مملوءة' : 'نجمة فارغة'}
                        />
                      ))}
                    </div>
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

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-amber-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              إنجازات القوة العاشرة في أرقام
            </h2>
            <p className="text-lg opacity-90">
              أكثر من 15 عام من الخبرة في خدمة عملائنا الكرام
            </p>
          </header>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8" itemScope itemType="http://schema.org/Organization">
            {[
              { number: '500+', label: 'مشروع منجز بنجاح', description: 'مشاريع زجاج والومنيوم ومقاولات' },
              { number: '15+', label: 'سنة خبرة متخصصة', description: 'في أعمال الزجاج والألمنيوم والمقاولات' },
              { number: '98%', label: 'رضا العملاء', description: 'معدل رضا عالي من عملاء القوة العاشرة' },
              { number: '1M+', label: 'متر مربع منفذ', description: 'مساحة إجمالية للمشاريع المنجزة' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2" itemProp="numberOfEmployees">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold mb-1">{stat.label}</div>
                <div className="text-sm opacity-80">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            هل لديك مشروع تريد تنفيذه مع القوة العاشرة؟
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            تواصل معنا اليوم للحصول على استشارة مجانية وعرض سعر مخصص لمشروعك
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+966123456789"
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
              aria-label="اتصل بنا هاتفياً"
            >
              اتصل بنا الآن
            </a>
            <a
              href="https://wa.me/966123456789"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
              aria-label="تواصل معنا عبر واتساب"
            >
              واتساب
            </a>
          </div>
        </div>
      </section>

      {/* Structured Data for Local Business */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "القوة العاشرة للمقاولات والزجاج والألمنيوم",
          "alternateName": ["زجاج القوة العاشرة", "الومنيوم القوة العاشرة", "مقاولات القوة العاشرة"],
          "description": "شركة رائدة في أعمال الزجاج والألمنيوم والمقاولات العامة في المملكة العربية السعودية",
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
    </div>
  );
};

export default Projects;