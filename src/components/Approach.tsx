import { motion } from 'motion/react';

export default function Approach() {
  const pillars = [
    {
      title: "Transparencia Total",
      desc: "Reportes financieros claros y accesibles. Sin sorpresas, solo gestión impecable.",
    },
    {
      title: "Mantenimiento Preventivo",
      desc: "Cuidamos tu inversión antes de que surjan los problemas. Plusvalía garantizada.",
    },
    {
      title: "Mediación Profesional",
      desc: "Soluciones efectivas para una convivencia sana y armónica entre vecinos.",
    }
  ];

  return (
    <section className="py-32 bg-white text-[var(--color-ink)]" id="propuesta">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-square lg:aspect-auto lg:h-[850px] group"
          >
            {/* Main Image Container with Sharp Corners */}
            <div className="w-full h-full overflow-hidden relative">
              <img 
                src="https://i.imgur.com/YnS3BAI.jpeg" 
                alt="Luxury Condominium" 
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2s] ease-out"
                referrerPolicy="no-referrer"
              />
              {/* Sophisticated Overlays */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg)]/20 to-transparent" />
            </div>

            {/* Architectural Accent Lines */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[var(--color-accent)] opacity-60" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[var(--color-accent)] opacity-60" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="w-12 h-[2px] bg-[var(--color-accent)]"></span>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-ink)]">Nuestra Propuesta</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, scale: 1.1, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-6xl font-sans font-bold tracking-tighter mb-8 leading-tight perspective-1000 text-[var(--color-ink)]"
            >
              🏢 Tu condominio merece una <span className="text-[var(--color-accent)]">gestión</span> de alto nivel.
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-xl font-light text-[var(--color-ink)] mb-12 leading-relaxed"
            >
              Sabemos que administrar una comunidad no es solo cobrar cuotas; es garantizar la plusvalía de tu patrimonio y la armonía entre vecinos. Llegamos para transformar la administración tradicional.
            </motion.p>

            <div className="space-y-6">
              {pillars.map((pillar, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                  className="group flex gap-6 p-8 rounded-[2rem] border-2 border-transparent bg-[var(--color-soft-blue)] hover:bg-white hover:border-[var(--color-accent)] hover:shadow-2xl hover:shadow-[var(--color-accent)]/10 transition-all duration-500"
                >
                  <div className="w-12 h-12 shrink-0 group-hover:scale-110 transition-transform duration-500 p-2 bg-white rounded-xl shadow-sm border border-[var(--color-line)] group-hover:border-[var(--color-accent)]">
                    <img 
                      src="https://i.imgur.com/n5mLfS7.png" 
                      alt="Check" 
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 tracking-tight group-hover:text-[var(--color-accent)] transition-colors duration-500">{pillar.title}</h4>
                    <p className="text-sm font-light text-[var(--color-ink)] leading-relaxed max-w-md transition-opacity duration-500">
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12 flex items-center gap-4"
            >
              <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
              <p className="text-xs font-bold tracking-[0.1em] uppercase text-[var(--color-ink)]">
                📍 Estamos listos para elevar el estándar de tu residencial.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
