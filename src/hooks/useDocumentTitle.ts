import { useEffect } from 'react';

interface UseDocumentTitleProps {
  title: string;
  baseTitle?: string;
}

export const useDocumentTitle = ({
  title,
  baseTitle = 'Ekşioğlu Grup',
}: UseDocumentTitleProps) => {
  useEffect(() => {
    const previousTitle = document.title;

    // Eğer title Ana Sayfa ise sadece base title kullan
    if (title === 'Ana Sayfa') {
      document.title = baseTitle;
    } else {
      document.title = `${title} | ${baseTitle}`;
    }

    // Cleanup function - component unmount olduğunda eski title'a döner
    return () => {
      document.title = previousTitle;
    };
  }, [title, baseTitle]);
};
