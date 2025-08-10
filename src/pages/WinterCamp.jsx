import { Calendar, MapPin, Users, Award, Star } from 'lucide-react'

const WinterCamp = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Kış Kampı 2024
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
            Kış aylarında yoğun antrenman programımızla eskrim becerilerinizi 
            geliştirin!
          </p>
        </div>
      </section>

      {/* Camp Details */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Kış Kampı Hakkında
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Nova Eskrim Kış Kampı, yarışma sezonuna hazırlık için özel olarak 
                  tasarlanmış yoğun antrenman programıdır.
                </p>
                <p>
                  Kamp süresince katılımcılar teknik becerilerini geliştirir, 
                  yarışma stratejilerini öğrenir ve fiziksel hazırlıklarını tamamlar.
                </p>
                <p>
                  Kapalı salon ortamında güvenli ve etkili antrenman imkanı sunuyoruz.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl p-8 text-white">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Kamp Bilgileri</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-3xl font-bold">1</div>
                      <div className="text-sm">Hafta</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">6</div>
                      <div className="text-sm">Gün/Hafta</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">5</div>
                      <div className="text-sm">Saat/Gün</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">15</div>
                      <div className="text-sm">Katılımcı</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Kamp Programı
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Yoğun antrenman programı ve yarışma hazırlığı
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Günlük Program
              </h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>09:00 - 11:00</span>
                  <span>Teknik Antrenman</span>
                </div>
                <div className="flex justify-between">
                  <span>11:00 - 12:00</span>
                  <span>Fiziksel Hazırlık</span>
                </div>
                <div className="flex justify-between">
                  <span>12:00 - 13:00</span>
                  <span>Öğle Yemeği</span>
                </div>
                <div className="flex justify-between">
                  <span>13:00 - 15:00</span>
                  <span>Taktik Çalışma</span>
                </div>
                <div className="flex justify-between">
                  <span>15:00 - 16:00</span>
                  <span>Yarışma Simülasyonu</span>
                </div>
                <div className="flex justify-between">
                  <span>16:00 - 17:00</span>
                  <span>Video Analiz</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Özel Aktiviteler
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• İleri teknik eğitimi</li>
                <li>• Yarışma stratejileri</li>
                <li>• Mental hazırlık</li>
                <li>• Beslenme danışmanlığı</li>
                <li>• Yarışma kuralları</li>
                <li>• Hakemlik eğitimi</li>
                <li>• Ekipman bakımı</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Kamp Sonu
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• İç turnuva</li>
                <li>• Performans değerlendirmesi</li>
                <li>• Sertifika töreni</li>
                <li>• Gelecek planlaması</li>
                <li>• Antrenman programı</li>
                <li>• Yarışma takvimi</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Info */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Kayıt Bilgileri
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Calendar className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Tarih</h3>
                    <p className="text-gray-600">15-21 Ocak 2024</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <MapPin className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Konum</h3>
                    <p className="text-gray-600">Nova Eskrim Kulübü, İstanbul</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Users className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Yaş Grubu</h3>
                    <p className="text-gray-600">12-18 yaş arası</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Star className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Ücret</h3>
                    <p className="text-gray-600">₺1,800 (1 hafta)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Dahil Olan Hizmetler
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <Star className="w-4 h-4 text-blue-500 mr-2" />
                  Günlük 5 saat antrenman
                </li>
                <li className="flex items-center">
                  <Star className="w-4 h-4 text-blue-500 mr-2" />
                  Öğle yemeği
                </li>
                <li className="flex items-center">
                  <Star className="w-4 h-4 text-blue-500 mr-2" />
                  Ekipman kullanımı
                </li>
                <li className="flex items-center">
                  <Star className="w-4 h-4 text-blue-500 mr-2" />
                  Uzman antrenör eşliği
                </li>
                <li className="flex items-center">
                  <Star className="w-4 h-4 text-blue-500 mr-2" />
                  Kamp t-shirt'ü
                </li>
                <li className="flex items-center">
                  <Star className="w-4 h-4 text-blue-500 mr-2" />
                  Sertifika
                </li>
                <li className="flex items-center">
                  <Star className="w-4 h-4 text-blue-500 mr-2" />
                  Performans raporu
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Kış Kampına Katılmaya Hazır mısınız?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Yarışma sezonuna hazırlık için sınırlı kontenjanlı kış kampımıza 
            hemen kayıt olun!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/iletisim" className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors">
              Hemen Kayıt Ol
            </a>
            <a href="/yaz-kampi" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-medium py-3 px-8 rounded-lg transition-colors">
              Yaz Kampını İncele
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WinterCamp
