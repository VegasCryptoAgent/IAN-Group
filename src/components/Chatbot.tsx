import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Loader2, Bot, Trash2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { getChatResponse } from '../services/geminiService';
import { cn } from '../lib/utils';

interface Message {
  role: 'user' | 'model';
  content: string;
}

const STORAGE_KEY = 'ian_chat_history';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Failed to parse chat history", e);
      }
    }
    return [{ role: 'model', content: "Hello! I'm the IAN AI assistant. How can I help you scale today?" }];
  });
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const SUGGESTED_QUESTIONS = [
    "What is IAN Group?",
    "How can you help my business scale?",
    "Tell me about the Accelerator program.",
    "Show me some case studies.",
    "How do I book a strategy call?"
  ];

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (text?: string) => {
    const messageToSend = text || input;
    if (!messageToSend.trim() || isLoading) return;

    const userMessage = messageToSend.trim();
    if (!text) setInput('');
    
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.content }]
    }));

    const response = await getChatResponse(userMessage, history);
    
    setMessages(prev => [...prev, { role: 'model', content: response }]);
    setIsLoading(false);
  };

  const clearHistory = () => {
    if (window.confirm("Are you sure you want to clear your chat history?")) {
      const initialMessage: Message[] = [{ role: 'model', content: "Hello! I'm the IAN AI assistant. How can I help you scale today?" }];
      setMessages(initialMessage);
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-electric text-obsidian rounded-full shadow-[0_0_20px_rgba(0,242,255,0.4)] flex items-center justify-center"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-[90vw] max-w-[400px] h-[70vh] max-h-[700px] glass-panel rounded-3xl flex flex-col overflow-hidden shadow-2xl border border-white/10"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 bg-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-electric/20 rounded-full flex items-center justify-center">
                  <Bot size={18} className="text-electric" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm uppercase tracking-wider">IAN Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Online</span>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={clearHistory}
                className="p-2 text-white/20 hover:text-magenta transition-colors"
                title="Clear Chat"
              >
                <Trash2 size={16} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex flex-col max-w-[85%]",
                    m.role === 'user' ? "ml-auto items-end" : "items-start"
                  )}
                >
                  <div
                    className={cn(
                      "px-4 py-3 rounded-2xl leading-relaxed",
                      m.role === 'user' 
                        ? "bg-electric text-obsidian font-medium rounded-tr-none text-sm" 
                        : "bg-white/5 text-white/80 border border-white/10 rounded-tl-none"
                    )}
                  >
                    {m.role === 'user' ? (
                      m.content
                    ) : (
                      <div className="markdown-body text-sm">
                        <ReactMarkdown>{m.content}</ReactMarkdown>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex items-start max-w-[85%]">
                  <div className="bg-white/5 text-white/40 px-4 py-3 rounded-2xl rounded-tl-none border border-white/10">
                    <Loader2 size={16} className="animate-spin" />
                  </div>
                </div>
              )}
              
              {/* Suggested Questions */}
              {!isLoading && messages.length === 1 && (
                <div className="pt-4 space-y-2">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-white/20 mb-3">Suggested Questions</p>
                  <div className="flex flex-wrap gap-2">
                    {SUGGESTED_QUESTIONS.map((q, i) => (
                      <button
                        key={i}
                        onClick={() => handleSend(q)}
                        className="text-[11px] bg-white/5 border border-white/10 rounded-full px-4 py-2 hover:bg-electric hover:text-obsidian hover:border-electric transition-all text-left"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10 bg-white/5">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="relative flex items-center"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask anything..."
                  className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-4 pr-12 text-sm focus:outline-none focus:border-electric/50 transition-colors"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 p-2 text-electric hover:scale-110 disabled:opacity-50 disabled:scale-100 transition-all"
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
