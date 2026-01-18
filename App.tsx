import React, { useEffect } from 'react';
import { Navigation } from './components/ui/Navigation';
import { Hero } from './components/sections/Hero';
import { DeconstructedWatch } from './components/sections/DeconstructedWatch';
import { Editorial } from './components/sections/Editorial';
import { Materials } from './components/sections/Materials';
import { Footer } from './components/sections/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Smooth scroll behavior for anchor links (if any)
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <main className="bg-[#050505] min-h-screen text-[#E5E4E2] selection:bg-[#006039] selection:text-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#C5A059] origin-left z-[100]"
        style={{ scaleX }}
      />
      
      <Navigation />
      
      <Hero />
      
      {/* The Core Interaction */}
      <DeconstructedWatch />
      
      <Editorial />
      
      <Materials />
      
      <Footer />
      
      {/* Noise overlay for texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[90] mix-blend-overlay"
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>
    </main>
  );
};

export default App;