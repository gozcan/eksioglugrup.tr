import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const InvestorRelationsPage = () => {
  const { t } = useTranslation();
  const financialHighlights = [0, 1, 2, 3];

  const reports = [
    {
      id: 0,
      year: '2024',
      quarter: 'Q3',
      date: '2024-11-15',
      type: 'quarterly',
    },
    {
      id: 1,
      year: '2024',
      quarter: 'Q2',
      date: '2024-08-15',
      type: 'quarterly',
    },
    {
      id: 2,
      year: '2023',
      quarter: 'Annual',
      date: '2024-03-30',
      type: 'annual',
    },
    {
      id: 3,
      year: '2023',
      quarter: 'Annual',
      date: '2024-04-15',
      type: 'sustainability',
    },
  ];

  const announcements = [
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
  ];

  const governanceDocuments = [0, 1, 2, 3, 4, 5];

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
              {t('pages.investor.title')}
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              {t('pages.investor.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Financial Highlights */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-900 mb-6">
              {t('pages.investor.highlights.heading')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {financialHighlights.map((itemId) => (
              <div
                key={itemId}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-600 mb-2">
                  {t(`pages.investor.highlights.list.${itemId}.title`)}
                </h3>
                <div className="text-3xl font-bold text-primary-900 mb-2">
                  {t(`pages.investor.highlights.list.${itemId}.value`)}
                </div>
                <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                  {t(`pages.investor.highlights.list.${itemId}.change`)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reports and Presentations */}
      <section
        id="mali-tablolar"
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-900 mb-6">
              {t('pages.investor.reports.heading')}
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {reports.map((report) => (
                <div
                  key={report.id}
                  className="bg-gray-50 rounded-lg p-6 flex items-center justify-between hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <span className="text-primary-600 font-semibold text-sm">
                        {report.type === 'quarterly'
                          ? 'Q'
                          : report.type === 'annual'
                          ? 'Y'
                          : 'S'}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-900">
                        {t(`pages.investor.reports.list.${report.id}.title`)}
                      </h3>
                      <p className="text-sm text-gray-600">{report.date}</p>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                      {t('pages.investor.reports.download')}
                    </button>
                    <button className="px-4 py-2 border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors">
                      {t('pages.investor.reports.view')}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Announcements */}
      <section
        id="duyurular"
        className="py-16 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-900 mb-6">
              {t('pages.investor.announcements.heading')}
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {announcements.map((announcement) => (
                <div
                  key={announcement.id}
                  className="bg-white rounded-lg p-6 border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-sm text-gray-500">
                          {announcement.date}
                        </span>
                        <span className="px-3 py-1 bg-primary-100 text-primary-800 text-xs font-medium rounded-full">
                          {t(
                            `pages.investor.announcements.list.${announcement.id}.category`
                          )}
                        </span>
                      </div>
                      <h3 className="font-semibold text-primary-900 hover:text-primary-700 cursor-pointer">
                        {t(
                          `pages.investor.announcements.list.${announcement.id}.title`
                        )}
                      </h3>
                    </div>
                    <button className="text-primary-600 hover:text-primary-800">
                      <span className="sr-only">Detaylar</span>→
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <button className="btn btn-primary">
                {t('pages.investor.announcements.viewAll')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Governance */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-900 mb-6">
                {t('pages.investor.governance.heading')}
              </h2>
              <p className="text-lg text-gray-600">
                {t('pages.investor.governance.description')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">
                  {t('pages.investor.governance.board.title')}
                </h3>
                <ul className="space-y-2 text-gray-600">
                  {[0, 1, 2, 3].map((itemId) => (
                    <li key={itemId}>
                      • {t(`pages.investor.governance.board.items.${itemId}`)}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">
                  {t('pages.investor.governance.committees.title')}
                </h3>
                <ul className="space-y-2 text-gray-600">
                  {[0, 1, 2, 3].map((itemId) => (
                    <li key={itemId}>
                      •{' '}
                      {t(
                        `pages.investor.governance.committees.items.${itemId}`
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-primary-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-primary-900 mb-6 text-center">
                {t('pages.investor.governance.documents.heading')}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {governanceDocuments.map((docId) => (
                  <div
                    key={docId}
                    className="bg-white rounded-lg p-4 flex items-center justify-between"
                  >
                    <span className="font-medium text-primary-900">
                      {t(`pages.investor.governance.documents.list.${docId}`)}
                    </span>
                    <button className="text-primary-600 hover:text-primary-800">
                      <span className="text-sm">PDF</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">
            {t('pages.investor.contact.heading')}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t('pages.investor.contact.description')}
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-8">
            <div>
              <h3 className="font-semibold mb-2">
                {t('pages.investor.contact.email.label')}
              </h3>
              <p className="opacity-90">
                {t('pages.investor.contact.email.value')}
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">
                {t('pages.investor.contact.phone.label')}
              </h3>
              <p className="opacity-90">
                {t('pages.investor.contact.phone.value')}
              </p>
            </div>
          </div>

          <Link
            to="/iletisim"
            className="btn btn-secondary"
          >
            {t('pages.investor.contact.button')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default InvestorRelationsPage;
