import { Book, Target, Users, Award } from 'lucide-react'

const FencingInfo = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-primary-700 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Eskrim Bilgileri
          </h1>
          <p className="text-xl lg:text-2xl text-primary-100 max-w-3xl mx-auto">
            Eskrim sporu hakkında temel bilgiler ve teknikler
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Eskrim Sporu Hakkında
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Eskrim, üç farklı silah türüyle yapılan bir dövüş sporudur: 
                  Epee, Foil ve Sabre.
                </p>
                <p>
                  Her silahın kendine özgü kuralları, teknikleri ve puanlama 
                  sistemi bulunmaktadır.
                </p>
                <p>
                  Eskrim, hem fiziksel hem de zihinsel becerileri geliştiren 
                  bir spordur.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Silah Türleri
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <Target className="w-5 h-5 text-primary-600 mr-3" />
                  Epee - Tüm vücut hedef
                </li>
                <li className="flex items-center">
                  <Target className="w-5 h-5 text-primary-600 mr-3" />
                  Foil - Gövde hedef
                </li>
                <li className="flex items-center">
                  <Target className="w-5 h-5 text-primary-600 mr-3" />
                  Sabre - Üst vücut hedef
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FencingInfo
