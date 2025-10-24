import { useTranslation } from 'react-i18next';
import { Shield, Lock, Eye, Database, UserCheck, FileText } from 'lucide-react';
import ContactInfoDisplay from '../components/ContactInfoDisplay';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const PrivacyPolicyPage = () => {
  const { t } = useTranslation();

  useDocumentTitle({ title: t('pageTitles.privacyPolicy') });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-900 via-primary-800 to-secondary-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <Shield className="w-10 h-10 text-secondary-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              {t('privacyPolicy.hero.title')}
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              {t('privacyPolicy.hero.description')}
            </p>
            <p className="text-sm text-gray-300 mt-4">
              {t('privacyPolicy.hero.lastUpdated')}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-heading font-bold text-primary-900 mb-4">
                {t('privacyPolicy.introduction.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t('privacyPolicy.introduction.text1')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t('privacyPolicy.introduction.text2')}
              </p>
            </div>

            {/* Data We Collect */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                  <Database className="w-6 h-6 text-primary-600" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-primary-900">
                  {t('privacyPolicy.dataCollection.title')}
                </h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {t('privacyPolicy.dataCollection.personal.title')}
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>
                      {t('privacyPolicy.dataCollection.personal.items.0')}
                    </li>
                    <li>
                      {t('privacyPolicy.dataCollection.personal.items.1')}
                    </li>
                    <li>
                      {t('privacyPolicy.dataCollection.personal.items.2')}
                    </li>
                    <li>
                      {t('privacyPolicy.dataCollection.personal.items.3')}
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {t('privacyPolicy.dataCollection.technical.title')}
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>
                      {t('privacyPolicy.dataCollection.technical.items.0')}
                    </li>
                    <li>
                      {t('privacyPolicy.dataCollection.technical.items.1')}
                    </li>
                    <li>
                      {t('privacyPolicy.dataCollection.technical.items.2')}
                    </li>
                    <li>
                      {t('privacyPolicy.dataCollection.technical.items.3')}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Your Data */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center">
                  <Eye className="w-6 h-6 text-secondary-600" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-primary-900">
                  {t('privacyPolicy.dataUsage.title')}
                </h2>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-secondary-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>{t('privacyPolicy.dataUsage.purposes.0')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-secondary-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>{t('privacyPolicy.dataUsage.purposes.1')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-secondary-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>{t('privacyPolicy.dataUsage.purposes.2')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-secondary-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>{t('privacyPolicy.dataUsage.purposes.3')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-secondary-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>{t('privacyPolicy.dataUsage.purposes.4')}</span>
                </li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Lock className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-primary-900">
                  {t('privacyPolicy.dataSecurity.title')}
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t('privacyPolicy.dataSecurity.text1')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t('privacyPolicy.dataSecurity.text2')}
              </p>
            </div>

            {/* Your Rights */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <UserCheck className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-primary-900">
                  {t('privacyPolicy.yourRights.title')}
                </h2>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>{t('privacyPolicy.yourRights.rights.0')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>{t('privacyPolicy.yourRights.rights.1')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>{t('privacyPolicy.yourRights.rights.2')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>{t('privacyPolicy.yourRights.rights.3')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>{t('privacyPolicy.yourRights.rights.4')}</span>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md">
                  <FileText className="w-6 h-6 text-primary-600" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-primary-900">
                  {t('privacyPolicy.contact.title')}
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                {t('privacyPolicy.contact.text')}
              </p>

              <ContactInfoDisplay
                showAddress={false}
                showPhone={true}
                showEmail={true}
                showHours={false}
                emailType="kvkk"
                variant="compact"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
