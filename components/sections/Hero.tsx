import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax for text
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-[#050505] flex items-center justify-center">
      
      {/* Background Texture - subtle noise */}
      <div className="absolute inset-0 opacity-20 pointer-events-none z-0" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      <motion.div 
        style={{ y, opacity, scale }}
        className="relative z-10 text-center flex flex-col items-center max-w-4xl px-4"
      >
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-[Manrope] text-[#C5A059] tracking-[0.4em] text-xs md:text-sm uppercase mb-6"
        >
          Oyster Perpetual
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-[Cinzel] text-5xl md:text-8xl lg:text-9xl font-bold text-[#E5E4E2] leading-tight mb-8"
        >
          The Rhythm <br />
          <span className="font-light italic font-[Cormorant_Garamond] text-[#C5A059] opacity-90">of Eternity</span>
        </motion.h1>

        <motion.div
           initial={{ opacity: 0, scaleY: 0 }}
           animate={{ opacity: 1, scaleY: 1 }}
           transition={{ duration: 0.8, delay: 1.4, ease: "circOut" }}
           className="h-24 w-[1px] bg-gradient-to-b from-[#C5A059] to-transparent origin-top"
        />
      </motion.div>

      {/* Decorative Radial Gradient at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[30vh] bg-gradient-to-t from-[#006039]/20 to-transparent pointer-events-none" />
    </section>
  );
};