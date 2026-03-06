import { motion } from 'motion/react';

export default function ContactForm() {
  return (
    <section className="py-32 px-6 md:px-12 max-w-[1800px] mx-auto border-t border-[var(--color-line)] bg-[var(--color-bg)] text-[var(--color-ink)]" id="contacto">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-medium tracking-tighter uppercase mb-4">Contáctenos</h2>
          <p className="text-base font-light opacity-80">Estamos aquí para resolver sus dudas y elevar el estándar de su propiedad.</p>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="space-y-8"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label htmlFor="name" className="block text-[10px] font-medium tracking-[0.2em] uppercase opacity-60 mb-3">Nombre</label>
            <input 
              type="text" 
              id="name" 
              className="w-full bg-transparent border-b border-[var(--color-line)] py-4 text-lg focus:outline-none focus:border-[var(--color-ink)] transition-colors"
              placeholder="Su nombre completo"
              required
            />
          </div>
          <div>
            <label htmlFor="details" className="block text-[10px] font-medium tracking-[0.2em] uppercase opacity-60 mb-3">Detalle de la consulta</label>
            <textarea 
              id="details" 
              rows={4}
              className="w-full bg-transparent border-b border-[var(--color-line)] py-4 text-lg focus:outline-none focus:border-[var(--color-ink)] transition-colors resize-none"
              placeholder="¿En qué podemos ayudarle?"
              required
            ></textarea>
          </div>
          <div className="pt-8 text-center">
            <button 
              type="submit"
              className="px-12 py-5 bg-[var(--color-ink)] text-[var(--color-bg)] rounded-full text-xs font-medium tracking-[0.2em] uppercase hover:scale-95 transition-transform duration-500"
            >
              Enviar Consulta
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
