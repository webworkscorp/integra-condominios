import { motion } from 'motion/react';
import { Heart, Users, MessageSquare, BarChart3, Building2, ShieldCheck } from 'lucide-react';

export default function Competencies() {
  const softSkills = [
    { 
      title: "Empatía y Escucha Activa", 
      desc: "Capacidad para validar las frustraciones de un residente antes de ofrecer una solución técnica.",
      icon: Heart
    },
    { 
      title: "Mediación de Conflictos", 
      desc: "Habilidad para negociar acuerdos entre vecinos sin escalar a instancias legales.",
      icon: Users
    },
    { 
      title: "Comunicación Asertiva", 
      desc: "Capacidad de informar sobre problemas de forma clara, oportuna y amable.",
      icon: MessageSquare
    }
  ];

  const hardSkills = [
    { 
      title: "Gestión Financiera", 
      desc: "Elaboración de presupuestos, control de gastos y lectura de estados de cuenta.",
      icon: BarChart3
    },
    { 
      title: "Conocimiento de Infraestructura", 
      desc: "Entender el funcionamiento básico de sistemas hidráulicos, eléctricos y de seguridad.",
      icon: Building2
    },
    { 
      title: "Dominio Legal", 
      desc: "Conocimiento de la Ley de Propiedad en Condominio local y el reglamento interno.",
      icon: ShieldCheck
    }
  ];

  return (
    <section className="py-32 bg-white text-[var(--color-ink)] overflow-hidden" id="competencias">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="w-12 h-[3px] bg-[var(--color-accent)]"></span>
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-[var(--color-ink)]">Nuestras Capacidades</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.95] uppercase max-w-4xl">
            Competencias que marcan la <span className="text-[var(--color-accent)]">diferencia</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[var(--color-line)] border border-[var(--color-line)]">
          {/* Section 01: Human Skills */}
          <div className="bg-white p-10 md:p-20">
            <div className="mb-20">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-6xl font-bold text-[var(--color-accent)]/20 tracking-tighter">01</span>
                <span className="text-xs font-bold tracking-[0.3em] uppercase text-[var(--color-accent)]">Sección</span>
              </div>
              <h3 className="text-4xl font-bold tracking-tight uppercase leading-none">Competencias<br/>Humanas</h3>
            </div>

            <div className="grid grid-cols-1 gap-12">
              {softSkills.map((skill, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-full border border-[var(--color-line)] group-hover:border-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-white transition-all duration-500">
                      <skill.icon className="w-4 h-4 transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2 group-hover:text-[var(--color-accent)] transition-colors duration-500">{skill.title}</h4>
                      <p className="text-sm font-light leading-relaxed text-[var(--color-ink)]/70 max-w-md">{skill.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Section 02: Technical Skills */}
          <div className="bg-[var(--color-ink)] p-10 md:p-20 text-white">
            <div className="mb-20">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-6xl font-bold text-white/10 tracking-tighter">02</span>
                <span className="text-xs font-bold tracking-[0.3em] uppercase text-[var(--color-accent)]">Sección</span>
              </div>
              <h3 className="text-4xl font-bold tracking-tight uppercase leading-none">Competencias<br/>Técnicas</h3>
            </div>

            <div className="grid grid-cols-1 gap-12">
              {hardSkills.map((skill, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-full border border-white/10 group-hover:border-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-white transition-all duration-500">
                      <skill.icon className="w-4 h-4 transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2 group-hover:text-[var(--color-accent)] transition-colors duration-500">{skill.title}</h4>
                      <p className="text-sm font-light leading-relaxed text-white/50 max-w-md">{skill.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
