import React from 'react';
import { GraduationCap } from 'lucide-react';

interface EducationProps {
  currentLanguage: string;
}

const Education: React.FC<EducationProps> = ({ currentLanguage }) => {
  const translations = {
    ar: {
      educationTitle: "التعليم",
      eduDegree: "بكالوريوس علوم الحاسوب",
      eduUniversity: "الجامعة الوطنية - تعز",
      eduDate: "2025 - 2026"
    },
    en: {
      educationTitle: "Education",
      eduDegree: "Bachelor of Science in Computer Science",
      eduUniversity: "National University - Taiz",
      eduDate: "2025 - 2026"
    }
  };

  const t = translations[currentLanguage as keyof typeof translations];

  return (
    <section className="py-12 px-6 bg-[var(--section-bg)] rounded-lg border border-[var(--border-color)] shadow-xl shadow-black/20 mb-12" id="education">
      <h2 className="text-[var(--text-light)] text-3xl font-bold leading-tight tracking-[-0.015em] mb-8">
        {t.educationTitle}
      </h2>
      <div className={`relative ${currentLanguage === 'ar' ? 'pr-12' : 'pl-12'}`}> 
        <div className="timeline-item relative pb-8">
          <div className={`icon-fill-water absolute ${currentLanguage === 'ar' ? 'right-[-3.90rem]' : 'left-[-3.90rem]'} top-0.5 z-10 flex size-10 items-center justify-center rounded-full bg-[var(--primary-color)] text-white`}>
            <GraduationCap size={24} />
          </div>
          <h3 className="text-[var(--text-light)] text-lg font-semibold leading-normal mb-1">
            {t.eduDegree}
          </h3>
          <p className="text-[var(--text-medium)] text-sm font-normal leading-normal mb-1">
            {t.eduUniversity}
          </p>
          <p className="text-[var(--text-darker)] text-xs font-normal leading-normal">
            {t.eduDate}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;