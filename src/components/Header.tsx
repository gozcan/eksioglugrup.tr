import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

interface MegaMenuSection {
  title: string;
  items: {
    name: string;
    href: string;
    description: string;
  }[];
}

interface MegaMenuData {
  title: string;
  description: string;
  image: string;
  sections: MegaMenuSection[];
}

interface NavigationItem {
  name: string;
  href: string;
  megaMenu?: MegaMenuData;
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation: NavigationItem[] = [
    {
      name: t('navigation.home'),
      href: '/',
    },
    {
      name: t('navigation.about'),
      href: '/hakkimizda',
      megaMenu: {
        title: t('megaMenu.about.title'),
        description: t('megaMenu.about.description'),
        image: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
        sections: [
          {
            title: t('megaMenu.about.corporateIdentity'),
            items: [
              {
                name: t('megaMenu.about.story'),
                href: '/hikayemiz',
                description: t('megaMenu.about.storyDesc'),
              },
              {
                name: t('megaMenu.about.vision'),
                href: '/vizyon',
                description: t('megaMenu.about.visionDesc'),
              },
              {
                name: t('megaMenu.about.mission'),
                href: '/misyon',
                description: t('megaMenu.about.missionDesc'),
              },
              {
                name: t('megaMenu.about.values'),
                href: '/degerler',
                description: t('megaMenu.about.valuesDesc'),
              },
            ],
          },
          {
            title: t('megaMenu.about.managementSection'),
            items: [
              {
                name: t('megaMenu.about.board'),
                href: '/yonetim-kurulu',
                description: t('megaMenu.about.boardDesc'),
              },
              {
                name: t('megaMenu.about.management'),
                href: '/ust-yonetim',
                description: t('megaMenu.about.managementDesc'),
              },
            ],
          },
        ],
      },
    },
    {
      name: t('navigation.businessAreas'),
      href: '/grup-sirketleri',
      megaMenu: {
        title: t('megaMenu.business.title'),
        description: t('megaMenu.business.description'),
        image: 'linear-gradient(135deg, #065f46 0%, #10b981 100%)',
        sections: [
          {
            title: t('megaMenu.business.mainSectors'),
            items: [
              {
                name: t('megaMenu.business.construction'),
                href: '/grup-sirketleri#insaat',
                description: t('megaMenu.business.constructionDesc'),
              },
              {
                name: t('megaMenu.business.energy'),
                href: '/grup-sirketleri#enerji',
                description: t('megaMenu.business.energyDesc'),
              },
              {
                name: t('megaMenu.business.technology'),
                href: '/grup-sirketleri#teknoloji',
                description: t('megaMenu.business.technologyDesc'),
              },
            ],
          },
          {
            title: t('megaMenu.business.otherAreas'),
            items: [
              {
                name: t('megaMenu.business.realEstate'),
                href: '/grup-sirketleri#gayrimenkul',
                description: t('megaMenu.business.realEstateDesc'),
              },
              {
                name: t('megaMenu.business.industry'),
                href: '/grup-sirketleri#sanayi',
                description: t('megaMenu.business.industryDesc'),
              },
              {
                name: t('megaMenu.business.media'),
                href: '/grup-sirketleri#medya',
                description: t('megaMenu.business.mediaDesc'),
              },
            ],
          },
        ],
      },
    },
    {
      name: t('navigation.sustainability'),
      href: '/surdurulebilirlik',
      megaMenu: {
        title: t('megaMenu.sustainability.title'),
        description: t('megaMenu.sustainability.description'),
        image: 'linear-gradient(135deg, #166534 0%, #22c55e 100%)',
        sections: [
          {
            title: t('megaMenu.sustainability.approachSection'),
            items: [
              {
                name: t('megaMenu.sustainability.strategy'),
                href: '/surdurulebilirlik',
                description: t('megaMenu.sustainability.strategyDesc'),
              },
              {
                name: t('megaMenu.sustainability.environmental'),
                href: '/surdurulebilirlik#cevre',
                description: t('megaMenu.sustainability.environmentalDesc'),
              },
              {
                name: t('megaMenu.sustainability.socialImpact'),
                href: '/surdurulebilirlik#sosyal',
                description: t('megaMenu.sustainability.socialImpactDesc'),
              },
            ],
          },
          {
            title: t('megaMenu.sustainability.reportingSection'),
            items: [
              {
                name: t('megaMenu.sustainability.reports'),
                href: '/surdurulebilirlik#raporlar',
                description: t('megaMenu.sustainability.reportsDesc'),
              },
              {
                name: t('megaMenu.sustainability.certificates'),
                href: '/surdurulebilirlik#sertifikalar',
                description: t('megaMenu.sustainability.certificatesDesc'),
              },
            ],
          },
        ],
      },
    },
    {
      name: t('navigation.career'),
      href: '#',
      megaMenu: {
        title: t('megaMenu.corporate.title'),
        description: t('megaMenu.corporate.description'),
        image: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
        sections: [
          {
            title: t('megaMenu.corporate.investorMedia'),
            items: [
              {
                name: t('megaMenu.corporate.investor'),
                href: '/yatirimci-iliskileri',
                description: t('megaMenu.corporate.investorDesc'),
              },
              {
                name: t('megaMenu.corporate.media'),
                href: '/medya',
                description: t('megaMenu.corporate.mediaDesc'),
              },
            ],
          },
          {
            title: t('megaMenu.corporate.techPeople'),
            items: [
              {
                name: t('megaMenu.corporate.technology'),
                href: '/teknoloji-inovasyon',
                description: t('megaMenu.corporate.technologyDesc'),
              },
              {
                name: t('megaMenu.corporate.career'),
                href: '/kariyer',
                description: t('megaMenu.corporate.careerDesc'),
              },
            ],
          },
        ],
      },
    },
    {
      name: t('navigation.contact'),
      href: '/iletisim',
    },
  ];

