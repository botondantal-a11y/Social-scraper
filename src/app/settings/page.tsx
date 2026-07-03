"use client";

import { useState, useEffect } from "react";
import { Shield, Globe, Camera, Loader2, CheckCircle2, ArrowLeft, Settings as SettingsIcon, Save, Key, Database, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

export default function Settings() {
  const [isLoggingInFB, setIsLoggingInFB] = useState(false);
  const [isLoggingInIG, setIsLoggingInIG] = useState(false);
  const [status, setStatus] = useState<{ facebook: boolean; instagram: boolean }>({ facebook: false, instagram: false });

  const [apifyToken, setApifyToken] = useState('');
  const [openaiKey, setOpenaiKey] = useState('');
  const [elevenlabsKey, setElevenlabsKey] = useState('');
  const [geminiKey, setGeminiKey] = useState('');
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const [fb, ig] = await Promise.all([
          fetch('/api/platform-auth?platform=facebook').then(r => r.json()),
          fetch('/api/platform-auth?platform=instagram').then(r => r.json())
        ]);
        setStatus({ facebook: fb.authenticated, instagram: ig.authenticated });
      } catch (err) {
        console.error("Failed to fetch auth status", err);
      }
    };
    checkStatus();

    // Load System Settings
    fetch('/api/settings')
      .then(res => res.json())
      .then(data => {
        if (data.APIFY_API_TOKEN) setApifyToken(data.APIFY_API_TOKEN);
        if (data.OPENAI_API_KEY) setOpenaiKey(data.OPENAI_API_KEY);
        if (data.ELEVENLABS_API_KEY) setElevenlabsKey(data.ELEVENLABS_API_KEY);
        if (data.GEMINI_API_KEY) setGeminiKey(data.GEMINI_API_KEY);
      });
  }, []);

  const handleLogin = async (platform: 'facebook' | 'instagram') => {
    if (platform === 'facebook') setIsLoggingInFB(true);
    else setIsLoggingInIG(true);

    try {
      const response = await fetch('/api/platform-auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ platform })
      });
      
      const data = await response.json();
      if (!data.success) throw new Error(data.error);

      setStatus(prev => ({ ...prev, [platform]: true }));
    } catch (err) {
      alert(`Hiba a ${platform} bejelentkezés során.`);
    } finally {
      if (platform === 'facebook') setIsLoggingInFB(false);
      else setIsLoggingInIG(false);
    }
  };

  const handleSaveSetting = async (key: string, value: string) => {
    setSaving(true);
    setMessage('');
    try {
      const res = await fetch('/api/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key, value })
      });
      if (res.ok) {
        setMessage('Sikeresen mentve!');
        setTimeout(() => setMessage(''), 3000);
      } else {
        setMessage('Hiba a mentés során.');
      }
    } catch (e) {
      setMessage('Hálózati hiba.');
    }
    setSaving(false);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', paddingBottom: '4rem' }}>
      <header style={{ marginBottom: 'var(--spacing-xl)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <a href="/" className="btn-secondary" style={{ padding: '0.5rem', borderRadius: '50%' }}>
          <ArrowLeft size={20} />
        </a>
        <h1 style={{ margin: 0 }}>Beállítások</h1>
      </header>

      {message && (
        <div style={{ background: 'var(--success)', color: '#fff', padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '1rem' }}>
          {message}
        </div>
      )}

      {/* Local Browser Auth (Old way) */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="glass-card" style={{ padding: 'var(--spacing-lg)', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: 'var(--spacing-lg)', color: 'var(--warning)' }}>
          <Shield size={24} />
          <div>
            <h2 style={{ fontSize: '1.2rem', margin: 0 }}>Helyi Fiók Hitelesítés</h2>
            <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>A beépített böngésző robot bejelentkezése.</p>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
          {/* Facebook */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 'var(--spacing-md)', background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius-md)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Globe size={24} color="#1877F2" />
              <span style={{ fontWeight: 500 }}>Facebook Kapcsolat</span>
            </div>
            
            {status.facebook ? (
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--success)', fontWeight: 500 }}>
                <CheckCircle2 size={18} /> Csatlakoztatva
              </span>
            ) : (
              <button onClick={() => handleLogin('facebook')} disabled={isLoggingInFB} className="btn-primary" style={{ padding: '0.5rem 1rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                {isLoggingInFB ? <Loader2 className="animate-spin" size={16} /> : <span>Bejelentkezés Ablak</span>}
              </button>
            )}
          </div>

          {/* Instagram */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 'var(--spacing-md)', background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius-md)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Camera size={24} color="#E1306C" />
              <span style={{ fontWeight: 500 }}>Instagram Kapcsolat</span>
            </div>
            
            {status.instagram ? (
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--success)', fontWeight: 500 }}>
                <CheckCircle2 size={18} /> Csatlakoztatva
              </span>
            ) : (
              <button onClick={() => handleLogin('instagram')} disabled={isLoggingInIG} className="btn-primary" style={{ padding: '0.5rem 1rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                {isLoggingInIG ? <Loader2 className="animate-spin" size={16} /> : <span>Bejelentkezés Ablak</span>}
              </button>
            )}
          </div>
        </div>
      </motion.div>

      {/* API Keys Configuration */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card" style={{ padding: 'var(--spacing-lg)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: 'var(--spacing-lg)', color: 'var(--primary)' }}>
          <SettingsIcon size={24} />
          <div>
            <h2 style={{ fontSize: '1.2rem', margin: 0 }}>Rendszer API Kulcsok</h2>
            <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>A felhős szolgáltatások integrációjának beállításai.</p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
          
          {/* Apify */}
          <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <Globe size={20} color="#8b5cf6" />
              <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Apify (Social Scraper)</h3>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>Facebook, Insta, TikTok felhős letöltése</p>
            <input type="password" value={apifyToken} onChange={e => setApifyToken(e.target.value)} placeholder="apify_api_..." className="input-field" style={{ width: '100%', marginBottom: '1rem' }} />
            <button onClick={() => handleSaveSetting('APIFY_API_TOKEN', apifyToken)} disabled={saving} className="btn-primary" style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
              <Save size={16} /> Mentés
            </button>
          </div>

          {/* OpenAI */}
          <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <Database size={20} color="#10b981" />
              <h3 style={{ margin: 0, fontSize: '1.1rem' }}>OpenAI</h3>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>Podcast TTS (szövegfelolvasó) funkcióhoz</p>
            <input type="password" value={openaiKey} onChange={e => setOpenaiKey(e.target.value)} placeholder="sk-proj-..." className="input-field" style={{ width: '100%', marginBottom: '1rem' }} />
            <button onClick={() => handleSaveSetting('OPENAI_API_KEY', openaiKey)} disabled={saving} className="btn-primary" style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
              <Save size={16} /> Mentés
            </button>
          </div>

          {/* Gemini */}
          <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <Key size={20} color="#f59e0b" />
              <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Google Gemini</h3>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>AI motor cikkösszefoglaláshoz</p>
            <input type="password" value={geminiKey} onChange={e => setGeminiKey(e.target.value)} placeholder="AIza..." className="input-field" style={{ width: '100%', marginBottom: '1rem' }} />
            <button onClick={() => handleSaveSetting('GEMINI_API_KEY', geminiKey)} disabled={saving} className="btn-primary" style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
              <Save size={16} /> Mentés
            </button>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
