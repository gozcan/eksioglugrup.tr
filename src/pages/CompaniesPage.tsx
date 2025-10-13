import { useTranslation } from 'react-i18next';

const CompaniesPage = () => {
  const { t } = useTranslation();

  const companies = [
    {
      id: 1,
      name: t('pages.companies.list.ekguntas.name'),
      sector: t('pages.companies.list.ekguntas.sector'),
      description: t('pages.companies.list.ekguntas.description'),
      services: [
        t('pages.companies.list.ekguntas.services.0'),
        t('pages.companies.list.ekguntas.services.1'),
        t('pages.companies.list.ekguntas.services.2'),
        t('pages.companies.list.ekguntas.services.3'),
      ],
      established: '1937',
      metric: {
        label: t('pages.companies.list.ekguntas.metricLabel'),
        value: t('pages.companies.list.ekguntas.metricValue'),
      },
      projects: t('pages.companies.list.ekguntas.projects'),
      gradient: 'from-orange-500 to-orange-700',
      logo: null,
      website: 'https://www.ekguntas.com',
    },
    {
      id: 2,
      name: t('pages.companies.list.ekutas.name'),
      sector: t('pages.companies.list.ekutas.sector'),
      description: t('pages.companies.list.ekutas.description'),
      services: [
        t('pages.companies.list.ekutas.services.0'),
        t('pages.companies.list.ekutas.services.1'),
        t('pages.companies.list.ekutas.services.2'),
        t('pages.companies.list.ekutas.services.3'),
      ],
      established: '1983',
      metric: {
        label: t('pages.companies.list.ekutas.metricLabel'),
        value: t('pages.companies.list.ekutas.metricValue'),
      },
      projects: t('pages.companies.list.ekutas.projects'),
      gradient: 'from-blue-500 to-blue-700',
      logo: '/images/logos/ekutas.svg',
      website: 'https://www.ekutas.com',
    },
    {
      id: 3,
      name: t('pages.companies.list.eksizade.name'),
      sector: t('pages.companies.list.eksizade.sector'),
      description: t('pages.companies.list.eksizade.description'),
      services: [
        t('pages.companies.list.eksizade.services.0'),
        t('pages.companies.list.eksizade.services.1'),
        t('pages.companies.list.eksizade.services.2'),
        t('pages.companies.list.eksizade.services.3'),
      ],
      established: '1985',
      metric: {
        label: t('pages.companies.list.eksizade.metricLabel'),
        value: t('pages.companies.list.eksizade.metricValue'),
      },
      projects: t('pages.companies.list.eksizade.projects'),
      gradient: 'from-yellow-500 to-yellow-700',
      logo: null,
      website: 'https://www.eksizademakina.com',
    },
    {
      id: 4,
      name: t('pages.companies.list.leyan.name'),
      sector: t('pages.companies.list.leyan.sector'),
      description: t('pages.companies.list.leyan.description'),
      services: [
        t('pages.companies.list.leyan.services.0'),
        t('pages.companies.list.leyan.services.1'),
        t('pages.companies.list.leyan.services.2'),
        t('pages.companies.list.leyan.services.3'),
      ],
      established: '1995',
      metric: {
        label: t('pages.companies.list.leyan.metricLabel'),
        value: t('pages.companies.list.leyan.metricValue'),
      },
      projects: t('pages.companies.list.leyan.projects'),
      gradient: 'from-purple-500 to-purple-700',
      logo: '/images/logos/leyan.jpg',
      website: 'https://www.leyanrestorasyon.com',
    },
    {
      id: 5,
      name: t('pages.companies.list.tevor.name'),
      sector: t('pages.companies.list.tevor.sector'),
      description: t('pages.companies.list.tevor.description'),
      services: [
        t('pages.companies.list.tevor.services.0'),
        t('pages.companies.list.tevor.services.1'),
        t('pages.companies.list.tevor.services.2'),
        t('pages.companies.list.tevor.services.3'),
      ],
      established: '2000',
      metric: {
        label: t('pages.companies.list.tevor.metricLabel'),
        value: t('pages.companies.list.tevor.metricValue'),
      },
      projects: t('pages.companies.list.tevor.projects'),
      gradient: 'from-green-500 to-green-700',
      logo: '/images/logos/tevor.jpg',
      website: 'https://www.tevorenerji.com.tr',
    },
    {
      id: 6,
      name: t('pages.companies.list.ilka.name'),
      sector: t('pages.companies.list.ilka.sector'),
      description: t('pages.companies.list.ilka.description'),
      services: [
        t('pages.companies.list.ilka.services.0'),
        t('pages.companies.list.ilka.services.1'),
        t('pages.companies.list.ilka.services.2'),
        t('pages.companies.list.ilka.services.3'),
      ],
      established: '2024',
      metric: {
        label: t('pages.companies.list.ilka.metricLabel'),
        value: t('pages.companies.list.ilka.metricValue'),
      },
      projects: t('pages.companies.list.ilka.projects'),
      gradient: 'from-indigo-500 to-indigo-700',
      logo: '/images/logos/ilka.svg',
      website: 'https://www.ilkaprofesyonel.com',
    },
    {
      id: 7,
      name: t('pages.companies.list.ponton.name'),
      sector: t('pages.companies.list.ponton.sector'),
      description: t('pages.companies.list.ponton.description'),
      services: [
        t('pages.companies.list.ponton.services.0'),
        t('pages.companies.list.ponton.services.1'),
        t('pages.companies.list.ponton.services.2'),
        t('pages.companies.list.ponton.services.3'),
      ],
      established: '2024',
      metric: {
        label: t('pages.companies.list.ponton.metricLabel'),
        value: t('pages.companies.list.ponton.metricValue'),
      },
      projects: t('pages.companies.list.ponton.projects'),
      gradient: 'from-emerald-500 to-emerald-700',
      logo: '/images/logos/ponton.jpg',
      website: 'https://www.pontonmedya.com',
    },
    {
      id: 8,
      name: t('pages.companies.list.piran.name'),
      sector: t('pages.companies.list.piran.sector'),
      description: t('pages.companies.list.piran.description'),
      services: [
        t('pages.companies.list.piran.services.0'),
        t('pages.companies.list.piran.services.1'),
        t('pages.companies.list.piran.services.2'),
        t('pages.companies.list.piran.services.3'),
      ],
      established: '1988',
      metric: {
        label: t('pages.companies.list.piran.metricLabel'),
        value: t('pages.companies.list.piran.metricValue'),
      },
      projects: t('pages.companies.list.piran.projects'),
      gradient: 'from-pink-500 to-pink-700',
      logo: '/images/logos/piran.jpg',
      website: 'https://www.pirangayrimenkul.com',
    },
  ];

  return (
    <div className="pt-20">
      {/* Header Section */}
      <section
        className="relative overflow-hidden bg-white text-white py-16"
        style={{
          background: 'linear-gradient(135deg, #065f46 0%, #10b981 100%)',
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-white/10"></div>
        <div className="absolute -top-12 -left-12 w-32 h-32 rounded-full bg-white/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              {t('pages.companies.title')}
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              {t('pages.companies.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Companies Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {companies.map((company) => (
              <div
                key={company.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="mr-4">
                      {company.logo ? (
                        <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center p-2 shadow-sm border border-gray-100">
                          <img
                            src={company.logo}
                            alt={`${company.name} Logo`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      ) : (
                        <div
                          className={`w-16 h-16 bg-gradient-to-br ${company.gradient} rounded-2xl flex items-center justify-center relative overflow-hidden`}
                        >
                          <div className="absolute inset-2 bg-gradient-to-br from-white/20 to-white/10 rounded-xl"></div>
                          <div className="relative flex flex-col space-y-1">
                            <div className="w-6 h-1 bg-white/80 rounded-full"></div>
                            <div className="w-4 h-1 bg-white/80 rounded-full"></div>
                            <div className="w-6 h-1 bg-white/80 rounded-full"></div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="text-2xl font-heading font-bold text-primary-900">
                        {company.name}
                      </h3>
                      <p className="text-secondary-600 font-semibold">
                        {company.sector}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {company.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-900">
                        {company.established}
                      </div>
                      <div className="text-sm text-gray-600">Kuruluş</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-900">
                        {company.metric.value}
                      </div>
                      <div className="text-sm text-gray-600">
                        {company.metric.label}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-900">
                        {company.projects}
                      </div>
                      <div className="text-sm text-gray-600">Proje</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary-900 mb-3">
                      Hizmet Alanları:
                    </h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {company.services.map((service, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Website Button */}
                  <div className="pt-4 border-t border-gray-100">
                    <a
                      href={company.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-secondary-600 hover:text-secondary-700 font-semibold transition-colors group"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        />
                      </svg>
                      <span>Web Sitesini Ziyaret Et</span>
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold text-primary-900 mb-6">
            {t('pages.companies.cta.title')}
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            {t('pages.companies.cta.description')}
          </p>
          <a
            href="/iletisim"
            className="btn btn-primary inline-flex items-center"
          >
            {t('pages.companies.cta.button')}
            <span className="ml-2">→</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default CompaniesPage;
