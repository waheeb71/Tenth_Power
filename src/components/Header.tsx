import React from 'react';
import { Menu } from 'lucide-react';

interface HeaderProps {
  currentLanguage: string;
  onLanguageChange: (lang: string) => void;
  mobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  currentLanguage, 
  onLanguageChange, 
  mobileMenuOpen, 
  onToggleMobileMenu 
}) => {
  const translations = {
    ar: {
      headerName: "وهيب الشرعبي",
      navAbout: "عني",
      navSkills: "المهارات",
      navExperience: "الخبرات",
      navEducation: "التعليم",
      navCertifications: "الشهادات",
      navProjects: "المشاريع"
    },
    en: {
      headerName: "Waheeb Al-Sharabi",
      navAbout: "About",
      navSkills: "Skills",
      navExperience: "Experience",
      navEducation: "Education",
      navCertifications: "Certifications",
      navProjects: "Projects"
    }
  };

  const t = translations[currentLanguage as keyof typeof translations];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      if (mobileMenuOpen) {
        onToggleMobileMenu();
      }
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[var(--border-color)] bg-[var(--section-bg)] px-4 md:px-10 py-4 shadow-md">
        <div className="flex items-center gap-3">
          <h2 className="wave-effect text-[var(--text-light)] text-xl font-bold leading-tight tracking-[-0.015em]">
            {t.headerName}
          </h2>
        </div>
        
        <div className="flex items-center gap-1">
          <button 
            className="md:hidden flex items-center justify-center rounded-lg h-10 bg-[var(--card-bg)] hover:bg-[var(--border-color)] text-[var(--text-light)] hover:text-[var(--primary-color)] gap-2 text-sm font-medium leading-normal tracking-[0.015em] min-w-0 px-3 transition-colors" 
            onClick={onToggleMobileMenu}
            aria-label="Toggle menu" 
            aria-expanded={mobileMenuOpen}
          >
            <Menu size={20} />
          </button>
          
          <nav className="hidden md:flex items-center gap-8">
            <button 
              className="text-[var(--text-medium)] hover:text-[var(--primary-color)] text-sm font-medium leading-normal transition-colors"
              onClick={() => scrollToSection('about')}
            >
              {t.navAbout}
            </button>
            <button 
              className="text-[var(--text-medium)] hover:text-[var(--primary-color)] text-sm font-medium leading-normal transition-colors"
              onClick={() => scrollToSection('skills')}
            >
              {t.navSkills}
            </button>
            <button 
              className="text-[var(--text-medium)] hover:text-[var(--primary-color)] text-sm font-medium leading-normal transition-colors"
              onClick={() => scrollToSection('experience')}
            >
              {t.navExperience}
            </button>
            <button 
              className="text-[var(--text-medium)] hover:text-[var(--primary-color)] text-sm font-medium leading-normal transition-colors"
              onClick={() => scrollToSection('education')}
            >
              {t.navEducation}
            </button>
            <button 
              className="text-[var(--text-medium)] hover:text-[var(--primary-color)] text-sm font-medium leading-normal transition-colors"
              onClick={() => scrollToSection('certifications')}
            >
              {t.navCertifications}
            </button>
            <button 
              className="text-[var(--text-medium)] hover:text-[var(--primary-color)] text-sm font-medium leading-normal transition-colors"
              onClick={() => scrollToSection('projects')}
            >
              {t.navProjects}
            </button>
          </nav>

          <div className="wave-effect flex items-center gap-1.5 sm:gap-2 md:gap-2.5">
            <button 
              className={`lang-button p-1 rounded border border-[var(--border-color)] hover:bg-[var(--border-color)] transition-colors ${currentLanguage === 'ar' ? 'active' : ''}`}
              onClick={() => onLanguageChange('ar')}
              aria-label="Arabic Language"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Yemen.svg/24px-Flag_of_Yemen.svg.png" 
                alt="علم اليمن" 
                className="w-6 h-4 rounded-sm object-cover" 
              />
            </button>
            
            <button 
              className={`lang-button p-1 rounded border border-[var(--border-color)] hover:bg-[var(--border-color)] transition-colors ${currentLanguage === 'en' ? 'active' : ''}`}
              onClick={() => onLanguageChange('en')}
              aria-label="English Language"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/24px-Flag_of_the_United_States.svg.png" 
                alt="USA Flag" 
                className="w-6 h-4 rounded-sm object-cover" 
              />
            </button>
          </div>
          
          <div 
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 h-10 border border-[var(--border-color)]" 
            style={{
              backgroundImage: 'url("https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400")',
              backgroundPosition: 'center top 30%'
            }}
          />
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`md:hidden mobile-menu bg-[var(--section-bg)] shadow-md border-b border-[var(--border-color)] ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="flex flex-col px-4 py-2">
          <button 
            className="wave-effect text-[var(--text-medium)] hover:text-[var(--primary-color)] py-2 text-sm font-medium leading-normal transition-colors border-b border-[var(--border-color-light)] text-left"
            onClick={() => scrollToSection('about')}
          >
            {t.navAbout}
          </button>
          <button 
            className="wave-effect text-[var(--text-medium)] hover:text-[var(--primary-color)] py-2 text-sm font-medium leading-normal transition-colors border-b border-[var(--border-color-light)] text-left"
            onClick={() => scrollToSection('skills')}
          >
            {t.navSkills}
          </button>
          <button 
            className="wave-effect text-[var(--text-medium)] hover:text-[var(--primary-color)] py-2 text-sm font-medium leading-normal transition-colors border-b border-[var(--border-color-light)] text-left"
            onClick={() => scrollToSection('experience')}
          >
            {t.navExperience}
          </button>
          <button 
            className="wave-effect text-[var(--text-medium)] hover:text-[var(--primary-color)] py-2 text-sm font-medium leading-normal transition-colors border-b border-[var(--border-color-light)] text-left"
            onClick={() => scrollToSection('education')}
          >
            {t.navEducation}
          </button>
          <button 
            className="wave-effect text-[var(--text-medium)] hover:text-[var(--primary-color)] py-2 text-sm font-medium leading-normal transition-colors border-b border-[var(--border-color-light)] text-left"
            onClick={() => scrollToSection('certifications')}
          >
            {t.navCertifications}
          </button>
          <button 
            className="wave-effect text-[var(--text-medium)] hover:text-[var(--primary-color)] py-2 text-sm font-medium leading-normal transition-colors border-b border-[var(--border-color-light)] text-left"
            onClick={() => scrollToSection('projects')}
          >
            {t.navProjects}
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;