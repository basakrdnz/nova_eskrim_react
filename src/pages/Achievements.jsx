const Achievements = () => {
  const achievements = [
    {
      id: 1,
      date: '2025 Aralık',
      title: 'U10 Erkek Kılıç – Türkiye Şampiyonası 2.’liği'
    },
    {
      id: 2,
      date: '2025 Aralık',
      title: 'U12 Erkek Kılıç – Okullar Arası Ankara 3.’lüğü'
    },
    {
      id: 3,
      date: '2025 Aralık',
      title: 'Yıldızlar Erkek Kılıç – Okullar Arası Ankara 3.’lüğü'
    },
    {
      id: 4,
      date: '2025 Aralık',
      title: 'U12 Erkek Kılıç – Türkiye Şampiyonası 3.’lüğü'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-primary-700 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Derecelerimiz
          </h1>
          <p className="text-xl lg:text-2xl text-primary-100 max-w-3xl mx-auto">
            Nova Eskrim Spor Kulübü sporcularının ulusal yarışmalarda
            elde ettiği dereceler
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Başarılarımız
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sporcularımızın elde ettiği dereceler ve başarılar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement) => (
              <div key={achievement.id} className="bg-white rounded-xl shadow-lg p-6">
                <div className="text-sm text-primary-600 font-semibold mb-2">
                  {achievement.date}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {achievement.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Achievements
