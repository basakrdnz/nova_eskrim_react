import { Award, Target, Users, Star } from 'lucide-react'
import { motion } from 'framer-motion'

const Coaches = () => {
  const coaches = [
    {
      id: 1,
      name: 'Halim Şener',
      title: 'Baş Antrenör',
      image: '/nova_coach.jpg',
      experience: '+25 sene',
      specialties: ['Epe', 'Flöre', 'Kılıç'],
      description: '50 yılı aşkın sporculuk, hakemlik ve antrenörlük geçmişiyle kulübümüzün teknik yapılanmasına liderlik eder. 1992 Barselona Olimpiyatları\'nda eskrim branşında Türkiye\'yi temsil eden ilk Türk hakemdir.'
    },
    {
      id: 2,
      name: 'Volkan Şener',
      title: 'Antrenör',
      image: '/nova_coach.jpg',
      experience: '10+ yıl sporculuk',
      specialties: ['Kılıç', 'Yarışma hazırlığı', 'Disiplinli çalışma'],
      description: 'Avrupa ve Dünya Şampiyonaları\'na katılım sağlamış, farklı yaş kategorilerinde Türkiye dereceleri elde etmiştir. 3 yıl hakemlik yaptıktan sonra 2015\'ten bu yana antrenörlük görevini sürdürmektedir.'
    },
    {
      id: 3,
      name: 'Adil Aytaç',
      title: 'Antrenör',
      image: '/nova_coach.jpg',
      experience: '7 yıl hakemlik',
      specialties: ['Teknik temel', 'Disiplin', 'Uzun vadeli gelişim'],
      description: 'Milli sporcu geçmişinin ardından 7 yıl hakemlik yapmış, son 5 yıldır aktif antrenörlük görevini sürdürmektedir. Sporcuların teknik temelini ve disiplinli çalışma alışkanlığını güçlendirmeyi hedefler.'
    },
    {
      id: 4,
      name: 'Dilan',
      title: 'Spor Psikoloğu',
      image: '/nova_coach.jpg',
      experience: 'Spor psikoloğu',
      specialties: ['Odaklanma', 'Motivasyon', 'Performans'],
      description: 'Sporcuların zihinsel dayanıklılık, odaklanma ve performans süreçlerine destek sağlar.'
    }

  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-primary-700 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Hocalarımız
          </h1>
          <p className="text-xl lg:text-2xl text-primary-100 max-w-3xl mx-auto">
            Deneyimli ve uzman antrenörlerimizle sporcularımıza 
            en iyi eğitimi veriyoruz
          </p>
        </div>
      </section>

                                                       {/* Coaches Grid */}
         <section className="py-16 lg:py-24">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
               {coaches.map((coach, index) => (
                 <motion.div 
                   key={coach.id} 
                   className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer"
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.6, delay: index * 0.2 }}
                   whileHover={{ y: -5 }}
                 >
                   <div className="flex flex-col lg:flex-row">
                                           {/* Coach Image - Hidden for now */}
                      {/* <div className="relative lg:w-2/5 h-96 overflow-hidden">
                       <img 
                         src={coach.image} 
                         alt={coach.name}
                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:hidden" />
                       <div className="absolute bottom-4 left-4 right-4 lg:hidden">
                         <h3 className="text-xl font-bold text-white mb-1">
                           {coach.name}
                         </h3>
                         <p className="text-primary-200 font-medium">
                           {coach.title}
                         </p>
                       </div>
                     </div> */}

                     {/* Coach Info */}
                     <div className="w-full p-6 flex flex-col justify-center">
                       <div className="mb-3">
                         <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-1">
                           {coach.name}
                         </h3>
                         <p className="text-base text-primary-600 font-semibold mb-2">
                           {coach.title}
                         </p>
                       </div>

                       <div className="flex items-center text-sm text-gray-500 mb-3">
                         <Target className="w-4 h-4 mr-2" />
                         <span>{coach.experience} deneyim</span>
                       </div>
                       
                       <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                         {coach.description}
                       </p>

                       {/* Specialties */}
                       <div className="flex flex-wrap gap-2">
                         {coach.specialties.map((specialty, index) => (
                           <span
                             key={index}
                             className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full"
                           >
                             {specialty}
                           </span>
                         ))}
                       </div>
                     </div>
                   </div>
                 </motion.div>
               ))}
             </div>
           </div>
         </section>

      {/* Why Choose Our Coaches */}
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
              Neden Nova Eskrim Antrenörleri?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Antrenörlerimizin sahip olduğu özellikler ve avantajlar
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Award className="w-8 h-8 text-primary-600" />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Sertifikalı Eğitmenler
              </h3>
              <p className="text-gray-600">
                Tüm antrenörlerimiz ulusal ve uluslararası sertifikalara sahiptir.
              </p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Users className="w-8 h-8 text-primary-600" />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Deneyimli Kadro
              </h3>
              <p className="text-gray-600">
                Ortalama 10+ yıl deneyime sahip antrenörlerimizle çalışıyoruz.
              </p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Target className="w-8 h-8 text-primary-600" />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Uzmanlaşmış Eğitim
              </h3>
              <p className="text-gray-600">
                Her antrenör kendi uzmanlık alanında özelleşmiş eğitim verir.
              </p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Star className="w-8 h-8 text-primary-600" />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Kanıtlanmış Başarı
              </h3>
              <p className="text-gray-600">
                Antrenörlerimiz ulusal ve uluslararası başarılara imza atmıştır.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Antrenörlerimizle Tanışmaya Hazır mısınız?
          </h2>
          <p className="text-xl mb-8 text-primary-100 max-w-3xl mx-auto">
            Ücretsiz deneme dersimiz için hemen kayıt olun ve 
            uzman antrenörlerimizle çalışmaya başlayın!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/iletisim" className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors">
              Ücretsiz Deneme Dersi
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

export default Coaches
