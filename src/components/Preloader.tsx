import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useEffect(() => {
    // Start exit animation after 2 seconds
    const timer = setTimeout(() => {
      setIsAnimatingOut(true);
      // Trigger onComplete after exit animation finishes
      setTimeout(() => {
        onComplete();
      }, 800); // matches the exit duration
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
      initial={{ y: 0 }}
      animate={{ y: isAnimatingOut ? "-100%" : 0 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: isAnimatingOut ? 0 : 1, scale: isAnimatingOut ? 0.9 : 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative flex flex-col items-center"
      >
        <img 
          src="https://i.imgur.com/JFYMVSk.png" 
          alt="Integra Condominios" 
          className="w-48 md:w-64 h-auto mb-10 object-contain"
          referrerPolicy="no-referrer"
        />
        
        {/* Loading line */}
        <div className="w-48 h-[2px] bg-zinc-100 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-[var(--color-accent)]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
