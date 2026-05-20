import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Sun, ArrowRight } from 'lucide-react'

const STORAGE_KEY = 'nova_summer_school_popup_2026_dismissed'

const SummerSchoolPopup = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY)
    if (dismissed) return
    const timer = setTimeout(() => setIsOpen(true), 800)
    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    localStorage.setItem(STORAGE_KEY, '1')
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-primary-950/70 backdrop-blur-sm"
          onClick={handleClose}
          aria-modal="true"
          role="dialog"
          aria-label="Yaz okulu duyurusu"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl bg-white rounded-[2rem] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.35)] grid grid-cols-1 md:grid-cols-2"
          >
            <button
              type="button"
              onClick={handleClose}
              aria-label="Kapat"
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-gray-700 hover:text-gray-900 flex items-center justify-center shadow-lg backdrop-blur transition-all hover:scale-105 active:scale-95"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-64 md:h-auto min-h-[280px] overflow-hidden">
              <img
                src="/nova_yaz_okulu.png"
                alt="Nova Eskrim Yaz Okulu"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-primary-900/60 via-primary-900/20 to-transparent" />
            </div>

            <div className="relative p-8 lg:p-10 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-secondary-50 text-secondary-700 text-xs font-semibold uppercase tracking-wider mb-4">
                <Sun className="w-4 h-4" />
                Yeni Sezon
              </div>

              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 leading-tight">
                Yaz Okulu Kayıtlarımız Başladı!
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                Çocuğunuzun yazını eğlenceli, disiplinli ve unutulmaz bir spor deneyimine dönüştürün.
                Nova Eskrim Yaz Okulu'nda kontenjanlar dolmadan yerinizi ayırtın.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/iletisim"
                  onClick={handleClose}
                  className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl active:scale-95 transition-all"
                >
                  İletişime Geç
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  type="button"
                  onClick={handleClose}
                  className="inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-6 rounded-full transition-all"
                >
                  Daha Sonra
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SummerSchoolPopup
