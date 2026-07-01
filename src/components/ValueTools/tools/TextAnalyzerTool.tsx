import { useState } from 'react';
import { Copy } from 'lucide-react';

export default function TextAnalyzerTool() {
  const [text, setText] = useState('');
  const [copied, setCopied] = useState(false);

  const analyze = () => {
    const words = text.trim().split(/\s+/).filter(w => w.length > 0).length;
    const chars = text.length;
    const charsNoSpaces = text.replace(/\s/g, '').length;
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
    const paragraphs = text.split('\n\n').filter(p => p.trim().length > 0).length;
    const avgWordLength = words > 0 ? (charsNoSpaces / words).toFixed(1) : 0;
    const readingTime = Math.ceil(words / 200); // Average 200 words per minute

    return { words, chars, charsNoSpaces, sentences, paragraphs, avgWordLength, readingTime };
  };

  const stats = analyze();

  const copyToClipboard = () => {
    const statsText = `Words: ${stats.words}
Characters: ${stats.chars}
Characters (no spaces): ${stats.charsNoSpaces}
Sentences: ${stats.sentences}
Paragraphs: ${stats.paragraphs}
Avg Word Length: ${stats.avgWordLength}
Reading Time: ${stats.readingTime} min`;
    navigator.clipboard.writeText(statsText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col h-full gap-6">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste your text here to analyze..."
        rows={8}
        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-electric transition-colors resize-none"
      />

      {text && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <p className="text-xs text-white/60 mb-1">Words</p>
              <p className="text-2xl font-bold text-electric">{stats.words}</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <p className="text-xs text-white/60 mb-1">Characters</p>
              <p className="text-2xl font-bold text-electric">{stats.chars}</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <p className="text-xs text-white/60 mb-1">Sentences</p>
              <p className="text-2xl font-bold text-electric">{stats.sentences}</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <p className="text-xs text-white/60 mb-1">Paragraphs</p>
              <p className="text-2xl font-bold text-electric">{stats.paragraphs}</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <p className="text-xs text-white/60 mb-1">Avg Word Length</p>
              <p className="text-2xl font-bold text-electric">{stats.avgWordLength}</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <p className="text-xs text-white/60 mb-1">Reading Time</p>
              <p className="text-2xl font-bold text-electric">{stats.readingTime}m</p>
            </div>
          </div>

          <button
            onClick={copyToClipboard}
            className="w-full bg-electric text-obsidian px-4 py-2 rounded-lg font-bold hover:brightness-110 transition-all flex items-center justify-center gap-2"
          >
            <Copy size={16} />
            {copied ? 'Copied!' : 'Copy Stats'}
          </button>
        </div>
      )}

      {!text && (
        <div className="flex-1 flex flex-col items-center justify-center text-center opacity-40">
          <p className="text-sm">Paste text to analyze instantly</p>
        </div>
      )}
    </div>
  );
}
