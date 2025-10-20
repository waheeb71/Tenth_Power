// مساعدات SEO للمشاريع والصور
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  image?: string;
  url?: string;
  location?: string;
  date?: string;
  category?: string;
}

// مكون SEO Head محسن
export const ProjectSEOHead: React.FC<{
  seo: SEOData;
  companyName?: string;
  siteName?: string;
}> = ({ 
  seo, 
  companyName = 'القوة العاشرة',
  siteName = 'القوة العاشرة للزجاج والألمنيوم'
}) => {
  const fullTitle = `${seo.title} | ${companyName}`;
  const fullUrl = seo.url || 'https://stunning-bubblegum-f108c3.netlify.app';
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords.join(', ')} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="ar_SA" />
      {seo.image && <meta property="og:image" content={seo.image} />}
      {seo.image && <meta property="og:image:alt" content={seo.title} />}
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={seo.description} />
      {seo.image && <meta name="twitter:image" content={seo.image} />}
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large" />
      <meta name="language" content="Arabic" />
      <meta name="geo.region" content="SA" />
      <meta name="geo.placename" content="Saudi Arabia" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": seo.title,
          "description": seo.description,
          "url": fullUrl,
          "inLanguage": "ar",
          "isPartOf": {
            "@type": "WebSite",
            "name": siteName,
            "url": "https://stunning-bubblegum-f108c3.netlify.app"
          },
          "about": {
            "@type": "Organization",
            "name": companyName,
            "description": "شركة رائدة في أعمال الزجاج والألمنيوم ",
            "url": "https://stunning-bubblegum-f108c3.netlify.app"
          },
          "keywords": seo.keywords.join(', '),
          ...(seo.image && {
            "primaryImageOfPage": {
              "@type": "ImageObject",
              "url": seo.image,
              "description": seo.title
            }
          })
        })}
      </script>
    </Helmet>
  );
};

// دالة لإنشاء Schema Markup للمشاريع
export const generateProjectSchema = (project: {
  id: string;
  title: string;
  description: string;
  image: string;
  location: string;
  date: string;
  category: string;
  keywords: string[];
  rating?: number;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `https://stunning-bubblegum-f108c3.netlify.app/projects/${project.id}`,
    "name": project.title,
    "description": project.description,
    "image": {
      "@type": "ImageObject",
      "url": project.image,
      "description": project.description,
      "keywords": project.keywords.join(', ')
    },
    "creator": {
      "@type": "Organization",
      "name": "القوة العاشرة للزجاج والألمنيوم",
      "url": "https://stunning-bubblegum-f108c3.netlify.app",
      "logo": "https://stunning-bubblegum-f108c3.netlify.app/logo.png",
      "description": "شركة رائدة في أعمال الزجاج والألمنيوم  في المملكة العربية السعودية"
    },
    "locationCreated": {
      "@type": "Place",
      "name": project.location,
      "addressCountry": "SA"
    },
    "dateCreated": project.date,
    "keywords": project.keywords.join(', '),
    "inLanguage": "ar",
    "genre": project.category === 'glass' ? 'أعمال الزجاج' : 
            project.category === 'aluminum' ? 'أعمال الألمنيوم' : 'مقاولات عامة',
    "workExample": {
      "@type": "VisualArtwork",
      "name": project.title,
      "image": project.image,
      "description": project.description
    },
    ...(project.rating && {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": project.rating,
        "bestRating": 5,
        "reviewCount": 1
      }
    })
  };
};

// دالة لإنشاء أسماء ملفات محسنة للـ SEO
export const generateSEOFileName = (
  projectTitle: string,
  company: string,
  location: string,
  date: string,
  category: string
): string => {
  const cleanTitle = projectTitle
    .replace(/[^\u0621-\u064A\u0660-\u0669a-zA-Z0-9\s]/g, '')
    .trim()
    .replace(/\s+/g, '-');
  
  const cleanCompany = company
    .replace(/[^\u0621-\u064A\u0660-\u0669a-zA-Z0-9\s]/g, '')
    .trim()
    .replace(/\s+/g, '-');
  
  const cleanLocation = location
    .replace(/[^\u0621-\u064A\u0660-\u0669a-zA-Z0-9\s]/g, '')
    .trim()
    .replace(/\s+/g, '-');

  return `${cleanCompany}-${category}-${cleanLocation}-${date}-${cleanTitle}`.toLowerCase();
};

