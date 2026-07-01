import { motion } from 'motion/react';
import Section, { SectionHeading } from '../Section';
import { Zap, Image, Globe, FileText, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../../lib/utils';
import GeminiChatTool from './tools/GeminiChatTool';
import ImageGeneratorTool from './tools/ImageGeneratorTool';
import TranslationTool from './tools/TranslationTool';
import WritingAssistantTool from './tools/WritingAssistantTool';
import GroqChatTool from './tools/GroqChatTool';

interface Tool {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  color: string;
  component: React.ReactNode;
}

export default function ValueTools() {
  const [activeTab, setActiveTab] = useState('groq');

  const tools: Tool[] = [
    {
      id: 'groq',
      name: 'Lightning Chat',
      icon: <Zap size={24} />,
      description: 'Enterprise-grade AI chat powered by Groq. Lightning-fast responses.',
      color: 'from-electric to-cyan-400',
      component: <GroqChatTool />,
    },
    {
      id: 'gemini',
      name: 'Document Intelligence',
      icon: <FileText size={24} />,
      description: 'Upload documents or images. Ask questions about your content.',
      color: 'from-blue-400 to-electric',
      component: <GeminiChatTool />,
    },
    {
      id: 'image',
      name: 'Image Generation',
      icon: <Image size={24} />,
      description: 'Generate stunning AI images instantly. No signup required.',
      color: 'from-purple-400 to-pink-400',
      component: <ImageGeneratorTool />,
    },
    {
      id: 'translate',
      name: 'Global Translator',
      icon: <Globe size={24} />,
      description: 'Break language barriers. Translate text instantly.',
      color: 'from-green-400 to-emerald-400',
      component: <TranslationTool />,
    },
    {
      id: 'writer',
      name: 'Writing Optimizer',
      icon: <Sparkles size={24} />,
      description: 'Enhance your writing. Grammar, style, and clarity fixes.',
      color: 'from-amber-400 to-orange-400',
      component: <WritingAssistantTool />,
    },
  ];

  const activeTool = tools.find(t => t.id === activeTab)!;

  return (
    <Section id="value-tools" className="py-20 md:py-32">
      <div className="space-y-12">
        <SectionHeading
          title="Free AI Tools"
          subtitle="Explore enterprise-grade tools designed to multiply your team's capabilities. No credit card required."
          centered
        />

        <div className="grid gap-8">
          {/* Tool Navigation */}
          <div className="flex flex-wrap gap-3 justify-center">
            {tools.map((tool) => (
              <motion.button
                key={tool.id}
                onClick={() => setActiveTab(tool.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "px-6 py-3 rounded-full font-bold uppercase text-xs tracking-widest transition-all duration-300",
                  activeTab === tool.id
                    ? `bg-gradient-to-r ${tool.color} text-obsidian shadow-[0_0_30px_rgba(0,242,255,0.5)]`
                    : "bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20"
                )}
              >
                <span className="flex items-center gap-2">
                  {tool.icon}
                  {tool.name}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Tool Display Area */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="glass-panel rounded-2xl p-8 md:p-12 min-h-[600px] flex flex-col"
          >
            {/* Header */}
            <div className="mb-8 pb-6 border-b border-white/10">
              <h3 className="text-3xl font-bold mb-2 text-white">
                {activeTool.name}
              </h3>
              <p className="text-white/60">
                {activeTool.description}
              </p>
            </div>

            {/* Tool Component */}
            <div className="flex-1">
              {activeTool.component}
            </div>
          </motion.div>

          {/* Value Proposition */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              {
                title: 'No Credit Card',
                desc: 'All tools are completely free to use. No payment needed.',
              },
              {
                title: 'Instant Access',
                desc: 'Start using immediately. No complex setup or configuration.',
              },
              {
                title: 'Enterprise Grade',
                desc: 'Built with production-ready infrastructure and APIs.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel rounded-lg p-6"
              >
                <h4 className="font-bold text-electric mb-2">{item.title}</h4>
                <p className="text-sm text-white/60">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
