import { Calendar, MapPin, Users, Award, Star } from 'lucide-react'

const SummerCamp = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Yaz Kampı
          </h1>
          <p className="text-xl lg:text-2xl text-yellow-100 max-w-3xl mx-auto">
            Eğlenceli ve eğitici yaz kampımızda eskrim sporunu öğrenin, 
            yeni arkadaşlar edinin!
          </p>
        </div>
      </section>

      {/* Camp Details */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Yaz Kampı Hakkında
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Nova Eskrim Yaz Kampı, çocuklar ve gençler için özel olarak 
                  tasarlanmış yoğun antrenman programıdır.
                </p>
                <p>
                  Kamp süresince katılımcılar hem eskrim tekniklerini geliştirir 
                  hem de eğlenceli aktivitelerle keyifli vakit geçirir.
                </p>
                <p>
                  Deneyimli antrenörlerimiz eşliğinde güvenli ve eğitici bir 
                  ortamda eskrim sporunu öğrenin.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-8 text-white">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Kamp Bilgileri</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-3xl font-bold">Yakında</div>
                      <div className="text-sm">Hafta</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">Yakında</div>
                      <div className="text-sm">Gün/Hafta</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">Yakında</div>
                      <div className="text-sm">Saat/Gün</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">Yakında</div>
                      <div className="text-sm">Kontenjan</div>
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
              Günlük program detayları ve aktiviteler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Günlük Program
              </h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>09:00 - 09:30</span>
                  <span>Kahvaltı</span>
                </div>
                <div className="flex justify-between">
                  <span>09:30 - 11:30</span>
                  <span>Eskrim Antrenmanı</span>
                </div>
                <div className="flex justify-between">
                  <span>11:30 - 12:00</span>
                  <span>Mola</span>
                </div>
                <div className="flex justify-between">
                  <span>12:00 - 13:00</span>
                  <span>Öğle Yemeği</span>
                </div>
                <div className="flex justify-between">
                  <span>13:00 - 15:00</span>
                  <span>Teknik Çalışma</span>
                </div>
                <div className="flex justify-between">
                  <span>15:00 - 16:00</span>
                  <span>Eğlenceli Aktiviteler</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Aktiviteler
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Temel eskrim teknikleri</li>
                <li>• İleri seviye antrenmanlar</li>
                <li>• Yarışma simülasyonları</li>
                <li>• Video analiz</li>
                <li>• Takım oyunları</li>
                <li>• Spor psikolojisi</li>
                <li>• Beslenme eğitimi</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Kamp Sonu
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Mini turnuva</li>
                <li>• Sertifika töreni</li>
                <li>• Fotoğraf çekimi</li>
                <li>• Kapanış partisi</li>
                <li>• Değerlendirme raporu</li>
                <li>• Gelecek planlaması</li>
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
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Calendar className="w-4 h-4 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Tarih</h3>
                    <p className="text-gray-600">Bilgi için iletişime geçiniz</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <MapPin className="w-4 h-4 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Konum</h3>
                    <p className="text-gray-600">Nova Eskrim Spor Kulübü, Ankara</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Users className="w-4 h-4 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Yaş Grubu</h3>
                    <p className="text-gray-600">Bilgi için iletişime geçiniz</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Star className="w-4 h-4 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Ücret</h3>
                    <p className="text-gray-600">Bilgi için iletişime geçiniz</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Dahil Olan Hizmetler
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 mr-2" />
                  Günlük 4 saat antrenman
                </li>
                <li className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 mr-2" />
                  Kahvaltı ve öğle yemeği
                </li>
                <li className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 mr-2" />
                  Ekipman kullanımı
                </li>
                <li className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 mr-2" />
                  Antrenör eşliği
                </li>
                <li className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 mr-2" />
                  Kamp t-shirt'ü
                </li>
                <li className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 mr-2" />
                  Sertifika
                </li>
                <li className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 mr-2" />
                  Fotoğraf albümü
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-yellow-600 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Yaz Kampına Katılmaya Hazır mısınız?
          </h2>
          <p className="text-xl mb-8 text-yellow-100 max-w-3xl mx-auto">
            Sınırlı kontenjan için hemen kayıt olun ve unutulmaz bir yaz deneyimi yaşayın!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/iletisim" className="bg-white text-yellow-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors">
              Hemen Kayıt Ol
            </a>
            <a href="/kis-kampi" className="border-2 border-white text-white hover:bg-white hover:text-yellow-600 font-medium py-3 px-8 rounded-lg transition-colors">
              Kış Kampını İncele
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SummerCamp
