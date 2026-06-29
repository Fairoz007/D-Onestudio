import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Mail, Send, Github, Twitter, Linkedin, MessageCircle } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.fade-up-contact').forEach((el, i) => {
        gsap.fromTo(el,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.8,
            delay: i * 0.1,
            ease: 'power3.out',
            scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 bg-[#000000] border-t border-[#FF6A08]/10 overflow-hidden"
    >
      {/* Decorative background grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 106, 8, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 106, 8, 1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#FF6A08]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="w-full px-6 lg:px-16 max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Side: Contact Info */}
          <div className="flex flex-col fade-up-contact">
            <div className="flex items-center gap-4 mb-4">
              <span className="w-8 h-[2px] bg-[#FF6A08]" />
              <span className="font-exo text-xs font-bold tracking-[0.3em] uppercase text-[#FF6A08]">GET IN TOUCH</span>
            </div>
            <h2 className="font-space text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter mb-8">
              LET'S CONNECT
            </h2>

            <div className="glass-panel p-8 rounded-xl border-l-4 border-l-[#FF6A08] mb-10">
              <h3 className="font-space text-2xl font-bold text-white mb-2 tracking-wide">
                D-ONE STUDIO
              </h3>
              <p className="font-inter text-sm text-gray-400 mb-4">Independent Game Development Studio.</p>
              <div className="font-exo text-xs font-bold tracking-[0.2em] text-[#FF6A08] uppercase">
                Dream • Originality • Next • Execute
              </div>
            </div>

            <p className="font-inter text-gray-400 leading-relaxed max-w-md mb-12">
              Building innovative gaming experiences for the future. Whether you want to collaborate, join the team, or just say hi—we'd love to hear from you.
            </p>

            <div className="space-y-6">
              <div>
                <p className="font-exo text-xs font-bold tracking-widest text-gray-500 uppercase mb-2">Email Us</p>
                <a href="mailto:info@donestudio.in" className="font-space text-xl text-white hover:text-[#FF6A08] transition-colors flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#FF6A08]" />
                  info@donestudio.in
                </a>
              </div>
              
              <div className="pt-6 border-t border-white/5">
                <p className="font-exo text-xs font-bold tracking-widest text-gray-500 uppercase mb-4">Follow Us</p>
                <div className="flex items-center gap-4">
                  {[Twitter, Linkedin, Github, MessageCircle].map((Icon, idx) => (
                    <a key={idx} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-[#FF6A08] hover:bg-[#FF6A08]/10 transition-colors group">
                      <Icon className="w-4 h-4 text-gray-400 group-hover:text-[#FF6A08] transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="fade-up-contact">
            <form className="glass-panel p-8 lg:p-10 rounded-xl flex flex-col gap-6 relative overflow-hidden">
              {/* Form decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#FF6A08]/10 blur-[20px]" />
              
              <div className="flex flex-col gap-2">
                <label className="font-exo text-xs font-bold tracking-widest text-[#FF6A08] uppercase">Your Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 font-inter text-white placeholder:text-gray-600 focus:outline-none focus:border-[#FF6A08] focus:ring-1 focus:ring-[#FF6A08] transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-exo text-xs font-bold tracking-widest text-[#FF6A08] uppercase">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 font-inter text-white placeholder:text-gray-600 focus:outline-none focus:border-[#FF6A08] focus:ring-1 focus:ring-[#FF6A08] transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-exo text-xs font-bold tracking-widest text-[#FF6A08] uppercase">Message</label>
                <textarea 
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 font-inter text-white placeholder:text-gray-600 focus:outline-none focus:border-[#FF6A08] focus:ring-1 focus:ring-[#FF6A08] transition-all resize-none"
                />
              </div>

              <button type="button" className="neon-button group/btn mt-4">
                <span className="flex items-center justify-center gap-2">
                  SUBMIT MESSAGE
                  <Send className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                </span>
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  )
}
