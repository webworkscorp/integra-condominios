import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navLinks = ['Nosotros', 'Propuesta', 'Servicios', 'Contacto'];

  return (
    <>
      <motion.nav 
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`sticky top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-3 bg-white/95 backdrop-blur-md border-b-[3px] border-[var(--color-accent)] shadow-lg' : 'h-28 md:h-36 bg-white'}`}
      >


        <div className="relative z-10 max-w-[1800px] mx-auto px-6 md:px-12 flex justify-end items-center h-full">
          {/* Logo in the absolute center of the container */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <a href="#" className="flex items-center">
              <img 
                src="https://i.imgur.com/Dm6GRkv.png" 
                alt="Integra Condominios CR Logo" 
                className={`transition-all duration-500 object-contain drop-shadow-sm ${scrolled ? 'h-20 md:h-24' : 'h-36 md:h-48'}`}
                referrerPolicy="no-referrer"
              />
            </a>
          </div>

          {/* Right: Nav Links + Menu Button */}
          <div className="flex items-center gap-12">
            <div className="hidden md:flex gap-8 items-center">
              {navLinks.map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                  className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>

            <button 
              onClick={() => setIsMenuOpen(true)}
              className={`flex flex-col items-end justify-center gap-1.5 w-10 h-10 group cursor-pointer transition-colors duration-500 text-[var(--color-ink)]`}
            >
              <span className={`w-6 h-[2px] transition-all duration-500 group-hover:w-6 bg-[var(--color-ink)] group-hover:bg-[var(--color-accent)]`}></span>
              <span className={`w-4 h-[2px] transition-all duration-500 group-hover:w-6 bg-[var(--color-ink)] group-hover:bg-[var(--color-accent)]`}></span>
              <span className={`w-2 h-[2px] transition-all duration-500 group-hover:w-6 bg-[var(--color-ink)] group-hover:bg-[var(--color-accent)]`}></span>
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] bg-[var(--color-ink)] text-[var(--color-bg)] flex flex-col justify-center items-center"
          >
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 md:right-12 w-10 h-10 flex items-center justify-center group cursor-pointer"
            >
              <span className="w-8 h-[1.5px] bg-[var(--color-bg)] absolute rotate-45 transition-transform duration-500 group-hover:rotate-[135deg]"></span>
              <span className="w-8 h-[1.5px] bg-[var(--color-bg)] absolute -rotate-45 transition-transform duration-500 group-hover:-rotate-[135deg]"></span>
            </button>
            
            <div className="flex flex-col gap-10 text-center text-3xl md:text-5xl font-medium tracking-tight uppercase">
              {navLinks.map((item, i) => (
                <motion.a 
                  key={item}
                  href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                  className="hover:opacity-50 transition-opacity"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