  const isActiveRoute = (item: NavigationItem): boolean => {
    if (item.href === location.pathname) return true;
    if (item.megaMenu) {
      return item.megaMenu.sections.some((section) =>
        section.items.some((subItem) => location.pathname === subItem.href)
      );
    }
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg'
          : 'bg-white shadow-sm'
      } border-b border-gray-100`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center group"
          >
            <div className="relative">
              <h1 className="text-2xl font-heading font-bold text-primary-900 group-hover:text-primary-700 transition-colors duration-300">
                EKŞİOĞLU GRUP
              </h1>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-secondary-500 group-hover:w-full transition-all duration-500"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.megaMenu ? (
                  <button
                    className={`px-4 py-2 font-medium transition-all duration-300 relative flex items-center rounded-lg ${
                      isActiveRoute(item)
                        ? 'text-primary-900 bg-primary-50'
                        : 'text-gray-700 hover:text-primary-900 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                    <svg
                      className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className={`px-4 py-2 font-medium transition-all duration-300 relative rounded-lg block ${
                      isActiveRoute(item)
                        ? 'text-primary-900 bg-primary-50'
                        : 'text-gray-700 hover:text-primary-900 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Mega Menu */}
                {item.megaMenu && (
                  <div
                    className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-screen max-w-6xl transition-all duration-300 ${
                      activeDropdown === item.name
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible -translate-y-4'
                    }`}
                  >
                    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                      <div className="grid grid-cols-12 min-h-96">
                        {/* Left Hero Section */}
                        <div
                          className="col-span-4 p-8 text-white relative overflow-hidden"
                          style={{ background: item.megaMenu.image }}
                        >
                          <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-4">
                              {item.megaMenu.title}
                            </h3>
                            <p className="text-lg opacity-90 leading-relaxed">
                              {item.megaMenu.description}
                            </p>
                          </div>
                          <div className="absolute inset-0 bg-black/20"></div>
                          <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-white/10"></div>
                          <div className="absolute -top-12 -left-12 w-32 h-32 rounded-full bg-white/5"></div>
                        </div>

                        {/* Right Content Section */}
                        <div className="col-span-8 p-8">
                          <div className="grid grid-cols-2 gap-8 h-full">
                            {item.megaMenu.sections.map(
                              (section, sectionIndex) => (
                                <div
                                  key={sectionIndex}
                                  className="space-y-4"
                                >
                                  <h4 className="font-semibold text-primary-900 text-lg border-b border-gray-200 pb-2">
                                    {section.title}
                                  </h4>
                                  <ul className="space-y-3">
                                    {section.items.map((subItem, itemIndex) => (
                                      <li key={itemIndex}>
                                        <Link
                                          to={subItem.href}
                                          className="group block p-3 rounded-lg hover:bg-gray-50 transition-all duration-200"
                                        >
                                          <div className="font-medium text-primary-900 group-hover:text-primary-700 mb-1">
                                            {subItem.name}
                                          </div>
                                          <div className="text-sm text-gray-600 group-hover:text-gray-800">
                                            {subItem.description}
                                          </div>
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Language Switcher */}
          <div className="hidden lg:flex items-center ml-4">
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden flex flex-col w-8 h-8 justify-center items-center group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menüyü aç/kapat"
          >
            <span
              className={`block w-6 h-0.5 bg-primary-900 transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-primary-900 my-1 transition-opacity duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-primary-900 transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-500 overflow-hidden ${
            isMenuOpen ? 'max-h-screen pb-6' : 'max-h-0'
          }`}
        >
          <nav className="pt-4 space-y-2">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.megaMenu ? (
                  <div>
                    <button
                      className={`w-full text-left py-3 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-between ${
                        isActiveRoute(item)
                          ? 'text-primary-900 bg-primary-50'
                          : 'text-gray-700 hover:text-primary-900 hover:bg-gray-50'
                      }`}
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === item.name ? null : item.name
                        )
                      }
                    >
                      {item.name}
                      <svg
                        className={`w-4 h-4 transition-transform duration-300 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {/* Mobile Mega Menu */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        activeDropdown === item.name
                          ? 'max-h-96 opacity-100'
                          : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="pl-4 pt-2 space-y-4">
                        {item.megaMenu.sections.map((section, sectionIndex) => (
                          <div key={sectionIndex}>
                            <h4 className="font-semibold text-primary-800 mb-2 text-sm uppercase tracking-wide">
                              {section.title}
                            </h4>
                            <div className="space-y-1">
                              {section.items.map((subItem, itemIndex) => (
                                <Link
                                  key={itemIndex}
                                  to={subItem.href}
                                  className="block py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 text-gray-600 hover:text-primary-900 hover:bg-gray-50"
                                  onClick={() => {
                                    setIsMenuOpen(false);
                                    setActiveDropdown(null);
                                  }}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`block py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                      isActiveRoute(item)
                        ? 'text-primary-900 bg-primary-50'
                        : 'text-gray-700 hover:text-primary-900 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile Language Switcher */}
            <div className="pt-4 px-4 border-t border-gray-200">
              <LanguageSwitcher />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
