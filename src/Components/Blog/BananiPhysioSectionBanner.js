import React from 'react';
// import { ArrowRight, CheckCircle2 } from 'lucide-react'; // Optional: install lucide-react or use inline SVG

const BananiPhysioSectionBanner = () => {
  return (
   <div className="relative w-full max-w-5xl mx-auto min-h-[380px] md:min-h-[420px] rounded-2xl overflow-hidden shadow-2xl my-6 flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://leap.mrg.com.bd/static/media/service-caregive.f73bb16bcec38cd23239.jpg')`,
        }}
      />

      {/* Dark Blue Left-to-Right Overlay (Matching the image gradient) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d1f3d] via-[#0d1f3d]/90 to-transparent w-full md:w-[85%]" />

      {/* Banner Content Container */}
      <div className="relative z-10 p-8 sm:p-12 md:p-16 max-w-2xl space-y-4">
        
        {/* Category / Guide Badge */}
        <div className="inline-block bg-[#f5a623] text-slate-950 text-xs sm:text-sm font-bold tracking-wider uppercase px-4 py-1.5 rounded-full shadow-sm">
          2026 EXPERT CARE GUIDE
        </div>

        {/* Title Heading with Highlighted Keyword */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-wide leading-tight">
          Physiotherapy Center <br />
          <span className="text-[#f5a623] relative inline-block pl-3 border-l-4 border-[#f5a623]">
            in Banani
          </span>
        </h1>

        {/* Subtitle Line */}
        <p className="text-slate-300 text-base sm:text-lg font-medium tracking-wide">
          Expert Physiotherapy Care & Rehab Services
        </p>

        {/* Read More Button */}
        <div className="pt-4">
          <a
            href="/physiotherapy-center-in-banani"
            className="inline-block bg-slate-900/90 hover:bg-slate-900 text-white text-xs sm:text-sm font-bold tracking-widest uppercase px-8 py-3.5 rounded-md border border-slate-700/60 shadow-lg hover:border-slate-500 transition-all duration-200"
          >
            READ MORE
          </a>
        </div>

      </div>
    </div>
  );
};

export default BananiPhysioSectionBanner;