'use client';

import { useState, useEffect } from 'react';
import { ArrowLeft, Search, Plus, Trash2, Play, Check, X, Loader2, UserPlus, Compass, AlertCircle, Calendar, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function NetworkPage() {
  const [keywords, setKeywords] = useState<any[]>([]);
  const [profiles, setProfiles] = useState<any[]>([]);
  const [newKeyword, setNewKeyword] = useState({ keyword: "", type: "PROFILE" });
  
  const [isSearching, setIsSearching] = useState(false);
  const [activeKwId, setActiveKwId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const kwRes = await fetch('/api/network/keywords');
      const kwData = await kwRes.json();
      if (Array.isArray(kwData)) setKeywords(kwData);
      
      const profRes = await fetch('/api/network/profiles');
      const profData = await profRes.json();
      if (Array.isArray(profData)) setProfiles(profData);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleAddKeyword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newKeyword.keyword) {
      alert("Kérlek adj meg egy kulcsszót!");
      return;
    }
    
    try {
      const res = await fetch('/api/network/keywords', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newKeyword)
      });
      const savedKw = await res.json();
      
      if (savedKw.data) {
        setKeywords([savedKw.data, ...keywords]);
        setNewKeyword({ keyword: "", type: "PROFILE" });
      } else {
        alert("Hiba a mentéskor: " + (savedKw.error || "Ismeretlen hiba"));
      }
    } catch (e) {
      alert("Hiba a hálózati kommunikáció során");
    }
  };

  const removeKeyword = async (id: string) => {
    // For simplicity, we just filter it out here since the DELETE endpoint might not be fully implemented yet,
    // but in a real scenario we'd call the DELETE API.
    // Assuming backend will ignore deleted keywords if we implement it.
    const updated = keywords.filter(k => k.id !== id);
    setKeywords(updated);
  };

  const startSingleHunt = async (kw: any) => {
    setActiveKwId(kw.id);
    setIsSearching(true);
    try {
      // Itt egy igazi rendszerben lenne egy endpoint, ami csak egy kulcsszóra keres rá.
      // Most a demó kedvéért a /api/network/scraper fut le mindenre (ami aktív), de jelezzük a UI-on.
      const res = await fetch('/api/network/scraper', { method: 'POST' });
      await res.json();
      // Frissítjük a profilokat a keresés után
      const profRes = await fetch('/api/network/profiles');
      const profData = await profRes.json();
      if (Array.isArray(profData)) setProfiles(profData);
    } catch (e) {
      console.error(e);
      alert("Hiba történt a keresés során.");
    } finally {
      setIsSearching(false);
      setActiveKwId(null);
    }
  };

  const startHuntAll = async () => {
    setIsSearching(true);
    try {
      const res = await fetch('/api/network/scraper', { method: 'POST' });
      await res.json();
      const profRes = await fetch('/api/network/profiles');
      const profData = await profRes.json();
      if (Array.isArray(profData)) setProfiles(profData);
    } catch (e) {
      console.error(e);
      alert("Hiba történt a keresés során.");
    } finally {
      setIsSearching(false);
    }
  };

  if (loading) return <div className="loading-spinner" />;

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <header className="glass-panel" style={{ padding: '1.5rem var(--spacing-lg)', marginBottom: 'var(--spacing-2xl)', display: 'flex', flexDirection: 'column', gap: '1.2rem', background: '#ffffff' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', borderBottom: '1px solid #e1e4e1', paddingBottom: '1rem' }}>
          <a href="/" className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ArrowLeft size={18} /> Vissza a főoldalra
          </a>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ padding: '2px', background: '#ffffff', borderRadius: '4px', display: 'flex', alignItems: 'center' }}>
              <img src="/logo.png" alt="Szerencsejáték Zrt. Logo" style={{ height: '36px', objectFit: 'contain' }} />
            </div>
            <div style={{ background: 'var(--bg-tertiary)', padding: '0.5rem 1rem', borderRadius: 'var(--radius-lg)', fontSize: '0.9rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Compass size={16} /> Iparági Hálózatépítő
            </div>
          </div>
        </div>

        <div>
          <h1 style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-sm)', color: 'var(--text-primary)' }}>
            Lopakodó Hálózatépítő
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', margin: 0 }}>
            Automatizált Google Dorking a LinkedIn profilok felkutatására.
          </p>
        </div>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
        {/* Bal Oszlop: Keresési Parancsok */}
        <section>
          <div className="glass-card" style={{ padding: 'var(--spacing-xl)', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Search size={20} color="var(--accent-primary)" /> Keresési Kulcsszavak
            </h2>

            <form onSubmit={handleAddKeyword} style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Célpont / Kulcsszó</label>
                  <input 
                    type="text" 
                    placeholder='pl. "szerencsejáték igazgató"' 
                    className="input-field"
                    value={newKeyword.keyword}
                    onChange={e => setNewKeyword({...newKeyword, keyword: e.target.value})}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Keresés Típusa</label>
                  <select
                    className="input-field"
                    value={newKeyword.type}
                    onChange={e => setNewKeyword({...newKeyword, type: e.target.value})}
                  >
                    <option value="PROFILE">Személy keresése (site:linkedin.com/in)</option>
                    <option value="POST">Posztok keresése (site:linkedin.com/posts)</option>
                  </select>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button type="submit" className="btn-primary" style={{ flex: 1, display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
                    <Plus size={18} /> Új Parancs Hozzáadása
                  </button>
                </div>
              </div>
            </form>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {keywords.map(kw => (
                <div key={kw.id} style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--bg-tertiary)', marginBottom: '0.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ fontWeight: 700, fontSize: '0.9rem', color: '#3b82f6' }}>{kw.keyword}</span>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button 
                        onClick={() => startSingleHunt(kw)} 
                        disabled={isSearching}
                        style={{ background: 'none', border: 'none', color: 'var(--success)', cursor: 'pointer', padding: '2px' }}
                        title="Keresés indítása"
                      >
                        {activeKwId === kw.id ? <Loader2 size={16} className="animate-spin" /> : <Play size={16} />}
                      </button>
                      <button onClick={() => removeKeyword(kw.id)} style={{ background: 'none', border: 'none', color: 'var(--warning)', cursor: 'pointer', padding: '2px' }} title="Törlés">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <code style={{ fontSize: '0.85rem', color: 'var(--text-primary)', display: 'block', wordBreak: 'break-all', opacity: 0.9, flex: 1 }}>
                      {kw.type === 'PROFILE' ? 'site:linkedin.com/in' : 'site:linkedin.com/posts'}
                    </code>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', background: 'var(--bg-secondary)', padding: '2px 6px', borderRadius: '4px', marginLeft: '6px' }}>{kw.type === 'PROFILE' ? 'SZEMÉLY' : 'POSZT'}</span>
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={startHuntAll}
              className="btn-primary" 
              disabled={isSearching || keywords.length === 0}
              style={{ width: '100%', marginTop: '2rem', padding: '1rem', background: 'var(--success)', display: 'flex', justifyContent: 'center', gap: '0.75rem', fontSize: '1.1rem', fontWeight: 700 }}
            >
              {isSearching && !activeKwId ? <Loader2 size={24} className="animate-spin" /> : <Play size={24} />}
              <span>{isSearching && !activeKwId ? 'Keresés Folyamatban...' : 'Összes Futtatása'}</span>
            </button>
          </div>
        </section>

        {/* Jobb Oszlop: Talált Linkek */}
        <section>
          <div className="glass-panel" style={{ height: '100%', padding: 'var(--spacing-xl)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.5rem', margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <UserPlus size={24} color="var(--success)" /> Talált Linkek
              </h2>
              <span style={{ background: 'var(--bg-tertiary)', padding: '0.2rem 0.8rem', borderRadius: 'var(--radius-full)', fontSize: '0.85rem' }}>
                {profiles.length} találat
              </span>
            </div>

            {profiles.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '5rem 0', color: 'var(--text-muted)' }}>
                <Search size={48} style={{ opacity: 0.2, marginBottom: '1rem' }} />
                <p>Nincs találat. Indítsd el a keresést a bal oldalon!</p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <AnimatePresence>
                  {profiles.map(link => (
                    <motion.div 
                      key={link.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="glass-card"
                      style={{ padding: '1rem', borderLeft: `4px solid var(--success)`, cursor: 'pointer' }}
                      onClick={() => window.open(link.url, '_blank')}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <span style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                              Kulcsszó: {link.dorkKeyword} | {link.source}
                            </span>
                            {link.publishedAt && (
                              <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                                <Calendar size={10} /> {new Date(link.publishedAt).toLocaleDateString('hu-HU', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                              </span>
                            )}
                          </div>
                          <h3 style={{ fontSize: '1.1rem', margin: '0.2rem 0', color: 'var(--text-primary)', lineHeight: 1.3 }}>{link.title}</h3>
                          <div style={{ fontSize: '0.8rem', color: 'var(--accent-primary)', opacity: 0.7, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '400px' }}>
                             {link.url}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>
        </section>
      </div>

      <div className="glass-panel" style={{ marginTop: '2rem', padding: '1.5rem', borderLeft: '4px solid var(--warning)' }}>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <AlertCircle color="var(--warning)" size={24} />
          <div>
            <h4 style={{ margin: 0, fontSize: '1.1rem' }}>Profi Tipp: Keresés fókuszálása</h4>
            <p style={{ margin: '0.2rem 0 0', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Ha posztokat keresel, használd a "Posztok keresése" beállítást. Így a <code>site:linkedin.com/posts</code> dork parancs fut le, ami rögtön az aktualitásokat tartalmazza!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
