import { Award, Target, Users, Heart } from 'lucide-react'

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-primary-700 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Hakkımızda
          </h1>
          <p className="text-xl lg:text-2xl text-primary-100 max-w-3xl mx-auto">
            Nova Eskrim Kulübü olarak, Türkiye'de eskrim sporunun gelişimine 
            katkıda bulunmaya devam ediyoruz.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Kulübümüzün Tarihçesi
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Nova Eskrim Kulübü, 2010 yılında eskrim sporunun Türkiye'de 
                  yaygınlaştırılması ve geliştirilmesi amacıyla kurulmuştur.
                </p>
                <p>
                  Kurulduğumuz günden bu yana, binlerce sporcuya eskrim sporunu 
                  sevdirmiş ve birçok başarılı sporcu yetiştirmiş bulunmaktayız.
                </p>
                <p>
                  Modern tesislerimiz, deneyimli antrenörlerimiz ve kapsamlı 
                  programlarımızla Türkiye'nin önde gelen eskrim kulüplerinden 
                  biri haline geldik.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl p-8 text-white">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Rakamlarla Nova Eskrim</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-3xl font-bold">500+</div>
                      <div className="text-sm">Aktif Sporcu</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">15+</div>
                      <div className="text-sm">Yıllık Deneyim</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">50+</div>
                      <div className="text-sm">Madalya</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">10+</div>
                      <div className="text-sm">Antrenör</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Misyonumuz
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Eskrim sporunu Türkiye'de yaygınlaştırmak, genç sporculara 
                kaliteli eğitim vermek ve ulusal/uluslararası yarışmalarda 
                başarılı sporcular yetiştirmek. Sporcularımızın sadece 
                teknik becerilerini değil, aynı zamanda karakter gelişimlerini 
                de desteklemek.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Vizyonumuz
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Türkiye'nin en prestijli eskrim kulübü olmak ve uluslararası 
                arenada Türkiye'yi temsil eden sporcular yetiştirmek. 
                Modern eğitim yöntemleri ve teknolojik altyapımızla 
                eskrim sporunda öncü olmak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Değerlerimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nova Eskrim olarak benimsediğimiz temel değerler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Spor Aşkı
              </h3>
              <p className="text-gray-600">
                Eskrim sporuna olan tutkumuz ve sevgimiz her şeyin temelidir.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Takım Ruhu
              </h3>
              <p className="text-gray-600">
                Birlikte çalışmanın ve dayanışmanın önemini vurgularız.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Mükemmellik
              </h3>
              <p className="text-gray-600">
                Her alanda mükemmelliği hedefler ve sürekli gelişim ararız.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Başarı
              </h3>
              <p className="text-gray-600">
                Hedeflerimize ulaşmak için azimle çalışır ve başarıyı kutlarız.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Ekibimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deneyimli ve uzman antrenörlerimizle sporcularımıza 
              en iyi eğitimi veriyoruz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                <span className="text-6xl">👨‍🏫</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Baş Antrenör
                </h3>
                <p className="text-gray-600 mb-4">
                  15+ yıllık deneyim, uluslararası sertifikalar
                </p>
                <p className="text-sm text-gray-500">
                  Epee, Foil, Sabre branşlarında uzman
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-secondary-400 to-secondary-600 flex items-center justify-center">
                <span className="text-6xl">👩‍🏫</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Kıdemli Antrenör
                </h3>
                <p className="text-gray-600 mb-4">
                  10+ yıllık deneyim, çocuk gelişimi uzmanı
                </p>
                <p className="text-sm text-gray-500">
                  Başlangıç seviyesi ve çocuk grupları
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                <span className="text-6xl">👨‍💼</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Performans Antrenörü
                </h3>
                <p className="text-gray-600 mb-4">
                  8+ yıllık deneyim, yarışma hazırlığı uzmanı
                </p>
                <p className="text-sm text-gray-500">
                  İleri seviye ve yarışma grupları
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
