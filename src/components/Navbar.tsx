import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS, SITE_NAME } from '../constants';
import { cn } from '../lib/utils';
import Magnetic from './Magnetic';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav 
      className={cn(
        "fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] max-w-6xl",
        scrolled ? "top-4" : "top-8"
      )}
    >
      <div className={cn(
        "glass-panel rounded-full px-4 py-2 flex items-center justify-between transition-all duration-500 border-white/10",
        scrolled ? "bg-obsidian/80 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)]" : "bg-white/5"
      )}>
        <div className="flex items-center gap-8">
          <Magnetic strength={0.1}>
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative w-9 h-9 flex items-center justify-center">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-electric/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Main Logo Container */}
                <div className="relative w-full h-full bg-obsidian border border-white/10 rounded-xl flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-electric/40 group-hover:shadow-[0_0_20px_rgba(0,242,255,0.15)]">
                  <motion.div 
                    animate={{ 
                      background: [
                        "radial-gradient(circle at 0% 0%, rgba(0,242,255,0.1) 0%, transparent 50%)",
                        "radial-gradient(circle at 100% 100%, rgba(0,242,255,0.1) 0%, transparent 50%)",
                        "radial-gradient(circle at 0% 0%, rgba(0,242,255,0.1) 0%, transparent 50%)"
                      ]
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="absolute inset-0"
                  />
                  <div className="relative flex flex-col items-center gap-0.5">
                    <motion.div 
                      animate={{ scaleY: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="w-1 h-1 bg-electric rounded-full shadow-[0_0_8px_#00f2ff]" 
                    />
                    <div className="w-1 h-4 bg-gradient-to-b from-electric to-electric/40 rounded-full shadow-[0_0_8px_rgba(0,242,255,0.3)]" />
                  </div>
                </div>
              </div>
              <span className="font-display font-black text-xl tracking-tighter hidden lg:block">
                {SITE_NAME}
              </span>
            </Link>
          </Magnetic>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/5">
            {NAV_LINKS.map((link) => (
              <div key={link.name} className="relative">
                <Magnetic strength={0.1}>
                  <Link 
                    to={link.href}
                    className={cn(
                      "relative z-10 text-[9px] uppercase tracking-[0.15em] font-black px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2",
                      location.pathname === link.href ? "text-obsidian" : "text-white/40 hover:text-white"
                    )}
                  >
                    {location.pathname === link.href && (
                      <motion.div 
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-electric rounded-full -z-10 shadow-[0_0_15px_rgba(0,242,255,0.3)]"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    {link.name}
                  </Link>
                </Magnetic>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex xl:hidden items-center gap-1">
            {/* Show only critical links on medium screens if needed, or just keep it simple */}
          </div>

          <Magnetic strength={0.15}>
            <a 
              href="#book" 
              className="hidden sm:flex relative group"
            >
              <div className="absolute inset-0 bg-electric/40 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-white text-obsidian px-5 py-2 rounded-full text-[9px] font-black uppercase tracking-widest hover:bg-electric transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_30px_rgba(0,242,255,0.4)]">
                Book Call
              </div>
            </a>
          </Magnetic>
          
          {/* Mobile Toggle */}
          <button 
            className="xl:hidden text-white p-2 hover:text-electric transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="absolute top-full mt-4 left-0 right-0 glass-panel rounded-3xl p-8 flex flex-col gap-6 md:hidden overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-electric to-magenta" />
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.name} 
                to={link.href}
                className="text-3xl font-display font-black uppercase tracking-tighter hover:text-electric transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="#book" 
              className="mt-4 bg-electric text-obsidian px-8 py-4 rounded-full text-center font-black uppercase tracking-widest"
            >
              Book Strategy Call
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
