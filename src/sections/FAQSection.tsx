import { useState, useEffect, useRef } from 'react';
import { faqData } from '../data/faq';
import { FiChevronDown } from 'react-icons/fi';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="faq" ref={sectionRef} className="py-28 md:py-36 bg-pearl">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl">
        <div className="text-center reveal">
          <span className="text-gold-soft font-serif text-sm tracking-[0.3em] uppercase">Guidance</span>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-warm-black mt-2">Cherished Inquiries</h2>
          <div className="w-16 h-px bg-gold-soft mx-auto my-6"></div>
        </div>

        <div className="mt-12 space-y-4">
          {faqData.map((faq, idx) => (
            <div key={idx} className="reveal border-b border-champagne pb-4">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="flex justify-between items-center w-full text-left py-4 group"
                aria-expanded={openIndex === idx}
              >
                <span className="font-serif text-xl text-warm-black group-hover:text-gold-soft transition">
                  {faq.question}
                </span>
                <FiChevronDown
                  className={`text-gold-soft transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === idx ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-warm-black/75 font-light leading-relaxed pb-2">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 reveal">
          <a
            href="https://wa.me/6281234567890?text=Halo%20saya%20ingin%20konsultasi%20gaun%20pengantin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 border border-gold-soft text-gold-soft text-sm uppercase tracking-wider hover:bg-gold-soft hover:text-ivory transition"
          >
            Still have questions? Chat with us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;