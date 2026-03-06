import { motion } from 'motion/react';

const services = [
  { num: "01", title: "Contabilidad de Condominios", desc: "Gestión de cuotas de mantenimiento, fondos de reserva y estados financieros claros. Transparencia total para cuidar el patrimonio." },
  { num: "02", title: "Cobranza Preventiva", desc: "Gestión humana y legal de la morosidad para asegurar la liquidez de la comunidad." },
  { num: "03", title: "Consultoría Legal", desc: "Asegura que todas las actas de asamblea y reglamentos estén bajo la ley de propiedad en condominio local." },
  { num: "04", title: "Gestión Administrativa", desc: "Liderazgo disruptivo enfocado en agregar plusvalía al patrimonio mediante gestión preventiva." }
];

export default function ServicesCategories() {
  return (
    <section className="py-32 px-6 md:px-12 max-w-[1800px] mx-auto" id="servicios">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-4"
        >
          <h2 className="text-sm font-medium tracking-[0.2em] uppercase text-black mb-6 lg:sticky lg:top-32">
            Nuestros Servicios
          </h2>
        </motion.div>
        <div className="lg:col-span-8">
          <div className="border-t border-[var(--color-line)]">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className="group border-b border-[var(--color-line)] py-12 flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-center cursor-pointer hover:px-8 transition-all duration-500"
              >
                <span className="text-4xl font-medium group-hover:text-[var(--color-ink)] transition-colors duration-500">
                  {service.num}
                </span>
                <div className="flex-1">
                  <h3 className="text-3xl font-medium tracking-tight mb-4">{service.title}</h3>
                  <p className="text-sm font-light leading-relaxed text-black max-w-md">
                    {service.desc}
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full border border-[var(--color-line)] flex items-center justify-center group-hover:bg-[var(--color-ink)] group-hover:text-[var(--color-bg)] transition-all duration-500 shrink-0">
                  <svg className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
