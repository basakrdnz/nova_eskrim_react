import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, Instagram, Globe } from 'lucide-react'

const Contact = () => {
  const missingClass = 'bg-red-100 text-red-700 px-2 py-0.5 rounded'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
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
                <button
                  type="submit"
                  className="btn-primary inline-flex items-center"
                >
                  <Send className="mr-2 w-4 h-4" />
                  Mesaj Gönder
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
                      <br />
                      <a
                        href="https://www.tiktok.com/@nova-eskrim"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary-600"
                      >
                        TikTok: nova-eskrim
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
              <span className={missingClass}>
                Sporcu tanıma formu ve KVKK formu yakında paylaşılacaktır.
              </span>
            </p>
            <p className="text-sm text-gray-500">
              <span className={missingClass}>
                Şimdilik formlar için bizimle iletişime geçebilirsiniz.
              </span>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
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
            ].map((item) => (
              <div key={item.question} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.question}
                </h3>
                <p className="text-gray-600">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
