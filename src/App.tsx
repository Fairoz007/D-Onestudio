import { Routes, Route } from 'react-router'
import GamicsHeader from './sections/gamics/GamicsHeader'
import GamicsFooter from './sections/gamics/GamicsFooter'
import Home from './pages/Home'
import About from './pages/About'
import Studio from './pages/Studio'
import Careers from './pages/Careers'
import Blog from './pages/Blog'
import Founder from './pages/Founder'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="min-h-screen bg-background text-text-primary font-inter overflow-x-hidden selection:bg-brand-primary/30 selection:text-white">
      <GamicsHeader />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/founder" element={<Founder />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <GamicsFooter />
    </div>
  )
}

export default App
