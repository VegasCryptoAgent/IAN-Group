import { useState } from 'react';
import { Loader, Upload, Copy } from 'lucide-react';

export default function OCRTool() {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);
    try {
      const reader = new FileReader();
      reader.onload = async (event) => {
        const imageData = event.target?.result as string;

        // Use Tesseract.js via CDN
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/tesseract.js@5';
        script.onload = async () => {
          const { Tesseract } = window as any;
          const worker = await Tesseract.createWorker();
          const result = await worker.recognize(imageData);
          setText(result.data.text);
          await worker.terminate();
          setLoading(false);
        };
        document.head.appendChild(script);
      };
      reader.readAsDataURL(file);
    } catch (error) {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col h-full gap-6">
      <div>
        <label className="block">
          <span className="text-sm font-bold text-white/80 mb-2 block">Upload image or screenshot</span>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-electric transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-electric file:text-obsidian file:font-bold file:cursor-pointer"
          />
        </label>
      </div>

      {loading && (
        <div className="flex items-center gap-3 text-electric">
          <Loader size={18} className="animate-spin" />
          <span>Extracting text...</span>
        </div>
      )}

      {text && (
        <div className="space-y-4">
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 max-h-64 overflow-y-auto">
            <p className="text-white/90 whitespace-pre-wrap text-sm leading-relaxed">{text}</p>
          </div>

          <button
            onClick={copyToClipboard}
            className="w-full bg-electric text-obsidian px-4 py-2 rounded-lg font-bold hover:brightness-110 transition-all flex items-center justify-center gap-2"
          >
            <Copy size={16} />
            {copied ? 'Copied!' : 'Copy Text'}
          </button>
        </div>
      )}

      {!text && !loading && (
        <div className="flex-1 flex flex-col items-center justify-center text-center opacity-40">
          <Upload size={32} className="mb-2" />
          <p className="text-sm">Upload an image to extract text</p>
        </div>
      )}
    </div>
  );
}
