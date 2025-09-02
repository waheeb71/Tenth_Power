import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Settings } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.services'), href: '/services' },
    { name: t('nav.projects'), href: '/projects' },
    { name: t('nav.contact'), href: '/contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
  <img 
    src="/logo.png" 
    alt="شعار الشركة" 
    className="w-12 h-12 object-contain"
  />
            <div className="flex flex-col">
           <div>
  <h3 
    className="text-xl font-extrabold bg-gradient-to-r from-amber-500 via-orange-600 to-amber-700 bg-clip-text text-transparent"
  >
    القوة العاشرة
  </h3>
  <p className="text-gray-600 text-sm font-medium">
    للمقاولات العامة
  </p>
</div>
            </div>
          </Link>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 rtl:space-x-reverse">
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 relative group ${
                  isActive(item.href)
                    ? 'text-amber-600 bg-amber-50'
                    : 'text-gray-700 hover:text-amber-600 hover:bg-gray-100'
                }`}
              >
                {item.name}
                {/* Underline Animation */}
                <span
                  className={`absolute bottom-1 left-4 right-4 h-0.5 bg-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                    isActive(item.href) ? 'scale-x-100' : ''
                  }`}
                ></span>
              </Link>
            ))}
          </nav>
          {/* Language Toggle & Admin */}
        
          <div className="hidden md:flex items-center space-x-3 rtl:space-x-reverse">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl transition-all duration-200 font-medium text-sm group"
            >
              <Globe className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              <span>{language === 'ar' ? 'EN' : 'ع'}</span>
            </button>

            {/* Admin Button */}
            {isAuthenticated && (
              <Link
                to="/admin"
                className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 shadow-md hover:shadow-lg font-medium text-sm group"
              >
                <Settings className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>{t('nav.admin')}</span>
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-gray-500 hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-base font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? 'text-amber-600 bg-amber-50'
                      : 'text-gray-700 hover:text-amber-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="flex items-center space-x-4 rtl:space-x-reverse px-3 py-2">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center space-x-2 rtl:space-x-reverse px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors duration-200"
                >
                  <Globe className="w-4 h-4" />
                  <span className="text-sm font-medium">{language === 'ar' ? 'EN' : 'ع'}</span>
                </button>
                
                {isAuthenticated && (
                  <Link
                    to="/admin"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    <Settings className="w-4 h-4" />
                    <span className="text-sm font-medium">{t('nav.admin')}</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;