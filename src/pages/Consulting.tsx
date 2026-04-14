import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Database, Lightbulb, Workflow, ArrowRight, CheckCircle2, Zap, Target, BarChart3, Plus, Sparkles, ShieldCheck, Rocket } from 'lucide-react';
import { cn } from '../lib/utils';
import Magnetic from '../components/Magnetic';
import Section from '../components/Section';
import CalendlyEmbed from '../components/CalendlyEmbed';

export default function Consulting() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  const problemPoints = [
    "Your data is fragmented",
    "Your systems don’t talk to each other",
    "Your team doesn’t know where AI fits",
    "Your competitors are already moving"
  ];

  const whatWeDo = [
    { 
      title: "AI Preparedness", 
      desc: "Structure your data so AI can actually create value. We audit your current tech stack and data flow.", 
      icon: Database 
    },
    { 
      title: "AI Strategy", 
      desc: "Define exactly where AI drives growth and efficiency. No fluff, just high-impact use cases.", 
      icon: Lightbulb 
    },
    { 
      title: "AI Integration", 
      desc: "Deploy AI into workflows, decisions, and operations. We build the systems that run your business.", 
      icon: Workflow 
    }
  ];

  const proof = [
    { label: "+25%", sub: "Revenue growth in 90 days" },
    { label: "2 Days", sub: "Saved per week for founders" },
    { label: "Real-time", sub: "Operational clarity across teams" }
  ];

  const howItWorks = [
    "Initial Audit and Data Mapping",
    "Strategic Roadmap Development",
    "System Architecture and Design",
    "Agile Deployment and Integration",
    "Training and Optimization"
  ];

  return (
    <div ref={containerRef} className="relative bg-obsidian text-white overflow-x-hidden">
      {/* BESPOKE HERO: FULL WIDTH */}
      <section className="min-h-screen relative flex flex-col justify-center overflow-hidden">
        {/* Content Container */}
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-24 pt-32 pb-20 relative z-10 -left-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-[clamp(2.5rem,7.5vw,7.5rem)] font-display font-black uppercase leading-[0.85] mb-12 tracking-tight">
              AI <br /> 
              <span className="text-electric italic inline-block overflow-visible">Integration.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/40 max-w-xl font-light leading-tight mb-16">
              AI Integration for Companies Ready to Scale. We don't just advise; we build the systems that multiply your output.
            </p>

            <div className="flex flex-wrap gap-6">
              <Magnetic strength={0.1}>
                <a 
                  href="#book" 
                  className="bg-white text-obsidian px-12 py-6 rounded-full text-xs font-black uppercase tracking-widest hover:bg-electric transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_50px_rgba(0,242,255,0.4)]"
                >
                  Book Strategy Call
                </a>
              </Magnetic>
            </div>
          </motion.div>

          {/* Vertical Rail Text */}
          <div className="absolute left-6 bottom-12 hidden lg:block">
            <div className="writing-vertical-rl rotate-180 text-[10px] font-mono uppercase tracking-[0.8em] text-white/10">
              01 — THE FOUNDATION — 01 — THE FOUNDATION
            </div>
          </div>
        </div>
      </section>

      {/* THE FRICTION: VISIBLE GRID STRUCTURE */}
      <Section className="bg-white text-obsidian py-48 relative z-20" dark={false}>
        <div className="grid lg:grid-cols-[0.8fr_2.2fr] gap-24 items-start">
          <div className="lg:sticky lg:top-32">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-obsidian/20" />
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-obsidian/40 font-bold">02 — The Problem</span>
            </div>
            <h2 className="text-[clamp(3rem,6vw,5rem)] font-display font-black uppercase leading-[0.9] tracking-tighter mb-8">
              AI Is No Longer <br /> <span className="text-electric italic pr-8 inline-block overflow-visible">Optional.</span>
            </h2>
            <p className="text-xl text-obsidian/60 font-light leading-relaxed max-w-md">
              But most companies are not ready. They are building on top of fragmented data and broken workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px bg-obsidian/5 border border-obsidian/5 rounded-[2rem] overflow-hidden">
            {problemPoints.map((point, i) => (
              <div key={i} className="bg-white p-12 flex flex-col justify-center min-h-[200px] group hover:bg-obsidian hover:text-white transition-all duration-700">
                <div className="flex items-center gap-12">
                  <div className="text-4xl font-display font-black text-obsidian/5 group-hover:text-white/10 transition-colors shrink-0">0{i+1}</div>
                  <p className="text-[clamp(1.25rem,4vw,1.75rem)] font-bold leading-tight tracking-tight">{point}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* THE SHIFT: IMMERSIVE TRANSFORMATION */}
      <section className="py-48 relative overflow-hidden bg-obsidian">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,242,255,0.05),transparent_70%)]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-4 px-6 py-2 rounded-full border border-white/10 bg-white/5 mb-12"
            >
              <Sparkles size={16} className="text-electric" />
              <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/60">The Transformation</span>
            </motion.div>
            
            <h2 className="text-[clamp(3rem,8vw,7rem)] font-display font-black uppercase leading-[0.85] tracking-tighter mb-12 flex flex-col items-center">
              <span>We Build the Foundation for</span>
              <span className="text-electric italic overflow-visible">Intelligent Scale.</span>
            </h2>
            
            <p className="text-2xl text-white/40 font-light leading-relaxed">
              The risk isn’t adopting AI too slowly. The risk is implementing it wrong. We ensure your AI strategy is built on a rock-solid operational foundation.
            </p>
          </div>

          {/* Service Pillars: Bespoke Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {whatWeDo.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group relative"
              >
                <div className="absolute -inset-2 bg-gradient-to-b from-electric/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative glass-panel rounded-[3rem] p-8 lg:p-12 border-white/5 hover:border-electric/30 transition-all duration-500 h-full flex flex-col">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-3xl bg-white/5 flex items-center justify-center text-electric mb-10 lg:mb-12 group-hover:scale-110 group-hover:bg-electric group-hover:text-obsidian transition-all duration-500">
                    <item.icon size={32} className="lg:hidden" />
                    <item.icon size={40} className="hidden lg:block" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-display font-black uppercase tracking-tighter mb-6 leading-tight">{item.title}</h3>
                  <p className="text-base lg:text-lg text-white/40 leading-relaxed font-light group-hover:text-white/70 transition-colors">{item.desc}</p>
                  
                  <div className="mt-auto pt-10 lg:pt-12 flex items-center gap-4 text-electric/40 group-hover:text-electric transition-colors">
                    <div className="h-px flex-grow bg-current opacity-20" />
                    <Plus size={20} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF: KINETIC DATA LIST */}
      <Section 
        id="proof"
        className="bg-white text-obsidian py-48 border-y border-obsidian/10" 
        containerClassName="max-w-none w-full px-6 md:px-12 lg:px-24"
        dark={false}
      >
        <div className="flex flex-col border-t border-obsidian/10">
          {proof.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative border-b border-obsidian/10 py-16 md:py-24 flex flex-col gap-8 hover:bg-obsidian hover:text-white transition-all duration-500 px-8 -mx-8"
            >
              <div className="flex items-center gap-6 mb-4">
                <span className="text-xl font-mono opacity-20 group-hover:text-electric group-hover:opacity-100 transition-all">0{i+1}</span>
                <div className="h-px w-12 bg-electric group-hover:w-24 transition-all duration-500" />
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-[clamp(1.5rem,4vw,3.5rem)] font-display font-black leading-none tracking-tighter group-hover:text-electric transition-colors duration-500 break-words">
                  {item.label}
                </h3>
                <p className="text-[clamp(1rem,1.8vw,1.5rem)] font-bold uppercase tracking-tight group-hover:translate-x-4 transition-transform duration-500 opacity-40 group-hover:opacity-100 break-words">
                  {item.sub}
                </p>
              </div>

              {/* Hover Decorative Element */}
              <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden lg:block opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none">
                <Plus size={160} className="text-electric" />
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ROADMAP: THE STRATEGIC PATH - VISUAL ROAD */}
      <Section className="py-48 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <div className="flex flex-col items-center text-center mb-32">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-electric/30" />
              <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-electric font-bold">The Strategic Path</span>
              <div className="h-px w-12 bg-electric/30" />
            </div>
            <h2 className="text-[clamp(3rem,8vw,6rem)] font-display font-black uppercase leading-none tracking-tighter">
              The <span className="text-electric italic pr-8 inline-block overflow-visible">Roadmap.</span>
            </h2>
          </div>
          
          <div className="relative py-20">
            {/* The Road SVG - Now stretches with content */}
            <div className="absolute inset-0 pointer-events-none z-0 flex justify-center">
              <svg width="100%" height="100%" viewBox="0 0 400 1200" fill="none" preserveAspectRatio="none" className="max-w-4xl">
                <defs>
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="15" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                  <linearGradient id="roadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#00f2ff" />
                    <stop offset="50%" stopColor="#7000ff" />
                    <stop offset="100%" stopColor="#ff00ff" />
                  </linearGradient>
                </defs>

                {/* Main Road Path - High Visibility */}
                <motion.path
                  d="M200 0 C200 150, 350 225, 350 375 C350 525, 50 675, 50 825 C50 975, 200 1050, 200 1200"
                  stroke="url(#roadGradient)"
                  strokeWidth="80"
                  strokeLinecap="round"
                  filter="url(#glow)"
                  className="opacity-60"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2.5, ease: "easeInOut" }}
                />

                {/* Road Center Line - Animated Dash */}
                <motion.path
                  d="M200 0 C200 150, 350 225, 350 375 C350 525, 50 675, 50 825 C50 975, 200 1050, 200 1200"
                  stroke="white"
                  strokeWidth="4"
                  strokeDasharray="20 30"
                  initial={{ strokeDashoffset: 1000 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />

                {/* Moving Energy Pulse */}
                <motion.circle
                  r="10"
                  fill="#00f2ff"
                  filter="url(#glow)"
                  initial={{ offsetDistance: "0%" }}
                  animate={{ offsetDistance: "100%" }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  style={{
                    offsetPath: "path('M200 0 C200 150, 350 225, 350 375 C350 525, 50 675, 50 825 C50 975, 200 1050, 200 1200')",
                  }}
                />
              </svg>
            </div>

            {/* Steps positioned along the road - Flex layout for zero overlap */}
            <div className="relative z-10 flex flex-col gap-[150px] md:gap-[250px]">
              {[
                { align: "justify-center", textAlign: "items-center text-center" },
                { align: "justify-end pr-[5%] md:pr-[10%]", textAlign: "items-end text-right" },
                { align: "justify-start pl-[5%] md:pl-[10%]", textAlign: "items-start text-left" },
                { align: "justify-end pr-[5%] md:pr-[10%]", textAlign: "items-end text-right" },
                { align: "justify-center", textAlign: "items-center text-center" }
              ].map((layout, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className={cn("flex w-full", layout.align)}
                >
                  <div className={cn("flex flex-col gap-6 max-w-[280px] md:max-w-md group", layout.textAlign)}>
                    <div className="w-20 h-20 rounded-3xl bg-electric text-obsidian flex items-center justify-center font-display font-black text-3xl shadow-[0_0_40px_rgba(0,242,255,0.8)] group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      {i + 1}
                    </div>
                    <div className="glass-panel p-8 md:p-12 rounded-[2.5rem] border-white/10 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:border-electric/50 transition-all duration-500">
                      <h4 className="text-2xl md:text-3xl font-display font-black uppercase tracking-tighter leading-tight text-white group-hover:text-electric transition-colors">
                        {howItWorks[i]}
                      </h4>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* FINAL CTA: BESPOKE LAYOUT */}
      <section className="min-h-screen flex items-center justify-center bg-electric text-obsidian relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,rgba(0,0,0,0.1)_20px,rgba(0,0,0,0.1)_40px)]" />
        </div>
        
        <div className="max-w-5xl mx-auto text-center w-full px-6 relative z-10">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              whileInView={{ scale: 1, opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[clamp(4rem,12vw,10rem)] font-display font-black uppercase leading-[0.85] mb-16 tracking-tighter pt-24"
            >
              Ready to <br /> <span className="italic pr-8 inline-block overflow-visible">Scale?</span>
            </motion.h2>
            <div className="glass-panel bg-obsidian/10 border-obsidian/20 p-8 md:p-12 rounded-[3.5rem] md:rounded-[4.5rem] w-full shadow-2xl">
              <CalendlyEmbed />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
