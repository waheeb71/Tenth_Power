interface SEOData {
  title: string;
  description: string;
  keywords: string;
  image?: string;
  url?: string;
  type?: string;
}

export const generateSEOData = (page: string, language: 'ar' | 'en' = 'ar'): SEOData => {
  const baseUrl = 'https://tenth-power.com';
  const defaultImage = `${baseUrl}/og-image.jpg`;

  const seoData = {
    ar: {
      home: {
        title: 'القوة العاشرة للمقاولات العامة - شركة رائدة في الزجاج والألمنيوم',
        description: 'شركة القوة العاشرة للمقاولات العامة، متخصصون في أعمال الزجاج والألمنيوم والمقاولات العامة. خبرة تمتد لأكثر من 15 سنة في تنفيذ المشاريع المعمارية المتميزة.',
        keywords: 'مقاولات عامة، زجاج، ألمنيوم، بناء، تشييد، مقاولات الرياض، شركة مقاولات السعودية'
      },
      about: {
        title: 'من نحن - القوة العاشرة للمقاولات العامة',
        description: 'تعرف على شركة القوة العاشرة للمقاولات العامة، قصتنا، رؤيتنا، ورسالتنا في خدمة العملاء وتحقيق أحلامهم المعمارية.',
        keywords: 'من نحن، رؤية الشركة، رسالة الشركة، فريق العمل، القوة العاشرة'
      },
      services: {
        title: 'خدماتنا - أعمال الزجاج والألمنيوم والمقاولات العامة',
        description: 'اكتشف خدماتنا المتنوعة في أعمال الزجاج والألمنيوم والمقاولات العامة. نقدم حلول شاملة بأعلى معايير الجودة.',
        keywords: 'خدمات مقاولات، أعمال زجاج، تركيب ألمنيوم، خدمات بناء، تشطيبات'
      },
      projects: {
        title: 'مشاريعنا السابقة - معرض أعمال القوة العاشرة',
        description: 'استعرض مجموعة من أفضل مشاريعنا المنجزة في مجال الزجاج والألمنيوم والمقاولات العامة عبر المملكة العربية السعودية.',
        keywords: 'مشاريع منجزة، أعمال سابقة، معرض أعمال، مشاريع زجاج، مشاريع ألمنيوم'
      },
      contact: {
        title: 'تواصل معنا - القوة العاشرة للمقاولات العامة',
        description: 'تواصل مع فريق القوة العاشرة للمقاولات العامة. احصل على استشارة مجانية وعرض سعر لمشروعك.',
        keywords: 'تواصل معنا، استشارة مجانية، عرض سعر، خدمة عملاء، معلومات تواصل'
      }
    },
    en: {
      home: {
        title: 'The Tenth Power General Contracting - Leading Glass & Aluminum Company',
        description: 'The Tenth Power General Contracting, specialists in glass works, aluminum, and general contracting. Over 15 years of experience in executing distinguished architectural projects.',
        keywords: 'general contracting, glass works, aluminum, construction, building, Riyadh contracting, Saudi contracting company'
      },
      about: {
        title: 'About Us - The Tenth Power General Contracting',
        description: 'Learn about The Tenth Power General Contracting, our story, vision, and mission in serving clients and achieving their architectural dreams.',
        keywords: 'about us, company vision, company mission, team, The Tenth Power'
      },
      services: {
        title: 'Our Services - Glass, Aluminum & General Contracting Works',
        description: 'Discover our diverse services in glass works, aluminum, and general contracting. We provide comprehensive solutions with the highest quality standards.',
        keywords: 'contracting services, glass works, aluminum installation, construction services, finishing'
      },
      projects: {
        title: 'Our Previous Projects - The Tenth Power Portfolio',
        description: 'Browse through a collection of our best completed projects in glass, aluminum, and general contracting across Saudi Arabia.',
        keywords: 'completed projects, previous works, portfolio, glass projects, aluminum projects'
      },
      contact: {
        title: 'Contact Us - The Tenth Power General Contracting',
        description: 'Contact The Tenth Power General Contracting team. Get a free consultation and price quote for your project.',
        keywords: 'contact us, free consultation, price quote, customer service, contact information'
      }
    }
  };

  return {
    ...seoData[language][page as keyof typeof seoData['ar']],
    image: defaultImage,
    url: `${baseUrl}${page === 'home' ? '' : `/${page}`}`,
    type: 'website'
  };
};

export const generateStructuredData = (type: string, data: any) => {
  const baseStructuredData = {
    "@context": "https://schema.org",
    "@type": type,
    ...data
  };

  return JSON.stringify(baseStructuredData);
};

export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "القوة العاشرة للمقاولات العامة",
  "alternateName": "The Tenth Power General Contracting",
  "url": "https://tenth-power.com",
  "logo": "https://tenth-power.com/logo.png",
  "description": "شركة رائدة في مجال المقاولات العامة والزجاج والألمنيوم",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "SA",
    "addressLocality": "الرياض",
    "addressRegion": "الرياض",
    "streetAddress": "شارع الملك فهد"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+966-50-123-4567",
    "contactType": "customer service",
    "email": "info@tenth-power.com",
    "availableLanguage": ["Arabic", "English"]
  },
  "sameAs": [
    "https://facebook.com/tenthpower",
    "https://twitter.com/tenthpower",
    "https://instagram.com/tenthpower",
    "https://linkedin.com/company/tenthpower"
  ],
  "foundingDate": "2008",
  "numberOfEmployees": "50-100",
  "areaServed": "Saudi Arabia"
};