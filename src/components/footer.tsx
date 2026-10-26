import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-slate-300 py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Brand & Tagline */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            Wanderland
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base">
            Your gateway to extraordinary travel experiences around the world.
          </p>
        </div>

        {/* 4-Column Navigation & Newsletter Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Newsletter */}
          <div className="md:col-span-1">
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">
              NEW SECTION
            </h3>
            <p className="text-xs text-slate-400 mb-4">
              Join our community for exclusive insights and updates.
            </p>
            
            {/* Input Box */}
            <div className="relative flex items-center">
              <input 
                type="email" 
                placeholder="Email address"
                className="w-full bg-[#1e1e1e] border border-slate-700 text-sm text-white placeholder-slate-500 rounded-sm px-3.5 py-2.5 pr-10 focus:outline-none focus:border-slate-500 transition-colors"
              />
              <button 
                type="submit" 
                className="absolute right-2.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Subscribe"
              >
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
              QUICK LINKS
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#destinations" className="hover:text-white transition-colors">Destinations</a></li>
              <li><a href="#bookings" className="hover:text-white transition-colors">My Bookings</a></li>
              <li><a href="#profile" className="hover:text-white transition-colors">My Profile</a></li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
              SUPPORT
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#help" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#terms" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
              CONTACT US
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>786 901 1622</li>
              <li>info@wandarland.com</li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Social Icons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Wanderland. All rights reserved.</p>

          {/* Social Icons */}
          <div className="flex items-center space-x-4 text-slate-400">
            <a href="#twitter" aria-label="Twitter / X" className="hover:text-white transition-colors p-1">
              Twitter
            </a>
            <a href="#linkedin" aria-label="LinkedIn" className="hover:text-white transition-colors p-1">
             LinkDIn
            </a>
            
            <a href="#instagram" aria-label="Instagram" className="hover:text-white transition-colors p-1">
                Insta
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}