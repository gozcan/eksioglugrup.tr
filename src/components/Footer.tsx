import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950 text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-secondary-500/5 to-transparent"></div>
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-secondary-400/10 rounded-full animate-pulse"></div>
        <div
          className="absolute -bottom-20 -left-20 w-40 h-40 bg-secondary-600/10 rounded-full animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-2 h-2 bg-secondary-400/30 rounded-full animate-bounce"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-secondary-300/40 rounded-full animate-bounce"
          style={{ animationDelay: '3s' }}
        ></div>
      </div>

      <div className="container mx-auto px-4 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-heading font-bold text-secondary-400 mb-2">
                {t('footer.companyName')}
              </h3>
              <p className="text-gray-300 mb-4">{t('footer.tagline')}</p>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              {t('footer.description')}
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="group w-12 h-12 bg-gradient-to-br from-primary-800 to-primary-700 hover:from-secondary-500 hover:to-secondary-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6 shadow-lg hover:shadow-secondary-500/25"
              >
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <span className="text-xs font-bold">in</span>
                </div>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="group w-12 h-12 bg-gradient-to-br from-primary-800 to-primary-700 hover:from-secondary-500 hover:to-secondary-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6 shadow-lg hover:shadow-secondary-500/25"
              >
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <span className="text-xs font-bold">𝕏</span>
                </div>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="group w-12 h-12 bg-gradient-to-br from-primary-800 to-primary-700 hover:from-secondary-500 hover:to-secondary-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6 shadow-lg hover:shadow-secondary-500/25"
              >
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <span className="text-xs font-bold">f</span>
                </div>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="group w-12 h-12 bg-gradient-to-br from-primary-800 to-primary-700 hover:from-secondary-500 hover:to-secondary-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6 shadow-lg hover:shadow-secondary-500/25"
              >
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <div className="w-4 h-4 bg-white/80 rounded-sm"></div>
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-secondary-400 mb-4">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-secondary-400 transition-colors duration-200"
                >
                  {t('footer.home')}
                </Link>
              </li>
              <li>
                <Link
                  to="/hakkimizda"
                  className="text-gray-300 hover:text-secondary-400 transition-colors duration-200"
                >
                  {t('footer.about')}
                </Link>
              </li>
              <li>
                <Link
                  to="/grup-sirketleri"
                  className="text-gray-300 hover:text-secondary-400 transition-colors duration-200"
                >
                  {t('footer.companies')}
                </Link>
              </li>
              <li>
                <Link
                  to="/iletisim"
                  className="text-gray-300 hover:text-secondary-400 transition-colors duration-200"
                >
                  {t('footer.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-secondary-400 mb-4">
              {t('footer.contactInfo')}
            </h4>
            <div className="space-y-3">
              <div>
                <p className="text-gray-300 text-sm">
                  {t('footer.address.line1')}
                  <br />
                  {t('footer.address.line2')}
                  <br />
                  {t('footer.address.line3')}
                </p>
              </div>
              <div>
                <p className="text-gray-300 text-sm">{t('footer.phone')}</p>
              </div>
              <div>
                <p className="text-gray-300 text-sm">{t('footer.email')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              {t('footer.rights')}
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-secondary-400 transition-colors duration-200"
              >
                {t('footer.links.privacy')}
              </a>
              <span className="text-gray-600">|</span>
              <a
                href="#"
                className="text-gray-400 hover:text-secondary-400 transition-colors duration-200"
              >
                {t('footer.links.terms')}
              </a>
              <span className="text-gray-600">|</span>
              <a
                href="#"
                className="text-gray-400 hover:text-secondary-400 transition-colors duration-200"
              >
                {t('footer.links.cookie')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
