import { User, LogIn, UserPlus } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="w-full bg-white/95 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Left Navigation Links */}
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link
            href="/"
            className="text-cyan-600 border-b-2 border-cyan-500 pb-1 font-semibold transition-colors"
          >
            Home
          </Link>
          <Link
            href="/destination"
            className="text-slate-600 hover:text-slate-900 transition-colors"
          >
            Destinations
          </Link>
          <a
            href="#bookings"
            className="text-slate-600 hover:text-slate-900 transition-colors"
          >
            My Bookings
          </a>
          <Link href={'/adddestination'}>
          Add-Destination
          
          </Link>
        </nav>

        {/* Center Logo */}
        <div className="shrink-0">
          <a href="#" className="text-2xl font-extrabold tracking-tight text-cyan-600">
            Wanderlast
          </a>
        </div>

        {/* Right User Controls / Buttons */}
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-1.5 text-sm font-medium text-slate-700 hover:text-cyan-600 transition-colors px-2 py-1 rounded-md hover:bg-slate-100">
            <User className="w-4 h-4" />
            <span>Profile</span>
          </button>
          
          <button className="flex items-center space-x-1.5 text-sm font-medium text-slate-700 hover:text-cyan-600 transition-colors px-2 py-1 rounded-md hover:bg-slate-100">
            <LogIn className="w-4 h-4" />
            <span>Login</span>
          </button>
          
          <button className="flex items-center space-x-1.5 text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-700 transition-colors px-3 py-1.5 rounded-md shadow-sm">
            <UserPlus className="w-4 h-4" />
            <span>Sign Up</span>
          </button>
        </div>

      </div>
    </header>
  );
}