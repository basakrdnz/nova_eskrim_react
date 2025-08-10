import { useState } from 'react'
import { Camera, Video, Users, Award, Calendar } from 'lucide-react'

const Gallery = () => {
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
      title: 'Temel Teknik Antrenmanı',
      description: 'Başlangıç seviyesi sporcularımızın temel teknik çalışması',
      image: '⚔️',
      date: '2024-01-15'
    },
    {
      id: 2,
      category: 'competition',
      title: 'Türkiye Şampiyonası',
      description: '2024 Türkiye Eskrim Şampiyonası\'nda sporcularımız',
      image: '🏆',
      date: '2024-02-20'
    },
    {
      id: 3,
      category: 'events',
      title: 'Kulüp Turnuvası',
      description: 'Yıllık kulüp içi turnuvamızda heyecan dolu anlar',
      image: '🎯',
      date: '2024-03-10'
    },
    {
      id: 4,
      category: 'training',
      title: 'Gelişmiş Seviye',
      description: 'İleri seviye sporcularımızın yoğun antrenmanı',
      image: '⚡',
      date: '2024-01-20'
    },
    {
      id: 5,
      category: 'competition',
      title: 'Balkan Şampiyonası',
      description: 'Balkan Şampiyonası\'nda başarılı performans',
      image: '🥇',
      date: '2024-04-05'
    },
    {
      id: 6,
      category: 'events',
      title: 'Yaz Kampı',
      description: '2024 yaz kampımızda eğlenceli anlar',
      image: '🏕️',
      date: '2024-07-15'
    },
    {
      id: 7,
      category: 'training',
      title: 'Çocuk Grubu',
      description: 'Küçük sporcularımızın eğlenceli antrenmanı',
      image: '🌟',
      date: '2024-01-25'
    },
    {
      id: 8,
      category: 'competition',
      title: 'Uluslararası Turnuva',
      description: 'Uluslararası turnuvada sporcularımızın başarısı',
      image: '🌍',
      date: '2024-05-12'
    },
    {
      id: 9,
      category: 'events',
      title: 'Antrenör Eğitimi',
      description: 'Antrenörlerimizin sürekli gelişim eğitimi',
      image: '👨‍🏫',
      date: '2024-06-08'
    }
  ]

  const videos = [
    {
      id: 1,
      title: 'Nova Eskrim Tanıtım Videosu',
      description: 'Kulübümüzün tanıtım videosu',
      thumbnail: '🎬',
      duration: '3:45',
      category: 'videos'
    },
    {
      id: 2,
      title: 'Temel Teknikler Eğitimi',
      description: 'Başlangıç seviyesi teknik eğitimi',
      thumbnail: '📹',
      duration: '8:20',
      category: 'videos'
    },
    {
      id: 3,
      title: 'Yarışma Analizi',
      description: 'Ulusal yarışma analiz videosu',
      thumbnail: '🎥',
      duration: '12:15',
      category: 'videos'
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
                    {item.description}
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-80 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center relative">
                <span className="text-8xl">🎬</span>
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                  <button className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                    <Video className="w-8 h-8 text-primary-600" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Nova Eskrim Tanıtım Videosu
                </h3>
                <p className="text-gray-600 mb-4">
                  Kulübümüzün tarihçesi, antrenörlerimiz ve sporcularımızın başarılarından 
                  oluşan kapsamlı tanıtım videosu.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Süre: 3:45</span>
                  <button className="text-primary-600 hover:text-primary-700 font-medium">
                    İzle
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-80 bg-gradient-to-br from-secondary-400 to-secondary-600 flex items-center justify-center relative">
                <span className="text-8xl">📹</span>
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                  <button className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                    <Video className="w-8 h-8 text-secondary-600" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Temel Teknikler Eğitimi
                </h3>
                <p className="text-gray-600 mb-4">
                  Başlangıç seviyesi sporcular için temel eskrim tekniklerinin 
                  detaylı anlatımı ve uygulaması.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Süre: 8:20</span>
                  <button className="text-primary-600 hover:text-primary-700 font-medium">
                    İzle
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-gray-600">Fotoğraf</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-gray-600">Video</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">100+</div>
              <div className="text-gray-600">Yarışma</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">15+</div>
              <div className="text-gray-600">Yıllık Deneyim</div>
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
