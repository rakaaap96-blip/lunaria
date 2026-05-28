import { useEffect, useRef } from 'react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, idx) => {
              setTimeout(() => el.classList.add('visible'), idx * 150);
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);

    // Parallax effect (opsional)
    const handleScroll = () => {
      if (!sectionRef.current || !imageRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollY = window.scrollY;
      const sectionTop = rect.top + scrollY;
      const relativeScroll = scrollY - sectionTop;
      const translateY = relativeScroll * 0.15;
      const clamped = Math.min(Math.max(translateY, -80), 80);
      imageRef.current.style.transform = `translateY(${clamped}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-28 md:py-36 bg-pearl overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="reveal">
              {/* ✅ Perbaikan kontras: text-gold-soft → text-warm-black/70 */}
              <span className="text-warm-black/70 font-serif text-sm tracking-[0.2em] uppercase">Philosophy</span>
              <h2 className="text-4xl md:text-5xl font-serif font-light text-warm-black mt-4 leading-tight">
                Where Poetry<br />Meets Couture
              </h2>
            </div>
            <div className="reveal">
              <p className="text-charcoal/70 leading-relaxed font-light">
                LUNARIA was born from the desire to honor timeless femininity. Every gown is sketched in our Jakarta atelier, 
                then hand-embroidered using French laces and Italian silks. We believe a wedding dress must feel like a second skin: 
                weightless, fluid, and deeply personal.
              </p>
            </div>
            <div className="reveal">
              <p className="text-charcoal/70 leading-relaxed font-light">
                Our founder, Luna Ayudia, reimagines bridal traditions with a contemporary soul — resulting in heirloom pieces 
                that transcend seasons. We create for the bride who seeks quiet luxury and a silhouette that moves with her.
              </p>
            </div>
            <div className="reveal pt-4">
              <a
                href="https://wa.me/6281234567890?text=Halo%20saya%20ingin%20konsultasi%20gaun%20pengantin"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-warm-black border-b border-gold-soft pb-1 text-sm uppercase tracking-wider hover:text-gold-soft transition"
              >
                Meet the Maison
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div ref={imageRef} className="relative reveal transition-transform duration-100 will-change-transform">
            <div className="image-zoom rounded-sm shadow-2xl">
              <img
                src="/assets/lunariaabout.avif"
                alt="Luxury bridal atelier sketching process"
                className="w-full h-auto"
                width="800"
                height="533"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;