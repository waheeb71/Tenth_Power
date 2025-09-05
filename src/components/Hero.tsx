import React from 'react';
import { Github, Instagram, Twitter, Mail, Phone } from 'lucide-react';

interface HeroProps {
  currentLanguage: string;
}

const Hero: React.FC<HeroProps> = ({ currentLanguage }) => {
  const translations = {
    ar: {
      heroName: "وهيب مهيوب علي",
      heroTitle: "متخصص الأمن السيبراني",
      heroParagraph: "أخصائي في مجال الأمن السيبراني، شغوف بحماية الأنظمة والشبكات من التهديدات. ماهر في تقييم الثغرات، واختبار الاختراق، وتنفيذ تدابير أمان قوية لحماية الأصول الرقمية."
    },
    en: {
      heroName: "Waheeb Mahyoob Ali",
      heroTitle: "Cybersecurity Specialist",
      heroParagraph: "A dedicated and skilled Cybersecurity professional with a strong commitment to protecting digital assets and mitigating cyber threats. Experienced in vulnerability assessment, penetration testing, and implementing advanced security measures."
    }
  };

  const t = translations[currentLanguage as keyof typeof translations];

  return (
    <section className="py-12 md:py-16" id="hero">
      <div className="flex flex-row items-center gap-4 md:gap-8"> 
        <div className="flex flex-col gap-4 md:gap-6 text-start flex-grow-0 w-3/5">
          <div className="flex flex-col gap-2">
            <h1 className="mt-7 sm:mt-0 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-black leading-tight tracking-tight font-['Tajawal'] text-[var(--text-light)] pr-3 whitespace-nowrap">
              {t.heroName}
            </h1>
            <h2 className="mt-5 sm:mt-0 text-[var(--text-medium)] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium leading-normal font-['Tajawal'] pr-4">
              {t.heroTitle}
            </h2>
          </div>

          <p className="text-[var(--text-medium)] text-xs sm:text-sm md:text-base lg:text-lg font-normal leading-relaxed max-w-2xl mx-0 font-['Tajawal'] pr-4">
            {t.heroParagraph}
          </p>
       
          <div className="grid grid-cols-3 sm:flex sm:items-center sm:justify-start gap-3 sm:gap-4 md:gap-5 lg:gap-6 mt-2 pr-8">
            <a className="icon-wave text-gray-20 hover:text-[var(--primary-color)] transition-colors" href="https://github.com/waheeb71" aria-label="GitHub">
              <Github className="w-6 h-6" />
            </a>
            <a className="icon-wave text-[#25D366] hover:text-[var(--primary-color)] transition-colors" href="https://wa.me/967738695139" aria-label="WhatsApp">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </a>
            <a className="icon-wave text-[#E1306C] hover:text-[var(--primary-color)] transition-colors" href="https://instagram.com/wa_20_cys" aria-label="Instagram">
              <Instagram className="w-6 h-6" />
            </a>
            <a className="icon-wave text-[#25D366] hover:text-[var(--primary-color)] transition-colors" href="https://x.com/wa__cys" aria-label="Twitter">
              <Twitter className="w-6 h-6" />
            </a>
            <a className="icon-wave text-[#D44638] hover:text-[var(--primary-color)] transition-colors" href="mailto:rhybmhywb9@gmail.com" aria-label="Email">
              <Mail className="w-6 h-6" />
            </a>
            <a className="icon-wave text-[#0CA678] hover:text-[var(--primary-color)] transition-colors" href="tel:+967738695139" aria-label="phone">
              <Phone className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="w-40 sm:w-64 md:w-72 lg:w-80 h-48 sm:h-64 md:h-72 lg:h-80 mx-auto">
          <div 
            className="w-full h-full bg-center bg-no-repeat bg-cover rounded-full shadow-xl border-4 sm:border-6 border-blue-500/40 hover:border-blue-500/70 transition-all duration-300"
            style={{
              backgroundImage: 'url("https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800")',
              backgroundSize: 'cover',
              backgroundPosition: 'center top 10%'
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;