import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const TechnologyPage = () => {
  const { t } = useTranslation();
  const techAreas = [
    { id: 'digital', gradient: 'from-blue-500 to-blue-700' },
    { id: 'rnd', gradient: 'from-purple-500 to-purple-700' },
    { id: 'smart', gradient: 'from-gray-500 to-gray-700' },
    { id: 'sustainable', gradient: 'from-green-500 to-green-700' },
  ];

  const innovations = [{ id: '0' }, { id: '1' }, { id: '2' }, { id: '3' }];

  const partnerships = [
    { id: 'tubitak', gradient: 'from-red-500 to-red-700' },
    { id: 'itu', gradient: 'from-blue-500 to-blue-700' },
    { id: 'microsoft', gradient: 'from-green-500 to-green-700' },
    { id: 'sap', gradient: 'from-purple-500 to-purple-700' },
  ];

  const rndStats = [
    { id: 'investment' },
    { id: 'projects' },
    { id: 'patents' },
    { id: 'personnel' },
  ];

  return (
    <div className="pt-20">
      {/* Header Section */}
      <section
        className="relative overflow-hidden bg-white text-white py-16"
        style={{
          background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-white/10"></div>
        <div className="absolute -top-12 -left-12 w-32 h-32 rounded-full bg-white/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              {t('pages.technology.title')}
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              {t('pages.technology.description')}
            </p>
          </div>
        </div>
      </section>

      {/* R&D Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-900 mb-6">
              {t('pages.technology.stats.heading')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {rndStats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {t(`pages.technology.stats.list.${stat.id}.value`)}
                </div>
                <h3 className="text-lg font-semibold text-primary-900 mb-1">
                  {t(`pages.technology.stats.list.${stat.id}.title`)}
                </h3>
                <p className="text-sm text-gray-600">
                  {t(`pages.technology.stats.list.${stat.id}.subtitle`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-900 mb-6">
              {t('pages.technology.areas.heading')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {techAreas.map((area) => (
              <div
                key={area.id}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-center mb-6">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${area.gradient} rounded-2xl flex items-center justify-center relative overflow-hidden`}
                  >
                    <div className="absolute inset-3 bg-gradient-to-br from-white/20 to-white/10 rounded-xl"></div>
                    <div className="relative w-10 h-10 bg-white/80 rounded-lg"></div>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-primary-900 mb-4 text-center">
                  {t(`pages.technology.areas.list.${area.id}.title`)}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-center">
                  {t(`pages.technology.areas.list.${area.id}.description`)}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-primary-800 mb-3">
                    {t('pages.technology.areas.technologiesLabel')}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[0, 1, 2, 3].map((techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {t(
                          `pages.technology.areas.list.${area.id}.technologies.${techIndex}`
                        )}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-primary-800 mb-3">
                    {t('pages.technology.areas.projectsLabel')}
                  </h4>
                  <ul className="space-y-2">
                    {[0, 1, 2].map((projectIndex) => (
                      <li
                        key={projectIndex}
                        className="flex items-center text-gray-600"
                      >
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        {t(
                          `pages.technology.areas.list.${area.id}.projects.${projectIndex}`
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovations Timeline */}
      <section
        id="ar-ge"
        className="py-16 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-900 mb-6">
              {t('pages.technology.innovations.heading')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('pages.technology.innovations.subheading')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {innovations.map((innovation, index) => {
                const status = t(
                  `pages.technology.innovations.list.${innovation.id}.status`
                );
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start space-x-6">
                      <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-semibold text-sm">
                        {t(
                          `pages.technology.innovations.list.${innovation.id}.year`
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-xl font-semibold text-primary-900">
                            {t(
                              `pages.technology.innovations.list.${innovation.id}.title`
                            )}
                          </h3>
                          <span
                            className={`px-3 py-1 text-xs font-medium rounded-full ${
                              status === 'Tamamlandı' || status === 'Completed'
                                ? 'bg-green-100 text-green-800'
                                : status === 'Uygulamada' ||
                                  status === 'In Implementation'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}
                          >
                            {status}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {t(
                            `pages.technology.innovations.list.${innovation.id}.description`
                          )}
                        </p>
                        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg">
                          <span className="text-blue-800 font-semibold">
                            {t('pages.technology.innovations.impactLabel')}{' '}
                          </span>
                          <span className="text-blue-700">
                            {t(
                              `pages.technology.innovations.list.${innovation.id}.impact`
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section
        id="ortakliklar"
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-900 mb-6">
              {t('pages.technology.partnerships.heading')}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('pages.technology.partnerships.subheading')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {partnerships.map((partner, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${partner.gradient} rounded-2xl flex items-center justify-center relative overflow-hidden`}
                  >
                    <div className="absolute inset-2 bg-gradient-to-br from-white/20 to-white/10 rounded-xl"></div>
                    <div className="relative w-8 h-8 bg-white/80 rounded-lg"></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-primary-900">
                        {t(
                          `pages.technology.partnerships.list.${partner.id}.name`
                        )}
                      </h3>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                        {t(
                          `pages.technology.partnerships.list.${partner.id}.type`
                        )}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      <strong>
                        {t('pages.technology.partnerships.focusLabel')}
                      </strong>{' '}
                      {t(
                        `pages.technology.partnerships.list.${partner.id}.focus`
                      )}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Culture */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-900 mb-6">
              {t('pages.technology.culture.heading')}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              {t('pages.technology.culture.content')}
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[0, 1, 2].map((cultureIndex) => (
                <div
                  key={cultureIndex}
                  className="text-center"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${
                      cultureIndex === 0
                        ? 'from-yellow-500 to-yellow-700'
                        : cultureIndex === 1
                        ? 'from-green-500 to-green-700'
                        : 'from-red-500 to-red-700'
                    } rounded-full flex items-center justify-center mx-auto mb-4 relative overflow-hidden`}
                  >
                    <div className="absolute inset-2 bg-gradient-to-br from-white/20 to-white/10 rounded-full"></div>
                    <div className="relative w-8 h-8 bg-white/80 rounded-lg"></div>
                  </div>
                  <h3 className="font-semibold text-primary-900 mb-2">
                    {t(`pages.technology.culture.values.${cultureIndex}.title`)}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {t(
                      `pages.technology.culture.values.${cultureIndex}.description`
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">
            {t('pages.technology.cta.heading')}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t('pages.technology.cta.content')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/iletisim"
              className="btn btn-secondary"
            >
              {t('pages.technology.cta.contactButton')}
            </Link>
            <button className="btn bg-white/10 text-white border-2 border-white/30 hover:bg-white hover:text-primary-800">
              {t('pages.technology.cta.presentationButton')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnologyPage;
