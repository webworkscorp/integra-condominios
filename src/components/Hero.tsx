import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-110px)] flex flex-col justify-center px-6 md:px-12 py-20">
      {/* Full-screen Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.video 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://ohtpkxdwfincfaglhvsa.supabase.co/storage/v1/object/sign/Videos%20Kevin%20si/13898169_1080_1920_25fps.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xZDIzNDkyNC00N2EyLTQ4Y2MtODc0Ny0xMDZkZmM5ODQyYjMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJWaWRlb3MgS2V2aW4gc2kvMTM4OTgxNjlfMTA4MF8xOTIwXzI1ZnBzLm1wNCIsImlhdCI6MTc3Mjc2NDEwOSwiZXhwIjoxODA0MzAwMTA5fQ.3GOc8EWsBS9P6mpTWdm0yOg2geeDnq3oZcTcsgmPaBY" type="video/mp4" />
        </motion.video>
        {/* Gradient overlay: refined for video background to maintain high quality while ensuring text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg)]/90 via-[var(--color-bg)]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-transparent to-transparent opacity-60" />
      </div>

      <div className="relative z-10 max-w-[1800px] mx-auto w-full flex justify-between items-end">
        <div className="max-w-3xl z-10">
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-[8vw] lg:text-[6vw] leading-[0.9] tracking-tighter uppercase flex flex-col">
              <span className="block font-medium">
                Gestión
              </span>
              <span className="block font-medium">
                Excepcional
              </span>
            </h1>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 150, damping: 20, delay: 0.4 }}
            className="mt-16 max-w-md ml-2"
          >
            <p className="text-xl md:text-2xl font-medium leading-tight text-black">
              Trascendemos la administración tradicional. Diseñamos experiencias residenciales impecables mediante rigor financiero, tecnología y un servicio de guante blanco.
            </p>
            <div className="mt-10 flex items-center gap-6">
              <a href="#propuesta" className="w-16 h-16 rounded-full border border-[var(--color-ink)] flex items-center justify-center hover:bg-[var(--color-ink)] hover:text-[var(--color-bg)] transition-colors duration-500 group bg-[var(--color-bg)]/50 backdrop-blur-sm">
                <svg className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-black">Descubrir más</span>
            </div>
          </motion.div>
        </div>

        {/* Floating Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0, rotate: 180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 150, damping: 15, delay: 0.6 }}
          className="hidden lg:flex bg-[var(--color-ink)] text-[var(--color-bg)] p-8 rounded-full w-40 h-40 flex flex-col items-center justify-center text-center mb-12 mr-12 shadow-2xl"
        >
          <span className="text-4xl font-bold">6</span>
          <span className="text-[9px] tracking-[0.2em] uppercase mt-1">Años de<br/>Excelencia</span>
        </motion.div>
      </div>
    </section>
  );
}
