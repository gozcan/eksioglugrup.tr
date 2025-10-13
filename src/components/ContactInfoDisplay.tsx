import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface ContactInfoDisplayProps {
  showAddress?: boolean;
  showPhone?: boolean;
  showEmail?: boolean;
  showHours?: boolean;
  emailType?: 'info' | 'contact' | 'investor' | 'kvkk' | 'career';
  layout?: 'vertical' | 'horizontal' | 'grid';
  variant?: 'default' | 'compact' | 'detailed';
}

const ContactInfoDisplay = ({
  showAddress = true,
  showPhone = true,
  showEmail = true,
  showHours = false,
  emailType = 'info',
  layout = 'vertical',
  variant = 'default',
}: ContactInfoDisplayProps) => {
  const { t } = useTranslation();

  const gridClass =
    layout === 'grid'
      ? 'grid grid-cols-1 md:grid-cols-2 gap-6'
      : layout === 'horizontal'
      ? 'flex flex-wrap gap-6'
      : 'space-y-6';

  const itemClass =
    variant === 'compact'
      ? 'space-y-1'
      : variant === 'detailed'
      ? 'space-y-3 p-4 bg-gray-50 rounded-lg'
      : 'space-y-2';

  return (
    <div className={gridClass}>
      {showAddress && (
        <div className={itemClass}>
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                {t('contactInfo.address.title')}
              </h3>
              <address className="text-gray-600 not-italic text-sm">
                {t('contactInfo.address.street')}
                <br />
                {t('contactInfo.address.street2')}
                <br />
                {t('contactInfo.address.district')}
                <br />
                {t('contactInfo.address.postalCode')}{' '}
                {t('contactInfo.address.country')}
              </address>
            </div>
          </div>
        </div>
      )}

      {showPhone && (
        <div className={itemClass}>
          <div className="flex items-start gap-3">
            <Phone className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Telefon</h3>
              <a
                href={`tel:${t('contactInfo.phone.main')}`}
                className="text-primary-600 hover:text-primary-700 text-sm block"
              >
                {t('contactInfo.phone.display')}
              </a>
              {variant === 'detailed' && (
                <p className="text-gray-500 text-xs mt-1">
                  Fax: {t('contactInfo.phone.fax')}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {showEmail && (
        <div className={itemClass}>
          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">E-posta</h3>
              <a
                href={`mailto:${t(`contactInfo.email.${emailType}`)}`}
                className="text-primary-600 hover:text-primary-700 text-sm break-all"
              >
                {t(`contactInfo.email.${emailType}`)}
              </a>
            </div>
          </div>
        </div>
      )}

      {showHours && (
        <div className={itemClass}>
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                {t('contactInfo.hours.title') || 'Çalışma Saatleri'}
              </h3>
              <div className="text-gray-600 text-sm space-y-1">
                <p>{t('contactInfo.hours.weekday')}</p>
                {variant === 'detailed' && (
                  <>
                    <p>{t('contactInfo.hours.saturday')}</p>
                    <p>{t('contactInfo.hours.sunday')}</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactInfoDisplay;
