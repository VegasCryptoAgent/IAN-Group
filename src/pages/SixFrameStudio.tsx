import PillarPage from '../components/PillarPage';
import { Video, Camera, Share2, Sparkles, Play } from 'lucide-react';
import Section from '../components/Section';
import { motion } from 'motion/react';

export default function SixFrameStudio() {
  const howItWorks = [
    "Creative Concepting",
    "AI Asset Generation",
    "Media Production",
    "Distribution Strategy",
    "Performance Tracking"
  ];

  return (
    <PillarPage 
      title="6Frame AI Studio"
      subtitle="AI-Powered Content, Media, and Visibility"
      problem="Visibility Is the New Distribution. If no one sees it, it doesn’t scale."
      problemPoints={[
        "High-quality content is too slow to produce",
        "Traditional media is too expensive for most brands",
        "Your message is getting lost in the noise",
        "You lack a consistent content engine"
      ]}
      solution="We help brands, founders, and artists produce AI-driven content, commercials, and media that scale visibility globally. Create Content That Moves Markets."
      whatWeDo={[
        { 
          title: "AI Commercials", 
          desc: "High-end product commercials produced in days, not months, using advanced AI video.", 
          icon: Video 
        },
        { 
          title: "Digital Storytelling", 
          desc: "Creating viral-ready content that builds brand authority and cultural relevance.", 
          icon: Sparkles 
        },
        { 
          title: "AI Websites", 
          desc: "High-converting, interactive web experiences that act as your 24/7 sales engine.", 
          icon: Share2 
        }
      ]}
      proof={[
        { label: "1M+", sub: "Audience growth" },
        { label: "Global", sub: "Visibility & Reach" },
        { label: "Market", sub: "Authority established" }
      ]}
      howItWorks={howItWorks}
      customWhatWeDoSection={
        <Section className="py-48 bg-obsidian relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col items-center text-center mb-32">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-electric/30" />
                <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-electric font-bold">The Methodology</span>
                <div className="h-px w-12 bg-electric/30" />
              </div>
              <h2 className="text-[clamp(3rem,8vw,7rem)] font-display font-black uppercase leading-none tracking-tighter">
                Execution <br /> <span className="text-electric italic pr-8 inline-block overflow-visible">Framework.</span>
              </h2>
            </div>

            <div className="flex flex-col gap-12">
              {[
                { 
                  title: "AI Commercials", 
                  desc: "High-end product commercials produced in days, not months, using advanced AI video.", 
                  icon: Video,
                  meta: "PIPELINE_01"
                },
                { 
                  title: "Digital Storytelling", 
                  desc: "Creating viral-ready content that builds brand authority and cultural relevance.", 
                  icon: Sparkles,
                  meta: "PIPELINE_02"
                },
                { 
                  title: "AI Websites", 
                  desc: "High-converting, interactive web experiences that act as your 24/7 sales engine.", 
                  icon: Share2,
                  meta: "PIPELINE_03"
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="group relative flex flex-col md:flex-row items-center gap-12 p-12 md:p-16 glass-panel rounded-[3rem] border-white/5 hover:border-electric/30 transition-all duration-700 overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-electric/0 via-electric/20 to-electric/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="w-24 h-24 rounded-3xl bg-white/5 flex items-center justify-center text-electric shrink-0 group-hover:scale-110 group-hover:bg-electric group-hover:text-obsidian transition-all duration-700 shadow-[0_0_30px_rgba(0,242,255,0)] group-hover:shadow-[0_0_50px_rgba(0,242,255,0.3)]">
                    <item.icon size={40} />
                  </div>

                  <div className="flex-grow space-y-6">
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] font-mono text-electric/40 uppercase tracking-widest">{item.meta}</span>
                      <div className="h-px w-8 bg-white/10" />
                    </div>
                    <h3 className="text-[clamp(1.25rem,4vw,2rem)] font-display font-black uppercase tracking-tighter leading-none group-hover:text-electric transition-colors break-words">
                      {item.title}
                    </h3>
                    <p className="text-lg md:text-xl text-white/40 leading-tight group-hover:text-white/70 transition-colors font-light max-w-3xl">
                      {item.desc}
                    </p>
                  </div>

                  <div className="hidden lg:block text-[12rem] font-display font-black text-white/5 select-none absolute -right-8 -bottom-12 group-hover:text-white/10 transition-colors">
                    0{i+1}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>
      }
      customProofSection={
        <Section className="bg-white text-obsidian py-48 relative overflow-hidden" dark={false}>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-3 gap-px bg-obsidian/10 border border-obsidian/10 rounded-[3rem] overflow-hidden">
              {[
                { label: "1M+", sub: "Audience growth", detail: "Global Reach" },
                { label: "Global", sub: "Visibility & Reach", detail: "Market Dominance" },
                { label: "Market", sub: "Authority established", detail: "Brand Power" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-12 md:p-16 flex flex-col justify-between min-h-[450px] group hover:bg-obsidian hover:text-white transition-all duration-700"
                >
                  <div className="space-y-8">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse" />
                      <span className="text-[10px] font-mono uppercase tracking-widest opacity-40">Metric_0{i+1}</span>
                    </div>
                    <div className="text-[clamp(2rem,6vw,4rem)] font-display font-black leading-none tracking-tight group-hover:text-electric transition-colors relative -left-12">
                      {item.label}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="h-px w-12 bg-electric opacity-20 group-hover:w-full group-hover:opacity-100 transition-all duration-700" />
                    <p className="text-lg md:text-xl font-display font-black uppercase tracking-tighter leading-tight">
                      {item.sub}
                    </p>
                    <p className="text-[10px] font-mono uppercase tracking-[0.4em] opacity-40">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>
      }
      customProblemSection={
        <Section className="py-48 bg-white text-obsidian relative overflow-hidden" dark={false}>
          {/* Viewfinder Overlay */}
          <div className="absolute inset-0 pointer-events-none z-20">
            <div className="absolute top-12 left-12 w-12 h-12 border-t-2 border-l-2 border-obsidian/20" />
            <div className="absolute top-12 right-12 w-12 h-12 border-t-2 border-r-2 border-obsidian/20" />
            <div className="absolute bottom-12 left-12 w-12 h-12 border-b-2 border-l-2 border-obsidian/20" />
            <div className="absolute bottom-12 right-12 w-12 h-12 border-b-2 border-r-2 border-obsidian/20" />
            
            {/* Center Crosshair */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-px bg-obsidian/10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-8 bg-obsidian/10" />
            
            {/* REC Indicator */}
            <div className="absolute top-16 left-28 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-[10px] font-mono font-bold tracking-widest opacity-40 uppercase">Friction_Log.raw</span>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-[1fr_1.5fr] gap-24 items-end mb-32">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="h-px w-12 bg-electric" />
                  <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-electric font-bold">The Bottleneck</span>
                </div>
                <h2 className="text-[clamp(4rem,12vw,10rem)] font-display font-black uppercase leading-[0.82] tracking-tighter">
                  The <br /> <span className="text-electric italic pr-8 inline-block overflow-visible relative -left-12">Friction.</span>
                </h2>
              </div>
            </div>

            {/* Storyboard Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-obsidian/10 border border-obsidian/10 overflow-hidden rounded-[2rem]">
              {[
                { title: "Production Lag", desc: "High-quality content is too slow to produce", meta: "LATENCY: HIGH" },
                { title: "Cost Barrier", desc: "Traditional media is too expensive for most brands", meta: "BURN_RATE: CRITICAL" },
                { title: "Signal Noise", desc: "Your message is getting lost in the noise", meta: "SNR: LOW" },
                { title: "Engine Failure", desc: "You lack a consistent content engine", meta: "STATUS: STALLED" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group bg-white p-8 md:p-10 min-h-[400px] flex flex-col justify-between hover:bg-obsidian hover:text-white transition-all duration-700 relative overflow-hidden"
                >
                  <div className="relative z-10 space-y-10 w-full">
                    {/* Frame Numbering */}
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-3">
                        <div className="w-1 h-1 bg-electric" />
                        <span className="text-[10px] font-mono font-bold opacity-20 group-hover:text-electric group-hover:opacity-100 transition-all uppercase tracking-widest">Frame_0{i+1}</span>
                      </div>
                      <Camera size={16} className="opacity-10 group-hover:opacity-40 transition-opacity" />
                    </div>

                    <h3 className="text-[clamp(1.1rem,3vw,1.4rem)] font-display font-black uppercase tracking-tight group-hover:text-electric transition-colors leading-[1.1]">
                      {item.title.split(' ').map((word, index) => (
                        <span key={index} className="block whitespace-nowrap">{word}</span>
                      ))}
                    </h3>
                  </div>

                  <div className="relative z-10 pt-8 border-t border-obsidian/5 group-hover:border-white/10 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse" />
                        <span className="text-[10px] font-mono uppercase tracking-widest opacity-40">{item.meta}</span>
                      </div>
                      <div className="text-[10px] font-mono opacity-10 group-hover:opacity-30">RAW_DATA_0{i+1}</div>
                    </div>
                  </div>

                  {/* Cinematic Grain Overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat transition-opacity duration-700" />
                </motion.div>
              ))}
            </div>
          </div>
        </Section>
      }
      customProcessSection={
        <Section className="py-48 bg-obsidian relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center text-center mb-32">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-electric/30" />
                <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-electric font-bold">The Creative Pipeline</span>
                <div className="h-px w-12 bg-electric/30" />
              </div>
              <h2 className="text-[clamp(3rem,8vw,7rem)] font-display font-black uppercase leading-none tracking-tighter">
                The <span className="text-electric italic pr-8 inline-block overflow-visible">Vision Stream.</span>
              </h2>
            </div>

            <div className="flex flex-col gap-8">
              {howItWorks.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="group relative flex items-center gap-12"
                >
                  {/* Film Strip Border Effect */}
                  <div className="hidden lg:flex flex-col gap-1 opacity-20 group-hover:opacity-100 transition-all duration-700">
                    {Array.from({ length: 12 }).map((_, j) => (
                      <div key={j} className="w-4 h-2 border border-white/30 rounded-[1px] bg-white/5" />
                    ))}
                  </div>

                  <div className="flex-grow glass-panel p-12 rounded-[3rem] border-white/5 hover:border-electric/30 transition-all duration-700 flex flex-col md:flex-row items-center gap-12 group/card relative overflow-hidden hover:scale-[1.02]">
                    {/* Cinematic Glow Overlay */}
                    <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(0,242,255,0.08)_0%,transparent_70%)] transition-opacity duration-700" />
                    
                    <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center text-electric group-hover:bg-electric group-hover:text-obsidian transition-all duration-700 flex-shrink-0 relative z-10 shadow-[0_0_20px_rgba(0,242,255,0)] group-hover:shadow-[0_0_30px_rgba(0,242,255,0.4)]">
                      <Play size={32} fill="currentColor" />
                    </div>
                    <div className="flex-grow relative z-10">
                      <div className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/20 mb-4 group-hover:text-electric/40 transition-colors">Frame_0{i+1}.mp4</div>
                      <h3 className="text-[clamp(1.25rem,4vw,2rem)] font-display font-black uppercase tracking-tighter leading-tight group-hover:text-electric transition-colors break-words">
                        {step}
                      </h3>
                    </div>
                    <div className="text-7xl md:text-9xl font-display font-black text-white/5 group-hover:text-white/10 transition-all duration-700 relative z-10 select-none">
                      0{i+1}
                    </div>
                  </div>

                  <div className="hidden lg:flex flex-col gap-1 opacity-20 group-hover:opacity-100 transition-all duration-700">
                    {Array.from({ length: 12 }).map((_, j) => (
                      <div key={j} className="w-4 h-2 border border-white/30 rounded-[1px] bg-white/5" />
                    ))}
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
