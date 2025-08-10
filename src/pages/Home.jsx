import { Link } from 'react-router-dom'
import { Award, Users, Calendar, Target, ArrowRight, Play } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'

const Home = () => {
  const { scrollY } = useScroll()

  // Parallax transforms for background image
  const backgroundY = useTransform(scrollY, [0, 500], [0, -100])
  const backgroundScale = useTransform(scrollY, [0, 500], [1, 1.1])

  // Text animations
  const textY = useTransform(scrollY, [0, 300], [0, 50])
  const textOpacity = useTransform(scrollY, [0, 300], [1, 0.8])

  // Smooth scroll function
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features-section')
    if (featuresSection) {
      featuresSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <div>
      {/* Hero Section*/}
      <section className="relative h-[90vh] overflow-hidden">
        {/* Background Image*/}
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y: backgroundY, scale: backgroundScale }}
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('public/eskrim_bg.jpg')`
            }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        </motion.div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <motion.div
            className="text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
            style={{ y: textY, opacity: textOpacity }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {/* Main Title */}
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <span className="bg-gradient-to-r from-white to-primary-200 bg-clip-text text-transparent">
                Nova Eskrim
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-xl md:text-2xl lg:text-3xl mb-8 text-gray-200 font-light max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Türkiye'nin önde gelen eskrim kulüplerinden biri.
              <br className="hidden md:block" />
              Profesyonel antrenörler, modern tesisler ve kapsamlı programlarla eskrim sporunu öğrenin.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/iletisim"
                  className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-8 rounded-full inline-flex items-center justify-center text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Hemen Başlayın
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-full inline-flex items-center justify-center text-lg transition-all duration-300 border border-white/20">
                  <Play className="mr-2 w-5 h-5" />
                  Tanıtım Videosu
                </button>
              </motion.div>
            </motion.div>

            {/* Fixed Scroll Arrow */}
            <motion.div
              className="absolute mt-20 left-1/2 transform -translate-x-1/2 z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="text-white/70 hover:text-white cursor-pointer backdrop-blur-sm p-2"
                onClick={scrollToFeatures}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 13l5 5 5-5" />
                  <path d="M7 6l5 5 5-5" />
                </svg>
              </motion.div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features-section" className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Neden Nova Eskrim?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profesyonel antrenörler, modern tesisler ve kapsamlı programlarla
              eskrim sporunu en iyi şekilde öğrenin.
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
                Deneyimli Antrenörler
              </h3>
              <p className="text-gray-600">
                Ulusal ve uluslararası deneyime sahip profesyonel antrenörlerimizle
                en iyi eğitimi alın.
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
                Farklı Yaş Grupları
              </h3>
              <p className="text-gray-600">
                7 yaşından itibaren her yaş grubuna uygun programlar ve
                özel antrenman planları.
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
                <Calendar className="w-8 h-8 text-primary-600" />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Esnek Programlar
              </h3>
              <p className="text-gray-600">
                Hafta içi ve hafta sonu farklı saat seçenekleri ile
                size uygun programı seçin.
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
                <Target className="w-8 h-8 text-primary-600" />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Yarışma Başarıları
              </h3>
              <p className="text-gray-600">
                Ulusal ve uluslararası yarışmalarda elde ettiğimiz
                başarılarla gurur duyuyoruz.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Programlarımız
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Her seviyeye uygun eskrim programları ve özel antrenman planları
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                <span className="text-6xl">⚔️</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Başlangıç Programı
                </h3>
                <p className="text-gray-600 mb-4">
                  Eskrim sporuna yeni başlayanlar için temel teknikler ve
                  güvenlik eğitimi.
                </p>
                <Link to="/programlar" className="text-primary-600 hover:text-primary-700 font-medium">
                  Detayları Gör →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-secondary-400 to-secondary-600 flex items-center justify-center">
                <span className="text-6xl">🏆</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Gelişmiş Program
                </h3>
                <p className="text-gray-600 mb-4">
                  Deneyimli sporcular için ileri teknikler ve
                  yarışma hazırlığı.
                </p>
                <Link to="/programlar" className="text-primary-600 hover:text-primary-700 font-medium">
                  Detayları Gör →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                <span className="text-6xl">🏕️</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Yaz/Kış Kampları
                </h3>
                <p className="text-gray-600 mb-4">
                  Yoğun antrenman ve eğlenceli aktivitelerle dolu
                  sezon kampları.
                </p>
                <Link to="/yaz-kampi" className="text-primary-600 hover:text-primary-700 font-medium">
                  Detayları Gör →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Eskrim Sporuna Başlamaya Hazır mısınız?
          </h2>
          <p className="text-xl mb-8 text-primary-100 max-w-3xl mx-auto">
            Ücretsiz deneme dersimiz için hemen kayıt olun ve
            Nova Eskrim ailesine katılın!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/iletisim" className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors">
              Ücretsiz Deneme Dersi
            </Link>
            <Link to="/hocalar" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors">
              Antrenörlerimizi Tanıyın
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
