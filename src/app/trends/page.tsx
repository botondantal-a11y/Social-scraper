"use client";

import React, { useState, useEffect } from "react";
import RadarChart from "../../components/RadarChart";
import { Upload, Loader2, X, Eye, EyeOff, Trash2, Lock, Users } from "lucide-react";
import OwnerBadge from "@/components/OwnerBadge";

export default function TrendsPage() {
  const [trends, setTrends] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [selectedTrend, setSelectedTrend] = useState<any>(null);

  // Szűrési állapotok
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [filterSignal, setFilterSignal] = useState("");
  const [sharerFilter, setSharerFilter] = useState("all");

  const [uploadProgress, setUploadProgress] = useState({ current: 0, total: 0 });

  useEffect(() => {
    fetchTrends();
  }, []);

  const fetchTrends = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/trends");
      const data = await res.json();
      if (data.trends) {
        setTrends(data.trends);
      }
    } catch (error) {
      console.error("Failed to load trends:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);
    setUploadProgress({ current: 0, total: files.length });

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const formData = new FormData();
      formData.append("file", file);

      try {
        const res = await fetch("/api/trends/upload", {
          method: "POST",
          body: formData,
        });
        const data = await res.json();
        if (!data.success) {
          console.error(`Hiba történt a(z) ${file.name} feltöltése során: ` + data.error);
        }
      } catch (error) {
        console.error("Upload error:", error);
      }
      setUploadProgress(prev => ({ ...prev, current: prev.current + 1 }));
    }
    
    await fetchTrends();
    setUploading(false);
    setUploadProgress({ current: 0, total: 0 });
    // Clear the input so the same files can be selected again if needed
    e.target.value = '';
  };

  const toggleRadar = async (id: string, currentState: boolean) => {
    setTrends(trends.map(t => t.id === id ? { ...t, isOnRadar: !currentState } : t));
    try {
      await fetch(`/api/trends/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isOnRadar: !currentState })
      });
    } catch (error) {
      setTrends(trends.map(t => t.id === id ? { ...t, isOnRadar: currentState } : t));
    }
  };

  const toggleVisibility = async (id: string, current: string) => {
    const next = current === 'shared' ? 'private' : 'shared';
    setTrends(trends.map(t => t.id === id ? { ...t, visibility: next } : t));
    try {
      const res = await fetch('/api/trends', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, visibility: next })
      });
      if (!res.ok) throw new Error();
    } catch {
      setTrends(trends.map(t => t.id === id ? { ...t, visibility: current } : t));
      alert("Csak a saját trendjeid láthatóságát módosíthatod.");
    }
  };

  const deleteTrend = async (id: string) => {
    if (!confirm("Biztosan törlöd ezt a trendet?")) return;
    setTrends(trends.filter(t => t.id !== id));
    if (selectedTrend?.id === id) setSelectedTrend(null);
    try {
      await fetch(`/api/trends/${id}`, { method: 'DELETE' });
    } catch (error) {
      console.error("Failed to delete trend:", error);
    }
  };

  // Kinyerjük a dinamikus kategóriákat és jelzéstípusokat a szűrőkhöz
  const categories = Array.from(new Set(trends.map(t => t.category).filter(Boolean)));
  const signals = Array.from(new Set(trends.map(t => t.signalType).filter(Boolean)));

  // Szűrési logika alkalmazása
  const filteredTrends = trends.filter(t => {
    const term = searchTerm.toLowerCase();
    const matchesSearch = term === "" || 
      (t.title?.toLowerCase().includes(term)) ||
      (t.description?.toLowerCase().includes(term)) ||
      (t.background?.toLowerCase().includes(term)) ||
      (t.impactDetail?.toLowerCase().includes(term)) ||
      (t.fullText?.toLowerCase().includes(term));
      
    const matchesCat = filterCategory ? t.category === filterCategory : true;
    const matchesSignal = filterSignal ? t.signalType === filterSignal : true;
    const matchesSharer = sharerFilter === "all" ? true : (t.visibility === "shared" && t.owner?.name === sharerFilter);
    return matchesSearch && matchesCat && matchesSignal && matchesSharer;
  });

  const uniqueSharers = Array.from(new Set(trends.filter((t: any) => t.visibility === "shared" && t.owner?.name).map((t: any) => t.owner.name))).sort() as string[];

  const radarTrends = trends.filter(t => t.isOnRadar);

  return (
    <div style={{ maxWidth: '1600px', margin: '0 auto', padding: '1.5rem var(--spacing-lg)' }}>
      <header className="glass-panel" style={{ padding: '1.5rem var(--spacing-lg)', marginBottom: 'var(--spacing-xl)', display: 'flex', flexDirection: 'column', gap: '1.5rem', background: '#ffffff' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div>
              <h1 style={{ margin: 0, fontSize: '1.8rem', color: 'var(--text-primary)' }}>Futures of Governance Radar</h1>
              <p style={{ margin: '0.5rem 0 0 0', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Állítsd össze a saját radarodat a kinyert trendekből.</p>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <label className="btn-secondary" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(59, 130, 246, 0.1)', border: '1px solid var(--accent-primary)', color: 'var(--accent-primary)' }}>
              {uploading ? <Loader2 size={18} className="animate-spin" /> : <Upload size={18} />}
              {uploading ? `Feldolgozás... (${uploadProgress.current}/${uploadProgress.total})` : "PDF Feltöltése"}
              <input type="file" accept="application/pdf" multiple className="hidden" onChange={handleFileUpload} disabled={uploading} style={{ display: 'none' }} />
            </label>
            <button onClick={fetchTrends} className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              Frissítés
            </button>
          </div>
        </div>
      </header>

      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '3rem' }}>
          <Loader2 size={32} className="animate-spin" color="var(--accent-primary)" />
        </div>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
          {/* Bal oldal: Radar Chart (kb. 60%) */}
          <div style={{ flex: '1 1 60%', display: 'flex', flexDirection: 'column' }}>
            <div className="glass-card" style={{ padding: 'var(--spacing-xl)', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '600px' }}>
              {radarTrends.length === 0 ? (
                <div style={{ textAlign: 'center', color: 'var(--text-muted)' }}>
                  <div style={{ width: '80px', height: '80px', margin: '0 auto 1rem', border: '2px dashed var(--bg-tertiary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.5 }}>
                    <EyeOff size={40} />
                  </div>
                  <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>A radar jelenleg üres.</p>
                  <p style={{ fontSize: '0.9rem' }}>Válassz ki trendeket a jobb oldali listából!</p>
                </div>
              ) : (
                <RadarChart trends={radarTrends} onSelectTrend={setSelectedTrend} />
              )}
            </div>
          </div>

          {/* Jobb oldal: Trend Könyvtár (kb. 40%) */}
          <div style={{ flex: '1 1 35%', display: 'flex', flexDirection: 'column', minWidth: '350px' }}>
            <div className="glass-card" style={{ padding: 'var(--spacing-lg)', flex: 1, display: 'flex', flexDirection: 'column', maxHeight: '800px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h2 style={{ fontSize: '1.2rem', margin: 0, color: 'var(--text-primary)' }}>Trend Könyvtár</h2>
                <span style={{ background: 'var(--bg-tertiary)', color: 'var(--text-secondary)', padding: '2px 8px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 600 }}>
                  {trends.length} db
                </span>
              </div>
              
              {/* Szűrők */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                <input 
                  type="text" 
                  placeholder="Keresés cím vagy tartalom alapján..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="input-field"
                />
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <select 
                    value={filterCategory} 
                    onChange={(e) => setFilterCategory(e.target.value)}
                    className="input-field"
                    style={{ flex: 1 }}
                  >
                    <option value="">Összes kategória</option>
                    {categories.map((c: any) => <option key={c} value={c}>{c}</option>)}
                  </select>
                  <select
                    value={filterSignal}
                    onChange={(e) => setFilterSignal(e.target.value)}
                    className="input-field"
                    style={{ flex: 1 }}
                  >
                    <option value="">Összes jelzés (Signal)</option>
                    {signals.map((s: any) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                {uniqueSharers.length > 0 && (
                  <select value={sharerFilter} onChange={(e) => setSharerFilter(e.target.value)} className="input-field" title="Szűrés megosztóra">
                    <option value="all">Bárki osztotta meg</option>
                    {uniqueSharers.map((s) => (<option key={s} value={s}>Megosztó: {s}</option>))}
                  </select>
                )}
              </div>

              <div style={{ flex: 1, overflowY: 'auto', paddingRight: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }} className="custom-scrollbar">
                {filteredTrends.length === 0 ? (
                  <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginTop: '2rem' }}>Nincs a szűrésnek megfelelő trend.</p>
                ) : (
                  filteredTrends.map(t => (
                    <div 
                      key={t.id} 
                      className="glass-panel"
                      style={{ 
                        padding: '1rem', 
                        cursor: 'pointer',
                        borderLeft: `4px solid ${t.isOnRadar ? 'var(--accent-primary)' : 'var(--bg-tertiary)'}`,
                        background: selectedTrend?.id === t.id ? 'var(--bg-secondary)' : 'var(--bg-primary)'
                      }}
                      onClick={() => setSelectedTrend(t)}
                    >
                      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        {t.imageUrl && (
                          <div style={{ width: '60px', height: '60px', borderRadius: '8px', overflow: 'hidden', flexShrink: 0, border: '1px solid var(--bg-tertiary)' }}>
                            <img src={t.imageUrl} alt={t.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                          </div>
                        )}
                        <div style={{ flex: 1, paddingRight: '0.5rem' }}>
                          <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.05rem', color: 'var(--text-primary)', lineHeight: 1.2 }}>{t.title}</h3>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                            <span style={{ background: 'var(--bg-tertiary)', color: 'var(--text-secondary)', padding: '2px 6px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 600 }}>
                              {t.horizon}
                            </span>
                            <span style={{ background: 'rgba(16, 185, 129, 0.1)', color: 'var(--success)', border: '1px solid rgba(16, 185, 129, 0.2)', padding: '2px 6px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 700 }}>
                              {t.signalType}
                            </span>
                          </div>
                          {t.visibility === 'shared' && (
                            <div style={{ marginTop: '0.4rem' }}>
                              <OwnerBadge visibility={t.visibility} owner={t.owner} sharedAt={t.sharedAt} fallbackDate={t.createdAt} />
                            </div>
                          )}
                        </div>
                        
                        <div style={{ display: 'flex', gap: '0.4rem' }}>
                          <button
                            onClick={(e) => { e.stopPropagation(); toggleVisibility(t.id, t.visibility); }}
                            className="btn-secondary"
                            style={{ padding: '0.4rem', borderRadius: '8px', background: t.visibility === 'shared' ? 'rgba(16, 185, 129, 0.1)' : 'var(--bg-tertiary)', color: t.visibility === 'shared' ? 'var(--success)' : 'var(--text-muted)' }}
                            title={t.visibility === 'shared' ? "Közös – kattints, hogy privát legyen" : "Privát – kattints a közösbe osztáshoz"}
                          >
                            {t.visibility === 'shared' ? <Users size={16} /> : <Lock size={16} />}
                          </button>
                          <button
                            onClick={(e) => { e.stopPropagation(); toggleRadar(t.id, t.isOnRadar); }}
                            className="btn-secondary"
                            style={{ padding: '0.4rem', borderRadius: '8px', background: t.isOnRadar ? 'rgba(16, 185, 129, 0.1)' : 'var(--bg-tertiary)', color: t.isOnRadar ? 'var(--success)' : 'var(--text-muted)' }}
                            title={t.isOnRadar ? "Levesz a radarról" : "Radarra tesz"}
                          >
                            {t.isOnRadar ? <Eye size={16} /> : <EyeOff size={16} />}
                          </button>
                          <button 
                            onClick={(e) => { e.stopPropagation(); deleteTrend(t.id); }}
                            className="btn-secondary"
                            style={{ padding: '0.4rem', borderRadius: '8px', background: 'rgba(239, 68, 68, 0.1)', color: 'var(--error)' }}
                            title="Törlés"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
          
          {/* Részletes Jelentés Modal */}
          {selectedTrend && (
            <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(15, 23, 42, 0.8)', backdropFilter: 'blur(8px)', zIndex: 1000000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }} onClick={() => setSelectedTrend(null)}>
              <div className="glass-card" style={{ width: '100%', maxWidth: '900px', maxHeight: '90vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-primary)', overflow: 'hidden' }} onClick={e => e.stopPropagation()}>
                
                {selectedTrend.imageUrl && (
                  <div style={{ width: '100%', height: '200px', overflow: 'hidden', position: 'relative' }}>
                    <img src={selectedTrend.imageUrl} alt={selectedTrend.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent, var(--bg-primary))' }}></div>
                  </div>
                )}
                
                <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--bg-tertiary)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: selectedTrend.imageUrl ? '-60px' : '0', position: 'relative', zIndex: 10 }}>
                  <div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <span style={{ background: 'rgba(59, 130, 246, 0.1)', color: 'var(--accent-primary)', padding: '2px 8px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', backdropFilter: 'blur(4px)' }}>
                        {selectedTrend.category}
                      </span>
                      <span style={{ background: 'var(--bg-tertiary)', color: 'var(--text-secondary)', padding: '2px 8px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 600, backdropFilter: 'blur(4px)' }}>
                        {selectedTrend.horizon}
                      </span>
                      <span style={{ background: 'rgba(16, 185, 129, 0.1)', color: 'var(--success)', border: '1px solid rgba(16, 185, 129, 0.2)', padding: '2px 8px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 700, backdropFilter: 'blur(4px)' }}>
                        Típus: {selectedTrend.signalType}
                      </span>
                    </div>
                    <h2 style={{ margin: 0, fontSize: '1.8rem', color: 'var(--text-primary)', lineHeight: 1.2, textShadow: selectedTrend.imageUrl ? '0 2px 4px rgba(0,0,0,0.8)' : 'none' }}>{selectedTrend.title}</h2>
                  </div>
                  <button onClick={() => setSelectedTrend(null)} className="btn-secondary" style={{ padding: '0.5rem', borderRadius: '50%', background: 'rgba(15, 23, 42, 0.5)', color: '#fff' }}>
                    <X size={20} />
                  </button>
                </div>
                
                <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }} className="custom-scrollbar">
                  {selectedTrend.description && (
                    <section style={{ background: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--bg-tertiary)' }}>
                      <h3 style={{ fontSize: '0.9rem', color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--bg-tertiary)' }}>Összefoglalás</h3>
                      <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, margin: 0, whiteSpace: 'pre-wrap' }}>
                        {selectedTrend.description}
                      </p>
                    </section>
                  )}

                  {selectedTrend.background && (
                    <section style={{ background: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--bg-tertiary)' }}>
                      <h3 style={{ fontSize: '0.9rem', color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--bg-tertiary)' }}>Háttér (Background)</h3>
                      <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, margin: 0, whiteSpace: 'pre-wrap' }}>
                        {selectedTrend.background}
                      </p>
                    </section>
                  )}

                  {selectedTrend.impactDetail && (
                    <section style={{ background: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--bg-tertiary)' }}>
                      <h3 style={{ fontSize: '0.9rem', color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--bg-tertiary)' }}>Hatások (Impacts)</h3>
                      <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, margin: 0, whiteSpace: 'pre-wrap' }}>
                        {selectedTrend.impactDetail}
                      </p>
                    </section>
                  )}

                  {selectedTrend.fullText && (
                    <section style={{ background: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--bg-tertiary)' }}>
                      <h3 style={{ fontSize: '0.9rem', color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--bg-tertiary)' }}>Eredeti PDF Szöveg</h3>
                      <div style={{ color: 'var(--text-muted)', lineHeight: 1.8, margin: 0, whiteSpace: 'pre-wrap', fontSize: '0.85rem', maxHeight: '400px', overflowY: 'auto' }} className="custom-scrollbar">
                        {selectedTrend.fullText}
                      </div>
                    </section>
                  )}
                </div>
                
                <div style={{ padding: '1.5rem', borderTop: '1px solid var(--bg-tertiary)', background: 'var(--bg-secondary)', display: 'flex', justifyContent: 'flex-end' }}>
                  <button
                    onClick={() => toggleRadar(selectedTrend.id, selectedTrend.isOnRadar)}
                    className="btn-secondary"
                    style={{ 
                      display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.8rem 1.5rem', fontWeight: 600,
                      background: selectedTrend.isOnRadar ? 'rgba(239, 68, 68, 0.1)' : 'rgba(16, 185, 129, 0.1)',
                      color: selectedTrend.isOnRadar ? 'var(--error)' : 'var(--success)',
                      border: `1px solid ${selectedTrend.isOnRadar ? 'rgba(239, 68, 68, 0.3)' : 'rgba(16, 185, 129, 0.3)'}`
                    }}
                  >
                    {selectedTrend.isOnRadar ? <EyeOff size={18} /> : <Eye size={18} />}
                    {selectedTrend.isOnRadar ? 'Levétel a Radarról' : 'Megjelenítés a Radaron'}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
