import React from 'react';
import { Briefcase } from 'lucide-react';

interface ExperienceProps {
  currentLanguage: string;
}

const Experience: React.FC<ExperienceProps> = ({ currentLanguage }) => {
  const translations = {
    ar: {
      experienceTitle: "الخبرات العملية",
      exp1Title: "مهندس برمجيات ومتخصص أمن سيبراني",
      exp1Date: "2022 - الحاضر",
      exp1Desc1: "تصميم وتطوير حلول برمجية آمنة باستخدام Python و Node.js و Flask.",
      exp1Desc2: "إجراء اختبارات الاختراق وتقييمات الثغرات على التطبيقات والشبكات.",
      exp1Desc3: "تحليل ومراقبة حركة مرور الشبكة باستخدام Wireshark وأدوات SIEM.",
      exp1Desc4: "تنفيذ سياسات الأمان وتعزيز تدابير الأمن السيبراني للشركة.",
      exp2Title: "مطور برمجيات مبتدئ",
      exp2Date: "2020 - 2022",
      exp2Desc1: "المساعدة في تطوير واختبار مكونات البرمجيات باستخدام Java و JavaScript.",
      exp2Desc2: "المساهمة في تحسين الأداء والأمان لتطبيقات الويب.",
      exp2Desc3: "العمل مع منهجيات Agile والتعاون ضمن فرق متعددة الوظائف."
    },
    en: {
      experienceTitle: "Work Experience",
      exp1Title: "Software Engineer & Cybersecurity Specialist",
      exp1Date: "2022 - Present",
      exp1Desc1: "Designed and developed secure software solutions using Python, Node.js, and Flask.",
      exp1Desc2: "Conducted penetration testing and vulnerability assessments on applications and networks.",
      exp1Desc3: "Analyzed and monitored network traffic using Wireshark and SIEM tools.",
      exp1Desc4: "Implemented security policies and enhanced the company's cybersecurity measures.",
      exp2Title: "Junior Software Developer",
      exp2Date: "2020 - 2022",
      exp2Desc1: "Assisted in developing and testing software components using Java and JavaScript.",
      exp2Desc2: "Contributed to improving performance and security of web applications.",
      exp2Desc3: "Worked with Agile methodologies and collaborated within cross-functional teams."
    }
  };

  const t = translations[currentLanguage as keyof typeof translations];

  return (
    <section className="py-12 px-6 bg-[var(--section-bg)] rounded-lg border border-[var(--border-color)] shadow-xl shadow-black/20 mb-12" id="experience">
      <h2 className="text-[var(--text-light)] text-3xl font-bold leading-tight tracking-[-0.015em] mb-8">
        {t.experienceTitle}
      </h2>
      <div className={`relative ${currentLanguage === 'ar' ? 'pr-12' : 'pl-12'}`}> 
        <div className="timeline-item relative pb-12">
          <div className={`icon-fill-water absolute ${currentLanguage === 'ar' ? 'right-[-3.90rem]' : 'left-[-3.90rem]'} top-0.5 z-10 flex size-10 items-center justify-center rounded-full bg-[var(--primary-color)] text-white`}>
            <Briefcase size={24} />
          </div>
          <h3 className="text-[var(--text-light)] text-lg font-semibold leading-normal mb-1">
            {t.exp1Title}
          </h3>
          <p className="text-[var(--text-darker)] text-sm font-normal leading-normal">
            {t.exp1Date}
          </p>
          <ul className="mt-2 list-disc list-inside text-[var(--text-medium)] text-sm space-y-1">
            <li>{t.exp1Desc1}</li>
            <li>{t.exp1Desc2}</li>
            <li>{t.exp1Desc3}</li>
            <li>{t.exp1Desc4}</li>
          </ul>
        </div>

        <div className="timeline-item relative pb-8">
          <div className={`icon-fill-water absolute ${currentLanguage === 'ar' ? 'right-[-3.90rem]' : 'left-[-3.90rem]'} top-0.5 z-10 flex size-10 items-center justify-center rounded-full bg-[var(--primary-color)] text-white`}>
            <Briefcase size={24} />
          </div>
          <h3 className="text-[var(--text-light)] text-lg font-semibold leading-normal mb-1">
            {t.exp2Title}
          </h3>
          <p className="text-[var(--text-darker)] text-sm font-normal leading-normal">
            {t.exp2Date}
          </p>
          <ul className="mt-2 list-disc list-inside text-[var(--text-medium)] text-sm space-y-1">
            <li>{t.exp2Desc1}</li>
            <li>{t.exp2Desc2}</li>
            <li>{t.exp2Desc3}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;