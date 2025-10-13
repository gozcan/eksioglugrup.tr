import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTranslation } from 'react-i18next';

const VisionPage = () => {
  const { t } = useTranslation();
  const { elementRef: visionRef, isVisible: visionVisible } =
    useScrollAnimation();
  const { elementRef: goalsRef, isVisible: goalsVisible } =
    useScrollAnimation();

  const visionPillars = [
    {
      title: t('pages.vision.pillars.list.technology.title'),
      description: t('pages.vision.pillars.list.technology.description'),
      gradient: 'from-blue-500 to-blue-700',
    },
    {
      title: t('pages.vision.pillars.list.sustainability.title'),
      description: t('pages.vision.pillars.list.sustainability.description'),
      gradient: 'from-green-500 to-green-700',
    },
    {
      title: t('pages.vision.pillars.list.people.title'),
      description: t('pages.vision.pillars.list.people.description'),
      gradient: 'from-purple-500 to-purple-700',
    },
    {
      title: t('pages.vision.pillars.list.global.title'),
      description: t('pages.vision.pillars.list.global.description'),
      gradient: 'from-orange-500 to-orange-700',
    },
  ];

  const futureGoals = [
    {
      year: t('pages.vision.goals.list.carbon.year'),
      title: t('pages.vision.goals.list.carbon.title'),
      description: t('pages.vision.goals.list.carbon.description'),
      progress: 65,
    },
    {
      year: t('pages.vision.goals.list.digital.year'),
      title: t('pages.vision.goals.list.digital.title'),
      description: t('pages.vision.goals.list.digital.description'),
      progress: 45,
    },
    {
      year: t('pages.vision.goals.list.expansion.year'),
      title: t('pages.vision.goals.list.expansion.title'),
      description: t('pages.vision.goals.list.expansion.description'),
      progress: 30,
    },
  ];

  return (
    <div className="pt-20">
      {/* Header Section */}
      <section
        className="relative overflow-hidden bg-white text-white py-16"
        style={{
          background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-white/10"></div>
        <div className="absolute -top-12 -left-12 w-32 h-32 rounded-full bg-white/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              {t('pages.vision.title')}
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              {t('pages.vision.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Main Vision Statement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-heading font-bold text-primary-900 mb-8">
              {t('pages.vision.statement.heading')}
            </h2>
            <p className="text-xl text-gray-700 mb-12 leading-relaxed">
              {t('pages.vision.statement.content')}
            </p>

            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-secondary-500 to-secondary-700 rounded-2xl flex items-center justify-center">
                  <div className="w-10 h-10 bg-white/80 rounded-lg"></div>
                </div>
              </div>
              <blockquote className="text-2xl md:text-3xl font-heading font-bold text-primary-900 mb-4">
                "{t('pages.vision.statement.quote')}"
              </blockquote>
              <p className="text-gray-600 italic">
                {t('pages.vision.statement.attribution')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Pillars */}
      <section
        ref={visionRef}
        className={`py-16 bg-gray-50 transition-all duration-1000 ${
          visionVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary-900 mb-4">
              {t('pages.vision.pillars.heading')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('pages.vision.pillars.subheading')}
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {visionPillars.map((pillar, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${pillar.gradient} rounded-2xl flex items-center justify-center flex-shrink-0`}
                    >
                      <div className="w-8 h-8 bg-white/80 rounded-lg"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary-900 mb-3">
                        {pillar.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section
        ref={goalsRef}
        className={`py-16 bg-white transition-all duration-1000 ${
          goalsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-heading font-bold text-primary-900 mb-4">
                {t('pages.vision.goals.heading')}
              </h2>
              <p className="text-xl text-gray-600">
                {t('pages.vision.goals.subheading')}
              </p>
            </div>

            <div className="space-y-8">
              {futureGoals.map((goal, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center mb-2">
                        <span className="text-2xl font-bold text-secondary-600 mr-4">
                          {goal.year}
                        </span>
                        <h3 className="text-xl font-bold text-primary-900">
                          {goal.title}
                        </h3>
                      </div>
                      <p className="text-gray-700">{goal.description}</p>
                    </div>
                    <div className="text-right ml-4">
                      <div className="text-2xl font-bold text-primary-900">
                        {goal.progress}%
                      </div>
                      <p className="text-sm text-gray-600">
                        {t('pages.vision.goals.progressLabel')}
                      </p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-secondary-500 to-secondary-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${goal.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-primary-900 to-primary-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-heading font-bold mb-6">
              {t('pages.vision.cta.title')}
            </h2>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              {t('pages.vision.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/kariyer"
                className="bg-secondary-600 hover:bg-secondary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                {t('pages.vision.cta.buttonCareer')}
              </a>
              <a
                href="/iletisim"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-primary-900 text-white px-8 py-3 rounded-lg font-semibold transition-all"
              >
                {t('pages.vision.cta.buttonContact')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisionPage;
