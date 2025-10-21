import React from 'react';

import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Award, Users, Clock, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import SectionWithBackground from "../components/SectionWithBackground"; 
const Home: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    { icon: Award, title: 'خبرة واسعة', description: 'أكثر من 15 سنة في مجال المقاولات' },
    { icon: Users, title: 'فريق محترف', description: 'مهندسون وفنيون معتمدون' },
    { icon: Clock, title: 'التزام بالمواعيد', description: 'تسليم المشاريع في الوقت المحدد' },
    { icon: CheckCircle, title: 'ضمان الجودة', description: 'أعلى معايير الجودة والإتقان' }
  ];



  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-blue-500/10"></div>
        
       <SectionWithBackground section="hero" t={t}>
  <div className="space-y-8 text-center">
    <h1 className="text-4xl lg:text-6xl font-bold space-y-2">
      <span>{t("home.hero.title")}</span>
      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
        {t("home.hero.subtitle")}
      </span>
    </h1>

    <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
      {t("home.hero.description")}
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <Link
        to="/contact"
        className="bg-gradient-to-r from-sky-400 to-sky-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 rtl:space-x-reverse"
      >
        <span>{t("home.hero.cta")}</span>
        <ArrowRight className="w-5 h-5" />
      </Link>
      <Link
        to="/projects"
        className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
      >
        {t("home.hero.explore")}
      </Link>
    </div>
  </div>
</SectionWithBackground>



        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-amber-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              لماذا نحن الخيار الأمثل؟
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نحن نقدم خدمات متميزة بأعلى معايير الجودة والاحترافية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-sky-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('services.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Glass Services */}
             <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
  <img
    src="/images/al-quwwa-al-ashira-custom-glass-riyadh-2025-1.jpg"
    alt="Stainless Steel"
    className="h-48 w-full object-cover"
  />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{t('services.glass.title')}</h3>
                <p className="text-gray-600 mb-4">{t('services.glass.description')}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-sky-600 font-semibold hover:text-amber-700 transition-colors duration-200"
                >
                  <span>اقرأ المزيد</span>
                  <ArrowRight className="w-4 h-4 mr-2" />
                </Link>
              </div>
            </div>

            {/* Aluminum Services */}
               <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
  <img
    src="/images/al-quwwa-al-ashira-aluminum-jeddah-2024.jpeg"
    alt="Stainless Steel"
    className="h-48 w-full object-cover"
  />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{t('services.aluminum.title')}</h3>
                <p className="text-gray-600 mb-4">{t('services.aluminum.description')}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-sky-600 font-semibold hover:text-amber-700 transition-colors duration-200"
                >
                  <span>اقرأ المزيد</span>
                  <ArrowRight className="w-4 h-4 mr-2" />
                </Link>
              </div>
            </div>

            {/* General Contracting 
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="h-48 bg-gradient-to-br from-sky-400 to-sky-600"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{t('services.contracting.title')}</h3>
                <p className="text-gray-600 mb-4">{t('services.contracting.description')}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-sky-600 font-semibold hover:text-amber-700 transition-colors duration-200"
                >
                  <span>اقرأ المزيد</span>
                  <ArrowRight className="w-4 h-4 mr-2" />
                </Link>
              </div>
            </div>*/}

             {/* General Contracting */}
           <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
  <img
    src="/images/al-quwwa-al-ashira-stainless-steel-khobar-2023.jpeg"
    alt="Stainless Steel"
    className="h-48 w-full object-cover"
  />
  <div className="p-6">
    <h3 className="text-2xl font-bold text-gray-900 mb-3">{t('services.stainless.title')}</h3>
    <p className="text-gray-600 mb-4">{t('services.stainless.description')}</p>
    <Link
      to="/services"
      className="inline-flex items-center text-sky-600 font-semibold hover:text-amber-700 transition-colors duration-200"
    >
      <span>اقرأ المزيد</span>
      <ArrowRight className="w-4 h-4 mr-2" />
    </Link>
  </div>
</div>

          </div>
        </div>
      </section>

    
      {/* CTA Section */}
    <section className="py-20 bg-white text-gray-900">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-3xl lg:text-4xl font-bold mb-6">
      جاهزون لتحويل رؤيتكم إلى واقع؟
    </h2>
    <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
      تواصلوا معنا اليوم واحصلوا على استشارة مجانية لمشروعكم القادم
    </p>
    <Link
      to="/contact"
      className="inline-flex items-center bg-gradient-to-r from-sky-400 to-sky-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 space-x-2 rtl:space-x-reverse"
    >
      <span>ابدأ مشروعك معنا</span>
      <ArrowRight className="w-5 h-5" />
    </Link>
  </div>
</section>

    </div>
  );
};

export default Home;