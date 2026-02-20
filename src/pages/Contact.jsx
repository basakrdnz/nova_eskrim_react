import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Instagram, ChevronDown, Map } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center justify-between gap-4">
        <h3 className={`text-lg font-semibold transition-colors ${isOpen ? 'text-primary-600' : 'text-gray-900'}`}>
          {question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-primary-100 text-primary-600' : 'bg-gray-50 text-gray-400'
            }`}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-gray-600 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const ContactCard = ({ icon: Icon, title, content, subContent, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    className="bg-white p-8 rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-500"
  >
    <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:scale-110 transition-all duration-500">
      <Icon className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors duration-500" />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <div className="text-gray-600 font-medium whitespace-pre-line">{content}</div>
    {subContent && <div className="text-gray-500 text-sm mt-3">{subContent}</div>}
  </motion.div>
)

const Contact = () => {
  const faqs = [
    {
      question: 'Eskrimde hiç tecrübem yok, başlayabilir miyim?',
      answer: 'Evet, kesinlikle. Eskrim eğitimlerimiz, hiç tecrübesi olmayan sporcular için temel seviyeden başlayacak şekilde planlanmaktadır. Her sporcu kendi seviyesine uygun gruplarda eğitim alır.'
    },
    {
      question: 'Ekipmanımı kendim mi almalıyım?',
      answer: 'Kulübümüz, başlangıç seviyesindeki sporcular için ekipman desteği sunmaktadır. Yarışmacı seviyeye geçen sporcular veya kendi tercihi doğrultusunda isteyen sporcular, kişisel ekipmanlarını kendileri temin edebilirler.'
    },
    {
      question: 'Kaç yaşından itibaren eskrime başlayabilirim?',
      answer: 'Sporcunun fiziksel ve zihinsel gelişimi değerlendirilerek, en erken 7 yaş itibarıyla eskrime başlanması uygundur.'
    },
    {
      question: 'Haftada kaç gün antrenman yapıyorsunuz?',
      answer: 'Antrenman sıklığı, sporcunun yaşı ve seviyesine göre değişmektedir. Haftada 3, 4 veya 5 gün antrenman programları uygulanmaktadır.'
    },
    {
      question: 'Yarışmalara katılmak zorunlu mu?',
      answer: 'Hayır, kesinlikle zorunlu değildir. Sporcularımız eskrimi hobi amaçlı yapabilir. Yarışmalara katılım, sporcunun isteği ve hazır oluş düzeyine göre planlanır.'
    },
    {
      question: 'Deneme antrenmanı yapabilir miyiz?',
      answer: 'Evet, kulübümüzde deneme antrenmanı imkânı bulunmaktadır. Böylece sporcu ve veliler, eskrimi ve antrenman ortamını yakından tanıyabilir.'
    }
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section with Glassmorphic Elements */}
      <section className="relative bg-primary-900 pt-32 pb-48 lg:pt-40 lg:pb-64 overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary-600 rounded-full blur-[120px] opacity-40 mix-blend-screen animate-pulse duration-10000"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-secondary-500 rounded-full blur-[120px] opacity-30 mix-blend-screen animate-pulse duration-10000 delay-500"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
          >
            İletişim
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl lg:text-2xl text-primary-100/90 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Sorularınız, ücretsiz deneme dersi veya kayıt için bize ulaşın. Sizinle tanışmayı sabırsızlıkla bekliyoruz.
          </motion.p>
        </div>
      </section>

      {/* Main Content Area - Contact Info Cards */}
      <section className="relative z-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto -mt-24 lg:-mt-40 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ContactCard
            icon={MapPin}
            title="Adresimiz"
            content={"Şehit Osman Avcı Mah.\nMalazgirt 1071 Cad.\nRelax Göksü Sit. 51D/A\nEtimesgut / Ankara"}
            delay={0.1}
          />
          <ContactCard
            icon={Phone}
            title="Telefon"
            content={<a href="tel:+905461900426" className="hover:text-primary-600 transition-colors">+90 546 190 04 26</a>}
            subContent="Bilgi ve ders saatleri için arayabilirsiniz"
            delay={0.2}
          />
          <ContactCard
            icon={Mail}
            title="E-posta & Sosyal Medya"
            content={
              <div className="space-y-4">
                <a href="mailto:novaeskrim@gmail.com" className="block hover:text-primary-600 transition-colors">novaeskrim@gmail.com</a>
                <a href="https://www.instagram.com/novaeskrim" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-primary-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                  @novaeskrim
                </a>
              </div>
            }
            delay={0.3}
          />
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Bizi Ziyaret Edin</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">Tesisimizi yakından görmek ve antrenmanlarımızı izlemek için sizleri bekliyoruz.</p>
          </div>

          <div className="relative group rounded-[2rem] overflow-hidden shadow-2xl shadow-gray-200/50 bg-gray-100 flex items-center justify-center aspect-[16/9] lg:aspect-[21/9] min-h-[400px]">
            {/* The Map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.4069777926173!2d32.6508922!3d39.9546257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d3392a8309a4eb%3A0xe5a363a033b0062b!2sRelax%20G%C3%B6ksu!5e0!3m2!1str!2str!4v1709405234509!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale-[0.2] contrast-100 opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
            ></iframe>

            {/* Overlay button */}
            <div className="absolute inset-0 bg-primary-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none flex items-center justify-center">
              <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <a
                  href="https://maps.app.goo.gl/jkf1z5EXeLUvCgVXA?g_st=iw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pointer-events-auto bg-white text-primary-900 font-bold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3"
                >
                  <Map className="w-5 h-5 text-primary-600" />
                  Yol Tarifi Al
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50/50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Sıkça Sorulan Sorular</h2>
            <div className="w-16 h-1.5 bg-primary-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600">Aklınıza takılan diğer sorular için iletişime geçmekten çekinmeyin.</p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} index={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
