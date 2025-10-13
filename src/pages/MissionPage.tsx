import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTranslation } from 'react-i18next';

const MissionPage = () => {
  const { t } = useTranslation();
  const { elementRef: missionRef, isVisible: missionVisible } =
    useScrollAnimation();
  const { elementRef: approachRef, isVisible: approachVisible } =
    useScrollAnimation();

  const missionPillars = [
    {
      title: t('pages.mission.pillars.list.quality.title'),
      description: t('pages.mission.pillars.list.quality.description'),
      gradient: 'from-blue-500 to-blue-700',
      icon: '★',
    },
    {
      title: t('pages.mission.pillars.list.sustainability.title'),
      description: t('pages.mission.pillars.list.sustainability.description'),
      gradient: 'from-green-500 to-green-700',
      icon: '♻',
    },
    {
      title: t('pages.mission.pillars.list.innovation.title'),
      description: t('pages.mission.pillars.list.innovation.description'),
      gradient: 'from-purple-500 to-purple-700',
      icon: '⚡',
    },
    {
      title: t('pages.mission.pillars.list.responsibility.title'),
      description: t('pages.mission.pillars.list.responsibility.description'),
      gradient: 'from-orange-500 to-orange-700',
      icon: '❤',
    },
  ];

  const approaches = [
    {
      title: t('pages.mission.approach.list.customer.title'),
      description: t('pages.mission.approach.list.customer.description'),
      points: [
        t('pages.mission.approach.list.customer.points.0'),
        t('pages.mission.approach.list.customer.points.1'),
        t('pages.mission.approach.list.customer.points.2'),
        t('pages.mission.approach.list.customer.points.3'),
      ],
    },
    {
      title: t('pages.mission.approach.list.quality.title'),
      description: t('pages.mission.approach.list.quality.description'),
      points: [
        t('pages.mission.approach.list.quality.points.0'),
        t('pages.mission.approach.list.quality.points.1'),
        t('pages.mission.approach.list.quality.points.2'),
        t('pages.mission.approach.list.quality.points.3'),
      ],
    },
    {
      title: t('pages.mission.approach.list.technology.title'),
      description: t('pages.mission.approach.list.technology.description'),
      points: [
        t('pages.mission.approach.list.technology.points.0'),
        t('pages.mission.approach.list.technology.points.1'),
        t('pages.mission.approach.list.technology.points.2'),
        t('pages.mission.approach.list.technology.points.3'),
      ],
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
              {t('pages.mission.title')}
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              {t('pages.mission.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Main Mission Statement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-heading font-bold text-primary-900 mb-8">
              {t('pages.mission.statement.heading')}
            </h2>
            <p className="text-xl text-gray-700 mb-12 leading-relaxed">
              {t('pages.mission.statement.content')}
            </p>

            <div className="bg-gradient-to-r from-secondary-50 to-primary-50 rounded-2xl p-8 md:p-12">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center">
                  <div className="w-10 h-10 bg-white/80 rounded-lg"></div>
                </div>
              </div>
              <blockquote className="text-2xl md:text-3xl font-heading font-bold text-primary-900 mb-4">
                "{t('pages.mission.statement.quote')}"
              </blockquote>
              <p className="text-gray-600 italic">
                {t('pages.mission.statement.attribution')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Pillars */}
      <section
        ref={missionRef}
        className={`py-16 bg-gray-50 transition-all duration-1000 ${
          missionVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary-900 mb-4">
              {t('pages.mission.pillars.heading')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('pages.mission.pillars.subheading')}
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {missionPillars.map((pillar, index) => (
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

      {/* Our Approach */}
      <section
        ref={approachRef}
        className={`py-16 bg-white transition-all duration-1000 ${
          approachVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-heading font-bold text-primary-900 mb-4">
                {t('pages.mission.approach.heading')}
              </h2>
              <p className="text-xl text-gray-600">
                {t('pages.mission.approach.subheading')}
              </p>
            </div>

            <div className="space-y-12">
              {approaches.map((approach, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
                >
                  <div className="grid md:grid-cols-2 gap-8 items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-primary-900 mb-4">
                        {approach.title}
                      </h3>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        {approach.description}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-800 mb-4">
                        {t('pages.mission.approach.areasLabel')}
                      </h4>
                      <ul className="space-y-3">
                        {approach.points.map((point, pointIndex) => (
                          <li
                            key={pointIndex}
                            className="flex items-center"
                          >
                            <div className="w-2 h-2 bg-secondary-500 rounded-full mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-heading font-bold mb-12">
              {t('pages.mission.impact.heading')}
            </h2>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-700 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-white/80 rounded-lg"></div>
                </div>
                <div className="text-3xl font-bold mb-2">
                  {t('pages.mission.impact.metrics.satisfaction.value')}
                </div>
                <p className="text-primary-200">
                  {t('pages.mission.impact.metrics.satisfaction.label')}
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-white/80 rounded-lg"></div>
                </div>
                <div className="text-3xl font-bold mb-2">
                  {t('pages.mission.impact.metrics.employees.value')}
                </div>
                <p className="text-primary-200">
                  {t('pages.mission.impact.metrics.employees.label')}
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-white/80 rounded-lg"></div>
                </div>
                <div className="text-3xl font-bold mb-2">
                  {t('pages.mission.impact.metrics.revenue.value')}
                </div>
                <p className="text-primary-200">
                  {t('pages.mission.impact.metrics.revenue.label')}
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-white/80 rounded-lg"></div>
                </div>
                <div className="text-3xl font-bold mb-2">
                  {t('pages.mission.impact.metrics.experience.value')}
                </div>
                <p className="text-primary-200">
                  {t('pages.mission.impact.metrics.experience.label')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionPage;