// دالة لإنشاء محتوى Alt Text محسن
export const generateAltText = (
  projectTitle: string,
  company: string,
  location: string,
  date: string,
  category: string
): string => {
  const categoryText = category === 'glass' ? 'زجاج' : 
                      category === 'aluminum' ? 'الومنيوم' : 'مقاولات';
  
  return `${projectTitle} - أعمال ${categoryText} ${company} في ${location} ${date}`;
};

// دالة لإنشاء Title محسن للصور
export const generateImageTitle = (
  projectTitle: string,
  company: string,
  location: string,
  category: string
): string => {
  const categoryText = category === 'glass' ? 'زجاج' : 
                      category === 'aluminum' ? 'الومنيوم' : 'مقاولات';
  
  return `مشروع ${categoryText} ${company} - ${projectTitle} ${location}`;
};

// مكون لإنشاء Schema Markup للصفحة
export const PageSchema: React.FC<{
  pageType: 'CollectionPage' | 'WebPage' | 'AboutPage' | 'ContactPage';
  title: string;
  description: string;
  url: string;
  keywords: string[];
  breadcrumbs?: Array<{name: string; url: string}>;
}> = ({ pageType, title, description, url, keywords, breadcrumbs }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": pageType,
    "name": title,
    "description": description,
    "url": url,
    "inLanguage": "ar",
    "isPartOf": {
      "@type": "WebSite",
      "name": "القوة العاشرة للزجاج والألمنيوم",
      "url": "https://stunning-bubblegum-f108c3.netlify.app"
    },
    "publisher": {
      "@type": "Organization",
      "name": "القوة العاشرة للزجاج والألمنيوم",
      "url": "https://stunning-bubblegum-f108c3.netlify.app",
      "logo": "https://stunning-bubblegum-f108c3.netlify.app/logo.png"
    },
    "keywords": keywords.join(', '),
    ...(breadcrumbs && {
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": crumb.name,
          "item": crumb.url
        }))
      }
    })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// دالة لإنشاء keywords محسنة
export const generateKeywords = (
  projectTitle: string,
  category: string,
  location: string,
  company: string = 'القوة العاشرة'
): string[] => {
  const baseKeywords = [company];
  
  // إضافة keywords حسب الفئة
  if (category === 'glass') {
    baseKeywords.push(
      `زجاج ${company}`,
      `${company} زجاج`,
      'واجهات زجاجية',
      'زجاج سكريت',
      'زجاج واجهات',
      'زجاج أمان',
      'زجاج ديكوري',
      `شركة زجاج ${location}`,
      `زجاج ${location}`
    );
  } else if (category === 'aluminum') {
    baseKeywords.push(
      `الومنيوم ${company}`,
      `${company} الومنيوم`,
      'نوافذ الومنيوم',
      'أبواب الومنيوم',
      'درابزين استانلس',
      `شركة الومنيوم ${location}`,
      `الومنيوم ${location}`
    );
  } else if (category ===  'aluminum') {
    baseKeywords.push(
      `مقاولات ${company}`,
      `${company} مقاولات`,
      'مقاولات عامة',
      'بناء وتشييد',
      'مشاريع إنشائية',
      `شركة مقاولات ${location}`,
      `مقاولات ${location}`
    );
  }
  
  // إضافة keywords للموقع
  baseKeywords.push(
    location,
    `${company} ${location}`,
    `مشاريع ${location}`,
    `أعمال ${location}`
  );
  
  // إضافة عنوان المشروع إذا كان مفيد
  if (projectTitle && projectTitle.length > 3) {
    baseKeywords.push(projectTitle);
  }
  
  return baseKeywords.filter((keyword, index, array) => 
    array.indexOf(keyword) === index // إزالة التكرار
  );
};

export default {
  ProjectSEOHead,
  generateProjectSchema,
  generateSEOFileName,
  generateAltText,
  generateImageTitle,
  PageSchema,
  generateKeywords
};