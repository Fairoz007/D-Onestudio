import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router';

export default function GamicsHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Studio', path: '/studio' },
    { name: 'Careers', path: '/careers' },
    { name: 'Blog', path: '/blog' },
    { name: 'Founder', path: '/founder' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className={`transition-all duration-300 ${isScrolled ? 'bg-ui-glass backdrop-blur-md border-b border-ui-glassBorder shadow-glass py-3' : 'bg-background py-5'} relative`}>
        <div className="container mx-auto px-6 lg:px-16 w-full max-w-[1440px] flex justify-between items-center relative z-10">
          
          <Link to="/">
            <img src="/logo/logo.png" alt="D-One Studio" className="h-12 md:h-16 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-10">
            {navLinks.map((item) => (
              <Link 
                key={item.name} 
                to={item.path}
                className={`relative font-orbitron text-xs lg:text-sm font-bold tracking-widest uppercase transition-colors group py-2 ${
                  location.pathname === item.path ? 'text-brand-primary' : 'text-text-secondary hover:text-white'
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 h-[2px] bg-brand-primary transition-all duration-300 shadow-[0_0_10px_rgba(255,106,8,0.8)] ${
                  location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center gap-4">
            <Link to="/contact" className="hidden lg:flex neon-button-outline text-xs">
              START PROJECT
            </Link>
          </div>

          {/* Hamburger Toggle (Mobile Only) */}
          <button 
            className="md:hidden w-12 h-12 flex items-center justify-center border border-ui-glassBorder text-text-primary rounded-full hover:bg-ui-glassBorder hover:text-brand-primary transition-all duration-300 shadow-glass"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>

        {/* Mobile Dropdown Menu */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg transition-all duration-500 origin-top overflow-hidden ${isMobileMenuOpen ? 'max-h-[500px] py-8 shadow-glass border-t border-ui-glassBorder opacity-100' : 'max-h-0 py-0 opacity-0'}`}>
          <div className="container mx-auto px-6 lg:px-16 w-full max-w-7xl flex flex-col gap-6 items-center">
            {navLinks.map((item) => (
              <Link 
                key={item.name} 
                to={item.path}
                className={`text-xl font-bold uppercase font-orbitron tracking-[0.2em] transition-colors block text-center ${
                  location.pathname === item.path ? 'text-brand-primary' : 'text-text-primary hover:text-brand-primary'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
