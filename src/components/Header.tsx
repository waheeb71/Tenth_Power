import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.services'), href: '/services' },
    { name: t('nav.projects'), href: '/projects' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="backdrop-blur-md bg-white/70 shadow-md sticky top-0 z-50 border-b border-white/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img 
              src="/logo.png" 
              alt="شعار الشركة" 
              className="w-12 h-12 object-contain drop-shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <div className="flex flex-col">
              <h3 className="text-xl font-extrabold bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-600 bg-clip-text text-transparent">
                القوة العاشرة
              </h3>
              <p className="text-gray-600 text-sm font-medium">
                للزجاج والمقاولات العامة
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 rtl:space-x-reverse">
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 group ${
                  isActive(item.href)
                    ? 'text-sky-600 bg-sky-50/70 shadow-inner'
                    : 'text-gray-700 hover:text-sky-600 hover:bg-white/40'
                }`}
              >
                {item.name}
                <span
                  className={`absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-sky-400 to-cyan-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                    isActive(item.href) ? 'scale-x-100' : ''
                  }`}
                ></span>
              </Link>
            ))}
          </nav>

          {/* Language Toggle */}
          <div className="hidden md:flex items-center space-x-3 rtl:space-x-reverse">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 bg-white/60 hover:bg-white/80 text-sky-700 border border-sky-200 rounded-xl transition-all duration-300 font-medium text-sm backdrop-blur-md"
            >
              <Globe className="w-4 h-4 text-sky-600" />
              <span>{language === 'ar' ? 'EN' : 'ع'}</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-sky-600 hover:bg-sky-50 transition-all duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/80 border-t border-sky-100 backdrop-blur-md rounded-b-2xl shadow-lg">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-base font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? 'text-sky-600 bg-sky-50'
                      : 'text-gray-700 hover:text-sky-600 hover:bg-white/60'
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              <div className="flex items-center justify-between px-3 py-3">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center space-x-2 rtl:space-x-reverse px-3 py-2 rounded-lg border border-sky-200 text-sky-700 hover:bg-sky-50 transition-all duration-200"
                >
                  <Globe className="w-4 h-4" />
                  <span className="text-sm font-medium">{language === 'ar' ? 'EN' : 'ع'}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
