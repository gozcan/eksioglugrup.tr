import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CareerPage = () => {
  const { t } = useTranslation();
  const jobCategories = [
    { id: 'engineering', gradient: 'from-blue-500 to-blue-700' },
    { id: 'hr', gradient: 'from-green-500 to-green-700' },
    { id: 'finance', gradient: 'from-yellow-500 to-yellow-700' },
    { id: 'technology', gradient: 'from-purple-500 to-purple-700' },
    { id: 'marketing', gradient: 'from-red-500 to-red-700' },
    { id: 'operations', gradient: 'from-gray-500 to-gray-700' },
  ];

  const benefits = [
    { id: 'salary', gradient: 'from-green-500 to-green-700' },
    { id: 'health', gradient: 'from-red-500 to-red-700' },
    { id: 'education', gradient: 'from-blue-500 to-blue-700' },
    { id: 'flexible', gradient: 'from-purple-500 to-purple-700' },
    { id: 'social', gradient: 'from-pink-500 to-pink-700' },
    { id: 'career', gradient: 'from-indigo-500 to-indigo-700' },
  ];

  const values = [
    { id: 'innovation' },
    { id: 'teamwork' },
    { id: 'learning' },
    { id: 'diversity' },
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
              {t('pages.career.title')}
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              {t('pages.career.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-900 mb-6">
              {t('pages.career.whyUs.heading')}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('pages.career.whyUs.content')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-primary-900 mb-3">
                  {t(`pages.career.whyUs.values.list.${value.id}.title`)}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t(`pages.career.whyUs.values.list.${value.id}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-900 mb-6">
              {t('pages.career.benefits.heading')}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('pages.career.benefits.subheading')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center mb-4 relative overflow-hidden`}
                >
                  <div className="absolute inset-2 bg-gradient-to-br from-white/20 to-white/10 rounded-xl"></div>
                  <div className="relative w-8 h-8 bg-white/80 rounded-lg"></div>
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-3">
                  {t(`pages.career.benefits.list.${benefit.id}.title`)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(`pages.career.benefits.list.${benefit.id}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Categories */}
      <section
        id="pozisyonlar"
        className="py-16 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-900 mb-6">
              {t('pages.career.positions.heading')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('pages.career.positions.subheading')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {jobCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center`}
                  >
                    <div className="w-6 h-6 bg-white/80 rounded-lg"></div>
                  </div>
                  <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                    {t(
                      `pages.career.positions.categories.list.${category.id}.openPositions`
                    )}{' '}
                    {t('pages.career.positions.openLabel')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-3">
                  {t(
                    `pages.career.positions.categories.list.${category.id}.title`
                  )}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t(
                    `pages.career.positions.categories.list.${category.id}.description`
                  )}
                </p>
                <button className="w-full bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors">
                  {t('pages.career.positions.viewButton')}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-900 mb-6">
                {t('pages.career.process.heading')}
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[0, 1, 2, 3].map((stepIndex) => (
                <div
                  key={stepIndex}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-600 text-2xl font-bold">
                      {stepIndex + 1}
                    </span>
                  </div>
                  <h3 className="font-semibold text-primary-900 mb-2">
                    {t(`pages.career.process.steps.${stepIndex}.title`)}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {t(`pages.career.process.steps.${stepIndex}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section
        id="basvuru"
        className="py-16 bg-primary-900 text-white"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">
            {t('pages.career.cta.heading')}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t('pages.career.cta.content')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn btn-secondary">
              {t('pages.career.cta.applyButton')}
            </button>
            <Link
              to="/iletisim"
              className="btn bg-white/10 text-white border-2 border-white/30 hover:bg-white hover:text-primary-800"
            >
              {t('pages.career.cta.contactButton')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerPage;
