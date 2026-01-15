import { Award, Medal, Sparkles } from 'lucide-react'

const Medals = () => {
  const achievements = [
    {
      id: 1,
      category: 'U10 Erkek Kılıç',
      event: 'Türkiye Şampiyonası',
      placement: '2.’lik'
    },
    {
      id: 2,
      category: 'U12 Erkek Kılıç',
      event: 'Okullar Arası Ankara',
      placement: '3.’lük'
    },
    {
      id: 3,
      category: 'Yıldızlar Erkek Kılıç',
      event: 'Okullar Arası Ankara',
      placement: '3.’lük'
    },
    {
      id: 4,
      category: 'U12 Erkek Kılıç',
      event: 'Türkiye Şampiyonası',
      placement: '3.’lük'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Başarılar ve Ödüller
          </h1>
          <p className="text-xl lg:text-2xl text-yellow-100 max-w-3xl mx-auto">
            Nova Eskrim Spor Kulübü sporcularının elde ettiği dereceler
          </p>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              2025 Aralık Başarıları
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              U10, U12 ve Yıldızlar kategorilerinde elde edilen dereceler
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6 text-yellow-700">
              <Sparkles className="w-5 h-5" />
              <span className="font-semibold">Öne Çıkan Dereceler</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((item) => (
                <div
                  key={item.id}
                  className="border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-sm text-yellow-700 font-semibold mb-2">
                        {item.event}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {item.category}
                      </h3>
                      <div className="text-gray-600">
                        {item.placement}
                      </div>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-yellow-50 flex items-center justify-center">
                      <Medal className="w-6 h-6 text-yellow-600" />
                    </div>
                  </div>
                  <div className="mt-4 inline-flex items-center rounded-full bg-yellow-100 text-yellow-700 text-xs font-semibold px-3 py-1">
                    <Award className="w-3 h-3 mr-2" />
                    Resmi Derece
                  </div>
                </div>
              ))}
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
