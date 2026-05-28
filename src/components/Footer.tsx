import { FaInstagram, FaPinterest, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-ivory border-t border-champagne py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between gap-8 text-center md:text-left">
          <div>
            <span className="text-2xl font-serif tracking-wider text-warm-black">LUNARIA</span>
            {/* ✅ Perbaikan kontras: opacity 50% → 70% */}
            <p className="text-sm text-charcoal/70 mt-2 max-w-xs">Bridal Couture · Atelier Jakarta</p>
          </div>
          <div className="flex gap-6 justify-center">
            <a href="#" aria-label="Instagram" className="text-charcoal/70 hover:text-gold-soft transition"><FaInstagram size={20} /></a>
            <a href="#" aria-label="Pinterest" className="text-charcoal/70 hover:text-gold-soft transition"><FaPinterest size={20} /></a>
            <a href="#" aria-label="Facebook" className="text-charcoal/70 hover:text-gold-soft transition"><FaFacebookF size={20} /></a>
          </div>
          <div className="text-sm text-charcoal/70">
            <p>© 2025 LUNARIA — All rights reserved.</p>
            <p className="mt-1">Elegance is an attitude.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;