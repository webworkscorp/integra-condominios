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
        className={`sticky top-0 left-0 w-full z-50 transition-all duration-500 overflow-hidden ${scrolled ? 'py-2 bg-white/90 backdrop-blur-md border-b border-[var(--color-line)]' : 'h-20 bg-white'}`}
      >
        {/* Centered Image - Maximize size within the fixed header height */}
        {!scrolled && (
          <div className="absolute inset-0 z-0 flex justify-center items-center py-1 px-4">
            <img 
              src="https://i.imgur.com/wGhXR21.jpeg" 
              alt="Header Background" 
              className="h-full w-auto object-contain max-w-full"
              referrerPolicy="no-referrer"
            />
          </div>
        )}

        <div className="relative z-10 max-w-[1800px] mx-auto px-6 md:px-12 flex justify-end items-center h-full">
          <div className={`hidden md:flex gap-12 text-[10px] font-medium tracking-[0.15em] uppercase transition-colors duration-500 text-[var(--color-ink)]`}>
            {navLinks.map((item, i) => (
              <motion.a 
                key={item}
                href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + (i * 0.1), ease: [0.22, 1, 0.36, 1] }}
                className="hover:opacity-50 transition-opacity"
              >
                {item}
              </motion.a>
            ))}
          </div>

          <button 
            onClick={() => setIsMenuOpen(true)}
            className={`ml-12 flex flex-col items-end justify-center gap-1.5 w-10 h-10 group cursor-pointer transition-colors duration-500 text-[var(--color-ink)]`}
          >
            <span className={`w-6 h-[1.5px] transition-all duration-500 group-hover:w-6 bg-[var(--color-ink)]`}></span>
            <span className={`w-4 h-[1.5px] transition-all duration-500 group-hover:w-6 bg-[var(--color-ink)]`}></span>
            <span className={`w-2 h-[1.5px] transition-all duration-500 group-hover:w-6 bg-[var(--color-ink)]`}></span>
          </button>
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
