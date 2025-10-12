import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, ArrowRight, Sparkles } from 'lucide-react';
import { TelegramIcon } from "./icons/TelegramIcon";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-amber-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-amber-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-500"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Enhanced Wave Separator */}
      <div className="w-full overflow-hidden leading-none relative">
        <svg
          className="relative block w-full h-16 sm:h-20 lg:h-24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="25%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="75%" stopColor="#ef4444" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <path
            d="M0,0 C150,80 350,0 500,60 C650,120 850,20 1000,80 C1100,120 1150,60 1200,80 L1200,0 L0,0 Z"
            fill="url(#waveGradient)"
            filter="url(#glow)"
            className="animate-pulse"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 py-12 lg:py-16">
          
          {/* Enhanced Company Info */}
          <div className="space-y-6 text-center md:text-right">
            <div className="flex items-center justify-center md:justify-start space-x-4 rtl:space-x-reverse">
              <div className="relative">
                <img
                  src="/logo.png"
                  alt="شعار القوة العاشرة للمقاولات العامة"
                  className="w-16 h-16 object-cover rounded-2xl border-2 border-amber-500 shadow-2xl shadow-amber-500/30 hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-green-400 to-green-500 rounded-full animate-ping"></div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
                  القوة العاشرة
                </h3>
                <p className="text-amber-200 text-sm font-medium flex items-center justify-center md:justify-start space-x-1 rtl:space-x-reverse">
                  <Sparkles className="w-3 h-3" />
                  <span>للمقاولات العامة</span>
                </p>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
              شركة رائدة في مجال المقاولات، الزجاج، والألمنيوم. نُحقق أحلامك بجودة لا تُضاهى وخبرة تمتد لسنوات.
            </p>

            {/* Enhanced Social Icons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-4">
              {[
                { href: "https://www.facebook.com/share/1B76d6yTDp/", icon: Facebook, label: "فيسبوك", color: "hover:bg-blue-600" },
                { href: "https://www.instagram.com/ZJJ4021", icon: Instagram, label: "إنستغرام", color: "hover:bg-pink-600" },
                { href: "https://t.me/Ponamoha", icon: "/icons/telegram.svg", label: "تيليجرام", color: "hover:bg-blue-500", isImage: true },
                { href: "https://wa.me/966532438253", icon: "/icons/whatsapp.svg", label: "واتساب", color: "hover:bg-green-600", isImage: true },
                { href: "https://www.snapchat.com/add/zjjskryt24", icon: "/icons/snapchat.svg", label: "سناب شات", color: "hover:bg-yellow-500", isImage: true },
                { href: "https://www.tiktok.com/@user0532438253", icon: "/icons/tiktok.svg", label: "تيك توك", color: "hover:bg-black", isImage: true }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`group relative flex items-center justify-center w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-700 ${social.color} rounded-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-2xl`}
                >
                  {social.isImage ? (
                    <img
                      src={social.icon}
                      alt={social.label}
                      className="w-5 h-5 brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                    />
                  ) : (
                    <social.icon className="w-5 h-5 text-gray-100 group-hover:text-white transition-colors duration-300" />
                  )}
                  
                  {/* Tooltip */}
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Enhanced Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center space-x-2 rtl:space-x-reverse">
              <div className="w-1 h-6 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full"></div>
              <span>روابط سريعة</span>
            </h3>
            <ul className="space-y-3">
              {[
                { path: '/', label: t('nav.home'), icon: "" },
                { path: '/about', label: t('nav.about'), icon: "" },
                { path: '/services', label: t('nav.services'), icon: "" },
                { path: '/projects', label: t('nav.projects'), icon: "" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="group flex items-center space-x-3 rtl:space-x-reverse text-gray-300 hover:text-amber-400 transition-all duration-300 p-2 rounded-lg hover:bg-white/5"
                  >
                    <span className="text-sm">{item.icon}</span>
                    <span className="flex-1">{item.label}</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Enhanced Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center space-x-2 rtl:space-x-reverse">
              <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-purple-600 rounded-full"></div>
              <span>خدماتنا</span>
            </h3>
            <ul className="space-y-3">
              {[
                { text: "أعمال الزجاج المعماري", icon: "" },
                { text: "تركيب الألمنيوم", icon: "" },
                { text: "أعمال الاستانلس ستيل", icon: "" },
                { text: "المقاولات العامة", icon: "" },
                { text: "الصيانة والدعم", icon: "" }
              ].map((service, index) => (
                <li key={index} className="group flex items-center space-x-3 rtl:space-x-reverse text-gray-300 hover:text-white transition-all duration-300 p-2 rounded-lg hover:bg-white/5">
                  <span className="text-sm">{service.icon}</span>
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <span className="w-2 h-2 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full group-hover:scale-125 transition-transform duration-300"></span>
                    <span className="text-sm">{service.text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Enhanced Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center space-x-2 rtl:space-x-reverse">
              <div className="w-1 h-6 bg-gradient-to-b from-green-400 to-green-600 rounded-full"></div>
              <span>تواصل معنا</span>
            </h3>
            <div className="space-y-4">
              <div className="group flex items-start space-x-4 rtl:space-x-reverse p-3 rounded-xl hover:bg-white/5 transition-all duration-300">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">هاتف</p>
                  <a href="tel:+966532438253" className="text-white hover:text-green-400 transition-colors duration-200 font-medium text-lg">
                   +966 53 243 8253
                  </a>
                </div>
              </div>

              <div className="group flex items-start space-x-4 rtl:space-x-reverse p-3 rounded-xl hover:bg-white/5 transition-all duration-300">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">البريد الإلكتروني</p>
                  <a href="mailto:Zjajkryt78@gmail.com" className="text-white hover:text-blue-400 transition-colors duration-200 text-sm break-all">
                    Zjajkryt78@gmail.com
                  </a>
                </div>
              </div>

              <div className="group flex items-start space-x-4 rtl:space-x-reverse p-3 rounded-xl hover:bg-white/5 transition-all duration-300">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">الموقع</p>
                  <p className="text-white text-sm">المملكة العربية السعودية</p>
                </div>
              </div>
            </div>

            {/* Enhanced Call Button for Mobile */}
            <div className="md:hidden mt-8">
              <a
                href="tel:+966532438253"
                className="group w-full flex items-center justify-center space-x-3 rtl:space-x-reverse bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-amber-500/30 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 group-hover:animate-bounce" />
                <span>اتصل بنا الآن</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </a>
            </div>
          </div>
        </div>

        {/* Enhanced Decorative Divider */}
        <div className="relative my-8">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 bg-gradient-to-br from-slate-900 via-gray-900 to-amber-900">
            <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white animate-pulse" />
            </div>
          </div>
        </div>

        {/* Enhanced Copyright */}
        <div className="py-8 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm flex items-center space-x-2 rtl:space-x-reverse">
              <span>© 2025 القوة العاشرة للمقاولات العامة.</span>
              <span className="hidden sm:inline">|</span>
              <span>جميع الحقوق محفوظة.</span>
            </p>
            <div className="flex items-center space-x-4 rtl:space-x-reverse text-gray-400 text-sm">
              <span className="flex items-center space-x-1 rtl:space-x-reverse">
               {/* <span>صُنع بـ</span>
                <span className="text-red-500 animate-pulse">❤️</span>
                <span>في السعودية</span> */}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom glow effect */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-amber-500 to-purple-500 animate-pulse"></div>
    </footer>
  );
};

export default Footer;