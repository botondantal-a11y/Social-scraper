"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { ArrowLeft, Clock, MessageSquare, Loader2, ExternalLink, Heart, Search, Filter, X, Trash2, Zap, Compass, Brain, Sparkles, BarChart, Calendar, Tag, ShieldAlert, TrendingUp, Cpu, Globe, Rocket, Lock, Users, Share2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Helper to render text with markdown links as clickable React elements
function renderTextWithLinks(text: string) {
  if (!text) return null;

  const regex = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    const [fullMatch, label, url] = match;
    const matchIndex = match.index;

    if (matchIndex > lastIndex) {
      parts.push(text.substring(lastIndex, matchIndex));
    }

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

export default function SavedArticles() {
  const [articles, setArticles] = useState<any[]>([]);
  const [dynamicCategories, setDynamicCategories] = useState<any[]>([]);
  const [activeCategory, setActiveCategory] = useState("all");

  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [articleDetails, setArticleDetails] = useState<Record<string, any>>({});
  const [loadingDetails, setLoadingDetails] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [vectorizing, setVectorizing] = useState(false);
  const [similarArticles, setSimilarArticles] = useState<any[]>([]);
  const [loadingSimilar, setLoadingSimilar] = useState(false);
  const [showSimilarModal, setShowSimilarModal] = useState(false);
  const [webResults, setWebResults] = useState<any[]>([]);
  const [loadingWeb, setLoadingWeb] = useState(false);
  const [searchQueryUsed, setSearchQueryUsed] = useState("");
  const [activeSimilarId, setActiveSimilarId] = useState<string | null>(null);

  // Filter states
  const [searchQuery, setSearchQuery] = useState("");
  const [platformFilter, setPlatformFilter] = useState("all");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [keywordFilter, setKeywordFilter] = useState("all");
  const [scopeFilter, setScopeFilter] = useState<"all" | "mine" | "shared">("all");
  const [myUserId, setMyUserId] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    fetch('/api/auth/session')
      .then(r => r.json())
      .then(s => setMyUserId(s?.user?.id || null))
      .catch(() => null);
  }, []);

  useEffect(() => {
    fetchArticles(scopeFilter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scopeFilter]);

  const toggleVisibility = async (e: React.MouseEvent, id: string, current: string) => {
    e.stopPropagation();
    const next = current === 'shared' ? 'private' : 'shared';
    try {
      const res = await fetch('/api/articles', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, visibility: next })
      });
      if (res.ok) {
        setArticles(prev => prev.map(a => a.id === id ? { ...a, visibility: next } : a));
      } else {
        const data = await res.json().catch(() => null);
        alert(data?.error || "Sikertelen módosítás.");
      }
    } catch {
      alert("Hiba történt a láthatóság módosításakor.");
    }
  };

  const fetchArticles = async (scope: string = "all") => {
    setLoading(true);
    try {
      // 1. Összes látható cikk lekérése (saját + közös)
      const resArticles = await fetch(scope === "all" ? '/api/articles' : `/api/articles?scope=${scope}`);
      const allArticles = await resArticles.json();
      
      // 2. Dinamikus kategóriák lekérése az AI-tól
      let catData: any = null;
      try {
        const resCat = await fetch('/api/articles/categorize', { method: 'POST' });
        if (resCat.ok) {
          catData = await resCat.json();
        }
      } catch (err) {
        console.error("API call to categorize failed, using frontend fallback logic:", err);
      }
      
      if (catData && catData.categories && catData.categories.length > 0) {
        setDynamicCategories([
          { id: "all", label: "Összes", icon: <Globe size={18} /> },
          ...catData.categories.map((c: any) => {
            let icon = <Zap size={18} />;
            const lowerLabel = (c.label || "").toLowerCase();
            const lowerId = (c.id || "").toLowerCase();
            if (lowerId === "szrt" || lowerLabel.includes("szerencsejáték") || lowerLabel.includes("szrt")) {
              icon = <Globe size={18} style={{ color: 'var(--accent-primary)' }} />;
            } else if (lowerId === "tippmixpro" || lowerLabel.includes("tippmixpro") || lowerLabel.includes("tippmix pro")) {
              icon = <Rocket size={18} style={{ color: 'var(--accent-primary)' }} />;
            } else if (lowerId === "vegashu" || lowerLabel.includes("vegas")) {
              icon = <TrendingUp size={18} style={{ color: 'var(--error)' }} />;
            } else if (lowerId === "sorsjegy" || lowerLabel.includes("sorsjegy") || lowerLabel.includes("kaparós")) {
              icon = <Zap size={18} style={{ color: 'var(--warning)' }} />;
            } else if (lowerId === "lotto" || lowerLabel.includes("lottó") || lowerLabel.includes("számsorsjáték")) {
              icon = <TrendingUp size={18} style={{ color: 'var(--success)' }} />;
            } else if (lowerId === "sportfogadas" || lowerLabel.includes("sportfogadás") || lowerLabel.includes("odds")) {
              icon = <TrendingUp size={18} />;
            } else if (lowerLabel.includes("piac") || lowerLabel.includes("üzlet") || lowerLabel.includes("gazdaság")) {
              icon = <TrendingUp size={18} />;
            } else if (lowerLabel.includes("tech") || lowerLabel.includes("fejleszt") || lowerLabel.includes("innováció") || lowerLabel.includes("ai")) {
              icon = <Cpu size={18} />;
            } else if (lowerLabel.includes("jog") || lowerLabel.includes("szabály") || lowerLabel.includes("törvény")) {
              icon = <ShieldAlert size={18} />;
            } else if (lowerLabel.includes("felelős") || lowerLabel.includes("függőség") || lowerLabel.includes("játékosvéd")) {
              icon = <ShieldAlert size={18} style={{ color: 'var(--success)' }} />;
            } else if (lowerLabel.includes("kiber") || lowerLabel.includes("csalás") || lowerLabel.includes("biztonság")) {
              icon = <ShieldAlert size={18} style={{ color: 'var(--error)' }} />;
            } else if (lowerLabel.includes("nemzetközi") || lowerLabel.includes("igaming") || lowerLabel.includes("külföld")) {
              icon = <Globe size={18} />;
            }
            return { id: c.id, label: c.label, icon: icon };
          })
        ]);

        const assignments = catData.assignments || {};
        const categorized = allArticles.map((a: any) => ({
          ...a,
          category: assignments[a.id] || "egyeb"
        }));
        setArticles(categorized);
      } else {
        // Fallback robust categories when AI is offline/empty
        const fallbackCats = [
          { id: "szrt", label: "Szerencsejáték Zrt.", icon: <Globe size={18} style={{ color: '#82c341' }} /> },
          { id: "tippmixpro", label: "TippmixPro", icon: <Rocket size={18} style={{ color: '#82c341' }} /> },
          { id: "vegashu", label: "Vegas.hu (Versenytárs)", icon: <TrendingUp size={18} style={{ color: '#ff007f' }} /> },
          { id: "sorsjegy", label: "Kaparós Sorsjegy", icon: <Zap size={18} style={{ color: '#FBE122' }} /> },
          { id: "lotto", label: "Lottó & Számsorsjáték", icon: <TrendingUp size={18} style={{ color: '#82c341' }} /> },
          { id: "sportfogadas", label: "Sportfogadás", icon: <TrendingUp size={18} /> },
          { id: "tech", label: "Technológia & Innováció", icon: <Cpu size={18} /> },
          { id: "szabalyozas", label: "Szabályozás & Jog", icon: <ShieldAlert size={18} /> },
          { id: "felelos_jatek", label: "Felelős Játékszervezés", icon: <ShieldAlert size={18} style={{ color: '#82c341' }} /> },
          { id: "igaming", label: "Nemzetközi iGaming", icon: <Globe size={18} /> },
          { id: "biztonsag", label: "Kiberbiztonság & Csalás", icon: <ShieldAlert size={18} style={{ color: '#ff007f' }} /> },
          { id: "egyeb", label: "Általános", icon: <Globe size={18} /> }
        ];

        setDynamicCategories([{ id: "all", label: "Összes", icon: <Globe size={18} /> }, ...fallbackCats]);

        const categorized = allArticles.map((a: any) => {
          const txt = (a.title + " " + (a.summary || "")).toLowerCase();
          let category = "egyeb";
          if (txt.includes("vegas.hu") || txt.includes("vegas hu") || txt.includes("lvc diamond") || txt.includes("vegas")) category = "vegashu";
          else if (txt.includes("tippmixpro") || txt.includes("tippmix pro") || txt.includes("tippmix")) category = "tippmixpro";
          else if (txt.includes("sorsjegy") || txt.includes("kaparós")) category = "sorsjegy";
          else if (txt.includes("lottó") || txt.includes("ötöslottó") || txt.includes("hatoslottó") || txt.includes("eurojackpot") || txt.includes("joker")) category = "lotto";
          else if (txt.includes("felelős") || txt.includes("függőség") || txt.includes("önkorlátozás") || txt.includes("játékosvéd")) category = "felelos_jatek";
          else if (txt.includes("kiber") || txt.includes("csalás") || txt.includes("biztonság") || txt.includes("adathalászat")) category = "biztonsag";
          else if (txt.includes("törvény") || txt.includes("szabály") || txt.includes("engedély") || txt.includes("bírság") || txt.includes("sztfh")) category = "szabalyozas";
          else if (txt.includes("szerencsejáték zrt") || txt.includes("szrt") || txt.includes("nemzeti játékszervező")) category = "szrt";
          else if (txt.includes("sportfogadás") || txt.includes("odds") || txt.includes("bet365") || txt.includes("unibet")) category = "sportfogadas";
          else if (txt.includes("igaming") || txt.includes("kaszino") || txt.includes("nemzetközi") || txt.includes("külföld") || txt.includes("kaszinó")) category = "igaming";
          else if (txt.includes("tech") || txt.includes("mesterséges") || txt.includes("ai") || txt.includes("fejleszt") || txt.includes("innov")) category = "tech";
          return { ...a, category };
        });
        setArticles(categorized);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryChange = async (articleId: string, newCategory: string) => {
    try {
      const res = await fetch('/api/articles', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: articleId, category: newCategory })
      });
      if (res.ok) {
        setArticles(prev => prev.map(a => a.id === articleId ? { ...a, category: newCategory } : a));
      } else {
        alert("Sikertelen kategória módosítás.");
      }
    } catch (err) {
      console.error(err);
      alert("Hiba történt a kategória módosításakor.");
    }
  };

  const vectorizeAll = async () => {
    setVectorizing(true);
    try {
      const res = await fetch('/api/articles/vectorize', { method: 'POST' });
      const data = await res.json();
      if (data.successCount === 0 && data.failCount > 0) {
        alert(data.message);
      } else {
        alert(`Sikeres: ${data.successCount}, Hiba: ${data.failCount}`);
      }
      fetchArticles();
    } catch (e) {
      alert("Hiba történt a vektorizálás során.");
    } finally {
      setVectorizing(false);
    }
  };

  const findSimilar = async (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setActiveSimilarId(id);
    setLoadingSimilar(true);
    setWebResults([]); 
    setShowSimilarModal(true);
    try {
      const res = await fetch(`/api/articles/similar?id=${id}`);
      const data = await res.json();
      setSimilarArticles(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingSimilar(false);
    }
  };

  const findSimilarWeb = async () => {
    if (!activeSimilarId) return;
    setLoadingWeb(true);
    try {
      const res = await fetch(`/api/articles/similar-web?id=${activeSimilarId}`);
      const data = await res.json();
      setWebResults(data.results);
      setSearchQueryUsed(data.searchQuery);
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingWeb(false);
    }
  };

  useEffect(() => {
    if (expandedId) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [expandedId]);

  const toggleSelect = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setSelectedIds(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const openArticle = async (id: string) => {
    setExpandedId(id);
    if (!articleDetails[id]) {
      setLoadingDetails(id);
      try {
        const res = await fetch(`/api/articles?id=${id}`);
        const data = await res.json();
        setArticleDetails(prev => ({ ...prev, [id]: data }));
      } catch (err) {
        console.error(err);
      } finally {
        setLoadingDetails(null);
      }
    }
  };

  const closeModal = () => {
    setExpandedId(null);
  };

  const deleteArticle = async (e: React.MouseEvent, id: string) => {
    e.stopPropagation(); 
    if (!confirm("Biztosan törölni szeretnéd ezt a cikket?")) return;
    try {
      const res = await fetch(`/api/articles?id=${id}`, { method: 'DELETE' });
      if (res.ok) setArticles(prev => prev.filter(a => a.id !== id));
      else alert("Hiba történt a törlés során.");
    } catch (err) {
      console.error(err);
      alert("Hiba történt a törlés során.");
    }
  };

  const toggleSelectAll = () => {
    if (selectedIds.length === filteredArticles.length && filteredArticles.length > 0) setSelectedIds([]);
    else setSelectedIds(filteredArticles.map(a => a.id));
  };

  const uniqueKeywords = Array.from(new Set(articles.map(a => a.discoveryKeyword).filter(Boolean))).sort() as string[];

  const filteredArticles = articles.filter(a => {
    const query = searchQuery.toLowerCase();
    const matchesSearch = a.title.toLowerCase().includes(query) || (a.summary && a.summary.toLowerCase().includes(query)) || (a.fullText && a.fullText.toLowerCase().includes(query));
    const matchesPlatform = platformFilter === "all" || a.platform === platformFilter;
    const articleDate = new Date(a.publishedAt || a.createdAt);
    const matchesDateFrom = !dateFrom || articleDate >= new Date(dateFrom + 'T00:00:00');
    const matchesDateTo = !dateTo || articleDate <= new Date(dateTo + 'T23:59:59');
    const matchesKeyword = keywordFilter === "all" ? true : keywordFilter === "none" ? !a.discoveryKeyword : a.discoveryKeyword === keywordFilter;
    const matchesCategory = activeCategory === "all" || a.category === activeCategory;
    
    return matchesSearch && matchesPlatform && matchesDateFrom && matchesDateTo && matchesKeyword && matchesCategory;
  });

  const activeArticle = expandedId ? articles.find(a => a.id === expandedId) : null;
  const activeDetails = expandedId ? articleDetails[expandedId] : null;

  const modalContent = (
    <AnimatePresence>
      {expandedId && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(15, 23, 42, 0.9)', backdropFilter: 'blur(10px)', zIndex: 999999 }} onClick={closeModal}>
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, x: '-50%', y: '-48%' }}
            animate={{ scale: 1, opacity: 1, x: '-50%', y: '-50%' }}
            exit={{ scale: 0.9, opacity: 0, x: '-50%', y: '-48%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-card"
            style={{ position: 'absolute', top: '50%', left: '50%', width: '95%', maxWidth: '900px', maxHeight: '92vh', background: 'var(--bg-primary)', display: 'flex', flexDirection: 'column', overflow: 'hidden', boxShadow: '0 25px 70px -12px rgba(0, 0, 0, 0.7)', border: '1px solid var(--bg-tertiary)' }}
          >
            <div style={{ padding: 'var(--spacing-lg)', borderBottom: '1px solid var(--bg-tertiary)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0, background: 'var(--bg-primary)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', overflow: 'hidden' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ background: 'var(--accent-tertiary)', color: 'var(--accent-secondary)', padding: '2px 8px', borderRadius: '12px', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase' }}>
                    {activeArticle?.platform}
                  </span>
                  {activeArticle?.discoveryKeyword && (
                    <span style={{ color: 'var(--accent-primary)', fontSize: '0.8rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <Search size={14} /> {activeArticle.discoveryKeyword}
                    </span>
                  )}
                  {activeArticle?.category && (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                       {dynamicCategories.find(c => c.id === activeArticle.category)?.icon}
                       {dynamicCategories.find(c => c.id === activeArticle.category)?.label || "Kategorizálatlan"}
                    </span>
                  )}
                </div>
                <h2 style={{ fontSize: '1.4rem', margin: 0, lineHeight: 1.2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{activeArticle?.title}</h2>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', flexShrink: 0, marginLeft: '1rem' }}>
                <button onClick={(e) => { deleteArticle(e, expandedId); closeModal(); }} style={{ background: 'rgba(239, 68, 68, 0.1)', border: 'none', borderRadius: '8px', padding: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--error)' }} title="Törlés">
                  <Trash2 size={20} />
                </button>
                <button onClick={closeModal} style={{ background: 'var(--bg-tertiary)', border: 'none', borderRadius: '8px', padding: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                  <X size={20} color="var(--text-primary)" />
                </button>
              </div>
            </div>

            <div style={{ overflowY: 'auto', flex: 1, padding: 'var(--spacing-lg)' }}>
              {activeArticle?.imageUrl && (
                <div style={{ width: '100%', height: '300px', overflow: 'hidden', borderRadius: 'var(--radius-md)', marginBottom: 'var(--spacing-lg)' }}>
                  <img src={activeArticle.imageUrl} alt={activeArticle.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              )}

              <div style={{ display: 'flex', gap: '1.5rem', color: 'var(--text-muted)', fontSize: '0.9rem', alignItems: 'center', flexWrap: 'wrap', marginBottom: 'var(--spacing-xl)' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Clock size={16} /> {new Date(activeArticle?.publishedAt || activeArticle?.createdAt || '').toLocaleDateString('hu-HU')}</span>
                <a href={activeArticle?.url} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-primary)', fontWeight: 500 }}>
                  <ExternalLink size={16} /> Eredeti cikk megnyitása
                </a>
                {activeArticle?.reactions && (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#ec4899', fontWeight: 600 }}><Heart size={16} fill="currentColor" /> {activeArticle.reactions}</span>
                )}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginLeft: 'auto' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>Téma:</span>
                  <select
                    value={activeArticle?.category || "egyeb"}
                    onChange={(e) => handleCategoryChange(activeArticle.id, e.target.value)}
                    style={{ padding: '0.2rem 0.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--accent-primary)', background: 'var(--bg-primary)', fontSize: '0.8rem' }}
                  >
                    {dynamicCategories.filter(c => c.id !== 'all').map(c => (
                      <option key={c.id} value={c.id}>{c.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              {loadingDetails === expandedId ? (
                <div style={{ display: 'flex', justifyContent: 'center', padding: '3rem' }}>
                  <Loader2 size={32} className="animate-spin" color="var(--accent-primary)" />
                </div>
              ) : activeDetails ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xl)' }}>
                  <section style={{ background: 'rgba(59, 130, 246, 0.05)', padding: 'var(--spacing-lg)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(59, 130, 246, 0.1)' }}>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--accent-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                       ✨ AI Összefoglaló
                    </h3>
                    <div style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', whiteSpace: 'pre-wrap' }}>
                      {renderTextWithLinks(activeDetails.summary)}
                    </div>
                  </section>
                  {activeDetails.commentSummary && activeArticle?._count?.comments > 0 && (
                    <section style={{ background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.1)', padding: 'var(--spacing-lg)', borderRadius: 'var(--radius-lg)' }}>
                      <h3 style={{ fontSize: '1.1rem', color: 'var(--success)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <MessageSquare size={18} /> Kommentek Elemzése (AI)
                      </h3>
                      <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '1rem', margin: 0 }}>
                        {renderTextWithLinks(activeDetails.commentSummary)}
                      </p>
                    </section>
                  )}
                  <section>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      📑 Teljes Szöveg
                    </h3>
                    <div style={{ background: 'var(--bg-secondary)', padding: 'var(--spacing-lg)', borderRadius: 'var(--radius-md)', color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.8, whiteSpace: 'pre-wrap', maxHeight: '400px', overflowY: 'auto', border: '1px solid var(--bg-tertiary)' }}>
                      {activeDetails.fullText}
                    </div>
                  </section>
                </div>
              ) : (
                <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--error)' }}>Hiba történt a cikk betöltésekor.</div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <header className="glass-panel" style={{ padding: '1.5rem var(--spacing-lg)', marginBottom: 'var(--spacing-xl)', display: 'flex', flexDirection: 'column', gap: '1.5rem', background: '#ffffff' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a href="/" className="btn-secondary" style={{ padding: '0.5rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ArrowLeft size={20} />
            </a>
            <h1 style={{ margin: 0, fontSize: '1.8rem' }}>Tudásbázis</h1>
            <div style={{ padding: '2px', background: '#ffffff', borderRadius: '4px', display: 'flex', alignItems: 'center' }}>
              <img src="/logo.png" alt="Szerencsejáték Zrt." style={{ height: '36px', marginLeft: '0.5rem', objectFit: 'contain' }} />
            </div>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <a href="/chat" className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(236, 72, 153, 0.1)', border: '1px solid #ec4899', color: '#ec4899' }}>
              <MessageSquare size={18} /> Chat
            </a>
            <a href="/trends" className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(245, 158, 11, 0.1)', border: '1px solid #f59e0b', color: '#f59e0b' }}>
               <TrendingUp size={18} /> Trend Radar
            </a>
            <a href={selectedIds.length > 0 ? `/intelligence?ids=${selectedIds.join(',')}` : "/intelligence"} className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: selectedIds.length > 0 ? 'var(--accent-primary)' : 'rgba(59, 130, 246, 0.1)', border: '1px solid var(--accent-primary)', color: selectedIds.length > 0 ? 'white' : 'var(--accent-primary)', transition: 'all 0.2s ease' }}>
              <Brain size={18} /> {selectedIds.length > 0 ? `Elemzés (${selectedIds.length})` : "Intelligencia"}
            </a>
            <a href="/discovery" className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(52, 211, 153, 0.1)', border: '1px solid var(--success)', color: 'var(--success)' }}>
              <Compass size={18} /> Felfedező
            </a>
            <a href="/statistics" className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', border: '1px solid var(--brand)', color: 'var(--brand)' }}>
              <BarChart size={18} /> Statisztika
            </a>
          </div>
        </div>

        {/* Cikk szűrési sáv */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <div style={{ flex: '1 1 300px', position: 'relative' }}>
            <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input type="text" placeholder="Keresés a címekben és tartalomban..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="input-field" style={{ paddingLeft: '2.5rem' }} />
          </div>
          <div style={{ display: 'flex', gap: '0.25rem', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-full)', padding: '3px' }}>
            {([["all", "Minden", <Globe key="g" size={14} />], ["mine", "Saját profilom", <Lock key="l" size={14} />], ["shared", "Közös", <Users key="u" size={14} />]] as const).map(([id, label, icon]) => (
              <button key={id} onClick={() => setScopeFilter(id)} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', padding: '0.45rem 0.9rem', borderRadius: 'var(--radius-full)', border: 'none', cursor: 'pointer', fontSize: '0.8rem', fontWeight: 600, background: scopeFilter === id ? 'var(--accent-primary)' : 'transparent', color: scopeFilter === id ? 'white' : 'var(--text-secondary)' }}>
                {icon} {label}
              </button>
            ))}
          </div>
          <select className="input-field" style={{ width: 'auto', cursor: 'pointer' }} value={platformFilter} onChange={(e) => setPlatformFilter(e.target.value)}>
            <option value="all">Összes platform</option>
            <option value="reddit">Reddit</option>
            <option value="facebook">Facebook</option>
            <option value="instagram">Instagram</option>
            <option value="general">Egyéb (Web)</option>
          </select>
          <button onClick={toggleSelectAll} className="btn-secondary" style={{ fontSize: '0.85rem', padding: '0.6rem 1rem', borderColor: (selectedIds.length > 0 && filteredArticles.length > 0 && selectedIds.length === filteredArticles.length) ? 'var(--accent-primary)' : 'var(--bg-tertiary)', background: (selectedIds.length > 0 && filteredArticles.length > 0 && selectedIds.length === filteredArticles.length) ? 'rgba(59, 130, 246, 0.1)' : 'transparent' }}>
            {(selectedIds.length > 0 && filteredArticles.length > 0 && selectedIds.length === filteredArticles.length) ? "Kijelölés törlése" : "Összes kijelölése"}
          </button>
          <button onClick={vectorizeAll} disabled={vectorizing} className="btn-secondary" style={{ fontSize: '0.85rem', padding: '0.6rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Sparkles size={16} className={vectorizing ? "animate-spin" : ""} /> {vectorizing ? "Vektorizálás..." : "Adatbázis frissítése"}
          </button>
        </div>

        {/* Dátum és Felfedező szűrés */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', paddingTop: '0.5rem', borderTop: '1px solid var(--bg-tertiary)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Calendar size={16} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
            <input type="date" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} className="input-field" style={{ width: '130px', padding: '0.3rem 0.5rem', fontSize: '0.8rem' }} />
            <span style={{ color: 'var(--text-muted)' }}>–</span>
            <input type="date" value={dateTo} onChange={(e) => setDateTo(e.target.value)} className="input-field" style={{ width: '130px', padding: '0.3rem 0.5rem', fontSize: '0.8rem' }} />
          </div>
          {uniqueKeywords.length > 0 && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Tag size={16} style={{ color: 'var(--accent-primary)', flexShrink: 0 }} />
              <select className="input-field" style={{ width: 'auto', padding: '0.3rem 0.5rem', fontSize: '0.8rem' }} value={keywordFilter} onChange={(e) => setKeywordFilter(e.target.value)}>
                <option value="all">Összes kulcsszó</option>
                <option value="none">Nincs kulcsszó</option>
                {uniqueKeywords.map(kw => (<option key={kw} value={kw}>{kw}</option>))}
              </select>
            </div>
          )}
        </div>
        
        {/* Early Warning AI Category Tabs */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', paddingTop: '0.5rem', borderTop: '1px solid var(--bg-tertiary)' }}>
          {dynamicCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.5rem 1rem',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                background: activeCategory === cat.id ? 'var(--accent-primary)' : 'var(--bg-secondary)',
                color: activeCategory === cat.id ? 'white' : 'var(--text-secondary)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                fontSize: '0.8rem',
                fontWeight: 600,
                boxShadow: activeCategory === cat.id ? 'var(--shadow-glow-accent)' : 'none'
              }}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>
      </header>

      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '3rem' }}>
          <Loader2 size={32} className="animate-spin" color="var(--accent-primary)" />
        </div>
      ) : articles.length === 0 ? (
        <div className="glass-card" style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)' }}>Még nincsenek mentett cikkek.</div>
      ) : filteredArticles.length === 0 ? (
        <div className="glass-card" style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)' }}>Nincs találat a szűrés alapján.</div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 'var(--spacing-lg)' }}>
          <AnimatePresence>
            {filteredArticles.map((article) => (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                key={article.id} 
                className="glass-card" 
                style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden', position: 'relative', zIndex: 1, borderTop: `4px solid ${article.category === 'AI / Tech' ? 'var(--warning)' : 'var(--accent-primary)'}` }}
                onClick={() => openArticle(article.id)}
              >
                {article.imageUrl ? (
                  <div style={{ width: '100%', height: '160px', overflow: 'hidden', position: 'relative' }}>
                    <img src={article.imageUrl} alt={article.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => (e.currentTarget.style.display = 'none')} />
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', background: 'linear-gradient(to top, rgba(255,255,255,1), transparent)' }}></div>
                    <button onClick={(e) => toggleSelect(e, article.id)} style={{ position: 'absolute', top: '10px', right: '10px', background: selectedIds.includes(article.id) ? 'var(--accent-primary)' : 'rgba(255,255,255,0.2)', border: '2px solid white', borderRadius: '50%', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', boxShadow: '0 4px 12px rgba(0,0,0,0.3)', zIndex: 10, backdropFilter: 'blur(4px)' }}>
                      {selectedIds.includes(article.id) && <Sparkles size={16} fill="white" />}
                    </button>
                  </div>
                ) : (
                  <div style={{ width: '100%', height: '160px', background: 'var(--bg-tertiary)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                    <Filter size={48} style={{ opacity: 0.1 }} />
                    <button onClick={(e) => toggleSelect(e, article.id)} style={{ position: 'absolute', top: '10px', right: '10px', background: selectedIds.includes(article.id) ? 'var(--accent-primary)' : 'rgba(0,0,0,0.1)', border: '2px solid var(--accent-primary)', borderRadius: '50%', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: selectedIds.includes(article.id) ? 'white' : 'transparent', zIndex: 10 }}>
                      <Sparkles size={16} fill="currentColor" />
                    </button>
                  </div>
                )}
                <div style={{ padding: 'var(--spacing-lg)', flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--accent-primary)', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                      {dynamicCategories.find(c => c.id === article.category)?.label || article.category || "Általános"}
                    </span>
                    <span style={{ background: 'var(--bg-tertiary)', padding: '2px 8px', borderRadius: '12px', fontSize: '0.65rem', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase' }}>
                      {article.platform}
                    </span>
                  </div>
                  
                  <h3 style={{ margin: '0 0 0.75rem 0', color: 'var(--text-primary)', fontSize: '1.1rem', lineHeight: 1.3 }}>{article.title}</h3>
                  
                  {article.summary && (
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.5, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {article.summary.replace(/[*#]/g, '')}
                    </p>
                  )}
                </div>
                
                <div style={{ padding: 'var(--spacing-sm) var(--spacing-lg)', borderTop: '1px solid var(--bg-tertiary)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--bg-secondary)', borderBottomLeftRadius: 'var(--radius-md)', borderBottomRightRadius: 'var(--radius-md)' }}>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 500 }}><MessageSquare size={12} /> {article._count?.comments || 0}</span>
                    {article.reactions && (<span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#ec4899', fontWeight: 500, fontSize: '0.75rem' }}><Heart size={12} fill="currentColor" /> {article.reactions}</span>)}
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    {article.visibility === 'shared' ? (
                      <span title={article.owner?.name ? `Megosztotta: ${article.owner.name}` : 'Közös tartalom'} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.7rem', fontWeight: 600, color: 'var(--success)' }}>
                        <Users size={12} /> Közös{article.owner?.name ? ` · ${article.owner.name}` : ''}
                      </span>
                    ) : (
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.7rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                        <Lock size={12} /> Privát
                      </span>
                    )}
                    {myUserId && article.ownerId === myUserId && (
                      <button onClick={(e) => toggleVisibility(e, article.id, article.visibility)} className="btn-secondary" title={article.visibility === 'shared' ? 'Visszavonás priváttá' : 'Feltöltés a közösbe'} style={{ padding: '4px 8px', fontSize: '0.7rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <Share2 size={12} /> {article.visibility === 'shared' ? 'Privát' : 'Közösbe'}
                      </button>
                    )}
                    <button onClick={(e) => findSimilar(e, article.id)} className="btn-secondary" style={{ padding: '4px 8px', fontSize: '0.7rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Sparkles size={12} /> Hasonló</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      {/* AI Stratégiai Javaslat */}
      {!loading && articles.length > 0 && (
        <div className="glass-panel" style={{ marginTop: 'var(--spacing-2xl)', padding: 'var(--spacing-xl)', borderLeft: '4px solid var(--accent-primary)' }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: 'var(--spacing-md)' }}>
            <MessageSquare size={20} /> AI Stratégiai Javaslat
          </h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            A rendszerben lévő {articles.length} cikk alapján a piac dinamikusan alakul. A legfrissebb beérkező adatok az egyéni, kategóriákba sorolt nézetek alapján jól nyomon követhetőek. Javasoljuk a szűrt tartalmak rendszeres elemzésbe (Intelligence) küldését az átfogó trendek feltárásához.
          </p>
        </div>
      )}

      {mounted && createPortal(modalContent, document.body)}

      {/* Similar Articles Modal */}
      {showSimilarModal && mounted && createPortal(
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(15, 23, 42, 0.8)', backdropFilter: 'blur(8px)', zIndex: 1000000, display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => setShowSimilarModal(false)}>
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} style={{ background: 'var(--bg-primary)', width: '90%', maxWidth: '600px', borderRadius: 'var(--radius-lg)', padding: 'var(--spacing-xl)', boxShadow: 'var(--shadow-xl)', border: '1px solid var(--bg-tertiary)' }} onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h2 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Sparkles color="var(--accent-primary)" /> Hasonló hírek</h2>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button onClick={findSimilarWeb} disabled={loadingWeb} className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(59, 130, 246, 0.1)', border: '1px solid var(--accent-primary)', color: 'var(--accent-primary)' }}>
                  {loadingWeb ? <Loader2 className="animate-spin" size={16} /> : <Compass size={16} />} Keresés a weben
                </button>
                <button onClick={() => setShowSimilarModal(false)} className="btn-secondary" style={{ padding: '0.5rem', borderRadius: '50%' }}><X size={20} /></button>
              </div>
            </div>
            <div style={{ maxHeight: '60vh', overflowY: 'auto', paddingRight: '0.5rem' }}>
              {loadingSimilar || loadingWeb ? (
                <div style={{ padding: '3rem', textAlign: 'center' }}><Loader2 className="animate-spin" size={32} color="var(--accent-primary)" style={{ margin: '0 auto' }} /><p style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>{loadingWeb ? "Élő kutatás a Google News-on..." : "Szemantikus keresés az adatbázisban..."}</p></div>
              ) : (
                <>
                  {webResults.length > 0 && (
                    <div style={{ marginBottom: '2rem' }}>
                      <h3 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Compass size={14} /> FRISS TALÁLATOK AZ INTERNETRŐL</h3>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {webResults.map((a: any) => (
                          <div key={a.id} className="glass-card" style={{ padding: '1rem', display: 'flex', gap: '1rem', alignItems: 'center', borderLeft: '4px solid var(--accent-primary)' }}>
                            <div style={{ flex: 1 }}>
                              <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '1rem' }}>{a.title}</h4>
                              <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-muted)' }}>{a.source} • {a.publishedAt}</p>
                            </div>
                            <a href={a.url} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}>Megnyitás</a>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {similarArticles.length > 0 && (
                    <div>
                      <h3 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Brain size={14} /> MENTETT CIKKEK AZ ADATBÁZISBÓL</h3>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {similarArticles.map((a: any) => (
                          <div key={a.id} className="glass-card" style={{ padding: '1rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <div style={{ flex: 1 }}>
                              <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '1rem' }}>{a.title}</h4>
                              <div style={{ display: 'flex', gap: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                                <span>{a.platform}</span>
                                <span>Szint: {(a.similarity * 100).toFixed(0)}%</span>
                              </div>
                            </div>
                            <button onClick={() => { setShowSimilarModal(false); openArticle(a.id); }} className="btn-secondary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}>Megtekintés</button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {similarArticles.length === 0 && webResults.length === 0 && (
                    <p style={{ textAlign: 'center', color: 'var(--text-muted)' }}>Nincsenek hasonló cikkek az adatbázisban.</p>
                  )}
                </>
              )}
            </div>
          </motion.div>
        </div>
      , document.body)}
    </div>
  );
}
