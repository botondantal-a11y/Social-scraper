"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, Search, Plus, Trash2, Play, Globe, Check, X, Loader2, Link as LinkIcon, Compass, AlertCircle, Zap, Pencil, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function DiscoveryLab() {
  const [dorks, setDorks] = useState<any[]>([]);
  const [discoveredLinks, setDiscoveredLinks] = useState<any[]>([]);
  const [newDork, setNewDork] = useState({ label: "", query: "", keyword: "", startDate: "", endDate: "", maxResults: 30, language: "HU" });
  const [isSearching, setIsSearching] = useState(false);
  const [activeDorkId, setActiveDorkId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    fetchDorks();
  }, []);

  const fetchDorks = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/discovery/dorks');
      const data = await res.json();
      setDorks(Array.isArray(data) ? data : []);
    } catch (e) {
      console.error(e);
      setDorks([]);
    } finally {
      setLoading(false);
    }
  };

  const generateQuery = (keyword: string, start: string, end: string, manualQuery: string) => {
    if (!keyword && !manualQuery) return "";
    
    // If user provided a manual query but no keyword, use that
    if (!keyword && manualQuery) return manualQuery;
    
    let q = keyword;
    if (start) q += ` after:${start}`;
    if (end) q += ` before:${end}`;
    return q;
  };

  const handleAddDork = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const finalQuery = generateQuery(newDork.keyword, newDork.startDate, newDork.endDate, newDork.query);
    if (!newDork.label || !finalQuery) {
      alert("Kérlek adj meg egy címkét és egy kulcsszót vagy lekérdezést!");
      return;
    }
    
    const payload = { ...newDork, query: finalQuery };
    
    try {
      const url = '/api/discovery/dorks';
      const method = isEditing ? 'PUT' : 'POST';
      const body = isEditing ? { ...payload, id: editingId } : payload;

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      const savedDork = await res.json();
      
      if (savedDork.id || savedDork.success) {
        if (isEditing) {
          setDorks(dorks.map(d => d.id === editingId ? { ...d, ...payload, id: editingId } : d));
        } else {
          setDorks([savedDork, ...dorks]);
        }
        
        setNewDork({ label: "", query: "", keyword: "", startDate: "", endDate: "", maxResults: 30, language: "HU" });
        setIsEditing(false);
        setEditingId(null);
      } else {
        alert("Hiba a mentéskor: " + (savedDork.error || "Ismeretlen hiba"));
      }
    } catch (e) {
      alert("Hiba a hálózati kommunikáció során");
    }
  };

  const editDork = (dork: any) => {
    setNewDork({
      label: dork.label,
      query: dork.query || "",
      keyword: dork.keyword || "",
      startDate: dork.startDate || "",
      endDate: dork.endDate || "",
      maxResults: dork.maxResults || 30,
      language: dork.language || "HU"
    });
    setIsEditing(true);
    setEditingId(dork.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cancelEdit = () => {
    setNewDork({ label: "", query: "", keyword: "", startDate: "", endDate: "", maxResults: 30, language: "HU" });
    setIsEditing(false);
    setEditingId(null);
  };

  const removeDork = async (id: string) => {
    try {
      await fetch('/api/discovery/dorks', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
      });
      const updatedDorks = dorks.filter(d => d.id !== id);
      setDorks(updatedDorks);
      // Frissítjük a találatokat is, hogy eltűnjenek a törölt dorkhoz tartozók
      setDiscoveredLinks(prev => prev.filter(l => l.source !== dorks.find(d => d.id === id)?.label));
    } catch (e) {
      alert("Hiba a törléskor");
    }
  };

  const [selectedLinks, setSelectedLinks] = useState<Set<string>>(new Set());

  const performHunt = async (targetDorks: any[]) => {
    if (targetDorks.length === 0) return;
    setIsSearching(true);
    try {
      const response = await fetch('/api/discovery/hunt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ dorks: targetDorks })
      });
      const data = await response.json();
      if (data.links) {
        // Hozzáadjuk az újakat a meglévőkhöz, vagy lecseréljük? Lecseréljük a frissre.
        setDiscoveredLinks(data.links);
        setSelectedLinks(new Set(data.links.map((l: any) => l.id)));
      } else if (data.error) {
        alert("Hiba: " + data.error);
      }
    } catch (e) {
      console.error(e);
      alert("Hiba történt a vadászat során.");
    } finally {
      setIsSearching(false);
      setActiveDorkId(null);
    }
  };

  const startSingleHunt = (dork: any) => {
    setActiveDorkId(dork.id);
    performHunt([dork]);
  };

  const startHunt = () => performHunt(dorks);

  const toggleSelect = (id: string) => {
    const newSelected = new Set(selectedLinks);
    if (newSelected.has(id)) newSelected.delete(id);
    else newSelected.add(id);
    setSelectedLinks(newSelected);
  };

  const sendToScraper = () => {
    const data = discoveredLinks
      .filter(l => selectedLinks.has(l.id))
      .map(l => ({
        url: l.url,
        keyword: l.dorkKeyword,
        dorkLabel: l.dorkLabel
      }));
    
    if (data.length === 0) return;
    
    // Use localStorage to avoid "Request Header Fields Too Large" (HTTP 431)
    localStorage.setItem('pendingScrapeUrls', JSON.stringify(data));
    window.location.href = `/?autoScrape=local`;
  };

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
              <Compass size={16} /> FELFEDEZŐ MÓD AKTÍV
            </div>
          </div>
        </div>

        <div>
          <h1 style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-sm)', color: 'var(--text-primary)' }}>
            Felfedező Labor
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', margin: 0 }}>
            Automatizált Google Dorks vadászat és linkgyűjtés a Szerencsejáték Zrt. számára.
          </p>
        </div>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
        {/* Left Column: Dork Management */}
        <section>
          <div className="glass-card" style={{ padding: 'var(--spacing-xl)', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Search size={20} color="var(--accent-primary)" /> Keresési Parancsok (Dorks)
            </h2>

            <form onSubmit={handleAddDork} style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Megnevezés</label>
                  <input 
                    type="text" 
                    placeholder="pl. Versenytársak elemzése" 
                    className="input-field"
                    value={newDork.label}
                    onChange={e => setNewDork({...newDork, label: e.target.value})}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Kulcsszó</label>
                  <input 
                    type="text" 
                    placeholder='pl. "Szerencsejáték Zrt."' 
                    className="input-field"
                    value={newDork.keyword}
                    onChange={e => setNewDork({...newDork, keyword: e.target.value})}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Calendar size={14} /> Kezdő dátum
                    </label>
                    <input 
                      type="date" 
                      className="input-field"
                      value={newDork.startDate}
                      onChange={e => setNewDork({...newDork, startDate: e.target.value})}
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Calendar size={14} /> Befejező dátum
                    </label>
                    <input 
                      type="date" 
                      className="input-field"
                      value={newDork.endDate}
                      onChange={e => setNewDork({...newDork, endDate: e.target.value})}
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Találatok száma (parancsonként)</label>
                  <input 
                    type="number" 
                    min="1"
                    max="100"
                    className="input-field"
                    value={newDork.maxResults}
                    onChange={e => setNewDork({...newDork, maxResults: parseInt(e.target.value) || 30})}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Célnyelv és Régió</label>
                  <select
                    className="input-field"
                    value={newDork.language || "HU"}
                    onChange={e => setNewDork({...newDork, language: e.target.value})}
                  >
                    <option value="HU">Kizárólag Magyar nyelvű (HU)</option>
                    <option value="GLOBAL">Globális keresés (Minden nyelv)</option>
                  </select>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Egyedi lekérdezés (opcionális)</label>
                  <textarea 
                    placeholder='pl. site:telex.hu "Szerencsejáték"' 
                    className="input-field"
                    style={{ minHeight: '60px' }}
                    value={newDork.query}
                    onChange={e => setNewDork({...newDork, query: e.target.value})}
                  />
                </div>

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button type="submit" className="btn-primary" style={{ flex: 1, display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
                    {isEditing ? <Check size={18} /> : <Plus size={18} />}
                    {isEditing ? 'Módosítás Mentése' : 'Új Parancs Hozzáadása'}
                  </button>
                  {isEditing && (
                    <button type="button" onClick={cancelEdit} className="btn-secondary" style={{ padding: '0.75rem' }}>
                      <X size={18} />
                    </button>
                  )}
                </div>
              </div>
            </form>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {dorks.map(dork => (
                <div key={dork.id} style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--bg-tertiary)', marginBottom: '0.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ fontWeight: 700, fontSize: '0.9rem', color: '#3b82f6' }}>{dork.label} <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', background: 'var(--bg-secondary)', padding: '2px 6px', borderRadius: '4px', marginLeft: '6px' }}>{dork.language === 'GLOBAL' ? 'GL' : 'HU'}</span></span>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button 
                        onClick={() => startSingleHunt(dork)} 
                        disabled={isSearching}
                        style={{ background: 'none', border: 'none', color: 'var(--success)', cursor: 'pointer', padding: '2px' }}
                        title="Indítás"
                      >
                        {activeDorkId === dork.id ? <Loader2 size={16} className="animate-spin" /> : <Play size={16} />}
                      </button>
                      <button onClick={() => editDork(dork)} style={{ background: 'none', border: 'none', color: 'var(--accent-primary)', cursor: 'pointer', padding: '2px' }} title="Szerkesztés">
                        <Pencil size={16} />
                      </button>
                      <button onClick={() => removeDork(dork.id)} style={{ background: 'none', border: 'none', color: 'var(--warning)', cursor: 'pointer', padding: '2px' }} title="Törlés">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <code style={{ fontSize: '0.85rem', color: 'var(--text-primary)', display: 'block', wordBreak: 'break-all', opacity: 0.9, flex: 1 }}>{dork.query}</code>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginLeft: '1rem' }}>limit: {dork.maxResults || 30}</span>
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={startHunt}
              className="btn-primary" 
              disabled={isSearching}
              style={{ width: '100%', marginTop: '2rem', padding: '1rem', background: 'var(--success)', display: 'flex', justifyContent: 'center', gap: '0.75rem', fontSize: '1.1rem', fontWeight: 700 }}
            >
              {isSearching ? <Loader2 size={24} className="animate-spin" /> : <Play size={24} />}
              <span>{isSearching ? 'Vadászat Folyamatban...' : 'Indítás Most'}</span>
            </button>
          </div>
        </section>

        {/* Right Column: Discovered Links */}
        <section>
          <div className="glass-panel" style={{ height: '100%', padding: 'var(--spacing-xl)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.5rem', margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <LinkIcon size={24} color="var(--success)" /> Talált Linkek
              </h2>
              <span style={{ background: 'var(--bg-tertiary)', padding: '0.2rem 0.8rem', borderRadius: 'var(--radius-full)', fontSize: '0.85rem' }}>
                {discoveredLinks.length} új találat
              </span>
            </div>

            {discoveredLinks.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '5rem 0', color: 'var(--text-muted)' }}>
                <Search size={48} style={{ opacity: 0.2, marginBottom: '1rem' }} />
                <p>Nincs új találat. Indíts el egy vadászatot!</p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
                   <button 
                    onClick={sendToScraper}
                    className="btn-primary" 
                    style={{ background: 'var(--accent-primary)', padding: '0.75rem 1.5rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem', boxShadow: 'var(--shadow-glow-accent)' }}
                   >
                     <Zap size={18} /> {selectedLinks.size} Link Átküldése Elemzésre
                   </button>
                </div>

                <AnimatePresence>
                  {discoveredLinks.map(link => (
                    <motion.div 
                      key={link.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="glass-card"
                      style={{ padding: '1rem', borderLeft: `4px solid ${selectedLinks.has(link.id) ? 'var(--success)' : 'var(--bg-tertiary)'}`, cursor: 'pointer' }}
                      onClick={() => toggleSelect(link.id)}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                        <div style={{ 
                          width: '24px', 
                          height: '24px', 
                          borderRadius: '4px', 
                          border: `2px solid ${selectedLinks.has(link.id) ? 'var(--success)' : 'var(--text-muted)'}`,
                          background: selectedLinks.has(link.id) ? 'var(--success)' : 'transparent',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}>
                          {selectedLinks.has(link.id) && <Check size={16} color="white" />}
                        </div>

                        <div style={{ flex: 1 }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <span style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                              Forrás: {link.source}
                            </span>
                            {link.publishedAt && (
                              <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                                <Calendar size={10} /> {new Date(link.publishedAt).toLocaleDateString('hu-HU', { year: 'numeric', month: 'short', day: 'numeric' })}
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
            <h4 style={{ margin: 0, fontSize: '1.1rem' }}>Profi Tipp: Az automatizált vadászathoz</h4>
            <p style={{ margin: '0.2rem 0 0', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Használj specifikus domaineket (`site:`) és időkorlátot (`after:2026-05-01`), hogy a robot csak a legfrissebb és legrelevánsabb szakmai híreket találja meg számodra. Fontos: az `after:` után ne használj idézőjelet!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ExternalLink({ size, style }: { size?: number, style?: any }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size || 18} 
      height={size || 18} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      style={style}
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  );
}
