import React from 'react';
import { motion } from 'framer-motion';

const EditorialBlock = ({ title, content, number, reverse = false }: { title: string, content: string, number: string, reverse?: boolean }) => {
    return (
        <div className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center justify-between py-24 md:py-40 gap-12`}>
            {/* Image Placeholder Area */}
            <div className="w-full md:w-1/2 aspect-[4/5] relative group overflow-hidden">
                <div className="absolute inset-0 bg-neutral-900 animate-pulse" /> {/* Placeholder */}
                <motion.div 
                    initial={{ scale: 1.2, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="w-full h-full bg-cover bg-center opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                    style={{ backgroundImage: `url(https://picsum.photos/800/1000?random=${number})`, filter: 'grayscale(100%) sepia(20%)' }}
                />
                <div className="absolute inset-0 border border-[#C5A059]/30 m-4 scale-95 group-hover:scale-100 transition-transform duration-700" />
            </div>

            {/* Text Content */}
            <div className="w-full md:w-5/12 text-left">
                <motion.span 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="block font-[Manrope] text-[#C5A059] text-sm tracking-[0.2em] mb-4"
                >
                    CHAPTER {number}
                </motion.span>
                <motion.h3 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="font-[Cinzel] text-4xl md:text-5xl text-[#E5E4E2] mb-8 leading-tight"
                >
                    {title}
                </motion.h3>
                <motion.p 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="font-[Cormorant_Garamond] text-xl md:text-2xl text-neutral-400 leading-relaxed text-balance"
                >
                    {content}
                </motion.p>
                <motion.button
                    whileHover={{ x: 10 }}
                    className="mt-12 text-[#C5A059] font-[Manrope] text-xs uppercase tracking-widest border-b border-[#C5A059] pb-1"
                >
                    Discover More
                </motion.button>
            </div>
        </div>
    );
};

export const Editorial: React.FC = () => {
  return (
    <section className="bg-[#0F1210] px-6 md:px-20 py-20 overflow-hidden relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-[#C5A059]/20 via-[#C5A059]/10 to-transparent" />
        
        <div className="max-w-[1400px] mx-auto relative z-10">
            <EditorialBlock 
                number="01"
                title="The Pursuit of Excellence"
                content="Perpetual is more than a word on a dial. It is a philosophy that drives everything we do. It is the relentless pursuit of excellence, the exploration of the unknown, and the determination to go further."
            />
             <EditorialBlock 
                number="02"
                title="Sailing The Seas of Time"
                content="From the depths of the Mariana Trench to the summit of Everest, our chronometers have accompanied explorers into the extreme, proving their reliability where it matters most."
                reverse
            />
             <EditorialBlock 
                number="03"
                title="A Legacy of Materiality"
                content="We master the alchemy of our alloys. Oystersteel, Everose gold, yellow gold, and platinum are crafted in our own foundry to ensure an unrivaled radiance that endures for generations."
            />
        </div>
    </section>
  );
};