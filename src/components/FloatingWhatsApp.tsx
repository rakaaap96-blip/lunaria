import { FaWhatsapp } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const FloatingWhatsApp = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = 0;

  // Sembunyikan saat scroll ke bawah (lebih elegant)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
    >
      {/* Tooltip (desktop only) */}
      {isHovered && (
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 hidden md:block whitespace-nowrap bg-warm-black/80 backdrop-blur-sm text-ivory text-xs py-1.5 px-3 rounded-full font-sans tracking-wide">
          Chat with us
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-warm-black/80"></div>
        </div>
      )}

      {/* Tombol WhatsApp Premium */}
      <a
        href="https://wa.me/6281234567890?text=Halo%20saya%20ingin%20konsultasi%20gaun%20pengantin"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-gold-soft to-champagne shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Chat via WhatsApp"
        style={{
          boxShadow: '0 8px 20px rgba(198, 168, 127, 0.3)',
        }}
      >
        <FaWhatsapp className="text-2xl md:text-3xl text-[#075E54] transition-transform duration-300 group-hover:scale-105" />
      </a>

      {/* Efek pulse lembut di background (mewah) */}
      <div className="absolute inset-0 rounded-full -z-10 animate-pulse bg-gold-soft/20" style={{ animationDuration: '2s' }}></div>
    </div>
  );
};

export default FloatingWhatsApp;