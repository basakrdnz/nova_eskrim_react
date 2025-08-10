import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'

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
              Türkiye'nin önde gelen eskrim kulüplerinden biri. Profesyonel antrenörler, 
              modern tesisler ve kapsamlı programlarla eskrim sporunu öğrenin.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
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
                <Link to="/programlar" className="text-gray-300 hover:text-white transition-colors">
                  Programlar
                </Link>
              </li>
              <li>
                <Link to="/galeri" className="text-gray-300 hover:text-white transition-colors">
                  Galeri
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
              <li>
                <Link to="/yaz-kampi" className="text-gray-300 hover:text-white transition-colors">
                  Yaz Kampı
                </Link>
              </li>
              <li>
                <Link to="/kis-kampi" className="text-gray-300 hover:text-white transition-colors">
                  Kış Kampı
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
                  Adres bilgisi buraya gelecek
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-primary-400 mr-3" />
                <a href="tel:+905551234567" className="text-gray-300 hover:text-white transition-colors">
                  +90 555 123 45 67
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-primary-400 mr-3" />
                <a href="mailto:info@novaeskrim.com" className="text-gray-300 hover:text-white transition-colors">
                  info@novaeskrim.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Nova Eskrim Kulübü. Tüm hakları saklıdır.
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
