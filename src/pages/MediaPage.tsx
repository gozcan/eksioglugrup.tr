import { useTranslation } from 'react-i18next';

const MediaPage = () => {
  const { t } = useTranslation();
  const pressReleases = [
    {
      id: 0,
      date: '2024-11-20',
    },
    {
      id: 1,
      date: '2024-11-15',
    },
    {
      id: 2,
      date: '2024-10-30',
    },
    {
      id: 3,
      date: '2024-10-20',
    },
    {
      id: 4,
      date: '2024-09-25',
    },
    {
      id: 5,
      date: '2024-09-10',
    },
  ];

  const mediaKit = [
    {
      id: 0,
      fileType: 'ZIP',
      size: '12 MB',
    },
    {
      id: 1,
      fileType: 'ZIP',
      size: '25 MB',
    },
    {
      id: 2,
      fileType: 'PDF',
      size: '8 MB',
    },
    {
      id: 3,
      fileType: 'ZIP',
      size: '45 MB',
    },
  ];

  const mediaContacts = [
    {
      id: 0,
      email: 'ayse.demir@eksioglugrup.com',
      phone: '+90 212 555 0145',
    },
    {
      id: 1,
      email: 'mehmet.kaya@eksioglugrup.com',
      phone: '+90 212 555 0146',
    },
  ];

  const events = [
    {
      id: 0,
      date: '2024-12-15',
    },
    {
      id: 1,
      date: '2024-12-20',
    },
    {
      id: 2,
      date: '2025-01-25',
    },
  ];

  const categories = [0, 1, 2, 3, 4, 5, 6];

  return (
    <div className="pt-20">
      {/* Header Section */}
      <section
        className="relative overflow-hidden bg-white text-white py-16"
        style={{
          background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-white/10"></div>
        <div className="absolute -top-12 -left-12 w-32 h-32 rounded-full bg-white/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              {t('pages.media.title')}
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              {t('pages.media.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section
        id="haberler"
        className="py-16"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-900 mb-6">
              {t('pages.media.news.heading')}
            </h2>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((catId) => {
              const categoryKeys = [
                'all',
                'corporate',
                'financial',
                'technology',
                'sustainability',
                'operational',
                'hr',
              ];
              return (
                <button
                  key={catId}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    catId === 0
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-600'
                  }`}
                >
                  {t(`pages.media.categories.${categoryKeys[catId]}`)}
                </button>
              );
            })}
          </div>

          {/* Featured Article */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <div className="h-64 md:h-full bg-gradient-to-br from-primary-200 to-primary-300 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/30 rounded-2xl flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/80 rounded-lg"></div>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-sm text-gray-500">
                      {pressReleases[0].date}
                    </span>
                    <span className="px-3 py-1 bg-primary-100 text-primary-800 text-xs font-medium rounded-full">
                      {t(
                        `pages.media.news.list.${pressReleases[0].id}.category`
                      )}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-primary-900 mb-4">
                    {t(`pages.media.news.list.${pressReleases[0].id}.title`)}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {t(`pages.media.news.list.${pressReleases[0].id}.summary`)}
                  </p>
                  <button className="btn btn-primary">
                    {t('pages.media.news.readMore')}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* News Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pressReleases.slice(1).map((news) => (
              <article
                key={news.id}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/30 rounded-2xl flex items-center justify-center">
                    <div className="w-10 h-10 bg-white/80 rounded-lg"></div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-500">{news.date}</span>
                    <span className="px-3 py-1 bg-primary-100 text-primary-800 text-xs font-medium rounded-full">
                      {t(`pages.media.news.list.${news.id}.category`)}
                    </span>
                  </div>
                  <h3 className="font-semibold text-primary-900 mb-3 line-clamp-2 hover:text-primary-700 cursor-pointer">
                    {t(`pages.media.news.list.${news.id}.title`)}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {t(`pages.media.news.list.${news.id}.summary`)}
                  </p>
                  <button className="text-primary-600 hover:text-primary-800 font-medium text-sm">
                    {t('pages.media.news.readMore')} →
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="btn btn-outline">
              {t('pages.media.news.loadMore')}
            </button>
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section
        id="medya-kiti"
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-900 mb-6">
              {t('pages.media.mediaKit.heading')}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('pages.media.mediaKit.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {mediaKit.map((item) => (
              <div
                key={item.id}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-primary-900 mb-2">
                      {t(`pages.media.mediaKit.list.${item.id}.title`)}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {t(`pages.media.mediaKit.list.${item.id}.description`)}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>{item.fileType}</span>
                      <span>{item.size}</span>
                    </div>
                  </div>
                  <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                    {t('pages.media.mediaKit.download')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-900 mb-6">
              {t('pages.media.events.heading')}
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 flex items-center justify-between hover:shadow-md transition-shadow"
              >
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-900">
                      {event.date.split('-')[2]}
                    </div>
                    <div className="text-sm text-gray-500">
                      {new Date(event.date).toLocaleDateString('tr-TR', {
                        month: 'short',
                      })}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-900 mb-1">
                      {t(`pages.media.events.list.${event.id}.title`)}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span>
                        {t(`pages.media.events.list.${event.id}.type`)}
                      </span>
                      <span>•</span>
                      <span>
                        {t(`pages.media.events.list.${event.id}.location`)}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="text-primary-600 hover:text-primary-800 font-medium">
                  {t('pages.media.events.details')} →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Contacts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-900 mb-6">
              {t('pages.media.contacts.heading')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('pages.media.contacts.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {mediaContacts.map((contact) => (
              <div
                key={contact.id}
                className="bg-primary-50 rounded-xl p-8 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-white/80 rounded-full"></div>
                </div>
                <h3 className="font-semibold text-primary-900 mb-1">
                  {t(`pages.media.contacts.list.${contact.id}.name`)}
                </h3>
                <p className="text-primary-700 mb-4">
                  {t(`pages.media.contacts.list.${contact.id}.title`)}
                </p>
                <div className="space-y-2 text-sm">
                  <p>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-primary-600 hover:text-primary-800"
                    >
                      {contact.email}
                    </a>
                  </p>
                  <p>
                    <a
                      href={`tel:${contact.phone}`}
                      className="text-primary-600 hover:text-primary-800"
                    >
                      {contact.phone}
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">
            {t('pages.media.newsletter.heading')}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t('pages.media.newsletter.description')}
          </p>

          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder={t('pages.media.newsletter.placeholder')}
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <button className="btn btn-secondary">
              {t('pages.media.newsletter.subscribe')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MediaPage;
