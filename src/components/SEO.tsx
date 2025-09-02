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
  title = 'القوة العاشرة للمقاولات العامة - شركة رائدة في الزجاج والألمنيوم',
  description = 'شركة القوة العاشرة للمقاولات العامة، متخصصون في أعمال الزجاج والألمنيوم والمقاولات العامة. خبرة تمتد لأكثر من 15 سنة في تنفيذ المشاريع المعمارية المتميزة.',
  keywords = 'مقاولات عامة، زجاج، ألمنيوم، بناء، تشييد، مقاولات الرياض، شركة مقاولات السعودية',
  image = '/logo.png',
  url = 'https://tenth-power.com'
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "القوة العاشرة للمقاولات العامة",
    "alternateName": "The Tenth Power General Contracting",
    "url": url,
    "logo": `${url}/logo.png`,
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "SA",
      "addressLocality": "الرياض",
      "addressRegion": "الرياض"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+966532438253",
      "contactType": "customer service",
      "email": "Zjajkryt78@gmail.com"
    },
    "sameAs": [
      "https://facebook.com/tenthpower",
      "https://twitter.com/tenthpower",
      "https://instagram.com/tenthpower"
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
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
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