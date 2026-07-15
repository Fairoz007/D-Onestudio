import { useState, useEffect } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Studio', href: '#studio' },
  { label: 'Careers', href: '#careers' },
  { label: 'Blog', href: '#blog' },
  { label: 'Founder', href: '#founder' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
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
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out h-[88px] flex items-center ${
        scrolled 
          ? 'bg-black/40 backdrop-blur-md border-b border-[rgba(255,255,255,0.08)]' 
          : 'bg-transparent'
      }`}
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 xl:px-[120px] flex items-center justify-between">
        
        {/* Left: Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); scrollToSection('#home') }}
          className="flex items-center gap-3 group relative shrink-0"
        >
          <img
            src="/logo/logo.png"
            alt="D-ONE Studio"
            className="h-10 lg:h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </a>

        {/* Center: Navigation */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-8 xl:gap-10">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.href)}
              className="relative font-inter text-[13px] lg:text-[15px] font-medium text-text-secondary hover:text-white transition-all duration-300 group py-2 hover:-translate-y-0.5"
            >
              {link.label}
              {/* Thin orange underline & glow on hover */}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-brand-primary transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100 shadow-[0_0_8px_rgba(255,106,0,0.8)]" />
            </button>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-3 lg:gap-5 shrink-0">
          {/* Theme Toggle (Optional/Visual for now) */}
          <button 
            onClick={() => setIsDark(!isDark)}
            className="hidden md:flex items-center justify-center w-10 h-10 rounded-full text-text-secondary hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Toggle Theme"
          >
            {isDark ? <Moon className="w-[18px] h-[18px]" /> : <Sun className="w-[18px] h-[18px]" />}
          </button>

          {/* Primary CTA */}
          <button
            onClick={() => scrollToSection('#contact')}
            className="hidden md:flex items-center justify-center h-10 lg:h-11 px-5 lg:px-7 rounded-full bg-gradient-cta text-white font-inter text-xs lg:text-sm font-semibold tracking-wide transition-all duration-300 hover:shadow-orange-glow hover:-translate-y-0.5"
          >
            Start Your Project
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-11 h-11 rounded-full border border-[rgba(255,255,255,0.08)] flex items-center justify-center hover:bg-white/5 transition-colors"
            aria-label="Toggle Mobile Menu"
          >
            {mobileOpen ? <X className="w-5 h-5 text-text-secondary" /> : <Menu className="w-5 h-5 text-text-secondary" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-[88px] left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-[rgba(255,255,255,0.08)] transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-screen opacity-100 border-t border-[rgba(255,255,255,0.08)]' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.href)}
              className="text-left font-inter text-lg font-medium text-text-secondary hover:text-brand-primary transition-colors"
            >
              {link.label}
            </button>
          ))}
          <div className="h-px w-full bg-[rgba(255,255,255,0.08)] my-2" />
          <button
            onClick={() => scrollToSection('#contact')}
            className="flex items-center justify-center h-12 w-full rounded-full bg-gradient-cta text-white font-inter text-[15px] font-semibold tracking-wide"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </header>
  )
}
