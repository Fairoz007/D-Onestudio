
import { User, Calendar, ChevronRight } from 'lucide-react';

export default function GamicsBlogSection() {
  const posts = [
    {
      id: 1,
      image: '/gamics/blog-1.jpg',
      author: 'Fairoz Faisal',
      date: 'September 19, 2024',
      title: 'The Future of Cloud Native Applications',
      excerpt: 'Discover how modern containerization and serverless architectures are reshaping the digital landscape.'
    },
    {
      id: 2,
      image: '/gamics/blog-2.jpg',
      author: 'Admin',
      date: 'October 12, 2024',
      title: 'Building Engaging UI/UX in 2025',
      excerpt: 'Key trends in user interface design that prioritize both aesthetics and accessible functionality.'
    },
    {
      id: 3,
      image: '/gamics/blog-3.jpg',
      author: 'Tech Team',
      date: 'November 05, 2024',
      title: 'Optimizing Next.js for Global Scale',
      excerpt: 'A technical deep-dive into edge rendering and caching strategies for enterprise platforms.',
      category: 'Dev'
    }
  ];

  return (
    <section className="py-24 bg-background" id="blog" aria-label="blog">
      <div className="container mx-auto px-6 lg:px-16 w-full max-w-7xl">
        
        <div className="relative text-center mb-16">
          <p className="text-brand-primary text-sm font-bold uppercase tracking-[0.3em] font-inter mb-4">
            Insights
          </p>
          <h2 className="text-text-primary text-4xl lg:text-5xl font-extrabold uppercase font-orbitron mb-4">
            Latest <span className="text-brand-primary">News</span>
          </h2>
          <img src="/gamics/title-underline.png" alt="underline" className="mx-auto" />
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <li key={post.id}>
              <div className="bg-card rounded-lg overflow-hidden group shadow-lg border border-ui-glassBorder hover:border-brand-primary/30 transition-all duration-300 h-full flex flex-col">
                
                <figure className="relative overflow-hidden aspect-[400/250] bg-abyss">
                  <img 
                    src={post.image} 
                    loading="lazy"
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute top-6 left-6 bg-brand-primary text-abyss text-xs font-bold uppercase px-3 py-1 -skew-x-[10deg] shadow-lg">
                    <span className="skew-x-[10deg] block">{post.category}</span>
                  </div>
                </figure>

                <div className="p-8 flex-grow flex flex-col relative">
                  
                  <div className="flex flex-wrap items-center gap-4 text-text-secondary text-xs font-semibold uppercase font-inter tracking-wider mb-4">
                    <span className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-brand-primary" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-brand-primary" />
                      {post.date}
                    </span>
                  </div>

                  <h3 className="text-text-primary text-2xl font-bold uppercase font-orbitron mb-6 transition-colors group-hover:text-brand-primary leading-tight">
                    <a href="#">{post.title}</a>
                  </h3>

                  <div className="mt-auto pt-6 border-t border-ui-border">
                    <a 
                      href="#" 
                      className="inline-flex items-center gap-2 text-brand-primary font-bold uppercase font-inter text-sm tracking-wider hover:text-brand-secondary transition-colors"
                    >
                      Read More <ChevronRight className="w-4 h-4" />
                    </a>
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
