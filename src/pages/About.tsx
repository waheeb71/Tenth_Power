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
      description: 'نحرص على تنفيذ وتركيب أعمال الزجاج والألمنيوم بأعلى معايير الجودة'
    },
    {
      icon: Users,
      title: 'فريق متخصص',
      description: 'فريقنا يضم فنيين ومهندسين ذوي خبرة عالية في تركيب الزجاج والألمنيوم'
    },
    {
      icon: Target,
      title: 'الدقة في التنفيذ',
      description: 'نلتزم بالدقة في القياسات والتركيب لضمان أفضل النتائج'
    },
    {
      icon: Eye,
      title: 'رؤية مستقبلية',
      description: 'نسعى لتقديم حلول تركيب حديثة ومبتكرة تواكب التطور المعماري'
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
              <h2 className="text-3xl font-bold text-gray-900">من نحن</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                تأسست شركة <strong>القوة العاشرة</strong> لتكون من الشركات المتميزة في 
                مجال <strong>تركيب الزجاج والألمنيوم والاستانلس ستيل</strong> في المملكة العربية السعودية.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                نقدم خدماتنا في تنفيذ وتركيب الواجهات الزجاجية، الأبواب والنوافذ الألمنيوم، القواطع الداخلية، 
                والدرابزينات المعدنية، بأعلى درجات الجودة والدقة في التنفيذ.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="images/logo.jpg"
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
              نؤمن أن النجاح يتحقق من خلال الالتزام بالجودة، الدقة، والاحترافية في التركيب.
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
                أن نكون الشركة الرائدة والمفضلة في مجال تركيب الزجاج والألمنيوم والاستانلس ستيل، 
                من خلال تقديم حلول تنفيذية دقيقة وجودة تفوق التوقعات.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <Target className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">رسالتنا</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                تقديم خدمات تركيب الزجاج والألمنيوم بأعلى معايير الجودة والالتزام بالمواعيد، 
                مع الحرص على تحقيق رضا العملاء وبناء علاقات مستدامة قائمة على الثقة.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
