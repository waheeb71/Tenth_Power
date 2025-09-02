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
      alt="شعار القوة العاشرة للمقاولات العامة"
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

  {/* Social Icons */}
  <div className="flex space-x-4 rtl:space-x-reverse pt-3">
    {/* Facebook */}
    <a
      href="https://www.facebook.com/share/1B76d6yTDp/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تابعنا على فيسبوك"
      className="flex items-center justify-center w-10 h-10 bg-gray-800 hover:bg-amber-600 rounded-full transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-amber-500/20"
    >
      <Facebook className="w-5 h-5 text-gray-100" />
    </a>

    {/* Instagram */}
    <a
      href="https://www.instagram.com/ZJJ4021"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تابعنا على إنستغرام"
      className="flex items-center justify-center w-10 h-10 bg-gray-800 hover:bg-amber-600 rounded-full transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-amber-500/20"
    >
      <Instagram className="w-5 h-5 text-gray-100" />
    </a>

    {/* Telegram */}
    <a
      href="https://t.me/Ponamoha"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تواصل معنا على تيليجرام"
      className="flex items-center justify-center w-10 h-10 bg-gray-800 hover:bg-amber-600 rounded-full transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-amber-500/20"
    >
      <img
        src="/icons/telegram.svg"
        alt="Telegram - تواصل مع القوة العاشرة للمقاولات العامة، أعمال الزجاج والألمنيوم والستيل"
        className="w-5 h-5 brightness-0 invert"
      />
    </a>

    {/* WhatsApp */}
    <a
      href="https://wa.me/966532438253"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تحدث معنا على واتساب"
      className="flex items-center justify-center w-10 h-10 bg-gray-800 hover:bg-amber-600 rounded-full transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-amber-500/20"
    >
      <img
        src="/icons/whatsapp.svg"
        alt="WhatsApp - تواصل مباشرة مع القوة العاشرة للمقاولات العامة، متخصصون في الزجاج والألمنيوم والستيل"
        className="w-5 h-5 brightness-0 invert"
      />
    </a>

    {/* Snapchat */}
    <a
      href="https://www.snapchat.com/add/zjjskryt24?share_id=dOfCOthKqmw&locale=ar-AE"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تابعنا على سناب شات"
      className="flex items-center justify-center w-10 h-10 bg-gray-800 hover:bg-amber-600 rounded-full transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-amber-500/20"
    >
      <img
        src="/icons/snapchat.svg"
        alt="Snapchat - شاهد مشاريع القوة العاشرة للمقاولات العامة في الزجاج والألمنيوم والستيل"
        className="w-5 h-5 filter brightness-0 invert"
      />
    </a>

    {/* TikTok */}
    <a
      href="https://www.tiktok.com/@user0532438253?_t=ZS-8zOaCY7q4xg&_r=1"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="شاهدنا على تيك توك"
      className="flex items-center justify-center w-10 h-10 bg-gray-800 hover:bg-amber-600 rounded-full transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-amber-500/20"
    >
      <img
        src="/icons/tiktok.svg"
        alt=""
        className="w-5 h-5 filter brightness-0 invert"
      />
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