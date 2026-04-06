import { motion } from 'motion/react';

export default function Statistics() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className="py-24 overflow-hidden border-y border-[var(--color-line)] bg-[var(--color-bg)]"
    >
      <div className="flex whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          className="flex gap-16 items-center"
        >
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex gap-16 items-center">
              <span className="text-2xl md:text-4xl font-bold tracking-tighter uppercase text-[var(--color-ink)]">EXCELENCIA</span>
              <span className="w-3 h-3 rounded-full bg-[var(--color-accent)]" />
              <span className="text-2xl md:text-4xl font-bold tracking-tighter uppercase text-[var(--color-ink)]">RIGOR</span>
              <span className="w-3 h-3 rounded-full bg-[var(--color-accent)]" />
              <span className="text-2xl md:text-4xl font-bold tracking-tighter uppercase text-[var(--color-ink)]">TRANSPARENCIA</span>
              <span className="w-3 h-3 rounded-full bg-[var(--color-accent)]" />
              <span className="text-2xl md:text-4xl font-bold tracking-tighter uppercase text-[var(--color-ink)]">PLUSVALÍA</span>
              <span className="w-3 h-3 rounded-full bg-[var(--color-accent)]" />
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
