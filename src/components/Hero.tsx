import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-110px)] flex flex-col justify-center px-6 md:px-12 py-20 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-zinc-900">
        {/* Background Image Layer */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40" />
        
        {/* Architectural Lines Overlay */}
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(var(--color-line) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        {/* Sophisticated Gradient for Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent z-[2]" />
      </div>

      <div className="relative z-10 max-w-[1800px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 xl:col-span-8">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-10">
                <span className="w-16 h-[2px] bg-[var(--color-accent)]"></span>
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[var(--color-ink)]/60">Liderazgo Inmobiliario</span>
              </div>
              
              <h1 className="text-[12vw] lg:text-[8vw] leading-[0.82] tracking-tighter uppercase font-bold text-[var(--color-ink)] mb-12">
                Gestión<br />
                <span className="text-[var(--color-accent)]">Excepcional</span>
              </h1>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <div className="relative pl-10 border-l-[1px] border-[var(--color-line)]">
                {/* Accent dot on the line */}
                <div className="absolute -left-[3px] top-0 w-[5px] h-[5px] bg-[var(--color-accent)] rounded-full" />
                
                <p className="text-xl md:text-2xl font-light leading-relaxed text-[var(--color-ink)]/90 mb-12">
                  Trascendemos la administración tradicional. Diseñamos experiencias residenciales impecables mediante rigor financiero, tecnología y un servicio de guante blanco.
                </p>
                
                <div className="flex flex-wrap items-center gap-10">
                  <a 
                    href="#propuesta" 
                    className="group relative inline-flex items-center gap-6 px-12 py-6 bg-[var(--color-ink)] text-white rounded-full overflow-hidden transition-all duration-500 shadow-xl shadow-[var(--color-ink)]/10"
                  >
                    <span className="relative z-10 text-[10px] font-bold tracking-[0.3em] uppercase">Descubrir más</span>
                    <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-[var(--color-accent)] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  </a>
                  
                  <div className="flex items-center gap-5">
                    <div className="flex -space-x-3">
                      {[
                        "https://i.imgur.com/gbJpb7J.jpeg",
                        "https://i.imgur.com/TTSDt1W.jpeg",
                        "https://i.imgur.com/UrHGU0A.jpeg",
                        "https://i.imgur.com/HYD9Cwv.jpeg"
                      ].map((url, i) => (
                        <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-[var(--color-soft-blue)] flex items-center justify-center overflow-hidden shadow-sm">
                          <img src={url} alt="Condominio" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        </div>
                      ))}
                    </div>
                    <div>
                      <p className="text-[10px] font-bold tracking-widest uppercase text-[var(--color-ink)]">+50 condominios</p>
                      <p className="text-[9px] font-light uppercase opacity-50">En todo el país</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Visual Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex lg:col-span-5 xl:col-span-4 justify-center items-center"
          >
            <div className="relative w-full max-w-sm">
              <img 
                src="https://i.imgur.com/lkvm3Q0.png" 
                alt="Integra Condominios" 
                className="w-full h-auto object-contain drop-shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-[8px] font-bold tracking-[0.4em] uppercase opacity-30">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-4 h-4 opacity-30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
