import { Calendar, CheckCircle2 } from 'lucide-react'

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      date: '2025 Aralık',
      category: 'U10 Erkek Kılıç',
      event: 'Türkiye Şampiyonası',
      placement: '2.’lik'
    },
    {
      id: 2,
      date: '2025 Aralık',
      category: 'U12 Erkek Kılıç',
      event: 'Okullar Arası Ankara',
      placement: '3.’lük'
    },
    {
      id: 3,
      date: '2025 Aralık',
      category: 'Yıldızlar Erkek Kılıç',
      event: 'Okullar Arası Ankara',
      placement: '3.’lük'
    },
    {
      id: 4,
      date: '2025 Aralık',
      category: 'U12 Erkek Kılıç',
      event: 'Türkiye Şampiyonası',
      placement: '3.’lük'
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

          {/* Date Group Header */}
          <div className="mb-8 text-center">
            <div className="inline-flex items-center text-lg text-primary-600 font-semibold bg-primary-50 px-6 py-3 rounded-full">
              <Calendar className="w-5 h-5 mr-2" />
              {achievements[0]?.date}
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow border-l-4 border-primary-600"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {achievement.category}
                </h3>
                <p className="text-gray-600 mb-4">
                  {achievement.event}
                </p>
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center rounded-full bg-primary-50 text-primary-700 text-sm font-semibold px-4 py-2">
                    <CheckCircle2 className="w-4 h-4 mr-2" />
                    {achievement.placement}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Achievements
