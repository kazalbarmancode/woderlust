import { ArrowRight, MapPin, Calendar, DollarSign, Users, Search } from 'lucide-react';
import Image from 'next/image';
import BannerPic from '../../public/images/Banner.png';
import Link from 'next/link';

export default function HeroBanner() {
  return (
    <div className="relative min-h-150 w-full flex flex-col justify-between bg-slate-900 overflow-hidden">
      
      {/* Background Image using Next.js Image Component */}
      <div className="absolute inset-0 opacity-60">
        <Image 
          src={BannerPic} 
          alt="Banner background" 
          fill 
          priority
          className="object-cover object-center" 
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient from-slate-950/80 via-slate-900/30 to-slate-900/40" />

      {/* Main Banner Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-24 pb-16 my-auto">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
          Discover Your <br /> Next Adventure
        </h1>
        
        <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-200 max-w-2xl mx-auto font-normal">
          Explore breathtaking destinations and create unforgettable memories with our curated travel experiences.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-md shadow-lg transition-all flex items-center justify-center space-x-2 cursor-pointer">
            <span>EXPLORE NOW</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <Link href={'/destination'}>
          <button className="w-full sm:w-auto px-6 py-3 bg-white/20 hover:bg-white/30 text-white font-medium rounded-md backdrop-blur-md border border-white/30 transition-all cursor-pointer">
            VIEW DESTINATION
          </button>
          </Link>
        </div>
      </div>

      {/* Search Filter Bar */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-4 pb-6">
        <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700/60 rounded-xl grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-slate-700/60 overflow-hidden shadow-2xl">
          
          {/* Location */}
          <div className="p-4 flex flex-col justify-center">
            <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              Location
            </label>
            <input 
              type="text" 
              placeholder="Address, City Or Zip"
              className="mt-1 bg-transparent text-sm text-white placeholder-slate-400 focus:outline-none"
            />
          </div>

          {/* Date / Duration */}
          <div className="p-4 flex flex-col justify-center">
            <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-cyan-400" />
              Date / Duration
            </label>
            <input 
              type="text" 
              placeholder="Anytime / 3 Days"
              className="mt-1 bg-transparent text-sm text-white placeholder-slate-400 focus:outline-none"
            />
          </div>

          {/* Budget */}
          <div className="p-4 flex flex-col justify-center">
            <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <DollarSign className="w-3.5 h-3.5 text-cyan-400" />
              Budget
            </label>
            <input 
              type="text" 
              placeholder="$0 - $3000"
              className="mt-1 bg-transparent text-sm text-white placeholder-slate-400 focus:outline-none"
            />
          </div>

          {/* People */}
          <div className="p-4 flex flex-col justify-center">
            <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-cyan-400" />
              People
            </label>
            <input 
              type="text" 
              placeholder="5 - 10"
              className="mt-1 bg-transparent text-sm text-white placeholder-slate-400 focus:outline-none"
            />
          </div>

          {/* Search Button */}
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold flex items-center justify-center space-x-2 p-4 transition-colors cursor-pointer">
            <Search className="w-5 h-5" />
            <span>Search</span>
          </button>

        </div>
      </div>
    </div>
  );
}