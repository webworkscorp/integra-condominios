import { motion } from 'motion/react';
import { useEffect, useRef } from 'react';

export default function VideoLoop() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    let isMounted = true;

    if (video) {
      console.log('Video Loop intentando cargar:', video.currentSrc);
      video.muted = true;
      
      const playVideo = async () => {
        try {
          await video.play();
          if (isMounted) {
            console.log('Video Loop reproduciéndose correctamente');
          }
        } catch (err) {
          if (err instanceof Error && err.name === 'AbortError') {
            console.log('Video play was aborted (expected on unmount)');
            return;
          }
          console.warn('Autoplay bloqueado en Video Loop, esperando interacción:', err);
          const handleInteraction = () => {
            if (video) {
              video.play().then(() => console.log('Video Loop iniciado tras interacción')).catch(() => {});
            }
            document.removeEventListener('click', handleInteraction);
          };
          document.addEventListener('click', handleInteraction, { once: true });
        }
      };

      playVideo();

      video.addEventListener('error', () => {
        console.error('Error cargando video en Video Loop:', video.error);
      });
    }

    return () => {
      isMounted = false;
      if (video) {
        video.pause();
      }
    };
  }, []);

  return (
    <section className="w-full bg-[var(--color-bg)] py-12 px-6 md:px-12 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl w-full rounded-none overflow-hidden shadow-2xl bg-black min-h-[300px] flex items-center justify-center relative"
      >
        <video
          ref={videoRef}
          className="w-full h-full block object-cover pointer-events-none"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source 
            src="https://ohtpkxdwfincfaglhvsa.supabase.co/storage/v1/object/sign/Videos%20Kevin%20si/copy_6ACE77D2-27E0-4C75-A1F6-7C5B3F5C3D8E.mov?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xZDIzNDkyNC00N2EyLTQ4Y2MtODc0Ny0xMDZkZmM5ODQyYjMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJWaWRlb3MgS2V2aW4gc2kvY29weV82QUNFNzdEMi0yN0UwLTRDNzUtQTFGNi03QzVCM0Y1QzNEOEUubW92IiwiaWF0IjoxNzczMzM0ODg1LCJleHAiOjE4MDQ4NzA4ODV9.04x5tzKKCasK7zpoB0D52EATqj7RcNGLwGTfgMnP6vQ" 
            type="video/quicktime" 
          />
          <source 
            src="https://ohtpkxdwfincfaglhvsa.supabase.co/storage/v1/object/sign/Videos%20Kevin%20si/copy_6ACE77D2-27E0-4C75-A1F6-7C5B3F5C3D8E.mov?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xZDIzNDkyNC00N2EyLTQ4Y2MtODc0Ny0xMDZkZmM5ODQyYjMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJWaWRlb3MgS2V2aW4gc2kvY29weV82QUNFNzdEMi0yN0UwLTRDNzUtQTFGNi03QzVCM0Y1QzNEOEUubW92IiwiaWF0IjoxNzczMzM0ODg1LCJleHAiOjE4MDQ4NzA4ODV9.04x5tzKKCasK7zpoB0D52EATqj7RcNGLwGTfgMnP6vQ" 
            type="video/mp4" 
          />
          Tu navegador no soporta el elemento de video.
        </video>
      </motion.div>
    </section>
  );
}
