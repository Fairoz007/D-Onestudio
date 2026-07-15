import { useEffect } from 'react';
import { Youtube, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="container mx-auto px-6 lg:px-16 max-w-7xl animate-fade-in-up">
        
        {/* Header */}
        <section className="mb-20">
          <div className="section-label mb-6">Development Blog</div>
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase font-orbitron mb-8">
            Follow Our <span className="text-brand-primary">Journey</span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed font-inter max-w-3xl">
            Follow our journey as we document our progress, experiments, technology, and behind-the-scenes development.
          </p>
        </section>

        {/* Topics */}
        <section className="mb-24">
          <h2 className="text-2xl font-bold uppercase font-space tracking-wider mb-8 text-white">
            Topics Include
          </h2>
          <div className="flex flex-wrap gap-4">
            {["Game Development", "Unreal Engine", "Studio Updates", "Concept Art", "Technology", "Dev Logs"].map((topic, idx) => (
              <span key={idx} className="px-6 py-3 rounded-full bg-ui-glass border border-ui-glassBorder text-text-secondary text-sm font-space uppercase tracking-wider hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-colors cursor-pointer">
                {topic}
              </span>
            ))}
          </div>
        </section>

        {/* Community */}
        <section className="glass-panel p-8 md:p-16 rounded-2xl text-center">
          <div className="section-label mb-6 justify-center">Community</div>
          <h2 className="text-3xl md:text-4xl font-bold uppercase font-orbitron mb-6">
            Become Part of Our <span className="text-brand-primary">Growing Community</span>
          </h2>
          <p className="text-text-secondary mb-12 max-w-2xl mx-auto font-inter text-lg">
            Follow our development journey and be among the first to see upcoming announcements.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="flex items-center gap-3 px-8 py-4 bg-[#5865F2]/10 text-[#5865F2] hover:bg-[#5865F2] hover:text-white rounded-xl border border-[#5865F2]/30 transition-all font-space uppercase tracking-wider font-bold">
              Discord
            </a>
            <a href="#" className="flex items-center gap-3 px-8 py-4 bg-[#FF0000]/10 text-[#FF0000] hover:bg-[#FF0000] hover:text-white rounded-xl border border-[#FF0000]/30 transition-all font-space uppercase tracking-wider font-bold">
              <Youtube className="w-5 h-5" /> YouTube
            </a>
            <a href="#" className="flex items-center gap-3 px-8 py-4 bg-white/5 text-white hover:bg-white hover:text-black rounded-xl border border-white/10 transition-all font-space uppercase tracking-wider font-bold">
              <Twitter className="w-5 h-5" /> X (Twitter)
            </a>
            <a href="#" className="flex items-center gap-3 px-8 py-4 bg-[#E1306C]/10 text-[#E1306C] hover:bg-gradient-to-tr hover:from-[#fd5949] hover:to-[#d6249f] hover:text-white rounded-xl border border-[#E1306C]/30 transition-all font-space uppercase tracking-wider font-bold">
              <Instagram className="w-5 h-5" /> Instagram
            </a>
            <a href="#" className="flex items-center gap-3 px-8 py-4 bg-[#0077B5]/10 text-[#0077B5] hover:bg-[#0077B5] hover:text-white rounded-xl border border-[#0077B5]/30 transition-all font-space uppercase tracking-wider font-bold">
              <Linkedin className="w-5 h-5" /> LinkedIn
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
