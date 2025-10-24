import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTranslation } from 'react-i18next';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const ManagementPage = () => {
  const { t } = useTranslation();

  useDocumentTitle({ title: t('pageTitles.management') });
  const { elementRef: teamRef, isVisible: teamVisible } = useScrollAnimation();
  const { elementRef: structureRef, isVisible: structureVisible } =
    useScrollAnimation();

  const executiveTeam = [
    {
      id: 'mehmet',
      gradient: 'from-blue-600 to-blue-800',
    },
    {
      id: 'selma',
      gradient: 'from-purple-600 to-purple-800',
    },
    {
      id: 'murat',
      gradient: 'from-indigo-600 to-indigo-800',
    },
    {
      id: 'ayhan',
      gradient: 'from-teal-600 to-teal-800',
    },
    {
      id: 'kerem',
      gradient: 'from-cyan-600 to-cyan-800',
    },
    {
      id: 'zeynep',
      gradient: 'from-pink-600 to-pink-800',
    },
  ];

  const organizationalStructure = [
    { id: 'clevel' },
    { id: 'director' },
    { id: 'manager' },
  ];

  const committees = [
    { id: 'executive' },
    { id: 'technology' },
    { id: 'risk' },
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
              {t('pages.management.title')}
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              {t('pages.management.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-heading font-bold text-primary-900 mb-8">
              {t('pages.management.intro.heading')}
            </h2>
            <p className="text-xl text-gray-700 mb-12 leading-relaxed">
              {t('pages.management.intro.content')}
            </p>

            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="p-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-white/80 rounded-lg"></div>
                </div>
                <h3 className="text-2xl font-bold text-primary-900 mb-2">
                  {t('pages.management.intro.stats.clevel.value')}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t('pages.management.intro.stats.clevel.label')}
                </p>
              </div>
              <div className="p-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-white/80 rounded-lg"></div>
                </div>
                <h3 className="text-2xl font-bold text-primary-900 mb-2">
                  {t('pages.management.intro.stats.experience.value')}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t('pages.management.intro.stats.experience.label')}
                </p>
              </div>
              <div className="p-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-white/80 rounded-lg"></div>
                </div>
                <h3 className="text-2xl font-bold text-primary-900 mb-2">
                  {t('pages.management.intro.stats.phd.value')}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t('pages.management.intro.stats.phd.label')}
                </p>
              </div>
              <div className="p-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-white/80 rounded-lg"></div>
                </div>
                <h3 className="text-2xl font-bold text-primary-900 mb-2">
                  {t('pages.management.intro.stats.mba.value')}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t('pages.management.intro.stats.mba.label')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Team */}
      <section
        ref={teamRef}
        className={`py-16 bg-gray-50 transition-all duration-1000 ${
          teamVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary-900 mb-4">
              {t('pages.management.team.heading')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('pages.management.team.subheading')}
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            {executiveTeam.map((executive, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <div
                      className={`h-64 md:h-full bg-gradient-to-br ${executive.gradient} flex items-center justify-center`}
                    >
                      <div className="text-center text-white">
                        <div className="w-24 h-24 bg-white/20 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                          <div className="w-12 h-12 bg-white/80 rounded-lg"></div>
                        </div>
                        <h3 className="text-xl font-bold mb-2">
                          {t(`pages.management.team.list.${executive.id}.name`)}
                        </h3>
                        <p className="text-white/90 text-sm">
                          {t(
                            `pages.management.team.list.${executive.id}.department`
                          )}
                        </p>
                        <p className="text-white/75 text-xs mt-1">
                          {t(
                            `pages.management.team.list.${executive.id}.experience`
                          )}{' '}
                          {t('pages.management.team.experienceLabel')}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-primary-900 mb-2">
                        {t(`pages.management.team.list.${executive.id}.name`)}
                      </h3>
                      <p className="text-xl text-secondary-600 font-semibold mb-4">
                        {t(
                          `pages.management.team.list.${executive.id}.position`
                        )}
                      </p>
                      <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600 mb-6">
                        <div>
                          <strong>
                            {t('pages.management.team.educationLabel')}
                          </strong>{' '}
                          {t(
                            `pages.management.team.list.${executive.id}.education`
                          )}
                        </div>
                        <div>
                          <strong>
                            {t('pages.management.team.expertiseLabel')}
                          </strong>{' '}
                          {t(
                            `pages.management.team.list.${executive.id}.expertise`
                          )}
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-primary-800 mb-3">
                        {t('pages.management.team.achievementsLabel')}
                      </h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {[0, 1, 2, 3].map((achievementIndex) => (
                          <div
                            key={achievementIndex}
                            className="flex items-center"
                          >
                            <div className="w-2 h-2 bg-secondary-500 rounded-full mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700 text-sm">
                              {t(
                                `pages.management.team.list.${executive.id}.achievements.${achievementIndex}`
                              )}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizational Structure */}
      <section
        ref={structureRef}
        className={`py-16 bg-white transition-all duration-1000 ${
          structureVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-heading font-bold text-primary-900 mb-4">
                {t('pages.management.structure.heading')}
              </h2>
              <p className="text-xl text-gray-600">
                {t('pages.management.structure.subheading')}
              </p>
            </div>

            <div className="space-y-8">
              {organizationalStructure.map((level, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-8"
                >
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">
                        {index + 1}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-primary-900 mb-4">
                        {t(`pages.management.structure.list.${level.id}.level`)}
                      </h3>
                      <p className="text-gray-700 mb-4">
                        {t(
                          `pages.management.structure.list.${level.id}.description`
                        )}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {level.id === 'clevel' &&
                          [0, 1, 2, 3, 4, 5].map((posIndex) => (
                            <span
                              key={posIndex}
                              className="px-3 py-1 bg-secondary-100 text-secondary-800 rounded-full text-sm font-medium"
                            >
                              {t(
                                `pages.management.structure.list.${level.id}.positions.${posIndex}`
                              )}
                            </span>
                          ))}
                        {level.id === 'director' &&
                          [0, 1, 2, 3, 4].map((posIndex) => (
                            <span
                              key={posIndex}
                              className="px-3 py-1 bg-secondary-100 text-secondary-800 rounded-full text-sm font-medium"
                            >
                              {t(
                                `pages.management.structure.list.${level.id}.positions.${posIndex}`
                              )}
                            </span>
                          ))}
                        {level.id === 'manager' &&
                          [0, 1, 2, 3].map((posIndex) => (
                            <span
                              key={posIndex}
                              className="px-3 py-1 bg-secondary-100 text-secondary-800 rounded-full text-sm font-medium"
                            >
                              {t(
                                `pages.management.structure.list.${level.id}.positions.${posIndex}`
                              )}
                            </span>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Management Committees */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-heading font-bold text-primary-900 mb-4">
                {t('pages.management.committees.heading')}
              </h2>
              <p className="text-xl text-gray-600">
                {t('pages.management.committees.subheading')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {committees.map((committee, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-primary-900 mb-4">
                    {t(`pages.management.committees.list.${committee.id}.name`)}
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-semibold text-gray-800">
                        {t('pages.management.committees.frequencyLabel')}
                      </span>
                      <p className="text-gray-600">
                        {t(
                          `pages.management.committees.list.${committee.id}.frequency`
                        )}
                      </p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-800">
                        {t('pages.management.committees.membersLabel')}
                      </span>
                      <p className="text-gray-600">
                        {t(
                          `pages.management.committees.list.${committee.id}.members`
                        )}
                      </p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-800">
                        {t('pages.management.committees.purposeLabel')}
                      </span>
                      <p className="text-gray-600">
                        {t(
                          `pages.management.committees.list.${committee.id}.purpose`
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-heading font-bold mb-12">
              {t('pages.management.philosophy.heading')}
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-700 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-white/80 rounded-lg"></div>
                </div>
                <h3 className="text-xl font-bold mb-4">
                  {t('pages.management.philosophy.list.transformational.title')}
                </h3>
                <p className="text-primary-200 text-sm">
                  {t(
                    'pages.management.philosophy.list.transformational.description'
                  )}
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-white/80 rounded-lg"></div>
                </div>
                <h3 className="text-xl font-bold mb-4">
                  {t('pages.management.philosophy.list.inclusive.title')}
                </h3>
                <p className="text-primary-200 text-sm">
                  {t('pages.management.philosophy.list.inclusive.description')}
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-white/80 rounded-lg"></div>
                </div>
                <h3 className="text-xl font-bold mb-4">
                  {t('pages.management.philosophy.list.sustainable.title')}
                </h3>
                <p className="text-primary-200 text-sm">
                  {t(
                    'pages.management.philosophy.list.sustainable.description'
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManagementPage;
