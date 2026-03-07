import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-ink)] text-[var(--color-bg)] pt-24 pb-8 px-6 md:px-12">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
            className="md:col-span-2"
          >
            <img 
              src="https://i.imgur.com/APwgBKz.png" 
              alt="Integra Condominios Logo" 
              className="h-36 md:h-56 object-contain mb-8"
              referrerPolicy="no-referrer"
            />
            <p className="text-sm font-light opacity-60 max-w-sm leading-relaxed">
              Gestionamos condominios con un enfoque integral, maximizando la plusvalía de su inversión y garantizando la tranquilidad operativa y financiera de su comunidad.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 150, damping: 20, delay: 0.1 }}
          >
            <h4 className="text-[10px] font-medium tracking-[0.2em] uppercase opacity-40 mb-6">Oficinas</h4>
            <ul className="space-y-4 text-sm font-light opacity-80">
              {/* Dejado en blanco a petición del usuario */}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 150, damping: 20, delay: 0.2 }}
          >
            <h4 className="text-[10px] font-medium tracking-[0.2em] uppercase opacity-40 mb-6">Social</h4>
            <ul className="space-y-4 text-sm font-light opacity-80">
              {/* Dejado en blanco a petición del usuario */}
            </ul>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", stiffness: 150, damping: 20, delay: 0.3 }}
          className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] tracking-[0.2em] uppercase opacity-40"
        >
          <p>© {new Date().getFullYear()} INTEGRA CONDOMINIOS. TODOS LOS DERECHOS RESERVADOS.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
