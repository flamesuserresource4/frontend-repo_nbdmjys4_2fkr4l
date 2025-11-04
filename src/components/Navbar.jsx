import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-colors ${
      scrolled ? 'backdrop-blur-md bg-white/10 border-b border-white/10' : 'bg-transparent'
    }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <motion.div
            initial={{ rotate: -10, scale: 0.9 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ type: 'spring', stiffness: 160, damping: 12 }}
            className="w-10 h-10 rounded-full bg-[#036635] shadow-lg shadow-emerald-900/30 grid place-items-center relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            <span className="w-5 h-5 rounded-full bg-cream" />
          </motion.div>
          <div className="leading-tight">
            <span className="block text-sm tracking-widest text-[#D4AF37]">AURORA</span>
            <span className="block font-semibold text-white">Coffee</span>
          </div>
        </a>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white/90 hover:text-[#D4AF37] transition-colors font-medium"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#menu"
          className="hidden sm:inline-flex items-center px-4 py-2 rounded-full bg-[#D4AF37] text-[#3C2F2F] font-semibold shadow-[0_8px_24px_rgba(212,175,55,0.35)] hover:shadow-[0_12px_28px_rgba(212,175,55,0.45)] transition-shadow"
        >
          Explore Menu
        </a>
      </div>
    </div>
  );
}
