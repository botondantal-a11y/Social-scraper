"use client";

import { useState, useRef, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Search, Loader2, Link as LinkIcon, MessageSquare, AlertCircle, Save, Check, ChevronDown, ChevronUp, Play, Pause, Trash2, Heart, Zap, Compass, BarChart, Network, Target, Bookmark, PlayCircle, TrendingUp, Radio } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type JobStatus = 'idle' | 'loading' | 'success' | 'error';

interface ScrapeJob {
  id: string;
  url: string;
  status: JobStatus;
  result?: any;
  error?: string;
  isSaving: boolean;
  isSaved: boolean;
  showDetails: boolean;
  dorkKeyword?: string;
  dorkLabel?: string;
}

function HomeContent() {
  const searchParams = useSearchParams();
  const [urlsInput, setUrlsInput] = useState("");
  const [jobs, setJobs] = useState<ScrapeJob[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const processingRef = useRef(false);

  useEffect(() => {
    const autoUrl = searchParams.get('autoScrape');
    if (autoUrl) {
      let urlData: { url: string, keyword?: string, dorkLabel?: string }[] = [];
      
      if (autoUrl === 'local') {
        const stored = localStorage.getItem('pendingScrapeUrls');
        if (stored) {
          try {
            const parsed = JSON.parse(stored);
            // Handle both legacy string array and new object array
            urlData = parsed.map((item: any) => typeof item === 'string' ? { url: item } : item);
            localStorage.removeItem('pendingScrapeUrls');
          } catch (e) {
            console.error("Error parsing local urls", e);
          }
        }
      } else {
        urlData = autoUrl.split('|').map(u => ({ url: u }));
      }

      if (urlData.length > 0) {
        const newJobs: ScrapeJob[] = urlData.map(item => ({
          id: Math.random().toString(36).substring(7),
          url: item.url,
          dorkKeyword: item.keyword,
          dorkLabel: item.dorkLabel,
          status: 'idle',
          isSaving: false,
          isSaved: false,
          showDetails: false,
        }));
        setJobs(prev => [...newJobs, ...prev]);
      }
      
      // Clear URL param
      window.history.replaceState({}, '', '/');
    }
  }, [searchParams]);

  // Sync state with ref for the async loop
  useEffect(() => {
    processingRef.current = isProcessing;
  }, [isProcessing]);

  const handleAddLinks = (e: React.FormEvent) => {
    e.preventDefault();
    if (!urlsInput.trim()) return;

    const urls = urlsInput.split('\n')
      .map(u => u.trim())
      .filter(u => u.length > 0 && u.startsWith('http'));

    if (urls.length === 0) return;

    const newJobs: ScrapeJob[] = urls.map(url => ({
      id: Math.random().toString(36).substring(7),
      url,
      status: 'idle',
      isSaving: false,
      isSaved: false,
      showDetails: false
    }));

    setJobs(prev => [...prev, ...newJobs]);
    setUrlsInput("");
  };

  const loopTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const processNextJob = async () => {
    if (!processingRef.current) return;

    setJobs(currentJobs => {
      // Ellenőrizzük, hogy fut-e már egy lekérés, nehogy párhuzamosan indítsunk többet
      if (currentJobs.some(j => j.status === 'loading')) return currentJobs;

      const pendingJobIndex = currentJobs.findIndex(j => j.status === 'idle');
      
      if (pendingJobIndex === -1) {
        // Ha nincs több munka, leállítjuk a folyamatot
        setIsProcessing(false);
        return currentJobs;
      }

      const job = currentJobs[pendingJobIndex];
      const updatedJobs = [...currentJobs];
      updatedJobs[pendingJobIndex] = { ...job, status: 'loading' };
      
      performScrape(job.id, job.url);
      return updatedJobs;
    });
  };

  const performScrape = async (id: string, url: string) => {
    try {
      const response = await fetch('/api/scrape', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url })
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Hiba történt a lekérés során.');
      }
      
      setJobs(prev => prev.map(job => 
        job.id === id ? { ...job, status: 'success', result: data } : job
      ));
    } catch (err: any) {
      setJobs(prev => prev.map(job => 
        job.id === id ? { ...job, status: 'error', error: err.message || "Hiba történt." } : job
      ));
    } finally {
      // Tisztítjuk az előző időzítőt, ha volt
      if (loopTimeoutRef.current) clearTimeout(loopTimeoutRef.current);

      // A Gemini Free Tier limit miatt (15 kérés/perc) növeljük a várakozást 6 másodpercre
      loopTimeoutRef.current = setTimeout(() => {
        if (processingRef.current) {
          processNextJob();
        }
      }, 6000);
    }
  };

  useEffect(() => {
    if (isProcessing) {
      processNextJob();
    } else {
      // Ha leállítjuk, töröljük a várakozó időzítőt is
      if (loopTimeoutRef.current) clearTimeout(loopTimeoutRef.current);
    }
  }, [isProcessing]);

  const toggleProcessing = () => {
    setIsProcessing(prev => !prev);
  };

  const clearJobs = () => {
    setJobs([]);
    setIsProcessing(false);
  };

  const toggleDetails = (id: string) => {
    setJobs(prev => prev.map(job => 
      job.id === id ? { ...job, showDetails: !job.showDetails } : job
    ));
  };

  const handleSave = async (id: string) => {
    const job = jobs.find(j => j.id === id);
    if (!job || !job.result || job.isSaved || job.isSaving) return;

    setJobs(prev => prev.map(j => j.id === id ? { ...j, isSaving: true } : j));

    try {
      const response = await fetch('/api/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: job.result.title,
          url: job.result.originalUrl,
          platform: job.result.platform,
          fullText: job.result.fullText,
          summary: job.result.summary,
          commentSummary: job.result.commentSentiment,
          reactions: job.result.reactions,
          comments: job.result.comments,
          imageUrl: job.result.imageUrl,
          discoveryKeyword: job.dorkKeyword || job.dorkLabel,
          publishedAt: job.result.publishedAt
        })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error);
      
      setJobs(prev => prev.map(j => j.id === id ? { ...j, isSaving: false, isSaved: true } : j));
    } catch (err: any) {
      alert(err.message || "Hiba a mentés során.");
      setJobs(prev => prev.map(j => j.id === id ? { ...j, isSaving: false } : j));
    }
  };

  const handleSaveAll = async () => {
    const unsavedSuccessJobs = jobs.filter(j => j.status === 'success' && !j.isSaved && !j.isSaving);
    for (const job of unsavedSuccessJobs) {
      await handleSave(job.id);
      await new Promise(r => setTimeout(r, 200));
    }
  };

  const stats = {
    total: jobs.length,
    pending: jobs.filter(j => j.status === 'idle').length,
    loading: jobs.filter(j => j.status === 'loading').length,
    success: jobs.filter(j => j.status === 'success').length,
    error: jobs.filter(j => j.status === 'error').length,
  };

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
      <header className="glass-panel" style={{ padding: '1.2rem var(--spacing-lg)', marginBottom: 'var(--spacing-2xl)', display: 'flex', flexDirection: 'column', gap: '1.5rem', background: '#ffffff' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ padding: '4px', background: '#ffffff', borderRadius: '4px' }}>
            <img src="/logo.png" alt="Szerencsejáték Zrt. Logo" style={{ height: '48px', objectFit: 'contain', display: 'block' }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', flexWrap: 'wrap' }}>
            <a href="/discovery" className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(52, 211, 153, 0.1)', border: '1px solid var(--success)', color: 'var(--success)' }}>
               <Compass size={18} /> Felfedező
            </a>
            <a href="/network" className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(59, 130, 246, 0.1)', border: '1px solid #3b82f6', color: '#3b82f6' }}>
               <Network size={18} /> Iparági Hálózat
            </a>
            <a href="/monitor" className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', border: '1px solid var(--warning)', color: 'var(--warning)' }}>
               <Target size={18} /> Célzott Figyelő
            </a>
            <a href="/youtube" className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(220, 38, 38, 0.1)', border: '1px solid #dc2626', color: '#dc2626' }}>
               <PlayCircle size={18} /> YouTube
            </a>
            <a href="/listening" className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(6, 182, 212, 0.1)', border: '1px solid #06b6d4', color: '#06b6d4' }}>
               <Radio size={18} /> Social Listening
            </a>
            <a href="/chat" className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(139, 92, 246, 0.1)', border: '1px solid #8b5cf6', color: '#8b5cf6' }}>
               <MessageSquare size={18} /> Chat
            </a>
            <a href="/trends" className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(245, 158, 11, 0.1)', border: '1px solid #f59e0b', color: '#f59e0b' }}>
               <TrendingUp size={18} /> Trend Radar
            </a>
            <a href="/linkedin" className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(0, 119, 181, 0.1)', border: '1px solid #0077b5', color: '#0077b5' }}>
               <Network size={18} /> LinkedIn Scraper
            </a>
            <a href="/dashboard" className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', border: '1px solid var(--brand)', color: 'var(--brand)' }}>
               <BarChart size={18} /> Profil Dashboard
            </a>
            <a href="/saved" className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
               Mentett Cikkek
            </a>
            <a href="/settings" className="btn-secondary">
              Beállítások
            </a>
          </div>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', borderTop: '1px solid #e1e4e1', paddingTop: '1.2rem' }}>
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: 800, margin: '0.5rem 0', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
              OmniScrape <span style={{ color: 'var(--accent-primary)', fontWeight: 400 }}>Intelligence</span>
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', margin: 0 }}>
              Professzionális médiafigyelő és AI stratégiai elemző rendszer
            </p>
          </div>
        </div>
      </header>

      <form onSubmit={handleAddLinks} className="glass-card" style={{ padding: 'var(--spacing-lg)', marginBottom: 'var(--spacing-xl)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
        <div style={{ position: 'relative' }}>
          <textarea
            value={urlsInput}
            onChange={(e) => setUrlsInput(e.target.value)}
            placeholder="https://facebook.com/...\nhttps://reddit.com/...\n(Minden link külön sorba)"
            className="input-field"
            style={{ padding: '1rem', minHeight: '120px', resize: 'vertical' }}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button type="submit" className="btn-primary" disabled={!urlsInput.trim()} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>Linkek Hozzáadása A Listához</span>
          </button>
        </div>
      </form>

      {jobs.length > 0 && (
        <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', marginBottom: 'var(--spacing-xl)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-lg)', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <h2 style={{ margin: 0, color: 'var(--text-primary)' }}>Feldolgozási Sor</h2>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                ({stats.success} kész, {stats.error} hiba, {stats.pending + stats.loading} van hátra)
              </span>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button 
                onClick={toggleProcessing} 
                className="btn-primary" 
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: isProcessing ? 'var(--warning)' : 'var(--success)' }}
              >
                {isProcessing ? <Pause size={18} /> : <Play size={18} />}
                <span>{isProcessing ? 'Szüneteltetés' : 'Indítás'}</span>
              </button>
              
              {stats.success > 0 && (
                <button 
                  onClick={handleSaveAll} 
                  className="btn-secondary" 
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <Save size={18} />
                  <span>Sikeresek Mentése</span>
                </button>
              )}
              
              <button 
                onClick={clearJobs} 
                className="btn-secondary" 
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--error)' }}
              >
                <Trash2 size={18} />
                <span>Törlés</span>
              </button>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
            <AnimatePresence>
              {jobs.map((job) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  style={{ overflow: 'hidden' }}
                >
                  <div className="glass-card" style={{ 
                    padding: 'var(--spacing-md)', 
                    borderLeft: `4px solid ${job.status === 'success' ? 'var(--success)' : job.status === 'error' ? 'var(--error)' : job.status === 'loading' ? 'var(--brand)' : 'var(--text-muted)'}`
                  }}>
                    
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', paddingRight: '1rem' }}>
                        {job.status === 'success' ? (
                          <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{job.result?.title || 'Ismeretlen cím'}</span>
                            {job.dorkKeyword && (
                              <span style={{ fontSize: '0.75rem', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                <Search size={10} /> Kulcsszó: {job.dorkKeyword} {job.dorkLabel && `(${job.dorkLabel})`}
                              </span>
                            )}
                          </div>
                        ) : (
                          <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{ color: 'var(--text-secondary)' }}>{job.url}</span>
                            {job.dorkKeyword && (
                              <span style={{ fontSize: '0.75rem', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                <Search size={10} /> Kulcsszó: {job.dorkKeyword}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                      
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        {job.status === 'idle' && <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Várakozik</span>}
                        {job.status === 'loading' && <span style={{ color: 'var(--brand)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}><Loader2 size={16} className="animate-spin" /> Folyamatban...</span>}
                        {job.status === 'error' && <span style={{ color: 'var(--error)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}><AlertCircle size={16} /> Hiba</span>}
                        {job.status === 'success' && (
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <button onClick={() => toggleDetails(job.id)} className="btn-secondary" style={{ padding: '0.25rem 0.5rem', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                              {job.showDetails ? <ChevronUp size={14} /> : <ChevronDown size={14} />} Részletek
                            </button>
                            <button onClick={() => handleSave(job.id)} disabled={job.isSaved || job.isSaving} className="btn-primary" style={{ padding: '0.25rem 0.5rem', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.25rem', background: job.isSaved ? 'var(--success)' : 'var(--gradient-brand)' }}>
                              {job.isSaving ? <Loader2 size={14} className="animate-spin" /> : job.isSaved ? <Check size={14} /> : <Save size={14} />}
                              {job.isSaved ? 'Mentve' : 'Mentés'}
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    {job.status === 'error' && (
                      <div style={{ marginTop: '0.5rem', color: 'var(--error)', fontSize: '0.85rem' }}>
                        {job.error}
                      </div>
                    )}

                    <AnimatePresence>
                      {job.showDetails && job.status === 'success' && job.result && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} style={{ overflow: 'hidden' }}>
                          <div style={{ marginTop: 'var(--spacing-md)', paddingTop: 'var(--spacing-md)', borderTop: '1px solid var(--bg-tertiary)' }}>
                            
                            {job.result.reactions && (
                              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(236, 72, 153, 0.1)', color: '#ec4899', padding: '0.25rem 0.75rem', borderRadius: '1rem', fontSize: '0.85rem', fontWeight: 600, marginBottom: 'var(--spacing-md)' }}>
                                <Heart size={14} fill="currentColor" /> {job.result.reactions}
                              </div>
                            )}

                            <div style={{ background: 'var(--bg-secondary)', padding: 'var(--spacing-md)', borderRadius: 'var(--radius-md)', marginBottom: 'var(--spacing-md)' }}>
                              <h3 style={{ fontSize: '0.9rem', color: 'var(--accent-secondary)', marginBottom: '0.5rem' }}>✨ AI Összefoglaló</h3>
                              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>{job.result.summary}</p>
                            </div>

                            {job.result.commentSentiment && (
                              <div style={{ background: '#ffffff', border: '1px solid var(--accent-tertiary)', padding: 'var(--spacing-md)', borderRadius: 'var(--radius-md)', marginBottom: 'var(--spacing-md)' }}>
                                <h3 style={{ fontSize: '0.9rem', color: 'var(--accent-primary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                  <MessageSquare size={14} /> Kommentek Elemzése
                                </h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>{job.result.commentSentiment}</p>
                              </div>
                            )}

                            {job.result.fullText && (
                              <div style={{ marginTop: 'var(--spacing-sm)', marginBottom: 'var(--spacing-md)' }}>
                                <h4 style={{ fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                                  Teljes Nyers Szöveg
                                </h4>
                                <div style={{ maxHeight: '200px', overflowY: 'auto', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)', padding: '0.5rem', border: '1px solid var(--bg-tertiary)' }}>
                                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', whiteSpace: 'pre-wrap', margin: 0, lineHeight: 1.5 }}>
                                    {job.result.fullText}
                                  </p>
                                </div>
                              </div>
                            )}
                            
                            <a href={job.result.originalUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--brand)', textDecoration: 'none', marginBottom: '0.5rem' }}>
                              <LinkIcon size={14} /> Eredeti bejegyzés megnyitása
                            </a>

                            {job.result.comments && job.result.comments.length > 0 && (
                              <div style={{ marginTop: 'var(--spacing-sm)' }}>
                                <h4 style={{ fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                  <MessageSquare size={14} /> Kommentek ({job.result.comments.length})
                                </h4>
                                <div style={{ maxHeight: '200px', overflowY: 'auto', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)', padding: '0.5rem' }}>
                                  {job.result.comments.map((c: any, i: number) => (
                                    <div key={i} style={{ padding: '0.5rem', borderBottom: i === job.result.comments.length - 1 ? 'none' : '1px solid var(--bg-tertiary)' }}>
                                      <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-primary)' }}>{c.author}</strong>
                                      <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{c.text}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '80vh', gap: '1rem' }}>
        <div className="animate-spin" style={{ color: 'var(--accent-primary)' }}>
          <Loader2 size={40} />
        </div>
        <h2 style={{ color: 'var(--text-primary)' }}>Betöltés...</h2>
      </div>
    }>
      <HomeContent />
    </Suspense>
  );
}
