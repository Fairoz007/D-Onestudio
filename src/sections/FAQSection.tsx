import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ChevronDown } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const faqs = [
  {
    question: 'WHAT IS D-ONE STUDIO?',
    answer: 'D-ONE Studio is an independent game development studio focused on creating immersive, innovative, and player-first gaming experiences. The name represents our core philosophy: Dream, Originality, Next, and Execute.',
  },
  {
    question: 'WHAT TYPES OF GAMES DO YOU DEVELOP?',
    answer: 'We develop a wide range of titles including multiplayer battle arenas, action RPGs, and real-time strategy games across PC, console, and mobile platforms.',
  },
  {
    question: 'WHAT TECHNOLOGIES DO YOU USE?',
    answer: 'Our tech stack is built on cutting-edge engines like Unreal Engine 5 and Unity, backed by robust cloud infrastructure, Node.js, and custom real-time networking solutions.',
  },
  {
    question: 'CAN I PLAY YOUR GAMES?',
    answer: 'Some of our titles are currently in live beta testing, while others like PROJECT NEON are in active development. Stay tuned to our community channels for early access announcements.',
  },
  {
    question: 'DO YOU WORK WITH OTHER STUDIOS?',
    answer: 'Yes, we frequently collaborate with other AAA studios and indie developers for co-development, technology sharing, and publishing partnerships.',
  },
  {
    question: 'HOW CAN I GET IN TOUCH?',
    answer: 'You can reach out to us via the contact form below or email us directly at hello@d-one.studio. For business inquiries, please select the appropriate subject in the form.',
  },
  {
    question: 'WHAT MAKES D-ONE DIFFERENT?',
    answer: 'Our relentless focus on the player experience, combined with our D-O-N-E philosophy, ensures we never compromise on quality, originality, or technical execution.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.faq-item',
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.5, stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 bg-[#000000] border-t border-[#FF6A08]/10"
    >
      <div className="w-full px-6 lg:px-16 max-w-4xl mx-auto relative z-10">
        
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-8 h-[2px] bg-[#FF6A08]" />
            <span className="font-exo text-xs font-bold tracking-[0.3em] uppercase text-[#FF6A08]">FAQ</span>
            <span className="w-8 h-[2px] bg-[#FF6A08]" />
          </div>
          <h2 className="font-space text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter">
            FREQUENTLY ASKED
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className={`faq-item glass-panel border transition-all duration-300 overflow-hidden ${
                  isOpen ? 'border-[#FF6A08]/50 bg-[#FF6A08]/5' : 'border-white/5 hover:border-[#FF6A08]/30'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left group"
                >
                  <span className={`font-exo text-sm font-bold tracking-widest uppercase transition-colors ${
                    isOpen ? 'text-[#FF6A08]' : 'text-gray-300 group-hover:text-white'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                    isOpen ? 'border-[#FF6A08] bg-[#FF6A08]/10' : 'border-white/10 group-hover:border-[#FF6A08]/50'
                  }`}>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                      isOpen ? 'text-[#FF6A08] rotate-180' : 'text-gray-500 group-hover:text-[#FF6A08]'
                    }`} />
                  </div>
                </button>
                
                <div
                  className={`px-6 transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-48 opacity-100 pb-6' : 'max-h-0 opacity-0 pb-0'
                  }`}
                >
                  <p className="font-inter text-sm text-gray-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
        
      </div>
    </section>
  )
}
