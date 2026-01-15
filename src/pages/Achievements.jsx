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

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 h-full w-px bg-primary-100 md:transform md:-translate-x-1/2" />
            <div className="space-y-8">
              {achievements.map((achievement, index) => (
                <div
                  key={achievement.id}
                  className={`relative flex flex-col md:flex-row gap-6 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="md:w-1/2" />
                  <div className="absolute left-4 md:left-1/2 top-6 w-3 h-3 rounded-full bg-primary-600 md:-translate-x-1/2" />
                  <div className="bg-white rounded-2xl shadow-lg p-6 md:w-1/2">
                    <div className="flex items-center text-sm text-primary-600 font-semibold mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      {achievement.date}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {achievement.category}
                    </h3>
                    <p className="text-gray-600 mb-3">
                      {achievement.event}
                    </p>
                    <div className="inline-flex items-center rounded-full bg-primary-50 text-primary-700 text-xs font-semibold px-3 py-1">
                      <CheckCircle2 className="w-3 h-3 mr-2" />
                      {achievement.placement}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Achievements
