# İletişim Bilgileri Kullanımı

## Merkezi İletişim Bilgileri

Tüm iletişim bilgileri artık çeviri dosyalarında `contactInfo` objesi altında merkezi olarak saklanmaktadır.

### Yapı

```json
{
  "contactInfo": {
    "company": {
      "name": "EKŞİOĞLU GRUP",
      "tagline": "Geleceği İnşa Eden Güç"
    },
    "address": {
      "title": "Merkez Ofis",
      "street": "Küçük Çamlıca Mahallesi",
      "street2": "Libadiye Caddesi No: 52",
      "district": "Üsküdar/İstanbul",
      "postalCode": "34398",
      "country": "Türkiye",
      "full": "Küçük Çamlıca Mahallesi, Libadiye Caddesi No: 52, Üsküdar/İstanbul, 34398 Türkiye"
    },
    "phone": {
      "main": "+90 850 346 46 52",
      "display": "Tel: +90 850 346 46 52",
      "fax": "+90 850 346 46 52"
    },
    "email": {
      "info": "info@eksioglugrup.tr",
      "contact": "iletisim@eksioglugrup.tr",
      "investor": "yatirimci@eksioglugrup.tr",
      "kvkk": "kvkk@eksioglu.com.tr",
      "career": "kariyer@eksioglugrup.tr"
    },
    "hours": {
      "weekday": "Pazartesi - Cuma: 09:00 - 18:00",
      "saturday": "Cumartesi: Kapalı",
      "sunday": "Pazar: Kapalı"
    },
    "social": {
      "linkedin": "https://www.linkedin.com/company/eksioglu-holding",
      "twitter": "https://twitter.com/eksioglugrup",
      "instagram": "https://www.instagram.com/eksioglugrup",
      "youtube": "https://www.youtube.com/eksioglugrup"
    }
  }
}
```

## React Component'lerinde Kullanım

### ContactInfoDisplay Component'i Kullanma (Önerilen)

En kolay yol, hazır `ContactInfoDisplay` component'ini kullanmaktır:

```tsx
import ContactInfoDisplay from '../components/ContactInfoDisplay';

const MyPage = () => {
  return (
    <div>
      {/* Tüm bilgileri göster */}
      <ContactInfoDisplay />
      
      {/* Sadece telefon ve email */}
      <ContactInfoDisplay 
        showAddress={false}
        showHours={false}
      />
      
      {/* Yatırımcı ilişkileri e-postası ile */}
      <ContactInfoDisplay 
        emailType="investor"
        showHours={true}
      />
      
      {/* Grid layout */}
      <ContactInfoDisplay 
        layout="grid"
        variant="detailed"
      />
      
      {/* Kompakt görünüm */}
      <ContactInfoDisplay 
        variant="compact"
        showHours={false}
      />
    </div>
  );
};
```

#### ContactInfoDisplay Props

| Prop | Tip | Varsayılan | Açıklama |
|------|-----|-----------|----------|
| `showAddress` | boolean | true | Adres bilgisini göster |
| `showPhone` | boolean | true | Telefon bilgisini göster |
| `showEmail` | boolean | true | E-posta bilgisini göster |
| `showHours` | boolean | false | Çalışma saatlerini göster |
| `emailType` | 'info' \| 'contact' \| 'investor' \| 'kvkk' \| 'career' | 'info' | Hangi e-posta adresini göstereceği |
| `layout` | 'vertical' \| 'horizontal' \| 'grid' | 'vertical' | Düzen tipi |
| `variant` | 'default' \| 'compact' \| 'detailed' | 'default' | Görünüm stili |

### Temel Kullanım (Manuel)

```tsx
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('contactInfo.company.name')}</h1>
      <p>{t('contactInfo.company.tagline')}</p>
      
      {/* Adres */}
      <address>
        <p>{t('contactInfo.address.street')}</p>
        <p>{t('contactInfo.address.street2')}</p>
        <p>{t('contactInfo.address.district')}</p>
        <p>{t('contactInfo.address.postalCode')} {t('contactInfo.address.country')}</p>
      </address>
      
      {/* Tek satır adres */}
      <p>{t('contactInfo.address.full')}</p>
      
      {/* İletişim */}
      <p>{t('contactInfo.phone.display')}</p>
      <a href={`mailto:${t('contactInfo.email.info')}`}>
        {t('contactInfo.email.info')}
      </a>
    </div>
  );
};
```

