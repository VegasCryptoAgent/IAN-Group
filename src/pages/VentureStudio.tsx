import { Rocket, Layers, Code, Globe, ArrowRight, Plus, Zap, Target, BarChart3, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import Section from '../components/Section';
import CalendlyEmbed from '../components/CalendlyEmbed';
import Magnetic from '../components/Magnetic';

export default function VentureStudio() {
  const title = "Venture Studio";
  const subtitle = "Turn Traction Into Scalable Products";
  const problemPoints = [
    "Internal systems are manual and slow",
    "Valuable data is sitting unused",
    "Your internal tools could be industry products",
    "You lack the team to build a SaaS arm"
  ];
  const solution = "We take what’s already working in your business and turn it into scalable AI-powered products.";
  const whatWeDo = [
    { 
      title: "AI Dashboards", 
      desc: "Custom visualization for your most critical business metrics and AI-driven insights.", 
      icon: Layers 
    },
    { 
      title: "Intelligence Layers", 
      desc: "Adding AI brains to your existing software and databases to automate complex decisions.", 
      icon: Rocket 
    },
    { 
      title: "SaaS Platforms", 
      desc: "Turning your internal expertise into a subscription-based product for your industry.", 
      icon: Code 
    }
  ];
  const proof = [
    { label: "New", sub: "Revenue streams created" },
    { label: "Increased", sub: "Company valuation" },
    { label: "Category", sub: "Industry positioning" }
  ];
  const howItWorks = [
    "Identify internal advantage",
    "Build AI infrastructure",
    "Design product experience",
    "Launch to market",
    "Scale distribution"
  ];

  return (
    <div className="bg-obsidian text-white">
      {/* HERO */}
      <section className="min-h-[90vh] flex flex-col justify-center px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full pt-48 pb-20 relative -left-24">
          <h1 className="text-[clamp(2.5rem,7.5vw,7.5rem)] font-display font-black uppercase leading-[0.9] mb-16 flex flex-col tracking-tight">
            {title.split(' ').map((word, i) => (
              <span key={i} className={cn("block overflow-visible", (i === 1 || title.split(' ').length === 1) && "text-electric italic")}>{word}</span>
            ))}
          </h1>
          
          <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-end border-t border-white/10 pt-12">
            <p className="text-xl md:text-2xl text-white/40 max-w-2xl font-light leading-tight">
              {subtitle}
            </p>
            <div className="flex justify-start lg:justify-end">
              <Magnetic strength={0.1}>
                <a 
                  href="#book" 
                  className="bg-white text-obsidian px-12 py-6 rounded-full text-xs font-black uppercase tracking-widest hover:bg-electric transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_50px_rgba(0,242,255,0.4)]"
                >
                  Book Strategy Call
                </a>
              </Magnetic>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM -> SOLUTION: HORIZONTAL WIDE LAYOUT */}
      <Section className="bg-white text-obsidian py-40" dark={false}>
        <div className="max-w-7xl mx-auto space-y-24">
          <div className="space-y-16">
            <h2 className="text-[clamp(3rem,8vw,6rem)] font-display font-black uppercase leading-[0.9] tracking-tighter">
              The <br /> <span className="text-electric italic pr-8 inline-block overflow-visible">Friction.</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {problemPoints.map((p, i) => (
                <div key={i} className="flex gap-6 items-center p-8 border border-obsidian/10 rounded-[2rem] hover:bg-obsidian/5 transition-all duration-500 group">
                  <div className="text-xs font-mono font-black text-electric opacity-40 group-hover:opacity-100 transition-opacity">0{i+1}</div>
                  <p className="text-base font-bold leading-tight tracking-tight break-words">{p}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="p-10 md:p-16 bg-obsidian text-white rounded-[3rem] md:rounded-[4rem] relative overflow-hidden group shadow-2xl border border-white/5 w-full">
            <div className="absolute top-0 right-0 p-12 text-electric/5 text-[15rem] font-black select-none pointer-events-none leading-none">!</div>
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-24">
              <div className="flex-shrink-0">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-px w-8 bg-electric" />
                  <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-electric font-bold">The Shift</span>
                </div>
                <div className="text-4xl md:text-6xl font-display font-black uppercase leading-none tracking-tighter text-electric italic">
                  The <br /> Solution.
                </div>
              </div>
              <p className="text-xl md:text-3xl lg:text-4xl font-display font-black uppercase leading-[1.1] tracking-tighter max-w-5xl break-words">
                {solution}
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* WHAT WE DO - BRUTALIST CARDS */}
      <Section className="py-48">
        <div className="max-w-4xl mx-auto text-center mb-32">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-electric/30" />
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-electric font-bold">Methodology</span>
            <div className="h-px w-12 bg-electric/30" />
          </div>
          <h2 className="text-[clamp(3rem,8vw,6rem)] font-display font-black uppercase leading-[0.9] tracking-tighter">
            Execution <br /> <span className="text-gradient-blue italic pr-8 inline-block overflow-visible relative -left-24">Framework.</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {whatWeDo.map((item, i) => (
            <div key={i} className="p-10 md:p-12 glass-panel rounded-[2.5rem] border-white/5 hover:border-electric/20 hover:bg-white/[0.03] transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-electric/0 via-electric/20 to-electric/0 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-electric mb-12 group-hover:scale-110 group-hover:bg-electric group-hover:text-obsidian transition-all duration-500">
                <item.icon size={32} />
              </div>
              <h3 className="text-[clamp(1.1rem,2.5vw,1.5rem)] font-display font-black uppercase tracking-tight mb-6 leading-tight">
                {item.title.split(' ').map((word, index) => (
                  <span key={index} className="block whitespace-nowrap">{word}</span>
                ))}
              </h3>
              <p className="text-base md:text-lg text-white/40 leading-relaxed group-hover:text-white/70 transition-colors font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* PROOF - KINETIC DATA WALL (FULL BLEED) */}
      <section className="bg-white text-obsidian border-y border-obsidian overflow-hidden relative" id="proof">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-obsidian border-x border-obsidian w-full">
          {proof.map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-6 md:p-10 lg:p-12 flex flex-col justify-between min-h-[400px] md:min-h-[550px] lg:min-h-[650px] hover:bg-obsidian transition-all duration-700 overflow-hidden cursor-crosshair"
            >
              {/* Background Number Decor */}
              <div className="absolute -bottom-10 -right-10 text-[12rem] md:text-[18rem] lg:text-[22rem] font-display font-black text-obsidian/[0.03] group-hover:text-white/[0.03] transition-colors duration-700 select-none pointer-events-none leading-none">
                0{i+1}
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8 md:mb-12">
                  <motion.div 
                    animate={{ width: [0, 32] }}
                    className="h-px bg-electric" 
                  />
                  <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-electric font-bold">Metric_v.0{i+1}</span>
                </div>
                <div className="space-y-4">
                  <h3 className="text-[10px] font-mono uppercase tracking-[0.3em] text-obsidian/40 group-hover:text-white/40 transition-colors">Performance Indicator</h3>
                  <p className="text-xl md:text-2xl lg:text-3xl font-display font-black uppercase tracking-tighter leading-tight group-hover:text-white transition-colors">
                    {item.sub}
                  </p>
                </div>
              </div>

              <div className="relative z-10 mt-auto">
                <div className="flex items-baseline gap-2">
                  <div className="text-3xl md:text-4xl lg:text-[clamp(1.5rem,3.5vw,3.8rem)] font-display font-black text-obsidian group-hover:text-electric transition-all duration-700 tracking-tight leading-none">
                    {item.label}
                  </div>
                  <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-electric animate-pulse opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                </div>
              </div>

              {/* Kinetic Scanline Overlay */}
              <motion.div 
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              >
                <motion.div 
                  animate={{ top: ['-10%', '110%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 w-full h-[2px] bg-electric/30 shadow-[0_0_15px_rgba(0,242,255,0.5)] z-20"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* THE BLUEPRINT - TECHNICAL ARCHITECTURE LAYOUT */}
      <Section className="py-48 bg-obsidian relative overflow-hidden">
        {/* Background Grid for Blueprint feel */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-start mb-32">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-electric" />
              <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-electric font-bold">System Architecture</span>
            </div>
            <h2 className="text-[clamp(3rem,8vw,7rem)] font-display font-black uppercase leading-none tracking-tighter">
              The <span className="text-electric italic pr-8 inline-block overflow-visible">Blueprint.</span>
            </h2>
          </div>
          
          <div className="relative">
            {/* Vertical Blueprint Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />
            
            <div className="space-y-32 relative">
              {howItWorks.map((step, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={cn(
                    "flex flex-col md:flex-row items-center gap-12 md:gap-24",
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  )}
                >
                  {/* Step Number with Blueprint Circle */}
                  <div className="flex-shrink-0 relative">
                    <div className="w-16 h-16 rounded-full border border-electric/30 flex items-center justify-center bg-obsidian relative z-10">
                      <div className="w-12 h-12 rounded-full border border-electric/10 flex items-center justify-center">
                        <span className="font-mono text-sm text-electric">0{i + 1}</span>
                      </div>
                    </div>
                    {/* Horizontal Connector */}
                    <div className={cn(
                      "absolute top-1/2 w-12 h-px bg-electric/20 hidden md:block",
                      i % 2 === 0 ? "left-16" : "right-16"
                    )} />
                  </div>

                  {/* Content Card */}
                  <div className={cn(
                    "flex-grow max-w-xl",
                    i % 2 === 0 ? "text-left" : "md:text-right"
                  )}>
                    <div className="glass-panel p-8 md:p-12 rounded-[2rem] border-white/5 hover:border-electric/30 transition-all duration-500 group">
                      <div className="flex items-center gap-4 mb-6 opacity-40 group-hover:opacity-100 transition-opacity">
                        <div className="w-2 h-2 rounded-full bg-electric" />
                        <span className="text-[10px] font-mono uppercase tracking-widest">Phase_0{i+1}.sys</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-display font-black uppercase tracking-tight mb-6 group-hover:text-electric transition-colors leading-tight">
                        {step}
                      </h3>
                      <div className="h-px w-full bg-white/5 mb-6" />
                      <div className="flex flex-wrap gap-3 opacity-40 group-hover:opacity-100 transition-opacity">
                        <span className="text-[10px] font-mono border border-white/10 px-3 py-1 rounded-full">EXECUTION_READY</span>
                        <span className="text-[10px] font-mono border border-white/10 px-3 py-1 rounded-full">SCALABLE_INFRA</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="min-h-screen flex items-center justify-center bg-electric text-obsidian">
        <div className="max-w-5xl mx-auto text-center w-full">
          <h2 className="text-[clamp(4rem,12vw,10rem)] font-display font-black uppercase leading-[0.9] mb-16 tracking-tighter">
            Ready to <br /> <span className="italic pr-8 inline-block overflow-visible">Scale?</span>
          </h2>
          <div className="glass-panel bg-obsidian/10 border-obsidian/20 p-8 md:p-12 rounded-[3rem] md:rounded-[4rem] w-full">
            <CalendlyEmbed />
          </div>
        </div>
      </Section>
    </div>
  );
}
