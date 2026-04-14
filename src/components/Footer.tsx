import { Link } from 'react-router-dom';
import { SITE_NAME, NAV_LINKS } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-obsidian border-t border-white/5 py-32 px-6 relative overflow-hidden">
      <div className="noise-overlay" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-4 mb-12 group">
              <div className="w-12 h-12 bg-electric rounded-full flex items-center justify-center font-display font-black text-obsidian text-2xl group-hover:rotate-[360deg] transition-transform duration-700">
                I
              </div>
              <span className="font-display font-black text-4xl tracking-tighter">
                {SITE_NAME}
              </span>
            </Link>
            <p className="text-2xl text-white/30 max-w-md font-light leading-relaxed">
              The AI Force Multiplier for Companies With Traction. We don't just advise. We execute.
            </p>
          </div>
          
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.4em] text-electric font-bold mb-10">Navigation</h4>
            <ul className="space-y-6">
              {NAV_LINKS.map(link => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="relative group text-2xl font-display font-bold uppercase tracking-tighter text-white/40 hover:text-electric transition-colors inline-block"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-full h-px bg-electric scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.4em] text-electric font-bold mb-10">Connect</h4>
            <ul className="space-y-6">
              <li>
                <a 
                  href="#book" 
                  className="relative group text-2xl font-display font-bold uppercase tracking-tighter text-white/40 hover:text-electric transition-colors inline-block"
                >
                  Book Strategy Call
                  <span className="absolute -bottom-1 left-0 w-full h-px bg-electric scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </a>
              </li>
              <li className="text-white/20 font-mono text-xs tracking-widest uppercase">
                Global / Remote
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-mono uppercase tracking-[0.3em] text-white/20">
          <p>© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>

    </footer>
  );
}
