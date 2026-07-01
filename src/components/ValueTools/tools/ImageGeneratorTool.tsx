import { useState } from 'react';
import { Loader, Download, RefreshCw } from 'lucide-react';

export default function ImageGeneratorTool() {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const generateImage = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    setError('');

    try {
      const encodedPrompt = encodeURIComponent(prompt);
      const url = `https://image.pollinations.ai/prompt/${encodedPrompt}`;
      setImageUrl(url);
    } catch (err) {
      setError('Failed to generate image. Try again.');
    } finally {
      setLoading(false);
    }
  };

  const downloadImage = () => {
    if (!imageUrl) return;
    const a = document.createElement('a');
    a.href = imageUrl;
    a.download = `generated-${Date.now()}.png`;
    a.click();
  };

  return (
    <div className="flex flex-col h-full gap-6">
      {/* Input Section */}
      <div className="space-y-4">
        <label className="block">
          <span className="text-sm font-bold text-white/80 mb-2 block">Describe your image</span>
          <textarea
            value={prompt}
            onChange={e => setPrompt(e.target.value)}
            placeholder="e.g., 'A futuristic city skyline at sunset with flying cars and neon lights'"
            rows={3}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-electric transition-colors resize-none"
          />
        </label>

        <button
          onClick={generateImage}
          disabled={loading || !prompt.trim()}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-bold hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <Loader size={18} className="animate-spin" />
              Generating...
            </>
          ) : (
            'Generate Image'
          )}
        </button>
      </div>

      {/* Image Display */}
      {imageUrl && (
        <div className="space-y-4">
          <div className="rounded-lg overflow-hidden bg-white/5 border border-white/10">
            <img
              src={imageUrl}
              alt="Generated"
              className="w-full h-auto max-h-96 object-cover"
            />
          </div>

          <div className="flex gap-3">
            <button
              onClick={downloadImage}
              className="flex-1 bg-electric text-obsidian px-4 py-2 rounded-lg font-bold hover:brightness-110 transition-all flex items-center justify-center gap-2"
            >
              <Download size={16} />
              Download
            </button>
            <button
              onClick={() => setImageUrl('')}
              className="flex-1 bg-white/10 border border-white/20 text-white px-4 py-2 rounded-lg font-bold hover:bg-white/20 transition-all flex items-center justify-center gap-2"
            >
              <RefreshCw size={16} />
              New
            </button>
          </div>

          <p className="text-xs text-white/50 text-center">
            Prompt: {prompt}
          </p>
        </div>
      )}

      {error && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 text-red-300 text-sm">
          {error}
        </div>
      )}

      {!imageUrl && !loading && (
        <div className="flex-1 flex flex-col items-center justify-center text-center opacity-40">
          <p className="text-sm">Enter a prompt and generate your first image</p>
        </div>
      )}
    </div>
  );
}
