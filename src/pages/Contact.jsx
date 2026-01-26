import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, Instagram, Globe, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-primary-600 transition-colors"
      >
        <span className="text-lg font-semibold text-gray-900">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [status, setStatus] = useState('') // '', 'sending', 'success', 'error'

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
      question: 'Antrenmanlar grup mu, bireysel mi yapılıyor?',
      answer: 'Antrenmanlarımız ağırlıklı olarak grup çalışmaları şeklindedir. Gelişim ihtiyacına göre özel ders imkânı da sunulmaktadır.'
    },
    {
      question: 'Eskrim çocuğum için güvenli bir spor mu?',
      answer: 'Evet. Eskrim, koruyucu ekipmanlar ve kontrollü antrenman ortamı sayesinde güvenli bir spor branşıdır. Tüm antrenmanlar uzman antrenörler eşliğinde yapılır.'
    },
    {
      question: 'Deneme antrenmanı yapabilir miyiz?',
      answer: 'Evet, kulübümüzde deneme antrenmanı imkânı bulunmaktadır. Böylece sporcu ve veliler, eskrimi ve antrenman ortamını yakından tanıyabilir.'
    },
    {
      question: 'Eskrim çocuğuma ne kazandırır?',
      answer: 'Eskrim; disiplin, odaklanma, özgüven, beden koordinasyonu ve karakter gelişimine önemli katkı sağlar.'
    }
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      // NOTE: Replace 'YOUR_FORMSPREE_ID' with your actual Formspree ID
      const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        })
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error('Submission error:', error)
      setStatus('error')
    }
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-primary-700 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            İletişim
          </h1>
          <p className="text-xl lg:text-2xl text-primary-100 max-w-3xl mx-auto">
            Nova Eskrim Kulübü ile iletişime geçin. Sorularınızı yanıtlamaktan
            mutluluk duyarız.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Bize Ulaşın
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Ad Soyad *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-posta *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="ornek@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="+90 555 123 45 67"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Konu *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Konu seçiniz</option>
                    <option value="kayit">Kayıt ve Bilgi</option>
                    <option value="program">Program Bilgileri</option>
                    <option value="kamp">Kamp Bilgileri</option>
                    <option value="yarisma">Yarışma Bilgileri</option>
                    <option value="diger">Diğer</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mesajınız *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Mesajınızı buraya yazın..."
                  ></textarea>
                </div>

                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-50 text-green-700 rounded-lg border border-green-200"
                  >
                    Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-50 text-red-700 rounded-lg border border-red-200"
                  >
                    Mesaj gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className={`btn-primary inline-flex items-center justify-center min-w-[160px] ${status === 'sending' ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {status === 'sending' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                      Gönderiliyor...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 w-4 h-4" />
                      Mesaj Gönder
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                İletişim Bilgileri
              </h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Adres
                    </h3>
                    <p className="text-gray-600">
                      Şehit Osman Avcı Mah.<br />
                      Malazgirt 1071 Cad.<br />
                      Relax Göksü Sit. 51D/A<br />
                      6820 Ankara/Etimesgut
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Telefon
                    </h3>
                    <p className="text-gray-600">
                      <a href="tel:+905461900426" className="hover:text-primary-600">
                        +90 546 190 04 26
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      E-posta
                    </h3>
                    <p className="text-gray-600">
                      <a href="mailto:novaeskrim@gmail.com" className="hover:text-primary-600">
                        novaeskrim@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <Clock className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Çalışma Saatleri
                    </h3>
                    <p className="text-gray-600">
                      Bilgi ve ders saatleri için lütfen iletişime geçiniz.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <Instagram className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Sosyal Medya
                    </h3>
                    <p className="text-gray-600">
                      <a
                        href="https://www.instagram.com/novaeskrim"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary-600"
                      >
                        Instagram: novaeskrim
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Konum
                </h3>
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">Haritayı Google Maps'te açın</p>
                    <a
                      href="https://maps.app.goo.gl/jkf1z5EXeLUvCgVXA?g_st=iw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-primary-600 hover:text-primary-700 mt-2"
                    >
                      <Globe className="w-4 h-4 mr-2" />
                      Haritayı Aç
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Online Forms */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Online Formlar
            </h2>
            <p className="text-gray-600 mb-4">
              Sporcu tanıma formu ve KVKK formu yakında paylaşılacaktır.
            </p>
            <p className="text-sm text-gray-500">
              Şimdilik formlar için bizimle iletişime geçebilirsiniz.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Sık Sorulan Sorular
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              En çok sorulan sorular ve cevapları
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden px-8 py-2">
            {faqs.map((item, index) => (
              <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
