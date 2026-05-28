import { useEffect, useRef, useState } from 'react';
import { collections } from '../data/collections';
import { FiArrowRight } from 'react-icons/fi';

const CollectionsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'));
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="collections" ref={sectionRef} className="py-28 md:py-36 bg-ivory">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-20 reveal">
          <span className="text-gold-soft font-serif text-sm tracking-[0.3em] uppercase">The Collection</span>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-warm-black mt-3 leading-tight">
            Signature Silhouettes
          </h2>
          <div className="w-16 h-px bg-gold-soft mx-auto mt-6 mb-6"></div>
          <p className="text-charcoal/60 font-light">
            Each gown is named after a celestial story. Made-to-order with 6–8 months craftsmanship.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {collections.map((item, idx) => (
            <div
              key={item.id}
              className={`group reveal transition-all duration-500 delay-${idx * 100} hover:shadow-xl hover:shadow-gold-soft/10 rounded-sm bg-ivory`}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="image-zoom bg-champagne rounded-sm overflow-hidden mb-5">
                <img
                  src={hoveredId === item.id ? item.hoverImage : item.image}
                  alt={item.name}
                  className="w-full h-[460px] object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                  width="800"
                  height="460"
                />
              </div>
              <div className="flex justify-between items-baseline px-1 pb-4">
                <div>
                  <h3 className="text-2xl font-serif font-medium text-warm-black transition-colors duration-300 group-hover:text-gold-soft">
                    {item.name}
                  </h3>
                  <p className="text-charcoal/60 text-sm mt-1 font-light tracking-wide transition-colors duration-300 group-hover:text-charcoal/80">
                    {item.description}
                  </p>
                </div>
                <a
                  href="https://wa.me/6281234567890?text=Halo%20saya%20ingin%20konsultasi%20gaun%20pengantin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-soft hover:text-warm-black transition-all duration-300 group-hover:translate-x-1"
                  aria-label="Inquire about this gown"
                >
                  <FiArrowRight className="text-xl" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 reveal">
          <a
            href="https://wa.me/6281234567890?text=Halo%20saya%20ingin%20konsultasi%20gaun%20pengantin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border border-gold-soft text-gold-soft hover:bg-gold-soft hover:text-ivory transition-all duration-300 text-sm uppercase tracking-wider"
          >
            Request Lookbook
          </a>
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;