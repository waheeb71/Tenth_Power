import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'زجاج القوة العاشرة',
  description = 'زجاج القوة العاشرة للمقاولات العامة، متخصصون في أعمال الزجاج والألمنيوم العامة. خبرة تمتد لأكثر من 15 سنة في تنفيذ المشاريع المعمارية المتميزة.',
  keywords = 'زجاج سكريت، مقاولات عامة، زجاج، ألمنيوم، بناء، تشييد، مقاولات الرياض، شركة مقاولات السعودية',
  image = '/logo.png',
  url
}) => {
  const siteUrl = url || 'https://stunning-bubblegum-f108c3.netlify.app';

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "زجاج القوة العاشرة",
    "alternateName": "The Tenth Power General Contracting",
    "url": "https://stunning-bubblegum-f108c3.netlify.app",
    "logo": "https://stunning-bubblegum-f108c3.netlify.app/logo.png",
    "description": "القوة العاشرة للمقاولات العامة متخصصة في أعمال الزجاج، والاستانلس ستيل، والألمنيوم، وتقديم حلول مبتكرة ومتميزة في جميع المشاريع.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "شارع الملك فهد، حي العليا",
      "addressLocality": "الرياض",
      "addressRegion": "الرياض",
      "postalCode": "12345",
      "addressCountry": "المملكة العربية السعودية"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+966532438253",
        "contactType": "customer service",
        "areaServed": "SA",
        "availableLanguage": ["Arabic", "English"],
        "email": "Zjajkryt78@gmail.com"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/share/1B76d6yTDp",
      "https://www.instagram.com/ZJJ4021",
      "https://www.tiktok.com/@user0532438253?_t=ZS-8zOaCY7q4xg&_r=1",
      "https://www.snapchat.com/add/zjjskryt24?share_id=dOfCOthKqmw&locale=ar-AE"
    ],
    "foundingDate": "2008",
    "founders": [
      {
        "@type": "Person",
        "name": "عبدالله عبده احمد هزاوي"
      }
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="القوة العاشرة للمقاولات العامة" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="ar" />

      {/* Canonical URL */}
      <link rel="canonical" href={siteUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:site_name" content="القوة العاشرة للمقاولات العامة" />
      <meta property="og:locale" content="ar_SA" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="format-detection" content="telephone=no" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Helmet>
  );
};

export default SEO;