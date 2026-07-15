import { Send, MapPin, Headphones, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router';

export default function GamicsFooter() {
  return (
    <>
      {/* Newsletter Section */}
      <section className="py-24 bg-background" aria-label="newsletter">
        <div className="container mx-auto px-6 lg:px-16 w-full max-w-7xl">
          <div className="bg-brand-primary/10 rounded-2xl p-8 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8 border border-brand-primary/20">
            <div className="text-center md:text-left">
              <h2 className="text-text-primary text-3xl md:text-4xl font-extrabold uppercase font-orbitron mb-2">
                Our <span className="text-brand-primary">Newsletter</span>
              </h2>
              <p className="text-text-secondary font-inter">Stay updated with our latest digital trends and agency news.</p>
            </div>
            
            <form className="w-full md:max-w-md relative flex group">
              <div className="relative flex-grow">
                <input 
                  type="email" 
                  name="email_address" 
                  aria-label="email" 
                  placeholder="Enter your email..." 
                  required
                  className="w-full bg-card text-text-primary px-6 py-4 outline-none border border-ui-glassBorder focus:border-brand-primary/50 transition-colors transform -skew-x-[10deg] font-inter"
                />
                <Mail className="absolute right-6 top-1/2 -translate-y-1/2 text-text-secondary w-5 h-5 -skew-x-[10deg]" />
              </div>
              
              <button 
                type="submit" 
                className="bg-gradient-button text-white font-bold uppercase px-8 py-4 transform -skew-x-[10deg] hover:-translate-y-1 -ml-4 flex items-center gap-2 transition-all z-10 font-orbitron text-sm shadow-orange-glow border border-transparent"
              >
                <span className="skew-x-[10deg] block">Subscribe</span>
                <Send className="w-4 h-4 skew-x-[10deg]" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-background pt-24 pb-12">
        <div className="container mx-auto px-6 lg:px-16 w-full max-w-7xl">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Brand */}
            <div>
              <a href="#" className="mb-6 inline-block">
                <img src="/logo/logo.png" alt="D-One Studio" className="h-16 md:h-20 w-auto grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
              </a>
              <p className="text-text-secondary text-sm leading-relaxed mb-8 font-inter">
                Building Worlds. Inspiring Players. <br />
                Independent Game Development Studio
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-ui-glass rounded-full flex items-center justify-center flex-shrink-0 border border-ui-glassBorder text-brand-primary shadow-glass">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <address className="text-text-secondary text-sm not-italic font-inter leading-relaxed">
                    Digital First Studio <br/>
                    Global & Remote
                  </address>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-ui-glass rounded-full flex items-center justify-center flex-shrink-0 border border-ui-glassBorder text-brand-primary shadow-glass">
                    <Headphones className="w-5 h-5" />
                  </div>
                  <a href="#" className="text-text-secondary hover:text-brand-primary text-sm transition-colors font-inter">Support Online</a>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-ui-glass rounded-full flex items-center justify-center flex-shrink-0 border border-ui-glassBorder text-brand-primary shadow-glass">
                    <Mail className="w-5 h-5" />
                  </div>
                  <a href="mailto:hello@donestudio.in" className="text-text-secondary hover:text-brand-primary text-sm transition-colors font-inter">hello@donestudio.in</a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <p className="text-text-primary text-lg font-bold uppercase font-orbitron mb-6">Services</p>
              <ul className="space-y-3">
                {[
                  { name: 'Game Design', path: '/studio' },
                  { name: 'Programming', path: '/studio' },
                  { name: 'Art & Animation', path: '/studio' },
                  { name: 'Audio', path: '/studio' },
                  { name: 'Multiplayer Systems', path: '/studio' }
                ].map(item => (
                  <li key={item.name}>
                    <Link to={item.path} className="text-text-secondary hover:text-brand-primary text-sm transition-colors font-inter block">{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <p className="text-text-primary text-lg font-bold uppercase font-orbitron mb-6">Company</p>
              <ul className="space-y-3">
                {[
                  { name: 'About Us', path: '/about' },
                  { name: 'Studio', path: '/studio' },
                  { name: 'Careers', path: '/careers' },
                  { name: 'Founder', path: '/founder' },
                  { name: 'Contact', path: '/contact' }
                ].map(item => (
                  <li key={item.name}>
                    <Link to={item.path} className="text-text-secondary hover:text-brand-primary text-sm transition-colors font-inter block">{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <p className="text-text-primary text-lg font-bold uppercase font-orbitron mb-6">Follow Us</p>
              <ul className="flex flex-wrap gap-3">
                <li>
                  <a href="#" className="w-10 h-10 bg-card hover:bg-brand-primary text-text-primary hover:text-white rounded flex items-center justify-center transition-colors border border-ui-border">
                    <Facebook className="w-5 h-5" />
                  </a>
                </li>
                <li>
                  <a href="#" className="w-10 h-10 bg-card hover:bg-brand-primary text-text-primary hover:text-white rounded flex items-center justify-center transition-colors border border-ui-border">
                    <Twitter className="w-5 h-5" />
                  </a>
                </li>
                <li>
                  <a href="#" className="w-10 h-10 bg-card hover:bg-brand-primary text-text-primary hover:text-white rounded flex items-center justify-center transition-colors border border-ui-border">
                    <Instagram className="w-5 h-5" />
                  </a>
                </li>
                <li>
                  <a href="#" className="w-10 h-10 bg-card hover:bg-brand-primary text-text-primary hover:text-white rounded flex items-center justify-center transition-colors border border-ui-border">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </li>
              </ul>
            </div>

          </div>

          <div className="border-t border-ui-border pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-text-muted text-sm font-inter">
              &copy; 2026 D-One Studio. All Rights Reserved.
            </p>
            <p className="text-text-muted text-sm font-inter">
              Designed by <span className="text-brand-primary font-medium">Fairoz Faisal</span>
            </p>
          </div>

        </div>
      </footer>
    </>
  );
}
