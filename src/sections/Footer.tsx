import { useEffect, useState, useRef } from 'react'
import { ArrowRight, Mail, Phone, MapPin, Globe, Github, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react'

// Custom Discord Icon since lucide-react might not have it
const DiscordIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36" fill="currentColor" className={className}>
    <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25,68.42,68.42,0,0,1,27.9,79.5l0,0c1.05-.79,2.09-1.61,3.1-2.45a73.25,73.25,0,0,0,65.14,0c1,1,2.05,1.66,3.1,2.45l0,0a68.42,68.42,0,0,1-11.7,5.75,78.27,78.27,0,0,0,6.89,11.11,105.25,105.25,0,0,0,32.19-16.14h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.31,60,73.31,53s5-12.74,11.43-12.74S96.3,46,96.19,53,91.08,65.69,84.69,65.69Z" />
  </svg>
)

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false)
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <footer 
      ref={footerRef}
      className="relative w-full bg-[#090909] pt-40 pb-8 overflow-hidden font-inter transition-opacity duration-1000 ease-in-out"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[300px] bg-brand-primary/5 blur-[100px] rounded-full pointer-events-none" />
      
      {/* Floating Particles (CSS Animation fallback to simple absolute divs) */}
      <div className="absolute top-20 left-[10%] w-2 h-2 bg-brand-primary rounded-full animate-float blur-[1px]" />
      <div className="absolute top-40 right-[15%] w-3 h-3 bg-brand-secondary rounded-full animate-float blur-[2px]" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-[20%] w-1.5 h-1.5 bg-brand-accent rounded-full animate-float blur-[1px]" style={{ animationDelay: '2s' }} />

      <div className="w-full px-6 lg:px-16 max-w-[1440px] mx-auto relative z-10">
        
        {/* Floating Newsletter Section */}
        <div className="relative -mt-64 mb-24 rounded-[24px] bg-white/5 backdrop-blur-xl border border-[rgba(255,106,0,0.2)] p-8 lg:p-12 shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_40px_rgba(255,106,0,0.1)] flex flex-col lg:flex-row items-center justify-between gap-8 transform hover:-translate-y-2 transition-transform duration-500">
          <div className="max-w-xl">
            <h2 className="font-space font-bold text-3xl lg:text-4xl text-white mb-4">Stay Ahead of Innovation</h2>
            <p className="text-text-secondary text-[15px] leading-relaxed">
              Get exclusive insights, product updates, studio news, and technology trends delivered directly to your inbox.
            </p>
          </div>
          <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-black/50 border border-white/10 rounded-full px-6 py-4 outline-none focus:border-brand-primary transition-colors text-white placeholder:text-white/40 w-full sm:w-[300px]"
            />
            <button className="bg-gradient-cta hover:shadow-orange-glow transition-all duration-300 text-white font-semibold rounded-full px-8 py-4 flex items-center justify-center gap-2 whitespace-nowrap">
              Subscribe
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 4 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Column 1 - Brand */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <img src="/logo/logo.png" alt="D-ONE Studio" className="h-12 w-auto mb-6 hover:scale-105 transition-transform duration-500 cursor-pointer" />
            <p className="text-text-secondary text-[15px] mb-8 leading-relaxed max-w-xs">
              Building the future through design, technology, and innovation.
            </p>
            <div className="space-y-4 w-full">
              {[
                { icon: Mail, text: 'hello@d-onestudio.com' },
                { icon: Phone, text: '+1 (555) 123-4567' },
                { icon: MapPin, text: 'San Francisco, CA' },
                { icon: Globe, text: 'Available Worldwide / Remote' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-brand-primary group-hover:bg-brand-primary/10 transition-colors">
                    <item.icon className="w-4 h-4 text-text-secondary group-hover:text-brand-primary transition-colors" />
                  </div>
                  <span className="text-text-secondary text-sm group-hover:text-white transition-colors">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2 - Navigation */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-space font-bold text-lg mb-6">Navigation</h3>
            <ul className="space-y-4">
              {['Home', 'About', 'Studio', 'Careers', 'Founder', 'Blog', 'Contact', 'Privacy Policy', 'Terms of Service'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/ /g, '-')}`} className="group relative inline-flex items-center text-text-secondary hover:text-white transition-colors text-sm">
                    <span className="relative transform transition-transform duration-300 group-hover:translate-x-2">
                      {link}
                      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-primary transition-all duration-300 group-hover:w-full" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-space font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-4">
              {['Web Development', 'Mobile Apps', 'UI/UX Design', 'Cloud & DevOps', 'Artificial Intelligence', 'Branding', 'Game Development', 'Digital Marketing'].map((service) => (
                <li key={service}>
                  <a href="#services" className="group relative inline-flex items-center text-text-secondary hover:text-white transition-colors text-sm">
                    <span className="relative transform transition-transform duration-300 group-hover:translate-x-2">
                      {service}
                      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-primary transition-all duration-300 group-hover:w-full" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Connect */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-space font-bold text-lg mb-6">Connect</h3>
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                { icon: Linkedin, href: '#' },
                { icon: Github, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Youtube, href: '#' },
                { icon: DiscordIcon, href: '#' },
              ].map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href}
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary hover:text-white hover:border-brand-primary hover:bg-brand-primary/10 hover:shadow-[0_0_15px_rgba(255,106,0,0.3)] transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="p-6 rounded-[20px] bg-white/[0.02] border border-white/5">
              <h4 className="text-white text-sm font-semibold mb-2">Let's Build Something Amazing</h4>
              <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-brand-primary font-medium text-sm flex items-center gap-2 group">
                Start Your Project 
                <ArrowRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="relative pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent shadow-[0_0_10px_rgba(255,106,0,0.5)]" />
          
          <p className="text-text-muted text-xs">
            © 2026 D-ONE Studio. All Rights Reserved.
          </p>
          
          <p className="text-text-muted text-xs flex items-center gap-1">
            Crafted with <span className="text-brand-primary animate-pulse">❤️</span> in India
          </p>
          
          <p className="text-text-muted text-xs">
            Designed & Developed by <span className="text-white font-medium">Fairoz Faisal</span>
          </p>
        </div>

      </div>
    </footer>
  )
}
