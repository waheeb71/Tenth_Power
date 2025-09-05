import React from 'react';
import { Award } from 'lucide-react';

interface CertificationsProps {
  currentLanguage: string;
}

const Certifications: React.FC<CertificationsProps> = ({ currentLanguage }) => {
  const translations = {
    ar: {
      certificationsTitle: "الشهادات",
      cert1Title: "بكالوريوس علوم الحاسوب",
      cert1Institution: "الجامعة الوطنية - تعز",
      cert1Date: "التخرج المتوقع: 2026",
      cert2Title: "شهادة الثانوية العامة",
      cert2Institution: "القسم العلمي",
      cert2Date: "تخرج: 2022"
    },
    en: {
      certificationsTitle: "Certifications",
      cert1Title: "Bachelor of Science in Computer Science",
      cert1Institution: "National University - Taiz",
      cert1Date: "Expected Graduation: 2026",
      cert2Title: "High School Diploma",
      cert2Institution: "Science Stream",
      cert2Date: "Graduated: 2022"
    }
  };

  const t = translations[currentLanguage as keyof typeof translations];

  return (
    <section className="py-12 px-6 bg-[var(--section-bg)] rounded-lg border border-[var(--border-color)] shadow-xl shadow-black/20 mb-12" id="certifications">
      <h2 className="text-[var(--text-light)] text-3xl font-bold leading-tight tracking-[-0.015em] mb-8">
        {t.certificationsTitle}
      </h2>
      <div className={`relative ${currentLanguage === 'ar' ? 'pr-12' : 'pl-12'}`}>
        <div className="timeline-item relative pb-12">
          <div className={`icon-fill-water absolute ${currentLanguage === 'ar' ? 'right-[-3.90rem]' : 'left-[-3.90rem]'} top-0.5 z-10 flex size-10 items-center justify-center rounded-full bg-[var(--primary-color)] text-white`}>
            <Award size={24} />
          </div>
          <h3 className="text-[var(--text-light)] text-lg font-semibold leading-normal mb-1">
            {t.cert1Title}
          </h3>
          <p className="text-[var(--text-medium)] text-sm font-normal leading-normal">
            {t.cert1Institution}
          </p>
          <p className="text-[var(--text-darker)] text-xs font-normal leading-normal">
            {t.cert1Date}
          </p>
        </div>
        
        <div className="timeline-item relative pb-8">
          <div className={`icon-fill-water absolute ${currentLanguage === 'ar' ? 'right-[-3.90rem]' : 'left-[-3.90rem]'} top-0.5 z-10 flex size-10 items-center justify-center rounded-full bg-[var(--primary-color)] text-white`}>
            <Award size={24} />
          </div>
          <h3 className="text-[var(--text-light)] text-lg font-semibold leading-normal mb-1">
            {t.cert2Title}
          </h3>
          <p className="text-[var(--text-medium)] text-sm font-normal leading-normal">
            {t.cert2Institution}
          </p>
          <p className="text-[var(--text-darker)] text-xs font-normal leading-normal">
            {t.cert2Date}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;