import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'tr', name: 'Türkçe', flag: 'TR' },
    { code: 'en', name: 'English', flag: 'ENG' },
  ];

  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    setIsOpen(false);
  };

  // refs + portal positioning
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [dropdownStyle, setDropdownStyle] =
    useState<React.CSSProperties | null>(null);

  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      // position dropdown below the button, prefer aligning right edge
      const dropdownWidth = 192; // w-48
      let left = rect.right - dropdownWidth;
      // clamp to viewport with 8px padding
      const minLeft = 8;
      const maxLeft = window.innerWidth - dropdownWidth - 8;
      if (left < minLeft) left = minLeft;
      if (left > maxLeft) left = maxLeft;
      setDropdownStyle({
        position: 'fixed',
        top: rect.bottom + 8,
        left,
        minWidth: dropdownWidth,
        zIndex: 9999,
      });
    } else {
      setDropdownStyle(null);
    }
  }, [isOpen]);

  // recompute position on resize / scroll while open
  useEffect(() => {
    const recompute = () => {
      if (!isOpen || !buttonRef.current) return;
      const rect = buttonRef.current.getBoundingClientRect();
      const dropdownWidth = 192;
      let left = rect.right - dropdownWidth;
      const minLeft = 8;
      const maxLeft = window.innerWidth - dropdownWidth - 8;
      if (left < minLeft) left = minLeft;
      if (left > maxLeft) left = maxLeft;
      setDropdownStyle({
        position: 'fixed',
        top: rect.bottom + 8,
        left,
        minWidth: dropdownWidth,
        zIndex: 9999,
      });
    };

    window.addEventListener('resize', recompute);
    window.addEventListener('scroll', recompute, true);
    return () => {
      window.removeEventListener('resize', recompute);
      window.removeEventListener('scroll', recompute, true);
    };
  }, [isOpen]);

  // close on escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors duration-200 rounded-lg hover:bg-gray-50"
        aria-label={t('language')}
      >
        <span className="text-sm">{currentLanguage.flag}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
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

      {isOpen &&
        createPortal(
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-[9998]"
              onClick={() => setIsOpen(false)}
            />

            {/* Dropdown rendered to body to avoid clipping */}
            <div
              style={dropdownStyle ?? { position: 'fixed', zIndex: 9999 }}
              className="bg-white rounded-lg shadow-lg border border-gray-200 py-2"
            >
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => handleLanguageChange(language.code)}
                  className={`w-full flex items-center space-x-3 px-4 py-2 text-sm hover:bg-gray-50 transition-colors duration-200 ${
                    currentLanguage.code === language.code
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-700'
                  }`}
                >
                  <span className="text-xs">{language.flag}</span>
                  <span>{language.name}</span>
                  {currentLanguage.code === language.code && (
                    <svg
                      className="w-4 h-4 ml-auto text-primary-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </>,
          document.body
        )}
    </div>
  );
};

export default LanguageSwitcher;
