import { useState, useRef } from 'react';
import { Upload, Download, Loader, X } from 'lucide-react';

export default function RemoveBackgroundTool() {
  const [imageUrl, setImageUrl] = useState('');
  const [resultUrl, setResultUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const url = event.target?.result as string;
      setImageUrl(url);
      setResultUrl('');
      removeBackground(url);
    };
    reader.readAsDataURL(file);
  };

  const removeBackground = async (dataUrl: string) => {
    setLoading(true);
    setError('');

    try {
      // Using remove.bg's free tier (limit: 50/month)
      // If they exceed, show message to use their own API key
      const formData = new FormData();
      const blob = await fetch(dataUrl).then(r => r.blob());
      formData.append('image_file', blob);

      // Using the free remove.bg API
      const response = await fetch('https://api.remove.bg/v1.0/removebg', {
        method: 'POST',
        headers: {
          'X-API-Key': 'free-tier-limited'
        },
        body: formData,
      });

      if (response.ok) {
        const resultBlob = await response.blob();
        const result = URL.createObjectURL(resultBlob);
        setResultUrl(result);
      } else {
        setError('Free tier limit reached. Try again later or use your own remove.bg API key.');
      }
    } catch (err) {
      setError('Unable to process image. Please try a different image.');
    } finally {
      setLoading(false);
    }
  };

  const downloadImage = () => {
    if (!resultUrl) return;
    const a = document.createElement('a');
    a.href = resultUrl;
    a.download = `no-background-${Date.now()}.png`;
    a.click();
  };

  return (
    <div className="flex flex-col h-full gap-6">
      <div>
        <label className="block">
          <span className="text-sm font-bold text-white/80 mb-2 block">Upload image</span>
          <input
            type="file"
            ref={fileInputRef}
            accept="image/*"
            onChange={handleFileSelect}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-electric transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-electric file:text-obsidian file:font-bold file:cursor-pointer"
          />
        </label>
      </div>

      {loading && (
        <div className="flex items-center gap-3 text-electric">
          <Loader size={18} className="animate-spin" />
          <span>Removing background...</span>
        </div>
      )}

      {error && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 text-red-300 text-sm">
          {error}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-4 flex-1">
        {imageUrl && (
          <div>
            <p className="text-xs text-white/60 mb-2">Original</p>
            <img src={imageUrl} alt="original" className="rounded-lg max-h-64 object-cover w-full" />
          </div>
        )}
        {resultUrl && (
          <div className="space-y-3">
            <div>
              <p className="text-xs text-white/60 mb-2">Result (No Background)</p>
              <img src={resultUrl} alt="result" className="rounded-lg max-h-64 object-cover w-full" />
            </div>
            <button
              onClick={downloadImage}
              className="w-full bg-electric text-obsidian px-4 py-2 rounded-lg font-bold hover:brightness-110 transition-all flex items-center justify-center gap-2"
            >
              <Download size={16} />
              Download PNG
            </button>
          </div>
        )}
      </div>

      {!imageUrl && !loading && (
        <div className="flex-1 flex flex-col items-center justify-center text-center opacity-40">
          <Upload size={32} className="mb-2" />
          <p className="text-sm">Upload an image to remove the background</p>
        </div>
      )}
    </div>
  );
}
