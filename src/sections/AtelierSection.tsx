import { useEffect, useRef } from 'react';

const AtelierSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const reveals = entry.target.querySelectorAll('.reveal');
            reveals.forEach((el, idx) => {
              setTimeout(() => {
                el.classList.add('visible');
              }, idx * 120);
            });
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="atelier" ref={sectionRef} className="py-28 md:py-36 bg-ivory overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 reveal opacity-0 translate-y-8 transition-all duration-700 ease-out">
            <div className="image-zoom rounded-sm shadow-xl overflow-hidden group">
              <img
                src="/assets/lunariaatelier.avif"
                alt="Atelier detail and hand embroidery"
                className="w-full h-auto transition-transform duration-[800ms] ease-out group-hover:scale-105 will-change-transform"
                loading="lazy"
                width="800"
                height="600"
              />
            </div>
          </div>

          <div className="order-1 md:order-2 space-y-6">
            <div className="reveal opacity-0 translate-y-8 transition-all duration-700 ease-out">
              {/* ✅ Perbaikan kontras: text-gold-soft → text-warm-black/70 */}
              <span className="text-warm-black/70 font-serif text-sm tracking-[0.2em] uppercase">The Experience</span>
              <h2 className="text-4xl md:text-5xl font-serif font-light text-warm-black mt-4 leading-tight">
                Bespoke Bridal Journey
              </h2>
            </div>

            <div className="reveal opacity-0 translate-y-8 transition-all duration-700 ease-out delay-100">
              <p className="text-warm-black/80 font-light leading-relaxed">
                Your appointment begins with a ritual of tea and conversation. Our bridal consultant guides you through fabrics, 
                silhouettes, and customizations — from subtle alterations to fully bespoke creations. Every fitting feels like an intimate ceremony.
              </p>
            </div>

            <div className="reveal opacity-0 translate-y-8 transition-all duration-700 ease-out delay-200">
              <ul className="space-y-3 text-warm-black/80 font-light">
                <li className="flex gap-3 items-start transition-all duration-300 hover:translate-x-1 hover:text-gold-soft">
                  ✦ Private atelier in Jakarta Menteng
                </li>
                <li className="flex gap-3 items-start transition-all duration-300 hover:translate-x-1 hover:text-gold-soft">
                  ✦ Personalized sketches within 2 weeks
                </li>
                <li className="flex gap-3 items-start transition-all duration-300 hover:translate-x-1 hover:text-gold-soft">
                  ✦ Sustainable sourcing & heirloom preservation
                </li>
              </ul>
            </div>

            <div className="reveal opacity-0 translate-y-8 transition-all duration-700 ease-out delay-300">
              <a
                href="https://wa.me/6281234567890?text=Halo%20saya%20ingin%20konsultasi%20gaun%20pengantin"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block mt-4 px-8 py-3 bg-warm-black text-ivory text-sm uppercase tracking-wider overflow-hidden group transition-all duration-300 hover:bg-gold-soft hover:shadow-lg hover:shadow-gold-soft/20"
              >
                <span className="relative z-10">Schedule Private Visit</span>
                <span className="absolute inset-0 bg-gradient-to-r from-gold-soft/0 via-gold-soft/30 to-gold-soft/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AtelierSection;