import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      id="scroll-to-top"
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full border border-done/30 bg-black/50 backdrop-blur-sm flex items-center justify-center transition-all duration-500 hover:bg-done hover:border-done group ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <ArrowUp className="w-5 h-5 text-done group-hover:text-black transition-colors" />
    </button>
  )
}
