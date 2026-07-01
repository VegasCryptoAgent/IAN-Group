import { useState } from 'react';
import { Loader, Check, AlertCircle } from 'lucide-react';
import { cn } from '../../../lib/utils';

interface Match {
  offset: number;
  length: number;
  message: string;
  replacements: string[];
  ruleId: string;
  type: string;
}

export default function WritingAssistantTool() {
  const [text, setText] = useState('');
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [correctedText, setCorrectedText] = useState('');

  const checkWriting = async () => {
    if (!text.trim()) return;

    setLoading(true);
    setError('');
    setCorrectedText('');
    setMatches([]);

    try {
      const response = await fetch('/api/writing-check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      });

      const data = await response.json();

      if (data.error) {
        setError(data.error);
      } else {
        setMatches(data.matches || []);
        setCorrectedText(data.corrected || text);
      }
    } catch (err) {
      setError('Check failed. Try again.');
    } finally {
      setLoading(false);
    }
  };

  const applyCorrection = (match: Match) => {
    if (match.replacements.length === 0) return;
    const replacement = match.replacements[0];
    const newText =
      text.substring(0, match.offset) +
      replacement +
      text.substring(match.offset + match.length);
    setText(newText);
    checkWriting();
  };

  return (
    <div className="flex flex-col h-full gap-6">
      {/* Text Input */}
      <div>
        <label className="text-xs font-bold text-white/60 mb-2 block">Your writing</label>
        <textarea
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Paste or type your text here..."
          rows={5}
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-electric transition-colors resize-none"
        />
      </div>

      {/* Check Button */}
      <button
        onClick={checkWriting}
        disabled={loading || !text.trim()}
        className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-lg font-bold hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <Loader size={18} className="animate-spin" />
            Checking...
          </>
        ) : (
          'Check Writing'
        )}
      </button>

      {/* Results */}
      {matches.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-amber-400">
            <AlertCircle size={16} />
            {matches.length} issue{matches.length !== 1 ? 's' : ''} found
          </div>

          <div className="space-y-3 max-h-64 overflow-y-auto">
            {matches.map((match, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-lg p-4 space-y-2"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <p className="text-xs font-mono text-white/60 mb-1">
                      "{text.substring(match.offset, match.offset + match.length)}"
                    </p>
                    <p className="text-sm text-white/80">{match.message}</p>
                  </div>
                </div>

                {match.replacements.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {match.replacements.slice(0, 3).map((replacement, j) => (
                      <button
                        key={j}
                        onClick={() => applyCorrection({ ...match, replacements: [replacement] })}
                        className="text-xs bg-electric/20 text-electric px-3 py-1 rounded hover:bg-electric/40 transition-colors"
                      >
                        {replacement}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {matches.length === 0 && text && !loading && (
        <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 flex items-center gap-3 text-green-300">
          <Check size={20} />
          <span className="text-sm font-medium">Great writing! No issues found.</span>
        </div>
      )}

      {correctedText && correctedText !== text && (
        <div>
          <label className="text-xs font-bold text-white/60 mb-2 block">Suggestion</label>
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-white/90 text-sm leading-relaxed max-h-32 overflow-y-auto">
            {correctedText}
          </div>
        </div>
      )}

      {error && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 text-red-300 text-sm">
          {error}
        </div>
      )}
    </div>
  );
}
