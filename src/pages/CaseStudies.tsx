import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { useState, useRef } from 'react';
import { CASE_STUDIES } from '../constants';
import Section from '../components/Section';
import { ChevronDown, ChevronUp, ExternalLink, TrendingUp, Clock, Users, Zap, ArrowRight, Plus } from 'lucide-react';
import { cn } from '../lib/utils';

export default function CaseStudies() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <div className="">
      {/* HERO */}
      <section className="h-screen flex flex-col justify-center px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <h1 className="text-[clamp(2.5rem,8vw,6rem)] leading-[0.9] mb-12">
            Real Results. <br />
            <span className="text-gradient-blue italic pr-8 inline-block overflow-visible">Real Impact.</span>
          </h1>
          
          <p className="text-2xl text-white/40 max-w-2xl font-light">
            We don't talk about potential. We deliver outcomes that redefine what's possible for companies with traction.
          </p>
        </div>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/20 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] uppercase tracking-widest">Scroll to explore</span>
          <div className="w-px h-12 bg-white/10" />
        </motion.div>
      </section>

      {/* HORIZONTAL SCROLL SECTION */}
      <div ref={scrollRef} className="h-[400vh] relative">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-12 px-[10vw]">
            {CASE_STUDIES.map((study, i) => (
              <motion.div 
                key={study.id}
                className="w-[80vw] md:w-[60vw] lg:w-[45vw] flex-shrink-0"
              >
                <div className="group relative">
                  <div className="absolute -inset-4 bg-electric/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="glass-panel p-12 rounded-[40px] relative z-10 border-white/5 hover:border-electric/30 transition-all duration-500">
                    <div className="flex justify-between items-start mb-12">
                      <div className="text-sm font-mono text-electric">0{i+1}</div>
                      <div className="text-6xl font-display font-black text-white/5 group-hover:text-electric/10 transition-colors">{study.metric}</div>
                    </div>
                    
                    <h2 className="text-5xl md:text-6xl mb-6 group-hover:translate-x-2 transition-transform duration-500">{study.title}</h2>
                    <p className="text-xl text-white/40 mb-12 font-light">{study.client}</p>
                    
                    <div className="grid grid-cols-2 gap-8 mb-12">
                      <div>
                        <div className="text-[10px] font-mono uppercase tracking-widest text-white/20 mb-4">Timeframe</div>
                        <div className="text-lg font-bold">{study.timeframe}</div>
                      </div>
                      <div>
                        <div className="text-[10px] font-mono uppercase tracking-widest text-white/20 mb-4">Focus</div>
                        <div className="text-lg font-bold">AI Systems</div>
                      </div>
                    </div>

                    <button 
                      onClick={() => setExpandedId(study.id)}
                      className="flex items-center gap-3 font-black uppercase tracking-widest text-xs text-electric hover:text-white transition-colors"
                    >
                      Explore Deep Dive <Plus size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* EXPANDED MODAL (OVERLAY) */}
      <AnimatePresence>
        {expandedId && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-obsidian/90 backdrop-blur-xl"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="glass-panel w-full max-w-6xl max-h-[90vh] rounded-[40px] overflow-y-auto relative"
            >
              <button 
                onClick={() => setExpandedId(null)}
                className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-electric hover:text-obsidian transition-all z-10"
              >
                <Plus size={24} className="rotate-45" />
              </button>

              <div className="p-12 md:p-20">
                {CASE_STUDIES.find(s => s.id === expandedId) && (
                  <>
                    <div className="text-sm font-mono text-electric mb-6 uppercase tracking-widest">Deep Dive</div>
                    <h2 className="text-6xl md:text-8xl mb-12">{CASE_STUDIES.find(s => s.id === expandedId)?.title}</h2>
                    
                    <div className="grid lg:grid-cols-3 gap-20">
                      <div className="space-y-12">
                        <div>
                          <h3 className="text-xs font-mono uppercase tracking-widest text-white/20 mb-6">The Problem</h3>
                          <ul className="space-y-4">
                            {CASE_STUDIES.find(s => s.id === expandedId)?.problem.map((p, i) => (
                              <li key={i} className="text-xl font-light text-white/60">• {p}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="space-y-12">
                        <div>
                          <h3 className="text-xs font-mono uppercase tracking-widest text-white/20 mb-6">Execution</h3>
                          <ul className="space-y-4">
                            {CASE_STUDIES.find(s => s.id === expandedId)?.whatWeDid.map((w, i) => (
                              <li key={i} className="text-xl font-light text-white/60">• {w}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="space-y-12">
                        <div>
                          <h3 className="text-xs font-mono uppercase tracking-widest text-white/20 mb-6">The Result</h3>
                          <ul className="space-y-4">
                            {CASE_STUDIES.find(s => s.id === expandedId)?.result.map((r, i) => (
                              <li key={i} className="text-xl font-bold text-electric">✔ {r}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="mt-20 p-12 rounded-[40px] bg-electric text-obsidian">
                      <div className="text-[10px] font-mono uppercase tracking-widest mb-4 opacity-60">Key Insight</div>
                      <p className="text-4xl font-display font-black italic leading-tight pr-8 overflow-visible">
                        "{CASE_STUDIES.find(s => s.id === expandedId)?.keyInsight}"
                      </p>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FINAL CTA */}
      <Section className="py-40 text-center">
        <h2 className="text-[8vw] mb-12">Ready to be <br /> <span className="text-electric">Next?</span></h2>
        <a 
          href="#book" 
          className="bg-white text-obsidian px-12 py-6 rounded-full text-sm font-black uppercase tracking-widest hover:bg-electric transition-all"
        >
          Book Strategy Call
        </a>
      </Section>
    </div>
  );
}
