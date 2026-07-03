"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, Target, Plus, Trash2, Zap, ExternalLink, Compass, Send, CheckSquare, Loader2, Calendar, Filter, Clock, Edit2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function TargetMonitor() {
  const [targets, setTargets] = useState<any[]>([]);
  const [links, setLinks] = useState<any[]>([]);
  
  const [newUrl, setNewUrl] = useState("");
  const [newName, setNewName] = useState("");
  const [newSelector, setNewSelector] = useState("");
  const [newUrlFilter, setNewUrlFilter] = useState("");
  const [newMinDate, setNewMinDate] = useState("");
  const [newMaxDate, setNewMaxDate] = useState("");
  
  const [loadingTargets, setLoadingTargets] = useState(true);
  const [loadingLinks, setLoadingLinks] = useState(true);
  const [isScanning, setIsScanning] = useState(false);
  
  const [selectedLinks, setSelectedLinks] = useState<string[]>([]);
  
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  
  useEffect(() => {
    fetchTargets();
    fetchLinks();
  }, []);

  const fetchTargets = async () => {
    try {
      const res = await fetch('/api/monitor');
      const data = await res.json();
      setTargets(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingTargets(false);
    }
  };

  const fetchLinks = async () => {
    try {
      const res = await fetch('/api/monitor/links');
      const data = await res.json();
      setLinks(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingLinks(false);
    }
  };

  const startEdit = (target: any) => {
    setNewUrl(target.url);
    setNewName(target.name);
    setNewSelector(target.selector || "");
    setNewUrlFilter(target.urlFilter || "");
    setNewMinDate(target.minDate ? new Date(target.minDate).toISOString().split('T')[0] : "");
    setNewMaxDate(target.maxDate ? new Date(target.maxDate).toISOString().split('T')[0] : "");
    setEditingId(target.id);
    setIsEditing(true);
  };

  const cancelEdit = () => {
    setNewUrl("");
    setNewName("");
    setNewSelector("");
    setNewUrlFilter("");
    setNewMinDate("");
    setNewMaxDate("");
    setEditingId(null);
    setIsEditing(false);
  };

  const handleAddTarget = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUrl || !newName) return;
    
    try {
      const payload = {
        url: newUrl, 
        name: newName, 
        selector: newSelector,
        urlFilter: newUrlFilter,
        minDate: newMinDate,
        maxDate: newMaxDate,
        ...(isEditing && { id: editingId })
      };

      const res = await fetch('/api/monitor', {
        method: isEditing ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      if (res.ok) {
        cancelEdit();
        fetchTargets();
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleDeleteTarget = async (id: string) => {
    try {
      const res = await fetch(`/api/monitor?id=${id}`, { method: 'DELETE' });
      if (res.ok) fetchTargets();
    } catch (e) {
      console.error(e);
    }
  };

  const handleScanTarget = async (id?: string) => {
    setIsScanning(true);
    try {
      const res = await fetch('/api/monitor/scan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ targetId: id })
      });
      const data = await res.json();
      if (res.ok) {
        alert(`Sikeres keresés! ${data.totalFound} linket találtunk az oldalon, ebből ${data.newLinksCount} db ment át a szűrőkön és teljesen új.`);
        fetchTargets();
        fetchLinks();
      } else {
        alert("Hiba: " + data.error);
      }
    } catch (e) {
      console.error(e);
      alert("Hiba a futtatáskor.");
    } finally {
      setIsScanning(false);
    }
  };

  const toggleSelectLink = (id: string) => {
    setSelectedLinks(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedLinks.length === links.length && links.length > 0) {
      setSelectedLinks([]);
    } else {
      setSelectedLinks(links.map(l => l.id));
    }
  };

  const sendToScraper = async () => {
    if (selectedLinks.length === 0) return;
    
    const selectedData = links.filter(l => selectedLinks.includes(l.id));
    
    const data = selectedData.map(l => ({
      url: l.url,
      keyword: l.dorkKeyword,
      dorkLabel: l.dorkLabel
    }));
    
    if (data.length === 0) return;
    
    // Use localStorage to avoid HTTP 431, then redirect to home for "Omniscrape"
    localStorage.setItem('pendingScrapeUrls', JSON.stringify(data));
    
    // Töröljük a DB-ből a kijelölteket, mivel átkerültek az omniscrape-be
    try {
      await fetch('/api/monitor/links', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ids: selectedLinks })
      });
    } catch (e) {
      console.error("Nem sikerült törölni az átküldött linkeket a DB-ből", e);
    }
    
    window.location.href = `/?autoScrape=local`;
  };

  const handleDeleteSelectedLinks = async () => {
    if (selectedLinks.length === 0) return;
    if (!confirm(`Biztosan törölni akarsz ${selectedLinks.length} linket?`)) return;
    
    try {
      const res = await fetch('/api/monitor/links', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ids: selectedLinks })
      });
      if (res.ok) {
        setSelectedLinks([]);
        fetchLinks();
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleDeleteAllLinks = async () => {
    if (links.length === 0) return;
    if (!confirm(`Biztosan törölni akarod az ÖSSZES (${links.length}) linket? Ezt nem lehet visszavonni.`)) return;
    
    try {
      const res = await fetch('/api/monitor/links', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ deleteAll: true })
      });
      if (res.ok) {
        setSelectedLinks([]);
        fetchLinks();
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', flexDirection: 'column', height: '100vh', padding: '0 0 var(--spacing-xl) 0' }}>
      
      <header className="glass-panel" style={{ padding: '1rem var(--spacing-xl)', marginBottom: 'var(--spacing-xl)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', background: '#ffffff', borderRadius: '0 0 var(--radius-xl) var(--radius-xl)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a href="/" className="btn-secondary" style={{ padding: '0.5rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-tertiary)', color: 'var(--text-primary)' }}>
            <ArrowLeft size={20} />
          </a>
          <h1 style={{ margin: 0, fontSize: '1.8rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-primary)' }}>
            <Target color="var(--accent-primary)" /> Célzott Figyelő 2.0
          </h1>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <a href="/saved" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'var(--text-primary)', color: 'white' }}>
             Ugrás a Tudásbázisba
          </a>
        </div>
      </header>

      <div style={{ display: 'flex', gap: 'var(--spacing-xl)', flex: 1, minHeight: 0 }}>
        
        {/* Bal Oszlop: Célpontok */}
        <div style={{ width: '400px', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
          <div className="glass-card" style={{ padding: 'var(--spacing-lg)', borderTop: '4px solid var(--accent-primary)' }}>
            <h2 style={{ fontSize: '1.2rem', margin: '0 0 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)' }}>
              <Plus size={20} /> Új Célpont Felvétele
            </h2>
            <form onSubmit={handleAddTarget} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <input 
                type="text" 
                placeholder="Célpont neve (pl. Vegas Hírek)" 
                value={newName} 
                onChange={(e) => setNewName(e.target.value)} 
                className="input-field" 
                style={{ padding: '0.75rem', border: '1px solid #ccc', borderRadius: '4px' }}
                required 
              />
              <input 
                type="url" 
                placeholder="URL (pl. https://vegas.hu/hirek)" 
                value={newUrl} 
                onChange={(e) => setNewUrl(e.target.value)} 
                className="input-field" 
                style={{ padding: '0.75rem', border: '1px solid #ccc', borderRadius: '4px' }}
                required 
              />
              <input 
                type="text" 
                placeholder="CSS Szelektor (opcionális, pl. article a)" 
                value={newSelector} 
                onChange={(e) => setNewSelector(e.target.value)} 
                className="input-field" 
                style={{ padding: '0.75rem', border: '1px solid #ccc', borderRadius: '4px' }}
                title="Ha üres, az összes linket begyűjti"
              />
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div style={{ flex: '1 1 100%', display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'var(--bg-tertiary)', padding: '0.5rem', borderRadius: '4px', border: '1px solid #eee' }}>
                  <Filter size={16} color="var(--text-muted)" />
                  <input 
                    type="text" 
                    placeholder="URL szűrő (pl. /news)" 
                    value={newUrlFilter} 
                    onChange={(e) => setNewUrlFilter(e.target.value)} 
                    style={{ border: 'none', background: 'transparent', width: '100%', outline: 'none', fontSize: '0.9rem' }}
                  />
                </div>
                <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'var(--bg-tertiary)', padding: '0.5rem', borderRadius: '4px', border: '1px solid #eee' }}>
                  <Calendar size={16} color="var(--text-muted)" />
                  <input 
                    type="date" 
                    title="Mettől érdekelnek a hírek"
                    value={newMinDate} 
                    onChange={(e) => setNewMinDate(e.target.value)} 
                    style={{ border: 'none', background: 'transparent', width: '100%', outline: 'none', fontSize: '0.9rem', color: 'var(--text-primary)' }}
                  />
                </div>
                <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'var(--bg-tertiary)', padding: '0.5rem', borderRadius: '4px', border: '1px solid #eee' }}>
                  <Calendar size={16} color="var(--text-muted)" />
                  <input 
                    type="date" 
                    title="Meddig érdekelnek a hírek"
                    value={newMaxDate} 
                    onChange={(e) => setNewMaxDate(e.target.value)} 
                    style={{ border: 'none', background: 'transparent', width: '100%', outline: 'none', fontSize: '0.9rem', color: 'var(--text-primary)' }}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
                <button type="submit" className="btn-primary" style={{ flex: 1, background: 'var(--accent-primary)', color: 'white', padding: '0.75rem', fontWeight: 'bold', border: 'none', borderRadius: '4px' }}>
                  {isEditing ? 'Célpont Módosítása' : 'Célpont Mentése'}
                </button>
                {isEditing && (
                  <button type="button" onClick={cancelEdit} className="btn-secondary" style={{ flex: 1, background: '#eee', color: '#333', padding: '0.75rem', fontWeight: 'bold', border: 'none', borderRadius: '4px' }}>
                    Mégse
                  </button>
                )}
              </div>
            </form>
          </div>

          <div className="glass-panel" style={{ flex: 1, overflowY: 'auto', padding: 'var(--spacing-lg)', display: 'flex', flexDirection: 'column', gap: '1rem', minHeight: '300px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ margin: 0, fontSize: '1.2rem', color: 'var(--text-primary)' }}>Aktív Célpontok</h3>
              <button 
                onClick={() => handleScanTarget()} 
                disabled={isScanning || targets.length === 0}
                className="btn-primary" 
                style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'var(--text-primary)', color: 'white' }}
              >
                {isScanning ? <Loader2 size={14} className="animate-spin" /> : <Zap size={14} />} 
                Összes Scannelése
              </button>
            </div>
            
            {loadingTargets ? (
              <div style={{ textAlign: 'center', padding: '2rem' }}><Loader2 className="animate-spin" color="var(--accent-primary)" /></div>
            ) : targets.length === 0 ? (
              <div style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '2rem' }}>Nincsenek célpontok. Adj hozzá egyet felül!</div>
            ) : (
              targets.map(target => (
                <div key={target.id} style={{ background: '#ffffff', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid #dcdcdc', position: 'relative', boxShadow: '0 2px 5px rgba(0,0,0,0.02)' }}>
                  <h4 style={{ margin: '0 0 0.25rem 0', color: 'var(--text-primary)' }}>{target.name}</h4>
                  <div style={{ fontSize: '0.8rem', color: 'var(--accent-primary)', marginBottom: '0.5rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    <a href={target.url} target="_blank" rel="noopener noreferrer">{target.url}</a>
                  </div>
                  
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    {target.selector && (
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', background: 'var(--bg-tertiary)', padding: '2px 6px', borderRadius: '4px', border: '1px solid #eee' }}>
                        Sel: {target.selector}
                      </span>
                    )}
                    {target.urlFilter && (
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-primary)', background: '#e0f2fe', padding: '2px 6px', borderRadius: '4px', border: '1px solid #bae6fd' }}>
                        URL: {target.urlFilter}
                      </span>
                    )}
                    {target.minDate && (
                      <span style={{ fontSize: '0.75rem', color: 'var(--warning)', background: '#fef9c3', padding: '2px 6px', borderRadius: '4px', border: '1px solid #fde047', fontWeight: 600 }}>
                        Ettől: {new Date(target.minDate).toLocaleDateString('hu-HU')}
                      </span>
                    )}
                    {target.maxDate && (
                      <span style={{ fontSize: '0.75rem', color: 'var(--warning)', background: '#fef9c3', padding: '2px 6px', borderRadius: '4px', border: '1px solid #fde047', fontWeight: 600 }}>
                        Eddig: {new Date(target.maxDate).toLocaleDateString('hu-HU')}
                      </span>
                    )}
                  </div>

                  {target.lastChecked && (
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <Calendar size={12} /> Utoljára: {new Date(target.lastChecked).toLocaleString('hu-HU')}
                    </div>
                  )}
                  
                  <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                    <button 
                      onClick={() => handleScanTarget(target.id)}
                      disabled={isScanning}
                      className="btn-secondary" 
                      style={{ flex: 1, padding: '0.4rem', fontSize: '0.8rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.4rem', background: 'var(--accent-primary)', color: 'white', border: 'none', borderRadius: '4px', fontWeight: 'bold' }}
                    >
                      <Zap size={14} /> Scan Indítása
                    </button>
                    <button 
                      onClick={() => startEdit(target)}
                      className="btn-secondary" 
                      style={{ padding: '0.4rem', color: '#333', background: '#eee', border: 'none', borderRadius: '4px' }}
                      title="Célpont szerkesztése"
                    >
                      <Edit2 size={16} />
                    </button>
                    <button 
                      onClick={() => handleDeleteTarget(target.id)}
                      className="btn-secondary" 
                      style={{ padding: '0.4rem', color: 'var(--error)', background: 'transparent', border: '1px solid var(--error)', borderRadius: '4px' }}
                      title="Célpont törlése"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Jobb Oszlop: Linkek */}
        <div className="glass-panel" style={{ flex: 1, padding: 'var(--spacing-xl)', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '2px solid var(--bg-tertiary)' }}>
            <h2 style={{ fontSize: '1.5rem', margin: 0, display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-primary)' }}>
              <Compass size={24} color="var(--accent-primary)" /> Felfedezett Új Hírek (Linkek)
            </h2>
            
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
               <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                 {links.length} találat
               </span>
               <button 
                 onClick={toggleSelectAll}
                 className="btn-secondary"
                 style={{ fontSize: '0.85rem', padding: '0.5rem 1rem', background: '#f1f5f9', color: 'var(--text-primary)', border: '1px solid #cbd5e1', borderRadius: '4px' }}
               >
                 {selectedLinks.length === links.length && links.length > 0 ? "Kijelölés törlése" : "Összes kijelölése"}
               </button>
               <button 
                 onClick={handleDeleteAllLinks}
                 disabled={links.length === 0}
                 className="btn-secondary"
                 style={{ fontSize: '0.85rem', padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: links.length === 0 ? 0.5 : 1, background: 'transparent', color: 'var(--error)', border: '1px solid var(--error)', borderRadius: '4px', fontWeight: 'bold' }}
                 title="Minden felfedezett link azonnali törlése"
               >
                 <Trash2 size={16} /> Összes Törlése
               </button>
               <button 
                 onClick={handleDeleteSelectedLinks}
                 disabled={selectedLinks.length === 0}
                 className="btn-secondary"
                 style={{ fontSize: '0.85rem', padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: selectedLinks.length === 0 ? 0.5 : 1, background: '#fee2e2', color: 'var(--error)', border: '1px solid #fca5a5', borderRadius: '4px', fontWeight: 'bold' }}
               >
                 <Trash2 size={16} /> Kijelöltek Törlése ({selectedLinks.length})
               </button>
               <button 
                 onClick={sendToScraper}
                 disabled={selectedLinks.length === 0}
                 className="btn-primary"
                 style={{ fontSize: '0.85rem', padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: selectedLinks.length === 0 ? 0.5 : 1, background: 'var(--accent-primary)', color: 'white', border: 'none', borderRadius: '4px', fontWeight: 'bold' }}
               >
                 <Send size={16} /> Feldolgozás és Mentés ({selectedLinks.length})
               </button>
            </div>
          </div>

          <div style={{ flex: 1, overflowY: 'auto', paddingRight: '0.5rem' }}>
            {loadingLinks ? (
              <div style={{ textAlign: 'center', padding: '5rem' }}><Loader2 className="animate-spin" size={48} color="var(--accent-primary)" /></div>
            ) : links.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '5rem 0', color: 'var(--text-muted)' }}>
                <Compass size={48} style={{ opacity: 0.2, marginBottom: '1rem', margin: '0 auto' }} />
                <p style={{ fontSize: '1.1rem' }}>Nincsenek feldolgozásra váró új linkek.</p>
                <p style={{ fontSize: '0.9rem' }}>Futtass egy Scant a bal oldalon, hogy friss híreket találj!</p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <AnimatePresence>
                  {links.map(link => (
                    <motion.div 
                      key={link.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                      style={{ 
                        padding: '1rem', 
                        borderLeft: selectedLinks.includes(link.id) ? '4px solid var(--accent-primary)' : '4px solid #e2e8f0',
                        cursor: 'pointer',
                        background: selectedLinks.includes(link.id) ? '#f0fdf4' : '#ffffff', // Very light green if selected, otherwise white
                        borderTop: '1px solid #e2e8f0',
                        borderRight: '1px solid #e2e8f0',
                        borderBottom: '1px solid #e2e8f0',
                        borderRadius: '0 6px 6px 0',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                        transition: 'all 0.2s ease'
                      }}
                      onClick={() => toggleSelectLink(link.id)}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        {/* THE CHECKBOX FIX: Dark gray when unselected, Accent Green when selected */}
                        <div style={{ color: selectedLinks.includes(link.id) ? 'var(--accent-primary)' : '#94a3b8' }}>
                          <CheckSquare size={24} fill={selectedLinks.includes(link.id) ? "currentColor" : "none"} />
                        </div>
                        <div style={{ flex: 1, overflow: 'hidden' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                             <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-primary)', textTransform: 'uppercase', background: 'var(--bg-primary)', padding: '2px 6px', borderRadius: '4px' }}>
                               Forrás: {link.dorkKeyword}
                             </span>
                             <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                               Találat ideje: {new Date(link.createdAt).toLocaleString('hu-HU')}
                             </span>
                          </div>
                          
                          <div style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', wordBreak: 'break-all', lineHeight: 1.4 }}>
                             {link.url}
                          </div>
                        </div>
                        <a 
                          href={link.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          onClick={(e) => e.stopPropagation()}
                          style={{ padding: '0.5rem', borderRadius: '50%', background: '#f8fafc', color: 'var(--text-primary)', border: '1px solid #e2e8f0' }}
                          title="Megnyitás böngészőben"
                        >
                          <ExternalLink size={18} />
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>
        
      </div>
    </div>
  );
}
