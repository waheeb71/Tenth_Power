import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import { TelegramIcon } from "./icons/TelegramIcon";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
   <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900 text-white relative overflow-hidden">
      
      {/* Wave Separator */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 z-0">
        <svg
          className="relative block w-full h-12 sm:h-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#9800f0ff" />
              <stop offset="50%" stopColor="#d97706" />
              <stop offset="100%" stopColor="#c5c0b4ff" />
            </linearGradient>
          </defs>
          <path
            d="M0,0 C300,80 900,0 1200,80 L1200,0 L0,0 Z"
            fill="url(#waveGradient)"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Footer Content */}
        <div className="flex flex-col items-center gap-10 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:items-start py-16">
          
    
          {/* Company Info */}
          <div className="space-y-5">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <img
                src="/logo.png"
               alt="تركيب الزجاج القوة العاشرة"
                className="w-14 h-14 object-cover rounded-full border-2 border-amber-500 shadow-lg"
              />
              <div>
                <h3 className="text-xl font-extrabold bg-gradient-to-r from-amber-400 to-white bg-clip-text text-transparent">
                  القوة العاشرة
                </h3>
                <p className="text-amber-200 text-sm font-medium">للمقاولات العامة</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              شركة رائدة في مجال المقاولات، الزجاج، والألمنيوم. نُحقق أحلامك بجودة لا تُضاهى.
            </p>
            <div className="flex space-x-3 rtl:space-x-reverse pt-2">
              <a href="https://www.facebook.com/share/1B76d6yTDp/" className="p-2 bg-gray-800 rounded-full hover:bg-amber-600 transition-all duration-300 shadow-md hover:shadow-amber-500/20">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/ZJJ4021" className="p-2 bg-gray-800 rounded-full hover:bg-amber-600 transition-all duration-300 shadow-md hover:shadow-amber-500/20">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-amber-600 transition-all duration-300 shadow-md hover:shadow-amber-500/20">
                <TelegramIcon className="w-4 h-4" />
              </a>
              <a href="https://wa.me/966532438253" className="p-2 bg-gray-800 rounded-full hover:bg-amber-600 transition-all duration-300 shadow-md hover:shadow-amber-500/20">
                <WhatsAppIcon className="w-4 h-4" />
              </a>
                {/* Snapchat */}
  <a href="https://www.snapchat.com/add/zjjskryt24?share_id=dOfCOthKqmw&locale=ar-AE" className="p-2 bg-gray-800 rounded-full hover:bg-amber-600 transition-all duration-300 shadow-md hover:shadow-amber-500/20">
    <svg className="w-4 h-4" viewBox="0 0 512 512" fill="white" xmlns="http://www.w3.org/2000/svg">
      <path d="M256 0C114.624 0 0 114.624 0 256c0 141.376 114.624 256 256 256s256-114.624 256-256C512 114.624 397.376 0 256 0zm0 472c-119.296 0-216-96.704-216-216S136.704 40 256 40s216 96.704 216 216-96.704 216-216 216z"/>
      <path d="M256 112c-79.296 0-144 64.704-144 144s64.704 144 144 144 144-64.704 144-144-64.704-144-144-144zm0 256c-61.856 0-112-50.144-112-112s50.144-112 112-112 112 50.144 112 112-50.144 112-112 112z"/>
    </svg>
  </a>

  {/* TikTok */}
  <a href="https://www.tiktok.com/@user0532438253?_t=ZS-8zOaCY7q4xg&_r=1" className="p-2 bg-gray-800 rounded-full hover:bg-amber-600 transition-all duration-300 shadow-md hover:shadow-amber-500/20">
    <svg className="w-4 h-4" viewBox="0 0 448 512" fill="white" xmlns="http://www.w3.org/2000/svg">
      <path d="M448 209.9v-35.2c-15.2 7.1-31.5 11.4-48.5 12.5-17.5 1.2-34.5-1.8-50.4-8.3v162.3c0 66.3-53.7 120-120 120s-120-53.7-120-120 53.7-120 120-120c10.7 0 21.1 1.3 31 3.8v-90.1h62c4.4 0 8-3.6 8-8v-69.3z"/>
    </svg>
  </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h3 className="text-lg font-semibold text-white">روابط سريعة</h3>
            <ul className="space-y-3">
              {[
                { path: '/', label: t('nav.home') },
                { path: '/about', label: t('nav.about') },
                { path: '/services', label: t('nav.services') },
                { path: '/projects', label: t('nav.projects') },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-amber-400 transition-all duration-200 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-transparent group-hover:bg-amber-400 rounded-full mr-2 rtl:mr-0 rtl:ml-2 transition-colors duration-200"></span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-5">
            <h3 className="text-lg font-semibold text-white">خدماتنا</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-center space-x-2 rtl:space-x-reverse">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                <span>أعمال الزجاج المعماري</span>
              </li>
              <li className="flex items-center space-x-2 rtl:space-x-reverse">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                <span>تركيب الألمنيوم</span>
              </li>
               <li className="flex items-center space-x-2 rtl:space-x-reverse">
      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
      <span>أعمال الستيل</span> 
    </li>
              <li className="flex items-center space-x-2 rtl:space-x-reverse">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                <span>المقاولات العامة</span>
              </li>
              <li className="flex items-center space-x-2 rtl:space-x-reverse">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                <span>الصيانة والدعم</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">تواصل معنا</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 rtl:space-x-reverse group">
                <Phone className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">هاتف</p>
                  <a href="tel:+966532438253" className="text-white hover:text-amber-400 transition-colors duration-200 font-medium">
                   +966 53 243 8253
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <Mail className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">البريد</p>
                  <a href="mailto:Zjajkryt78@gmail.com" className="text-white hover:text-amber-400 transition-colors duration-200 text-sm">
                    Zjajkryt78@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <MapPin className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">الموقع</p>
                  <p className="text-white text-sm">المملكة العربية السعودية</p>
                </div>
              </div>
            </div>

            {/* Call Button for Mobile */}
            <div className="sm:hidden mt-6">
              <a
                href="tel:+966532438253"
                className="w-full flex items-center justify-center space-x-2 rtl:space-x-reverse bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-amber-500/30"
              >
                <Phone className="w-4 h-4" />
                <span>اتصل بنا الآن</span>
              </a>
            </div>
          </div>
        </div>
{/* Colored Divider */}
        <div className="h-1 w-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 my-6 rounded-full"></div>

        {/* Divider & Copyright */}
        <div className="border-t border-gray-700/50 pt-8 pb-6 mt-8">
          <p className="text-gray-400 text-sm text-center transition-opacity duration-300">
            © 2025 القوة العاشرة للمقاولات العامة. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;