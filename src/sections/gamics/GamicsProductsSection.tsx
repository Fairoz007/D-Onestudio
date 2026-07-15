
import { ShoppingCart } from 'lucide-react';

export default function GamicsProductsSection() {
  const products = [
    {
      id: 1,
      image: '/gamics/shop-img-1.jpg',
      category: 'UI Kit',
      title: 'Premium Web Template',
      price: '$49.00'
    },
    {
      id: 2,
      image: '/gamics/shop-img-2.jpg',
      category: 'App Design',
      title: 'Mobile UI Components',
      price: '$39.00'
    },
    {
      id: 3,
      image: '/gamics/shop-img-3.jpg',
      category: 'Graphics',
      title: '3D Illustration Pack',
      price: '$29.00'
    },
    {
      id: 4,
      image: '/gamics/shop-img-4.jpg',
      category: 'Admin',
      title: 'Dashboard React Template',
      price: '$59.00'
    }
  ];

  return (
    <section 
      className="py-24 bg-cover bg-center bg-no-repeat bg-background-secondary border-t border-ui-border" 
      id="shop" 
      aria-label="shop"
      style={{ backgroundImage: 'url(/gamics/shop-bg.jpg)' }}
    >
      <div className="container mx-auto px-6 lg:px-16 w-full max-w-7xl">
        
        <div className="relative text-center mb-16">
          <h2 className="text-text-primary text-4xl lg:text-5xl font-extrabold uppercase font-orbitron mb-4">
            Digital Product <span className="text-brand-primary">Corner</span>
          </h2>
          <img src="/gamics/title-underline.png" alt="underline" className="mx-auto" />
        </div>

        <p className="text-text-secondary text-base font-medium max-w-2xl mx-auto text-center leading-relaxed font-inter mb-16">
          Download premium UI kits, templates, and design assets crafted by D-One Studio to accelerate your creative workflow.
        </p>

        <ul className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4">
          {products.map((product) => (
            <li key={product.id} className="min-w-[85%] md:min-w-[calc(50%-16px)] lg:min-w-[calc(25%-24px)] snap-start">
              <div className="bg-card rounded-lg shadow-lg overflow-hidden h-full flex flex-col group border border-ui-glassBorder hover:border-brand-primary/30 hover:shadow-orange-glow transition-all duration-300">
                
                <figure className="aspect-[300/260] w-full bg-abyss relative overflow-hidden">
                  <img 
                    src={product.image} 
                    width="300" 
                    height="260" 
                    loading="lazy"
                    alt={product.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                </figure>

                <div className="p-6 flex-grow flex flex-col relative">
                  
                  {/* Category Badge */}
                  <div className="absolute top-0 right-6 -translate-y-1/2 bg-brand-primary text-abyss text-xs font-bold uppercase px-3 py-1 -skew-x-[10deg] shadow-lg">
                    <span className="skew-x-[10deg] block">{product.category}</span>
                  </div>

                  <h3 className="text-text-primary text-xl font-bold font-orbitron mb-4 leading-tight group-hover:text-brand-primary transition-colors">
                    <a href="#">{product.title}</a>
                  </h3>

                  <div className="mt-auto flex items-center justify-between">
                    <p className="text-text-secondary text-lg font-semibold font-inter">{product.price}</p>
                    <button className="bg-ui-glass border border-ui-glassBorder hover:bg-brand-primary text-text-primary hover:text-abyss p-3 rounded transition-colors duration-300 shadow-glass">
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>

                </div>

              </div>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
