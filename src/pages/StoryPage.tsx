import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTranslation } from 'react-i18next';

const StoryPage = () => {
  const { t } = useTranslation();
  const { elementRef: timelineRef, isVisible: timelineVisible } =
    useScrollAnimation();
  const { elementRef: milestonesRef, isVisible: milestonesVisible } =
    useScrollAnimation();

  const milestones = [
    {
      year: '1937',
      title: t('story.milestones.founding'),
      description: t('story.milestones.foundingDesc'),
      achievement: t('story.milestones.foundingAchievement'),
    },
    {
      year: '1960',
      title: t('story.milestones.expansion'),
      description: t('story.milestones.expansionDesc'),
      achievement: t('story.milestones.expansionAchievement'),
    },
    {
      year: '1985',
      title: t('story.milestones.diversification'),
      description: t('story.milestones.diversificationDesc'),
      achievement: t('story.milestones.diversificationAchievement'),
    },
    {
      year: '2000',
      title: t('story.milestones.modernization'),
      description: t('story.milestones.modernizationDesc'),
      achievement: t('story.milestones.modernizationAchievement'),
    },
    {
      year: '2010',
      title: t('story.milestones.sustainability'),
      description: t('story.milestones.sustainabilityDesc'),
      achievement: t('story.milestones.sustainabilityAchievement'),
    },
    {
      year: '2025',
      title: t('story.milestones.future'),
      description: t('story.milestones.futureDesc'),
      achievement: t('story.milestones.futureAchievement'),
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
              {t('story.title')}
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              {t('story.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Story Beginning */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-heading font-bold text-primary-900 mb-6">
                  {t('story.beginning.title')}
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {t('story.beginning.paragraph1')}
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {t('story.beginning.paragraph2')}
                </p>
              </div>
              <div className="relative">
                <div className="w-full h-80 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/80 rounded-lg"></div>
                    </div>
                    <p className="text-primary-800 font-semibold">
                      {t('story.beginning.foundingYear')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section
        ref={timelineRef}
        className={`py-16 bg-gray-50 transition-all duration-1000 ${
          timelineVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary-900 mb-4">
              {t('story.timeline.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('story.timeline.subtitle')}
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-primary-200"></div>

              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                  {/* Content */}
                  <div
                    className={`ml-12 md:ml-0 md:w-5/12 ${
                      index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                    }`}
                  >
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center mb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-700 rounded-xl flex items-center justify-center mr-4">
                          <span className="text-white font-bold text-lg">
                            {milestone.year}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-primary-900">
                          {milestone.title}
                        </h3>
                      </div>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {milestone.description}
                      </p>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></div>
                        <span className="text-sm font-semibold text-secondary-700">
                          {milestone.achievement}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Milestones */}
      <section
        ref={milestonesRef}
        className={`py-16 bg-white transition-all duration-1000 ${
          milestonesVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-heading font-bold text-primary-900 mb-8">
              {t('story.today.title')}
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              {t('story.today.subtitle')}
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <div className="w-10 h-10 bg-white/80 rounded-lg"></div>
                </div>
                <h3 className="text-2xl font-bold text-primary-900 mb-2">6</h3>
                <p className="text-gray-600">{t('story.today.sectors')}</p>
              </div>
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <div className="w-10 h-10 bg-white/80 rounded-lg"></div>
                </div>
                <h3 className="text-2xl font-bold text-primary-900 mb-2">
                  5000+
                </h3>
                <p className="text-gray-600">{t('story.today.employees')}</p>
              </div>
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <div className="w-10 h-10 bg-white/80 rounded-lg"></div>
                </div>
                <h3 className="text-2xl font-bold text-primary-900 mb-2">
                  1000+
                </h3>
                <p className="text-gray-600">{t('story.today.projects')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StoryPage;
