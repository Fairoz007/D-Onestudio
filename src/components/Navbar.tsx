import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'ABOUT', href: '#about' },
  { label: 'SERVICES', href: '#services' },
  { label: 'GAMES', href: '#portfolio' },
  { label: 'PROCESS', href: '#process' },
  { label: 'CAREERS', href: '#careers' },
  { label: 'CONTACT', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    if (href === '#') return
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setMobileOpen(false)
    }
  }

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-nav py-4 lg:py-6' : 'bg-transparent py-6 lg:py-8'
      }`}
    >
      <div className="w-full px-6 lg:px-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); scrollToSection('#hero') }}
          className="flex items-center gap-3 group relative"
        >
          <img
            src="/logo/logo.png"
            alt="D-ONE Studio"
            className="h-14 lg:h-20 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.href)}
              className="relative font-exo text-xs font-bold tracking-[0.2em] uppercase text-gray-300 hover:text-white transition-colors group py-2"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-done transition-all duration-300 group-hover:w-full shadow-[0_0_10px_rgba(255,106,8,0.8)]" />
            </button>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => scrollToSection('#contact')}
            className="hidden lg:flex neon-button-outline text-xs"
          >
            LET'S TALK
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors"
          >
            {mobileOpen ? <X className="w-4 h-4 text-done" /> : <Menu className="w-4 h-4 text-gray-300" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 glass-panel transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-6 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.href)}
              className="block w-full text-left font-exo text-sm font-bold tracking-widest text-gray-300 hover:text-done transition-colors py-2 uppercase"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
