import { Award, Trophy, Star, Target } from 'lucide-react'

const Achievements = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-primary-700 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Derecelerimiz
          </h1>
          <p className="text-xl lg:text-2xl text-primary-100 max-w-3xl mx-auto">
            Nova Eskrim Kulübü sporcularının ulusal ve uluslararası 
            yarışmalarda elde ettiği dereceler ve başarılar
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

          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-gray-600 text-center">
              Bu sayfa yakında güncellenecektir. Detaylı derece bilgileri için 
              lütfen bizimle iletişime geçin.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Achievements
