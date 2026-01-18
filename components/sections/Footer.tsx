import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020202] text-[#E5E4E2] py-20 px-6 border-t border-[#111]">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="flex flex-col gap-6">
            <svg width="40" height="40" viewBox="0 0 50 50" fill="#006039">
                 <path d="M25 2L15 15L6 8L10 25H40L44 8L35 15L25 2Z" />
                 <circle cx="25" cy="38" r="6" />
            </svg>
            <p className="font-[Cormorant_Garamond] text-xl text-neutral-500 italic">
                The perpetual quest for excellence.
            </p>
        </div>
        
        <div className="flex flex-col gap-4">
            <h5 className="font-[Manrope] text-xs text-[#C5A059] uppercase tracking-widest">Collection</h5>
            <a href="#" className="font-[Manrope] text-sm text-neutral-400 hover:text-white transition-colors">Air-King</a>
            <a href="#" className="font-[Manrope] text-sm text-neutral-400 hover:text-white transition-colors">Cosmograph Daytona</a>
            <a href="#" className="font-[Manrope] text-sm text-neutral-400 hover:text-white transition-colors">Datejust</a>
            <a href="#" className="font-[Manrope] text-sm text-neutral-400 hover:text-white transition-colors">Submariner</a>
        </div>

        <div className="flex flex-col gap-4">
            <h5 className="font-[Manrope] text-xs text-[#C5A059] uppercase tracking-widest">World of Rolex</h5>
            <a href="#" className="font-[Manrope] text-sm text-neutral-400 hover:text-white transition-colors">Sports</a>
            <a href="#" className="font-[Manrope] text-sm text-neutral-400 hover:text-white transition-colors">Arts & Culture</a>
            <a href="#" className="font-[Manrope] text-sm text-neutral-400 hover:text-white transition-colors">Science & Exploration</a>
            <a href="#" className="font-[Manrope] text-sm text-neutral-400 hover:text-white transition-colors">Sustainability</a>
        </div>
        
         <div className="flex flex-col gap-4">
            <h5 className="font-[Manrope] text-xs text-[#C5A059] uppercase tracking-widest">Legal</h5>
            <a href="#" className="font-[Manrope] text-sm text-neutral-400 hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="font-[Manrope] text-sm text-neutral-400 hover:text-white transition-colors">Privacy Notice</a>
            <a href="#" className="font-[Manrope] text-sm text-neutral-400 hover:text-white transition-colors">Cookies</a>
        </div>
      </div>
      
      <div className="max-w-[1600px] mx-auto mt-20 pt-8 border-t border-[#111] flex flex-col md:flex-row justify-between items-center text-neutral-600 text-xs font-[Manrope]">
         <span>© 2024 Rolex Watch U.S.A., Inc.</span>
         <span>Official Rolex Retailer</span>
      </div>
    </footer>
  );
};