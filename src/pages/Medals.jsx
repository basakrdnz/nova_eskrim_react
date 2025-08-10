import { Award, Trophy, Star, Calendar } from 'lucide-react'

const Medals = () => {
  const medals = [
    {
      id: 1,
      year: '2024',
      competition: 'Türkiye Şampiyonası',
      category: 'Gençler Epee',
      result: 'Altın',
      athlete: 'Ahmet Yılmaz',
      image: '🥇'
    },
    {
      id: 2,
      year: '2024',
      competition: 'Balkan Şampiyonası',
      category: 'Kadınlar Foil',
      result: 'Gümüş',
      athlete: 'Zeynep Özkan',
      image: '🥈'
    },
    {
      id: 3,
      year: '2023',
      competition: 'Uluslararası Turnuva',
      category: 'Erkekler Sabre',
      result: 'Bronz',
      athlete: 'Mehmet Kaya',
      image: '🥉'
    },
    {
      id: 4,
      year: '2023',
      competition: 'Türkiye Şampiyonası',
      category: 'Çocuklar Epee',
      result: 'Altın',
      athlete: 'Ali Demir',
      image: '🥇'
    },
    {
      id: 5,
      year: '2023',
      competition: 'İstanbul Şampiyonası',
      category: 'Gençler Foil',
      result: 'Altın',
      athlete: 'Ayşe Yılmaz',
      image: '🥇'
    },
    {
      id: 6,
      year: '2022',
      competition: 'Balkan Şampiyonası',
      category: 'Kadınlar Epee',
      result: 'Gümüş',
      athlete: 'Fatma Kaya',
      image: '🥈'
    }
  ]

  const statistics = [
    { title: 'Toplam Madalya', count: '50+', icon: Award },
    { title: 'Altın Madalya', count: '25+', icon: Trophy },
    { title: 'Uluslararası Başarı', count: '15+', icon: Star },
    { title: 'Yıllık Deneyim', count: '15+', icon: Calendar }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Madalyalarımız
          </h1>
          <p className="text-xl lg:text-2xl text-yellow-100 max-w-3xl mx-auto">
            Nova Eskrim Kulübü sporcularının ulusal ve uluslararası 
            yarışmalarda elde ettiği başarılar
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-yellow-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.count}
                </div>
                <div className="text-gray-600">
                  {stat.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Medals Grid */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Son Başarılarımız
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sporcularımızın son yıllarda elde ettiği madalyalar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {medals.map((medal) => (
              <div key={medal.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                  <span className="text-8xl">{medal.image}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {medal.competition}
                    </h3>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {medal.year}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-2">
                    {medal.category}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-900">
                      {medal.athlete}
                    </span>
                    <span className="text-lg font-bold text-yellow-600">
                      {medal.result}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievement Timeline */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Başarı Tarihçemiz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nova Eskrim'in kuruluşundan bu yana elde ettiği önemli başarılar
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-200 h-full"></div>
            <div className="space-y-12">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-yellow-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                <div className="w-1/2 pr-8 text-right">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">2024</h3>
                  <p className="text-gray-600">Türkiye Şampiyonası'nda 3 altın madalya</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-yellow-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                <div className="w-1/2 pl-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">2023</h3>
                  <p className="text-gray-600">Balkan Şampiyonası'nda 2 gümüş madalya</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-yellow-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                <div className="w-1/2 pr-8 text-right">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">2022</h3>
                  <p className="text-gray-600">Uluslararası turnuvada ilk altın madalya</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-yellow-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                <div className="w-1/2 pl-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">2020</h3>
                  <p className="text-gray-600">Türkiye Şampiyonası'nda 5 madalya</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-yellow-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                <div className="w-1/2 pr-8 text-right">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">2018</h3>
                  <p className="text-gray-600">İlk ulusal şampiyonluk</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-yellow-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                <div className="w-1/2 pl-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">2015</h3>
                  <p className="text-gray-600">İlk madalya başarısı</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-yellow-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                <div className="w-1/2 pr-8 text-right">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">2010</h3>
                  <p className="text-gray-600">Nova Eskrim Kulübü kuruluşu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-yellow-600 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Bu Başarının Bir Parçası Olun
          </h2>
          <p className="text-xl mb-8 text-yellow-100 max-w-3xl mx-auto">
            Nova Eskrim ailesine katılın ve kendi başarı hikayenizi yazın!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/iletisim" className="bg-white text-yellow-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors">
              Hemen Başlayın
            </a>
            <a href="/programlar" className="border-2 border-white text-white hover:bg-white hover:text-yellow-600 font-medium py-3 px-8 rounded-lg transition-colors">
              Programları İncele
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Medals
