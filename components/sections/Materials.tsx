import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const MaterialCard = ({ title, sub, color }: { title: string, sub: string, color: string }) => (
    <div className="min-w-[80vw] md:min-w-[40vw] h-[60vh] md:h-[70vh] flex flex-col justify-end p-10 relative group border-r border-[#333] overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-10 group-hover:opacity-20 transition-opacity duration-700`} />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />
        
        <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <h4 className="font-[Manrope] text-xs text-[#C5A059] uppercase tracking-widest mb-2">{sub}</h4>
            <h3 className="font-[Cinzel] text-4xl md:text-5xl text-white mb-6">{title}</h3>
            <p className="font-[Cormorant_Garamond] text-lg text-gray-400 max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                Forged with the utmost precision, designed to withstand the harshest elements while maintaining an eternal shine.
            </p>
        </div>
        
        {/* Abstract shape representing material */}
        <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full blur-[80px]"
            style={{ backgroundColor: color === 'from-yellow-600' ? '#C5A059' : '#silver' }}
        />
    </div>
);

export const Materials: React.FC = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]);

    return (
        <section ref={targetRef} className="h-[300vh] bg-[#050505] relative">
            <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
                <div className="px-6 md:px-20 mb-12">
                     <h2 className="font-[Cinzel] text-3xl md:text-5xl text-[#E5E4E2]">Mastering The Elements</h2>
                </div>
                
                <motion.div style={{ x }} className="flex pl-6 md:pl-20 gap-0">
                    <MaterialCard title="Oystersteel" sub="Corrosion Resistant" color="from-slate-700" />
                    <MaterialCard title="Everose Gold" sub="Exclusive Patent" color="from-rose-900" />
                    <MaterialCard title="Yellow Gold" sub="18 ct Radiance" color="from-yellow-700" />
                    <MaterialCard title="Platinum" sub="The Noblest Metal" color="from-slate-300" />
                </motion.div>
            </div>
        </section>
    );
};