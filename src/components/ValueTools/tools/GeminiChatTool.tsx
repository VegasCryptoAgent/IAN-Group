import { useState, useRef, useEffect } from 'react';
import { Send, Loader, Upload, X } from 'lucide-react';
import { cn } from '../../../lib/utils';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function GeminiChatTool() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Upload a document or image and ask questions about it. I\'ll analyze and extract insights for you.',
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [imageData, setImageData] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = (event) => {
      setImageData(event.target?.result as string);
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: `✓ Loaded "${file.name}". Now ask me a question about it!`,
        },
      ]);
    };
    reader.readAsDataURL(file);
  };

  const handleSend = async () => {
    if ((!input.trim() && !imageData) || loading) return;

    const userMessage = input || '(analyzing uploaded file)';
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setLoading(true);

    try {
      const response = await fetch('/api/gemini-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage,
          imageData: imageData,
        }),
      });

      const data = await response.json();

      if (data.error) {
        setMessages(prev => [
          ...prev,
          {
            role: 'assistant',
            content: `Error: ${data.error}. Make sure you have GEMINI_API_KEY in .env.local`,
          },
        ]);
      } else {
        setMessages(prev => [
          ...prev,
          { role: 'assistant', content: data.response },
        ]);
        setImageData(null);
        setFileName('');
      }
    } catch (error) {
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: 'Connection error. Check your API configuration.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-4 mb-6 pr-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={cn(
              'flex gap-3 animate-fadeIn',
              msg.role === 'user' ? 'justify-end' : 'justify-start'
            )}
          >
            <div
              className={cn(
                'max-w-xs md:max-w-md lg:max-w-lg px-4 py-3 rounded-lg',
                msg.role === 'user'
                  ? 'bg-electric text-obsidian rounded-br-none'
                  : 'bg-white/5 border border-white/10 text-white rounded-bl-none'
              )}
            >
              <p className="text-sm leading-relaxed">{msg.content}</p>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start gap-3">
            <div className="bg-white/5 border border-white/10 px-4 py-3 rounded-lg rounded-bl-none">
              <Loader size={16} className="animate-spin text-electric" />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Image Preview */}
      {imageData && (
        <div className="mb-4 relative inline-block max-w-xs">
          <img src={imageData} alt="uploaded" className="rounded-lg max-h-32 object-cover" />
          <button
            onClick={() => {
              setImageData(null);
              setFileName('');
            }}
            className="absolute -top-2 -right-2 bg-electric text-obsidian rounded-full p-1 hover:brightness-110"
          >
            <X size={16} />
          </button>
        </div>
      )}

      {/* Input */}
      <div className="flex gap-3">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileSelect}
          accept="image/*,.pdf,.doc,.docx,.txt"
          className="hidden"
        />
        <button
          onClick={() => fileInputRef.current?.click()}
          disabled={loading}
          className="bg-white/10 border border-white/20 text-white px-4 py-3 rounded-lg font-bold hover:bg-white/20 transition-all disabled:opacity-50"
          title="Upload image or document"
        >
          <Upload size={18} />
        </button>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSend()}
          placeholder="Ask about your document..."
          disabled={loading}
          className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-electric transition-colors disabled:opacity-50"
        />
        <button
          onClick={handleSend}
          disabled={loading || (!input.trim() && !imageData)}
          className="bg-electric text-obsidian px-4 py-3 rounded-lg font-bold hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
}
