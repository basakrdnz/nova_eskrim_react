import { Award, Target, Users, Star, User } from 'lucide-react'
import { motion } from 'framer-motion'
import novaDanismanImage from '../assets/nova_danışman.jpeg'
import volkanImage from '../assets/volkan.JPG'
import adilImage from '../assets/adil.JPG'

const Coaches = () => {
  const coaches = [
    {
      id: 1,
      name: 'Halim Şener',
      title: 'Baş Antrenör',
      image: null, // No image available
      experience: '+25 sene',
      specialties: ['Epe', 'Flöre', 'Kılıç'],
      description: '50 yılı aşkın sporculuk, hakemlik ve antrenörlük geçmişiyle kulübümüzün teknik yapılanmasına liderlik eder. 1992 Barselona Olimpiyatları\'nda eskrim branşında Türkiye\'yi temsil eden ilk Türk hakemdir.'
    },
    {
      id: 2,
      name: 'Volkan Şener',
      title: 'Antrenör',
      image: volkanImage,
      experience: '10+ yıl',
      specialties: ['Kılıç', 'Yarışma hazırlığı', 'Disiplinli çalışma'],
      description: 'Avrupa ve Dünya Şampiyonaları\'na katılım sağlamış, farklı yaş kategorilerinde Türkiye dereceleri elde etmiştir. 3 yıl hakemlik yaptıktan sonra 2015\'ten bu yana antrenörlük görevini sürdürmektedir.'
    },
    {
      id: 3,
      name: 'Adil Aytaç',
      title: 'Antrenör',
      image: adilImage,
      experience: '7 yıl',
      specialties: ['Teknik temel', 'Disiplin', 'Uzun vadeli gelişim'],
      description: 'Milli sporcu geçmişinin ardından 7 yıl hakemlik yapmış, son 5 yıldır aktif antrenörlük görevini sürdürmektedir. Sporcuların teknik temelini ve disiplinli çalışma alışkanlığını güçlendirmeyi hedefler.'
    },
    {
      id: 4,
      name: 'Psikolojik Danışman Dilan KARAKOÇ',
      title: 'Psikolojik Danışman',
      image: novaDanismanImage,
      experience: 'TED Mezunu',
      specialties: ['Eğitim danışmanlığı', 'Spor psikolojisi'],
      description: 'TED Üniversitesi Psikolojik Danışmanlık ve Rehberlik mezunudur. Sporcuların zihinsel dayanıklılık, motivasyon ve performans gelişimlerini desteklemektedir. Aynı zamanda bireysel seanslar ve eğitim danışmanlığı hizmeti sunmaktadır.'
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-primary-900 overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-400 via-primary-900 to-primary-900"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Ekibimiz
          </motion.h1>
          <motion.p
            className="text-xl lg:text-2xl text-primary-100 max-w-3xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Deneyimli ve uzman ekibimizle sporcularımıza en iyi eğitimi veriyoruz.
          </motion.p>
        </div>
      </section>

      {/* Coaches Grid */}
      <section className="py-24 lg:py-32 -mt-10 lg:-mt-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 lg:gap-16">
            {coaches.map((coach, index) => (
              <motion.div
                key={coach.id}
                className="group flex flex-col lg:flex-row bg-white rounded-3xl overflow-hidden shadow-[0_10px_50px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all duration-500 border border-gray-100"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
              >
                {/* Image Container */}
                <div className="relative w-full lg:w-[45%] aspect-[4/5] lg:aspect-auto overflow-hidden bg-gray-50">
                  {coach.image ? (
                    <img
                      src={coach.image}
                      alt={coach.name}
                      className={`w-full h-full object-cover transition-transform duration-700 ${coach.name === 'Volkan Şener'
                          ? 'scale-[1.3] object-top group-hover:scale-[1.4]'
                          : 'group-hover:scale-110'
                        }`}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-primary-50 text-primary-300">
                      <User className="w-24 h-24 mb-4 opacity-50" />
                      <span className="text-sm font-medium tracking-wider uppercase opacity-40">Fotoğraf Yok</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content Container */}
                <div className="flex-1 p-8 lg:p-10 flex flex-col">
                  <div className="mb-6">
                    <span className="inline-block px-3 py-1 bg-primary-50 text-primary-600 text-xs font-bold uppercase tracking-widest rounded-full mb-3">
                      {coach.title}
                    </span>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {coach.name}
                    </h3>
                    <div className="flex items-center text-gray-500 font-medium">
                      <Target className="w-4 h-4 mr-2 text-primary-500" />
                      <span>{coach.experience} Deneyim</span>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                    {coach.description}
                  </p>

                  <div className="space-y-4">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Uzmanlık Alanları</h4>
                    <div className="flex flex-wrap gap-2">
                      {coach.specialties.map((specialty, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-gray-50 text-gray-700 text-sm font-medium rounded-xl border border-gray-100 group-hover:border-primary-100 group-hover:bg-primary-50 group-hover:text-primary-700 transition-all duration-300"
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

      {/* Why Nova Section */}
      <section className="py-24 lg:py-32 bg-gray-50/50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Neden Nova Antrenörleri?</h2>
            <div className="h-1.5 w-24 bg-primary-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: Award, title: "Sertifikalı", desc: "Ulusal ve uluslararası tam yetkinlik" },
              { icon: Users, title: "Deneyimli", desc: "Yılların getirdiği saha tecrübesi" },
              { icon: Target, title: "Hedef Odaklı", desc: "Her sporcuya özel gelişim planı" },
              { icon: Star, title: "Başarı Odaklı", desc: "Kanıtlanmış madalya ve dereceler" }
            ].map((feature, i) => (
              <motion.div
                key={i}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 group-hover:bg-primary-600">
                  <feature.icon className="w-10 h-10 text-primary-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-24 lg:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-900 rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-400 opacity-10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-400 opacity-10 rounded-full blur-3xl -ml-32 -mb-32"></div>

            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 relative z-10">
              Antrenörlerimizle Tanışın
            </h2>
            <p className="text-xl text-primary-100 mb-12 max-w-2xl mx-auto font-light leading-relaxed relative z-10">
              Ücretsiz deneme dersimiz için hemen kayıt olun ve uzman antrenörlerimizle eskrim yolculuğunuza başlayın.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
              <a href="/iletisim" className="bg-white text-primary-900 hover:bg-primary-50 font-bold py-5 px-10 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-white/20 active:scale-95">
                Ücretsiz Deneme Dersi
              </a>
              <a href="/programlar" className="border-2 border-white/30 text-white hover:bg-white/10 font-bold py-5 px-10 rounded-2xl transition-all duration-300 backdrop-blur-sm active:scale-95">
                Programları İncele
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Coaches
