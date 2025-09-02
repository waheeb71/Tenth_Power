import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
interface HeroSettings {
  bg_type: string;
  bg_value: string;
  enabled: boolean;
}

export default function HeroSection({ t }) {
  const [settings, setSettings] = useState<HeroSettings | null>(null);

  useEffect(() => {
    fetch("/api/hero-settings")
      .then(res => res.json())
      .then(setSettings)
      .catch(console.error);
  }, []);


 const defaultSettings = {
    bg_type: "gradient",
    bg_value: "linear-gradient(to bottom right, #e10b0bff, #333)"
  };

  const heroSettings = settings || defaultSettings;

 return (
    <section className="relative text-white overflow-hidden">
      {/* الخلفية */}
      {heroSettings.bg_type === "gradient" && (
        <div className="absolute inset-0" style={{ background: heroSettings.bg_value }} />
      )}

      {heroSettings.bg_type === "image" && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroSettings.bg_value})` }}
        />
      )}

      {heroSettings.bg_type === "video" && (
        <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
          <source src={heroSettings.bg_value} type="video/mp4" />
        </video>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* المحتوى */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 text-center space-y-8 z-10">
        <div className="space-y-4">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            <span className="block">{t('home.hero.title')}</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
              {t('home.hero.subtitle')}
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('home.hero.description')}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/contact"
            className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 rtl:space-x-reverse"
          >
            <span>{t('home.hero.cta')}</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/projects"
            className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
          >
            {t('home.hero.explore')}
          </Link>
        </div>
      </div>
    </section>
  );
}
