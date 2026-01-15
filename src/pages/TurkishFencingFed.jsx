import { ExternalLink, Globe, Calendar, Users } from 'lucide-react'

const TurkishFencingFed = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Türkiye Eskrim Federasyonu
          </h1>
          <p className="text-xl lg:text-2xl text-red-100 max-w-3xl mx-auto">
            Türkiye'deki eskrim sporunun resmi federasyonu
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Türkiye Eskrim Federasyonu Hakkında
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Türkiye Eskrim Federasyonu, ülkemizde eskrim sporunun gelişimini 
                  sağlayan ve yöneten resmi kuruluştur.
                </p>
                <p>
                  Federasyon, ulusal yarışmaları düzenler, sporcuları uluslararası 
                  yarışmalara hazırlar ve eskrim sporunun yaygınlaştırılmasını sağlar.
                </p>
                <p>
                  Nova Eskrim Kulübü, Türkiye Eskrim Federasyonu'na bağlı olarak 
                  faaliyet göstermektedir.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Federasyon Hizmetleri
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <Globe className="w-5 h-5 text-red-600 mr-3" />
                  Ulusal yarışma organizasyonu
                </li>
                <li className="flex items-center">
                  <Calendar className="w-5 h-5 text-red-600 mr-3" />
                  Yarışma takvimi
                </li>
                <li className="flex items-center">
                  <Users className="w-5 h-5 text-red-600 mr-3" />
                  Sporcu lisansları
                </li>
                <li className="flex items-center">
                  <ExternalLink className="w-5 h-5 text-red-600 mr-3" />
                  Antrenör eğitimleri
                </li>
              </ul>

              <div className="mt-8">
                <a 
                  href="https://eskrim.org.tr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center"
                >
                  <ExternalLink className="mr-2 w-4 h-4" />
                  Federasyon Web Sitesi
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Calendar */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Haberler ve Duyurular
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Federasyonun klasman faaliyet takvimi, haberler ve duyuruları
              yakında buradan takip edilebilecek.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <p className="text-gray-600 mb-4">
              Şimdilik güncel içerikler için federasyonun resmi web sitesini ziyaret edebilirsiniz.
            </p>
            <a
              href="https://eskrim.org.tr"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center"
            >
              <ExternalLink className="mr-2 w-4 h-4" />
              Federasyon Web Sitesi
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TurkishFencingFed
