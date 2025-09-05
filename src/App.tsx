import React, { useState, useEffect } from 'react';
import { Menu, Github, Instagram, Twitter, Mail, Phone, Code, Database, Shield, Server, Brain, Network } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './styles/animations.css';

function App() {
  const [currentLanguage, setCurrentLanguage] = useState('ar');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem('language') || 'ar';
    setCurrentLanguage(savedLang);
    document.documentElement.setAttribute('dir', savedLang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', savedLang);
  }, []);

  const handleLanguageChange = (lang: string) => {
    setCurrentLanguage(lang);
    localStorage.setItem('language', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Header 
          currentLanguage={currentLanguage}
          onLanguageChange={handleLanguageChange}
          mobileMenuOpen={mobileMenuOpen}
          onToggleMobileMenu={toggleMobileMenu}
        />
        
        <main className="px-4 md:px-10 lg:px-20 xl:px-40 py-10">
          <div className="layout-content-container flex flex-col max-w-[960px] mx-auto">
            <Hero currentLanguage={currentLanguage} />
            <About currentLanguage={currentLanguage} />
            <Skills currentLanguage={currentLanguage} />
            <Experience currentLanguage={currentLanguage} />
            <Education currentLanguage={currentLanguage} />
            <Certifications currentLanguage={currentLanguage} />
            <Projects currentLanguage={currentLanguage} />
          </div>
        </main>
        
        <Footer currentLanguage={currentLanguage} />
      </div>
    </div>
  );
}

export default App;