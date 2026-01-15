import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Coaches from './pages/Coaches'
import Gallery from './pages/Gallery'
import Programs from './pages/Programs'
import TrainingCalendar from './pages/TrainingCalendar'
import Groups from './pages/Groups'
import SummerCamp from './pages/SummerCamp'
import WinterCamp from './pages/WinterCamp'
import FencingTimeLive from './pages/FencingTimeLive'
import TurkishFencingFed from './pages/TurkishFencingFed'
import FencingInfo from './pages/FencingInfo'
import RulesVideos from './pages/RulesVideos'
import Medals from './pages/Medals'
import Achievements from './pages/Achievements'
import Contact from './pages/Contact'

const ScrollToTopAndLoading = () => {
  const location = useLocation()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    const timeoutId = setTimeout(() => setIsLoading(false), 250)
    return () => clearTimeout(timeoutId)
  }, [location.pathname])

  if (!isLoading) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 backdrop-blur-sm"
      aria-live="polite"
      aria-label="Sayfa yükleniyor"
    >
      <div className="flex items-center space-x-3">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary-600 border-t-transparent" />
        <span className="text-primary-700 font-medium">Yükleniyor...</span>
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <ScrollToTopAndLoading />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hakkimizda" element={<About />} />
            <Route path="/hocalar" element={<Coaches />} />
            <Route path="/galeri" element={<Gallery />} />
            <Route path="/programlar" element={<Programs />} />
            <Route path="/antrenman-takvimi" element={<TrainingCalendar />} />
            <Route path="/gruplar" element={<Groups />} />
            <Route path="/yaz-kampi" element={<SummerCamp />} />
            <Route path="/kis-kampi" element={<WinterCamp />} />
            <Route path="/fencing-time-live" element={<FencingTimeLive />} />
            <Route path="/turkiye-eskrim-federasyonu" element={<TurkishFencingFed />} />
            <Route path="/eskrim-bilgileri" element={<FencingInfo />} />
            <Route path="/kurallar-videolar" element={<RulesVideos />} />
            <Route path="/madalyalar" element={<Medals />} />
            <Route path="/dereceler" element={<Achievements />} />
            <Route path="/iletisim" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
