import { useEffect } from 'react';
import { Mail, Briefcase, Users } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <Helmet>
        <title>Contact Us | D-One Studio</title>
        <meta name="description" content="Get in touch with D-One Studio. Contact us for general inquiries, business partnerships, or career opportunities." />
        <link rel="canonical" href="https://d-onestudio.com/contact" />
      </Helmet>
      <div className="container mx-auto px-6 lg:px-16 max-w-7xl animate-fade-in-up">
        
        {/* Header */}
        <section className="mb-20 text-center max-w-3xl mx-auto">
          <div className="section-label mb-6 justify-center">Contact Us</div>
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase font-orbitron mb-8">
            Let's Build Something <span className="text-brand-primary">Extraordinary</span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed font-inter">
            Whether you're a player, artist, developer, or potential partner, we'd love to hear from you.
          </p>
        </section>

        {/* Contact Methods */}
        <section className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          
          <div className="glass-panel p-10 rounded-2xl text-center card-hover group">
            <div className="w-16 h-16 mx-auto rounded-full bg-brand-primary/10 flex items-center justify-center mb-6 text-brand-primary group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold uppercase font-orbitron mb-4 text-white">General</h3>
            <p className="text-text-secondary font-inter mb-6">For general questions and community inquiries.</p>
            <a href="mailto:hello@donestudio.in" className="text-brand-primary font-space font-bold uppercase tracking-wider hover:text-white transition-colors">
              hello@donestudio.in
            </a>
          </div>

          <div className="glass-panel p-10 rounded-2xl text-center card-hover group">
            <div className="w-16 h-16 mx-auto rounded-full bg-brand-primary/10 flex items-center justify-center mb-6 text-brand-primary group-hover:scale-110 transition-transform duration-300">
              <Briefcase className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold uppercase font-orbitron mb-4 text-white">Business</h3>
            <p className="text-text-secondary font-inter mb-6">For partnerships, press, and business opportunities.</p>
            <a href="mailto:business@donestudio.in" className="text-brand-primary font-space font-bold uppercase tracking-wider hover:text-white transition-colors">
              business@donestudio.in
            </a>
          </div>

          <div className="glass-panel p-10 rounded-2xl text-center card-hover group">
            <div className="w-16 h-16 mx-auto rounded-full bg-brand-primary/10 flex items-center justify-center mb-6 text-brand-primary group-hover:scale-110 transition-transform duration-300">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold uppercase font-orbitron mb-4 text-white">Careers</h3>
            <p className="text-text-secondary font-inter mb-6">For job applications and recruitment inquiries.</p>
            <a href="mailto:careers@donestudio.in" className="text-brand-primary font-space font-bold uppercase tracking-wider hover:text-white transition-colors">
              careers@donestudio.in
            </a>
          </div>

        </section>

      </div>
    </div>
  );
}
