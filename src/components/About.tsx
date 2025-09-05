import React from 'react';

interface AboutProps {
  currentLanguage: string;
}

const About: React.FC<AboutProps> = ({ currentLanguage }) => {
  const translations = {
    ar: {
      aboutMeTitle: "عني",
      aboutMeText: "أخصائي في مجال الأمن السيبراني مكرس ومهارة مع التزام قوي بحماية الأصول الرقمية والتخفيف من التهديدات السيبرانية. خبرة في تقييم الثغرات، واختبار الاختراق، وتنفيذ تدابير أمان متقدمة. ماهر في العمل بشكل مستقل وتعاوني لضمان وضعية أمنية قوية والامتثال في البيئات سريعة الوتيرة. شغوف بالبقاء محدثًا مع أحدث اتجاهات وتقنيات الأمن السيبراني لحماية البنية التحتية التنظيمية."
    },
    en: {
      aboutMeTitle: "About Me",
      aboutMeText: "A dedicated and skilled Cybersecurity professional with a strong commitment to protecting digital assets and mitigating cyber threats. Experienced in vulnerability assessment, penetration testing, and implementing advanced security measures. Adept at working both independently and collaboratively to ensure robust security posture and compliance within fast-paced environments. Passionate about staying updated with the latest cybersecurity trends and technologies to safeguard organizational infrastructure."
    }
  };

  const t = translations[currentLanguage as keyof typeof translations];

  return (
    <section className="py-12 px-6 bg-[var(--section-bg)] rounded-lg border border-[var(--border-color)] shadow-xl shadow-black/20 mb-12" id="about">
      <h2 className="text-[var(--text-light)] text-2xl sm:text-3xl font-bold leading-tight tracking-[-0.015em] mb-6">
        {t.aboutMeTitle}
      </h2>
      <p className="text-[var(--text-medium)] text-sm sm:text-base font-normal leading-relaxed">
        {t.aboutMeText}
      </p>
    </section>
  );
};

export default About;