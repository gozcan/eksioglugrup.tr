import Hero from '../components/Hero';
import BusinessAreas from '../components/BusinessAreas';
import { useTranslation } from 'react-i18next';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const HomePage = () => {
  const { t } = useTranslation();

  useDocumentTitle({ title: t('pageTitles.home') });

  return (
    <div>
      <Hero />
      <BusinessAreas />

      {/* Company Logos Section */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary-900 mb-3">
              {t('homePage.partners.title')}
            </h2>
            <p className="text-gray-600">{t('homePage.partners.subtitle')}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
            {[
              { name: 'Ekgüntaş', logo: '/images/logos/ekguntas.png' },
              { name: 'Ekutaş', logo: '/images/logos/ekutas.svg' },
              { name: 'Tevor', logo: '/images/logos/tevor.jpg' },
              { name: 'Ponton Medya', logo: '/images/logos/ponton.png' },
              {
                name: 'Piran Gayrimenkul',
                logo: '/images/logos/piran_gayrimenkul.svg',
              },
              { name: 'İlka', logo: '/images/logos/ilka.svg' },
              { name: 'Leyan', logo: '/images/logos/leyan.jpg' },
              {
                name: 'Piran Yönetim',
                logo: '/images/logos/piran_yonetim.svg',
              },
              {
                name: 'Piran İşletmecilik',
                logo: '/images/logos/piran_isletmecilik.svg',
              },
              {
                name: 'Piran Kurumsal Hizmetler',
                logo: '/images/logos/piran_kurumsal_hizmetler.svg',
              },
              {
                name: 'Piran Yayıncılık',
                logo: '/images/logos/piran_yayincilik.svg',
              },
              { name: 'Piran Genel', logo: '/images/logos/piran.jpg' },
            ].map((company, index) => (
              <div
                key={index}
                className="group flex items-center justify-center p-4 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 min-h-24"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="max-h-12 w-auto max-w-full object-contain grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>

          {/* CTA to Companies Page */}
          <div className="text-center mt-12">
            <a
              href="/grup-sirketleri"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <span>Tüm Şirketlerimizi Keşfedin</span>
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Excellence Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-900 mb-6">
              {t('homePage.excellence.title')}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t('homePage.excellence.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[0, 1, 2, 3].map((index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-all duration-300"
              >
                <div
                  className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${
                    index === 0
                      ? 'from-primary-500 to-primary-700'
                      : index === 1
                      ? 'from-secondary-500 to-secondary-700'
                      : index === 2
                      ? 'from-accent-500 to-accent-700'
                      : 'from-green-500 to-green-700'
                  } rounded-2xl flex items-center justify-center text-white ${
                    index === 3 ? 'text-2xl' : 'text-3xl'
                  } font-bold group-hover:rotate-6 transition-transform`}
                >
                  {t(`homePage.excellence.stats.${index}.value`)}
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-2">
                  {t(`homePage.excellence.stats.${index}.title`)}
                </h3>
                <p className="text-gray-600">
                  {t(`homePage.excellence.stats.${index}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-to-br from-primary-900 to-primary-800 text-white relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-secondary-500/10 to-transparent"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary-400/20 rounded-full animate-pulse"></div>
          <div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-600/20 rounded-full animate-pulse"
            style={{ animationDelay: '1s' }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">
              {t('homePage.vision.title')}
            </h2>
            <p className="text-xl leading-relaxed mb-12 opacity-95">
              {t('homePage.vision.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/hakkimizda"
                className="bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                {t('homePage.vision.cta.vision')}
              </a>
              <a
                href="/surudurulebilirlik"
                className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                {t('homePage.vision.cta.sustainability')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
