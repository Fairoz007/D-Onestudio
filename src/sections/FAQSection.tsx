import { useState, useEffect, useRef } from 'react'
import { Plus, Minus } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const faqs = [
  { question: 'WHAT IS D-ONE STUDIO?', answer: 'D-ONE Studio is an independent game development studio focused on creating immersive, innovative, and player-first gaming experiences. The name represents our core philosophy: Dream, Originality, Next, and Execute.' },
  { question: 'WHAT TYPES OF GAMES DO YOU DEVELOP?', answer: 'We specialize in multiplayer game systems, web-based games, mobile game development, and community-driven gaming platforms. Our featured project Bingo showcases our real-time multiplayer capabilities.' },
  { question: 'WHAT TECHNOLOGIES DO YOU USE?', answer: 'We develop using modern technologies including Next.js, React, TypeScript, cloud infrastructure, real-time databases, multiplayer architectures, and scalable backend services.' },
  { question: 'CAN I PLAY YOUR GAMES?', answer: 'Yes! Our featured multiplayer Bingo game is available at bingo.fairoz.in. It features real-time gameplay, interactive game rooms, and cross-device compatibility.' },
  { question: 'DO YOU WORK WITH OTHER STUDIOS?', answer: 'D-ONE Studio is open to collaborations with other studios, independent developers, and creative professionals. We believe in the power of community and collective innovation.' },
  { question: 'HOW CAN I GET IN TOUCH?', answer: 'You can reach out to us through the contact form on our website. We welcome inquiries about collaborations, game ideas, and partnership opportunities.' },
  { question: 'WHAT MAKES D-ONE DIFFERENT?', answer: 'Our D-O-N-E philosophy sets us apart: every project starts with a Dream, demands Originality, embraces the Next frontier of technology, and is brought to life through disciplined Execution.' },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.faq-item').forEach((item, i) => {
        gsap.fromTo(item,
          { opacity: 0, y: 20 },
          {
            opacity: 1, y: 0, duration: 0.5,
            delay: i * 0.06,
            ease: 'power3.out',
            scrollTrigger: { trigger: item, start: 'top 90%' },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 bg-black overflow-hidden"
    >
      <div className="w-full px-6 lg:px-16 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="section-label justify-center mb-4">
            <span>FAQ</span>
          </div>
          <h2 className="font-orbitron text-3xl lg:text-5xl font-bold">FREQUENTLY ASKED</h2>
        </div>

        {/* FAQ list */}
        <div className="max-w-3xl mx-auto space-y-0">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item opacity-0">
              <div className="border-b border-gray-800">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between py-5 text-left group"
                >
                  <div className="flex items-center gap-4">
                    <span className={`w-2 h-2 rounded-full transition-colors ${openIndex === index ? 'bg-done pulse-dot' : 'bg-gray-700'}`} />
                    <span className={`font-orbitron text-sm lg:text-base font-bold transition-colors ${openIndex === index ? 'text-done' : 'text-white group-hover:text-done'}`}>
                      {faq.question}
                    </span>
                  </div>
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${openIndex === index ? 'border-done bg-done/10' : 'border-gray-700'}`}>
                    {openIndex === index ? (
                      <Minus className="w-4 h-4 text-done" />
                    ) : (
                      <Plus className="w-4 h-4 text-gray-500" />
                    )}
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="font-inter text-sm text-gray-muted leading-relaxed pb-5 pl-6">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
