import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Atelier', href: '#atelier' },
  { name: 'Collections', href: '#collections' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Enquiry', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ivory/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-4 md:py-5 flex items-center justify-between">
        {/* Logo + Teks LUNARIA */}
        <a href="#" className="relative z-20 group flex-shrink-0 flex items-center gap-3" aria-label="LUNARIA Home">
          <img
            src="/assets/logo.svg"          // ganti dengan file logo asli
            alt="LUNARIA Bridal Couture"
            className="h-8 md:h-10 w-auto object-contain transition-all duration-300 group-hover:opacity-80"
            width="40"                       // ← ukuran asli gambar (lebar)
            height="40"                      // ← ukuran asli gambar (tinggi)
          />
          <span className="text-xl md:text-2xl lg:text-3xl font-serif font-light tracking-[0.2em] text-warm-black whitespace-nowrap">
            LUNARIA
          </span>
          <span className="absolute -bottom-1 left-0 w-8 h-px bg-gold-soft group-hover:w-full transition-all duration-500"></span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-8 xl:gap-10" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs lg:text-sm uppercase tracking-wider font-sans font-semibold text-warm-black hover:text-gold-soft transition-colors duration-300 whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/6281234567890?text=Halo%20saya%20ingin%20konsultasi%20gaun%20pengantin"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 lg:px-5 py-1.5 lg:py-2 border border-warm-black text-warm-black hover:bg-gold-soft hover:border-gold-soft hover:text-ivory transition-all duration-300 text-xs lg:text-sm uppercase tracking-wider font-medium whitespace-nowrap"
          >
            Appointment
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative z-20 text-2xl text-warm-black focus:outline-none"
          aria-expanded={isOpen}
          aria-label="Menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Mobile Navigation Overlay */}
        <div
          className={`fixed inset-0 bg-ivory/98 backdrop-blur-md z-10 transition-all duration-500 md:hidden ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-serif text-warm-black hover:text-gold-soft transition"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/6281234567890?text=Halo%20saya%20ingin%20konsultasi%20gaun%20pengantin"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-6 px-8 py-3 border border-warm-black text-warm-black hover:bg-warm-black hover:text-ivory transition text-lg"
            >
              Book Consultation
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;