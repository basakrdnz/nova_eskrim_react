import { Calendar, Clock, Users, MapPin, ChevronLeft, ChevronRight, Filter } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'

const TrainingCalendar = () => {
  const [selectedDay, setSelectedDay] = useState('monday')
  const [selectedGroup, setSelectedGroup] = useState('all')
  
  const schedule = {
    monday: [
      { time: '09:00 - 11:00', group: 'Yetişkin Başlangıç', coach: 'Nova Eskrim Antrenörleri', location: 'Nova Eskrim Salonu' },
      { time: '16:00 - 18:00', group: 'Çocuk Grubu (7-10)', coach: 'Nova Eskrim Antrenörleri', location: 'Nova Eskrim Salonu' },
      { time: '19:00 - 21:00', group: 'Gelişmiş Seviye', coach: 'Nova Eskrim Antrenörleri', location: 'Nova Eskrim Salonu' }
    ],
    tuesday: [
      { time: '10:00 - 12:00', group: 'Yetişkin Orta', coach: 'Nova Eskrim Antrenörleri', location: 'Nova Eskrim Salonu' },
      { time: '17:00 - 19:00', group: 'Çocuk Grubu (11-14)', coach: 'Nova Eskrim Antrenörleri', location: 'Nova Eskrim Salonu' },
      { time: '20:00 - 22:00', group: 'Elite Program', coach: 'Nova Eskrim Antrenörleri', location: 'Nova Eskrim Salonu' }
    ],
    wednesday: [
      { time: '09:00 - 11:00', group: 'Yetişkin Başlangıç', coach: 'Nova Eskrim Antrenörleri', location: 'Nova Eskrim Salonu' },
      { time: '16:00 - 18:00', group: 'Çocuk Grubu (7-10)', coach: 'Nova Eskrim Antrenörleri', location: 'Nova Eskrim Salonu' },
      { time: '19:00 - 21:00', group: 'Yarışma Hazırlık', coach: 'Nova Eskrim Antrenörleri', location: 'Nova Eskrim Salonu' }
    ],
    thursday: [
      { time: '10:00 - 12:00', group: 'Yetişkin Orta', coach: 'Nova Eskrim Antrenörleri', location: 'Nova Eskrim Salonu' },
      { time: '17:00 - 19:00', group: 'Çocuk Grubu (11-14)', coach: 'Nova Eskrim Antrenörleri', location: 'Nova Eskrim Salonu' },
      { time: '20:00 - 22:00', group: 'Elite Program', coach: 'Nova Eskrim Antrenörleri', location: 'Nova Eskrim Salonu' }
    ],
    friday: [
      { time: '09:00 - 11:00', group: 'Yetişkin Başlangıç', coach: 'Nova Eskrim Antrenörleri', location: 'Nova Eskrim Salonu' },
      { time: '16:00 - 18:00', group: 'Çocuk Grubu (7-10)', coach: 'Nova Eskrim Antrenörleri', location: 'Nova Eskrim Salonu' },
      { time: '19:00 - 21:00', group: 'Gelişmiş Seviye', coach: 'Nova Eskrim Antrenörleri', location: 'Nova Eskrim Salonu' }
    ],
    saturday: [
      { time: '10:00 - 12:00', group: 'Başlangıç Programı', coach: 'Nova Eskrim Antrenörleri', location: 'Nova Eskrim Salonu' },
      { time: '14:00 - 16:00', group: 'Elite Program', coach: 'Nova Eskrim Antrenörleri', location: 'Nova Eskrim Salonu' },
      { time: '16:00 - 18:00', group: 'Yarışma Hazırlık', coach: 'Nova Eskrim Antrenörleri', location: 'Nova Eskrim Salonu' }
    ],
    sunday: [
      { time: '10:00 - 12:00', group: 'Aile Programı', coach: 'Nova Eskrim Antrenörleri', location: 'Nova Eskrim Salonu' },
      { time: '14:00 - 16:00', group: 'Özel Dersler', coach: 'Nova Eskrim Antrenörleri', location: 'Nova Eskrim Salonu' }
    ]
  }

  const days = [
    { key: 'monday', name: 'Pazartesi', shortName: 'Pzt', color: 'from-red-500 to-red-600' },
    { key: 'tuesday', name: 'Salı', shortName: 'Sal', color: 'from-orange-500 to-orange-600' },
    { key: 'wednesday', name: 'Çarşamba', shortName: 'Çar', color: 'from-yellow-500 to-yellow-600' },
    { key: 'thursday', name: 'Perşembe', shortName: 'Per', color: 'from-green-500 to-green-600' },
    { key: 'friday', name: 'Cuma', shortName: 'Cum', color: 'from-blue-500 to-blue-600' },
    { key: 'saturday', name: 'Cumartesi', shortName: 'Cmt', color: 'from-purple-500 to-purple-600' },
    { key: 'sunday', name: 'Pazar', shortName: 'Paz', color: 'from-pink-500 to-pink-600' }
  ]

  const groups = [
    { key: 'all', name: 'Tüm Gruplar' },
    { key: 'children', name: 'Çocuk Grupları' },
    { key: 'adult', name: 'Yetişkin Grupları' },
    { key: 'special', name: 'Özel Programlar' }
  ]

  const getGroupType = (groupName) => {
    if (groupName.includes('Çocuk') || groupName.includes('Aile')) return 'children'
    if (groupName.includes('Özel') || groupName.includes('Bireysel')) return 'special'
    return 'adult'
  }

  const filteredSchedule = schedule[selectedDay].filter(session => {
    if (selectedGroup === 'all') return true
    return getGroupType(session.group) === selectedGroup
  })

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-primary-700 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Antrenman Takvimi
          </h1>
          <p className="text-xl lg:text-2xl text-primary-100 max-w-3xl mx-auto">
            Bilgi ve ders saatleri için lütfen iletişime geçiniz.
          </p>
        </div>
      </section>

      {/* Weekly Schedule */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Day Selector */}
          <motion.div 
            className="flex flex-wrap justify-center gap-2 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {days.map((day) => (
              <motion.button
                key={day.key}
                onClick={() => setSelectedDay(day.key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedDay === day.key
                    ? `bg-gradient-to-r ${day.color} text-white shadow-lg scale-105`
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="hidden sm:inline">{day.name}</span>
                <span className="sm:hidden">{day.shortName}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Group Filter */}
          <motion.div 
            className="flex flex-wrap justify-center gap-2 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-2 text-gray-600">
              <Filter className="w-4 h-4" />
              <span className="text-sm font-medium">Filtrele:</span>
            </div>
            {groups.map((group) => (
              <motion.button
                key={group.key}
                onClick={() => setSelectedGroup(group.key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedGroup === group.key
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {group.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Selected Day Schedule */}
          <motion.div
            key={selectedDay}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            {/* Day Header */}
            <div className={`bg-gradient-to-r ${days.find(d => d.key === selectedDay)?.color} text-white p-6`}>
              <h2 className="text-2xl font-bold text-center">
                {days.find(d => d.key === selectedDay)?.name} Programı
              </h2>
              <p className="text-center text-white/80 mt-2">
                {filteredSchedule.length} antrenman seansı
              </p>
            </div>

            {/* Schedule List */}
            <div className="p-6">
              {filteredSchedule.length > 0 ? (
                <div className="space-y-4">
                  {filteredSchedule.map((session, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-all duration-300 group cursor-pointer"
                      whileHover={{ y: -2 }}
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-3">
                            <div className="flex items-center text-primary-600 font-semibold">
                              <Clock className="w-5 h-5 mr-2" />
                              {session.time}
                            </div>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              getGroupType(session.group) === 'children' ? 'bg-blue-100 text-blue-700' :
                              getGroupType(session.group) === 'elite' ? 'bg-purple-100 text-purple-700' :
                              getGroupType(session.group) === 'special' ? 'bg-orange-100 text-orange-700' :
                              'bg-green-100 text-green-700'
                            }`}>
                              {getGroupType(session.group) === 'children' ? 'Çocuk' :
                               getGroupType(session.group) === 'elite' ? 'Elite' :
                               getGroupType(session.group) === 'special' ? 'Özel' : 'Yetişkin'}
                            </span>
                          </div>
                          
                          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                            {session.group}
                          </h3>
                          
                          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-600">
                            <div className="flex items-center">
                              <Users className="w-4 h-4 mr-2" />
                              <span className="font-medium">{session.coach}</span>
                            </div>
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-2" />
                              <span>{session.location}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-4 lg:mt-0 lg:ml-6">
                          <motion.button
                            className="bg-primary-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Katıl
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">
                    Bu gün için seçilen filtrede antrenman bulunmuyor
                  </h3>
                  <p className="text-gray-500">
                    Farklı bir gün veya grup seçmeyi deneyin
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Special Programs */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Özel Programlar
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Belirli günlerde düzenlenen özel antrenman programları
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-6 group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Calendar className="w-6 h-6 text-primary-600" />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Özel Dersler
              </h3>
              <p className="text-gray-600 mb-4">
                Bireysel veya küçük grup antrenmanları için özel ders programları
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Bireysel antrenman: Bilgi için iletişime geçiniz</li>
                <li>• 2-3 kişilik grup: Bilgi için iletişime geçiniz</li>
                <li>• Aile paketi: Bilgi için iletişime geçiniz</li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-white rounded-xl shadow-lg p-6 group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Users className="w-6 h-6 text-primary-600" />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Aile Programı
              </h3>
              <p className="text-gray-600 mb-4">
                Aile üyelerinin birlikte antrenman yapabileceği özel program
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Pazar günleri 10:00-12:00</li>
                <li>• Tüm yaş grupları</li>
                <li>• Eğlenceli aktiviteler</li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-white rounded-xl shadow-lg p-6 group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Clock className="w-6 h-6 text-primary-600" />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Esnek Program
              </h3>
              <p className="text-gray-600 mb-4">
                Yoğun programı olan sporcular için esnek antrenman seçenekleri
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Sabah antrenmanları</li>
                <li>• Akşam antrenmanları</li>
                <li>• Hafta sonu yoğunlaştırılmış</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Önemli Notlar
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Antrenman Kuralları
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Antrenmanlara 15 dakika önce geliniz</li>
                  <li>• Uygun spor kıyafetleri giyiniz</li>
                  <li>• Su ve havlu getiriniz</li>
                  <li>• Ekipmanlar kulüp tarafından sağlanır</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  İptal ve Değişiklik
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Antrenman iptali 24 saat önceden bildirilmelidir</li>
                  <li>• Hava durumu nedeniyle iptal edilebilir</li>
                  <li>• Program değişiklikleri önceden duyurulur</li>
                  <li>• Özel durumlar için antrenörle görüşünüz</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Schedule */}
      <section className="bg-primary-600 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Size Uygun Saati Belirleyelim
          </h2>
          <p className="text-xl mb-8 text-primary-100 max-w-3xl mx-auto">
            Antrenman programımız hakkında detaylı bilgi almak ve 
            size uygun saati belirlemek için bizimle iletişime geçin
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/iletisim" className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors">
              İletişime Geç
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

export default TrainingCalendar
