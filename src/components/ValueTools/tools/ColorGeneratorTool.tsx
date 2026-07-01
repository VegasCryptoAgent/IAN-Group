import { useState } from 'react';
import { Copy, RefreshCw } from 'lucide-react';

export default function ColorGeneratorTool() {
  const [colors, setColors] = useState<string[]>(['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8']);
  const [copied, setCopied] = useState<string | null>(null);

  const generateRandomColor = () => {
    return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
  };

  const generatePalette = () => {
    const newColors = Array.from({ length: 5 }, () => generateRandomColor());
    setColors(newColors);
  };

  const copyColor = (color: string) => {
    navigator.clipboard.writeText(color);
    setCopied(color);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="flex flex-col h-full gap-6">
      <div>
        <button
          onClick={generatePalette}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-bold hover:brightness-110 transition-all flex items-center justify-center gap-2"
        >
          <RefreshCw size={18} />
          Generate Color Palette
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {colors.map((color) => (
          <div
            key={color}
            className="space-y-2"
          >
            <div
              className="w-full h-24 rounded-lg border-2 border-white/10 cursor-pointer hover:border-electric transition-all"
              style={{ backgroundColor: color }}
              onClick={() => copyColor(color)}
            />
            <div className="space-y-1">
              <p className="text-xs font-mono text-white text-center font-bold">{color}</p>
              <button
                onClick={() => copyColor(color)}
                className="w-full text-xs bg-white/5 border border-white/10 text-white px-2 py-1 rounded hover:bg-white/10 transition-all flex items-center justify-center gap-1"
              >
                <Copy size={12} />
                {copied === color ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-sm text-white/70 space-y-2">
        <p className="font-bold text-white">How to use:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Click "Generate Color Palette" to create a new set</li>
          <li>Click any color or its code to copy to clipboard</li>
          <li>Use in your designs, websites, and projects</li>
        </ul>
      </div>
    </div>
  );
}
