import React from 'react';
import { ExternalLink, ChevronRight } from 'lucide-react';

interface ProjectsProps {
  currentLanguage: string;
}

const Projects: React.FC<ProjectsProps> = ({ currentLanguage }) => {
  const translations = {
    ar: {
      projectsTitle: "المشاريع",
      project1Title: "كشف رسائل التصيد الاحتيالي بالذكاء الاصطناعي",
      project2Title: "استغلال ثغرات FTP",
      viewProjectLink: "عرض المشروع",
      moreProjectsButton: "المزيد من المشاريع"
    },
    en: {
      projectsTitle: "Projects",
      project1Title: "AI-Based Phishing Email Detection",
      project2Title: "FTP Vulnerability Exploitation",
      viewProjectLink: "View Project",
      moreProjectsButton: "More Projects"
    }
  };

  const t = translations[currentLanguage as keyof typeof translations];

  return (
    <section className="py-12 px-6 bg-[var(--section-bg)] rounded-lg border border-[var(--border-color)] shadow-xl shadow-black/20 mb-12" id="projects">
      <h2 className="text-[var(--text-light)] text-2xl sm:text-3xl font-bold leading-tight tracking-[-0.015em] mb-8">
        {t.projectsTitle}
      </h2>

      <div className="grid grid-cols-2 gap-4 sm:gap-5 md:gap-6">
        <div className="flex flex-col gap-2 rounded-lg border border-[var(--border-color-light)] bg-[var(--card-bg)] p-4 hover:shadow-lg hover:shadow-black/30 transition-shadow text-xs sm:text-sm md:text-base leading-snug max-w-full">
          <div className="text-[var(--primary-color)] shrink-0">
            <ExternalLink size={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-sm text-[var(--text-light)] whitespace-normal break-words leading-snug">
              {t.project1Title}
            </h3>
            <a className="text-[var(--primary-color)] hover:underline font-medium truncate" href="#">
              {t.viewProjectLink}
            </a>
          </div>
        </div>
        
        <div className="flex flex-col gap-2 rounded-lg border border-[var(--border-color-light)] bg-[var(--card-bg)] p-4 hover:shadow-lg hover:shadow-black/30 transition-shadow text-xs sm:text-sm md:text-base leading-snug max-w-full">
          <div className="text-[var(--primary-color)] shrink-0">
            <ExternalLink size={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-sm text-[var(--text-light)] whitespace-normal break-words leading-snug">
              {t.project2Title}
            </h3>
            <a className="text-[var(--primary-color)] hover:underline font-medium truncate" href="#">
              {t.viewProjectLink}
            </a>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center mt-8">
        <a href="/projects" className="inline-flex items-center justify-center rounded-lg h-12 bg-[var(--primary-color)] hover:bg-[var(--primary-color-hover)] text-white text-base font-medium leading-normal tracking-[0.015em] px-6 transition-colors icon-wave">
          <span>{t.moreProjectsButton}</span>
          <ChevronRight className="ml-2" size={24} />
        </a>
      </div>
    </section>
  );
};

export default Projects;