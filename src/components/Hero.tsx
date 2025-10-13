import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useTranslation();

  const heroSlides = [
    {
      title: t('hero.slide1.title'),
      subtitle: t('hero.slide1.subtitle'),
      description: t('hero.slide1.description'),
      image:
        'https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=2096&q=80',
      cta: t('hero.slide1.cta'),
    },
    {
      title: t('hero.slide2.title'),
      subtitle: t('hero.slide2.subtitle'),
      description: t('hero.slide2.description'),
      image:
        'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',

      cta: t('hero.slide2.cta'),
    },
    {
      title: t('hero.slide3.title'),
      subtitle: t('hero.slide3.subtitle'),
      description: t('hero.slide3.description'),
      image:
        'https://images.unsplash.com/photo-1667670778881-537035257bd8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2069',

      cta: t('hero.slide3.cta'),
    },
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-110'
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Animated Overlay Pattern */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black/50 via-black/30 to-black/60"></div>
            {/* Floating geometric shapes */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
            <div
              className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-white/10 rounded-full animate-bounce"
              style={{ animationDelay: '1s' }}
            ></div>
            <div
              className="absolute top-1/2 right-1/3 w-16 h-16 bg-white/5 rotate-45 animate-spin"
              style={{ animationDuration: '8s' }}
            ></div>
          </div>
        </div>
      ))}

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-16 relative z-10 text-white">
        <div
          className={`text-center max-w-5xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Animated Title */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-4 leading-tight">
              <span
                className="block animate-fadeInUp"
                style={{ animationDelay: '0.2s' }}
              >
                {heroSlides[currentSlide].title}
              </span>
              <span
                className="block text-secondary-400 animate-fadeInUp"
                style={{ animationDelay: '0.4s' }}
              >
                {heroSlides[currentSlide].subtitle}
              </span>
            </h1>
          </div>

          {/* Animated Description */}
          <p
            className="text-xl md:text-2xl mb-12 opacity-95 leading-relaxed max-w-4xl mx-auto animate-fadeInUp"
            style={{ animationDelay: '0.6s' }}
          >
            {heroSlides[currentSlide].description}
          </p>

          {/* Animated Stats Grid */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 animate-fadeInUp"
            style={{ animationDelay: '0.8s' }}
          >
            <div className="group hover:scale-105 transition-all duration-300">
              <div className="p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/20">
                <div className="text-4xl md:text-5xl font-bold text-secondary-400 mb-2 group-hover:scale-110 transition-transform">
                  88
                </div>
                <div className="text-sm md:text-base opacity-90">
                  {t('hero.stats.experience')}
                </div>
              </div>
            </div>
            <div
              className="group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/20">
                <div className="text-4xl md:text-5xl font-bold text-secondary-400 mb-2 group-hover:scale-110 transition-transform">
                  6
                </div>
                <div className="text-sm md:text-base opacity-90">
                  {t('hero.stats.sectors')}
                </div>
              </div>
            </div>
            <div
              className="group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: '0.4s' }}
            >
              <div className="p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/20">
                <div className="text-4xl md:text-5xl font-bold text-secondary-400 mb-2 group-hover:scale-110 transition-transform">
                  1000+
                </div>
                <div className="text-sm md:text-base opacity-90">
                  {t('hero.stats.projects')}
                </div>
              </div>
            </div>
            <div
              className="group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: '0.6s' }}
            >
              <div className="p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/20">
                <div className="text-4xl md:text-5xl font-bold text-secondary-400 mb-2 group-hover:scale-110 transition-transform">
                  10.000+
                </div>
                <div className="text-sm md:text-base opacity-90">
                  {t('hero.stats.customers')}
                </div>
              </div>
            </div>
          </div>

          {/* Animated CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-6 justify-center animate-fadeInUp"
            style={{ animationDelay: '1s' }}
          >
            <Link
              to="/hakkimizda"
              className="group relative overflow-hidden bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <span className="relative z-10 flex items-center justify-center">
                {heroSlides[currentSlide].cta}
                <span className="ml-3 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary-600 to-secondary-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </Link>
            <Link
              to="/grup-sirketleri"
              className="group relative overflow-hidden bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              <span className="flex items-center justify-center">
                {t('hero.buttons.companies')}
                <span className="ml-3 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </span>
            </Link>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-secondary-400 scale-125'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
