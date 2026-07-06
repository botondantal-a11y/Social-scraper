"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, PlayCircle, Loader2, Send, Save, Trash2, LayoutList, ChevronRight, Video, Download, Lock, Users, Share2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import OwnerBadge from "@/components/OwnerBadge";

export default function YoutubeSummarizer() {
  const [url, setUrl] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<any>(null);
  
  const [savedVideos, setSavedVideos] = useState<any[]>([]);
  const [loadingSaved, setLoadingSaved] = useState(true);
  
  const [activeTab, setActiveTab] = useState<'new' | 'saved'>('new');
  const [transcriptTab, setTranscriptTab] = useState<'hu' | 'original'>('hu');
  const [isPdfGenerating, setIsPdfGenerating] = useState(false);

  const handleDownloadPdf = async (includeTranscript: boolean = false) => {
    if (!result) return;
    setIsPdfGenerating(true);
    
    try {
      // Dinamikus importálás, hogy a Next.js SSR ne dobjon hibát
      const html2pdf = (await import('html2pdf.js')).default;
      
      const element = document.createElement('div');
      element.style.padding = '20px';
      element.style.fontFamily = 'Arial, sans-serif';
      element.style.lineHeight = '1.6';
      
      let htmlContent = '';
      if (result.imageUrl) {
        htmlContent += `<img src="${result.imageUrl}" style="width: 100%; max-height: 300px; object-fit: cover; border-radius: 8px; margin-bottom: 20px;" />`;
      }
      if (result.title) {
        htmlContent += `<h1 style="color: #333; margin-bottom: 20px; font-size: 24px;">${result.title}</h1>`;
      }
      
      const formattedSummary = result.summary.replace(/\n/g, '<br/>');
      htmlContent += `<div style="margin-bottom: 30px;">
        <h2 style="color: #dc2626; border-bottom: 1px solid #eee; padding-bottom: 10px;">AI Összefoglaló</h2>
        <div style="font-size: 14px; color: #444;">${formattedSummary}</div>
      </div>`;
      
      if (includeTranscript) {
        const transcriptText = transcriptTab === 'hu' ? result.transcript : (result.originalTranscript || result.transcript);
        const formattedTranscript = transcriptText.replace(/\n/g, '<br/>');
        htmlContent += `<div style="page-break-before: always;">
          <h2 style="color: #dc2626; border-bottom: 1px solid #eee; padding-bottom: 10px;">Teljes Transzkript (${transcriptTab === 'hu' ? 'Magyar' : 'Eredeti'})</h2>
          <div style="font-size: 12px; color: #666; white-space: pre-wrap;">${formattedTranscript}</div>
        </div>`;
      }
      
      element.innerHTML = htmlContent;
      
      const filenameBase = result.title ? result.title.substring(0, 30).replace(/[^a-z0-9]/gi, '_').toLowerCase() : 'youtube_summary';
      const filename = includeTranscript ? `${filenameBase}_full.pdf` : `${filenameBase}_summary.pdf`;
      
      const opt = {
        margin:       15,
        filename:     filename,
        image:        { type: 'jpeg' as const, quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true },
        jsPDF:        { unit: 'mm' as const, format: 'a4' as const, orientation: 'portrait' as const }
      };
      
      await html2pdf().set(opt).from(element).save();
      
    } catch (error) {
      console.error('PDF generálási hiba:', error);
      alert('Hiba történt a PDF generálása során.');
    } finally {
      setIsPdfGenerating(false);
    }
  };

  const [scopeFilter, setScopeFilter] = useState<"all" | "mine" | "shared">("all");
  const [sharerFilter, setSharerFilter] = useState("all");
  const [myUserId, setMyUserId] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/auth/session')
      .then(r => r.json())
      .then(s => setMyUserId(s?.user?.id || null))
      .catch(() => null);
  }, []);

  useEffect(() => {
    fetchSavedVideos(scopeFilter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scopeFilter]);

  const fetchSavedVideos = async (scope: string = "all") => {
    try {
      const res = await fetch(scope === "all" ? '/api/youtube' : `/api/youtube?scope=${scope}`);
      if (res.ok) {
        const data = await res.json();
        setSavedVideos(data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingSaved(false);
    }
  };

  const toggleVisibility = async (id: string, current: string) => {
    const next = current === 'shared' ? 'private' : 'shared';
    try {
      const res = await fetch('/api/youtube', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, visibility: next })
      });
      if (res.ok) {
        setSavedVideos(prev => prev.map(v => v.id === id ? { ...v, visibility: next } : v));
      } else {
        const data = await res.json().catch(() => null);
        alert(data?.error || "Sikertelen módosítás.");
      }
    } catch {
      alert("Hiba történt a láthatóság módosításakor.");
    }
  };

  const handleSummarize = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;
    
    setIsProcessing(true);
    setResult(null);
    
    try {
      const res = await fetch('/api/youtube/summarize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url })
      });
      
      const data = await res.json();
      if (res.ok) {
        setResult(data);
      } else {
        alert(data.error || "Hiba történt a feldolgozás során");
      }
    } catch (e) {
      alert("Hálózati hiba történt");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleSave = async () => {
    if (!result) return;
    
    try {
      const title = prompt("Milyen néven mentsük el ezt a videót?", result.title || "Új videó összefoglaló");
      if (!title) return;

      const res = await fetch('/api/youtube', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          videoId: result.videoId,
          url: result.url,
          title,
          imageUrl: result.imageUrl,
          transcript: result.transcript,
          originalTranscript: result.originalTranscript,
          summary: result.summary
        })
      });
      
      if (res.ok) {
        alert("Sikeresen mentve a Mentett Videók közé!");
        fetchSavedVideos();
      }
    } catch (e) {
      alert("Hiba a mentés során");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Biztosan törlöd ezt a mentett videót?")) return;
    try {
      const res = await fetch(`/api/youtube?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        fetchSavedVideos();
      }
    } catch (e) {
      console.error(e);
    }
  };

  const viewSaved = (video: any) => {
    setResult(video);
    setActiveTab('new');
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', paddingBottom: '3rem' }}>
      <header className="glass-panel" style={{ padding: '1.5rem var(--spacing-lg)', marginBottom: 'var(--spacing-2xl)', display: 'flex', flexDirection: 'column', gap: '1.2rem', background: '#ffffff' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', borderBottom: '1px solid #e1e4e1', paddingBottom: '1rem' }}>
          <a href="/" className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ArrowLeft size={18} /> Vissza a főoldalra
          </a>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ background: '#fef2f2', padding: '0.5rem 1rem', borderRadius: 'var(--radius-lg)', fontSize: '0.9rem', color: '#dc2626', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold' }}>
              <PlayCircle size={16} /> YOUTUBE ÖSSZEFOGLALÓ
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <button 
            onClick={() => setActiveTab('new')} 
            style={{ padding: '0.75rem 1.5rem', background: activeTab === 'new' ? '#dc2626' : 'var(--bg-tertiary)', color: activeTab === 'new' ? 'white' : 'var(--text-primary)', border: 'none', borderRadius: '4px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}
          >
            <Video size={18} /> Új Videó
          </button>
          <button 
            onClick={() => setActiveTab('saved')} 
            style={{ padding: '0.75rem 1.5rem', background: activeTab === 'saved' ? '#dc2626' : 'var(--bg-tertiary)', color: activeTab === 'saved' ? 'white' : 'var(--text-primary)', border: 'none', borderRadius: '4px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}
          >
            <Save size={18} /> Mentett Videók ({savedVideos.length})
          </button>
        </div>
      </header>

      {activeTab === 'new' && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <div className="glass-panel" style={{ padding: '2rem', marginBottom: '2rem', background: 'white' }}>
            <h2 style={{ margin: '0 0 1rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <PlayCircle color="#dc2626" /> Link Megadása
            </h2>
            <form onSubmit={handleSummarize} style={{ display: 'flex', gap: '1rem' }}>
              <input 
                type="url" 
                placeholder="Pl. https://www.youtube.com/watch?v=..." 
                value={url} 
                onChange={(e) => setUrl(e.target.value)}
                required
                style={{ flex: 1, padding: '1rem', border: '1px solid #ccc', borderRadius: '4px', fontSize: '1rem' }}
              />
              <button 
                type="submit" 
                disabled={isProcessing}
                style={{ background: '#dc2626', color: 'white', border: 'none', borderRadius: '4px', padding: '0 2rem', fontWeight: 'bold', fontSize: '1rem', cursor: isProcessing ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                {isProcessing ? <><Loader2 size={18} className="animate-spin" /> Elemzés...</> : <><Send size={18} /> Generálás</>}
              </button>
            </form>
          </div>

          {result && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              <div className="glass-panel" style={{ padding: '2rem', background: 'white', display: 'flex', flexDirection: 'column' }}>
                {result.imageUrl && (
                  <img src={result.imageUrl} alt="Video thumbnail" style={{ width: '100%', height: '240px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1rem' }} />
                )}
                {result.title && (
                  <h3 style={{ margin: '0 0 1rem 0', color: 'var(--text-primary)', fontSize: '1.2rem', lineHeight: '1.4' }}>{result.title}</h3>
                )}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid #eee', paddingBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
                  <h3 style={{ margin: 0, color: 'var(--text-primary)' }}>Összefoglaló</h3>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <button 
                      onClick={() => handleDownloadPdf(false)} 
                      disabled={isPdfGenerating}
                      style={{ background: 'white', color: '#dc2626', border: '1px solid #dc2626', padding: '0.5rem 1rem', borderRadius: '4px', cursor: isPdfGenerating ? 'wait' : 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold' }}
                    >
                      {isPdfGenerating ? <Loader2 size={16} className="animate-spin" /> : <Download size={16} />} 
                      PDF (Rövid)
                    </button>
                    <button 
                      onClick={() => handleDownloadPdf(true)} 
                      disabled={isPdfGenerating}
                      style={{ background: 'white', color: '#10b981', border: '1px solid #10b981', padding: '0.5rem 1rem', borderRadius: '4px', cursor: isPdfGenerating ? 'wait' : 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold' }}
                    >
                      {isPdfGenerating ? <Loader2 size={16} className="animate-spin" /> : <Download size={16} />} 
                      PDF (Teljes)
                    </button>
                    <button onClick={handleSave} style={{ background: 'var(--accent-primary)', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold' }}>
                      <Save size={16} /> Mentés Adatbázisba
                    </button>
                  </div>
                </div>
                <div style={{ whiteSpace: 'pre-wrap', lineHeight: 1.6, fontSize: '0.95rem' }} dangerouslySetInnerHTML={{ __html: result.summary.replace(/\\n/g, '<br/>') }} />
              </div>

              <div className="glass-panel" style={{ padding: '2rem', background: 'var(--bg-tertiary)', border: '1px solid #ddd', maxHeight: '800px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <h3 style={{ margin: 0, color: 'var(--text-muted)' }}>Transzkript</h3>
                  {result.originalTranscript && (
                    <div style={{ display: 'flex', background: '#eee', borderRadius: '4px', padding: '0.25rem' }}>
                      <button onClick={() => setTranscriptTab('hu')} style={{ padding: '0.25rem 0.75rem', border: 'none', background: transcriptTab === 'hu' ? 'white' : 'transparent', borderRadius: '2px', fontWeight: transcriptTab === 'hu' ? 'bold' : 'normal', cursor: 'pointer', boxShadow: transcriptTab === 'hu' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none', color: '#333' }}>Magyar</button>
                      <button onClick={() => setTranscriptTab('original')} style={{ padding: '0.25rem 0.75rem', border: 'none', background: transcriptTab === 'original' ? 'white' : 'transparent', borderRadius: '2px', fontWeight: transcriptTab === 'original' ? 'bold' : 'normal', cursor: 'pointer', boxShadow: transcriptTab === 'original' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none', color: '#333' }}>Eredeti</button>
                    </div>
                  )}
                </div>
                <div style={{ whiteSpace: 'pre-wrap', lineHeight: 1.6, fontSize: '0.9rem', color: '#555', overflowY: 'auto', flex: 1 }}>
                  {transcriptTab === 'hu' ? result.transcript : (result.originalTranscript || result.transcript)}
                </div>
              </div>
            </div>
          )}
        </motion.div>
      )}

      {activeTab === 'saved' && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="glass-panel" style={{ padding: '2rem', background: 'white' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <h2 style={{ margin: 0 }}>Mentett Videók</h2>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
              {(() => {
                const sharers = Array.from(new Set(savedVideos.filter(v => v.visibility === 'shared' && v.owner?.name).map(v => v.owner.name))).sort() as string[];
                return sharers.length > 0 ? (
                  <select value={sharerFilter} onChange={(e) => setSharerFilter(e.target.value)} className="input-field" style={{ width: 'auto', padding: '0.35rem 0.7rem', fontSize: '0.8rem' }} title="Szűrés megosztóra">
                    <option value="all">Bárki osztotta meg</option>
                    {sharers.map(s => (<option key={s} value={s}>Megosztó: {s}</option>))}
                  </select>
                ) : null;
              })()}
              <div style={{ display: 'flex', gap: '0.25rem', background: 'var(--bg-tertiary)', borderRadius: '999px', padding: '3px' }}>
                {([["all", "Minden"], ["mine", "Saját profilom"], ["shared", "Közös"]] as const).map(([id, label]) => (
                  <button key={id} onClick={() => setScopeFilter(id)} style={{ padding: '0.4rem 0.9rem', borderRadius: '999px', border: 'none', cursor: 'pointer', fontSize: '0.8rem', fontWeight: 600, background: scopeFilter === id ? '#dc2626' : 'transparent', color: scopeFilter === id ? 'white' : 'var(--text-secondary)' }}>
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {loadingSaved ? (
            <div style={{ textAlign: 'center', padding: '2rem' }}><Loader2 className="animate-spin" /></div>
          ) : savedVideos.length === 0 ? (
            <div style={{ textAlign: 'center', color: '#888', padding: '3rem' }}>Még nincsenek mentett videóid.</div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {savedVideos.filter(v => sharerFilter === "all" ? true : (v.visibility === 'shared' && v.owner?.name === sharerFilter)).map(video => (
                <div key={video.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', border: '1px solid #eee', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    {video.imageUrl && (
                      <img src={video.imageUrl} alt="thumbnail" style={{ width: '120px', height: '68px', objectFit: 'cover', borderRadius: '4px' }} />
                    )}
                    <div>
                      <h3 style={{ margin: '0 0 0.25rem 0' }}>{video.title}</h3>
                      <div style={{ fontSize: '0.8rem', color: '#888', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <span>Dátum: {new Date(video.createdAt).toLocaleDateString('hu-HU')}</span>
                        <a href={video.url} target="_blank" rel="noopener noreferrer" style={{ color: '#dc2626' }}>Eredeti videó</a>
                        <OwnerBadge visibility={video.visibility} owner={video.owner} sharedAt={video.sharedAt} fallbackDate={video.createdAt} showPrivate />
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    {myUserId && video.ownerId === myUserId && (
                      <button onClick={() => toggleVisibility(video.id, video.visibility)} title={video.visibility === 'shared' ? 'Visszavonás priváttá' : 'Feltöltés a közösbe'} style={{ padding: '0.5rem 1rem', background: 'white', color: '#10b981', border: '1px solid #10b981', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 600 }}>
                        <Share2 size={16} /> {video.visibility === 'shared' ? 'Privát' : 'Közösbe'}
                      </button>
                    )}
                    <button onClick={() => viewSaved(video)} style={{ padding: '0.5rem 1rem', background: 'var(--bg-tertiary)', border: '1px solid #ccc', borderRadius: '4px', cursor: 'pointer' }}>
                      Megtekintés
                    </button>
                    <button onClick={() => handleDelete(video.id)} style={{ padding: '0.5rem', background: '#fee2e2', color: '#dc2626', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
}
