import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, ArrowRight, Sparkles } from 'lucide-react';
import { TelegramIcon } from "./icons/TelegramIcon";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-sky-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-5 left-5 w-20 h-20 bg-amber-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-500"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Enhanced Wave Separator - صغير جداً */}
      <div className="w-full overflow-hidden leading-none relative">
        <svg
          className="relative block w-full h-8 sm:h-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="25%" stopColor="#06b6d4" />
              <stop offset="50%" stopColor="#0ea5e9" />
              <stop offset="75%" stopColor="#10fa94ff" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>
          </defs>
          <path
            d="M0,0 C150,80 350,0 500,60 C650,120 850,20 1000,80 C1100,120 1150,60 1200,80 L1200,0 L0,0 Z"
            fill="url(#waveGradient)"
            className="animate-pulse"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 relative z-10">
        
        {/* Main Footer Content - مضغوط للهاتف */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 py-6 lg:py-10">
          
          {/* Company Info - مضغوط */}
          <div className="space-y-3 text-center md:text-right">
            <div className="flex items-center justify-center md:justify-start space-x-2 rtl:space-x-reverse">
              <div className="relative">
                <img
                  src="/logo.png"
                  alt="شعار القوة العاشرة"
                  className="w-10 h-10 object-cover rounded-lg border border-amber-500 shadow-md shadow-amber-500/20 hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full"></div>
              </div>
              <div>
                <h3 className="text-base font-bold bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-600 bg-clip-text text-transparent">
                  القوة العاشرة
                </h3>
                <p className="text-amber-200 text-[10px] font-medium flex items-center justify-center md:justify-start space-x-1 rtl:space-x-reverse">
                  <Sparkles className="w-2 h-2" />
                  <span>للمقاولات العامة</span>
                </p>
              </div>
            </div>

            <p className="text-gray-300 text-[10px] leading-relaxed max-w-sm mx-auto md:mx-0 hidden sm:block">
              شركة رائدة في مجال المقاولات، الزجاج، والألمنيوم.
            </p>

            {/* Social Icons - صغيرة جداً */}
            <div className="flex flex-wrap justify-center md:justify-start gap-1.5 pt-1">
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
                  className={`group relative flex items-center justify-center w-7 h-7 bg-gradient-to-br from-gray-800 to-gray-700 ${social.color} rounded-md transition-all duration-300 transform hover:scale-110 shadow-sm hover:shadow-lg`}
                >
                  {social.isImage ? (
                    <img
                      src={social.icon}
                      alt={social.label}
                      className="w-3.5 h-3.5 brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                    />
                  ) : (
                    <social.icon className="w-3.5 h-3.5 text-gray-100 group-hover:text-white transition-colors duration-300" />
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* روابط سريعة وخدماتنا جنب بعض - مضغوط */}
          <div className="grid grid-cols-2 gap-4 lg:col-span-1">
            {/* Quick Links - مضغوط */}
            <div className="space-y-2.5">
              <h3 className="text-sm font-bold text-white flex items-center space-x-1.5 rtl:space-x-reverse">
                <div className="w-0.5 h-4 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full"></div>
                <span>روابط سريعة</span>
              </h3>
              <ul className="space-y-1.5">
                {[
                  { path: '/', label: t('nav.home') },
                  { path: '/about', label: t('nav.about') },
                  { path: '/services', label: t('nav.services') },
                  { path: '/projects', label: t('nav.projects') },
                ].map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="group flex items-center space-x-1.5 rtl:space-x-reverse text-gray-300 hover:text-amber-400 transition-all duration-300 p-1 rounded-md hover:bg-white/5 text-xs"
                    >
                      <span className="flex-1">{item.label}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services - مضغوط */}
            <div className="space-y-2.5">
              <h3 className="text-sm font-bold text-white flex items-center space-x-1.5 rtl:space-x-reverse">
                <div className="w-0.5 h-4 bg-gradient-to-b from-purple-400 to-purple-600 rounded-full"></div>
                <span>خدماتنا</span>
              </h3>
              <ul className="space-y-1.5">
                {[
                  { text: "الزجاج المعماري" },
                  { text: "الألمنيوم" },
                  { text: "الاستانلس ستيل" },
                  { text: "الصيانة" }
                ].map((service, index) => (
                  <li key={index} className="group flex items-center space-x-1.5 rtl:space-x-reverse text-gray-300 hover:text-white transition-all duration-300 p-1 rounded-md hover:bg-white/5">
                    <span className="w-1 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full group-hover:scale-125 transition-transform duration-300"></span>
                    <span className="text-xs">{service.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info - مضغوط */}
          <div className="space-y-2.5">
            <h3 className="text-sm font-bold text-white flex items-center space-x-1.5 rtl:space-x-reverse">
              <div className="w-0.5 h-4 bg-gradient-to-b from-green-400 to-green-600 rounded-full"></div>
              <span>تواصل معنا</span>
            </h3>
            <div className="space-y-2">
              <div className="group flex items-start space-x-2 rtl:space-x-reverse p-1.5 rounded-md hover:bg-white/5 transition-all duration-300">
                <div className="flex-shrink-0 w-7 h-7 bg-gradient-to-br from-green-500 to-green-600 rounded-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-3.5 h-3.5 text-white" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400">هاتف</p>
                  <a href="tel:+966532438253" className="text-white hover:text-green-400 transition-colors duration-200 font-medium text-xs">
                   +966532438253
                  </a>
                </div>
              </div>

              <div className="group flex items-start space-x-2 rtl:space-x-reverse p-1.5 rounded-md hover:bg-white/5 transition-all duration-300">
                <div className="flex-shrink-0 w-7 h-7 bg-gradient-to-br from-blue-500 to-blue-600 rounded-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-3.5 h-3.5 text-white" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400">البريد</p>
                  <a href="mailto:Zjajkryt78@gmail.com" className="text-white hover:text-blue-400 transition-colors duration-200 text-[10px] break-all">
                    Zjajkryt78@gmail.com
                  </a>
                </div>
              </div>

              <div className="group flex items-start space-x-2 rtl:space-x-reverse p-1.5 rounded-md hover:bg-white/5 transition-all duration-300">
                <div className="flex-shrink-0 w-7 h-7 bg-gradient-to-br from-red-500 to-red-600 rounded-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-3.5 h-3.5 text-white" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400">الموقع</p>
                  <p className="text-white text-[10px]">السعودية</p>
                </div>
              </div>
            </div>

            {/* Call Button for Mobile - مضغوط */}
            <div className="md:hidden mt-3">
              <a
                href="tel:+966532438253"
                className="group w-full flex items-center justify-center space-x-2 rtl:space-x-reverse bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white py-2 px-3 rounded-lg font-bold text-xs transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
              >
                <Phone className="w-3.5 h-3.5 group-hover:animate-bounce" />
                <span>اتصل بنا الآن</span>
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
              </a>
            </div>
          </div>
        </div>

        {/* Decorative Divider - صغير */}
        <div className="relative my-4">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-3 bg-gradient-to-br from-slate-900 via-gray-900 to-sky-900">
            <div className="w-5 h-5 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
              <Sparkles className="w-2.5 h-2.5 text-white animate-pulse" />
            </div>
          </div>
        </div>

        {/* Copyright - صغير جداً */}
        <div className="py-4 text-center">
          <p className="text-gray-400 text-[10px]">
            <span>© 2025 القوة العاشرة للمقاولات.</span>
            <span className="hidden sm:inline"> جميع الحقوق محفوظة.</span>
          </p>
        </div>
      </div>

      {/* Bottom glow effect */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-600 animate-pulse"></div>
    </footer>
  );
};

export default Footer;
