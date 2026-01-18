import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

// --- SVG COMPONENTS FOR WATCH PARTS ---

const FlutedBezel = ({ style }: { style: any }) => (
  <motion.div style={style} className="absolute inset-0 flex items-center justify-center pointer-events-none">
    <svg viewBox="0 0 500 500" className="w-[80vmin] h-[80vmin] drop-shadow-2xl">
        <defs>
            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E6C888" />
                <stop offset="50%" stopColor="#A6895A" />
                <stop offset="100%" stopColor="#F5E4C3" />
            </linearGradient>
        </defs>
        {/* Outer Ring with Fluting pattern simulated by zigzag stroke */}
        <circle cx="250" cy="250" r="240" fill="none" stroke="url(#goldGrad)" strokeWidth="15" strokeDasharray="10 5" className="opacity-90" />
        <circle cx="250" cy="250" r="230" fill="transparent" stroke="#8B734B" strokeWidth="2" />
        {/* Inner shine */}
        <circle cx="250" cy="250" r="220" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="40" />
    </svg>
  </motion.div>
);

const Dial = ({ style }: { style: any }) => (
  <motion.div style={style} className="absolute inset-0 flex items-center justify-center pointer-events-none">
    <div className="w-[65vmin] h-[65vmin] rounded-full bg-[#004025] shadow-2xl border border-[#006039] relative overflow-hidden">
        {/* Sunburst Effect */}
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0deg,rgba(255,255,255,0.1)_10deg,transparent_20deg,rgba(255,255,255,0.1)_30deg,transparent_40deg,rgba(255,255,255,0.1)_50deg,transparent_60deg)] opacity-30" />
        
        {/* Hour Markers */}
        {[...Array(12)].map((_, i) => (
            <div key={i} className="absolute w-1.5 h-6 bg-[#E6C888] left-1/2 top-4 -translate-x-1/2 shadow-lg" 
                 style={{ transform: `translateX(-50%) rotate(${i * 30}deg) translateY(0) transform-origin(50% calc(32.5vmin - 16px))` }} />
        ))}
        
        {/* Rolex Logo Placeholder */}
        <div className="absolute top-[18%] left-1/2 -translate-x-1/2 opacity-90">
             <svg width="30" height="30" viewBox="0 0 50 50" fill="#E6C888">
                <path d="M25 2L15 15L6 8L10 25H40L44 8L35 15L25 2Z" />
                <circle cx="25" cy="38" r="5" />
            </svg>
        </div>
        
        {/* Text */}
        <div className="absolute top-[28%] left-1/2 -translate-x-1/2 text-center">
            <span className="block font-[Cinzel] text-[#E6C888] text-[1.5vmin] font-bold tracking-widest">ROLEX</span>
            <span className="block font-[Manrope] text-[#E6C888] text-[0.8vmin] tracking-widest mt-1">OYSTER PERPETUAL</span>
        </div>

         <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 text-center">
            <span className="block font-[Manrope] text-[#E6C888] text-[0.8vmin] tracking-widest uppercase">Superlative Chronometer</span>
            <span className="block font-[Manrope] text-[#E6C888] text-[0.8vmin] tracking-widest uppercase mt-0.5">Officially Certified</span>
        </div>
    </div>
  </motion.div>
);

