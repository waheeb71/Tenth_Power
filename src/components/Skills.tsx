import React from 'react';
import { Code, Database, Shield, Server, Brain, Network } from 'lucide-react';

interface SkillsProps {
  currentLanguage: string;
}

const Skills: React.FC<SkillsProps> = ({ currentLanguage }) => {
  const translations = {
    ar: {
      skillsTitle: "المهارات التقنية",
      skillProgLangTitle: "لغات البرمجة",
      skillDatabasesTitle: "قواعد البيانات",
      skillCyberToolsTitle: "الأمن السيبراني والأدوات",
      skillBackendWebTitle: "تطوير الخلفية والويب",
      skillAITitle: "الذكاء الاصطناعي",
      skillAIDesc: "التعلم الآلي، التعلم العميق، معالجة اللغة الطبيعية",
      skillNetworkingTitle: "الشبكات",
      skillNetworkingDesc: "TCP/IP، DNS، DHCP، جدران الحماية، الشبكات الافتراضية الخاصة",
      languagesTitle: "اللغات",
      langArabicName: "العربية",
      langArabicLevel: "اللغة الأم",
      langEnglishName: "الإنجليزية",
      langEnglishLevel: "طلاقة",
      softSkillsTitle: "المهارات الشخصية",
      softSkillPressure: "القدرة على العمل تحت الضغط",
      softSkillProblemSolving: "مهارات حل المشكلات",
      softSkillAnalyticalDetail: "التفكير التحليلي والانتباه للتفاصيل",
      softSkillCommunicationTeamwork: "مهارات التواصل الفعّال والعمل الجماعي",
      softSkillTimeManagementLearning: "إدارة الوقت والتعلم المستمر",
      softSkillResponsibility: "تحمل المسؤولية"
    },
    en: {
      skillsTitle: "Technical Skills",
      skillProgLangTitle: "Programming Languages",
      skillDatabasesTitle: "Databases",
      skillCyberToolsTitle: "Cybersecurity & Tools",
      skillBackendWebTitle: "Backend & Web Development",
      skillAITitle: "Artificial Intelligence",
      skillAIDesc: "Machine Learning, Deep Learning, NLP",
      skillNetworkingTitle: "Networking",
      skillNetworkingDesc: "TCP/IP, DNS, DHCP, Firewalls, VPNs",
      languagesTitle: "Languages",
      langArabicName: "Arabic",
      langArabicLevel: "Native",
      langEnglishName: "English",
      langEnglishLevel: "Fluent",
      softSkillsTitle: "Soft Skills",
      softSkillPressure: "Ability to work under pressure",
      softSkillProblemSolving: "Problem-solving skills",
      softSkillAnalyticalDetail: "Analytical thinking and attention to detail",
      softSkillCommunicationTeamwork: "Effective communication and teamwork skills",
      softSkillTimeManagementLearning: "Time management and continuous learning",
      softSkillResponsibility: "Taking responsibility"
    }
  };

  const t = translations[currentLanguage as keyof typeof translations];

  return (
    <section className="py-12 px-6 bg-[var(--section-bg)] rounded-lg border border-[var(--border-color)] shadow-xl shadow-black/20 mb-12" id="skills">
      <h2 className="text-[var(--text-light)] text-3xl font-bold leading-tight tracking-[-0.015em] mb-8">
        {t.skillsTitle}
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3">
        <div className="flex flex-col gap-3 w-full max-w-xs rounded-lg border border-[var(--border-color-light)] bg-[var(--card-bg)] p-3 hover:shadow-lg hover:shadow-black/30 transition-shadow text-xs sm:text-sm md:text-base">
          <div className="text-[var(--primary-color)]">
            <Code className="icon-wave w-6 h-6 sm:w-7 sm:h-7" />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-[var(--text-light)] text-base sm:text-lg md:text-xl font-semibold leading-tight">
              {t.skillProgLangTitle}
            </h3>
            <p className="text-[var(--text-medium)] text-xs sm:text-sm md:text-base leading-normal break-words">
              Python, Java, C++, JavaScript, Bash
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 w-full max-w-xs rounded-lg border border-[var(--border-color-light)] bg-[var(--card-bg)] p-3 hover:shadow-lg hover:shadow-black/30 transition-shadow text-xs sm:text-sm md:text-base">
          <div className="text-[var(--primary-color)]">
            <Database className="icon-wave w-6 h-6 sm:w-7 sm:h-7" />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-[var(--text-light)] text-sm sm:text-base md:text-lg font-semibold leading-tight">
              {t.skillDatabasesTitle}
            </h3>
            <p className="text-[var(--text-medium)] text-xs sm:text-sm md:text-base leading-normal break-words">
              MySQL, PostgreSQL, MongoDB
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 w-full max-w-xs rounded-lg border border-[var(--border-color-light)] bg-[var(--card-bg)] p-3 hover:shadow-lg hover:shadow-black/30 transition-shadow text-xs sm:text-sm md:text-base">
          <div className="text-[var(--primary-color)]">
            <Shield className="icon-wave w-6 h-6 sm:w-7 sm:h-7" />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-[var(--text-light)] text-sm sm:text-base md:text-lg font-semibold leading-tight">
              {t.skillCyberToolsTitle}
            </h3>
            <p className="text-[var(--text-medium)] text-xs sm:text-sm md:text-base leading-normal break-words">
              Penetration Testing (Nmap, Metasploit), Wireshark, Burp Suite, Kali Linux
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 rounded-lg border border-[var(--border-color-light)] bg-[var(--card-bg)] p-6 hover:shadow-lg hover:shadow-black/30 transition-shadow">
          <div className="text-[var(--primary-color)]">
            <Server className="icon-wave w-6 h-6 sm:w-7 sm:h-7" />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-[var(--text-light)] text-sm sm:text-base md:text-lg font-semibold leading-tight">
              {t.skillBackendWebTitle}
            </h3>
            <p className="text-[var(--text-medium)] text-xs sm:text-sm md:text-base leading-normal break-words">
              Node.js, Express.js, Flask, REST APIs, Secure Coding Practices
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 rounded-lg border border-[var(--border-color-light)] bg-[var(--card-bg)] p-6 hover:shadow-lg hover:shadow-black/30 transition-shadow">
          <div className="text-[var(--primary-color)]">
            <Brain className="icon-wave w-6 h-6 sm:w-7 sm:h-7" />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-[var(--text-light)] text-base sm:text-lg md:text-xl font-semibold leading-tight">
              {t.skillAITitle}
            </h3>
            <p className="text-[var(--text-medium)] text-xs sm:text-sm md:text-base leading-normal break-words">
              {t.skillAIDesc}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 rounded-lg border border-[var(--border-color-light)] bg-[var(--card-bg)] p-6 hover:shadow-lg hover:shadow-black/30 transition-shadow">
          <div className="text-[var(--primary-color)]">
            <Network className="icon-wave w-6 h-6 sm:w-7 sm:h-7" />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-[var(--text-light)] text-sm sm:text-base md:text-lg font-semibold leading-tight">
              {t.skillNetworkingTitle}
            </h3>
            <p className="text-[var(--text-medium)] text-xs sm:text-sm md:text-base leading-normal break-words">
              {t.skillNetworkingDesc}
            </p>
          </div>
        </div>
      </div>

      {/* Languages Section */}
      <div className="mt-10 pt-8 border-t border-[var(--border-color-light)]">
        <h3 className="text-[var(--text-light)] text-2xl font-bold leading-tight tracking-[-0.015em] mb-6">
          {t.languagesTitle}
        </h3>
        <div className="space-y-5">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium text-[var(--text-light)]">
                {t.langArabicName}
              </span>
              <span className="text-sm font-medium text-[var(--text-light)]">
                {t.langArabicLevel}
              </span>
            </div>
            <div className="w-full bg-[var(--border-color)] rounded-full h-3">
              <div className="bg-[var(--primary-color)] h-3 rounded-full wave-bar" style={{width: '95%'}}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium text-[var(--text-light)]">
                {t.langEnglishName}
              </span>
              <span className="text-sm font-medium text-[var(--text-light)]">
                {t.langEnglishLevel}
              </span>
            </div>
            <div className="w-full bg-[var(--border-color)] rounded-full h-3">
              <div className="bg-[var(--primary-color)] h-3 rounded-full wave-bar" style={{width: '90%'}}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Soft Skills Section */}
      <div className="mt-10 pt-8 border-t border-[var(--border-color-light)]">
        <h3 className="text-[var(--text-light)] text-xl font-semibold mb-6">
          {t.softSkillsTitle}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3"> 
          <div className="wave-effect flex items-center justify-center sm:justify-start gap-2 bg-[var(--card-bg)] text-[var(--text-medium)] text-xs font-medium px-4 py-2.5 rounded-lg shadow-sm hover:bg-[var(--primary-color)] hover:text-white transition-all duration-300 cursor-default">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lightning-charge-fill flex-shrink-0" viewBox="0 0 16 16">
              <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/>
            </svg>
            <span className="truncate">{t.softSkillPressure}</span>
          </div>

          <div className="wave-effect flex items-center justify-center sm:justify-start gap-2 bg-[var(--card-bg)] text-[var(--text-medium)] text-xs font-medium px-4 py-2.5 rounded-lg shadow-sm hover:bg-[var(--primary-color)] hover:text-white transition-all duration-300 cursor-default">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-puzzle-fill flex-shrink-0" viewBox="0 0 16 16">
              <path d="M3.112 3.645A1.5 1.5 0 0 1 4.605 2.5H7.5a.5.5 0 0 1 .5.5v.382c0 .696-.488 1.26-.943 1.744C6.678 5.54 6.272 6 6 6c-.272 0-.678-.46-.007-1.356.002-.003.004-.007.005-.01.62-.803.934-1.488.934-2.134V2.5a.5.5 0 0 1 .5-.5h.001c.696 0 1.26.488 1.744.943.422.383.99.943.99 1.558V6c0 .272.46.678 1.356.007l.01-.005c.803-.62 1.488-.934 2.134-.934H13.5a.5.5 0 0 1 .5.5v.382c0 .696-.488 1.26-.943 1.744-.422.383-.99.943-.99 1.558V10c0 .272.46.678 1.356.007l.01-.005c.803-.62 1.488-.934 2.134-.934H13.5a.5.5 0 0 1 .5.5v3.112a1.5 1.5 0 0 1-1.145 1.493H10.5a.5.5 0 0 1-.5-.5v-.382c0-.696.488-1.26.943-1.744.422.383.99.943.99-1.558V10c0-.272-.46-.678-1.356-.007l-.01.005c-.803.62-1.488.934-2.134.934H8.5a.5.5 0 0 1-.5-.5v-.382c0-.696.488-1.26.943-1.744C9.322 7.46 9.728 7 10 7c.272 0 .678.46.007 1.356a.007.007 0 0 1-.005.01c-.62.803-.934 1.488-.934 2.134V10.5a.5.5 0 0 1-.5.5h-.001c-.696 0-1.26-.488-1.744-.943-.422-.383-.99-.943-.99-1.558V6c0-.272-.46-.678-1.356-.007l-.01.005c-.803.62-1.488.934-2.134-.934H2.5a.5.5 0 0 1-.5-.5V1.888A1.5 1.5 0 0 1 3.112.395H5.5a.5.5 0 0 1 .5.5v.382c0 .696.488 1.26.943 1.744.422.383.99.943.99 1.558V6c0-.272-.46-.678-1.356-.007L6.077 6.005C5.274 6.625 4.588 6.94 3.954 6.94H2.5a.5.5 0 0 1-.5-.5V3.112A1.5 1.5 0 0 1 3.112 1.62H4.5a.5.5 0 0 1 .5.5v.382c0 .696.488 1.26.943 1.744.422.383.99.943.99 1.558V6c0 .272-.46-.678-1.356-.007L5.077 6.005C4.274 6.625 3.588 6.94 2.954 6.94H1.5a.5.5 0 0 1-.5-.5V3.112A1.5 1.5 0 0 1 .395 1.62zM.943 11.256c.422.383.99.943.99 1.558V14.5a.5.5 0 0 0 .5.5h.001c.696 0 1.26-.488 1.744-.943.422-.383.99-.943.99-1.558V11.5a.5.5 0 0 0-.5-.5h-.001c-.696 0-1.26.488-1.744.943-.422.383-.99.943-.99 1.558z"/>
            </svg>
            <span className="truncate">{t.softSkillProblemSolving}</span>
          </div>

          <div className="wave-effect flex items-center justify-center sm:justify-start gap-2 bg-[var(--card-bg)] text-[var(--text-medium)] text-xs font-medium px-4 py-2.5 rounded-lg shadow-sm hover:bg-[var(--primary-color)] hover:text-white transition-all duration-300 cursor-default">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search-heart-fill flex-shrink-0" viewBox="0 0 16 16">
              <path d="M6.5 13a6.47 6.47 0 0 0 3.845-1.258h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1A6.471 6.471 0 0 0 13 6.5 6.502 6.502 0 0 0 6.5 0a6.5 6.5 0 1 0 0 13Zm0-8.518c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z"/>
            </svg>
            <span className="truncate">{t.softSkillAnalyticalDetail}</span>
          </div>
          
          <div className="wave-effect flex items-center justify-center sm:justify-start gap-2 bg-[var(--card-bg)] text-[var(--text-medium)] text-xs font-medium px-4 py-2.5 rounded-lg shadow-sm hover:bg-[var(--primary-color)] hover:text-white transition-all duration-300 cursor-default">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-people-fill flex-shrink-0" viewBox="0 0 16 16">
              <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
            </svg>
            <span className="truncate">{t.softSkillCommunicationTeamwork}</span>
          </div>

          <div className="wave-effect flex items-center justify-center sm:justify-start gap-2 bg-[var(--card-bg)] text-[var(--text-medium)] text-xs font-medium px-4 py-2.5 rounded-lg shadow-sm hover:bg-[var(--primary-color)] hover:text-white transition-all duration-300 cursor-default">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock-history flex-shrink-0" viewBox="0 0 16 16">
              <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789zm.866.866A7.01 7.01 0 0 0 11.741 3.2l.789-.615a8.025 8.025 0 0 1 .654.979l-.87.493zm.271.439a7.003 7.003 0 0 0 .299-.985l.976.219a8.003 8.003 0 0 1-.342 1.126l-.933-.36zm-.45.995a7.003 7.003 0 0 0 .299.985l.976-.219a8.003 8.003 0 0 1-.342-1.126l-.933.36zm-.71 1.37A7.01 7.01 0 0 0 12.8 6.259l.615.789a8.025 8.025 0 0 1-.979.654l-.493-.87zm-.866.866A7.01 7.01 0 0 0 11.741 8.8l.789.615a8.025 8.025 0 0 1 .654-.979l-.87-.493zm2.671-3.67VI2.133a.5.5 0 0 0-.03-.184L13.14 3.42a.5.5 0 0 0-.184-.03H8.5a.5.5 0 0 0-.5.5v4.428L5.732 10h-.001a.5.5 0 0 0-.095.838l.058.075a.5.5 0 0 0 .695.03L8 8.441V4h2.867l2.133 2.133V8.5a.5.5 0 0 0 1 0V6.252zM8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm7-8A7 7 0 1 0 1 8a7 7 0 0 0 14 0z"/>
            </svg>
            <span className="truncate">{t.softSkillTimeManagementLearning}</span>
          </div>

          <div className="wave-effect flex items-center justify-center sm:justify-start gap-2 bg-[var(--card-bg)] text-[var(--text-medium)] text-xs font-medium px-4 py-2.5 rounded-lg shadow-sm hover:bg-[var(--primary-color)] hover:text-white transition-all duration-300 cursor-default">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard-check-fill flex-shrink-0" viewBox="0 0 16 16">
              <path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5H3.16L1.84 3.61A2.001 2.001 0 0 0 3.825 6H4a2 2 0 0 0 2-2h4a2 2 0 0 0 2 2h.175A2.001 2.001 0 0 0 14.16 3.61L12.84.5H10.5a.5.5 0 0 1-.5-.5Z"/>
              <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5v-1Zm6.854 7.354-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708Z"/>
            </svg>
            <span className="truncate">{t.softSkillResponsibility}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;