import { Link } from 'react-router-dom'
import { Users, Calendar, Target, Award, Clock, Star } from 'lucide-react'

const Programs = () => {
  const programs = [
    {
      id: 1,
      name: 'Başlangıç Programı',
      description: 'Eskrim sporuna yeni başlayanlar için temel teknikler ve güvenlik eğitimi',
      duration: '3-6 ay',
      frequency: 'Haftada 2 gün',
      ageGroup: '7-12 yaş',
      price: '₺800/ay',
      features: [
        'Temel eskrim teknikleri',
        'Güvenlik eğitimi',
        'Ekipman tanıtımı',
        'Grup antrenmanları',
        'Temel kurallar eğitimi'
      ],
      image: '⚔️',
      color: 'from-primary-400 to-primary-600'
    },
    {
      id: 2,
      name: 'Gelişmiş Program',
      description: 'Deneyimli sporcular için ileri teknikler ve yarışma hazırlığı',
      duration: '6-12 ay',
      frequency: 'Haftada 3-4 gün',
      ageGroup: '13-18 yaş',
      price: '₺1200/ay',
      features: [
        'İleri teknik eğitimi',
        'Yarışma stratejileri',
        'Video analiz',
        'Mental hazırlık',
        'Ulusal yarışma katılımı'
      ],
      image: '🏆',
      color: 'from-secondary-400 to-secondary-600'
    },
    {
      id: 3,
      name: 'Elite Program',
      description: 'Ulusal ve uluslararası yarışmalara hazırlık için özel program',
      duration: '12+ ay',
      frequency: 'Haftada 5-6 gün',
      ageGroup: '16+ yaş',
      price: '₺1800/ay',
      features: [
        'Özel antrenman planı',
        'Uluslararası yarışma hazırlığı',
        'Bireysel antrenman',
        'Fiziksel hazırlık',
        'Psikolojik destek'
      ],
      image: '👑',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      id: 4,
      name: 'Yetişkin Programı',
      description: 'Yetişkinler için hobi amaçlı eskrim eğitimi',
      duration: 'Sürekli',
      frequency: 'Haftada 2-3 gün',
      ageGroup: '18+ yaş',
      price: '₺1000/ay',
      features: [
        'Temel ve orta seviye teknikler',
        'Esnek program',
        'Sosyal antrenman',
        'Fitness odaklı',
        'Hobi amaçlı yarışmalar'
      ],
      image: '🎯',
      color: 'from-green-400 to-green-600'
    },
    {
      id: 5,
      name: 'Çocuk Gelişim Programı',
      description: 'Çocukların fiziksel ve zihinsel gelişimini destekleyen özel program',
      duration: '6-12 ay',
      frequency: 'Haftada 2 gün',
      ageGroup: '5-8 yaş',
      price: '₺600/ay',
      features: [
        'Oyun temelli eğitim',
        'Koordinasyon geliştirme',
        'Sosyal beceriler',
        'Güvenlik odaklı',
        'Ebeveyn katılımı'
      ],
      image: '🌟',
      color: 'from-pink-400 to-purple-500'
    },
    {
      id: 6,
      name: 'Yarışma Hazırlık Programı',
      description: 'Belirli yarışmalara özel hazırlık programı',
      duration: '3-6 ay',
      frequency: 'Haftada 4-5 gün',
      ageGroup: '14+ yaş',
      price: '₺1500/ay',
      features: [
        'Hedef yarışmaya özel antrenman',
        'Yoğun teknik çalışma',
        'Yarışma simülasyonları',
        'Beslenme danışmanlığı',
        'Yarışma organizasyonu'
      ],
      image: '🎖️',
      color: 'from-red-400 to-red-600'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-primary-700 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Programlarımız
          </h1>
          <p className="text-xl lg:text-2xl text-primary-100 max-w-3xl mx-auto">
            Her seviyeye ve yaş grubuna uygun eskrim programları. 
            Size en uygun programı seçin ve eskrim yolculuğunuza başlayın.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div key={program.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className={`h-48 bg-gradient-to-br ${program.color} flex items-center justify-center`}>
                  <span className="text-6xl">{program.image}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {program.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {program.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>Süre: {program.duration}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>Sıklık: {program.frequency}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-2" />
                      <span>Yaş Grubu: {program.ageGroup}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Target className="w-4 h-4 mr-2" />
                      <span>Ücret: {program.price}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      Program İçeriği:
                    </h4>
                    <ul className="space-y-1">
                      {program.features.map((feature, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-start">
                          <Star className="w-3 h-3 text-primary-500 mr-2 mt-1 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link 
                    to="/iletisim" 
                    className="btn-primary w-full text-center inline-block"
                  >
                    Kayıt Ol
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Comparison */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Program Karşılaştırması
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Farklı programlarımızı karşılaştırarak size en uygun olanı seçin
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="px-6 py-4 text-left">Özellik</th>
                  <th className="px-6 py-4 text-center">Başlangıç</th>
                  <th className="px-6 py-4 text-center">Gelişmiş</th>
                  <th className="px-6 py-4 text-center">Elite</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4 font-medium">Haftalık Antrenman</td>
                  <td className="px-6 py-4 text-center">2 gün</td>
                  <td className="px-6 py-4 text-center">3-4 gün</td>
                  <td className="px-6 py-4 text-center">5-6 gün</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-6 py-4 font-medium">Bireysel Antrenman</td>
                  <td className="px-6 py-4 text-center">❌</td>
                  <td className="px-6 py-4 text-center">Haftada 1</td>
                  <td className="px-6 py-4 text-center">Haftada 2</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-medium">Video Analiz</td>
                  <td className="px-6 py-4 text-center">❌</td>
                  <td className="px-6 py-4 text-center">✅</td>
                  <td className="px-6 py-4 text-center">✅</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-6 py-4 font-medium">Yarışma Katılımı</td>
                  <td className="px-6 py-4 text-center">Yerel</td>
                  <td className="px-6 py-4 text-center">Ulusal</td>
                  <td className="px-6 py-4 text-center">Uluslararası</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-medium">Fiziksel Hazırlık</td>
                  <td className="px-6 py-4 text-center">Temel</td>
                  <td className="px-6 py-4 text-center">Gelişmiş</td>
                  <td className="px-6 py-4 text-center">Özel</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">Aylık Ücret</td>
                  <td className="px-6 py-4 text-center font-semibold">₺800</td>
                  <td className="px-6 py-4 text-center font-semibold">₺1200</td>
                  <td className="px-6 py-4 text-center font-semibold">₺1800</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Training Schedule Preview */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Antrenman Takvimi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detaylı antrenman takvimimizi inceleyin ve size uygun saati seçin
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Hafta İçi</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">09:00 - 11:00</span>
                    <span className="font-medium">Yetişkin</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">16:00 - 18:00</span>
                    <span className="font-medium">Çocuk</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">19:00 - 21:00</span>
                    <span className="font-medium">Gelişmiş</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Hafta Sonu</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">10:00 - 12:00</span>
                    <span className="font-medium">Başlangıç</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">14:00 - 16:00</span>
                    <span className="font-medium">Elite</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">16:00 - 18:00</span>
                    <span className="font-medium">Yarışma</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Özel Dersler</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Bireysel</span>
                    <span className="font-medium">₺200/saat</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Grup (2-3 kişi)</span>
                    <span className="font-medium">₺150/saat</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Aile Paketi</span>
                    <span className="font-medium">₺300/saat</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link to="/antrenman-takvimi" className="btn-primary inline-flex items-center">
                <Calendar className="mr-2 w-4 h-4" />
                Detaylı Takvimi Görüntüle
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Size Uygun Programı Seçin
          </h2>
          <p className="text-xl mb-8 text-primary-100 max-w-3xl mx-auto">
            Ücretsiz deneme dersimiz için hemen kayıt olun ve 
            size en uygun programı belirleyelim!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/iletisim" className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors">
              Ücretsiz Deneme Dersi
            </Link>
            <Link to="/gruplar" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors">
              Grupları İncele
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Programs
