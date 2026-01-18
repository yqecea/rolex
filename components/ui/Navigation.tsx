import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

export const Navigation: React.FC = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: -100 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-6 mix-blend-difference text-[#E5E4E2]"
    >
      <div className="flex justify-between items-center max-w-[1800px] mx-auto">
        {/* Hamburger */}
        <button className="group flex flex-col gap-1.5 w-8 h-8 justify-center cursor-pointer">
          <span className="w-full h-[1px] bg-current transform origin-left transition-all duration-300 group-hover:scale-x-75"></span>
          <span className="w-full h-[1px] bg-current transition-all duration-300"></span>
          <span className="w-full h-[1px] bg-current transform origin-left transition-all duration-300 group-hover:scale-x-75"></span>
        </button>

        {/* Logo */}
        <div className="flex flex-col items-center cursor-pointer group">
          <svg width="24" height="24" viewBox="0 0 50 50" fill="currentColor" className="mb-1 text-[#C5A059] transition-transform duration-500 group-hover:scale-110">
            {/* Abstract Crown */}
            <path d="M25 2L15 15L6 8L10 25H40L44 8L35 15L25 2Z" />
            <circle cx="25" cy="38" r="6" />
          </svg>
          <span className="font-[Cinzel] text-xl font-bold tracking-[0.3em] ml-1">ROLEX</span>
        </div>

        {/* Search */}
        <button className="font-[Manrope] text-xs tracking-widest uppercase hover:text-[#C5A059] transition-colors">
          Search
        </button>
      </div>
    </motion.nav>
  );
};