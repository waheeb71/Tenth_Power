import React from 'react';
import { Shield, Settings, Building, Wrench, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import SectionWithBackground from "../components/SectionWithBackground"; 
const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Shield,
      title: 'أعمال الزجاج',
      description: 'تركيب وصيانة جميع أنواع الزجاج المعماري والديكوري بأحدث التقنيات',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
      features: [
        'زجاج السيكوريت والمقسى',
        'الواجهات الزجاجية',
        'النوافذ والأبواب الزجاجية',
        'الزجاج الملون والديكوري',
        'زجاج العزل الحراري'
      ]
    },
    {
      icon: Settings,
      title: 'أعمال الألمنيوم',
      description: 'تصنيع وتركيب هياكل الألمنيوم والنوافذ والأبواب بجودة عالية',
      image: 'https://images.pexels.com/photos/271667/pexels-photo-271667.jpeg',
      features: [
        'نوافذ وأبواب الألمنيوم',
        'الواجهات الألمنيوم المركبة',
        'الهياكل المعدنية',
        'الحواجز والدرابزين',
        'أنظمة التهوية'
      ]
    },

  ];

  const process = [
    { step: '01', title: 'التشاور والتقييم', description: 'نبدأ بفهم احتياجاتكم وتقييم المشروع' },
    { step: '02', title: 'التصميم والتخطيط', description: 'نضع تصميم مفصل وخطة زمنية للتنفيذ' },
    { step: '03', title: 'التنفيذ والمتابعة', description: 'نشرع في التنفيذ مع المتابعة المستمرة' },
    { step: '04', title: 'التسليم والضمان', description: 'نسلم المشروع مع ضمان شامل للجودة' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
   <SectionWithBackground section="services" t={t}>
  <h1 className="text-4xl lg:text-5xl font-bold mb-6">{t('services.title')}</h1>
  <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
    نقدم مجموعة شاملة من الخدمات المتخصصة في مجال المقاولات والزجاج والألمنيوم
  </p>
</SectionWithBackground>


      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                  </div>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900">ما نقدمه:</h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3 rtl:space-x-reverse">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 object-cover"
                    />
                  </div>
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl opacity-20"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">عملية العمل</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نتبع منهجية واضحة ومدروسة لضمان نجاح كل مشروع
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-xl">{step.step}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
                
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-amber-500 to-amber-600"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-amber-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            مستعدون لبدء مشروعكم؟
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            تواصلوا معنا الآن واحصلوا على استشارة مجانية وعرض سعر مفصل
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-amber-600 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            احصل على عرض سعر مجاني
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;