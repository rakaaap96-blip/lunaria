// File: src/sections/ContactSection.tsx
import { useEffect, useRef } from 'react';
import { FiCalendar, FiMapPin, FiMail } from 'react-icons/fi';

const ContactSection = () => {
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

  return (
    <section id="contact" ref={sectionRef} className="py-28 bg-warm-black text-ivory">
      <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
        <div className="reveal">
          <span className="text-gold-soft font-serif text-sm tracking-[0.3em] uppercase">Begin your story</span>
          <h2 className="text-4xl md:text-5xl font-serif font-light mt-4 leading-tight">
            Awaited Moments,<br />Tailored For You
          </h2>
          <div className="w-20 h-px bg-gold-soft mx-auto my-8"></div>
          <p className="text-ivory/70 font-light max-w-xl mx-auto">
            Book an exclusive appointment to explore our collection or start your bespoke journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16 reveal">
          <div className="flex flex-col items-center gap-3">
            <FiCalendar className="text-3xl text-gold-soft" />
            <p className="font-serif text-lg">By Appointment Only</p>
            <span className="text-sm text-ivory/60">Tue–Sat, 10am – 6pm</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <FiMapPin className="text-3xl text-gold-soft" />
            <p className="font-serif text-lg">Menteng, Jakarta</p>
            <span className="text-sm text-ivory/60">Private Atelier</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <FiMail className="text-3xl text-gold-soft" />
            <p className="font-serif text-lg">bridal@lunaria.com</p>
            <span className="text-sm text-ivory/60">Response within 24h</span>
          </div>
        </div>

        <div className="mt-12 reveal">
          <a
            href="https://wa.me/6281234567890?text=Halo%20saya%20ingin%20konsultasi%20gaun%20pengantin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-gold-soft text-warm-black text-sm uppercase tracking-wider font-medium hover:bg-ivory transition-all duration-300"
          >
            Book Your Bridal Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;