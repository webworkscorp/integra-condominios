import { motion } from 'motion/react';

export default function About() {
  return (
    <section className="py-32 bg-[var(--color-bg)] text-[var(--color-ink)]" id="nosotros">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        {/* Top Section: Essence & Vision */}
        <div className="mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-[1px] bg-[var(--color-ink)]"></span>
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-black">Nuestra Esencia</span>
            </div>
            <p className="text-2xl md:text-4xl font-medium tracking-tight leading-tight mb-16 whitespace-pre-wrap">
              Somos una empresa dedicada a la administración de condominios, con una gran trayectoria que nos permite brindar el mejor servicio para tu condominio,. redefinimos el concepto de administración con un liderazgo disruptivo y enfoque humano.                                                         En INTEGRA CONDOMINIOS profesionalizamos tu comunidad con reportes en tiempo real y atención PERSONALIZADA.{"\n"}¡Eleva el estándar de tu hogar hoy!
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left: Visual Balance */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.5, borderRadius: "100%" }}
              whileInView={{ opacity: 1, scale: 1, borderRadius: "3rem" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="aspect-[4/5] overflow-hidden bg-zinc-100 hidden lg:block"
            >
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
                alt="Architecture" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          {/* Right: Values & Moved Content */}
          <div className="lg:col-span-6">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative pl-8 border-l border-[var(--color-line)]"
            >
              <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase text-black mb-16">Valores Fundamentales</h3>
              
              <div className="space-y-20 mb-32">
                {[
                  {
                    title: "Transparencia Radical",
                    desc: "Cuentas claras, amistades largas. La honestidad es nuestra base innegociable.",
                    icon: "https://i.imgur.com/hqQwTgC.png"
                  },
                  {
                    title: "Empatía Activa",
                    desc: "Entendemos que detrás de cada reporte hay una persona y una necesidad real.",
                    icon: "https://i.imgur.com/uedTDqT.png"
                  },
                  {
                    title: "Excelencia Preventiva",
                    desc: "No esperamos a que las cosas se rompan; cuidamos el patrimonio antes de que ocurra el problema.",
                    icon: "https://i.imgur.com/ptvKjSL.png"
                  }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 50, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: i * 0.1 }}
                    className="group relative"
                  >
                    {/* Indicator Dot on the Rail */}
                    <div className="absolute -left-[37px] top-1 w-4 h-4 bg-[var(--color-bg)] border border-[var(--color-line)] rounded-full flex items-center justify-center z-10 group-hover:border-[var(--color-ink)] transition-colors duration-500">
                      <div className="w-1 h-1 bg-[var(--color-ink)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    <div className="flex items-start gap-8">
                      <div className="w-10 h-10 shrink-0 opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110">
                        <img 
                          src={item.icon} 
                          alt={item.title} 
                          className="w-full h-full object-contain"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div>
                        <h4 className="text-xl font-medium tracking-tight mb-3 group-hover:translate-x-1 transition-transform duration-500">{item.title}</h4>
                        <p className="text-base font-light text-black leading-relaxed max-w-sm transition-opacity duration-500">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Moved Section: Vision & Mission */}
              <div className="pt-16 border-t border-[var(--color-line)]">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="mb-16"
                >
                  <h3 className="text-sm font-bold tracking-[0.1em] uppercase mb-4 text-black">Nuestra Visión</h3>
                  <p className="text-lg font-medium leading-relaxed text-black mb-6">
                    "Ser la empresa líder y referente en administración condominal, reconocida no solo por nuestra eficiencia operativa, sino por transformar condominios en comunidades seguras y llenas de plusvalía. Aspiramos a redefinir el estándar de la industria, demostrando que la excelencia técnica y la calidez humana pueden y deben ir de la mano."
                  </p>
                  <p className="text-base font-light text-black">
                    Redefinimos el estándar de la industria, fusionando excelencia técnica con un servicio humano excepcional.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <h3 className="text-sm font-bold tracking-[0.1em] uppercase mb-4 text-black">Misión</h3>
                  <p className="text-xl font-medium tracking-tighter leading-tight">
                    Establecer una Administración con un propósito de liderazgo disruptivo, no solo mejorar las condiciones existentes sino agregar plusvalía al patrimonio mediante la gestión administrativa preventiva.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
