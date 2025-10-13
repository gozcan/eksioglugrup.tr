import {
  useScrollAnimation,
  useStaggeredAnimation,
} from '../hooks/useScrollAnimation';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  const { elementRef: titleRef, isVisible: titleVisible } =
    useScrollAnimation();
  const { containerRef: cardsRef, visibleItems: cardItems } =
    useStaggeredAnimation(3, 200);
  const { containerRef: statsRef, visibleItems: statItems } =
    useStaggeredAnimation(4, 100);

  return (
    <section
      className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
      id="hakkimizda"
    >
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-secondary-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-custom"></div>
        <div
          className="absolute top-32 right-10 w-72 h-72 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-custom"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute -bottom-8 left-20 w-72 h-72 bg-accent-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-custom"
          style={{ animationDelay: '4s' }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* About Text */}
            <div className="space-y-8">
              <div ref={titleRef}>
                <h2
                  className={`text-4xl md:text-5xl font-heading font-bold text-primary-900 mb-8 ${
                    titleVisible ? 'animate-fadeInLeft' : 'opacity-0'
                  }`}
                >
                  {t('about.title')}
                </h2>
              </div>
              <div
                className={`${
                  titleVisible ? 'animate-fadeInLeft' : 'opacity-0'
                }`}
                style={{ animationDelay: '0.2s' }}
              >
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  {t('about.description')}
                </p>
              </div>

              <div
                ref={cardsRef}
                className="space-y-6"
              >
                <div
                  className={`group relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover-lift hover-glow overflow-hidden ${
                    cardItems[0] ? 'animate-fadeInLeft' : 'opacity-0'
                  }`}
                >
                  {/* Gradient Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full -translate-y-8 translate-x-8 opacity-50 group-hover:scale-125 transition-transform"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary-50 to-primary-100 rounded-full translate-y-4 -translate-x-4 opacity-30 group-hover:rotate-45 transition-transform"></div>

                  <div className="relative z-10">
                    <div className="mb-6">
                      <h3 className="text-3xl font-bold text-primary-800 mb-3">
                        Vizyonumuz
                      </h3>
                      <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full group-hover:w-full transition-all duration-500"></div>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      Sürdürülebilir büyüme anlayışıyla, teknoloji ve inovasyonu
                      merkeze alarak, sektöründe öncü ve örnek gösterilen bir
                      grup şirketi olmak.
                    </p>
                  </div>
                </div>

                <div
                  className={`group relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover-lift hover-glow overflow-hidden ${
                    cardItems[1] ? 'animate-fadeInLeft' : 'opacity-0'
                  }`}
                  style={{ animationDelay: '0.2s' }}
                >
                  {/* Gradient Background Pattern */}
                  <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-full -translate-y-6 translate-x-6 opacity-50 group-hover:scale-125 transition-transform"></div>
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-secondary-50 to-secondary-100 rounded-full translate-y-3 -translate-x-3 opacity-30 group-hover:-rotate-45 transition-transform"></div>

                  <div className="relative z-10">
                    <div className="mb-6">
                      <h3 className="text-3xl font-bold text-primary-800 mb-3">
                        Misyonumuz
                      </h3>
                      <div className="w-16 h-1 bg-gradient-to-r from-secondary-500 to-secondary-700 rounded-full group-hover:w-full transition-all duration-500"></div>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      Kaliteli ürün ve hizmetlerimizle müşteri memnuniyetini en
                      üst seviyede tutarak, toplumsal fayda yaratmak ve
                      sürdürülebilir bir gelecek inşa etmek.
                    </p>
                  </div>
                </div>

                <div
                  className={`group relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover-lift hover-glow overflow-hidden ${
                    cardItems[2] ? 'animate-fadeInLeft' : 'opacity-0'
                  }`}
                  style={{ animationDelay: '0.4s' }}
                >
                  {/* Gradient Background Pattern */}
                  <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-br from-accent-100 to-accent-200 rounded-full -translate-y-10 translate-x-10 opacity-50 group-hover:scale-125 transition-transform"></div>
                  <div className="absolute bottom-0 left-0 w-28 h-28 bg-gradient-to-tr from-accent-50 to-accent-100 rounded-full translate-y-6 -translate-x-6 opacity-30 group-hover:rotate-90 transition-transform"></div>

                  <div className="relative z-10">
                    <div className="mb-6">
                      <h3 className="text-3xl font-bold text-primary-800 mb-3">
                        Değerlerimiz
                      </h3>
                      <div className="w-16 h-1 bg-gradient-to-r from-accent-500 to-accent-700 rounded-full group-hover:w-full transition-all duration-500"></div>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                      {[
                        'Güvenilirlik ve Şeffaflık',
                        'İnovasyon ve Sürekli Gelişim',
                        'Çevresel Sorumluluk',
                        'İnsan Odaklı Yaklaşım',
                        'Toplumsal Katkı',
                      ].map((value, idx) => (
                        <div
                          key={idx}
                          className="relative p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl hover:from-accent-50 hover:to-accent-100 transition-all duration-300 group/item"
                        >
                          <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-accent-400 to-accent-600 rounded-full group-hover/item:w-2 transition-all duration-300"></div>
                          <span className="text-gray-700 font-semibold pl-4 group-hover/item:text-accent-800 transition-colors">
                            {value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats and Certifications */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-primary-900 to-primary-800 text-white p-8 rounded-2xl relative overflow-hidden shadow-2xl">
                {/* Background Animation */}
                <div className="absolute inset-0">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-400/20 rounded-full animate-pulse-custom"></div>
                  <div
                    className="absolute bottom-0 left-0 w-24 h-24 bg-secondary-600/20 rounded-full animate-pulse-custom"
                    style={{ animationDelay: '1s' }}
                  ></div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-8 text-center text-secondary-400">
                    Rakamlarla Ekşioğlu Grup
                  </h3>
                  <div
                    ref={statsRef}
                    className="grid grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    {[
                      {
                        value: '88',
                        label: 'Yıllık Deneyim',
                        gradient: 'from-secondary-400 to-secondary-600',
                      },
                      {
                        value: '25',
                        label: 'Grup Şirketi',
                        gradient: 'from-accent-400 to-accent-600',
                      },
                      {
                        value: '10.000+',
                        label: 'Çalışan',
                        gradient: 'from-green-400 to-green-600',
                      },
                      {
                        value: '1.000+',
                        label: 'Tamamlanan Proje',
                        gradient: 'from-blue-400 to-blue-600',
                      },
                      {
                        value: '₺15M',
                        label: 'Yıllık Ciro',
                        gradient: 'from-purple-400 to-purple-600',
                      },
                      {
                        value: '12',
                        label: 'Ülkede Faaliyet',
                        gradient: 'from-pink-400 to-pink-600',
                      },
                    ].map((stat, idx) => (
                      <div
                        key={idx}
                        className={`group text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover-lift ${
                          statItems[idx] ? 'animate-scaleIn' : 'opacity-0'
                        }`}
                        style={{ animationDelay: `${idx * 0.1}s` }}
                      >
                        <div
                          className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform`}
                        >
                          {stat.value}
                        </div>
                        <div className="text-sm opacity-90 font-medium">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="group relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover-lift hover-glow overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-full -translate-y-12 translate-x-12 opacity-40 group-hover:scale-125 transition-transform"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-yellow-50 to-yellow-100 rounded-full translate-y-8 -translate-x-8 opacity-30 group-hover:rotate-180 transition-transform"></div>

                <div className="relative z-10">
                  <div className="mb-8">
                    <h3 className="text-3xl font-bold text-primary-800 mb-3">
                      Sertifikalarımız
                    </h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-full group-hover:w-full transition-all duration-500"></div>
                  </div>
                </div>
                <div className="relative z-10">
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { name: 'ISO 9001', color: 'from-blue-500 to-blue-700' },
                      {
                        name: 'ISO 14001',
                        color: 'from-green-500 to-green-700',
                      },
                      { name: 'OHSAS 18001', color: 'from-red-500 to-red-700' },
                      { name: 'TSE', color: 'from-purple-500 to-purple-700' },
                      {
                        name: 'LEED',
                        color: 'from-emerald-500 to-emerald-700',
                      },
                      {
                        name: 'BREEAM',
                        color: 'from-orange-500 to-orange-700',
                      },
                    ].map((cert, idx) => (
                      <div
                        key={idx}
                        className="group/cert relative p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-transparent hover:border-secondary-400"
                      >
                        {/* Gradient background */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-5 rounded-2xl group-hover/cert:opacity-10 transition-opacity`}
                        ></div>

                        <div className="relative z-10">
                          <div
                            className={`w-full h-2 bg-gradient-to-r ${cert.color} rounded-full mb-4 group-hover/cert:scale-x-110 transition-transform origin-left`}
                          ></div>
                          <h4 className="text-lg font-bold text-gray-800 group-hover/cert:text-secondary-800 transition-colors">
                            {cert.name}
                          </h4>
                          <p className="text-sm text-gray-600 mt-2">
                            Kalite Sertifikası
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white p-8 rounded-2xl text-center">
                <h3 className="text-2xl font-bold mb-4">Birlikte Çalışalım</h3>
                <p className="text-lg opacity-90 mb-6">
                  Projelerinizde güvenilir bir iş ortağı arıyorsanız, size
                  yardımcı olmaktan mutluluk duyarız.
                </p>
                <a
                  href="/iletisim"
                  className="inline-flex items-center bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  İletişime Geçin
                  <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
