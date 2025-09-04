import React from 'react';
import { Award, Users, Target, Eye } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import SectionWithBackground from "../components/SectionWithBackground"; 
const About: React.FC = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Award,
      title: 'الجودة والإتقان',
      description: 'نسعى دائماً لتقديم أعلى مستوى من الجودة في جميع مشاريعنا'
    },
    {
      icon: Users,
      title: 'فريق محترف',
      description: 'نضم أفضل المهندسين والفنيين المتخصصين في مجالاتهم'
    },
    {
      icon: Target,
      title: 'الدقة في التنفيذ',
      description: 'نلتزم بالمواصفات والمعايير العالمية في جميع أعمالنا'
    },
    {
      icon: Eye,
      title: 'الرؤية المستقبلية',
      description: 'نواكب أحدث التقنيات والتطورات في مجال البناء والتشييد'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
    <SectionWithBackground section="about" t={t}>
     <h1 className="text-4xl lg:text-5xl font-bold mb-6">{t("about.title")}</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          {t("about.description")}
        </p>
</SectionWithBackground>


      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">قصتنا</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                تأسست شركة القوة العاشرة للمقاولات العامة برؤية واضحة: أن نكون الشركة الرائدة في مجال 
                المقاولات العامة وأعمال الزجاج والألمنيوم في المملكة العربية السعودية. منذ تأسيسنا، 
                نسعى لتحقيق التميز في كل مشروع نتولاه.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                بفضل فريقنا المحترف وخبرتنا الواسعة، نجحنا في تنفيذ مئات المشاريع المتنوعة، من 
                المباني السكنية إلى المجمعات التجارية والمشاريع الحكومية. نفخر بثقة عملائنا ورضاهم 
                التام عن خدماتنا.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg"
                  alt="شركة القوة العاشرة"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">قيمنا ومبادئنا</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نؤمن بأن النجاح يأتي من الالتزام بالقيم والمبادئ السليمة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{value.title}</h3>
                <p className="text-gray-600 text-center">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-2xl">
              <Eye className="w-12 h-12 text-amber-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">رؤيتنا</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                أن نكون الشركة الرائدة والمفضلة في مجال المقاولات العامة وأعمال الزجاج والألمنيوم، 
                ونساهم في بناء مستقبل أفضل من خلال مشاريع متميزة تلبي احتياجات عملائنا وتفوق توقعاتهم.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <Target className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">رسالتنا</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                تقديم خدمات متميزة في مجال المقاولات والزجاج والألمنيوم بأعلى معايير الجودة والاحترافية، 
                مع الالتزام بالمواعيد والميزانيات المحددة، وبناء علاقات طويلة الأمد مع عملائنا.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section 
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">فريق العمل</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نفخر بفريقنا المتخصص من المهندسين والفنيين ذوي الخبرة الواسعة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
                 { name: 'م.w', position: 'المدير التنفيذي', image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg' }, 
              { name: 'م. a', position: 'مدير المشاريع', image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg' }, 
              { name: 'م. b', position: 'مدير التطوير', image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg' } 
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-amber-600 font-medium">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>*/}
    </div>
  );
};

export default About;