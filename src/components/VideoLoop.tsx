import { motion } from 'motion/react';

export default function VideoLoop() {
  return (
    <section className="w-full bg-[var(--color-bg)] py-12 px-6 md:px-12 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl w-full rounded-none overflow-hidden shadow-2xl bg-black min-h-[300px] flex items-center justify-center"
      >
        <video
          className="w-full h-full block object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source 
            src="https://ohtpkxdwfincfaglhvsa.supabase.co/storage/v1/object/sign/Videos%20Kevin%20si/442100f5-4b65-4475-b396-3ebb21b129df.mov?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xZDIzNDkyNC00N2EyLTQ4Y2MtODc0Ny0xMDZkZmM5ODQyYjMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJWaWRlb3MgS2V2aW4gc2kvNDQyMTAwZjUtNGI2NS00NDc1LWIzOTYtM2ViYjIxYjEyOWRmLm1vdiIsImlhdCI6MTc3MzEwMzAwNSwiZXhwIjoxODA0NjM5MDA1fQ.WF3AKJXsty0uG7vVjvT3gXq1S1GEl3XiUGajLdxkVP0" 
            type="video/quicktime" 
          />
          <source 
            src="https://ohtpkxdwfincfaglhvsa.supabase.co/storage/v1/object/sign/Videos%20Kevin%20si/442100f5-4b65-4475-b396-3ebb21b129df.mov?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xZDIzNDkyNC00N2EyLTQ4Y2MtODc0Ny0xMDZkZmM5ODQyYjMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJWaWRlb3MgS2V2aW4gc2kvNDQyMTAwZjUtNGI2NS00NDc1LWIzOTYtM2ViYjIxYjEyOWRmLm1vdiIsImlhdCI6MTc3MzEwMzAwNSwiZXhwIjoxODA0NjM5MDA1fQ.WF3AKJXsty0uG7vVjvT3gXq1S1GEl3XiUGajLdxkVP0" 
            type="video/mp4" 
          />
          Tu navegador no soporta el elemento de video.
        </video>
      </motion.div>
    </section>
  );
}
