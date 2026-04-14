import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  dark?: boolean;
}

export default function Section({ children, className, containerClassName, id, dark = true }: SectionProps) {
  return (
    <section 
      id={id}
      className={cn(
        "py-32 px-6 relative overflow-hidden",
        dark ? "bg-obsidian text-white" : "bg-white text-obsidian",
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn("max-w-7xl mx-auto relative z-10", containerClassName)}
      >
        {children}
      </motion.div>
    </section>
  );
}

export function SectionHeading({ title, subtitle, centered = false }: { title: string, subtitle?: string, centered?: boolean }) {
  return (
    <div className={cn("mb-20", centered && "text-center mx-auto")}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={cn("flex items-center gap-4 mb-8", centered && "justify-center")}
      >
        <div className="h-px w-12 bg-electric" />
        <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-electric font-bold">
          Insight
        </span>
      </motion.div>
      
      <h2 className={cn(
        "text-5xl md:text-7xl lg:text-8xl mb-8 leading-[0.85] font-display font-black uppercase tracking-tighter",
        centered && "max-w-4xl mx-auto"
      )}>
        {title}
      </h2>
      
      {subtitle && (
        <p className={cn(
          "text-xl md:text-2xl font-light leading-relaxed opacity-50",
          centered ? "max-w-2xl mx-auto" : "max-w-xl"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
