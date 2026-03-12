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
            Nova Eskrim Spor Kulübü
            <span className="block mt-2 text-primary-200">
              “Bugünün disiplini, yarının başarısı.”
            </span>
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Kuruluş Hikayesi
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Nova Eskrim Spor Kulübü, eskrim sporuna olan tutku ve bu branşta
                  nitelikli sporcular yetiştirme hedefiyle Adil ve Volkan tarafından
                  2025 yılında kurulmuştur.
                </p>
                <p>
                  Kulübümüz, sporcu gelişimini merkeze alan, disiplinli ve uzun vadeli
                  gelişimi esas alan bir antrenman yaklaşımıyla yola çıkmıştır.
                </p>
                <p>
                  Güvenli ve aile ortamında, saygı ve takım ruhu değerleriyle yetişen
                  sporcularımızı geleceğe hazırlarken, “Bugünün disiplini, yarının başarısı”
                  mottosuyla yolumuza kararlılıkla devam ediyoruz.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl p-8 text-white">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Rakamlarla Nova Eskrim</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-3xl font-bold">2025</div>
                      <div className="text-sm">Kuruluş</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">180</div>
                      <div className="text-sm">m² Oyun Alanı</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">6</div>
                      <div className="text-sm">Pist</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">2</div>
                      <div className="text-sm">Soyunma Odası</div>
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
                Bilimsel antrenman yöntemleri, disiplinli çalışma anlayışı ve etik
                spor değerleriyle; her yaş grubundan sporcuya kaliteli eğitim sunmak,
                sporcuların sadece sportif değil aynı zamanda karakter ve disiplin
                gelişimini desteklemek, veliler için güven veren bir aile ortamı
                oluşturarak sürdürülebilir sportif başarılar elde etmek.
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
                Ulusal ve uluslararası arenada başarılar elde eden, karakterli ve
                bilinçli sporcular yetiştiren; eskrim branşında örnek gösterilen
                bir spor kulübü olmak.
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
              Nova Eskrim Spor Kulübü'nün temel değerleri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Disiplin
              </h3>
              <p className="text-gray-600">
                Düzenli çalışma, sorumluluk bilinci ve süreklilik.
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
                Birlikte hareket etme, dayanışma ve ortak hedef bilinci.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Saygı
              </h3>
              <p className="text-gray-600">
                Antrenörlere, sporculara, rakiplere ve spora duyulan saygı.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Arkadaşlık
              </h3>
              <p className="text-gray-600">
                Güven, destek ve güçlü sosyal bağlar üzerine kurulu spor ortamı.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Tesis Bilgileri
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sporcularımıza güvenli ve konforlu bir antrenman ortamı sunuyoruz.
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-600">
              <li>• 180 m² oyun alanı</li>
              <li>• 6 pist</li>
              <li>• 2 soyunma odası</li>
              <li>• Salon önü park alanı</li>
              <li>• Eryaman 1-2 metrosuna 10 dakika</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              İş Birlikleri
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kulübümüzün iş birliği yaptığı kuruluşlar
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <p className="text-lg text-gray-700 font-medium">
              Türkiye Eskrim Federasyonu
            </p>
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
                  Federasyon onaylı, üst seviye teknik liderlik
                </p>
                <p className="text-sm text-gray-500">
                  Epe, Flöre, Kılıç branşlarında uzman
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-secondary-400 to-secondary-600 flex items-center justify-center">
                <span className="text-6xl">👩‍🏫</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Antrenör Kadrosu
                </h3>
                <p className="text-gray-600 mb-4">
                  Sporcu gelişimini merkeze alan disiplinli yaklaşım
                </p>
                <p className="text-sm text-gray-500">
                  Başlangıç, gelişim ve performans grupları
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                <span className="text-6xl">🧠</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Spor Psikoloğu
                </h3>
                <p className="text-gray-600 mb-4">
                  Performans, odaklanma ve motivasyon desteği
                </p>
                <p className="text-sm text-gray-500">
                  Sporcuların zihinsel dayanıklılığını güçlendirir
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missing Info */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Eksik Bilgiler Listesi
            </h2>
            <p className="text-gray-600 mb-6">
              Aşağıdaki içerikler henüz sağlanmadı; iletildiğinde ekleyebiliriz.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Logo dosyası (yüksek çözünürlük / farklı varyantlar)</li>
              <li>• Fotoğraf galerisi içerikleri</li>
              <li>• Tanıtım videosu ve diğer videolar</li>
              <li>• Sporcu tanıma formu ve KVKK formu içerikleri</li>
              <li>• Türkiye Eskrim Federasyonu haber/duyuru ve faaliyet takvimi entegrasyonu</li>
              <li>• Güncel ders saatleri ve antrenman takvimi</li>
              <li>• Program, grup ve kamp ücretleri / tarihleri</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
