import { useEffect, useRef, useState } from 'react';
import { testimonials } from '../data/testimonials';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'));
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const next = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" ref={sectionRef} className="py-28 md:py-36 bg-ivory">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center reveal">
          <span className="text-gold-soft font-serif text-sm tracking-[0.3em] uppercase">Love notes</span>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-warm-black mt-3">Brides' Whispers</h2>
          <div className="w-12 h-px bg-gold-soft mx-auto my-6"></div>
        </div>

        <div className="relative mt-12 w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {testimonials.map((t, idx) => (
              <div key={idx} className="w-full flex-shrink-0 px-4">
                <div className="bg-pearl p-8 md:p-12 shadow-sm">
                  <div className="text-5xl font-serif text-gold-soft/40 mb-4">“</div>
                  <p className="text-charcoal/80 text-lg italic font-light leading-relaxed">{t.quote}</p>
                  <div className="mt-8">
                    <p className="font-serif text-warm-black text-xl">{t.name}</p>
                    {/* ✅ Perbaikan kontras: text-gold-soft → text-warm-black/70 */}
                    <p className="text-warm-black/70 text-sm uppercase tracking-wide mt-1">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-ivory p-2 shadow-md hover:bg-gold-soft/20 transition z-10"
            aria-label="Previous"
          >
            <FiChevronLeft className="text-2xl text-warm-black" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-ivory p-2 shadow-md hover:bg-gold-soft/20 transition z-10"
            aria-label="Next"
          >
            <FiChevronRight className="text-2xl text-warm-black" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;