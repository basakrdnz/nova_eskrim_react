import { Book, Video, Play, Target } from 'lucide-react'

const RulesVideos = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-primary-700 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Kurallar & Videolar
          </h1>
          <p className="text-xl lg:text-2xl text-primary-100 max-w-3xl mx-auto">
            Eskrim kuralları ve eğitici videolar
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Eskrim Kuralları
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Eskrim sporunun temel kuralları ve puanlama sistemi hakkında 
                  detaylı bilgiler.
                </p>
                <p>
                  Her silah türü için özel kurallar ve teknikler bulunmaktadır.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Eğitici Videolar
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <Video className="w-5 h-5 text-primary-600 mr-3" />
                  Temel teknikler
                </li>
                <li className="flex items-center">
                  <Video className="w-5 h-5 text-primary-600 mr-3" />
                  İleri seviye teknikler
                </li>
                <li className="flex items-center">
                  <Video className="w-5 h-5 text-primary-600 mr-3" />
                  Yarışma kuralları
                </li>
                <li className="flex items-center">
                  <Video className="w-5 h-5 text-primary-600 mr-3" />
                  Ekipman kullanımı
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RulesVideos
