import { motion } from 'motion/react';
import Section, { SectionHeading } from '../Section';
import { Image, Globe, FileText, Sparkles, Download } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../../lib/utils';
import ImageGeneratorTool from './tools/ImageGeneratorTool';
import TranslationTool from './tools/TranslationTool';
import WritingAssistantTool from './tools/WritingAssistantTool';
import OCRTool from './tools/OCRTool';
import RemoveBackgroundTool from './tools/RemoveBackgroundTool';

interface Tool {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  color: string;
  component: React.ReactNode;
}

export default function ValueTools() {
  const [activeTab, setActiveTab] = useState('image');

  const tools: Tool[] = [
    {
      id: 'image',
      name: 'Image Generation',
      icon: <Image size={24} />,
      description: 'Generate AI images. No credit card required.',
      color: 'from-purple-400 to-pink-400',
      component: <ImageGeneratorTool />,
    },
    {
      id: 'translate',
      name: 'Global Translator',
      icon: <Globe size={24} />,
      description: 'Translate to 12+ languages instantly.',
      color: 'from-green-400 to-emerald-400',
      component: <TranslationTool />,
    },
    {
      id: 'writer',
      name: 'Writing Optimizer',
      icon: <Sparkles size={24} />,
      description: 'Grammar, style, and clarity fixes.',
      color: 'from-amber-400 to-orange-400',
      component: <WritingAssistantTool />,
    },
    {
      id: 'ocr',
      name: 'OCR Text Extractor',
      icon: <FileText size={24} />,
      description: 'Extract text from images and PDFs.',
      color: 'from-blue-400 to-cyan-400',
      component: <OCRTool />,
    },
    {
      id: 'background',
      name: 'Remove Background',
      icon: <Download size={24} />,
      description: 'Remove image backgrounds instantly.',
      color: 'from-red-400 to-pink-500',
      component: <RemoveBackgroundTool />,
    },
  ];

  const activeTool = tools.find(t => t.id === activeTab)!;

  return (
    <Section id="value-tools" className="py-20 md:py-32">
      <div className="space-y-12">
        <SectionHeading
          title="Free AI Tools"
          subtitle="Professional-grade tools with zero cost. No credit card. No limits."
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
                desc: 'All tools are completely free. No payment needed ever.',
              },
              {
                title: 'Instant Access',
                desc: 'Start using immediately. No signup, no waiting.',
              },
              {
                title: 'Production Grade',
                desc: 'Built with trusted open-source and public APIs.',
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
