import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTranslation } from 'react-i18next';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const ValuesPage = () => {
  const { t } = useTranslation();

  useDocumentTitle({ title: t('pageTitles.values') });
  const { elementRef: valuesRef, isVisible: valuesVisible } =
    useScrollAnimation();
  const { elementRef: cultureRef, isVisible: cultureVisible } =
    useScrollAnimation();

  const coreValues = [
    {
      title: t('pages.values.core.list.honesty.title'),
      description: t('pages.values.core.list.honesty.description'),
      gradient: 'from-blue-500 to-blue-700',
      examples: [
        t('pages.values.core.list.honesty.examples.0'),
        t('pages.values.core.list.honesty.examples.1'),
        t('pages.values.core.list.honesty.examples.2'),
        t('pages.values.core.list.honesty.examples.3'),
      ],
    },
    {
      title: t('pages.values.core.list.excellence.title'),
      description: t('pages.values.core.list.excellence.description'),
      gradient: 'from-purple-500 to-purple-700',
      examples: [
        t('pages.values.core.list.excellence.examples.0'),
        t('pages.values.core.list.excellence.examples.1'),
        t('pages.values.core.list.excellence.examples.2'),
        t('pages.values.core.list.excellence.examples.3'),
      ],
    },
    {
      title: t('pages.values.core.list.respect.title'),
      description: t('pages.values.core.list.respect.description'),
      gradient: 'from-green-500 to-green-700',
      examples: [
        t('pages.values.core.list.respect.examples.0'),
        t('pages.values.core.list.respect.examples.1'),
        t('pages.values.core.list.respect.examples.2'),
        t('pages.values.core.list.respect.examples.3'),
      ],
    },
    {
      title: t('pages.values.core.list.collaboration.title'),
      description: t('pages.values.core.list.collaboration.description'),
      gradient: 'from-orange-500 to-orange-700',
      examples: [
        t('pages.values.core.list.collaboration.examples.0'),
        t('pages.values.core.list.collaboration.examples.1'),
        t('pages.values.core.list.collaboration.examples.2'),
        t('pages.values.core.list.collaboration.examples.3'),
      ],
    },
    {
      title: t('pages.values.core.list.responsibility.title'),
      description: t('pages.values.core.list.responsibility.description'),
      gradient: 'from-red-500 to-red-700',
      examples: [
        t('pages.values.core.list.responsibility.examples.0'),
        t('pages.values.core.list.responsibility.examples.1'),
        t('pages.values.core.list.responsibility.examples.2'),
        t('pages.values.core.list.responsibility.examples.3'),
      ],
    },
    {
      title: t('pages.values.core.list.innovation.title'),
      description: t('pages.values.core.list.innovation.description'),
      gradient: 'from-indigo-500 to-indigo-700',
      examples: [
        t('pages.values.core.list.innovation.examples.0'),
        t('pages.values.core.list.innovation.examples.1'),
        t('pages.values.core.list.innovation.examples.2'),
        t('pages.values.core.list.innovation.examples.3'),
      ],
    },
  ];

  const culturalElements = [
    {
      title: t('pages.values.culture.list.learning.title'),
      description: t('pages.values.culture.list.learning.description'),
      impact: t('pages.values.culture.list.learning.impact'),
    },
    {
      title: t('pages.values.culture.list.communication.title'),
      description: t('pages.values.culture.list.communication.description'),
      impact: t('pages.values.culture.list.communication.impact'),
    },
    {
      title: t('pages.values.culture.list.results.title'),
      description: t('pages.values.culture.list.results.description'),
      impact: t('pages.values.culture.list.results.impact'),
    },
    {
      title: t('pages.values.culture.list.satisfaction.title'),
      description: t('pages.values.culture.list.satisfaction.description'),
      impact: t('pages.values.culture.list.satisfaction.impact'),
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
              {t('pages.values.title')}
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              {t('pages.values.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-heading font-bold text-primary-900 mb-8">
              {t('pages.values.intro.heading')}
            </h2>
            <p className="text-xl text-gray-700 mb-12 leading-relaxed">
              {t('pages.values.intro.content')}
            </p>

            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8 md:p-12">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-700 rounded-2xl flex items-center justify-center">
                  <div className="w-10 h-10 bg-white/80 rounded-lg"></div>
                </div>
              </div>
              <blockquote className="text-2xl md:text-3xl font-heading font-bold text-primary-900 mb-4">
                "{t('pages.values.intro.quote')}"
              </blockquote>
              <p className="text-gray-600 italic">
                {t('pages.values.intro.attribution')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section
        ref={valuesRef}
        className={`py-16 bg-gray-50 transition-all duration-1000 ${
          valuesVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary-900 mb-4">
              {t('pages.values.core.heading')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('pages.values.core.subheading')}
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreValues.map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-center mb-6">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${value.gradient} rounded-2xl mx-auto mb-4 flex items-center justify-center`}
                    >
                      <div className="w-10 h-10 bg-white/80 rounded-lg"></div>
                    </div>
                    <h3 className="text-2xl font-bold text-primary-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {value.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary-800 mb-3">
                      {t('pages.values.core.areasLabel')}
                    </h4>
                    <ul className="space-y-2">
                      {value.examples.map((example, exampleIndex) => (
                        <li
                          key={exampleIndex}
                          className="flex items-center text-sm"
                        >
                          <div className="w-1.5 h-1.5 bg-secondary-500 rounded-full mr-2 flex-shrink-0"></div>
                          <span className="text-gray-600">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section
        ref={cultureRef}
        className={`py-16 bg-white transition-all duration-1000 ${
          cultureVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-heading font-bold text-primary-900 mb-4">
                {t('pages.values.culture.heading')}
              </h2>
              <p className="text-xl text-gray-600">
                {t('pages.values.culture.subheading')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {culturalElements.map((element, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-primary-900 mb-4">
                    {element.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {element.description}
                  </p>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-br from-secondary-500 to-secondary-700 rounded-full mr-3"></div>
                    <span className="text-sm font-semibold text-secondary-700">
                      {t('pages.values.culture.impactLabel')} {element.impact}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values in Action */}
      <section className="py-16 bg-gradient-to-br from-primary-900 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-heading font-bold mb-6">
                {t('pages.values.action.heading')}
              </h2>
              <p className="text-xl text-primary-100 leading-relaxed">
                {t('pages.values.action.subheading')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-700 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-white/80 rounded-lg"></div>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  {t('pages.values.action.metrics.satisfaction.value')}
                </h3>
                <p className="text-primary-200">
                  {t('pages.values.action.metrics.satisfaction.label')}
                </p>
              </div>
              <div>
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-white/80 rounded-lg"></div>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  {t('pages.values.action.metrics.ethics.value')}
                </h3>
                <p className="text-primary-200">
                  {t('pages.values.action.metrics.ethics.label')}
                </p>
              </div>
              <div>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-white/80 rounded-lg"></div>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  {t('pages.values.action.metrics.projects.value')}
                </h3>
                <p className="text-primary-200">
                  {t('pages.values.action.metrics.projects.label')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ValuesPage;
