import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Instagram, Globe } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <span className="ml-3 text-xl font-bold">Nova Eskrim</span>
            </div>
            <p className="text-gray-300 mb-4">
              Disiplin, karakter ve sürdürülebilir başarı anlayışıyla eskrim sporuna değer katmak için çalışıyoruz.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/novaeskrim"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@nova-eskrim"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/hakkimizda" className="text-gray-300 hover:text-white transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link to="/hocalar" className="text-gray-300 hover:text-white transition-colors">
                  Hocalar
                </Link>
              </li>
              <li>
                <Link to="/galeri" className="text-gray-300 hover:text-white transition-colors">
                  Galeri
                </Link>
              </li>
              <li>
                <Link to="/programlar" className="text-gray-300 hover:text-white transition-colors">
                  Programlar
                </Link>
              </li>
              <li>
                <Link to="/iletisim" className="text-gray-300 hover:text-white transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Programlar</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/antrenman-takvimi" className="text-gray-300 hover:text-white transition-colors">
                  Antrenman Takvimi
                </Link>
              </li>
              <li>
                <Link to="/gruplar" className="text-gray-300 hover:text-white transition-colors">
                  Gruplar
                </Link>
              </li>
            </ul>
          </div>


          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-primary-400 mr-3" />
                <span className="text-gray-300">
                  Şehit Osman Avcı Mah. Malazgirt 1071 Cad.
                  Relax Göksü Sit. 51D/A 6820 Ankara/Etimesgut
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-primary-400 mr-3" />
                <a href="tel:+905461900426" className="text-gray-300 hover:text-white transition-colors">
                  +90 546 190 04 26
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-primary-400 mr-3" />
                <a href="mailto:novaeskrim@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  novaeskrim@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Nova Eskrim Spor Kulübü. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/gizlilik" className="text-gray-400 hover:text-white text-sm transition-colors">
                Gizlilik Politikası
              </Link>
              <Link to="/kullanim-kosullari" className="text-gray-400 hover:text-white text-sm transition-colors">
                Kullanım Koşulları
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