const Hands = ({ style, rotateHour, rotateMinute, rotateSecond }: { style: any, rotateHour: MotionValue, rotateMinute: MotionValue, rotateSecond: MotionValue }) => (
    <motion.div style={style} className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-[65vmin] h-[65vmin]">
             {/* Hour Hand */}
             <motion.div style={{ rotate: rotateHour }} className="absolute top-1/2 left-1/2 w-2 h-[18vmin] bg-[#E6C888] -translate-x-1/2 -translate-y-[100%] origin-bottom rounded-full shadow-lg z-10" />
             {/* Minute Hand */}
             <motion.div style={{ rotate: rotateMinute }} className="absolute top-1/2 left-1/2 w-1.5 h-[26vmin] bg-[#E6C888] -translate-x-1/2 -translate-y-[100%] origin-bottom rounded-full shadow-lg z-20" />
             {/* Second Hand */}
             <motion.div style={{ rotate: rotateSecond }} className="absolute top-1/2 left-1/2 w-0.5 h-[28vmin] bg-[#E6C888] -translate-x-1/2 -translate-y-[80%] origin-bottom z-30 flex flex-col items-center">
                <div className="w-2 h-2 rounded-full bg-[#E6C888] mt-[5vmin]" />
             </motion.div>
             {/* Center Pin */}
             <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-[#C5A059] rounded-full -translate-x-1/2 -translate-y-1/2 z-40 shadow-md border border-[#050505]" />
        </div>
    </motion.div>
);

const Mechanism = ({ style, rotate }: { style: any, rotate: MotionValue }) => (
    <motion.div style={style} className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div style={{ rotate }} className="w-[60vmin] h-[60vmin] rounded-full border border-gray-700 bg-[#1a1a1a] flex items-center justify-center relative overflow-hidden">
             {/* Gears decorative abstract */}
             <div className="absolute inset-0 border-[20px] border-dashed border-[#333] rounded-full opacity-30" />
             <div className="absolute w-[40vmin] h-[40vmin] border border-[#444] rounded-full" />
             <div className="absolute w-[20vmin] h-[20vmin] bg-[#222] rounded-full border border-[#555] flex items-center justify-center">
                 <div className="w-2 h-2 bg-red-900 rounded-full" /> {/* Jewel */}
             </div>
             
             {/* Ruby Jewels scattered */}
             <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-red-800 rounded-full border border-red-900 shadow-[0_0_10px_rgba(255,0,0,0.3)]" />
             <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-red-800 rounded-full border border-red-900 shadow-[0_0_10px_rgba(255,0,0,0.3)]" />

             {/* Gold Gears */}
             <div className="absolute top-10 right-20 w-16 h-16 rounded-full border-4 border-dashed border-[#A6895A] opacity-40 animate-spin-slow" />
        </motion.div>
    </motion.div>
);

export const DeconstructedWatch: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Timeline of animations based on scroll
  // 0 - 0.2: Bezel lifts and rotates
  // 0.2 - 0.4: Dial lifts
  // 0.4 - 0.6: Hands lift
  // 0.6 - 0.8: Mechanism revealed
  // 0.8 - 1.0: Assembly

  // Bezel Transforms
  const bezelScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.3]);
  const bezelRotate = useTransform(scrollYProgress, [0, 0.8], [0, 90]);
  const bezelOpacity = useTransform(scrollYProgress, [0.8, 0.9], [1, 0]);
  const bezelZ = useTransform(scrollYProgress, [0, 0.3], [0, 100]); // Fake Z via scale mostly

  // Dial Transforms
  const dialScale = useTransform(scrollYProgress, [0.1, 0.4], [0.9, 1.1]);
  const dialOpacity = useTransform(scrollYProgress, [0.1, 0.25, 0.8, 0.95], [0, 1, 1, 0]);
  const dialRotate = useTransform(scrollYProgress, [0.1, 0.6], [-10, 0]);

  // Hands Transforms (Time passing effect)
  const handsScale = useTransform(scrollYProgress, [0.2, 0.5], [0.8, 1.2]);
  const handsOpacity = useTransform(scrollYProgress, [0.2, 0.35, 0.8, 0.9], [0, 1, 1, 0]);
  
  const hourRotate = useTransform(scrollYProgress, [0, 1], [0, 360]); // 12 hours
  const minuteRotate = useTransform(scrollYProgress, [0, 1], [0, 4320]); // 12 rotations
  const secondRotate = useTransform(scrollYProgress, [0, 1], [0, 259200]); // Fast spin

  // Mechanism Transforms
  const mechScale = useTransform(scrollYProgress, [0.4, 0.8], [0.5, 1.5]);
  const mechOpacity = useTransform(scrollYProgress, [0.4, 0.5, 0.9, 1], [0, 1, 1, 0]);
  const mechRotate = useTransform(scrollYProgress, [0.4, 1], [0, -45]);

  // Text Parallax
  const textY = useTransform(scrollYProgress, [0.1, 0.5], ["50%", "-50%"]);
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.3, 0.5], [0, 1, 0]);


  return (
    <section ref={targetRef} className="h-[400vh] relative bg-[#050505]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center perspective-1000">
        
        {/* Layer 4: Mechanism (Deepest) */}
        <Mechanism style={{ scale: mechScale, opacity: mechOpacity, rotate: mechRotate }} rotate={mechRotate} />

        {/* Layer 3: Dial */}
        <Dial style={{ scale: dialScale, opacity: dialOpacity, rotate: dialRotate }} />

        {/* Layer 2: Hands */}
        <Hands 
            style={{ scale: handsScale, opacity: handsOpacity }} 
            rotateHour={hourRotate}
            rotateMinute={minuteRotate}
            rotateSecond={secondRotate}
        />

        {/* Layer 1: Bezel (Top) */}
        <FlutedBezel style={{ scale: bezelScale, rotate: bezelRotate, opacity: bezelOpacity }} />

        {/* Narrative Text Overlays */}
        <motion.div 
            style={{ y: textY, opacity: textOpacity }}
            className="absolute z-50 text-center pointer-events-none px-4"
        >
            <h2 className="font-[Cinzel] text-4xl md:text-6xl text-[#F5E4C3] mb-4 drop-shadow-lg">
                Precision
            </h2>
            <p className="font-[Cormorant_Garamond] text-xl md:text-2xl text-white/80 max-w-md mx-auto italic">
                At the heart of every Oyster, the perpetual rotor captures every movement.
            </p>
        </motion.div>

        {/* Second Narrative Text */}
        <motion.div 
            style={{ 
                opacity: useTransform(scrollYProgress, [0.6, 0.7, 0.8], [0, 1, 0]),
                y: useTransform(scrollYProgress, [0.6, 0.8], ["50%", "-50%"])
            }}
            className="absolute z-50 text-center pointer-events-none px-4"
        >
            <h2 className="font-[Cinzel] text-4xl md:text-6xl text-[#F5E4C3] mb-4 drop-shadow-lg">
                Calibre 3235
            </h2>
            <p className="font-[Cormorant_Garamond] text-xl md:text-2xl text-white/80 max-w-md mx-auto italic">
                A demonstration of technology, entirely developed and manufactured by Rolex.
            </p>
        </motion.div>
      </div>
    </section>
  );
};