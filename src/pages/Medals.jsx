const Medals = () => {
  const achievements = [
    'U10 Erkek Kılıç – Türkiye Şampiyonası 2.’liği',
    'U12 Erkek Kılıç – Okullar Arası Ankara 3.’lüğü',
    'Yıldızlar Erkek Kılıç – Okullar Arası Ankara 3.’lüğü',
    'U12 Erkek Kılıç – Türkiye Şampiyonası 3.’lüğü'
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

          <div className="bg-white rounded-xl shadow-lg p-8">
            <ul className="space-y-3 text-gray-700">
              {achievements.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
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
