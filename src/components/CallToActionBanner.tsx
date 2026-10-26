import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import CTA from '../../public/images/CTA.png'


export default function CallToActionBanner() {
  return (
    <section className="relative min-h-112 w-full flex items-center justify-center bg-slate-950 overflow-hidden py-20 px-4">
      
      {/* Background Aerial / Airplane Image */}
      <div className="absolute inset-0 opacity-50">
        <Image 
          src={CTA} 
          alt="Aerial view of island and airplane" 
          fill 
          priority
          sizes="100vw"
          className="object-cover object-center" 
        />
      </div>

      {/* Dark Radial / Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient from-slate-950/90 via-slate-950/50 to-slate-950/90" />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* Title */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-extrabold text-white tracking-tight leading-tight">
          Ready To Start Your Journey?
        </h2>
        
        {/* Subtitle */}
        <p className="mt-4 text-slate-300 text-sm sm:text-base md:text-lg font-light tracking-wide max-w-xl">
          Join thousands of travelers who have discovered the world with us
        </p>

        {/* Action Button */}
        <div className="mt-8">
          <button className="px-8 py-4 bg-white hover:bg-slate-100 text-slate-900 font-semibold text-sm tracking-widest uppercase rounded-sm shadow-xl transition-all duration-300 flex items-center space-x-3 group cursor-pointer active:scale-95">
            <span>BOOK YOUR TRIP TODAY</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </section>
  );
}