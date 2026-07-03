'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, Loader2, Bot, User, Database } from 'lucide-react';
import { motion } from 'framer-motion';

type Message = {
  id: string;
  role: 'user' | 'model';
  content: string;
};

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'model',
      content: 'Üdvözöllek a Market Intelligence Chatben! Kérdezz bátran a platformon található cikkekkel és videókkal kapcsolatban. Minden válaszomat a saját, lementett tudásbázisodra alapozom.'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    
    const newMessages: Message[] = [
      ...messages,
      { id: Date.now().toString(), role: 'user', content: userMessage }
    ];
    
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages })
      });

      if (!response.ok) {
        throw new Error('Hálózati hiba');
      }

      const data = await response.json();
      
      setMessages(prev => [
        ...prev,
        { id: (Date.now() + 1).toString(), role: 'model', content: data.reply || 'Nem érkezett válasz.' }
      ]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [
        ...prev,
        { id: (Date.now() + 1).toString(), role: 'model', content: 'Hiba történt a válasz generálása során. Kérlek próbáld újra később.' }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 60px)', maxWidth: '900px', margin: '0 auto', paddingTop: '1rem' }}>
      
      <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <div style={{ background: 'var(--accent-primary)', padding: '0.5rem', borderRadius: '8px', color: 'white' }}>
          <Database size={24} />
        </div>
        <div>
          <h1 style={{ margin: 0, fontSize: '1.5rem', color: 'var(--text-primary)' }}>Dokumentum Chat</h1>
          <p style={{ margin: '0.25rem 0 0 0', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Beszélgess az elmentett tudásbázisoddal (RAG)</p>
        </div>
      </div>

      <div className="glass-panel" style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', background: 'white', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
        
        {/* Messages Container */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {messages.map((message) => (
            <motion.div 
              key={message.id} 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ 
                display: 'flex', 
                gap: '1rem',
                flexDirection: message.role === 'user' ? 'row-reverse' : 'row'
              }}
            >
              <div style={{ 
                width: '36px', height: '36px', borderRadius: '50%', 
                background: message.role === 'user' ? 'var(--accent-secondary)' : '#f3f4f6',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0, color: message.role === 'user' ? 'white' : '#6b7280'
              }}>
                {message.role === 'user' ? <User size={20} /> : <Bot size={20} />}
              </div>
              
              <div style={{ 
                background: message.role === 'user' ? 'var(--accent-primary)' : '#f9fafb',
                color: message.role === 'user' ? 'white' : 'var(--text-primary)',
                padding: '1rem 1.25rem', borderRadius: '12px',
                borderTopRightRadius: message.role === 'user' ? '0' : '12px',
                borderTopLeftRadius: message.role === 'model' ? '0' : '12px',
                maxWidth: '75%', border: message.role === 'model' ? '1px solid #e5e7eb' : 'none',
                lineHeight: 1.6, fontSize: '0.95rem'
              }}>
                <div style={{ whiteSpace: 'pre-wrap' }} dangerouslySetInnerHTML={{ __html: message.content.replace(/\\n/g, '<br/>') }} />
              </div>
            </motion.div>
          ))}
          
          {isLoading && (
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6b7280' }}>
                <Bot size={20} />
              </div>
              <div style={{ background: '#f9fafb', padding: '1rem', borderRadius: '12px', borderTopLeftRadius: '0', border: '1px solid #e5e7eb', display: 'flex', alignItems: 'center' }}>
                <Loader2 size={20} className="animate-spin" style={{ color: 'var(--accent-primary)' }} />
                <span style={{ marginLeft: '0.5rem', color: '#6b7280', fontSize: '0.9rem' }}>A tudásbázis elemzése...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div style={{ padding: '1rem', borderTop: '1px solid #eee', background: '#fafafa' }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.5rem', position: 'relative' }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tegyél fel egy kérdést a lementett hírekről vagy videókról..."
              disabled={isLoading}
              style={{
                flex: 1, padding: '1rem 1rem 1rem 1.25rem', borderRadius: '24px',
                border: '1px solid #ddd', fontSize: '1rem', outline: 'none',
                boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.05)'
              }}
            />
            <button 
              type="submit" 
              disabled={isLoading || !input.trim()}
              style={{
                background: 'var(--accent-primary)', color: 'white', border: 'none',
                width: '48px', height: '48px', borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: (isLoading || !input.trim()) ? 'not-allowed' : 'pointer',
                opacity: (isLoading || !input.trim()) ? 0.6 : 1,
                position: 'absolute', right: '4px', top: '4px',
                transition: 'all 0.2s'
              }}
            >
              <Send size={20} style={{ transform: 'translateX(-1px)' }} />
            </button>
          </form>
          <div style={{ textAlign: 'center', marginTop: '0.5rem', fontSize: '0.75rem', color: '#9ca3af' }}>
            A válasz generálása az adatbázis méretétől függően 5-10 másodpercet is igénybe vehet.
          </div>
        </div>
      </div>
    </div>
  );
}
