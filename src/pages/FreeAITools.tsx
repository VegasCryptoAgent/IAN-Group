import { motion } from 'motion/react';
import { ArrowRight, Zap, Image, Globe, FileText, Sparkles, CheckCircle2, Users, Workflow } from 'lucide-react';
import Section, { SectionHeading } from '../components/Section';
import ValueTools from '../components/ValueTools/ValueTools';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import Magnetic from '../components/Magnetic';

export default function FreeAITools() {
  return (
    <div className="relative overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col justify-center relative bg-obsidian py-20 md:py-0">
        <div className="relative z-10 w-full px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center gap-2 mb-8"
            >
              <div className="h-px w-8 bg-electric" />
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-electric font-bold">
                Free AI Tools
              </span>
              <div className="h-px w-8 bg-electric" />
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-center mb-8"
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-6 text-white">
                Enterprise AI Tools
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-cyan-400">
                  No Credit Card
                </span>
              </h1>

              <p className="text-lg md:text-2xl font-light text-white/60 max-w-3xl mx-auto mb-12 leading-relaxed">
                Access 5 professional-grade AI tools that multiply your team's productivity. Try them free. No signup required.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Magnetic strength={0.1}>
                  <a
                    href="#tools"
                    className="group relative bg-electric text-obsidian px-8 md:px-12 py-4 md:py-6 rounded-full text-sm md:text-base font-black uppercase tracking-widest overflow-hidden transition-all active:scale-95 flex items-center justify-center text-center shadow-[0_0_40px_rgba(0,242,255,0.6)] hover:shadow-[0_0_60px_rgba(0,242,255,0.8)] hover:brightness-110 duration-500"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Try Now <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </a>
                </Magnetic>

                <Magnetic strength={0.1}>
                  <Link
                    to="/"
                    className="group relative bg-white/10 border border-white/20 text-white px-8 md:px-12 py-4 md:py-6 rounded-full text-sm md:text-base font-black uppercase tracking-widest hover:bg-white/20 hover:border-electric transition-all duration-500 flex items-center justify-center text-center"
                  >
                    <span className="flex items-center gap-2">
                      Learn More <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </Magnetic>
              </div>

              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex items-center justify-center gap-2 mt-12 text-white/50 text-sm"
              >
                <CheckCircle2 size={16} className="text-electric" />
                <span>Enterprise-grade infrastructure. Zero cost to try.</span>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-white/40 uppercase tracking-widest">Scroll to explore</span>
            <div className="w-px h-8 bg-gradient-to-b from-electric to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      {/* TOOLS SECTION */}
      <section id="tools" className="py-20 md:py-32 px-6 md:px-12 relative bg-obsidian">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.9] tracking-tighter mb-6">
              5 Tools. Infinite Possibilities.
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Each tool is designed to solve real business problems. Try them all.
            </p>
          </motion.div>

          {/* Tools Preview Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
            {[
              {
                icon: <Zap size={28} />,
                name: 'Lightning Chat',
                desc: 'Fastest LLM responses',
                color: 'from-electric to-cyan-400',
              },
              {
                icon: <FileText size={28} />,
                name: 'Document AI',
                desc: 'Analyze your docs',
                color: 'from-blue-400 to-electric',
              },
              {
                icon: <Image size={28} />,
                name: 'Image Gen',
                desc: 'Create visuals instantly',
                color: 'from-purple-400 to-pink-400',
              },
              {
                icon: <Globe size={28} />,
                name: 'Translator',
                desc: 'Break language barriers',
                color: 'from-green-400 to-emerald-400',
              },
              {
                icon: <Sparkles size={28} />,
                name: 'Writing Optimizer',
                desc: 'Polish your content',
                color: 'from-amber-400 to-orange-400',
              },
            ].map((tool, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={cn(
                  'glass-panel rounded-lg p-6 hover:border-electric/50 transition-all duration-500 group cursor-pointer',
                  'hover:shadow-[0_0_30px_rgba(0,242,255,0.2)]'
                )}
              >
                <div className={cn('bg-gradient-to-br', tool.color, 'w-12 h-12 rounded-lg p-2.5 mb-4 text-obsidian group-hover:scale-110 transition-transform')}>
                  {tool.icon}
                </div>
                <h3 className="font-bold text-white mb-2">{tool.name}</h3>
                <p className="text-sm text-white/60">{tool.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* ValueTools Component */}
          <ValueTools />
        </div>
      </section>

      {/* WHY IT MATTERS SECTION */}
      <Section className="py-32">
        <SectionHeading
          title="Why These Tools Matter"
          subtitle="See how enterprises use AI to scale faster"
          centered
        />

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {[
            {
              icon: <Workflow size={32} />,
              title: 'Speed Multiplier',
              desc: 'Tasks that took hours now take minutes. Your team does more with less.',
            },
            {
              icon: <Users size={32} />,
              title: 'Scale Without Hiring',
              desc: 'Multiply output without growing headcount. Smart automation, smarter business.',
            },
            {
              icon: <CheckCircle2 size={32} />,
              title: 'Proven by Industry',
              desc: 'The same tools enterprises use to transform. Now free for you to try.',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="glass-panel rounded-lg p-8 space-y-4"
            >
              <div className="text-electric">{item.icon}</div>
              <h3 className="text-2xl font-bold text-white">{item.title}</h3>
              <p className="text-white/70 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* USE CASES SECTION */}
      <Section className="py-32 bg-white/[0.02]">
        <SectionHeading
          title="Real Use Cases"
          subtitle="How companies are using AI to unlock growth"
          centered
        />

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {[
            {
              role: 'Marketing Director',
              challenge: 'Creating content for 5 channels',
              solution: 'Generated 20 images and translated to 8 languages in 2 hours',
            },
            {
              role: 'Sales Manager',
              challenge: 'Analyzing customer documents',
              solution: 'AI extracted insights from 100 contracts in minutes',
            },
            {
              role: 'Technical Writer',
              challenge: 'Maintaining writing quality',
              solution: 'Polish tool improves docs before publish. Zero editing delays.',
            },
            {
              role: 'Product Team',
              challenge: 'Rapid prototyping ideas',
              solution: 'Instant image generation for mockups and presentations',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-panel rounded-lg p-8 space-y-4 border-l-2 border-electric"
            >
              <div className="space-y-2">
                <p className="text-sm font-mono text-electric uppercase tracking-widest">Role</p>
                <h3 className="text-xl font-bold text-white">{item.role}</h3>
              </div>

              <div className="space-y-2">
                <p className="text-sm text-white/60">Challenge</p>
                <p className="text-white/90">{item.challenge}</p>
              </div>

              <div className="space-y-2 pt-4 border-t border-white/10">
                <p className="text-sm text-electric">Solution</p>
                <p className="text-white/90">{item.solution}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* FEATURES SECTION */}
      <Section className="py-32">
        <div className="max-w-3xl">
          <SectionHeading
            title="What Makes These Different"
            subtitle="Built for real business, not toy projects"
          />

          <div className="space-y-6 mt-12">
            {[
              {
                title: 'Enterprise Infrastructure',
                desc: 'Powered by Groq, Google, and industry-leading APIs. The same tech enterprises use.',
              },
              {
                title: 'Zero Friction',
                desc: 'No sign-up. No credit card. No waiting for approval. Start in seconds.',
              },
              {
                title: 'Privacy First',
                desc: 'Your data stays yours. We never store, analyze, or sell your uploads.',
              },
              {
                title: 'Always Free',
                desc: 'Try everything free. Upgrade features if you need more, but basics are forever free.',
              },
              {
                title: 'Production Ready',
                desc: 'Not toys. These are the same tools that scale $1B+ companies.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 items-start"
              >
                <div className="w-6 h-6 rounded-full bg-electric/20 border border-electric flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle2 size={16} className="text-electric" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-white/60">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA SECTION */}
      <Section className="py-20 md:py-32 bg-gradient-to-r from-electric/10 to-magenta/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black uppercase leading-[0.9] tracking-tighter mb-6">
              Ready to Multiply Your
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-magenta">
                Team's Impact?
              </span>
            </h2>

            <p className="text-lg text-white/60 max-w-2xl mx-auto mb-12">
              Try the tools now. Or discover how IAN Group integrates AI for sustainable growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Magnetic strength={0.1}>
                <a
                  href="#tools"
                  className="group relative bg-electric text-obsidian px-8 md:px-12 py-4 md:py-6 rounded-full text-sm md:text-base font-black uppercase tracking-widest overflow-hidden transition-all active:scale-95 shadow-[0_0_40px_rgba(0,242,255,0.6)] hover:shadow-[0_0_60px_rgba(0,242,255,0.8)] hover:brightness-110 duration-500"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Explore Tools <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
              </Magnetic>

              <Magnetic strength={0.1}>
                <Link
                  to="/"
                  className="group relative bg-white/10 border-2 border-electric text-white px-8 md:px-12 py-4 md:py-6 rounded-full text-sm md:text-base font-black uppercase tracking-widest hover:bg-electric hover:text-obsidian transition-all duration-500"
                >
                  <span className="flex items-center gap-2">
                    Visit IAN Group <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </Magnetic>
            </div>

            {/* Trust Signals */}
            <div className="grid md:grid-cols-3 gap-6 mt-16 pt-12 border-t border-white/10">
              {[
                { label: 'Tools', value: '5' },
                { label: 'Cost', value: 'Free' },
                { label: 'Setup Time', value: '<1 min' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="space-y-2"
                >
                  <div className="text-3xl font-black text-electric">{stat.value}</div>
                  <div className="text-sm text-white/60 uppercase tracking-widest">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* FOOTER CTA */}
      <section className="py-20 px-6 md:px-12 relative bg-obsidian border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                These tools are just the beginning.
              </h3>
              <p className="text-white/60 max-w-2xl mx-auto">
                Imagine what's possible when AI is fully integrated into your operations. That's what IAN Group does.
              </p>
            </div>

            <Magnetic strength={0.1}>
              <Link
                to="/"
                className="inline-flex items-center gap-3 bg-electric text-obsidian px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:brightness-110 transition-all shadow-[0_0_40px_rgba(0,242,255,0.6)]"
              >
                Learn How IAN Group Scales AI <ArrowRight size={18} />
              </Link>
            </Magnetic>

            <div className="text-xs text-white/40 pt-8 border-t border-white/10">
              <p>Tools are free to use. By using them, you agree to our privacy policy and terms.</p>
              <p className="mt-2">
                <Link to="/" className="text-electric hover:text-white transition-colors">
                  Visit IAN Group
                </Link>
                {' '} to learn about our consulting, venture studio, and accelerator programs.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
