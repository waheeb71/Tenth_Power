// مكون لتحسين الصور وSEO
import React from 'react';

interface ImageSEOProps {
  src: string;
  alt: string;
  title: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  projectKeywords?: string[];
  companyName?: string;
  location?: string;
  date?: string;
}

export const ImageSEO: React.FC<ImageSEOProps> = ({
  src,
  alt,
  title,
  className = '',
  width,
  height,
  loading = 'lazy',
  projectKeywords = [],
  companyName = 'القوة العاشرة',
  location = '',
  date = ''
}) => {
  // إنشاء alt text محسن للـ SEO
  const optimizedAlt = `${alt} - ${companyName} ${location} ${date}`.trim();
  
  // إنشاء title محسن
  const optimizedTitle = `${title} | أعمال ${companyName} في ${location}`.trim();

  return (
    <picture className={className}>
      {/* WebP format للمتصفحات الداعمة */}
      <source 
        srcSet={`${src.replace(/\.(jpg|jpeg|png)$/i, '.webp')}`} 
        type="image/webp" 
      />
      
      {/* تنسيق AVIF للمتصفحات الحديثة */}
      <source 
        srcSet={`${src.replace(/\.(jpg|jpeg|png)$/i, '.avif')}`} 
        type="image/avif" 
      />
      
      {/* الصورة الأصلية كـ fallback */}
      <img
        src={src}
        alt={optimizedAlt}
        title={optimizedTitle}
        width={width}
        height={height}
        loading={loading}
        decoding="async"
        className="w-full h-full object-cover"
        
        // إضافة structured data للصورة
        itemProp="image"
        itemScope
        itemType="http://schema.org/ImageObject"
        
        // إضافة data attributes للتتبع
        data-keywords={projectKeywords.join(',')}
        data-company={companyName}
        data-location={location}
        data-date={date}
        
        // تحسين الأداء
        style={{
          aspectRatio: width && height ? `${width}/${height}` : undefined
        }}
      />
      
      {/* بيانات منظمة مخفية للصورة */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ImageObject",
          "url": src,
          "name": optimizedTitle,
          "description": optimizedAlt,
          "keywords": projectKeywords.join(', '),
          "creator": {
            "@type": "Organization",
            "name": companyName,
            "url": "https://stunning-bubblegum-f108c3.netlify.app"
          },
          "locationCreated": location,
          "dateCreated": date,
          "contentUrl": src,
          "thumbnailUrl": src,
          "representativeOfPage": true
        })}
      </script>
    </picture>
  );
};

// مكون Gallery محسن للـ SEO
interface ProjectGalleryProps {
  images: Array<{
    id: string;
    src: string;
    alt: string;
    title: string;
    category: string;
    location: string;
    date: string;
    keywords: string[];
  }>;
  companyName?: string;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({
  images,
  companyName = 'القوة العاشرة'
}) => {
  return (
    <div 
      className="image-gallery"
      itemScope
      itemType="http://schema.org/ImageGallery"
    >
      {/* بيانات منظمة للمعرض */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          "name": `معرض مشاريع ${companyName}`,
          "description": `مجموعة من أفضل مشاريع ${companyName} في أعمال الزجاج والألمنيوم والمقاولات`,
          "publisher": {
            "@type": "Organization",
            "name": companyName,
            "url": "https://stunning-bubblegum-f108c3.netlify.app"
          },
          "image": images.map(img => ({
            "@type": "ImageObject",
            "url": img.src,
            "name": img.title,
            "description": img.alt,
            "keywords": img.keywords.join(', ')
          }))
        })}
      </script>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div 
            key={image.id}
            className="gallery-item"
            itemScope
            itemType="http://schema.org/ImageObject"
          >
            <ImageSEO
              src={image.src}
              alt={image.alt}
              title={image.title}
              projectKeywords={image.keywords}
              companyName={companyName}
              location={image.location}
              date={image.date}
              className="w-full h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
            
            {/* معلومات إضافية مخفية للـ SEO */}
            <div className="hidden">
              <span itemProp="name">{image.title}</span>
              <span itemProp="description">{image.alt}</span>
              <span itemProp="keywords">{image.keywords.join(', ')}</span>
              <span itemProp="locationCreated">{image.location}</span>
              <span itemProp="dateCreated">{image.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Hook لتحسين تحميل الصور
export const useImageOptimization = () => {
  const preloadImage = (src: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = reject;
      img.src = src;
    });
  };

  const preloadImages = async (srcs: string[]): Promise<void> => {
    try {
      await Promise.all(srcs.map(preloadImage));
    } catch (error) {
      console.warn('Failed to preload some images:', error);
    }
  };

  const generateResponsiveImageSet = (baseSrc: string, sizes: number[]) => {
    return sizes.map(size => ({
      src: baseSrc.replace(/(\.[^.]+)$/, `_${size}w$1`),
      width: size
    }));
  };

  return {
    preloadImage,
    preloadImages,
    generateResponsiveImageSet
  };
};

export default ImageSEO;