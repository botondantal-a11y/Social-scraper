"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, BarChart as BarChartIcon, Loader2, Link as LinkIcon, Database, Trash2, Filter, Square, Eye, Zap, Type, Layers, LayoutGrid, FileText, Maximize, Minimize, PanelLeftClose, PanelLeftOpen, Edit2, Check, X, Lock, Users } from "lucide-react";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import ReactMarkdown from 'react-markdown';

export default function StatisticsPage() {
  const [urlInput, setUrlInput] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const [datasets, setDatasets] = useState<any[]>([]);
  const [loadingDatasets, setLoadingDatasets] = useState(true);
  const [activeJobs, setActiveJobs] = useState<any[]>([]);
  
  const [selectedDataset, setSelectedDataset] = useState<any | null>(null);
  const [parsedData, setParsedData] = useState<any[]>([]);
  
  // Filters
  const [availableMetrics, setAvailableMetrics] = useState<string[]>([]);
  const [selectedMetric, setSelectedMetric] = useState<string>("");
  const [availableCategories, setAvailableCategories] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(new Set());
  const [availableCountries, setAvailableCountries] = useState<string[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<Set<string>>(new Set());
  const [availableYears, setAvailableYears] = useState<string[]>([]);
  const [selectedYears, setSelectedYears] = useState<Set<string>>(new Set());
  
  // Layout
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
  // Dynamic Chart Controls
  const [chartGroupBy, setChartGroupBy] = useState<"category" | "countryOrRegion" | "year">("countryOrRegion");
  const [chartSubGroupBy, setChartSubGroupBy] = useState<"category" | "countryOrRegion" | "year" | "none">("category");
  const [chartLayout, setChartLayout] = useState<"vertical" | "horizontal">("horizontal");

  const handleSetGroupBy = (val: "category" | "countryOrRegion" | "year") => {
    setChartGroupBy(val);
    if (val === "countryOrRegion" && chartSubGroupBy === "countryOrRegion") {
      setChartSubGroupBy("category");
    } else if (val === "category" && chartSubGroupBy === "category") {
      setChartSubGroupBy("countryOrRegion");
    } else if (val === "year" && chartSubGroupBy === "year") {
      setChartSubGroupBy("category");
    }
  };
  
  // AI Analysis
  const [isGeneratingAnalysis, setIsGeneratingAnalysis] = useState(false);
  
  // View mode
  const [viewMode, setViewMode] = useState<"chart" | "table" | "analysis">("table");
  const [showFilters, setShowFilters] = useState(false);

  // Renaming datasets
  const [editingDatasetId, setEditingDatasetId] = useState<string | null>(null);
  const [editingTitle, setEditingTitle] = useState("");

  // Colors for charts
  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#14b8a6'];

  useEffect(() => {
    fetchDatasets();
    fetchActiveJobs();
    
    const interval = setInterval(() => {
      fetchActiveJobs();
      // Periodically refresh datasets to see partial data from background jobs
      fetchDatasets();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // Live update the selected dataset if new data arrives from background job
  useEffect(() => {
    if (selectedDataset && datasets.length > 0) {
      const updatedDataset = datasets.find(d => d.id === selectedDataset.id);
      if (updatedDataset && updatedDataset.data !== selectedDataset.data) {
        setSelectedDataset(updatedDataset);
        try {
          const rawData = JSON.parse(updatedDataset.data).map((d: any) => ({
            ...d,
            year: d.year || 'Nincs adat',
            category: d.category || 'Általános / Nincs megadva',
            metric: d.metric || 'Alapértelmezett',
            countryOrRegion: d.countryOrRegion || 'Ismeretlen'
          }));
          setParsedData(rawData);
          
          const metrics = Array.from(new Set(rawData.map((d: any) => d.metric))).filter(Boolean) as string[];
          const categories = Array.from(new Set(rawData.map((d: any) => d.category))).filter(Boolean) as string[];
          const countries = Array.from(new Set(rawData.map((d: any) => d.countryOrRegion))).filter(Boolean) as string[];
          const years = Array.from(new Set(rawData.map((d: any) => d.year))).filter(Boolean) as string[];
          
          setAvailableMetrics(prev => JSON.stringify(prev) !== JSON.stringify(metrics) ? metrics : prev);
          setAvailableCategories(prev => JSON.stringify(prev) !== JSON.stringify(categories) ? categories : prev);
          setAvailableCountries(prev => JSON.stringify(prev) !== JSON.stringify(countries) ? countries : prev);
          setAvailableYears(prev => JSON.stringify(prev) !== JSON.stringify(years) ? years : prev);
          
          setSelectedMetric(prevMetric => (!prevMetric || !metrics.includes(prevMetric)) ? (metrics.length > 0 ? metrics[0] : "") : prevMetric);
          setSelectedCategories(prevSet => (prevSet.size === 0 || prevSet.size === availableCategories.length) ? new Set(categories) : prevSet);
          setSelectedCountries(prevSet => (prevSet.size === 0 || prevSet.size === availableCountries.length) ? new Set(countries) : prevSet);
          setSelectedYears(prevSet => (prevSet.size === 0 || prevSet.size === availableYears.length) ? new Set(years) : prevSet);

        } catch (e) {
          console.error("Failed to parse updated dataset data", e);
        }
      }
    }
  }, [datasets, selectedDataset, availableCategories.length]);

  const fetchActiveJobs = async () => {
    try {
      const res = await fetch('/api/jobs');
      const data = await res.json();
      if (Array.isArray(data)) {
        setActiveJobs(data);
      }
    } catch (e) {}
  };

  const handleStopJob = async (jobId: string) => {
    try {
      await fetch('/api/jobs', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'stop', id: jobId })
      });
      fetchActiveJobs();
    } catch (e) {
      console.error("Failed to stop job", e);
    }
  };

  const handleViewLiveJob = (datasetId: string | null) => {
    if (!datasetId) return;
    const ds = datasets.find(d => d.id === datasetId);
    if (ds) {
      selectDataset(ds);
    }
  };

  const fetchDatasets = async () => {
    try {
      const res = await fetch('/api/statistics-data');
      const data = await res.json();
      if (Array.isArray(data)) {
        setDatasets(data);
      } else {
        console.error("Dataset fetch error:", data);
      }
    } catch (e) {
      console.error("Failed to fetch datasets", e);
    } finally {
      setLoadingDatasets(false);
    }
  };

  const handleScrape = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!urlInput.trim()) return;

    setIsProcessing(true);
    setError(null);

    try {
      const response = await fetch('/api/jobs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: urlInput })
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Hiba történt a feladat elindításakor.');
      }
      
      setUrlInput("");
      fetchActiveJobs();
      
    } catch (err: any) {
      setError(err.message || "Ismeretlen hiba történt.");
    } finally {
      setIsProcessing(false);
    }
  };

  const deleteDataset = async (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (!confirm("Biztosan törölni szeretnéd ezt az adatkészletet?")) return;
    
    try {
      await fetch(`/api/statistics-data?id=${id}`, { method: 'DELETE' });
      setDatasets(prev => prev.filter(d => d.id !== id));
      if (selectedDataset?.id === id) {
        setSelectedDataset(null);
        setParsedData([]);
      }
    } catch (e) {
      alert("Hiba törlés közben.");
    }
  };

  const toggleVisibility = async (e: React.MouseEvent, id: string, current: string) => {
    e.stopPropagation();
    const next = current === 'shared' ? 'private' : 'shared';
    try {
      const response = await fetch('/api/statistics-data', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, visibility: next })
      });
      if (response.ok) {
        setDatasets((prev: any[]) => prev.map(d => d.id === id ? { ...d, visibility: next } : d));
      } else {
        const data = await response.json().catch(() => null);
        alert(data?.error || "Csak a saját adatkészleteid láthatóságát módosíthatod.");
      }
    } catch {
      alert("Hiba történt a láthatóság módosításakor.");
    }
  };

  const handleRename = async (id: string) => {
    if (!editingTitle.trim()) return;
    try {
      const response = await fetch('/api/statistics-data', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, title: editingTitle })
      });
      const data = await response.json();
      if (response.ok && data.success) {
        setDatasets((prev: any[]) => prev.map(d => d.id === id ? { ...d, title: editingTitle } : d));
        if (selectedDataset?.id === id) {
          setSelectedDataset({ ...selectedDataset, title: editingTitle });
        }
        setEditingDatasetId(null);
      } else {
        alert(data.error || "Hiba történt az átnevezés során.");
      }
    } catch (e) {
      alert("Hiba történt az átnevezés során.");
    }
  };

  const selectDataset = (dataset: any) => {
    setSelectedDataset(dataset);
    try {
      const rawData = JSON.parse(dataset.data).map((d: any) => ({
        ...d,
        year: d.year || 'Nincs adat',
        category: d.category || 'Általános / Nincs megadva',
        metric: d.metric || 'Alapértelmezett',
        countryOrRegion: d.countryOrRegion || 'Ismeretlen'
      }));
      setParsedData(rawData);
      
      const metrics = Array.from(new Set(rawData.map((d: any) => d.metric))).filter(Boolean) as string[];
      const categories = Array.from(new Set(rawData.map((d: any) => d.category))).filter(Boolean) as string[];
      const countries = Array.from(new Set(rawData.map((d: any) => d.countryOrRegion))).filter(Boolean) as string[];
      const years = Array.from(new Set(rawData.map((d: any) => d.year))).filter(Boolean) as string[];
      
      setAvailableMetrics(metrics);
      setAvailableCategories(categories);
      setAvailableCountries(countries);
      setAvailableYears(years);
      
      if (metrics.length > 0) setSelectedMetric(metrics[0]);
      setSelectedCategories(new Set(categories));
      setSelectedCountries(new Set(countries));
      setSelectedYears(new Set(years));
    } catch (e) {
      console.error("Failed to parse dataset data", e);
      setParsedData([]);
    }
  };

  const toggleCategory = (cat: string) => {
    const newSet = new Set(selectedCategories);
    if (newSet.has(cat)) newSet.delete(cat);
    else newSet.add(cat);
    setSelectedCategories(newSet);
  };
  
  const toggleCountry = (country: string) => {
    const newSet = new Set(selectedCountries);
    if (newSet.has(country)) newSet.delete(country);
    else newSet.add(country);
    setSelectedCountries(newSet);
  };
  
  const toggleYear = (yr: string) => {
    const newSet = new Set(selectedYears);
    if (newSet.has(yr)) newSet.delete(yr);
    else newSet.add(yr);
    setSelectedYears(newSet);
  };

  // Filter data for the chart
  const chartDataRaw = parsedData
    .filter(d => 
       d.metric === selectedMetric && 
       selectedCategories.has(d.category) &&
       selectedCountries.has(d.countryOrRegion) &&
       selectedYears.has(d.year)
    );
    
  // Pivot data for Grouped Bar Chart
  let chartData: any[] = [];
  let subGroupKeys: string[] = [];

  if (chartDataRaw.length > 0) {
    if (chartSubGroupBy && chartSubGroupBy !== "none" && chartSubGroupBy !== chartGroupBy) {
      // Find all unique sub-group values in the active filtered data
      subGroupKeys = Array.from(new Set(chartDataRaw.map(d => String(d[chartSubGroupBy] || 'Nincs megadva')))).sort();

      // Group by the main dimension
      const groupsMap = new Map<string, any>();

      chartDataRaw.forEach(d => {
        const mainVal = String(d[chartGroupBy] || 'Ismeretlen');
        const subVal = String(d[chartSubGroupBy] || 'Nincs megadva');
        const numVal = Number(d.value) || 0;

        if (!groupsMap.has(mainVal)) {
          groupsMap.set(mainVal, {
            [chartGroupBy]: mainVal,
            _sums: {},
            _counts: {}
          });
        }

        const group = groupsMap.get(mainVal);
        if (!group._sums[subVal]) {
          group._sums[subVal] = 0;
          group._counts[subVal] = 0;
        }
        group._sums[subVal] += numVal;
        group._counts[subVal] += 1;
      });

      // Convert map to array and compute averages
      chartData = Array.from(groupsMap.values()).map(group => {
        const item: any = { [chartGroupBy]: group[chartGroupBy] };
        subGroupKeys.forEach(subVal => {
          if (group._counts[subVal] > 0) {
            // Use average to be safe, rounded to 2 decimal places
            const avg = group._sums[subVal] / group._counts[subVal];
            item[subVal] = Math.round(avg * 100) / 100;
          }
        });
        return item;
      });

      // Sort groups by the total sum or average of their values (to keep a nice ordering)
      chartData.sort((a, b) => {
        const sumA = subGroupKeys.reduce((acc, key) => acc + (Number(a[key]) || 0), 0);
        const sumB = subGroupKeys.reduce((acc, key) => acc + (Number(b[key]) || 0), 0);
        return sumB - sumA;
      });

    } else {
      // No sub-grouping (single series)
      // Group by the main dimension to avoid duplicate X-axis tick marks
      const groupsMap = new Map<string, { sum: number, count: number }>();
      chartDataRaw.forEach(d => {
        const mainVal = String(d[chartGroupBy] || 'Ismeretlen');
        const numVal = Number(d.value) || 0;
        if (!groupsMap.has(mainVal)) {
          groupsMap.set(mainVal, { sum: 0, count: 0 });
        }
        const g = groupsMap.get(mainVal)!;
        g.sum += numVal;
        g.count += 1;
      });

      chartData = Array.from(groupsMap.entries()).map(([mainVal, g]) => ({
        [chartGroupBy]: mainVal,
        value: Math.round((g.sum / g.count) * 100) / 100
      })).sort((a, b) => b.value - a.value);
    }
  }

  // Handle generating AI analysis
  const generateAnalysis = async () => {
    if (!selectedDataset) return;
    setIsGeneratingAnalysis(true);
    try {
      const res = await fetch('/api/analyze-dataset', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ datasetId: selectedDataset.id })
      });
      const data = await res.json();
      if (data.success) {
        // Update local state and the dataset in the list
        const updated = { ...selectedDataset, summary: data.summary };
        setSelectedDataset(updated);
        setDatasets(prev => prev.map(d => d.id === selectedDataset.id ? updated : d));
      } else {
        alert("Hiba: " + data.error);
      }
    } catch (e) {
      alert("Hiba az elemzés generálása során.");
    } finally {
      setIsGeneratingAnalysis(false);
    }
  };

  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100vw', 
      height: '100vh', 
      padding: isSidebarOpen ? '0.5rem 1.5rem' : '0.25rem 0.5rem', 
      boxSizing: 'border-box', 
      display: 'flex', 
      flexDirection: 'column', 
      overflow: 'hidden', 
      background: 'var(--bg-primary)',
      zIndex: 90 
    }}>
      <header className="glass-panel" style={{ 
        padding: isSidebarOpen ? '0.8rem var(--spacing-md)' : '0.5rem var(--spacing-md)', 
        margin: isSidebarOpen ? '0.4rem 0' : '0.2rem 0', 
        display: 'flex', 
        flexDirection: 'column', 
        gap: isSidebarOpen ? '0.6rem' : '0rem', 
        background: '#ffffff', 
        flexShrink: 0 
      }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          flexWrap: 'wrap', 
          gap: '1rem', 
          borderBottom: isSidebarOpen ? '1px solid #e1e4e1' : 'none', 
          paddingBottom: isSidebarOpen ? '0.6rem' : '0' 
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a href="/" className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <ArrowLeft size={18} /> Vissza a főoldalra
            </a>
            {!isSidebarOpen && (
              <button 
                onClick={() => setIsSidebarOpen(true)}
                className="btn-secondary" 
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', border: '1px solid var(--brand)', color: 'var(--brand)' }}
              >
                <PanelLeftOpen size={18} /> Mentett adatsorok
              </button>
            )}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ padding: '2px', background: '#ffffff', borderRadius: '4px', display: 'flex', alignItems: 'center' }}>
              <img src="/logo.png" alt="Szerencsejáték Zrt. Logo" style={{ height: '36px', objectFit: 'contain' }} />
            </div>
            <div style={{ background: 'rgba(59, 130, 246, 0.1)', color: 'var(--brand)', padding: '0.5rem 1rem', borderRadius: 'var(--radius-full)', border: '1px solid var(--brand)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, fontSize: '0.85rem' }}>
               <Database size={16} /> ADATBÁZIS & VIZUALIZÁCIÓ AKTÍV
            </div>
          </div>
        </div>

        {isSidebarOpen && (
          <div>
            <h1 style={{ fontSize: '1.6rem', marginBottom: 'var(--spacing-xs)', color: 'var(--text-primary)', textTransform: 'uppercase' }}>
              Dinamikus Statisztika Modul
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>
              Nyerj ki strukturált adatokat prezentációkból és készíts interaktív grafikonokat.
            </p>
          </div>
        )}
      </header>

      <div style={{ display: 'flex', gap: '1rem', flex: 1, minHeight: 0, overflow: 'hidden', paddingBottom: '0.5rem' }}>
        {/* Left Column: Data Gathering & Saved Datasets */}
        {isSidebarOpen && (
          <div style={{ width: '350px', display: 'flex', flexDirection: 'column', gap: '0.75rem', flexShrink: 0, overflow: 'hidden' }}>
            
            <form onSubmit={handleScrape} className="glass-card" style={{ padding: '1rem 1.2rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', flexShrink: 0 }}>
              <h2 style={{ margin: 0, fontSize: '1.05rem', display: 'flex', alignItems: 'center', gap: '0.5rem', textTransform: 'uppercase' }}>
                <LinkIcon size={18} color="var(--brand)" /> Új adat kinyerése
              </h2>
              <input
                type="url"
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                placeholder="https://indd.adobe.com/view/..."
                className="input-field"
                style={{ padding: '0.5rem 0.8rem', fontSize: '0.85rem' }}
                required
              />
              <button 
                type="submit" 
                className="btn-primary" 
                disabled={isProcessing || !urlInput.trim()} 
                style={{ padding: '0.5rem 0.8rem', fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', background: 'var(--gradient-brand)' }}
              >
                {isProcessing ? <Loader2 size={16} className="animate-spin" /> : <Zap size={16} />}
                Adatok Kinyerése (AI)
              </button>
              
              {error && (
                <div style={{ color: 'var(--error)', fontSize: '0.8rem', marginTop: '0.3rem', padding: '0.4rem', background: 'rgba(239, 68, 68, 0.1)', borderRadius: 'var(--radius-md)' }}>
                  {error}
                </div>
              )}
            </form>

          {activeJobs.length > 0 && (
            <div className="glass-panel" style={{ padding: '1rem', flexShrink: 0, background: 'rgba(59, 130, 246, 0.05)', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
              <h3 style={{ fontSize: '0.95rem', margin: '0 0 1rem 0', color: 'var(--brand)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Loader2 size={16} className="animate-spin" /> Folyamatban lévő feladatok
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {activeJobs.map(job => (
                  <div key={job.id} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '200px' }}>{job.url}</div>
                      <div style={{ display: 'flex', gap: '0.3rem' }}>
                        <button 
                          onClick={() => handleViewLiveJob(job.datasetId)}
                          disabled={!job.datasetId}
                          title="Élő vizualizáció"
                          style={{ background: 'var(--bg-tertiary)', border: 'none', borderRadius: '4px', padding: '4px', cursor: 'pointer', color: 'var(--brand)' }}
                        >
                          <Eye size={16} />
                        </button>
                        <button 
                          onClick={() => handleStopJob(job.id)}
                          title="Feldolgozás leállítása"
                          style={{ background: 'rgba(239, 68, 68, 0.1)', border: 'none', borderRadius: '4px', padding: '4px', cursor: 'pointer', color: 'var(--error)' }}
                        >
                          <Square size={16} fill="currentColor" />
                        </button>
                      </div>
                    </div>
                    <div style={{ background: 'var(--bg-tertiary)', height: '6px', borderRadius: '3px', overflow: 'hidden' }}>
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.min(100, (job.processedPages / 600) * 100)}%` }}
                        transition={{ duration: 0.5 }}
                        style={{ background: 'var(--brand)', height: '100%' }}
                      />
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'right' }}>
                      {job.processedPages} oldal feldolgozva...
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="glass-panel" style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
             <h2 style={{ padding: '0.8rem 1.2rem', margin: 0, fontSize: '1.05rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid var(--bg-tertiary)', flexShrink: 0, textTransform: 'uppercase' }}>
              <Database size={18} color="var(--accent-primary)" /> Lementett Adatkészletek
            </h2>
            <div style={{ overflowY: 'auto', flex: 1, padding: '0.75rem' }}>
              {loadingDatasets ? (
                <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}><Loader2 className="animate-spin" color="var(--brand)" /></div>
              ) : datasets.length === 0 ? (
                <p style={{ color: 'var(--text-muted)', textAlign: 'center', fontSize: '0.9rem', marginTop: '2rem' }}>Még nincs lementett adat.</p>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {datasets.map((d) => (
                    <div 
                      key={d.id} 
                      onClick={() => selectDataset(d)}
                      style={{ 
                        background: selectedDataset?.id === d.id ? 'var(--bg-secondary)' : 'transparent',
                        border: `1px solid ${selectedDataset?.id === d.id ? 'var(--brand)' : 'var(--bg-tertiary)'}`,
                        padding: '1rem', 
                        borderRadius: 'var(--radius-md)',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.5rem'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        {editingDatasetId === d.id ? (
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flex: 1 }} onClick={(e) => e.stopPropagation()}>
                            <input
                              type="text"
                              value={editingTitle}
                              onChange={(e) => setEditingTitle(e.target.value)}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter') handleRename(d.id);
                                if (e.key === 'Escape') setEditingDatasetId(null);
                              }}
                              className="input-field"
                              style={{ padding: '0.2rem 0.5rem', fontSize: '0.85rem', flex: 1 }}
                              autoFocus
                            />
                            <button 
                              onClick={() => handleRename(d.id)}
                              style={{ background: 'none', border: 'none', color: 'var(--success)', cursor: 'pointer', padding: '2px' }}
                              title="Mentés"
                            >
                              <Check size={16} />
                            </button>
                            <button 
                              onClick={() => setEditingDatasetId(null)}
                              style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: '2px' }}
                              title="Mégsem"
                            >
                              <X size={16} />
                            </button>
                          </div>
                        ) : (
                          <>
                            <h4 style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-primary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '200px' }} title={d.title}>
                              {d.title}
                            </h4>
                            <div style={{ display: 'flex', gap: '0.4rem' }}>
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setEditingDatasetId(d.id);
                                  setEditingTitle(d.title);
                                }} 
                                style={{ background: 'none', border: 'none', color: 'var(--brand)', cursor: 'pointer', padding: '2px' }}
                                title="Név módosítása"
                              >
                                <Edit2 size={16} />
                              </button>
                              <button onClick={(e) => toggleVisibility(e, d.id, d.visibility)} style={{ background: 'none', border: 'none', color: d.visibility === 'shared' ? 'var(--success)' : 'var(--text-muted)', cursor: 'pointer', padding: '2px' }} title={d.visibility === 'shared' ? "Közös – kattints, hogy privát legyen" : "Privát – kattints a közösbe osztáshoz"}>
                                {d.visibility === 'shared' ? <Users size={16} /> : <Lock size={16} />}
                              </button>
                              <button onClick={(e) => deleteDataset(e, d.id)} style={{ background: 'none', border: 'none', color: 'var(--error)', cursor: 'pointer', padding: '2px' }} title="Törlés">
                                <Trash2 size={16} />
                              </button>
                            </div>
                          </>
                        )}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        {new Date(d.createdAt).toLocaleDateString('hu-HU')} • Forrás link
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        )}

        {/* Right Column: Visualization Dashboard */}
        <div className="glass-panel" style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          {selectedDataset ? (
            <>
              <div style={{ padding: isSidebarOpen ? '1.5rem' : '0.8rem 1.2rem', borderBottom: '1px solid var(--bg-tertiary)', background: 'var(--bg-secondary)', flexShrink: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
                  {editingDatasetId === selectedDataset.id ? (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flex: 1, minWidth: '300px' }} onClick={(e) => e.stopPropagation()}>
                      {activeJobs.some(j => j.url === selectedDataset.sourceUrl) && (
                        <span style={{ fontSize: '1.4rem', color: 'var(--text-primary)', textTransform: 'uppercase', fontFamily: 'var(--font-display)', fontWeight: 700 }}>
                          Elemzés alatt: 
                        </span>
                      )}
                      <input
                        type="text"
                        value={editingTitle}
                        onChange={(e) => setEditingTitle(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') handleRename(selectedDataset.id);
                          if (e.key === 'Escape') setEditingDatasetId(null);
                        }}
                        className="input-field"
                        style={{ padding: '0.3rem 0.6rem', fontSize: '1.1rem', fontWeight: 600, flex: 1, maxWidth: '400px' }}
                        autoFocus
                      />
                      <button 
                        onClick={() => handleRename(selectedDataset.id)}
                        style={{ background: 'none', border: 'none', color: 'var(--success)', cursor: 'pointer', padding: '4px', display: 'flex', alignItems: 'center' }}
                        title="Mentés"
                      >
                        <Check size={20} />
                      </button>
                      <button 
                        onClick={() => setEditingDatasetId(null)}
                        style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: '4px', display: 'flex', alignItems: 'center' }}
                        title="Mégsem"
                      >
                        <X size={20} />
                      </button>
                    </div>
                  ) : (
                    <h2 style={{ margin: 0, fontSize: isSidebarOpen ? '1.4rem' : '1.15rem', wordBreak: 'break-word', flex: 1, minWidth: '200px', display: 'flex', alignItems: 'center', gap: '0.5rem', textTransform: 'uppercase' }}>
                       {activeJobs.some(j => j.url === selectedDataset.sourceUrl) ? 'Elemzés alatt: ' : ''}
                       {selectedDataset.title}
                       <button 
                         onClick={() => {
                           setEditingDatasetId(selectedDataset.id);
                           setEditingTitle(selectedDataset.title);
                         }} 
                         style={{ background: 'none', border: 'none', color: 'var(--brand)', cursor: 'pointer', padding: '2px', display: 'inline-flex', alignItems: 'center' }}
                         title="Név módosítása"
                       >
                         <Edit2 size={18} />
                       </button>
                    </h2>
                  )}
                  <div style={{ display: 'flex', gap: '0.5rem', background: 'var(--bg-tertiary)', padding: '4px', borderRadius: 'var(--radius-md)', flexShrink: 0 }}>
                    <button 
                      onClick={() => setViewMode("table")}
                      style={{ padding: '0.5rem 1rem', border: 'none', background: viewMode === "table" ? 'white' : 'transparent', borderRadius: '4px', cursor: 'pointer', fontWeight: viewMode === "table" ? 600 : 400, boxShadow: viewMode === "table" ? '0 1px 3px rgba(0,0,0,0.1)' : 'none', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
                    >
                      <LayoutGrid size={16} /> Táblázat
                    </button>
                    <button 
                      onClick={() => setViewMode("chart")}
                      style={{ padding: '0.5rem 1rem', border: 'none', background: viewMode === "chart" ? 'white' : 'transparent', borderRadius: '4px', cursor: 'pointer', fontWeight: viewMode === "chart" ? 600 : 400, boxShadow: viewMode === "chart" ? '0 1px 3px rgba(0,0,0,0.1)' : 'none', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
                    >
                      <BarChartIcon size={16} /> Grafikon
                    </button>
                    <button 
                      onClick={() => setViewMode("analysis")}
                      style={{ padding: '0.5rem 1rem', border: 'none', background: viewMode === "analysis" ? 'white' : 'transparent', borderRadius: '4px', cursor: 'pointer', fontWeight: viewMode === "analysis" ? 600 : 400, boxShadow: viewMode === "analysis" ? '0 1px 3px rgba(0,0,0,0.1)' : 'none', display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--brand)' }}
                    >
                      <Zap size={16} /> AI Elemzés
                    </button>
                    
                    {isSidebarOpen ? (
                      <button 
                        onClick={() => setIsSidebarOpen(false)}
                        title="Teljes képernyő"
                        style={{ padding: '0.5rem 1rem', border: '1px solid #d1d5db', background: 'transparent', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem', marginLeft: 'auto', color: 'var(--text-secondary)' }}
                      >
                        <PanelLeftClose size={16} />
                        <span style={{ fontSize: '0.85rem' }}>Teljes Képernyő</span>
                      </button>
                    ) : (
                      <button 
                        onClick={() => setIsSidebarOpen(true)}
                        title="Oldalsáv megnyitása"
                        style={{ padding: '0.5rem 1rem', border: '1px solid var(--brand)', background: 'transparent', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem', marginLeft: 'auto', color: 'var(--brand)' }}
                      >
                        <PanelLeftOpen size={16} />
                        <span style={{ fontSize: '0.85rem' }}>Oldalsáv</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
              
              {viewMode === "table" && (
                <div style={{ flex: 1, padding: '1.5rem', overflowY: 'auto' }}>
                  {parsedData.length > 0 ? (
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', background: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                      <thead>
                        <tr style={{ background: 'var(--bg-secondary)' }}>
                          <th style={{ textAlign: 'left', padding: '1rem', color: 'var(--text-secondary)', borderBottom: '2px solid var(--bg-tertiary)' }}>Dia Címe</th>
                          <th style={{ textAlign: 'left', padding: '1rem', color: 'var(--text-secondary)', borderBottom: '2px solid var(--bg-tertiary)' }}>Év</th>
                          <th style={{ textAlign: 'left', padding: '1rem', color: 'var(--text-secondary)', borderBottom: '2px solid var(--bg-tertiary)' }}>Ország / Régió</th>
                          <th style={{ textAlign: 'left', padding: '1rem', color: 'var(--text-secondary)', borderBottom: '2px solid var(--bg-tertiary)' }}>Kategória / Entitás</th>
                          <th style={{ textAlign: 'left', padding: '1rem', color: 'var(--text-secondary)', borderBottom: '2px solid var(--bg-tertiary)' }}>Mutató (Metric)</th>
                          <th style={{ textAlign: 'right', padding: '1rem', color: 'var(--text-secondary)', borderBottom: '2px solid var(--bg-tertiary)' }}>Érték (Value)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {parsedData.map((d, i) => (
                          <tr key={i} style={{ borderBottom: '1px solid var(--bg-tertiary)', background: i % 2 === 0 ? 'white' : 'var(--bg-secondary)' }}>
                            <td style={{ padding: '0.8rem 1rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>{d.slideTitle || 'Ismeretlen Dia'}</td>
                            <td style={{ padding: '0.8rem 1rem', color: 'var(--text-secondary)' }}>{d.year}</td>
                            <td style={{ padding: '0.8rem 1rem', fontWeight: 600, color: 'var(--brand)' }}>{d.countryOrRegion}</td>
                            <td style={{ padding: '0.8rem 1rem', fontWeight: 500 }}>{d.category}</td>
                            <td style={{ padding: '0.8rem 1rem', color: 'var(--text-secondary)' }}>{d.metric}</td>
                            <td style={{ padding: '0.8rem 1rem', textAlign: 'right', fontWeight: 600, color: 'var(--brand)' }}>{d.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', gap: '1rem' }}>
                      <Loader2 size={32} className="animate-spin" opacity={0.5} />
                      <p>Az AI még nem talált strukturált grafikonokat vagy adatokat a diákon. Kérlek, várj...</p>
                    </div>
                  )}
                </div>
              )}
              
              {viewMode === "analysis" && (
                <div style={{ flex: 1, padding: '2rem', overflowY: 'auto', background: 'white' }}>
                  {!selectedDataset.summary ? (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: '1.5rem', textAlign: 'center', maxWidth: '500px', margin: '0 auto' }}>
                      <FileText size={64} style={{ opacity: 0.2, color: 'var(--brand)' }} />
                      <div>
                        <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>AI Vezetői Összefoglaló</h3>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                          Generálj egy mélyreható, professzionális elemzést a kinyert adatokból. Az AI megkeresi a trendeket, kiugró értékeket és összefüggéseket.
                        </p>
                        <button 
                          onClick={generateAnalysis}
                          disabled={isGeneratingAnalysis || parsedData.length === 0}
                          className="btn-primary"
                          style={{ padding: '0.8rem 1.5rem', fontSize: '1rem', width: '100%', justifyContent: 'center' }}
                        >
                          {isGeneratingAnalysis ? (
                            <><Loader2 size={18} className="animate-spin" /> Elemzés folyamatban (10-20 mp)...</>
                          ) : (
                            <><Zap size={18} /> Elemzés Generálása</>
                          )}
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="markdown-body" style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                      <ReactMarkdown>{selectedDataset.summary}</ReactMarkdown>
                    </div>
                  )}
                </div>
              )}
              
              {viewMode === "chart" && (
                <div style={{ flex: 1, padding: isSidebarOpen ? '1rem 2rem' : '0.5rem 1rem', display: 'flex', flexDirection: 'column', minHeight: 0, height: '100%', overflowY: 'auto' }}>
                  
                  {/* Compact Filter Panel */}
                  <div className="glass-panel" style={{ 
                    padding: isSidebarOpen ? '0.8rem 1.2rem' : '0.6rem 1rem', 
                    marginBottom: isSidebarOpen ? '1rem' : '0.6rem', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: isSidebarOpen ? '0.6rem' : '0.4rem', 
                    background: '#f9fbf7', 
                    border: '1px solid #e1e4e1',
                    borderRadius: 'var(--radius-md)',
                    flexShrink: 0
                  }}>
                    {/* Basic Controls Row */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                      <div style={{ display: 'flex', gap: isSidebarOpen ? '1.5rem' : '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
                        
                        {/* Csoportosítás */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>Csoportosítás:</span>
                          <div style={{ display: 'flex', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-md)', padding: '2px', border: '1px solid #dcdcdc' }}>
                            <button onClick={() => handleSetGroupBy("countryOrRegion")} style={{ padding: '0.25rem 0.6rem', fontSize: '0.8rem', border: 'none', borderRadius: '4px', cursor: 'pointer', background: chartGroupBy === "countryOrRegion" ? 'white' : 'transparent', fontWeight: chartGroupBy === "countryOrRegion" ? 600 : 400, boxShadow: chartGroupBy === "countryOrRegion" ? '0 1px 2px rgba(0,0,0,0.05)' : 'none' }}>Ország / Régió</button>
                            <button onClick={() => handleSetGroupBy("category")} style={{ padding: '0.25rem 0.6rem', fontSize: '0.8rem', border: 'none', borderRadius: '4px', cursor: 'pointer', background: chartGroupBy === "category" ? 'white' : 'transparent', fontWeight: chartGroupBy === "category" ? 600 : 400, boxShadow: chartGroupBy === "category" ? '0 1px 2px rgba(0,0,0,0.05)' : 'none' }}>Kategória</button>
                            <button onClick={() => handleSetGroupBy("year")} style={{ padding: '0.25rem 0.6rem', fontSize: '0.8rem', border: 'none', borderRadius: '4px', cursor: 'pointer', background: chartGroupBy === "year" ? 'white' : 'transparent', fontWeight: chartGroupBy === "year" ? 600 : 400, boxShadow: chartGroupBy === "year" ? '0 1px 2px rgba(0,0,0,0.05)' : 'none' }}>Év</button>
                          </div>
                        </div>

                        {/* Bontás (színes oszlopok) */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>Bontás (szín):</span>
                          <div style={{ display: 'flex', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-md)', padding: '2px', border: '1px solid #dcdcdc' }}>
                            <button 
                              onClick={() => setChartSubGroupBy("category")} 
                              style={{ padding: '0.25rem 0.6rem', fontSize: '0.8rem', border: 'none', borderRadius: '4px', cursor: 'pointer', background: chartSubGroupBy === "category" ? 'white' : 'transparent', fontWeight: chartSubGroupBy === "category" ? 600 : 400, boxShadow: chartSubGroupBy === "category" ? '0 1px 2px rgba(0,0,0,0.05)' : 'none', opacity: chartGroupBy === "category" ? 0.4 : 1 }}
                              disabled={chartGroupBy === "category"}
                            >
                              Kategória
                            </button>
                            <button 
                              onClick={() => setChartSubGroupBy("countryOrRegion")} 
                              style={{ padding: '0.25rem 0.6rem', fontSize: '0.8rem', border: 'none', borderRadius: '4px', cursor: 'pointer', background: chartSubGroupBy === "countryOrRegion" ? 'white' : 'transparent', fontWeight: chartSubGroupBy === "countryOrRegion" ? 600 : 400, boxShadow: chartSubGroupBy === "countryOrRegion" ? '0 1px 2px rgba(0,0,0,0.05)' : 'none', opacity: chartGroupBy === "countryOrRegion" ? 0.4 : 1 }}
                              disabled={chartGroupBy === "countryOrRegion"}
                            >
                              Ország / Régió
                            </button>
                            <button 
                              onClick={() => setChartSubGroupBy("year")} 
                              style={{ padding: '0.25rem 0.6rem', fontSize: '0.8rem', border: 'none', borderRadius: '4px', cursor: 'pointer', background: chartSubGroupBy === "year" ? 'white' : 'transparent', fontWeight: chartSubGroupBy === "year" ? 600 : 400, boxShadow: chartSubGroupBy === "year" ? '0 1px 2px rgba(0,0,0,0.05)' : 'none', opacity: chartGroupBy === "year" ? 0.4 : 1 }}
                              disabled={chartGroupBy === "year"}
                            >
                              Év
                            </button>
                            <button 
                              onClick={() => setChartSubGroupBy("none")} 
                              style={{ padding: '0.25rem 0.6rem', fontSize: '0.8rem', border: 'none', borderRadius: '4px', cursor: 'pointer', background: chartSubGroupBy === "none" ? 'white' : 'transparent', fontWeight: chartSubGroupBy === "none" ? 600 : 400, boxShadow: chartSubGroupBy === "none" ? '0 1px 2px rgba(0,0,0,0.05)' : 'none' }}
                            >
                              Nincs
                            </button>
                          </div>
                        </div>
                        
                        {/* Irány */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>Irány:</span>
                          <div style={{ display: 'flex', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-md)', padding: '2px', border: '1px solid #dcdcdc' }}>
                            <button onClick={() => setChartLayout("horizontal")} style={{ padding: '0.25rem 0.6rem', fontSize: '0.8rem', border: 'none', borderRadius: '4px', cursor: 'pointer', background: chartLayout === "horizontal" ? 'white' : 'transparent', fontWeight: chartLayout === "horizontal" ? 600 : 400, boxShadow: chartLayout === "horizontal" ? '0 1px 2px rgba(0,0,0,0.05)' : 'none' }}>Vízszintes</button>
                            <button onClick={() => setChartLayout("vertical")} style={{ padding: '0.25rem 0.6rem', fontSize: '0.8rem', border: 'none', borderRadius: '4px', cursor: 'pointer', background: chartLayout === "vertical" ? 'white' : 'transparent', fontWeight: chartLayout === "vertical" ? 600 : 400, boxShadow: chartLayout === "vertical" ? '0 1px 2px rgba(0,0,0,0.05)' : 'none' }}>Függőleges</button>
                          </div>
                        </div>

                        {/* Mutató */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>Mutató:</span>
                          <select 
                            value={selectedMetric} 
                            onChange={(e) => setSelectedMetric(e.target.value)}
                            className="input-field"
                            style={{ padding: '0.25rem 0.5rem', width: '180px', fontSize: '0.8rem', opacity: availableMetrics.length === 0 ? 0.5 : 1 }}
                            disabled={availableMetrics.length === 0}
                          >
                            {availableMetrics.length > 0 ? (
                              availableMetrics.map(m => <option key={m} value={m}>{m}</option>)
                            ) : (
                              <option value="">Várakozás adatokra...</option>
                            )}
                          </select>
                        </div>

                      </div>

                      {/* Advanced Filters Toggle Button */}
                      <button 
                        onClick={() => setShowFilters(!showFilters)}
                        className="btn-secondary"
                        style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: '0.4rem', 
                          padding: '0.3rem 0.75rem', 
                          fontSize: '0.8rem', 
                          borderColor: showFilters ? 'var(--brand)' : '#dcdcdc',
                          color: showFilters ? 'var(--brand)' : 'var(--text-primary)',
                          background: showFilters ? 'rgba(19, 34, 103, 0.05)' : '#ffffff'
                        }}
                      >
                        <Filter size={14} /> 
                        {showFilters ? "Szűrők elrejtése" : "Részletes szűrők"}
                        {(selectedYears.size !== availableYears.length || selectedCountries.size !== availableCountries.length || selectedCategories.size !== availableCategories.length) && (
                          <span style={{ 
                            background: 'var(--brand)', 
                            color: 'white', 
                            borderRadius: '50%', 
                            width: '16px', 
                            height: '16px', 
                            fontSize: '0.65rem', 
                            display: 'inline-flex', 
                            alignItems: 'center', 
                            justifyContent: 'center',
                            fontWeight: 'bold',
                            marginLeft: '0.2rem'
                          }}>!</span>
                        )}
                      </button>
                    </div>

                    {/* Advanced Filters Panel (Collapsible + Scrollable Pills) */}
                    {showFilters && (
                      <div style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                        gap: '1rem', 
                        paddingTop: '0.6rem', 
                        borderTop: '1px dashed #dcdcdc' 
                      }}>
                        {/* Year Filter */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', minWidth: '150px' }}>
                          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>Év / Időszak</span>
                          <div style={{ 
                            maxHeight: '65px', 
                            overflowY: 'auto', 
                            display: 'flex', 
                            flexWrap: 'wrap', 
                            gap: '0.3rem', 
                            padding: '4px',
                            border: '1px solid #e1e4e1',
                            borderRadius: '4px',
                            background: '#ffffff'
                          }}>
                            <button 
                               onClick={() => setSelectedYears(new Set(selectedYears.size === availableYears.length ? [] : availableYears))}
                               style={{ padding: '0.2rem 0.4rem', fontSize: '0.7rem', borderRadius: '4px', background: 'var(--bg-tertiary)', border: 'none', cursor: availableYears.length === 0 ? 'not-allowed' : 'pointer' }}
                               disabled={availableYears.length === 0}
                            >
                              {availableYears.length === 0 ? 'Nincs Adat' : selectedYears.size === availableYears.length ? 'Nincs' : 'Mind'}
                            </button>
                            {availableYears.map(yr => (
                              <button
                                key={yr}
                                onClick={() => toggleYear(yr)}
                                style={{
                                  padding: '0.2rem 0.4rem',
                                  fontSize: '0.7rem',
                                  borderRadius: '4px',
                                  background: selectedYears.has(yr) ? 'var(--brand)' : 'transparent',
                                  border: `1px solid ${selectedYears.has(yr) ? 'var(--brand)' : '#dcdcdc'}`,
                                  color: selectedYears.has(yr) ? 'white' : 'var(--text-secondary)',
                                  cursor: 'pointer'
                                }}
                              >
                                {yr}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Country Filter */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', minWidth: '150px' }}>
                          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>Országok / Régiók</span>
                          <div style={{ 
                            maxHeight: '65px', 
                            overflowY: 'auto', 
                            display: 'flex', 
                            flexWrap: 'wrap', 
                            gap: '0.3rem', 
                            padding: '4px',
                            border: '1px solid #e1e4e1',
                            borderRadius: '4px',
                            background: '#ffffff'
                          }}>
                            <button 
                               onClick={() => setSelectedCountries(new Set(selectedCountries.size === availableCountries.length ? [] : availableCountries))}
                               style={{ padding: '0.2rem 0.4rem', fontSize: '0.7rem', borderRadius: '4px', background: 'var(--bg-tertiary)', border: 'none', cursor: availableCountries.length === 0 ? 'not-allowed' : 'pointer' }}
                               disabled={availableCountries.length === 0}
                            >
                              {availableCountries.length === 0 ? 'Nincs Adat' : selectedCountries.size === availableCountries.length ? 'Nincs' : 'Mind'}
                            </button>
                            {availableCountries.map(country => (
                              <button
                                key={country}
                                onClick={() => toggleCountry(country)}
                                style={{
                                  padding: '0.2rem 0.4rem',
                                  fontSize: '0.7rem',
                                  borderRadius: '4px',
                                  background: selectedCountries.has(country) ? 'var(--brand)' : 'transparent',
                                  border: `1px solid ${selectedCountries.has(country) ? 'var(--brand)' : '#dcdcdc'}`,
                                  color: selectedCountries.has(country) ? 'white' : 'var(--text-secondary)',
                                  cursor: 'pointer'
                                }}
                              >
                                {country}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Category Filter */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', minWidth: '150px' }}>
                          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>Kategóriák / Entitások</span>
                          <div style={{ 
                            maxHeight: '65px', 
                            overflowY: 'auto', 
                            display: 'flex', 
                            flexWrap: 'wrap', 
                            gap: '0.3rem', 
                            padding: '4px',
                            border: '1px solid #e1e4e1',
                            borderRadius: '4px',
                            background: '#ffffff'
                          }}>
                            <button 
                               onClick={() => setSelectedCategories(new Set(selectedCategories.size === availableCategories.length ? [] : availableCategories))}
                               style={{ padding: '0.2rem 0.4rem', fontSize: '0.7rem', borderRadius: '4px', background: 'var(--bg-tertiary)', border: 'none', cursor: availableCategories.length === 0 ? 'not-allowed' : 'pointer' }}
                               disabled={availableCategories.length === 0}
                            >
                              {availableCategories.length === 0 ? 'Nincs Adat' : selectedCategories.size === availableCategories.length ? 'Nincs' : 'Mind'}
                            </button>
                            {availableCategories.map(cat => (
                              <button
                                key={cat}
                                onClick={() => toggleCategory(cat)}
                                style={{
                                  padding: '0.2rem 0.4rem',
                                  fontSize: '0.7rem',
                                  borderRadius: '4px',
                                  background: selectedCategories.has(cat) ? 'var(--brand)' : 'transparent',
                                  border: `1px solid ${selectedCategories.has(cat) ? 'var(--brand)' : '#dcdcdc'}`,
                                  color: selectedCategories.has(cat) ? 'white' : 'var(--text-secondary)',
                                  cursor: 'pointer'
                                }}
                              >
                                {cat}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Chart Container */}
                  <div style={{ flex: 1, minHeight: '380px', height: '100%', width: '100%', position: 'relative', marginTop: '0.5rem' }}>
                    {chartData.length > 0 ? (
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={chartData}
                          layout={chartLayout}
                          margin={{ top: 20, right: 30, left: chartLayout === 'vertical' ? 100 : 20, bottom: chartLayout === 'horizontal' ? 60 : 20 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" opacity={0.2} horizontal={chartLayout === 'horizontal'} vertical={chartLayout === 'vertical'} />
                          {chartLayout === 'horizontal' ? (
                            <>
                              <XAxis dataKey={chartGroupBy} angle={-45} textAnchor="end" height={80} tick={{ fill: 'var(--text-secondary)', fontSize: 12 }} />
                              <YAxis type="number" tick={{ fill: 'var(--text-secondary)' }} />
                            </>
                          ) : (
                            <>
                              <XAxis type="number" tick={{ fill: 'var(--text-secondary)' }} />
                              <YAxis dataKey={chartGroupBy} type="category" width={100} tick={{ fill: 'var(--text-secondary)', fontSize: 12 }} />
                            </>
                          )}
                          <Tooltip 
                            contentStyle={{ 
                              borderRadius: '8px', 
                              border: '1px solid var(--bg-tertiary)', 
                              boxShadow: '0 10px 30px rgba(0,0,0,0.08)', 
                              zIndex: 1000,
                              background: '#ffffff'
                            }}
                            cursor={{ fill: 'rgba(19, 34, 103, 0.03)' }}
                            labelFormatter={(label) => {
                              const groupName = chartGroupBy === 'category' ? 'Kategória' : chartGroupBy === 'countryOrRegion' ? 'Ország/Régió' : 'Év';
                              return `${groupName}: ${label}`;
                            }}
                          />
                          <Legend 
                            wrapperStyle={{ paddingTop: '10px' }}
                            formatter={(value) => <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: 500 }}>{value}</span>}
                          />
                          {subGroupKeys.length > 0 ? (
                            subGroupKeys.map((key, index) => (
                              <Bar 
                                key={key} 
                                dataKey={key} 
                                name={key} 
                                fill={COLORS[index % COLORS.length]} 
                                radius={chartLayout === 'horizontal' ? [4, 4, 0, 0] : [0, 4, 4, 0]}
                              />
                            ))
                          ) : (
                            <Bar dataKey="value" name={selectedMetric} radius={chartLayout === 'horizontal' ? [4, 4, 0, 0] : [0, 4, 4, 0]}>
                              {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                              ))}
                            </Bar>
                          )}
                        </BarChart>
                      </ResponsiveContainer>
                    ) : (
                      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', gap: '1rem', minHeight: '300px' }}>
                        {parsedData.length === 0 ? (
                           <>
                             <Loader2 size={32} className="animate-spin" opacity={0.5} />
                             <p>Az AI még keresi a kinyerhető adatokat a diákon. Kérlek, várj...</p>
                           </>
                        ) : (
                           <p>Nincs megjeleníthető adat a kiválasztott szűrők alapján.</p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </>
          ) : (
             <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', gap: '1rem' }}>
               <BarChartIcon size={64} style={{ opacity: 0.2 }} />
               <p style={{ fontSize: '1.2rem' }}>Kérlek, válassz ki egy adatkészletet a bal oldali listából!</p>
               {!isSidebarOpen && (
                 <button 
                   onClick={() => setIsSidebarOpen(true)}
                   className="btn-primary"
                   style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                 >
                   <PanelLeftOpen size={18} />
                   Oldalsáv Megnyitása
                 </button>
               )}
             </div>
          )}
        </div>
      </div>
    </div>
  );
}
