import { Link } from 'react-router-dom'
import { Users, Calendar, Clock, Star, Crown, Swords, CheckCircle2 } from 'lucide-react'

const Programs = () => {
  const programs = [
    {
      id: 1,
      name: 'Elit Grup',
      description: 'Ulusal ve uluslararası yarışmalara hazırlık için özel, yoğun antrenman programı.',
      duration: 'Sürekli',
      frequency: 'Haftada 4 gün',
      ageGroup: 'Yarışmacı Sporcular',
      features: [
        'Yarışma hazırlığı',
        'Kondisyon ve kuvvet çalışmaları',
        'Mental hazırlık',
        'Psikolojik destek'
      ],
      schedule: [
        { day: 'Salı', time: '19:00 - 21:00' },
        { day: 'Perşembe', time: '19:00 - 21:00' },
        { day: 'Cumartesi', time: '12:30 - 14:30' },
        { day: 'Pazar', time: '10:00 - 12:00' }
      ],
      icon: Crown,
      color: 'from-slate-900 to-slate-800'
    },
    {
      id: 2,
      name: 'Pro Grup',
      description: 'Oyun temelli yaklaşımla yarışma hazırlığı, disiplin ve takım ruhunun geliştirildiği program.',
      duration: 'Sürekli',
      frequency: 'Haftada 4 gün',
      ageGroup: 'Gelişim Çağı Sporcuları',
      features: [
        'Oyun temelli yaklaşım',
        'Yarışma hazırlığı',
        'Kordinasyon gelişimi',
        'Disiplin ve takım ruhunun oluşması',
        'Psikolojik destek'
      ],
      schedule: [
        { day: 'Pazartesi', time: '19:00 - 21:00' },
        { day: 'Çarşamba', time: '19:00 - 21:00' },
        { day: 'Cumartesi', time: '10:00 - 12:00' },
        { day: 'Pazar', time: '12:30 - 14:00' }
      ],
      icon: Star,
      color: 'from-primary-900 to-primary-800'
    },
    {
      id: 3,
      name: 'Veteran',
      description: 'Yetişkinler için özel antrenman ortamında yarışma hazırlığı ve sosyal, sağlıklı yaşam programı.',
      duration: 'Sürekli',
      frequency: 'Haftada 2 gün',
      ageGroup: 'Yetişkinler',
      features: [
        'Yarışma hazırlığı',
        'Yetişkinler için antrenman ortamı',
        'Kondisyon ve esneklik çalışmaları',
        'Sosyal aktivite ve paylaşım'
      ],
      schedule: [
        { day: 'Cuma', time: '19:00 - 20:30' },
        { day: 'Cumartesi', time: '16:30 - 17:30' }
      ],
      icon: Swords,
      color: 'from-slate-800 to-slate-700'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-primary-700 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Eğitim Programları
          </h1>
          <p className="text-xl lg:text-2xl text-primary-100 max-w-3xl mx-auto">
            Gelişiminize ve hedeflerinize uygun, profesyoneller tarafından planlanmış eskrim programlarımız.
          </p>
        </div>
      </section>

      {/* Programs Cards */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div key={program.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col group">
                {/* Image / Header block */}
                <div className={`h-40 bg-gradient-to-br ${program.color} relative overflow-hidden flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-500`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <program.icon className="w-16 h-16 text-white drop-shadow-md relative z-10" />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow bg-white relative z-20 mt-[-1rem] rounded-t-3xl border-t border-gray-100 text-left">
                  <div className="mb-4">
                    <h3 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                      {program.name}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-8 min-h-[80px] leading-relaxed text-lg">
                    {program.description}
                  </p>

                  {/* Highlights */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100/50 flex flex-col items-start text-left group-hover:bg-primary-50/50 transition-colors">
                      <Calendar className="w-6 h-6 mb-2 text-primary-600" />
                      <span className="text-sm font-semibold text-gray-900">{program.frequency}</span>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100/50 flex flex-col items-start text-left group-hover:bg-primary-50/50 transition-colors">
                      <Users className="w-6 h-6 mb-2 text-primary-600" />
                      <span className="text-sm font-semibold text-gray-900">{program.ageGroup}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-8 min-h-[220px]">
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center">
                      Öne Çıkanlar
                      <span className="flex-1 h-px bg-gray-100 ml-4"></span>
                    </h4>
                    <ul className="space-y-3">
                      {program.features.map((feature, index) => (
                        <li key={index} className="text-[15px] font-medium text-gray-700 flex items-start bg-gray-50/50 px-4 py-3 rounded-xl border border-gray-100/50">
                          <CheckCircle2 className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0 mt-[-1px]" />
                          <span className="leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Schedule */}
                  <div className="mb-10 flex-grow">
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center">
                      Antrenman Günleri
                      <span className="flex-1 h-px bg-gray-100 ml-4"></span>
                    </h4>
                    <div className="grid gap-3">
                      {program.schedule.map((slot, index) => (
                        <div key={index} className="flex justify-between items-center text-sm bg-white border border-gray-200/60 p-3 rounded-xl hover:border-primary-300 transition-colors shadow-sm">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2 text-primary-500" />
                            <span className="font-semibold text-gray-900">{slot.day}</span>
                          </div>
                          <span className="text-primary-800 bg-primary-50 px-3 py-1 rounded-lg font-medium tracking-wide">{slot.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    to="/iletisim"
                    className="mt-auto bg-primary-900 hover:bg-primary-800 text-white font-bold py-4 text-center rounded-xl transition-all duration-300 shadow-md hover:shadow-xl active:scale-95"
                  >
                    Kayıt ve Bilgi Al
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-24 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Kararsız Mısınız?
          </h2>
          <p className="text-xl mb-10 text-gray-600 leading-relaxed">
            Hangi programın sizin veya çocuğunuz için uygun olduğundan emin değilseniz, bize ulaşın. Antrenörlerimiz seviyenizi değerlendirip size en uygun grupları önerecektir.
          </p>
          <div className="flex justify-center">
            <Link to="/iletisim" className="bg-primary-600 text-white hover:bg-primary-700 hover:-translate-y-1 font-bold py-4 px-10 rounded-xl transition-all shadow-lg active:scale-95 duration-300">
              Bizimle İletişime Geçin
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Programs
