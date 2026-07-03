"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, Brain, Sparkles, RefreshCw, ChevronRight, BarChart3, Lightbulb, Target, ShieldCheck, Loader2, ExternalLink, Mic } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Helper to render text with markdown links as clickable React elements
function renderTextWithLinks(text: string) {
  if (!text) return null;

  // Regex to match [label](url)
  const regex = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    const [fullMatch, label, url] = match;
    const matchIndex = match.index;

    // Add text before the match
    if (matchIndex > lastIndex) {
      parts.push(text.substring(lastIndex, matchIndex));
    }

    // Add the link element
    parts.push(
      <a
        key={matchIndex}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: 'var(--accent-primary)', textDecoration: 'underline', fontWeight: 600 }}
      >
        {label}
      </a>
    );

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}

function IntelligenceReportContent() {
  const searchParams = useSearchParams();
  const [report, setReport] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [podcastGenerating, setPodcastGenerating] = useState(false);
  const [podcastData, setPodcastData] = useState<{ script: string, audioBase64: string } | null>(null);

  const generatePodcast = async () => {
    setPodcastGenerating(true);
    setPodcastData(null);
    const selectedIds = searchParams.get('ids')?.split(',');
    try {
      const res = await fetch('/api/podcast', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ids: selectedIds })
      });
      const data = await res.json();
      if (data.success) {
        setPodcastData({ script: data.script, audioBase64: data.audioBase64 });
      } else {
        alert(data.error || 'Hiba a podcast generálásakor.');
      }
    } catch (err) {
      console.error(err);
      alert('Hálózati hiba a podcast generálásakor.');
    } finally {
      setPodcastGenerating(false);
    }
  };

  const fetchReport = async (force = false) => {
    if (force) setRefreshing(true);
    else setLoading(true);

    const selectedIds = searchParams.get('ids')?.split(',');

    try {
      // Mindig POST-ot használunk, ha szűrni akarunk vagy frissíteni
      const res = await fetch('/api/intelligence', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ids: selectedIds })
      });
      const data = await res.json();
      setReport(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchReport();
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '80vh', gap: '1rem' }}>
        <div className="animate-pulse" style={{ background: 'var(--accent-primary)', padding: '1rem', borderRadius: '50%', color: 'white' }}>
          <Brain size={40} />
        </div>
        <h2 style={{ color: 'var(--text-primary)' }}>Stratégiai jelentés összeállítása...</h2>
        <p style={{ color: 'var(--text-muted)' }}>Az AI éppen elemzi az összes mentett hírt.</p>
        <Loader2 className="animate-spin" size={24} color="var(--accent-primary)" />
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', paddingBottom: '4rem' }}>
      <header className="glass-panel" style={{ padding: '1rem var(--spacing-lg)', marginBottom: 'var(--spacing-2xl)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', background: '#ffffff' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="/saved" className="btn-secondary" style={{ padding: '0.5rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ArrowLeft size={20} />
          </a>
          <div>
            <h1 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.8rem' }}>
              <Brain size={24} style={{ color: 'var(--accent-primary)' }} /> Intelligencia Jelentés
            </h1>
            <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Utolsó frissítés: {new Date(report?.updatedAt).toLocaleString('hu-HU')}
            </p>
          </div>
          <div style={{ padding: '2px', background: '#ffffff', borderRadius: '4px', display: 'flex', alignItems: 'center' }}>
            <img src="/logo.png" alt="Szerencsejáték Zrt. Logo" style={{ height: '36px', marginLeft: '0.5rem', objectFit: 'contain' }} />
          </div>
        </div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <button 
            onClick={generatePodcast} 
            className="btn-primary" 
            disabled={podcastGenerating || !searchParams.get('ids')}
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#ec4899', border: 'none' }}
          >
            {podcastGenerating ? <Loader2 size={18} className="animate-spin" /> : <Mic size={18} />}
            {podcastGenerating ? "Felvétel..." : "Híradó (Podcast)"}
          </button>
          <button 
            onClick={() => fetchReport(true)} 
            className="btn-secondary" 
            disabled={refreshing}
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <RefreshCw size={18} className={refreshing ? "animate-spin" : ""} />
            {refreshing ? "Elemzés..." : "Frissítés"}
          </button>
        </div>
      </header>

      {/* Podcast Audio Section */}
      <AnimatePresence>
        {podcastData && (
          <motion.section 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="glass-card" 
            style={{ padding: 'var(--spacing-xl)', marginBottom: 'var(--spacing-xl)', background: 'rgba(236, 72, 153, 0.05)', border: '1px solid rgba(236, 72, 153, 0.2)', overflow: 'hidden' }}
          >
            <h2 style={{ marginTop: 0, display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ec4899' }}>
              <Mic size={24} /> Napi Üzleti Híradó
            </h2>
            <div style={{ background: 'white', padding: '1rem', borderRadius: '12px', marginBottom: '1rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
              <audio controls style={{ width: '100%' }} src={podcastData.audioBase64}>
                Böngésződ nem támogatja a beágyazott hanglejátszást.
              </audio>
            </div>
            <details>
              <summary style={{ cursor: 'pointer', color: 'var(--text-muted)', fontWeight: 600 }}>Podcast átirata (Script)</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem', whiteSpace: 'pre-wrap' }}>
                {podcastData.script}
              </p>
            </details>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Executive Summary Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card" 
        style={{ padding: 'var(--spacing-xl)', marginBottom: 'var(--spacing-xl)', background: 'linear-gradient(135deg, rgba(0, 122, 51, 0.08), rgba(19, 157, 72, 0.04))', border: '1px solid rgba(19, 157, 72, 0.2)' }}
      >
        <h2 style={{ marginTop: 0, display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)' }}>
          <Sparkles size={24} /> Vezetői Összefoglaló
        </h2>
        <div style={{ fontSize: '1.15rem', lineHeight: 1.8, color: 'var(--text-secondary)', whiteSpace: 'pre-wrap' }}>
          {renderTextWithLinks(report?.executiveSummary)}
        </div>
      </motion.section>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 'var(--spacing-lg)' }}>
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}
        >
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <BarChart3 size={24} color="var(--accent-primary)" /> Kategória Elemzések
          </h2>
          {report?.categories?.map((cat: any, idx: number) => (
            <motion.div key={idx} variants={item} className="glass-card" style={{ padding: 'var(--spacing-lg)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '1.25rem' }}>{cat.name}</h3>
                <span style={{ background: 'var(--bg-tertiary)', padding: '2px 10px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                  {cat.relatedArticles?.length || 0} hír
                </span>
              </div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem', fontSize: '1rem', fontStyle: 'italic', borderLeft: '3px solid var(--accent-primary)', paddingLeft: '1rem' }}>
                {renderTextWithLinks(cat.synthesis)}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {cat.findings?.map((finding: string, fIdx: number) => (
                  <div key={fIdx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <ChevronRight size={18} style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                      {renderTextWithLinks(finding)}
                    </span>
                  </div>
                ))}
              </div>
              {cat.relevance && (
                <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--bg-tertiary)', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <Target size={16} color="var(--success)" />
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>Relevancia: </span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{cat.relevance}</span>
                </div>
              )}
              {cat.relatedArticles && cat.relatedArticles.length > 0 && (
                <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--bg-tertiary)' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Forrás cikkek:
                  </span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {cat.relatedArticles.map((art: any, aIdx: number) => (
                      <a 
                        key={art.id || aIdx} 
                        href={art.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ fontSize: '0.85rem', color: 'var(--accent-primary)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.3rem', transition: 'color var(--transition-fast)' }}
                      >
                        <ExternalLink size={12} style={{ flexShrink: 0 }} />
                        <span style={{ textDecoration: 'underline' }}>{art.title}</span>
                        <span style={{ background: 'var(--bg-tertiary)', padding: '1px 6px', borderRadius: '4px', fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600, marginLeft: '0.25rem' }}>
                          {art.platform}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}
        >
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Lightbulb size={24} color="var(--warning)" /> Stratégiai Javaslatok
          </h2>
          <div className="glass-card" style={{ padding: 'var(--spacing-xl)', background: 'rgba(245, 158, 11, 0.03)', border: '1px solid rgba(245, 158, 11, 0.1)' }}>
             <ul style={{ padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
               {report?.recommendations?.map((rec: string, idx: number) => (
                 <motion.li key={idx} variants={item} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                   <div style={{ background: 'var(--warning)', color: 'white', padding: '0.5rem', borderRadius: '10px', display: 'flex' }}>
                     <Target size={20} />
                   </div>
                   <div style={{ flex: 1 }}>
                     <p style={{ margin: 0, fontSize: '1.05rem', lineHeight: 1.5, color: 'var(--text-primary)', fontWeight: 500 }}>
                       {rec}
                     </p>
                   </div>
                 </motion.li>
               ))}
             </ul>
          </div>

          <h2 style={{ fontSize: '1.5rem', marginTop: '1rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ShieldCheck size={24} color="var(--success)" /> Kockázatok és Lehetőségek
          </h2>
          <div className="glass-card" style={{ padding: 'var(--spacing-lg)' }}>
             <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textAlign: 'center', fontStyle: 'italic' }}>
               Az AI elemzés az összes mentett híradatbázis alapján készült. A pontosság érdekében rendszeresen frissítsd a jelentést új cikkek mentése után.
             </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function IntelligenceReport() {
  return (
    <Suspense fallback={
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '80vh', gap: '1rem' }}>
        <div className="animate-pulse" style={{ background: 'var(--accent-primary)', padding: '1rem', borderRadius: '50%', color: 'white' }}>
          <Brain size={40} />
        </div>
        <h2 style={{ color: 'var(--text-primary)' }}>Betöltés...</h2>
      </div>
    }>
      <IntelligenceReportContent />
    </Suspense>
  );
}
