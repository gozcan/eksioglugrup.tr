import { useTranslation } from 'react-i18next';
import {
  Cookie,
  Settings,
  BarChart3,
  Shield,
  Info,
  Trash2,
} from 'lucide-react';
import ContactInfoDisplay from '../components/ContactInfoDisplay';

const CookiePolicyPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-900 via-primary-800 to-secondary-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <Cookie className="w-10 h-10 text-secondary-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              {t('cookiePolicy.hero.title')}
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              {t('cookiePolicy.hero.description')}
            </p>
            <p className="text-sm text-gray-300 mt-4">
              {t('cookiePolicy.hero.lastUpdated')}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* What Are Cookies */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                  <Info className="w-6 h-6 text-primary-600" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-primary-900">
                  {t('cookiePolicy.whatAreCookies.title')}
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t('cookiePolicy.whatAreCookies.text1')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t('cookiePolicy.whatAreCookies.text2')}
              </p>
            </div>

            {/* Types of Cookies */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center">
                  <Settings className="w-6 h-6 text-secondary-600" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-primary-900">
                  {t('cookiePolicy.typesOfCookies.title')}
                </h2>
              </div>

              {/* Essential Cookies */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {t('cookiePolicy.typesOfCookies.essential.title')}
                    </h3>
                    <p className="text-gray-700 mb-3">
                      {t('cookiePolicy.typesOfCookies.essential.description')}
                    </p>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-1.5 flex-shrink-0"></span>
                        <span>
                          {t(
                            'cookiePolicy.typesOfCookies.essential.examples.0'
                          )}
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-1.5 flex-shrink-0"></span>
                        <span>
                          {t(
                            'cookiePolicy.typesOfCookies.essential.examples.1'
                          )}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Performance Cookies */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <BarChart3 className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {t('cookiePolicy.typesOfCookies.performance.title')}
                    </h3>
                    <p className="text-gray-700 mb-3">
                      {t('cookiePolicy.typesOfCookies.performance.description')}
                    </p>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></span>
                        <span>
                          {t(
                            'cookiePolicy.typesOfCookies.performance.examples.0'
                          )}
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></span>
                        <span>
                          {t(
                            'cookiePolicy.typesOfCookies.performance.examples.1'
                          )}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Functional Cookies */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Settings className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {t('cookiePolicy.typesOfCookies.functional.title')}
                    </h3>
                    <p className="text-gray-700 mb-3">
                      {t('cookiePolicy.typesOfCookies.functional.description')}
                    </p>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5 flex-shrink-0"></span>
                        <span>
                          {t(
                            'cookiePolicy.typesOfCookies.functional.examples.0'
                          )}
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5 flex-shrink-0"></span>
                        <span>
                          {t(
                            'cookiePolicy.typesOfCookies.functional.examples.1'
                          )}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Targeting Cookies */}
              <div>
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Cookie className="w-4 h-4 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {t('cookiePolicy.typesOfCookies.targeting.title')}
                    </h3>
                    <p className="text-gray-700 mb-3">
                      {t('cookiePolicy.typesOfCookies.targeting.description')}
                    </p>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-1.5 flex-shrink-0"></span>
                        <span>
                          {t(
                            'cookiePolicy.typesOfCookies.targeting.examples.0'
                          )}
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-1.5 flex-shrink-0"></span>
                        <span>
                          {t(
                            'cookiePolicy.typesOfCookies.targeting.examples.1'
                          )}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Managing Cookies */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Trash2 className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-primary-900">
                  {t('cookiePolicy.managingCookies.title')}
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t('cookiePolicy.managingCookies.text1')}
              </p>
              <div className="bg-gray-50 rounded-xl p-6 space-y-3">
                <h3 className="font-semibold text-gray-900 mb-3">
                  {t('cookiePolicy.managingCookies.browsers.title')}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary-400 rounded-full"></span>
                    <span>
                      {t('cookiePolicy.managingCookies.browsers.items.0')}
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary-400 rounded-full"></span>
                    <span>
                      {t('cookiePolicy.managingCookies.browsers.items.1')}
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary-400 rounded-full"></span>
                    <span>
                      {t('cookiePolicy.managingCookies.browsers.items.2')}
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary-400 rounded-full"></span>
                    <span>
                      {t('cookiePolicy.managingCookies.browsers.items.3')}
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Third Party Cookies */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-yellow-600" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-primary-900">
                  {t('cookiePolicy.thirdParty.title')}
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t('cookiePolicy.thirdParty.text1')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t('cookiePolicy.thirdParty.text2')}
              </p>
            </div>

            {/* Contact */}
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md">
                  <Info className="w-6 h-6 text-primary-600" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-primary-900">
                  {t('cookiePolicy.contact.title')}
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                {t('cookiePolicy.contact.text')}
              </p>

              <ContactInfoDisplay
                showAddress={false}
                showPhone={false}
                showEmail={true}
                showHours={false}
                emailType="info"
                variant="compact"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicyPage;
