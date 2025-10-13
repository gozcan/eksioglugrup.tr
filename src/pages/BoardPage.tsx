import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTranslation } from 'react-i18next';

const BoardPage = () => {
  const { t } = useTranslation();
  const { elementRef: boardRef, isVisible: boardVisible } =
    useScrollAnimation();
  const { elementRef: committeesRef, isVisible: committeesVisible } =
    useScrollAnimation();

  const boardMembers = [
    {
      name: t('pages.board.members.list.ahmet.name'),
      position: t('pages.board.members.list.ahmet.position'),
      experience: t('pages.board.members.list.ahmet.experience'),
      education: t('pages.board.members.list.ahmet.education'),
      specialization: t('pages.board.members.list.ahmet.specialization'),
      achievements: [
        t('pages.board.members.list.ahmet.achievements.0'),
        t('pages.board.members.list.ahmet.achievements.1'),
        t('pages.board.members.list.ahmet.achievements.2'),
        t('pages.board.members.list.ahmet.achievements.3'),
      ],
      gradient: 'from-blue-600 to-blue-800',
    },
    {
      name: t('pages.board.members.list.mehmet.name'),
      position: t('pages.board.members.list.mehmet.position'),
      experience: t('pages.board.members.list.mehmet.experience'),
      education: t('pages.board.members.list.mehmet.education'),
      specialization: t('pages.board.members.list.mehmet.specialization'),
      achievements: [
        t('pages.board.members.list.mehmet.achievements.0'),
        t('pages.board.members.list.mehmet.achievements.1'),
        t('pages.board.members.list.mehmet.achievements.2'),
        t('pages.board.members.list.mehmet.achievements.3'),
      ],
      gradient: 'from-green-600 to-green-800',
    },
    {
      name: t('pages.board.members.list.ayse.name'),
      position: t('pages.board.members.list.ayse.position'),
      experience: t('pages.board.members.list.ayse.experience'),
      education: t('pages.board.members.list.ayse.education'),
      specialization: t('pages.board.members.list.ayse.specialization'),
      achievements: [
        t('pages.board.members.list.ayse.achievements.0'),
        t('pages.board.members.list.ayse.achievements.1'),
        t('pages.board.members.list.ayse.achievements.2'),
        t('pages.board.members.list.ayse.achievements.3'),
      ],
      gradient: 'from-purple-600 to-purple-800',
    },
    {
      name: t('pages.board.members.list.kemal.name'),
      position: t('pages.board.members.list.kemal.position'),
      experience: t('pages.board.members.list.kemal.experience'),
      education: t('pages.board.members.list.kemal.education'),
      specialization: t('pages.board.members.list.kemal.specialization'),
      achievements: [
        t('pages.board.members.list.kemal.achievements.0'),
        t('pages.board.members.list.kemal.achievements.1'),
        t('pages.board.members.list.kemal.achievements.2'),
        t('pages.board.members.list.kemal.achievements.3'),
      ],
      gradient: 'from-orange-600 to-orange-800',
    },
    {
      name: t('pages.board.members.list.fatma.name'),
      position: t('pages.board.members.list.fatma.position'),
      experience: t('pages.board.members.list.fatma.experience'),
      education: t('pages.board.members.list.fatma.education'),
      specialization: t('pages.board.members.list.fatma.specialization'),
      achievements: [
        t('pages.board.members.list.fatma.achievements.0'),
        t('pages.board.members.list.fatma.achievements.1'),
        t('pages.board.members.list.fatma.achievements.2'),
        t('pages.board.members.list.fatma.achievements.3'),
      ],
      gradient: 'from-red-600 to-red-800',
    },
  ];

  const committees = [
    {
      name: t('pages.board.committees.list.audit.name'),
      purpose: t('pages.board.committees.list.audit.purpose'),
      members: [
        t('pages.board.committees.list.audit.members.0'),
        t('pages.board.committees.list.audit.members.1'),
        t('pages.board.committees.list.audit.members.2'),
      ],
      meetings: t('pages.board.committees.list.audit.meetings'),
      responsibilities: [
        t('pages.board.committees.list.audit.responsibilities.0'),
        t('pages.board.committees.list.audit.responsibilities.1'),
        t('pages.board.committees.list.audit.responsibilities.2'),
        t('pages.board.committees.list.audit.responsibilities.3'),
      ],
    },
    {
      name: t('pages.board.committees.list.governance.name'),
      purpose: t('pages.board.committees.list.governance.purpose'),
      members: [
        t('pages.board.committees.list.governance.members.0'),
        t('pages.board.committees.list.governance.members.1'),
        t('pages.board.committees.list.governance.members.2'),
      ],
      meetings: t('pages.board.committees.list.governance.meetings'),
      responsibilities: [
        t('pages.board.committees.list.governance.responsibilities.0'),
        t('pages.board.committees.list.governance.responsibilities.1'),
        t('pages.board.committees.list.governance.responsibilities.2'),
        t('pages.board.committees.list.governance.responsibilities.3'),
      ],
    },
    {
      name: t('pages.board.committees.list.risk.name'),
      purpose: t('pages.board.committees.list.risk.purpose'),
      members: [
        t('pages.board.committees.list.risk.members.0'),
        t('pages.board.committees.list.risk.members.1'),
        t('pages.board.committees.list.risk.members.2'),
      ],
      meetings: t('pages.board.committees.list.risk.meetings'),
      responsibilities: [
        t('pages.board.committees.list.risk.responsibilities.0'),
        t('pages.board.committees.list.risk.responsibilities.1'),
        t('pages.board.committees.list.risk.responsibilities.2'),
        t('pages.board.committees.list.risk.responsibilities.3'),
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
              {t('pages.board.title')}
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              {t('pages.board.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-heading font-bold text-primary-900 mb-8">
              {t('pages.board.intro.heading')}
            </h2>
            <p className="text-xl text-gray-700 mb-12 leading-relaxed">
              {t('pages.board.intro.content')}
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-white/80 rounded-lg"></div>
                </div>
                <h3 className="text-2xl font-bold text-primary-900 mb-2">
                  {t('pages.board.intro.stats.members.value')}
                </h3>
                <p className="text-gray-600">
                  {t('pages.board.intro.stats.members.label')}
                </p>
              </div>
              <div className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-white/80 rounded-lg"></div>
                </div>
                <h3 className="text-2xl font-bold text-primary-900 mb-2">
                  {t('pages.board.intro.stats.independent.value')}
                </h3>
                <p className="text-gray-600">
                  {t('pages.board.intro.stats.independent.label')}
                </p>
              </div>
              <div className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-white/80 rounded-lg"></div>
                </div>
                <h3 className="text-2xl font-bold text-primary-900 mb-2">
                  {t('pages.board.intro.stats.experience.value')}
                </h3>
                <p className="text-gray-600">
                  {t('pages.board.intro.stats.experience.label')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board Members */}
      <section
        ref={boardRef}
        className={`py-16 bg-gray-50 transition-all duration-1000 ${
          boardVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary-900 mb-4">
              {t('pages.board.members.heading')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('pages.board.members.subheading')}
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            {boardMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <div
                      className={`h-64 md:h-full bg-gradient-to-br ${member.gradient} flex items-center justify-center`}
                    >
                      <div className="text-center text-white">
                        <div className="w-24 h-24 bg-white/20 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                          <div className="w-12 h-12 bg-white/80 rounded-lg"></div>
                        </div>
                        <h3 className="text-xl font-bold mb-2">
                          {member.name}
                        </h3>
                        <p className="text-white/90">
                          {member.experience}{' '}
                          {t('pages.board.members.experienceLabel')}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-primary-900 mb-2">
                        {member.name}
                      </h3>
                      <p className="text-xl text-secondary-600 font-semibold mb-4">
                        {member.position}
                      </p>
                      <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600 mb-6">
                        <div>
                          <strong>
                            {t('pages.board.members.educationLabel')}
                          </strong>{' '}
                          {member.education}
                        </div>
                        <div>
                          <strong>
                            {t('pages.board.members.specializationLabel')}
                          </strong>{' '}
                          {member.specialization}
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-primary-800 mb-3">
                        {t('pages.board.members.achievementsLabel')}
                      </h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {member.achievements.map(
                          (achievement, achievementIndex) => (
                            <div
                              key={achievementIndex}
                              className="flex items-center"
                            >
                              <div className="w-2 h-2 bg-secondary-500 rounded-full mr-3 flex-shrink-0"></div>
                              <span className="text-gray-700 text-sm">
                                {achievement}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Committees */}
      <section
        ref={committeesRef}
        className={`py-16 bg-white transition-all duration-1000 ${
          committeesVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-heading font-bold text-primary-900 mb-4">
                {t('pages.board.committees.heading')}
              </h2>
              <p className="text-xl text-gray-600">
                {t('pages.board.committees.subheading')}
              </p>
            </div>

            <div className="space-y-8">
              {committees.map((committee, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
                >
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                      <h3 className="text-2xl font-bold text-primary-900 mb-4">
                        {committee.name}
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        {committee.purpose}
                      </p>

                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <h4 className="font-semibold text-primary-800 mb-2">
                            {t('pages.board.committees.membersLabel')}
                          </h4>
                          <ul className="space-y-1">
                            {committee.members.map((member, memberIndex) => (
                              <li
                                key={memberIndex}
                                className="text-gray-600"
                              >
                                {member}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary-800 mb-2">
                            {t('pages.board.committees.frequencyLabel')}
                          </h4>
                          <p className="text-gray-600">{committee.meetings}</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-primary-800 mb-3">
                        {t('pages.board.committees.responsibilitiesLabel')}
                      </h4>
                      <ul className="space-y-2">
                        {committee.responsibilities.map(
                          (responsibility, respIndex) => (
                            <li
                              key={respIndex}
                              className="flex items-start"
                            >
                              <div className="w-1.5 h-1.5 bg-secondary-500 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                              <span className="text-gray-600 text-sm">
                                {responsibility}
                              </span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Governance Principles */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-heading font-bold mb-12">
              {t('pages.board.principles.heading')}
            </h2>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-700 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-white/80 rounded-lg"></div>
                </div>
                <h3 className="text-lg font-bold mb-2">
                  {t('pages.board.principles.list.transparency.title')}
                </h3>
                <p className="text-primary-200 text-sm">
                  {t('pages.board.principles.list.transparency.description')}
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-white/80 rounded-lg"></div>
                </div>
                <h3 className="text-lg font-bold mb-2">
                  {t('pages.board.principles.list.accountability.title')}
                </h3>
                <p className="text-primary-200 text-sm">
                  {t('pages.board.principles.list.accountability.description')}
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-white/80 rounded-lg"></div>
                </div>
                <h3 className="text-lg font-bold mb-2">
                  {t('pages.board.principles.list.fairness.title')}
                </h3>
                <p className="text-primary-200 text-sm">
                  {t('pages.board.principles.list.fairness.description')}
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-white/80 rounded-lg"></div>
                </div>
                <h3 className="text-lg font-bold mb-2">
                  {t('pages.board.principles.list.responsibility.title')}
                </h3>
                <p className="text-primary-200 text-sm">
                  {t('pages.board.principles.list.responsibility.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BoardPage;
