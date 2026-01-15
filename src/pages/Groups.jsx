import { Users, Target, Award, Star, Calendar, Clock, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

const Groups = () => {
  const groups = [
    {
      id: 1,
      name: 'Çocuk Grubu (5-8 yaş)',
      description: 'Küçük yaş grubu için oyun temelli eskrim eğitimi',
      ageRange: '5-8 yaş',
      level: 'Başlangıç',
      schedule: 'Haftada 2 gün',
      coach: 'Nova Eskrim Antrenörleri',
      features: ['Oyun temelli eğitim', 'Koordinasyon geliştirme', 'Güvenlik odaklı'],
      icon: Users,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      name: 'Çocuk Grubu (9-12 yaş)',
      description: 'Orta yaş grubu için temel teknik eğitimi',
      ageRange: '9-12 yaş',
      level: 'Başlangıç-Orta',
      schedule: 'Haftada 2-3 gün',
      coach: 'Nova Eskrim Antrenörleri',
      features: ['Temel teknikler', 'Grup antrenmanları', 'Yarışma hazırlığı'],
      icon: Target,
      color: 'from-green-500 to-green-600'
    },
    {
      id: 3,
      name: 'Genç Grubu (13-16 yaş)',
      description: 'Genç sporcular için gelişmiş teknik eğitimi',
      ageRange: '13-16 yaş',
      level: 'Orta-Gelişmiş',
      schedule: 'Haftada 3-4 gün',
      coach: 'Nova Eskrim Antrenörleri',
      features: ['İleri teknikler', 'Yarışma stratejileri', 'Fiziksel hazırlık'],
      icon: Award,
      color: 'from-purple-500 to-purple-600'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-primary-700 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Gruplarımız
          </h1>
          <p className="text-xl lg:text-2xl text-primary-100 max-w-3xl mx-auto">
            Yaş ve seviye gruplarına göre özelleştirilmiş eskrim eğitimi. 
            Size en uygun grubu seçin.
          </p>
        </div>
      </section>

      {/* Groups Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {groups.map((group, index) => (
              <motion.div 
                key={group.id} 
                className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Level Badge - Yapışık Şerit */}
                <div className="w-full bg-primary-600 py-1.5">
                   <span className="text-white text-xs font-semibold text-center block">
                     {group.level}
                   </span>
                 </div>
                                                  {/* Header with Icon */}
                 <div className={`bg-gradient-to-br ${group.color} p-6 text-white relative overflow-hidden`}>
                   <div className="flex items-start justify-between">
                     <div className="flex-1">
                       <h3 className="text-lg font-bold mb-2">
                         {group.name}
                       </h3>
                       <p className="text-white/80 text-sm">
                         {group.description}
                       </p>
                     </div>
                     <motion.div 
                       className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm flex-shrink-0"
                       whileHover={{ scale: 1.1, rotate: 5 }}
                       transition={{ type: "spring", stiffness: 300 }}
                     >
                       <group.icon className="w-6 h-6 text-white" />
                     </motion.div>
                   </div>
                   <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                 </div>

                 

                 {/* Content */}
                 <div className="p-6">

                   {/* Info Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-2 text-primary-500" />
                      <span>{group.ageRange}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2 text-primary-500" />
                      <span>{group.schedule}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Award className="w-4 h-4 mr-2 text-primary-500" />
                      <span>{group.coach}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-2 text-primary-500" />
                      <span>Salon A/B</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">
                      Özellikler:
                    </h4>
                    <div className="space-y-2">
                      {group.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <motion.button
                    className="w-full bg-primary-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-primary-700 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Gruba Katıl
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Group Comparison */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Grup Karşılaştırması
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Farklı gruplarımızı karşılaştırarak size en uygun olanı seçin
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
                             <thead>
                 <tr className="bg-secondary-900 text-white">
                   <th className="px-6 py-4 text-left font-semibold">Özellik</th>
                   <th className="px-6 py-4 text-center font-semibold">Çocuk (5-8)</th>
                   <th className="px-6 py-4 text-center font-semibold">Çocuk (9-12)</th>
                   <th className="px-6 py-4 text-center font-semibold">Genç (13-16)</th>
                 </tr>
               </thead>
              <tbody>
                                 <tr className="border-b hover:bg-gray-50 transition-colors">
                   <td className="px-6 py-4 font-medium">Haftalık Antrenman</td>
                   <td className="px-6 py-4 text-center">2 gün</td>
                   <td className="px-6 py-4 text-center">2-3 gün</td>
                   <td className="px-6 py-4 text-center">3-4 gün</td>
                 </tr>
                 <tr className="border-b bg-gray-50 hover:bg-gray-100 transition-colors">
                   <td className="px-6 py-4 font-medium">Antrenman Süresi</td>
                   <td className="px-6 py-4 text-center">60 dk</td>
                   <td className="px-6 py-4 text-center">90 dk</td>
                   <td className="px-6 py-4 text-center">120 dk</td>
                 </tr>
                 <tr className="border-b hover:bg-gray-50 transition-colors">
                   <td className="px-6 py-4 font-medium">Yarışma Katılımı</td>
                   <td className="px-6 py-4 text-center">Yerel</td>
                   <td className="px-6 py-4 text-center">Ulusal</td>
                   <td className="px-6 py-4 text-center">Ulusal</td>
                 </tr>
                 <tr className="border-b bg-gray-50 hover:bg-gray-100 transition-colors">
                   <td className="px-6 py-4 font-medium">Bireysel Antrenman</td>
                   <td className="px-6 py-4 text-center">❌</td>
                   <td className="px-6 py-4 text-center">Haftada 1</td>
                   <td className="px-6 py-4 text-center">Haftada 2</td>
                 </tr>
                 <tr className="border-b hover:bg-gray-50 transition-colors">
                   <td className="px-6 py-4 font-medium">Ekipman</td>
                   <td className="px-6 py-4 text-center">✅</td>
                   <td className="px-6 py-4 text-center">✅</td>
                   <td className="px-6 py-4 text-center">✅</td>
                 </tr>
               </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Size Uygun Grubu Belirleyelim
          </h2>
          <p className="text-xl mb-8 text-primary-100 max-w-3xl mx-auto">
            Hangi gruba katılacağınızı belirlemek için ücretsiz deneme dersimizden 
            faydalanın!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/iletisim" className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors">
              Ücretsiz Deneme Dersi
            </a>
            <a href="/antrenman-takvimi" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors">
              Takvimi İncele
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Groups
