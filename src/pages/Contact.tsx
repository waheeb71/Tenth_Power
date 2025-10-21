// src/pages/ContactPage.tsx
import { useLanguage } from '../contexts/LanguageContext';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import ContactMap from '../components/contact/ContactMap';
import WorkingHours from '../components/contact/WorkingHours';
import SectionWithBackground from "../components/SectionWithBackground"; 
const ContactPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
    

      <SectionWithBackground section="contact" t={t}>
   <h1 className="text-4xl lg:text-5xl font-bold mb-6">{t('contact.title')}</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            نحن هنا للإجابة على جميع استفساراتكم ومساعدتكم في تحقيق مشاريعكم
          </p>
        
</SectionWithBackground>

      


      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">أرسل رسالة</h2>
              <ContactForm />
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">معلومات التواصل</h2>
                <ContactInfo />
              </div>
              <ContactMap />
            {/*  <WorkingHours />*/}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;