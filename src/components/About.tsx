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
              <span className="w-12 h-[2px] bg-[var(--color-accent)]"></span>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-ink)]">Nuestra Esencia</span>
            </div>
            <p className="text-2xl md:text-4xl font-medium tracking-tight leading-tight mb-16 whitespace-pre-wrap">
              Somos una empresa dedicada a la administración de condominios, con una gran trayectoria que nos permite brindar el mejor servicio para tu condominio; redefinimos el concepto de administración con un liderazgo disruptivo y enfoque humano. En Integra Condominios CR profesionalizamos tu comunidad con reportes en tiempo real y atención <span className="text-[var(--color-accent)]">PERSONALIZADA</span>.{"\n"}¡Eleva el estándar de tu hogar hoy!
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
              className="aspect-[4/5] overflow-hidden bg-zinc-100 hidden lg:block border-l-8 border-[var(--color-accent)]"
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
              className="relative pl-8 border-l-2 border-[var(--color-accent)]"
            >
              <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase text-[var(--color-ink)] mb-16">Valores Fundamentales</h3>
              
              <div className="space-y-20 mb-32">
                {[
                  {
                    title: "Transparencia Radical",
                    desc: "Cuentas claras, amistades largas. La honestidad es nuestra base innegociable.",
                    icon: "https://i.imgur.com/rMnvWhP.png"
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
                    <div className="absolute -left-[37px] top-1 w-4 h-4 bg-white border-2 border-[var(--color-accent)] rounded-full flex items-center justify-center z-10 group-hover:bg-[var(--color-accent)] transition-colors duration-500">
                      <div className="w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    <div className="flex items-start gap-8">
                      <div className="w-12 h-12 shrink-0 p-2 bg-white rounded-xl shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-500 border border-[var(--color-line)] group-hover:border-[var(--color-accent)]">
                        <img 
                          src={item.icon} 
                          alt={item.title} 
                          className="w-full h-full object-contain"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold tracking-tight mb-3 group-hover:text-[var(--color-accent)] transition-colors duration-500">{item.title}</h4>
                        <p className="text-base font-light text-[var(--color-ink)] leading-relaxed max-w-sm transition-opacity duration-500">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Moved Section: Vision & Mission */}
              <div className="pt-16 border-t-2 border-[var(--color-accent)]">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="mb-16"
                >
                  <h3 className="text-sm font-bold tracking-[0.1em] uppercase mb-4 text-[var(--color-accent)]">Nuestra Visión</h3>
                  <p className="text-lg font-medium leading-relaxed text-[var(--color-ink)] mb-6 border-l-4 border-[var(--color-accent)] pl-6">
                    "Ser la empresa líder y referente en administración condominal, reconocida no solo por nuestra eficiencia operativa, sino por transformar condominios en comunidades seguras y llenas de plusvalía. Aspiramos a redefinir el estándar de la industria, demostrando que la excelencia técnica y la calidez humana pueden y deben ir de la mano."
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <h3 className="text-sm font-bold tracking-[0.1em] uppercase mb-4 text-[var(--color-accent)]">Misión</h3>
                  <p className="text-xl font-bold tracking-tighter leading-tight text-[var(--color-ink)]">
                    Establecer una Administración con un propósito de liderazgo disruptivo, no solo mejorar las condiciones existentes sino agregar <span className="text-[var(--color-accent)]">plusvalía</span> al patrimonio mediante la gestión administrativa preventiva.
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
