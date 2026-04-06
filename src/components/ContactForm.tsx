import { motion } from 'motion/react';
import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    details: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Hola Integra Condominios CR, me gustaría solicitar información:
*Nombre:* ${formData.name}
*Consulta:* ${formData.details}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/50686018862?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

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
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-4 text-[var(--color-ink)]">Contáctenos</h2>
          <p className="text-base font-light opacity-80 text-[var(--color-ink)]">Estamos aquí para resolver sus dudas y elevar el estándar de su propiedad.</p>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="space-y-8 bg-white p-8 md:p-12 rounded-[3rem] border-2 border-[var(--color-accent)] shadow-2xl shadow-[var(--color-accent)]/5"
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="name" className="block text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-accent)] mb-3">Nombre</label>
            <input 
              type="text" 
              id="name" 
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-transparent border-b-2 border-[var(--color-line)] py-4 text-lg focus:outline-none focus:border-[var(--color-accent)] transition-colors text-[var(--color-ink)]"
              placeholder="Su nombre completo"
              required
            />
          </div>
          <div>
            <label htmlFor="details" className="block text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-accent)] mb-3">Detalle de la consulta</label>
            <textarea 
              id="details" 
              rows={4}
              value={formData.details}
              onChange={handleChange}
              className="w-full bg-transparent border-b-2 border-[var(--color-line)] py-4 text-lg focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none text-[var(--color-ink)]"
              placeholder="¿En qué podemos ayudarle?"
              required
            ></textarea>
          </div>
          <div className="pt-8 text-center">
            <button 
              type="submit"
              className="px-12 py-5 bg-[var(--color-accent)] text-white rounded-full text-xs font-bold tracking-[0.2em] uppercase hover:scale-105 hover:shadow-xl hover:shadow-[var(--color-accent)]/20 transition-all duration-500"
            >
              Enviar Consulta
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
