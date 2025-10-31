import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const CompaniesPage = () => {
  const { t } = useTranslation();

  useDocumentTitle({ title: t('pageTitles.companies') });
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // URL'den şirket ID'sini oku, yoksa en eski şirketi seç (Tulpar 1967)
  const companyIdFromUrl = searchParams.get('company');
  const [selectedCompany, setSelectedCompany] = useState(
    companyIdFromUrl || 'tulpar'
  );

  // URL parametresi değiştiğinde seçili şirketi güncelle
  useEffect(() => {
    const companyId = searchParams.get('company');
    if (companyId) {
      setSelectedCompany(companyId);
    }
  }, [searchParams]);

  // Şirket değiştirme fonksiyonu (URL güncelleme ve scroll to top ile)
  const handleCompanyChange = (companyId: string) => {
    setSelectedCompany(companyId);
    // URL'yi güncelle
    navigate(`/grup-sirketleri?company=${companyId}`, { replace: true });
    // Sayfanın en üstüne smooth scroll
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Kategoriler ve şirketler
  const categories = [
    {
      id: 'construction',
      name: t('megaMenu.business.construction'),
      icon: '🏗️',
      companies: [
        {
          id: 'ekguntas',
          name: t('megaMenu.business.companies.construction.ekguntas'),
          description: t('pages.companies.list.ekguntas.description'),
          website: 'https://www.ekguntas.com',
          established: '1981',
          logo: '/images/logos/ekguntas.png',
          services: [
            t('pages.companies.list.ekguntas.services.0'),
            t('pages.companies.list.ekguntas.services.1'),
            t('pages.companies.list.ekguntas.services.2'),
            t('pages.companies.list.ekguntas.services.3'),
          ],
        },
        {
          id: 'ekutas',
          name: t('megaMenu.business.companies.construction.ekutas'),
          description: t('pages.companies.list.ekutas.description'),
          website: 'https://www.ekutas.com',
          established: '1978',
          logo: '/images/logos/ekutas.svg',
          services: [
            t('pages.companies.list.ekutas.services.0'),
            t('pages.companies.list.ekutas.services.1'),
            t('pages.companies.list.ekutas.services.2'),
            t('pages.companies.list.ekutas.services.3'),
          ],
        },
        {
          id: 'turansan',
          name: t('megaMenu.business.companies.construction.turansan'),
          description:
            'Ekşioğlu Turansan, 2012 yılında kurulmuş olan inşaat sektöründe kaliteli ve güvenilir projeler gerçekleştiren bir şirkettir. Konut, ticari ve endüstriyel yapı projelerinde uzmanlaşan firmamız, modern yapı teknikleri ve çevre dostu yaklaşımlarla sektöre öncülük etmektedir. Müşteri memnuniyeti odaklı çalışma prensibimizle zamanında teslimat ve kaliteden ödün vermeme ilkelerine bağlı kalarak projelerimizi hayata geçiriyoruz.',
          website: '#',
          established: '2012',
          logo: null,
          services: [
            'Konut Projeleri',
            'Ticari Binalar',
            'Altyapı Çalışmaları',
          ],
        },
        {
          id: 'leyan',
          name: t('megaMenu.business.companies.construction.leyan'),
          description: t('pages.companies.list.leyan.description'),
          website: 'https://www.leyanrestorasyon.com',
          established: '2004',
          logo: '/images/logos/leyan.jpg',
          services: [
            t('pages.companies.list.leyan.services.0'),
            t('pages.companies.list.leyan.services.1'),
            t('pages.companies.list.leyan.services.2'),
            t('pages.companies.list.leyan.services.3'),
          ],
        },
        {
          id: 'leyan-yikim',
          name: t('megaMenu.business.companies.construction.leyanDemolition'),
          description:
            'Leyan Yıkım, 2004 yılında Leyan bünyesinde kurulan kontrollü yıkım ve hafriyat hizmetlerinde uzmanlaşmış, güvenli ve çevre dostu çözümler sunan bir firmadır. Modern yıkım teknolojileri ve deneyimli ekibimiz ile hem küçük ölçekli bina yıkımlarında hem de büyük endüstriyel tesislerin sökümünde başarılı projeler gerçekleştirmekteyiz. İş güvenliği ve çevre koruma standartlarına tam uyum sağlayarak hizmet veriyoruz.',
          website: '#',
          established: '2004',
          logo: null,
          services: [
            'Bina Yıkımı',
            'Hafriyat',
            'Enkaz Kaldırma',
            'Alan Temizliği',
          ],
        },
      ],
    },
    {
      id: 'corporateServices',
      name: t('megaMenu.business.corporateServices'),
      icon: '🏢',
      companies: [
        {
          id: 'ilka',
          name: t('megaMenu.business.companies.corporateServices.ilka'),
          description: t('pages.companies.list.ilka.description'),
          website: 'https://www.ilkaprofesyonel.com',
          established: '2024',
          logo: '/images/logos/ilka.svg',
          services: [
            t('pages.companies.list.ilka.services.0'),
            t('pages.companies.list.ilka.services.1'),
            t('pages.companies.list.ilka.services.2'),
            t('pages.companies.list.ilka.services.3'),
          ],
        },
        {
          id: 'piran-gayrimenkul',
          name: t(
            'megaMenu.business.companies.corporateServices.piranRealEstate'
          ),
          description: t('pages.companies.list.piran.description'),
          website: 'https://www.pirangyd.com',
          established: '2004',
          logo: '/images/logos/piran_gayrimenkul.svg',
          services: [
            t('pages.companies.list.piran.services.0'),
            t('pages.companies.list.piran.services.1'),
            t('pages.companies.list.piran.services.2'),
            t('pages.companies.list.piran.services.3'),
          ],
        },
        {
          id: 'piran-kurumsal',
          name: t(
            'megaMenu.business.companies.corporateServices.piranCorporate'
          ),
          description:
            'Piran Kurumsal Hizmetler, şirketlerin insan kaynakları, eğitim ve operasyonel ihtiyaçlarına yönelik entegre çözümler sunan deneyimli bir organizasyondur. 2004 yılından bu yana edindiğimiz bilgi birikimi ile kurumsal danışmanlık, personel eğitimi ve organizasyonel gelişim alanlarında sektörün öncü firmalarından biriyiz. İş süreçlerini optimize ederek şirketlerin verimliliğini artırmayı hedefliyoruz.',
          website: '#',
          established: '2004',
          logo: '/images/logos/piran_kurumsal_hizmetler.svg',
          services: [
            'Danışmanlık',
            'Kurumsal Eğitim',
            'İnsan Kaynakları',
            'Operasyonel Destek',
          ],
        },
        {
          id: 'piran-yonetim',
          name: t(
            'megaMenu.business.companies.corporateServices.piranManagement'
          ),
          description: t('pages.companies.list.piranYonetim.description'),
          website: '#',
          established: '2004',
          logo: '/images/logos/piran_yonetim.svg',
          services: [
            t('pages.companies.list.piranYonetim.services.0'),
            t('pages.companies.list.piranYonetim.services.1'),
            t('pages.companies.list.piranYonetim.services.2'),
            t('pages.companies.list.piranYonetim.services.3'),
          ],
        },
        {
          id: 'piran-isletmecilik',
          name: t(
            'megaMenu.business.companies.corporateServices.piranBusiness'
          ),
          description:
            'Piran İşletmecilik, endüstriyel tesisler, ticari binalar ve özel sektör kuruluşlarının tesis yönetimi ve operasyonel süreçlerini optimize ederek kesintisiz hizmet sunar. Profesyonel ekibimiz ile bakım-onarım, teknik altyapı yönetimi ve operasyonel verimlilik konularında kapsamlı çözümler üretiyoruz. Modern tesis yönetimi anlayışı ile müşterilerimizin maliyetlerini düşürüyor, verimliliğini artırıyoruz.',
          website: '#',
          established: '2004',
          logo: '/images/logos/piran_isletmecilik.svg',
          services: [
            'Tesis İşletmesi',
            'Operasyon Yönetimi',
            'Bakım Onarım',
            'Teknik Destek',
          ],
        },
        {
          id: 'piran-yayincilik',
          name: t(
            'megaMenu.business.companies.corporateServices.piranPublishing'
          ),
          description:
            'Piran Yayıncılık, kurumsal yayınlar, dijital içerik üretimi ve medya hizmetleri alanında uzmanlaşmış bir kuruluştur. Şirketlerin kurumsal kimliklerini güçlendiren yayınlar, dijital platformlar için içerik ve basılı materyaller üretiyoruz. Yaratıcı ekibimiz ve modern teknolojilerimiz ile markaların hedef kitlelerine etkili bir şekilde ulaşmalarını sağlıyoruz.',
          website: '#',
          established: '2004',
          logo: '/images/logos/piran_yayincilik.svg',
          services: [
            'Kurumsal Yayınlar',
            'Dijital İçerik',
            'Basım Hizmetleri',
            'Dağıtım',
          ],
        },
        {
          id: 'volan',
          name: t('megaMenu.business.companies.corporateServices.volan'),
          description: t('pages.companies.list.volan.description'),
          website: '#',
          established: '2003',
          logo: null,
          services: [
            t('pages.companies.list.volan.services.0'),
            t('pages.companies.list.volan.services.1'),
            t('pages.companies.list.volan.services.2'),
            t('pages.companies.list.volan.services.3'),
          ],
        },
        {
          id: 'tulpar',
          name: t('megaMenu.business.companies.corporateServices.tulpar'),
          description:
            'Tulpar Turizm, 1967 yılından bu yana kurumsal seyahat organizasyonu ve etkinlik yönetimi konusunda uzmanlaşmış köklü bir turizm şirketidir. Kongre organizasyonları, kurumsal geziler ve özel etkinlik planlaması alanlarında hizmet vermekteyiz. Uzun yıllara dayanan deneyimimiz, profesyonel ekibimiz ve geniş iş ortağı ağımız ile unutulmaz deneyimler yaratıyoruz.',
          website: '#',
          established: '1967',
          logo: null,
          services: [
            'Tur Organizasyonu',
            'Otel Rezervasyon',
            'Transfer',
            'Kongre Turizmi',
          ],
        },
        {
          id: 'onay',
          name: t('megaMenu.business.companies.corporateServices.onay'),
          description:
            'Onay Ar-Ge, 2023 yılından itibaren teknoloji ve inovasyon odaklı projeler geliştiren bir araştırma-geliştirme kuruluşudur. Şirketlerin rekabet gücünü artıracak yenilikçi çözümler üretmek, patent süreçlerinde danışmanlık vermek ve Ar-Ge projelerini yönetmek konusunda uzmanız. Üniversite-sanayi işbirliği projelerinde aktif rol alarak teknoloji transferine katkı sağlıyoruz.',
          website: '#',
          established: '2023',
          logo: null,
          services: [
            'Ar-Ge Projeleri',
            'İnovasyon',
            'Teknoloji Geliştirme',
            'Patent Danışmanlığı',
          ],
        },
        {
          id: 'ponton',
          name: t('megaMenu.business.companies.corporateServices.ponton'),
          description: t('pages.companies.list.ponton.description'),
          website: 'https://www.pontonmedya.com',
          established: '1996',
          logo: '/images/logos/ponton.png',
          services: [
            t('pages.companies.list.ponton.services.0'),
            t('pages.companies.list.ponton.services.1'),
            t('pages.companies.list.ponton.services.2'),
            t('pages.companies.list.ponton.services.3'),
          ],
        },
      ],
    },
    {
      id: 'corporateSupply',
      name: t('megaMenu.business.corporateSupply'),
      icon: '📦',
      companies: [
        {
          id: 'tevor-tedarik',
          name: t('megaMenu.business.companies.corporateSupply.tevorSupply'),
          description:
            'Tevor Tedarik, 1997 yılından bu yana endüstriyel ve ticari işletmelerin tedarik zinciri yönetiminde güvenilir çözümler sunar. Satın alma süreçlerinin optimizasyonu, tedarikçi yönetimi ve lojistik koordinasyonu konularında uzman ekibimiz ile müşterilerimizin maliyetlerini düşürüyor, tedarik süreçlerini hızlandırıyoruz. Geniş tedarikçi ağımız ve sektörel deneyimimiz ile kesintisiz hizmet garantisi sağlıyoruz.',
          website: '#',
          established: '1997',
          logo: '/images/logos/tevor.jpg',
          services: [
            'Tedarik Yönetimi',
            'Satın Alma',
            'Lojistik Çözümleri',
            'Stok Yönetimi',
          ],
        },
        {
          id: 'peyk',
          name: t('megaMenu.business.companies.corporateSupply.peyk'),
          description:
            'Peyk Lojistik, 1978 yılından itibaren kara taşımacılığı, depolama ve dağıtım hizmetlerinde köklü bir geçmişe sahip, hızlı ve güvenilir çözümler sunan bir lojistik firmasıdır. Modern depolama tesislerimiz, geniş araç filomuz ve teknolojik altyapımız ile yurt içi lojistik ihtiyaçlarınızı karşılıyoruz. Zamanında teslimat ve müşteri memnuniyeti odaklı hizmet anlayışımız ile sektörde öne çıkıyoruz.',
          website: '#',
          established: '1978',
          logo: null,
          services: [
            'Kara Taşımacılığı',
            'Depolama',
            'Dağıtım',
            'Kargo Hizmetleri',
          ],
        },
        {
          id: 'eksizade',
          name: t('megaMenu.business.companies.corporateSupply.eksizade'),
          description: t('pages.companies.list.eksizade.description'),
          website: 'https://www.eksizademakina.com',
          established: '1994',
          logo: null,
          services: [
            t('pages.companies.list.eksizade.services.0'),
            t('pages.companies.list.eksizade.services.1'),
            t('pages.companies.list.eksizade.services.2'),
            t('pages.companies.list.eksizade.services.3'),
          ],
        },
        {
          id: 'tevor-enerji',
          name: t('megaMenu.business.companies.corporateSupply.tevorEnergy'),
          description: t('pages.companies.list.tevor.description'),
          website: 'https://www.tevorenerji.com.tr',
          established: '1997',
          logo: '/images/logos/tevor.jpg',
          services: [
            t('pages.companies.list.tevor.services.0'),
            t('pages.companies.list.tevor.services.1'),
            t('pages.companies.list.tevor.services.2'),
            t('pages.companies.list.tevor.services.3'),
          ],
        },
        {
          id: 'vervoer',
          name: t('megaMenu.business.companies.corporateSupply.vervoer'),
          description:
            'Vervoer, 2025 yılında kurulan ve elektrikli mobilite çözümlerinde uzmanlaşmış yenilikçi bir firmadır. Sürdürülebilir ulaşım vizyonumuz ile elektrikli araç satışı, şarj altyapısı kurulumu ve bakım hizmetleri sunuyoruz. Çevre dostu ulaşım çözümlerine geçiş yapmak isteyen bireysel ve kurumsal müşterilerimize kapsamlı danışmanlık ve teknik destek sağlıyoruz.',
          website: '#',
          established: '2025',
          logo: null,
          services: [
            'Elektrikli Araç Satışı',
            'Şarj İstasyonları',
            'Bakım Servisi',
            'Danışmanlık',
          ],
        },
        {
          id: 'tevor-bilisim',
          name: t('megaMenu.business.companies.corporateSupply.tevorIT'),
          description:
            'Tevor Bilişim, dijital dönüşüm ve online pazarlama alanında 1997 yılından bu yana hizmet veren köklü bir teknoloji şirketidir. E-ticaret platformları, web tasarım, dijital pazarlama stratejileri ve SEO optimizasyonu konularında uzmanız. İşletmelerin dijital varlıklarını güçlendiriyor, online satışlarını artırmalarına yardımcı oluyoruz. Modern web teknolojileri ve veri odaklı pazarlama yaklaşımları ile müşterilerimize değer katıyoruz.',
          website: '#',
          established: '1997',
          logo: '/images/logos/tevor.jpg',
          services: [
            'Dijital Pazarlama',
            'E-Ticaret',
            'Web Tasarım',
            'SEO Hizmetleri',
          ],
        },
      ],
    },
    {
      id: 'production',
      name: t('megaMenu.business.production'),
      icon: '⚙️',
      companies: [
        {
          id: 'jerfa-makina',
          name: t('megaMenu.business.companies.production.jerfaMachine'),
          description:
            'Jerfa Makina, 2012 yılından itibaren hassas CNC imalat, kalıp üretimi ve özel makina tasarımı alanlarında faaliyet gösteren bir üretim şirketidir. Modern CNC tezgahlarımız ve deneyimli mühendis kadromuz ile otomotiv, savunma sanayi ve beyaz eşya sektörlerine yüksek kaliteli parça ve kalıp üretimi yapıyoruz. Müşteri odaklı çözümler ve mühendislik desteği ile sektörde fark yaratıyoruz.',
          website: '#',
          established: '2012',
          logo: null,
          services: [
            'CNC İmalat',
            'Kalıp Üretimi',
            'Özel Makina',
            'Mühendislik Hizmetleri',
          ],
        },
        {
          id: 'jerfa-yapi',
          name: t('megaMenu.business.companies.production.jerfaConstruction'),
          description:
            'Jerfa Yapı, 2012 yılından bu yana inşaat sektörüne yönelik beton ürünleri, prefabrik yapı elemanları ve yapı kimyasalları üretimi gerçekleştirmektedir. Modern üretim tesislerimizde kaliteli hammadde ve ileri teknoloji kullanarak dayanıklı, çevre dostu yapı malzemeleri üretiyoruz. İnşaat projelerinin ihtiyaç duyduğu tüm yapı malzemelerini tek çatı altında sunarak müşterilerimize zaman ve maliyet avantajı sağlıyoruz.',
          website: '#',
          established: '2012',
          logo: null,
          services: [
            'Beton Ürünleri',
            'Prefabrik',
            'İnşaat Malzemeleri',
            'Yapı Kimyasalları',
          ],
        },
        {
          id: 'jerfa-madencilik',
          name: t('megaMenu.business.companies.production.jerfaMining'),
          description:
            'Jerfa Madencilik, 2015 yılında kurulmuş olup taş ocağı işletmeciliği, agrega üretimi ve mineral işleme konularında faaliyet göstermektedir. Doğal kaynaklardan değer yaratan şirketimiz, çevre ve iş güvenliği standartlarına tam uyum sağlayarak sürdürülebilir madencilik prensiplerine bağlı kalır. Kaliteli agrega üretimi ve mineral işleme teknolojilerimiz ile inşaat ve sanayi sektörlerine hammadde tedarik ediyoruz.',
          website: '#',
          established: '2015',
          logo: null,
          services: [
            'Maden İşletme',
            'Taş Ocağı',
            'Agrega Üretimi',
            'Mineral İşleme',
          ],
        },
      ],
    },
  ];

  // Seçili şirketi bul
  const findSelectedCompany = () => {
    for (const category of categories) {
      const company = category.companies.find((c) => c.id === selectedCompany);
      if (company) return company;
    }
    return categories[0].companies[0]; // Default
  };

  const currentCompany = findSelectedCompany();

  return (
    <div className="pt-20">
      {/* Header Section */}
      <section
        className="relative overflow-hidden bg-white text-white py-16"
        style={{
          background: 'linear-gradient(135deg, #065f46 0%, #10b981 100%)',
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-white/10"></div>
        <div className="absolute -top-12 -left-12 w-32 h-32 rounded-full bg-white/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              {t('pages.companies.title')}
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              {t('pages.companies.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Company Details + Company List */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sağ Taraf: Şirket Listesi (Kategorilere Göre) - Mobilde Üstte */}
            <div className="lg:col-span-1 lg:order-2">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden lg:sticky lg:top-24">
                <div className="p-6 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
                  <h3 className="text-xl font-heading font-bold">
                    Grup Şirketleri
                  </h3>
                  <p className="text-sm opacity-90 mt-1">Şirket seçin</p>
                </div>

                <div className="divide-y divide-gray-200 max-h-[600px] lg:max-h-[calc(100vh-200px)] overflow-y-auto">
                  {categories.map((category) => (
                    <div
                      key={category.id}
                      className="p-4"
                    >
                      <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <span>{category.name}</span>
                        <span className="ml-auto text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                          {category.companies.length}
                        </span>
                      </h4>
                      <div className="space-y-1">
                        {category.companies.map((company) => (
                          <button
                            key={company.id}
                            onClick={() => handleCompanyChange(company.id)}
                            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                              selectedCompany === company.id
                                ? 'bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-900 font-semibold border-l-4 border-emerald-600'
                                : 'text-gray-700 hover:bg-gray-50 hover:text-emerald-700'
                            }`}
                          >
                            {company.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sol Taraf: Seçili Şirket Detayları - Mobilde Altta */}
            <div className="lg:col-span-2 lg:order-1">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div
                  className="h-2"
                  style={{
                    background:
                      'linear-gradient(90deg, #065f46 0%, #10b981 100%)',
                  }}
                ></div>
                <div className="p-6 sm:p-8">
                  {/* Şirket Başlığı */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <div className="flex-1">
                      <h2 className="text-2xl sm:text-3xl font-heading font-bold text-primary-900 mb-2">
                        {currentCompany.name}
                      </h2>
                      <div className="flex items-center gap-3">
                        <span className="inline-flex items-center gap-1 text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          Kuruluş: {currentCompany.established}
                        </span>
                      </div>
                    </div>
                    {/* Logo */}
                    <div className="flex-shrink-0">
                      {currentCompany.logo &&
                      !currentCompany.logo.startsWith(
                        'https://via.placeholder'
                      ) ? (
                        <img
                          src={currentCompany.logo}
                          alt={currentCompany.name}
                          className="h-24 sm:h-32 w-auto max-w-40 sm:max-w-52 object-contain rounded-lg bg-white shadow-md border border-gray-200 p-3"
                        />
                      ) : (
                        <div className="h-24 sm:h-32 w-40 sm:w-52 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-base sm:text-lg text-center px-3">
                            {currentCompany.name.split(' ')[0]}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Açıklama */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Hakkında
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      {currentCompany.description}
                    </p>
                  </div>

                  {/* Hizmetler */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Hizmetler
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {currentCompany.services.map((service, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-lg px-3 sm:px-4 py-2 sm:py-3"
                        >
                          <svg
                            className="w-5 h-5 text-emerald-600 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span className="text-xs sm:text-sm font-medium text-gray-700">
                            {service}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Web Sitesi Linki */}
                  {currentCompany.website !== '#' && (
                    <div className="pt-6 border-t border-gray-200">
                      <a
                        href={currentCompany.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-md hover:shadow-lg group text-sm sm:text-base"
                      >
                        <svg
                          className="w-4 sm:w-5 h-4 sm:h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                          />
                        </svg>
                        <span className="font-semibold">
                          Web Sitesini Ziyaret Et
                        </span>
                        <svg
                          className="w-3 sm:w-4 h-3 sm:h-4 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold text-primary-900 mb-6">
            {t('pages.companies.cta.title')}
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            {t('pages.companies.cta.description')}
          </p>
          <a
            href="/iletisim"
            className="btn btn-primary inline-flex items-center"
          >
            {t('pages.companies.cta.button')}
            <span className="ml-2">→</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default CompaniesPage;
