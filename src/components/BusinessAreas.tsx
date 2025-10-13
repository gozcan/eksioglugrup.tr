import { useStaggeredAnimation } from '../hooks/useScrollAnimation';
import { useTranslation } from 'react-i18next';

const BusinessAreas = () => {
  const { t } = useTranslation();

  const businessAreas = [
    {
      id: 0,
      icon: '🏗️',
      color: 'from-blue-600 to-blue-800',
    },
    {
      id: 1,
      icon: '⚡',
      color: 'from-amber-500 to-orange-600',
    },
    {
      id: 2,
      icon: '📱',
      color: 'from-purple-600 to-pink-600',
    },
    {
      id: 3,
      icon: '🏢',
      color: 'from-emerald-600 to-green-700',
    },
    {
      id: 4,
      icon: '🚜',
      color: 'from-gray-600 to-gray-800',
    },
    {
      id: 5,
      icon: '🛡️',
      color: 'from-teal-600 to-cyan-700',
    },
  ];

  const { containerRef, visibleItems } = useStaggeredAnimation(
    businessAreas.length,
    150
  );

  return (
    <section
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
      id="faaliyet-alanlari"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-900 mb-6">
            {t('businessAreas.title')}
          </h2>
          <div className="w-24 h-1 bg-secondary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t('businessAreas.subtitle')}
          </p>
        </div>

        {/* Business Areas Grid */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {businessAreas.map((area, index) => (
            <div
              key={area.id}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-secondary-200 ${
                visibleItems[index] ? 'animate-fadeInUp' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Colored Top Bar */}
              <div className={`h-2 bg-gradient-to-r ${area.color}`}></div>

              {/* Card Content */}
              <div className="p-8">
                {/* Icon & Title */}
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className={`text-5xl bg-gradient-to-br ${area.color} p-4 rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300`}
                  >
                    <span className="filter brightness-0 invert">
                      {area.icon}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-secondary-600 transition-colors">
                      {t(`businessAreas.areas.${area.id}.title`)}
                    </h3>
                    <p className="text-sm text-gray-500 font-medium">
                      {t(`businessAreas.areas.${area.id}.company`)}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                  {t(`businessAreas.areas.${area.id}.description`)}
                </p>

                {/* Features Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {[0, 1, 2].map((idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${area.color} text-white shadow-sm`}
                    >
                      {t(`businessAreas.areas.${area.id}.features.${idx}`)}
                    </span>
                  ))}
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
                  {[0, 1, 2].map((idx) => (
                    <div
                      key={idx}
                      className="text-center group/stat"
                    >
                      <div
                        className={`text-2xl font-bold bg-gradient-to-r ${area.color} bg-clip-text text-transparent group-hover/stat:scale-110 transition-transform`}
                      >
                        {t(`businessAreas.areas.${area.id}.stats.${idx}.value`)}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {t(`businessAreas.areas.${area.id}.stats.${idx}.label`)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-secondary-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            {t('businessAreas.cta.question')}
          </p>
          <a
            href="/grup-sirketleri"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <span>{t('businessAreas.cta.button')}</span>
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BusinessAreas;
