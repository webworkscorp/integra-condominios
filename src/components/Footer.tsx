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
              alt="Integra condominios CR Logo" 
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
              <li>
                <a href="tel:+50686018862" className="hover:text-white transition-colors">
                  Tel: +506 8601-8862
                </a>
              </li>
              <li>
                <a href="mailto:integracondominiosgen@gmail.com" className="hover:text-white transition-colors">
                  integracondominiosgen@gmail.com
                </a>
              </li>
              <li className="pt-2 opacity-60">
                La Guácima, Alajuela, Costa Rica
              </li>
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
              <li>
                <a href="https://www.facebook.com/cuidamosapersonas/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </a>
              </li>
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
          <p>© {new Date().getFullYear()} INTEGRA CONDOMINIOS CR. TODOS LOS DERECHOS RESERVADOS.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
