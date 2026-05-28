// File: src/components/MobileStickyCTA.tsx
import { useEffect, useState } from 'react';

const MobileStickyCTA = () => {
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) return;
      const currentScroll = window.scrollY;
      if (currentScroll > lastScrollY && currentScroll > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = currentScroll;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 w-full bg-ivory/95 backdrop-blur-md border-t border-champagne py-4 px-6 z-40 transition-transform duration-500 md:hidden ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <a
        href="https://wa.me/6281234567890?text=Halo%20saya%20ingin%20konsultasi%20gaun%20pengantin"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full bg-warm-black text-ivory text-center py-3 text-sm uppercase tracking-wider font-medium"
      >
        ✦ Book Exclusive Appointment ✦
      </a>
    </div>
  );
};

export default MobileStickyCTA;