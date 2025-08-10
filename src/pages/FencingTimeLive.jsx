import { ExternalLink, Globe, Calendar, Users } from 'lucide-react'

const FencingTimeLive = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-primary-700 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Fencing Time Live
          </h1>
          <p className="text-xl lg:text-2xl text-primary-100 max-w-3xl mx-auto">
            Uluslararası eskrim yarışmalarını canlı takip edin
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Fencing Time Live Hakkında
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Fencing Time Live, uluslararası eskrim yarışmalarını canlı olarak 
                  takip edebileceğiniz resmi platformdur.
                </p>
                <p>
                  Bu platform sayesinde dünya çapındaki eskrim yarışmalarını, 
                  sporcuların performanslarını ve sonuçları anlık olarak görebilirsiniz.
                </p>
                <p>
                  Nova Eskrim sporcularımız da bu platformda yarışmalara katılmakta 
                  ve sonuçlarını buradan takip edebilirsiniz.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Platform Özellikleri
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <Globe className="w-5 h-5 text-primary-600 mr-3" />
                  Canlı yarışma takibi
                </li>
                <li className="flex items-center">
                  <Calendar className="w-5 h-5 text-primary-600 mr-3" />
                  Yarışma takvimi
                </li>
                <li className="flex items-center">
                  <Users className="w-5 h-5 text-primary-600 mr-3" />
                  Sporcu profilleri
                </li>
                <li className="flex items-center">
                  <ExternalLink className="w-5 h-5 text-primary-600 mr-3" />
                  Sonuçlar ve istatistikler
                </li>
              </ul>

              <div className="mt-8">
                <a 
                  href="https://fencingtimelive.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center"
                >
                  <ExternalLink className="mr-2 w-4 h-4" />
                  Fencing Time Live'a Git
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FencingTimeLive
