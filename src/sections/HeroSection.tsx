// File: src/sections/HeroSection.tsx
import { useEffect, useRef } from 'react';
import { FiArrowRight } from 'react-icons/fi';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );
    const revealElements = heroRef.current?.querySelectorAll('.reveal');
    revealElements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero showcase"
    >
      {/* Background Image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/lunariahero.avif"
          alt="Bride in couture wedding gown, soft romantic lighting"
          className="w-full h-full object-cover"  // ← sudah benar
          fetchPriority="high"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ivory/90 via-ivory/30 to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 text-center max-w-4xl">
        <div className="reveal transition-all duration-1000 delay-100">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light text-warm-black leading-[1.1] tracking-wide">
            Whispers of<br />Eternal Bloom
          </h1>
          <div className="w-20 h-px bg-gold-soft mx-auto my-8"></div>
          <p className="text-base md:text-lg text-charcoal/80 max-w-2xl mx-auto font-sans font-light">
            Discover the harmony of French elegance and Indonesian artistry. Each Lunaria gown is a love poem, handcrafted for the modern romantic bride.
          </p>
        </div>

        <div className="reveal transition-all duration-1000 delay-300 flex flex-wrap justify-center gap-6 mt-10">
          <a
            href="https://wa.me/6281234567890?text=Halo%20saya%20ingin%20konsultasi%20gaun%20pengantin"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-warm-black text-ivory px-8 py-4 text-sm uppercase tracking-wider font-medium flex items-center gap-2 hover:bg-gold-soft transition-colors duration-300"
          >
            Private Consultation
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-pulse">
        <div className="w-px h-12 bg-gold-soft/40"></div>
      </div>
    </section>
  );
};

export default HeroSection;