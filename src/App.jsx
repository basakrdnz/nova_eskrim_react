import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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

function App() {
  return (
    <Router>
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
