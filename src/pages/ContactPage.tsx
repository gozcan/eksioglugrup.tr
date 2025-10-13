import { useTranslation } from 'react-i18next';

const ContactPage = () => {
  const { t } = useTranslation();
  return (
    <div className="pt-20">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-950 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              {t('pages.contact.title')}
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              {t('pages.contact.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-primary-900 mb-8">
                {t('pages.contact.info.heading')}
              </h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-1 bg-gradient-to-br from-white/20 to-white/10 rounded-lg"></div>
                      <div className="relative w-6 h-6 bg-white/80 rounded-sm"></div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-900 mb-2">
                      {t('pages.contact.info.address.title')}
                    </h3>
                    <p className="text-gray-700">
                      {t('pages.contact.info.address.line1')}
                      <br />
                      {t('pages.contact.info.address.line2')}
                      <br />
                      {t('pages.contact.info.address.line3')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary-500 to-secondary-700 rounded-xl flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-1 bg-gradient-to-br from-white/20 to-white/10 rounded-lg"></div>
                      <div className="relative flex flex-col space-y-1">
                        <div className="w-4 h-1 bg-white/80 rounded-full"></div>
                        <div className="w-4 h-1 bg-white/80 rounded-full"></div>
                        <div className="w-4 h-1 bg-white/80 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-900 mb-2">
                      {t('pages.contact.info.phone.title')}
                    </h3>
                    <p className="text-gray-700">
                      {t('pages.contact.info.phone.main')}
                      <br />
                      {t('pages.contact.info.phone.fax')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-1 bg-gradient-to-br from-white/20 to-white/10 rounded-lg"></div>
                      <div className="relative w-6 h-4 bg-white/80 rounded-sm"></div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-900 mb-2">
                      {t('pages.contact.info.email.title')}
                    </h3>
                    <p className="text-gray-700">
                      {t('pages.contact.info.email.info')}
                      <br />
                      {t('pages.contact.info.email.contact')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-1 bg-gradient-to-br from-white/20 to-white/10 rounded-lg"></div>
                      <div className="relative w-6 h-6 bg-white/80 rounded-full border-2 border-white/40"></div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-900 mb-2">
                      {t('pages.contact.info.hours.title')}
                    </h3>
                    <p className="text-gray-700">
                      {t('pages.contact.info.hours.weekday')}
                      <br />
                      {t('pages.contact.info.hours.saturday')}
                      <br />
                      {t('pages.contact.info.hours.sunday')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="font-semibold text-primary-900 mb-4">
                  {t('pages.contact.info.social.title')}
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-primary-900 text-white rounded-lg flex items-center justify-center hover:bg-primary-800 transition-colors"
                  >
                    <span className="font-semibold">Li</span>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-primary-900 text-white rounded-lg flex items-center justify-center hover:bg-primary-800 transition-colors"
                  >
                    <span className="font-semibold">Tw</span>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-primary-900 text-white rounded-lg flex items-center justify-center hover:bg-primary-800 transition-colors"
                  >
                    <span className="font-semibold">Fb</span>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-primary-900 text-white rounded-lg flex items-center justify-center hover:bg-primary-800 transition-colors"
                  >
                    <span className="font-semibold">Ig</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-primary-900 mb-8">
                {t('pages.contact.form.heading')}
              </h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      className="block text-gray-700 font-semibold mb-2"
                      htmlFor="name"
                    >
                      {t('pages.contact.form.name')}{' '}
                      {t('pages.contact.form.required')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label
                      className="block text-gray-700 font-semibold mb-2"
                      htmlFor="email"
                    >
                      {t('pages.contact.form.email')}{' '}
                      {t('pages.contact.form.required')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      className="block text-gray-700 font-semibold mb-2"
                      htmlFor="phone"
                    >
                      {t('pages.contact.form.phone')}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-gray-700 font-semibold mb-2"
                      htmlFor="company"
                    >
                      {t('pages.contact.form.company')}
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-gray-700 font-semibold mb-2"
                    htmlFor="subject"
                  >
                    {t('pages.contact.form.subject.label')}{' '}
                    {t('pages.contact.form.required')}
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    required
                  >
                    <option value="">
                      {t('pages.contact.form.subject.placeholder')}
                    </option>
                    <option value="genel">
                      {t('pages.contact.form.subject.general')}
                    </option>
                    <option value="isbirligi">
                      {t('pages.contact.form.subject.partnership')}
                    </option>
                    <option value="kariyer">
                      {t('pages.contact.form.subject.career')}
                    </option>
                    <option value="basin">
                      {t('pages.contact.form.subject.press')}
                    </option>
                    <option value="diğer">
                      {t('pages.contact.form.subject.other')}
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    className="block text-gray-700 font-semibold mb-2"
                    htmlFor="message"
                  >
                    {t('pages.contact.form.message.label')}{' '}
                    {t('pages.contact.form.required')}
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder={t('pages.contact.form.message.placeholder')}
                    required
                  ></textarea>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="privacy"
                    className="mt-1 mr-3"
                    required
                  />
                  <label
                    htmlFor="privacy"
                    className="text-gray-700 text-sm"
                  >
                    <a
                      href="#"
                      className="text-primary-700 hover:underline"
                    >
                      {t('pages.contact.form.privacy.link')}
                    </a>{' '}
                    {t('pages.contact.form.privacy.text')}{' '}
                    {t('pages.contact.form.required')}
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-full md:w-auto"
                >
                  {t('pages.contact.form.submit')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-primary-900 mb-8 text-center">
            {t('pages.contact.map.heading')}
          </h2>
          <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-600">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-2 bg-gradient-to-br from-white/20 to-white/10 rounded-xl"></div>
                  <div className="relative w-8 h-8 bg-white/80 rounded-lg"></div>
                </div>
              </div>
              <p className="text-lg">{t('pages.contact.map.integration')}</p>
              <p className="text-sm">{t('pages.contact.map.note')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
