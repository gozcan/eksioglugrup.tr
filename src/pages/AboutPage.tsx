import About from '../components/About';
import { useTranslation } from 'react-i18next';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const AboutPage = () => {
  const { t } = useTranslation();

  useDocumentTitle({ title: t('pageTitles.about') });

  return (
    <div className="pt-20">
      <About />
    </div>
  );
};

export default AboutPage;
