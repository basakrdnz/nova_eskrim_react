import { useState } from 'react'
import { Camera, Video, Users, Award, Calendar } from 'lucide-react'

const Gallery = () => {
  const missingClass = 'bg-red-100 text-red-700 px-2 py-0.5 rounded'

  const [activeTab, setActiveTab] = useState('all')

  const categories = [
    { id: 'all', name: 'Tümü', icon: Camera },
    { id: 'training', name: 'Antrenman', icon: Users },
    { id: 'competition', name: 'Yarışma', icon: Award },
    { id: 'events', name: 'Etkinlikler', icon: Calendar },
    { id: 'videos', name: 'Videolar', icon: Video }
  ]

  const photos = [
    {
      id: 1,
      category: 'training',
      title: 'Fotoğraflar Yakında',
      description: 'Fotoğraflar WhatsApp üzerinden ulaştığında galeride yayınlanacaktır.',
      image: '📷',
      date: '2025-01-15'
    }
  ]

  const videos = [
    {
      id: 1,
      title: 'Videolar Yakında',
      description: 'Tanıtım ve antrenman videoları hazır olduğunda eklenecektir.',
      thumbnail: '🎬',
      duration: 'Yakında',
      category: 'videos',
      date: '2025-01-15'
    }
  ]

  const filteredContent = activeTab === 'all' 
    ? [...photos, ...videos]
    : activeTab === 'videos' 
    ? videos 
    : photos.filter(item => item.category === activeTab)

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-primary-700 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Galeri
          </h1>
          <p className="text-xl lg:text-2xl text-primary-100 max-w-3xl mx-auto">
            Nova Eskrim Kulübü\'nün en güzel anları, antrenmanlar, 
            yarışmalar ve etkinliklerden kareler
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeTab === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                <category.icon className="w-4 h-4 mr-2" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredContent.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-64 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                  <span className="text-6xl">{item.image || item.thumbnail}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    {item.duration && (
                      <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {item.duration}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 mb-4">
                    <span className={missingClass}>{item.description}</span>
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {new Date(item.date).toLocaleDateString('tr-TR')}
                    </span>
                    <button className="text-primary-600 hover:text-primary-700 font-medium">
                      Detayları Gör
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Videos */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Öne Çıkan Videolar
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Antrenman teknikleri, yarışma analizleri ve kulüp etkinliklerimizden videolar
            </p>
          </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <Video className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Videolar yakında eklenecek
            </h3>
            <p className="text-gray-600">
              <span className={missingClass}>
                Tanıtım ve antrenman videoları hazır olduğunda burada yayınlanacaktır.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">📷</div>
              <div className={`text-gray-600 ${missingClass}`}>Fotoğraflar Yakında</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">🎬</div>
              <div className={`text-gray-600 ${missingClass}`}>Videolar Yakında</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">🏆</div>
              <div className={`text-gray-600 ${missingClass}`}>Yarışmalar Yakında</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">✨</div>
              <div className="text-gray-600">Yeni Paylaşımlar</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Bu Anların Bir Parçası Olun
          </h2>
          <p className="text-xl mb-8 text-primary-100 max-w-3xl mx-auto">
            Nova Eskrim ailesine katılın ve kendi başarı hikayenizi yazın!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/iletisim" className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors">
              Hemen Kayıt Ol
            </a>
            <a href="/programlar" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors">
              Programları İncele
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gallery
