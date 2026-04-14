import PillarPage from '../components/PillarPage';
import { Users, TrendingUp, ShieldCheck, Zap, Plus } from 'lucide-react';
import Section from '../components/Section';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

export default function Accelerator() {
  const howItWorks = [
    "Ecosystem Audit",
    "Strategic Positioning",
    "Partnership Outreach",
    "Visibility Campaign",
    "Fundraising Support"
  ];

  const problemPoints = [
    "Revenue-generating startups stuck at plateaus",
    "Founders overwhelmed by daily operations",
    "Companies preparing for funding rounds",
    "Lack of high-level strategic partnerships"
  ];

  return (
    <PillarPage 
      title="Accelerator"
      subtitle="Speed to Scale for Founders With Traction"
      problem="You Don’t Need More Advice. You Need Acceleration."
      problemPoints={problemPoints}
      solution="We work with founders who already have traction — and help them scale faster."
      whatWeDo={[
        { 
          title: "Strategic Advisory", 
          desc: "Direct access to elite operators who have scaled 8-figure businesses.", 
          icon: ShieldCheck 
        },
        { 
          title: "Partnerships", 
          desc: "We plug you into our ecosystem of distribution and strategic partners.", 
          icon: Users 
        },
        { 
          title: "Visibility", 
          desc: "Leveraging the Cory Warfield network to get you 1M+ impressions fast.", 
          icon: TrendingUp 
        }
      ]}
      proof={[
        { label: "1M+", sub: "Impressions in 30 days" },
        { label: "$500k+", sub: "Seed capital raised" },
        { label: "8-Figure", sub: "Supported exits" }
      ]}
      howItWorks={howItWorks}
      customWhatWeDoSection={
        <Section className="py-32 lg:py-48 bg-obsidian text-white relative overflow-hidden" dark={true}>
          {/* Subtle Kinetic Background */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col items-center text-center mb-24">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-px bg-electric" />
                <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-electric font-bold">Phase 03</span>
                <div className="w-12 h-px bg-electric" />
              </div>
              <h2 className="text-[clamp(3rem,8vw,6rem)] font-display font-black uppercase leading-[0.85] tracking-tighter">
                Strategic <span className="text-electric italic pr-8 inline-block overflow-visible">Advisory.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {[
                { 
                  title: "Strategic Advisory", 
                  desc: "Direct access to elite operators who have scaled 8-figure businesses.", 
                  icon: ShieldCheck 
                },
                { 
                  title: "Partnerships", 
                  desc: "We plug you into our ecosystem of distribution and strategic partners.", 
                  icon: Users 
                },
                { 
                  title: "Visibility", 
                  desc: "Leveraging the Cory Warfield network to get you 1M+ impressions fast.", 
                  icon: TrendingUp 
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="group relative h-full"
                >
                  <div className="absolute -inset-2 bg-gradient-to-b from-electric/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative h-full glass-panel rounded-[3rem] p-10 lg:p-14 border-white/5 hover:border-electric/30 transition-all duration-500 flex flex-col">
                    <div className="w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center text-electric mb-12 group-hover:scale-110 group-hover:bg-electric group-hover:text-obsidian transition-all duration-500">
                      <item.icon size={40} />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-display font-black uppercase tracking-tighter mb-6 leading-tight group-hover:text-electric transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-lg text-white/40 leading-relaxed font-light group-hover:text-white/70 transition-colors">
                      {item.desc}
                    </p>
                    
                    <div className="mt-auto pt-12 flex items-center gap-4 text-electric/40 group-hover:text-electric transition-colors">
                      <div className="h-px flex-grow bg-current opacity-20" />
                      <Plus size={20} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>
      }
      customProofSection={
        <Section className="bg-white text-obsidian py-48 border-y border-obsidian/5 relative overflow-hidden" dark={false}>
          {/* Kinetic Background for Stats */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {[
              { label: "1M+", sub: "Impressions", detail: "In 30 Days" },
              { label: "$500k+", sub: "Capital Raised", detail: "Seed Round" },
              { label: "8-Figure", sub: "Supported Exits", detail: "Strategic M&A" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative group p-10 lg:p-14 bg-white border border-obsidian/[0.03] rounded-[3rem] hover:shadow-[0_50px_100px_rgba(0,0,0,0.04)] transition-all duration-700 overflow-hidden flex flex-col justify-between min-h-[320px]"
              >
                {/* Technical Accent Number */}
                <div className="absolute top-0 right-0 p-10 opacity-[0.02] group-hover:opacity-[0.06] transition-opacity pointer-events-none">
                  <span className="text-[10rem] font-display font-black leading-none">0{i+1}</span>
                </div>

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="text-[clamp(2rem,4vw,3.5rem)] font-display font-black text-obsidian mb-4 leading-[1.1] group-hover:text-electric transition-colors duration-500 tracking-tighter whitespace-nowrap">
                    {item.label}
                  </div>
                  <div className="flex items-center justify-center gap-4 mb-8 w-full">
                    <div className="h-px w-8 bg-electric group-hover:w-12 transition-all duration-500 shrink-0" />
                    <span className="text-[10px] md:text-[11px] font-mono uppercase tracking-[0.2em] font-black opacity-30 group-hover:opacity-50 transition-opacity whitespace-normal">
                      {item.sub}
                    </span>
                    <div className="h-px w-8 bg-electric group-hover:w-12 transition-all duration-500 shrink-0" />
                  </div>
                </div>

                <div className="relative z-10">
                  <p className="text-xs text-obsidian/20 font-mono uppercase tracking-widest group-hover:text-obsidian/40 transition-colors leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                {/* Kinetic Progress Bar */}
                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-obsidian/[0.02]">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ delay: 0.5 + (i * 0.2), duration: 1.5, ease: "easeInOut" }}
                    className="h-full bg-electric opacity-30"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </Section>
      }
      customProblemSection={
        <div className="bg-white overflow-hidden">
          {/* THE FRICTION: MINIMALIST PROBLEM LIST */}
          <Section className="py-32 lg:py-48 bg-[#fcfcfc]" dark={false}>
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid lg:grid-cols-[0.6fr_1.4fr] gap-20 items-start">
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-px bg-obsidian/20" />
                    <span className="text-[10px] font-mono uppercase tracking-[0.5em] font-black opacity-40">Phase 01</span>
                  </div>
                  <h2 className="text-[clamp(3rem,8vw,6rem)] font-display font-black uppercase leading-[0.9] tracking-tighter mb-8">
                    The <span className="text-electric italic">Friction.</span>
                  </h2>
                  <p className="text-xl text-obsidian/40 max-w-md font-light leading-relaxed">
                    Founders with traction often hit a invisible ceiling. We identify the drag factors holding you back from true scale.
                  </p>
                </div>

                <div className="space-y-6">
                  {problemPoints.map((p, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.8 }}
                      className="group flex items-center justify-between p-8 bg-white border border-obsidian/5 rounded-3xl hover:border-electric/30 transition-all duration-500 hover:shadow-[0_30px_60px_rgba(0,0,0,0.04)]"
                    >
                      <div className="flex items-center gap-8">
                        <span className="text-4xl font-display font-black text-obsidian/5 group-hover:text-electric/20 transition-colors">0{i+1}</span>
                        <p className="text-xl md:text-2xl font-bold tracking-tight break-words">{p}</p>
                      </div>
                      <div className="w-12 h-12 rounded-full border border-obsidian/5 flex items-center justify-center group-hover:bg-electric group-hover:border-electric transition-all duration-500">
                        <div className="w-4 h-px bg-obsidian/20 group-hover:bg-white transition-colors" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </Section>

          {/* THE SHIFT: CINEMATIC SOLUTION BENTO */}
          <Section className="py-32 lg:py-48 bg-obsidian text-white relative" dark={true}>
            {/* Subtle Kinetic Background */}
            <div className="absolute inset-0 opacity-30 pointer-events-none">
              <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
              <div className="flex flex-col items-center text-center mb-24">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-px bg-electric" />
                  <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-electric font-bold">Phase 02</span>
                  <div className="w-12 h-px bg-electric" />
                </div>
                <h2 className="text-[clamp(2rem,6vw,5rem)] font-display font-black uppercase leading-[0.9] tracking-tighter max-w-4xl">
                  <span className="block">We Work With Founders</span>
                  <span className="block">Who Have Traction —</span>
                  <span className="block">And Help Them <span className="text-electric italic">Scale Faster.</span></span>
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { label: 'No Programs', sub: 'Zero Fluff', desc: 'No cohorts, no curriculum. Just direct, high-impact execution.' },
                  { label: 'Direct Execution', sub: 'Hands-on', desc: 'We don\'t just advise. We embed and build with your team.' },
                  { label: 'Elite Network', sub: 'Top 1%', desc: 'Immediate access to the world\'s most powerful operators.' },
                  { label: 'Pure Momentum', sub: 'Fast Growth', desc: 'Our systems are designed for one thing: Unstoppable speed.' }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-white/[0.08] hover:border-electric/50 transition-all duration-500 group"
                  >
                    <div className="text-[10px] font-mono uppercase tracking-widest text-electric mb-6 font-bold">{item.sub}</div>
                    <h4 className="text-[clamp(0.75rem,1.5vw,0.9rem)] font-display font-black uppercase leading-[1.1] mb-6 group-hover:text-electric transition-colors tracking-tighter whitespace-nowrap relative -left-2">
                      {item.label}
                    </h4>
                    <p className="text-sm text-white/40 leading-relaxed group-hover:text-white/60 transition-colors break-words">{item.desc}</p>
                  </motion.div>
                ))}
              </div>

              {/* Kinetic Momentum Bar */}
              <div className="mt-32 pt-12 border-t border-white/10">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/20">Momentum Engine Status</span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-electric font-bold">Active / 100% Velocity</span>
                </div>
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    className="h-full bg-electric shadow-[0_0_20px_rgba(0,242,255,0.5)]"
                  />
                </div>
              </div>
            </div>
          </Section>
        </div>
      }
      customProcessSection={
        <Section className="py-48 bg-white text-obsidian overflow-hidden" dark={false}>
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center text-center mb-32">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-electric" />
                <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-electric font-bold">The Momentum Engine</span>
                <div className="h-px w-12 bg-electric" />
              </div>
              <h2 className="text-[clamp(3rem,8vw,7rem)] font-display font-black uppercase leading-none tracking-tighter">
                The <span className="text-electric italic pr-8 inline-block overflow-visible">Velocity Path.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {howItWorks.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={cn(
                    "group relative p-12 bg-obsidian text-white rounded-[3rem] overflow-hidden min-h-[300px] flex flex-col justify-between hover:bg-electric hover:text-obsidian transition-all duration-500",
                    i === 4 && "md:col-span-2"
                  )}
                >
                  <div className="absolute -top-10 -right-10 text-[15rem] font-display font-black text-white/[0.03] group-hover:text-obsidian/10 transition-colors leading-none">
                    {i + 1}
                  </div>
                  <div className="relative z-10">
                    <Zap className="mb-8 group-hover:scale-125 transition-transform duration-500" size={40} />
                    <h3 className="text-[clamp(1.5rem,3.5vw,2.75rem)] font-display font-black uppercase tracking-tighter leading-[1.1] break-keep max-w-2xl overflow-visible">
                      {step}
                    </h3>
                  </div>
                  <div className="relative z-10 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-electric group-hover:bg-obsidian" />
                    <span className="text-[10px] font-mono uppercase tracking-widest font-bold">Active_Phase</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>
      }
    />
  );
}