### Telefon Numarası Kullanımı

```tsx
// Görüntüleme için (label ile)
<p>{t('contactInfo.phone.display')}</p>
// Output: "Tel: +90 850 346 46 52"

// Link için (sadece numara)
<a href={`tel:${t('contactInfo.phone.main')}`}>
  {t('contactInfo.phone.display')}
</a>

// Faks numarası
<p>Fax: {t('contactInfo.phone.fax')}</p>
```

### E-posta Kullanımı

```tsx
// Genel bilgi e-postası
<a href={`mailto:${t('contactInfo.email.info')}`}>
  {t('contactInfo.email.info')}
</a>

// İletişim e-postası
<a href={`mailto:${t('contactInfo.email.contact')}`}>
  {t('contactInfo.email.contact')}
</a>

// Yatırımcı ilişkileri
<a href={`mailto:${t('contactInfo.email.investor')}`}>
  {t('contactInfo.email.investor')}
</a>

// KVKK / Gizlilik
<a href={`mailto:${t('contactInfo.email.kvkk')}`}>
  {t('contactInfo.email.kvkk')}
</a>

// Kariyer
<a href={`mailto:${t('contactInfo.email.career')}`}>
  {t('contactInfo.email.career')}
</a>
```

### Çalışma Saatleri

```tsx
<div>
  <p>{t('contactInfo.hours.weekday')}</p>
  <p>{t('contactInfo.hours.saturday')}</p>
  <p>{t('contactInfo.hours.sunday')}</p>
</div>
```

### Sosyal Medya Linkleri

```tsx
<div>
  <a href={t('contactInfo.social.linkedin')} target="_blank" rel="noopener">
    LinkedIn
  </a>
  <a href={t('contactInfo.social.twitter')} target="_blank" rel="noopener">
    Twitter
  </a>
  <a href={t('contactInfo.social.instagram')} target="_blank" rel="noopener">
    Instagram
  </a>
  <a href={t('contactInfo.social.youtube')} target="_blank" rel="noopener">
    YouTube
  </a>
</div>
```

## Güncellenen Bölümler

Aşağıdaki sayfalar/bileşenler artık merkezi `contactInfo` objesini kullanıyor:

1. **Footer** (`src/components/Footer.tsx`)
   - Adres bilgileri
   - Telefon numarası
   - E-posta adresi

2. **Contact Page** (`src/pages/ContactPage.tsx`)
   - İletişim bilgileri bölümü
   - Adres, telefon, e-posta, çalışma saatleri

3. **Investor Relations** (`src/pages/InvestorRelationsPage.tsx`)
   - Yatırımcı ilişkileri e-postası
   - Telefon numarası

4. **Privacy Policy** (`src/pages/PrivacyPolicyPage.tsx`)
   - KVKK e-posta adresi
   - İletişim telefonu

5. **Terms of Use** (`src/pages/TermsOfUsePage.tsx`)
   - Tam adres bilgisi
   - İletişim e-postası

6. **Cookie Policy** (`src/pages/CookiePolicyPage.tsx`)
   - İletişim e-postası

## Yeni İletişim Bilgisi Ekleme

Eğer yeni bir iletişim bilgisi eklemek isterseniz:

1. `src/i18n/locales/tr.json` dosyasında `contactInfo` objesine ekleyin
2. `src/i18n/locales/en.json` dosyasında da aynı eklemeyi yapın
3. Component'lerde `t('contactInfo.yeniAlan')` şeklinde kullanın

Örnek:
```json
{
  "contactInfo": {
    "whatsapp": "+90 850 346 46 52",
    "telegram": "@eksioglugrup"
  }
}
```

Kullanım:
```tsx
<a href={`https://wa.me/${t('contactInfo.whatsapp').replace(/[^0-9]/g, '')}`}>
  WhatsApp
</a>
```

## Avantajları

✅ **Tek kaynak**: Tüm iletişim bilgileri tek bir yerde
✅ **Kolay güncelleme**: Bir yerden güncelleyince her yere yansır
✅ **Tutarlılık**: Her yerde aynı bilgiler gösterilir
✅ **Çoklu dil**: Türkçe ve İngilizce otomatik desteklenir
✅ **Tip güvenliği**: TypeScript ile otomatik tamamlama
