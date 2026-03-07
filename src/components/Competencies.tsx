import { motion } from 'motion/react';

export default function Competencies() {
  const softSkills = [
    { title: "Empatía y Escucha Activa", desc: "Capacidad para validar las frustraciones de un residente antes de ofrecer una solución técnica." },
    { title: "Mediación de Conflictos", desc: "Habilidad para negociar acuerdos entre vecinos sin escalar a instancias legales." },
    { title: "Comunicación Asertiva", desc: "Capacidad de informar sobre problemas de forma clara, oportuna y amable." }
  ];

  const hardSkills = [
    { title: "Gestión Financiera", desc: "Elaboración de presupuestos, control de gastos y lectura de estados de cuenta." },
    { title: "Conocimiento de Infraestructura", desc: "Entender el funcionamiento básico de sistemas hidráulicos, eléctricos y de seguridad." },
    { title: "Dominio Legal", desc: "Conocimiento de la Ley de Propiedad en Condominio local y el reglamento interno." }
  ];

  return (
    <section className="py-32 bg-[var(--color-bg)] text-[var(--color-ink)]">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="text-center mb-24"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="w-12 h-[1px] bg-[var(--color-ink)]"></span>
            <span className="text-xs font-medium tracking-[0.2em] uppercase">Nuestras Capacidades</span>
            <span className="w-12 h-[1px] bg-[var(--color-ink)]"></span>
          </div>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tighter leading-tight">
            Competencias que marcan la <span className="opacity-40 italic text-3xl md:text-5xl">diferencia</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Soft Skills */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-white p-12 rounded-[3rem] border border-[var(--color-line)]"
          >
            <h3 className="text-2xl font-medium mb-12 flex items-center gap-4">
              <span className="text-sm font-bold opacity-30">01</span>
              Competencias Humanas
            </h3>
            <div className="space-y-10">
              {softSkills.map((skill, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, x: -100, skewX: 10 }}
                  whileInView={{ opacity: 1, x: 0, skewX: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ type: "spring", stiffness: 150, damping: 15, delay: idx * 0.05 }}
                  className="group"
                >
                  <h4 className="text-xl font-medium mb-3 group-hover:translate-x-2 transition-transform duration-500 text-black">{skill.title}</h4>
                  <p className="text-base font-normal text-black leading-relaxed">{skill.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Hard Skills */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="bg-[var(--color-ink)] text-[var(--color-bg)] p-12 rounded-[3rem]"
          >
            <h3 className="text-2xl font-medium mb-12 flex items-center gap-4">
              <span className="text-sm font-bold opacity-30">02</span>
              Competencias Técnicas
            </h3>
            <div className="space-y-10">
              {hardSkills.map((skill, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, x: 100, skewX: -10 }}
                  whileInView={{ opacity: 1, x: 0, skewX: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ type: "spring", stiffness: 150, damping: 15, delay: idx * 0.05 }}
                  className="group"
                >
                  <h4 className="text-xl font-medium mb-3 group-hover:translate-x-2 transition-transform duration-500 text-white">{skill.title}</h4>
                  <p className="text-base font-normal text-white leading-relaxed">{skill.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
