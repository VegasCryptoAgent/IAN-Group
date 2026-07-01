import { useState } from 'react';
import { Loader, Copy, RefreshCw } from 'lucide-react';

const LANGUAGES = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Spanish' },
  { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' },
  { code: 'it', name: 'Italian' },
  { code: 'pt', name: 'Portuguese' },
  { code: 'ja', name: 'Japanese' },
  { code: 'zh', name: 'Chinese' },
  { code: 'ru', name: 'Russian' },
  { code: 'ar', name: 'Arabic' },
  { code: 'hi', name: 'Hindi' },
  { code: 'ko', name: 'Korean' },
];

export default function TranslationTool() {
  const [sourceText, setSourceText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [sourceLang, setSourceLang] = useState('en');
  const [targetLang, setTargetLang] = useState('es');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const translate = async () => {
    if (!sourceText.trim()) return;

    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: sourceText,
          sourceLang,
          targetLang,
        }),
      });

      const data = await response.json();

      if (data.error) {
        setError(data.error);
      } else {
        setTranslatedText(data.translation);
      }
    } catch (err) {
      setError('Translation failed. Check your connection.');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(translatedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const swapLanguages = () => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
    setSourceText(translatedText);
    setTranslatedText('');
  };

  return (
    <div className="flex flex-col h-full gap-6">
      {/* Language Selector */}
      <div className="flex gap-3 items-center justify-between">
        <div className="flex-1">
          <label className="text-xs font-bold text-white/60 mb-2 block">From</label>
          <select
            value={sourceLang}
            onChange={e => setSourceLang(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-electric"
          >
            {LANGUAGES.map(lang => (
              <option key={lang.code} value={lang.code}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={swapLanguages}
          disabled={loading}
          className="mt-6 bg-white/10 border border-white/20 text-white px-3 py-2 rounded-lg hover:bg-white/20 transition-all"
        >
          ⇄
        </button>

        <div className="flex-1">
          <label className="text-xs font-bold text-white/60 mb-2 block">To</label>
          <select
            value={targetLang}
            onChange={e => setTargetLang(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-electric"
          >
            {LANGUAGES.map(lang => (
              <option key={lang.code} value={lang.code}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Text Areas */}
      <div className="grid md:grid-cols-2 gap-4 flex-1">
        {/* Source */}
        <div>
          <label className="text-xs font-bold text-white/60 mb-2 block">Your text</label>
          <textarea
            value={sourceText}
            onChange={e => setSourceText(e.target.value)}
            placeholder="Enter text to translate..."
            rows={6}
            className="w-full h-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-electric transition-colors resize-none"
          />
        </div>

        {/* Translation */}
        <div>
          <label className="text-xs font-bold text-white/60 mb-2 block">Translation</label>
          <div className="relative h-full">
            <textarea
              value={translatedText}
              readOnly
              placeholder="Translation will appear here..."
              rows={6}
              className="w-full h-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none resize-none"
            />
            {translatedText && (
              <button
                onClick={copyToClipboard}
                className="absolute top-3 right-3 bg-electric text-obsidian p-2 rounded hover:brightness-110 transition-all"
                title="Copy translation"
              >
                <Copy size={14} />
              </button>
            )}
            {copied && (
              <div className="absolute top-3 right-12 bg-electric text-obsidian px-3 py-1 rounded text-xs font-bold">
                Copied!
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Translate Button */}
      <button
        onClick={translate}
        disabled={loading || !sourceText.trim()}
        className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-lg font-bold hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <Loader size={18} className="animate-spin" />
            Translating...
          </>
        ) : (
          'Translate'
        )}
      </button>

      {error && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 text-red-300 text-sm">
          {error}
        </div>
      )}
    </div>
  );
}
