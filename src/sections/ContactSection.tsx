import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    agreed: false,
  })

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-form',
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for reaching out! D-ONE Studio will get back to you soon.')
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 bg-black"
    >
      <div className="w-full px-6 lg:px-16">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="section-label justify-center mb-4">
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="font-orbitron text-3xl lg:text-5xl font-bold">
            CONTACT D-ONE
          </h2>
          <p className="font-inter text-gray-muted text-sm mt-4 max-w-xl mx-auto">
            Have a project in mind? Want to collaborate? We'd love to hear from you.
          </p>
        </div>

        {/* Form */}
        <div className="contact-form max-w-2xl mx-auto opacity-0">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="w-full px-5 py-4 bg-white/5 border border-gray-800 rounded-xl font-inter text-sm text-white placeholder-gray-500 focus:border-done focus:outline-none focus:ring-1 focus:ring-done/30 transition-all"
              />
              <input
                type="text"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="w-full px-5 py-4 bg-white/5 border border-gray-800 rounded-xl font-inter text-sm text-white placeholder-gray-500 focus:border-done focus:outline-none focus:ring-1 focus:ring-done/30 transition-all"
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-5 py-4 bg-white/5 border border-gray-800 rounded-xl font-inter text-sm text-white placeholder-gray-500 focus:border-done focus:outline-none focus:ring-1 focus:ring-done/30 transition-all"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-5 py-4 bg-white/5 border border-gray-800 rounded-xl font-inter text-sm text-white placeholder-gray-500 focus:border-done focus:outline-none focus:ring-1 focus:ring-done/30 transition-all resize-none"
            />
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, agreed: !formData.agreed })}
                className={`w-5 h-5 rounded border flex items-center justify-center transition-all ${formData.agreed ? 'bg-done border-done' : 'border-gray-700'}`}
              >
                {formData.agreed && (
                  <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
              <span className="font-inter text-xs text-gray-muted">
                I agree to the terms and conditions
              </span>
            </div>
            <button type="submit" className="neon-button">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
