import { useTranslation } from 'react-i18next';
import {
  FileCheck,
  AlertCircle,
  Scale,
  Ban,
  RefreshCw,
  Mail,
} from 'lucide-react';
import ContactInfoDisplay from '../components/ContactInfoDisplay';

const TermsOfUsePage = () => {
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
                <FileCheck className="w-10 h-10 text-secondary-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              {t('termsOfUse.hero.title')}
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              {t('termsOfUse.hero.description')}
            </p>
            <p className="text-sm text-gray-300 mt-4">
              {t('termsOfUse.hero.lastUpdated')}
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
                {t('termsOfUse.introduction.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t('termsOfUse.introduction.text1')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t('termsOfUse.introduction.text2')}
              </p>
            </div>

            {/* Acceptance of Terms */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                  <Scale className="w-6 h-6 text-primary-600" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-primary-900">
                  {t('termsOfUse.acceptance.title')}
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t('termsOfUse.acceptance.text1')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t('termsOfUse.acceptance.text2')}
              </p>
            </div>

            {/* Use of Website */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-secondary-600" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-primary-900">
                  {t('termsOfUse.useOfWebsite.title')}
                </h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {t('termsOfUse.useOfWebsite.permitted.title')}
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        {t('termsOfUse.useOfWebsite.permitted.items.0')}
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        {t('termsOfUse.useOfWebsite.permitted.items.1')}
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        {t('termsOfUse.useOfWebsite.permitted.items.2')}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Prohibited Activities */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <Ban className="w-6 h-6 text-red-600" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-primary-900">
                  {t('termsOfUse.prohibited.title')}
                </h2>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>{t('termsOfUse.prohibited.items.0')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>{t('termsOfUse.prohibited.items.1')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>{t('termsOfUse.prohibited.items.2')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>{t('termsOfUse.prohibited.items.3')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>{t('termsOfUse.prohibited.items.4')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>{t('termsOfUse.prohibited.items.5')}</span>
                </li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <FileCheck className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-primary-900">
                  {t('termsOfUse.intellectualProperty.title')}
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t('termsOfUse.intellectualProperty.text1')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t('termsOfUse.intellectualProperty.text2')}
              </p>
            </div>

            {/* Disclaimer */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-orange-600" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-primary-900">
                  {t('termsOfUse.disclaimer.title')}
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t('termsOfUse.disclaimer.text1')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t('termsOfUse.disclaimer.text2')}
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <RefreshCw className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-primary-900">
                  {t('termsOfUse.changes.title')}
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {t('termsOfUse.changes.text')}
              </p>
            </div>

            {/* Contact */}
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md">
                  <Mail className="w-6 h-6 text-primary-600" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-primary-900">
                  {t('termsOfUse.contact.title')}
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                {t('termsOfUse.contact.text')}
              </p>

              <ContactInfoDisplay
                showAddress={true}
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

export default TermsOfUsePage;
