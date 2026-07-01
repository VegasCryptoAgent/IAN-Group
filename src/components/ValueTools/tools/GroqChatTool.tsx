import { useState, useRef, useEffect } from 'react';
import { Send, Loader } from 'lucide-react';
import { cn } from '../../../lib/utils';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function GroqChatTool() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hey! I\'m powered by Groq—the fastest AI inference. Ask me anything and I\'ll respond instantly.',
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setLoading(true);

    try {
      const response = await fetch('/api/groq-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();

      if (data.error) {
        setMessages(prev => [
          ...prev,
          {
            role: 'assistant',
            content: `Error: ${data.error}. Make sure you have a GROQ_API_KEY in .env.local`,
          },
        ]);
      } else {
        setMessages(prev => [
          ...prev,
          { role: 'assistant', content: data.response },
        ]);
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

      {/* Input */}
      <div className="flex gap-3">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSend()}
          placeholder="Ask me anything..."
          disabled={loading}
          className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-electric transition-colors disabled:opacity-50"
        />
        <button
          onClick={handleSend}
          disabled={loading || !input.trim()}
          className="bg-electric text-obsidian px-4 py-3 rounded-lg font-bold hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
}
