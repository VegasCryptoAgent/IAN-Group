import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, CheckCircle2, Zap, TrendingUp, Target, BarChart3, Globe, ShieldCheck, Rocket, Code, Layers } from 'lucide-react';
import { LOGOS } from '../constants';
import Section from '../components/Section';
import CalendlyEmbed from '../components/CalendlyEmbed';
import ValueTools from '../components/ValueTools/ValueTools';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import { useRef } from 'react';
import Magnetic from '../components/Magnetic';

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <div ref={containerRef} className="relative overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="min-h-[120vh] flex flex-col justify-center relative bg-obsidian">
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 w-full pt-20"
        >
          {/* Sensational Typography: High-End Editorial Layout */}
          <div className="flex flex-col w-full mt-12 px-6 md:px-12 relative">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative min-h-[60vh] flex flex-col justify-between"
            >
              {/* Line 1: The Setup */}
              <div className="flex justify-start">
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col"
                >
                  <h1 className="text-[clamp(2rem,5vw,4rem)] leading-none uppercase font-light tracking-tight text-white/40">
                    You Don’t Need
                  </h1>
                </motion.div>
              </div>

              {/* Line 2: The Noise (Massive & Kinetic) */}
              <div className="flex justify-center my-8">
                <motion.h1
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[clamp(4rem,15vw,16rem)] leading-[0.9] uppercase font-black tracking-[-0.08em] text-white/10 outline-text hover:text-white/20 transition-colors duration-700 cursor-default"
                >
                  More Tools
                </motion.h1>
              </div>

              {/* Line 3: The Pivot */}
              <div className="flex justify-end">
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-end text-right lg:mr-12"
                >
                  <h1 className="text-[clamp(2rem,5vw,4rem)] leading-none uppercase font-light tracking-tight text-electric italic mb-6 drop-shadow-[0_0_15px_rgba(0,242,255,0.5)] pr-8 inline-block overflow-visible">
                    You Need
                  </h1>
                  <motion.h1 
                    initial={{ opacity: 0, scale: 0.8, filter: "blur(15px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ 
                      duration: 2.5, 
                      delay: 0.8, 
                      ease: [0.16, 1, 0.3, 1] 
                    }}
                    className="text-[clamp(3.5rem,10vw,12rem)] leading-[0.8] uppercase font-black tracking-[-0.1em] text-white"
                  >
                    Leverage
                  </motion.h1>
                </motion.div>
              </div>

            </motion.div>
          </div>

          {/* Bottom Content: Asymmetric Layout */}
          <div className="px-6 md:px-12 mt-24">
            <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <p className="text-xl md:text-3xl text-white/40 max-w-2xl font-light leading-tight tracking-tight cursor-default flex flex-wrap">
                  {"IAN Group is a force multiplier for companies with traction. We integrate AI, scale systems, and unlock growth without the burnout.".split(" ").map((word, i) => {
                    const isSpecial = word === "force" || word === "multiplier";
                    return (
                      <span 
                        key={i} 
                        className={cn(
                          "transition-colors duration-300 hover:text-electric mr-[0.25em] last:mr-0",
                          isSpecial ? "text-white" : ""
                        )}
                      >
                        {word}
                      </span>
                    );
                  })}
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="flex flex-col sm:flex-row lg:flex-col gap-6 items-stretch sm:items-start lg:items-end w-full sm:w-auto"
              >
                <Magnetic strength={0.1} className="w-full sm:w-auto">
                  <a 
                    href="#book" 
                    className="group relative bg-electric text-obsidian px-12 py-6 rounded-full text-sm font-black uppercase tracking-widest overflow-hidden transition-all active:scale-95 flex items-center justify-center text-center w-full sm:w-auto shadow-[0_0_40px_rgba(0,242,255,0.6)] hover:shadow-[0_0_60px_rgba(0,242,255,0.8)] hover:brightness-110 duration-500"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Book Strategy Call <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </a>
                </Magnetic>
                
                <Magnetic strength={0.1} className="w-full sm:w-auto">
                  <Link 
                    to="/case-studies" 
                    className="group flex items-center justify-center lg:justify-end gap-4 text-white/60 hover:text-white transition-colors w-full sm:w-auto"
                  >
                    <span className="text-xs font-black uppercase tracking-[0.3em]">View Results</span>
                    <div className="w-12 h-px bg-white/20 group-hover:w-20 group-hover:bg-electric transition-all duration-500" />
                  </Link>
                </Magnetic>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Groundbreaking Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-white/20">Scroll to Explore</span>
          <div className="w-px h-16 bg-gradient-to-b from-electric/50 to-transparent" />
        </motion.div>

        {/* Floating Elements: Kinetic Multipliers */}
        <motion.div 
          animate={{ 
            y: [0, -40, 0],
            rotate: [0, 10, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-[-10%] w-[40vw] h-[40vw] bg-electric/5 blur-[120px] rounded-full pointer-events-none"
        />
        <motion.div 
          animate={{ 
            y: [0, 30, 0],
            rotate: [0, -15, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 left-[-5%] w-[30vw] h-[30vw] bg-magenta/5 blur-[100px] rounded-full pointer-events-none"
        />
      </section>

      {/* TRUST STRIP - MARQUEE */}
      <div className="py-20 border-y border-white/5 overflow-hidden bg-white/[0.02]">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <span key={i} className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter text-white/10 mx-12 hover:text-electric transition-colors cursor-default">
              {logo}
            </span>
          ))}
        </div>
      </div>

      {/* THE PROBLEM - BRUTALIST GRID */}
      <Section className="bg-white text-obsidian py-32">
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="sticky top-32 h-fit lg:-ml-24">
            <h2 className="text-[clamp(2rem,5vw,4.5rem)] leading-[0.85] mb-8">
              Built Something <br /> <span className="text-electric">That Works?</span>
            </h2>
            <p className="text-2xl font-light opacity-60 max-w-md">
              Success brings its own set of chains. You've reached the limit of manual execution.
            </p>
          </div>
          <div className="space-y-1">
            {[
              { t: "Growth is harder", d: "The same strategies that got you here are now your biggest bottlenecks." },
              { t: "You're the bottleneck", d: "Every decision flows through you, slowing down the entire engine." },
              { t: "AI Chaos", d: "The landscape is moving too fast to navigate without a dedicated operator." },
              { t: "Competitor Speed", d: "Your rivals are already automating. Every day you wait is lost ground." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-12 border border-obsidian/10 hover:bg-obsidian hover:text-white transition-all duration-500 group"
              >
                <div className="text-sm font-mono mb-4 opacity-40 group-hover:text-electric">0{i+1}</div>
                <h3 className="text-4xl mb-4">{item.t}</h3>
                <p className="text-lg opacity-60 group-hover:opacity-80">{item.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* THE SHIFT - IMMERSIVE */}
      <Section className="py-40">
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-electric/5 to-transparent blur-3xl" />
          <div className="text-center max-w-5xl mx-auto relative z-10">
            <h2 className="text-[10vw] md:text-[8vw] mb-12">
              We Multiply <br /> <span className="text-gradient-blue italic font-light pr-8 inline-block overflow-visible">What's Working.</span>
            </h2>
            <div className="grid md:grid-cols-4 gap-4 mt-20">
              {[
                { label: "AI INFRA", icon: Zap },
                { label: "LEADERSHIP", icon: ShieldCheck },
                { label: "VENTURE", icon: Rocket },
                { label: "MEDIA", icon: Globe }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10 }}
                  className="glass-panel p-8 rounded-3xl flex flex-col items-center gap-6 group"
                >
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-electric group-hover:text-obsidian transition-all duration-500">
                    <item.icon size={32} />
                  </div>
                  <span className="font-mono text-xs font-bold tracking-[0.3em] opacity-40 group-hover:opacity-100">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* FOUNDER PITCH - HIGH IMPACT CTA */}
      <Section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-electric/5 to-magenta/5 opacity-50" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="glass-panel rounded-[3rem] p-12 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 border-white/5 bg-white/[0.01]">
            <div className="max-w-2xl text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-electric mb-6">
                <Rocket size={20} />
                <span className="text-xs font-black uppercase tracking-[0.3em]">Founder Portal</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-display font-black uppercase mb-8 leading-[0.9]">
                Are You the Next <br /> <span className="text-electric">Force Multiplier?</span>
              </h2>
              <p className="text-xl text-white/40 font-light leading-relaxed">
                We're looking for founders with traction who are ready to integrate AI and scale. Submit your pitch video and show us your vision.
              </p>
            </div>
            
            <div className="flex flex-col items-center gap-6">
              <Magnetic strength={0.2}>
                <Link 
                  to="/pitch"
                  className="bg-white text-obsidian px-12 py-6 rounded-full text-sm font-black uppercase tracking-widest hover:bg-electric transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_50px_rgba(0,242,255,0.4)] flex items-center gap-3 group"
                >
                  Submit Your Pitch <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </Magnetic>
              <span className="text-[10px] text-white/20 uppercase font-bold tracking-[0.4em]">Review within 48 hours</span>
            </div>
          </div>
        </div>
      </Section>

      {/* PROOF - BENTO GRID */}
      <Section className="bg-white text-obsidian">
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[800px]">
          <div className="md:col-span-2 md:row-span-2 bg-obsidian text-white p-12 rounded-[40px] flex flex-col justify-between overflow-hidden relative group">
            <div className="relative z-10">
              <div className="text-sm font-mono uppercase tracking-widest text-electric mb-4">Revenue Growth</div>
              <h3 className="text-6xl md:text-8xl mb-6">+25% in 90 Days</h3>
              <p className="text-xl opacity-60 max-w-md">While reducing business owners workload from 6 days/week → 4 days/week.</p>
            </div>
            <Link to="/case-studies" className="relative z-10 flex items-center gap-4 font-black uppercase tracking-widest text-sm hover:text-electric transition-colors">
              Read Case Study <ArrowRight size={20} />
            </Link>
          </div>
          
          <div className="md:col-span-2 bg-electric p-12 rounded-[40px] flex flex-col justify-between group">
            <h3 className="text-5xl font-black leading-none">AI System Built in 90 Days</h3>
            <p className="text-obsidian/60 font-bold">Completely changed how a business operates from the ground up.</p>
          </div>

          <div className="bg-silver/20 p-8 rounded-[40px] flex flex-col justify-center items-center text-center group hover:bg-obsidian hover:text-white transition-all">
            <div className="text-5xl font-black mb-2">1M+</div>
            <div className="text-[10px] font-mono uppercase tracking-widest opacity-60">Impressions</div>
          </div>

          <div className="bg-magenta p-8 rounded-[40px] flex flex-col justify-center items-center text-center text-white group">
            <div className="text-4xl font-black mb-2">8-FIGURE</div>
            <div className="text-[10px] font-mono uppercase tracking-widest opacity-80">Exit Support</div>
          </div>
        </div>
      </Section>

      {/* THE PROCESS - INTERACTIVE STEPS */}
      <Section className="py-40">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3 sticky top-32 h-fit">
            <h2 className="text-7xl mb-8">The <br /> <span className="text-electric">Engine.</span></h2>
            <p className="text-xl text-white/40 font-light">We don’t guess. We execute a system that has been refined across industries.</p>
          </div>
          <div className="lg:w-2/3 space-y-24">
            {[
              { s: "01", t: "Proven Product", d: "We start with what works. Traction and revenue are the only baselines we accept." },
              { s: "02", t: "Visibility", d: "Leveraging elite networks to put your product in front of the right eyes." },
              { s: "03", t: "AI Infrastructure", d: "Deploying agentic systems that handle the heavy lifting of your operations." },
              { s: "04", t: "Product Enhancement", d: "Refining the user experience and integrating AI as a core feature, not an add-on." },
              { s: "05", t: "Distribution", d: "Scaling your reach through automated and strategic channels." },
              { s: "06", t: "Revenue Acceleration", d: "Optimizing the entire funnel for maximum conversion and LTV." }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="group"
              >
                <div className="flex items-start gap-12">
                  <span className="text-8xl font-display font-black text-white/5 group-hover:text-electric/20 transition-colors duration-700">{step.s}</span>
                  <div className="pt-4">
                    <h3 className="text-5xl mb-6 group-hover:translate-x-4 transition-transform duration-500">{step.t}</h3>
                    <p className="text-xl text-white/40 max-w-xl group-hover:text-white/60 transition-colors">{step.d}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* FREE AI TOOLS */}
      <ValueTools />

      {/* CTA - MASSIVE */}
      <Section className="min-h-screen flex items-center justify-center bg-electric text-obsidian">
        <div className="max-w-5xl mx-auto w-full flex flex-col items-center text-center">
          <motion.h2 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="text-[12vw] leading-[0.9] mb-12 text-center w-full flex flex-col items-center"
          >
            <span className="block">Ready</span>
            <span className="block">to</span>
            <span className="block">Scale?</span>
          </motion.h2>
          <div className="glass-panel bg-obsidian/10 border-obsidian/20 p-12 rounded-[60px] w-full">
            <CalendlyEmbed />
          </div>
        </div>
      </Section>
    </div>
  );
}
