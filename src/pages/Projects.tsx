import React, { useState } from 'react';
import { Calendar, MapPin, Star, Filter } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Project {
  id: string;
  title: string;
  category: 'glass' | 'aluminum' | 'contracting';
  description: string;
  image: string;
  location: string;
  date: string;
  rating: number;
}

const Projects: React.FC = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const projects: Project[] = [
    {
      id: '1',
      title: 'مجمع الرياض التجاري',
      category: 'glass',
      description: 'تركيب واجهات زجاجية متطورة للمجمع التجاري بمساحة 15,000 متر مربع',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
      location: 'الرياض',
      date: '2024',
      rating: 5
    },
    {
      id: '2',
      title: 'فيلا العائلة الملكية',
      category: 'aluminum',
      description: 'تصميم وتركيب نوافذ وأبواب الألمنيوم الفاخرة مع عزل حراري متقدم',
      image: 'https://images.pexels.com/photos/271667/pexels-photo-271667.jpeg',
      location: 'جدة',
      date: '2024',
      rating: 5
    },
    {
      id: '3',
      title: 'مستشفى الملك فهد',
      category: 'contracting',
      description: 'إنجاز مشروع توسعة المستشفى مع جميع التشطيبات والمرافق',
      image: 'https://images.pexels.com/photos/1216544/pexels-photo-1216544.jpeg',
      location: 'الدمام',
      date: '2023',
      rating: 5
    },
    {
      id: '4',
      title: 'برج الأعمال المركزي',
      category: 'glass',
      description: 'تركيب واجهة زجاجية ذكية لبرج من 25 طابق مع أنظمة تحكم متطورة',
      image: 'https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg',
      location: 'الرياض',
      date: '2023',
      rating: 5
    },
    {
      id: '5',
      title: 'مصنع الصناعات الغذائية',
      category: 'aluminum',
      description: 'تصميم وتنفيذ هياكل الألمنيوم للمصنع مع أنظمة التهوية الصناعية',
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
      location: 'الخبر',
      date: '2023',
      rating: 4
    },
    {
      id: '6',
      title: 'مجمع سكني راقي',
      category: 'contracting',
      description: 'بناء مجمع سكني متكامل يضم 200 وحدة سكنية مع جميع المرافق',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
      location: 'مكة المكرمة',
      date: '2022',
      rating: 5
    }
  ];

  const categories = [
    { key: 'all', label: t('projects.filter.all') },
    { key: 'glass', label: t('projects.filter.glass') },
    { key: 'aluminum', label: t('projects.filter.aluminum') },
    { key: 'contracting', label: t('projects.filter.contracting') }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">{t('projects.title')}</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              اكتشفوا مجموعة من أفضل مشاريعنا المنجزة بنجاح والتي تعكس خبرتنا وإتقاننا
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.key
                    ? 'bg-amber-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-gray-800">
                      {project.category === 'glass' ? 'زجاج' : 
                       project.category === 'aluminum' ? 'ألمنيوم' : 'مقاولات'}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-gray-500">
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{project.date}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < project.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <button className="text-amber-600 font-semibold hover:text-amber-700 transition-colors duration-200">
                      عرض التفاصيل
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-amber-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">إنجازاتنا في أرقام</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'مشروع منجز' },
              { number: '15+', label: 'سنة خبرة' },
              { number: '98%', label: 'رضا العملاء' },
              { number: '1M+', label: 'متر مربع منفذ' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;