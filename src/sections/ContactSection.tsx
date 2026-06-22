import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Mail, MessageSquare, Twitter, DiscIcon as Discord, Linkedin } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-element',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for reaching out! D-ONE Studio will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 bg-[#030303]"
    >
      <div className="w-full px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left: Branding & Info */}
          <div className="contact-element opacity-0">
            <div className="section-label mb-6">
              <span>GET IN TOUCH</span>
            </div>
            <h2 className="font-orbitron text-4xl lg:text-6xl font-black mb-6">
              LET'S <span className="text-done">CONNECT</span>
            </h2>
            
            <div className="space-y-6 mb-12">
              <h3 className="font-orbitron text-xl font-bold text-white">D-ONE STUDIO</h3>
              <p className="font-inter text-gray-400 text-base leading-relaxed max-w-md">
                Independent Game Development Studio.<br/>
                <span className="text-white font-medium mt-2 block">Dream • Originality • Next • Execute</span>
              </p>
              <p className="font-inter text-gray-500 text-sm max-w-md">
                Building innovative gaming experiences for the future. Whether you want to collaborate, join the team, or just say hi—we'd love to hear from you.
              </p>
            </div>

            {/* Email Section */}
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-done" />
              </div>
              <div>
                <span className="block font-inter text-xs text-gray-500 uppercase tracking-widest mb-1">Email Us</span>
                <a href="mailto:hello@d-one.studio" className="font-orbitron text-white font-bold hover:text-done transition-colors">hello@d-one.studio</a>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <span className="block font-inter text-xs text-gray-500 uppercase tracking-widest mb-4">Follow Us</span>
              <div className="flex items-center gap-4">
                {[Twitter, Discord, Linkedin, MessageSquare].map((Icon, i) => (
                  <button key={i} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-done hover:text-black hover:border-done transition-all duration-300">
                    <Icon className="w-4 h-4" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="contact-element opacity-0">
            <div className="glass-panel p-8 lg:p-10 rounded-3xl border-t-4 border-t-[#fd5702]">
              <h3 className="font-orbitron text-2xl font-bold text-white mb-8">SEND A MESSAGE</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-inter text-xs text-gray-400 uppercase tracking-wider mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-4 bg-[#030303] border border-white/10 rounded-xl font-inter text-sm text-white placeholder-gray-600 focus:border-done focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block font-inter text-xs text-gray-400 uppercase tracking-wider mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-4 bg-[#030303] border border-white/10 rounded-xl font-inter text-sm text-white placeholder-gray-600 focus:border-done focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block font-inter text-xs text-gray-400 uppercase tracking-wider mb-2">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-5 py-4 bg-[#030303] border border-white/10 rounded-xl font-inter text-sm text-white placeholder-gray-600 focus:border-done focus:outline-none transition-colors resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <button type="submit" className="neon-button w-full">
                  SUBMIT MESSAGE
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
