import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Upload, Video, Send, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';
import Magnetic from '../components/Magnetic';

export default function Pitch() {
  const [video, setVideo] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    purpose: '',
    product: '',
    traction: ''
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('video/')) {
      setVideo(file);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setVideo(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-xl w-full glass-panel rounded-[2rem] p-12 text-center"
        >
          <div className="w-20 h-20 bg-electric/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 size={40} className="text-electric" />
          </div>
          <h2 className="text-4xl font-display font-black uppercase mb-4">Pitch Received</h2>
          <p className="text-white/60 text-lg mb-8">
            Our team will review your submission and get back to you within 48 hours. Get ready to multiply your traction.
          </p>
          <Magnetic strength={0.2}>
            <button 
              onClick={() => setSubmitted(false)}
              className="bg-white text-obsidian px-8 py-4 rounded-full font-black uppercase tracking-widest hover:bg-electric transition-colors"
            >
              Back to Pitch
            </button>
          </Magnetic>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-2 text-electric mb-6">
                <Sparkles size={20} />
                <span className="text-xs font-black uppercase tracking-[0.3em]">Founder Portal</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-display font-black uppercase mb-8 leading-[0.85]">
                Pitch Your <span className="text-electric">Vision</span>
              </h1>
              <p className="text-xl text-white/60 font-light leading-relaxed mb-12">
                We're looking for founders who are ready to scale. Submit your pitch video and answer our core questions to see if you're a fit for the IAN ecosystem.
              </p>

              <div className="space-y-8">
                {[
                  { title: "Purpose", desc: "Why are you building this? What's the core 'Why'?" },
                  { title: "Product", desc: "What have you built? How does it solve the problem?" },
                  { title: "Traction", desc: "What's the proof? Show us the numbers or the momentum." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="text-electric font-display font-black text-2xl opacity-20">0{i+1}</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-white/40 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-panel rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-electric to-magenta opacity-50" />
            
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Video Upload */}
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={cn(
                  "relative h-48 rounded-3xl border-2 border-dashed transition-all duration-500 flex flex-col items-center justify-center cursor-pointer group overflow-hidden",
                  isDragging ? "border-electric bg-electric/5" : "border-white/10 hover:border-electric/30 hover:bg-white/5",
                  video ? "border-electric/50 bg-electric/5" : ""
                )}
              >
                <input 
                  type="file" 
                  ref={fileInputRef}
                  onChange={handleFileSelect}
                  accept="video/*"
                  className="hidden"
                />
                
                {video ? (
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 bg-electric rounded-full flex items-center justify-center text-obsidian">
                      <Video size={24} />
                    </div>
                    <span className="text-xs font-bold text-electric uppercase tracking-widest">{video.name}</span>
                    <span className="text-[10px] text-white/40 uppercase tracking-widest">Click to replace</span>
                  </div>
                ) : (
                  <>
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                      <Upload size={24} className="text-white/40 group-hover:text-electric" />
                    </div>
                    <p className="text-sm font-bold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">Upload Pitch Video</p>
                    <p className="text-[10px] text-white/20 uppercase tracking-widest mt-2">Drag & drop or click to browse</p>
                  </>
                )}
              </div>

              {/* Text Questions */}
              <div className="space-y-6">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-3">01. Your Purpose</label>
                  <textarea 
                    required
                    value={formData.purpose}
                    onChange={(e) => setFormData({...formData, purpose: e.target.value})}
                    placeholder="The 'Why' behind your startup..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-sm focus:outline-none focus:border-electric/50 transition-colors min-h-[100px] resize-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-3">02. Your Product</label>
                  <textarea 
                    required
                    value={formData.product}
                    onChange={(e) => setFormData({...formData, product: e.target.value})}
                    placeholder="Describe your solution..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-sm focus:outline-none focus:border-electric/50 transition-colors min-h-[100px] resize-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-3">03. Your Traction</label>
                  <textarea 
                    required
                    value={formData.traction}
                    onChange={(e) => setFormData({...formData, traction: e.target.value})}
                    placeholder="Numbers, milestones, momentum..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-sm focus:outline-none focus:border-electric/50 transition-colors min-h-[100px] resize-none"
                  />
                </div>
              </div>

              <Magnetic strength={0.1}>
                <button 
                  type="submit"
                  className="w-full bg-electric text-obsidian py-6 rounded-full text-sm font-black uppercase tracking-widest flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(0,242,255,0.3)] hover:shadow-[0_0_50px_rgba(0,242,255,0.5)] transition-all active:scale-95"
                >
                  Submit Pitch <ArrowRight size={18} />
                </button>
              </Magnetic>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
