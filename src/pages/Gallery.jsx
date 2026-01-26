import { useState } from 'react'
import { Camera, Users, Award, Calendar, X, Maximize2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import eskrim1 from '../assets/eskrim1.JPG'
import eskrim2 from '../assets/eskrim2.JPG'
import eskrim3 from '../assets/eskrim3.JPG'
import eskrim4 from '../assets/eskrim4.JPG'
import eskrim5 from '../assets/eskrim5.JPG'
import eskrim6 from '../assets/eskrim6.JPG'
import eskrim7 from '../assets/eskrim7.jpg'
import eskrim8 from '../assets/eskrim8.JPG'
import eskrim9 from '../assets/eskrim9.JPG'
import eskrim10 from '../assets/eskrim10.JPG'
import eskrim11 from '../assets/eskrim11.JPG'
import eskrim12 from '../assets/eskrim12.JPG'
import eskrim13 from '../assets/eskrim13.jpg'
import eskrim14 from '../assets/eskrim14.JPG'
import eskrim15 from '../assets/eskrim15.JPG'
import eskrim16 from '../assets/eskrim16.JPG'
import eskrim17 from '../assets/eskrim17.JPG'
import eskrim18 from '../assets/eskrim18.JPG'
import eskrim19 from '../assets/eskrim19.jpg'
import eskrim20 from '../assets/eskrim20.JPG'
import eskrim21 from '../assets/eskrim21.JPG'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const categories = [
    { id: 'all', name: 'Tümü', icon: Camera },
    { id: 'training', name: 'Antrenman', icon: Users },
    { id: 'competition', name: 'Yarışma', icon: Award },
    { id: 'events', name: 'Etkinlikler', icon: Calendar },
  ]

  const photos = [
    { id: 8, category: 'competition', title: 'Antrenman Anları', description: 'Nova Eskrim antrenmanlarından kareler', image: eskrim1, date: '2025-01-15' },
    { id: 2, category: 'training', title: 'Antrenman Anları', description: 'Nova Eskrim antrenmanlarından kareler', image: eskrim2, date: '2025-01-15' },
    { id: 3, category: 'competition', title: 'Antrenman Anları', description: 'Nova Eskrim antrenmanlarından kareler', image: eskrim3, date: '2025-01-15' },
    { id: 13, category: 'competition', title: 'Antrenman Anları', description: 'Nova Eskrim antrenmanlarından kareler', image: eskrim4, date: '2025-01-15' },
    { id: 5, category: 'competition', title: 'Antrenman Anları', description: 'Nova Eskrim antrenmanlarından kareler', image: eskrim5, date: '2025-01-15' },
    { id: 6, category: 'competition', title: 'Antrenman Anları', description: 'Nova Eskrim antrenmanlarından kareler', image: eskrim6, date: '2025-01-15' },
    { id: 4, category: 'competition', title: 'Antrenman Anları', description: 'Nova Eskrim antrenmanlarından kareler', image: eskrim8, date: '2025-01-15' },
    { id: 9, category: 'competition', title: 'Antrenman Anları', description: 'Nova Eskrim antrenmanlarından kareler', image: eskrim9, date: '2025-01-15' },
    { id: 10, category: 'competition', title: 'Antrenman Anları', description: 'Nova Eskrim antrenmanlarından kareler', image: eskrim10, date: '2025-01-15' },
    { id: 11, category: 'competition', title: 'Antrenman Anları', description: 'Nova Eskrim antrenmanlarından kareler', image: eskrim11, date: '2025-01-15' },
    { id: 12, category: 'competition', title: 'Antrenman Anları', description: 'Nova Eskrim antrenmanlarından kareler', image: eskrim12, date: '2025-01-15' },
    { id: 7, category: 'competition', title: 'Antrenman Anları', description: 'Nova Eskrim antrenmanlarından kareler', image: eskrim13, date: '2025-01-15' },
    { id: 14, category: 'competition', title: 'Antrenman Anları', description: 'Nova Eskrim antrenmanlarından kareler', image: eskrim14, date: '2025-01-15' },
    { id: 15, category: 'training', title: 'Antrenman Anları', description: 'Nova Eskrim antrenmanlarından kareler', image: eskrim15, date: '2025-01-15' },
    { id: 16, category: 'competition', title: 'Antrenman Anları', description: 'Nova Eskrim antrenmanlarından kareler', image: eskrim16, date: '2025-01-15' },
    { id: 17, category: 'competition', title: 'Antrenman Anları', description: 'Nova Eskrim antrenmanlarından kareler', image: eskrim17, date: '2025-01-15' },
    { id: 18, category: 'competition', title: 'Antrenman Anları', description: 'Nova Eskrim antrenmanlarından kareler', image: eskrim18, date: '2025-01-15' },
    { id: 19, category: 'competition', title: 'Antrenman Anları', description: 'Nova Eskrim antrenmanlarından kareler', image: eskrim19, date: '2025-01-15' },
    { id: 20, category: 'competition', title: 'Antrenman Anları', description: 'Nova Eskrim antrenmanlarından kareler', image: eskrim20, date: '2025-01-15' },
    { id: 21, category: 'competition', title: 'Antrenman Anları', description: 'Nova Eskrim antrenmanlarından kareler', image: eskrim21, date: '2026-01-26' },
    { id: 1, category: 'competition', title: 'Antrenman Anları', description: 'Nova Eskrim antrenmanlarından kareler', image: eskrim7, date: '2025-01-15' }
  ]


  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary-900 overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-400 via-primary-900 to-primary-900"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Galeri
          </motion.h1>
          <motion.p
            className="text-xl lg:text-2xl text-primary-100 max-w-3xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Nova Eskrim ailesinin başarıları, antrenmanları ve unutulmaz anları.
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid - Masonry style */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
            <AnimatePresence>
              {photos.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => setSelectedImage(item)}
                  className="relative break-inside-avoid group cursor-pointer rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
                >
                  <img
                    src={item.image}
                    alt="Nova Eskrim"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Hover Overlay with Category */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="inline-block px-3 py-1 bg-primary-600/90 text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-2 backdrop-blur-sm">
                        {categories.find(c => c.id === item.category)?.name}
                      </span>
                      <div className="flex items-center text-white/70 text-sm font-medium">
                        <Maximize2 className="w-4 h-4 mr-2" />
                        Tam Ekran Gör
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>


      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
          >
            <button
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[110]"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full flex items-center justify-center"
            >
              <img
                src={selectedImage.image}
                alt="Nova Eskrim"
                className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="bg-white py-24 lg:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-900 rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-400 opacity-10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-400 opacity-10 rounded-full blur-3xl -ml-32 -mb-32"></div>

            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 relative z-10">
              Bu Anların Bir Parçası Olun
            </h2>
            <p className="text-xl text-primary-100 mb-12 max-w-2xl mx-auto font-light leading-relaxed relative z-10">
              Nova Eskrim ailesine katılın ve kendi başarı hikayenizi bizimle birlikte yazın.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
              <a href="/iletisim" className="bg-white text-primary-900 hover:bg-primary-50 font-bold py-5 px-10 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-white/20 active:scale-95">
                Hemen Kayıt Ol
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gallery

