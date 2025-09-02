import React from 'react';
import { Calendar, MapPin, Star, Eye } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onView?: (project: Project) => void;
  language: 'ar' | 'en';
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onView, language }) => {
  const getCategoryLabel = (category: string) => {
    const labels = {
      ar: {
        glass: 'زجاج',
        aluminum: 'ألمنيوم',
        contracting: 'مقاولات'
      },
      en: {
        glass: 'Glass',
        aluminum: 'Aluminum',
        contracting: 'Contracting'
      }
    };
    return labels[language][category as keyof typeof labels['ar']] || category;
  };

  const getStatusLabel = (status: string) => {
    const labels = {
      ar: {
        planning: 'التخطيط',
        'in-progress': 'قيد التنفيذ',
        completed: 'مكتمل',
        'on-hold': 'متوقف مؤقتاً'
      },
      en: {
        planning: 'Planning',
        'in-progress': 'In Progress',
        completed: 'Completed',
        'on-hold': 'On Hold'
      }
    };
    return labels[language][status as keyof typeof labels['ar']] || status;
  };

  const getStatusColor = (status: string) => {
    const colors = {
      planning: 'bg-blue-100 text-blue-800',
      'in-progress': 'bg-yellow-100 text-yellow-800',
      completed: 'bg-green-100 text-green-800',
      'on-hold': 'bg-red-100 text-red-800'
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
      <div className="relative overflow-hidden">
        <img
          src={project.images[0] || 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg'}
          alt={language === 'ar' ? project.title : project.titleEn}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* Overlay with project info */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4">
            <button
              onClick={() => onView?.(project)}
              className="w-full bg-white/90 text-gray-900 py-2 px-4 rounded-lg font-semibold flex items-center justify-center space-x-2 rtl:space-x-reverse hover:bg-white transition-colors duration-200"
            >
              <Eye className="w-4 h-4" />
              <span>{language === 'ar' ? 'عرض التفاصيل' : 'View Details'}</span>
            </button>
          </div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
            {getCategoryLabel(project.category)}
          </span>
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 left-4">
            <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              <Star className="w-3 h-3 inline mr-1" />
              {language === 'ar' ? 'مميز' : 'Featured'}
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 leading-tight">
            {language === 'ar' ? project.title : project.titleEn}
          </h3>
          <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(project.status)}`}>
            {getStatusLabel(project.status)}
          </span>
        </div>

        <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
          {language === 'ar' ? project.description : project.descriptionEn}
        </p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-gray-500">
            <MapPin className="w-4 h-4 flex-shrink-0" />
            <span>{language === 'ar' ? project.location : project.locationEn}</span>
          </div>
          <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-gray-500">
            <Calendar className="w-4 h-4 flex-shrink-0" />
            <span>{new Date(project.completedDate).toLocaleDateString(language === 'ar' ? 'ar-SA' : 'en-US')}</span>
          </div>
        </div>

        {/* Tags */}
        {project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                +{project.tags.length - 3}
              </span>
            )}
          </div>
        )}

        {/* Client Info */}
        {project.clientName && (
          <div className="text-sm text-gray-500 mb-2">
            {language === 'ar' ? 'العميل:' : 'Client:'} {project.clientName}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;