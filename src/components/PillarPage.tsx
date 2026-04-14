import Section from '../components/Section';
import CalendlyEmbed from '../components/CalendlyEmbed';
import { ArrowRight, CheckCircle2, Zap, Target, BarChart3, Plus } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import Magnetic from './Magnetic';

interface PillarPageProps {
  title: string;
  subtitle: string;
  problem: string;
  problemPoints: string[];
  solution: string;
  whatWeDo: { title: string; desc: string; icon: any }[];
  proof: { label: string; sub: string }[];
  howItWorks: string[];
  customProcessSection?: React.ReactNode;
  customProblemSection?: React.ReactNode;
  customWhatWeDoSection?: React.ReactNode;
  customProofSection?: React.ReactNode;
}

export default function PillarPage({ 
  title, 
  subtitle, 
  problem, 
  problemPoints, 
  solution, 
  whatWeDo, 
  proof, 
  howItWorks,
  customProcessSection,
  customProblemSection,
  customWhatWeDoSection,
  customProofSection
}: PillarPageProps) {
  return (
    <div className="">
      {/* ... (Hero and Problem sections) ... */}
      {/* (I will only replace the relevant part in the actual call) */}
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

      {/* PROBLEM -> SOLUTION */}
      {customProblemSection ? (
        customProblemSection
      ) : (
        <Section className="bg-white text-obsidian py-40" dark={false}>
          <div className="max-w-7xl mx-auto space-y-32">
            <div className="grid lg:grid-cols-[0.8fr_2.2fr] gap-12 lg:gap-24 items-start">
              <div className="lg:sticky lg:top-40">
                <h2 className="text-[clamp(3rem,8vw,6rem)] font-display font-black uppercase leading-[0.9] tracking-tighter">
                  The <br /> <span className="text-electric italic pr-8 inline-block overflow-visible relative -left-12">Friction.</span>
                </h2>
                <p className="mt-8 text-obsidian/40 font-mono text-[10px] uppercase tracking-[0.3em] max-w-[200px] leading-relaxed">
                  Identifying the bottlenecks that prevent your traction from becoming a global product.
                </p>
              </div>
              
              <div className="grid grid-cols-1 gap-6">
                {problemPoints.map((p, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.8, ease: "easeOut" }}
                    className="p-8 md:p-12 border border-obsidian/10 rounded-[2.5rem] hover:bg-obsidian hover:text-white transition-all duration-700 group relative overflow-hidden flex flex-col justify-center min-h-[180px]"
                  >
                    <div className="flex items-center gap-8 relative z-10">
                      <div className="text-xs font-mono font-black text-electric opacity-40 group-hover:opacity-100 transition-opacity shrink-0">FAULT_0{i+1}</div>
                      <p className="text-lg md:text-xl lg:text-2xl font-display font-black uppercase leading-tight tracking-tight group-hover:text-electric transition-colors">{p}</p>
                    </div>
                    <div className="absolute -bottom-6 -right-6 text-[10rem] font-display font-black opacity-[0.02] group-hover:opacity-[0.05] transition-opacity select-none pointer-events-none leading-none">
                      0{i+1}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="p-10 md:p-20 bg-obsidian text-white rounded-[4rem] relative overflow-hidden group shadow-2xl border border-white/5 w-full">
              {/* Kinetic Background for Solution */}
              <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-1/2 -left-1/2 w-full h-full border-[1px] border-electric/20 rounded-full"
                />
              </div>
              
              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-16 lg:gap-32">
                <div className="flex-shrink-0">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-px w-12 bg-electric" />
                    <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-electric font-bold">The Shift</span>
                  </div>
                  <div className="text-5xl md:text-7xl font-display font-black uppercase leading-none tracking-tighter text-electric italic">
                    The <br /> Solution.
                  </div>
                </div>
                <div className="flex-grow">
                  <p className="text-2xl md:text-4xl lg:text-5xl font-display font-black uppercase leading-[1] tracking-tighter max-w-5xl group-hover:text-electric transition-colors duration-700 break-words">
                    {solution}
                  </p>
                  <div className="mt-12 flex items-center gap-6">
                    <div className="h-px flex-grow bg-white/10" />
                    <div className="text-[10px] font-mono uppercase tracking-widest text-white/20">System_Status: Optimized</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      )}

      {/* WHAT WE DO - BRUTALIST CARDS */}
      {customWhatWeDoSection ? (
        customWhatWeDoSection
      ) : (
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
          
          <div className="flex flex-col gap-8">
            {whatWeDo.map((item, i) => (
              <div key={i} className="p-10 md:p-16 glass-panel rounded-[3rem] border-white/5 hover:border-electric/20 hover:bg-white/[0.03] transition-all duration-700 group relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-electric/0 via-electric/20 to-electric/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-24 h-24 rounded-3xl bg-white/5 flex items-center justify-center text-electric shrink-0 group-hover:scale-110 group-hover:bg-electric group-hover:text-obsidian transition-all duration-700 shadow-[0_0_30px_rgba(0,242,255,0)] group-hover:shadow-[0_0_50px_rgba(0,242,255,0.2)]">
                  <item.icon size={40} />
                </div>
                <div className="flex-grow space-y-4 text-center md:text-left">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-black uppercase tracking-tighter leading-none group-hover:text-electric transition-colors">{item.title}</h3>
                  <p className="text-lg md:text-xl text-white/40 leading-relaxed group-hover:text-white/70 transition-colors font-light max-w-3xl">{item.desc}</p>
                </div>
                <div className="hidden lg:block text-8xl font-display font-black text-white/5 select-none">0{i+1}</div>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* PROOF - MASSIVE STATS */}
      {customProofSection ? (
        customProofSection
      ) : (
        <Section className="bg-white text-obsidian py-40 border-y border-obsidian/5" dark={false}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            {proof.map((item, i) => (
              <div key={i} className="text-center group">
                <div className="text-[clamp(4rem,10vw,8rem)] font-display font-black text-obsidian mb-4 leading-none group-hover:text-electric transition-colors duration-500">{item.label}</div>
                <div className="h-px w-12 bg-electric mx-auto mb-6 opacity-20 group-hover:w-20 group-hover:opacity-100 transition-all duration-500" />
                <p className="text-[10px] md:text-xs font-mono uppercase tracking-[0.4em] opacity-40 font-black">{item.sub}</p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* PROCESS SECTION */}
      {customProcessSection ? (
        customProcessSection
      ) : (
        <Section className="py-48">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center mb-32">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-electric/30" />
                <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-electric font-bold">The Methodology</span>
                <div className="h-px w-12 bg-electric/30" />
              </div>
              <h2 className="text-[clamp(3rem,8vw,6rem)] font-display font-black uppercase leading-none tracking-tighter">
                The <span className="text-electric italic pr-8 inline-block overflow-visible">Process.</span>
              </h2>
            </div>
            
            <div className="space-y-6 md:space-y-8">
              {howItWorks.map((step, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12 group p-8 rounded-3xl hover:bg-white/[0.02] transition-all duration-500 border border-transparent hover:border-white/5"
                >
                  <div className="text-5xl md:text-7xl font-display font-black text-white/5 group-hover:text-electric transition-colors duration-500 min-w-[120px]">0{i + 1}</div>
                  <div className="hidden md:block h-px flex-grow bg-white/5 group-hover:bg-electric/20 transition-colors" />
                  <div className="text-xl md:text-3xl font-display font-black uppercase tracking-tighter group-hover:translate-x-4 transition-transform duration-500">{step}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>
      )}

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
