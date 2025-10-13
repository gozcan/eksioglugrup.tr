import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SustainabilityPage = () => {
  const { t } = useTranslation();
  const sustainabilityAreas = [
    {
      id: 0,
      gradient: 'from-green-500 to-green-700',
    },
    {
      id: 1,
      gradient: 'from-blue-500 to-blue-700',
    },
    {
      id: 2,
      gradient: 'from-purple-500 to-purple-700',
    },
    {
      id: 3,
      gradient: 'from-orange-500 to-orange-700',
    },
  ];

  const reports = [
    { id: 0, year: '2024' },
    { id: 1, year: '2023' },
    { id: 2, year: '2022' },
  ];

  const certifications = [0, 1, 2, 3];

  return (
    <div className="pt-20">
      {/* Header Section */}
      <section
        className="relative overflow-hidden bg-white text-white py-16"
        style={{
          background: 'linear-gradient(135deg, #166534 0%, #22c55e 100%)',
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-white/10"></div>
        <div className="absolute -top-12 -left-12 w-32 h-32 rounded-full bg-white/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              {t('pages.sustainability.title')}
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              {t('pages.sustainability.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-900 mb-6">
              {t('pages.sustainability.vision.heading')}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              {t('pages.sustainability.vision.content')}
            </p>
          </div>
        </div>
      </section>

      {/* Sustainability Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-900 mb-6">
              {t('pages.sustainability.areas.heading')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {sustainabilityAreas.map((area) => (
              <div
                key={area.id}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${area.gradient} rounded-2xl flex items-center justify-center mb-4 relative overflow-hidden`}
                  >
                    <div className="absolute inset-2 bg-gradient-to-br from-white/20 to-white/10 rounded-xl"></div>
                    <div className="relative w-8 h-8 bg-white/80 rounded-lg"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-primary-900 mb-3">
                      {t(`pages.sustainability.areas.list.${area.id}.title`)}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {t(
                        `pages.sustainability.areas.list.${area.id}.description`
                      )}
                    </p>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-primary-800 mb-3">
                        {t('pages.sustainability.areas.initiativesLabel')}
                      </h4>
                      <ul className="space-y-2">
                        {[0, 1, 2, 3].map((initIndex) => (
                          <li
                            key={initIndex}
                            className="flex items-center text-gray-600"
                          >
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                            {t(
                              `pages.sustainability.areas.list.${area.id}.initiatives.${initIndex}`
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reports Section */}
      <section
        id="raporlarimiz"
        className="py-16 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-900 mb-6">
                {t('pages.sustainability.reports.heading')}
              </h2>
              <p className="text-lg text-gray-600">
                {t('pages.sustainability.reports.description')}
              </p>
            </div>

            <div className="space-y-4">
              {reports.map((report) => (
                <div
                  key={report.id}
                  className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 flex items-center justify-between hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-green-600 font-semibold">
                        {report.year}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-900">
                        {t(
                          `pages.sustainability.reports.list.${report.id}.title`
                        )}
                      </h3>
                      <span className="text-sm text-green-600 font-medium">
                        {t(
                          `pages.sustainability.reports.list.${report.id}.status`
                        )}
                      </span>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                    {t('pages.sustainability.reports.download')}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-900 mb-12">
              {t('pages.sustainability.certifications.heading')}
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((certId) => (
                <div
                  key={certId}
                  className="bg-gray-50 rounded-lg p-6 flex items-center space-x-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-white/80 rounded-full"></div>
                  </div>
                  <span className="font-medium text-primary-900">
                    {t(`pages.sustainability.certifications.list.${certId}`)}
                  </span>
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
            {t('pages.sustainability.cta.heading')}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t('pages.sustainability.cta.description')}
          </p>
          <Link
            to="/iletisim"
            className="btn btn-secondary"
          >
            {t('pages.sustainability.cta.button')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SustainabilityPage;
