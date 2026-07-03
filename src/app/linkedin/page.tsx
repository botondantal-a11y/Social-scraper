"use client";

import React, { useState } from "react";
import { Search, Loader2, User, Briefcase, GraduationCap, Code, ThumbsUp, Star, Globe, Cpu, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Script from "next/script";

export default function LinkedinPage() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [profile, setProfile] = useState<any>(null);
  const [progress, setProgress] = useState<{ current: number, total: number, currentUrl: string } | null>(null);

  const handleScrape = async (e: React.FormEvent) => {
    e.preventDefault();
    const urls = url.split(/[\n,]+/).map(u => u.trim()).filter(u => u.includes("linkedin.com/in/"));
    
    if (urls.length === 0) {
      setError("Kérlek adj meg legalább egy érvényes LinkedIn profil URL-t.");
      return;
    }

    setLoading(true);
    setError(null);
    setProfile(null);

    let lastProfile = null;
    let successCount = 0;

    for (let i = 0; i < urls.length; i++) {
      const currentUrl = urls[i];
      setProgress({ current: i + 1, total: urls.length, currentUrl });
      
      try {
        const res = await fetch("/api/linkedin/scrape", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url: currentUrl }),
        });
        const data = await res.json();
        
        if (data.success) {
          lastProfile = data.data;
          successCount++;
        } else {
          console.error(`Error scraping ${currentUrl}:`, data.error);
        }
      } catch (err: any) {
        console.error(`Network error scraping ${currentUrl}:`, err.message);
      }
    }

    setLoading(false);
    setProgress(null);
    
    if (successCount === 0) {
      setError("Egyetlen profilt sem sikerült letölteni. Kérlek ellenőrizd az URL-eket.");
    } else if (successCount < urls.length) {
      setError(`Sikeresen letöltöttünk ${successCount} profilt, de ${urls.length - successCount} hibára futott.`);
      setProfile(lastProfile);
    } else {
      setProfile(lastProfile);
    }
  };

  const handleDownloadPdf = () => {
    const element = document.getElementById('cv-content');
    if (typeof window !== 'undefined' && (window as any).html2pdf) {
      const opt = {
        margin:       10,
        filename:     `${profile?.name?.replace(/\s+/g, '_') || 'Profil'}_Oneletrajz.pdf`,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };
      (window as any).html2pdf().set(opt).from(element).save();
    } else {
      window.print();
    }
  };

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '1.5rem var(--spacing-lg)' }}>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js" strategy="lazyOnload" />
      <header className="glass-panel" style={{ padding: '1.5rem var(--spacing-lg)', marginBottom: 'var(--spacing-xl)', display: 'flex', flexDirection: 'column', gap: '1.5rem', background: '#ffffff' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h1 style={{ margin: 0, fontSize: '1.8rem', color: '#0077b5', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <User size={28} /> LinkedIn Profil Elemző
            </h1>
            <p style={{ margin: '0.5rem 0 0 0', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Mélyreható adatkinyerés teljes tapasztalattal, skillekkel és leírásokkal.
            </p>
          </div>
          <a href="/" className="btn-secondary" style={{ textDecoration: 'none' }}>Vissza a Főoldalra</a>
        </div>
      </header>

      <form onSubmit={handleScrape} className="glass-card" style={{ padding: 'var(--spacing-lg)', marginBottom: 'var(--spacing-xl)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
        <div style={{ position: 'relative' }}>
          <textarea
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Több URL-t is megadhatsz, soronként vagy vesszővel elválasztva...&#10;https://www.linkedin.com/in/johndoe/&#10;https://www.linkedin.com/in/janedoe/"
            className="input-field"
            style={{ padding: '1rem', minHeight: '100px', resize: 'vertical' }}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            * Az első indításkor bejelentkezést kérhet a megnyíló böngésző ablak!
          </div>
          <button type="submit" className="btn-primary" disabled={loading || !url.trim()} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#0077b5' }}>
            {loading ? <Loader2 size={18} className="animate-spin" /> : <Search size={18} />}
            <span>Profil(ok) Elemzése</span>
          </button>
        </div>
      </form>

      {error && (
        <div style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid var(--error)', padding: '1rem', borderRadius: 'var(--radius-md)', color: 'var(--error)', marginBottom: '1.5rem' }}>
          <strong>Info/Hiba:</strong> {error}
        </div>
      )}

      {loading && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '3rem', gap: '1rem' }}>
          <Loader2 size={40} className="animate-spin" color="#0077b5" />
          {progress ? (
            <>
              <h3 style={{ color: 'var(--text-primary)' }}>Profil feldolgozása folyamatban ({progress.current} / {progress.total})</h3>
              <p style={{ color: 'var(--text-muted)', textAlign: 'center', wordBreak: 'break-all' }}>Épp letöltés alatt: {progress.currentUrl}</p>
            </>
          ) : (
            <h3 style={{ color: 'var(--text-primary)' }}>A robot dolgozik a háttérben...</h3>
          )}
          <p style={{ color: 'var(--text-muted)' }}>Ez a folyamat profilonként 15-20 másodpercet is igénybe vehet.</p>
        </div>
      )}

      <AnimatePresence>
        {!loading && profile && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card" style={{ padding: '0', overflow: 'hidden' }}>
            <div id="cv-content" style={{ background: '#ffffff' }}>
            {/* Fejléc */}
            <div style={{ background: 'var(--bg-secondary)', padding: '2rem', display: 'flex', gap: '1.5rem', alignItems: 'center', borderBottom: '1px solid var(--bg-tertiary)' }}>
              {profile.profilePicture ? (
                <img src={profile.profilePicture} alt={profile.name} style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', border: '4px solid #fff', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }} />
              ) : (
                <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: 'var(--bg-tertiary)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '4px solid #fff' }}>
                  <User size={40} color="var(--text-muted)" />
                </div>
              )}
              <div style={{ width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <h2 style={{ margin: '0 0 0.5rem 0', fontSize: '2rem', color: 'var(--text-primary)' }}>{profile.name}</h2>
                  <button 
                    onClick={handleDownloadPdf}
                    className="btn-secondary print-hide"
                    style={{ fontSize: '0.85rem', padding: '0.4rem 0.8rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
                  >
                    <Download size={14} /> Mentés Önéletrajzként (PDF)
                  </button>
                </div>
                <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem', color: 'var(--text-secondary)', fontWeight: 400 }}>{profile.headline}</h3>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Globe size={14} /> {profile.location}
                  </span>
                  {profile.connections && (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <User size={14} /> {profile.connections} ismerős
                    </span>
                  )}
                </p>
              </div>
            </div>

            <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              
              {/* About */}
              {profile.about && (
                <section>
                  <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', borderBottom: '1px solid var(--bg-tertiary)', paddingBottom: '0.5rem' }}>
                    <User size={18} color="#0077b5" /> Bemutatkozás
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, whiteSpace: 'pre-wrap', fontSize: '0.95rem' }}>
                    {profile.about}
                  </p>
                </section>
              )}

              {/* Top Skills */}
              {profile.topSkills && profile.topSkills.length > 0 && (
                <section>
                  <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', borderBottom: '1px solid var(--bg-tertiary)', paddingBottom: '0.5rem' }}>
                    <Star size={18} color="#f59e0b" /> Kiemelt Készségek (Top Skills)
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {profile.topSkills.map((skill: string, i: number) => (
                      <span key={i} style={{ background: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b', padding: '0.3rem 0.8rem', borderRadius: '1rem', fontSize: '0.85rem', fontWeight: 600 }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </section>
              )}

              {/* Tapasztalat */}
              {profile.experience && profile.experience.length > 0 && (
                <section>
                  <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', borderBottom: '1px solid var(--bg-tertiary)', paddingBottom: '0.5rem' }}>
                    <Briefcase size={18} color="#0077b5" /> Tapasztalat
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {profile.experience.map((exp: any, i: number) => (
                      <div key={i} style={{ paddingLeft: '1rem', borderLeft: '2px solid var(--bg-tertiary)' }}>
                        <h4 style={{ margin: '0 0 0.2rem 0', fontSize: '1.05rem', color: 'var(--text-primary)' }}>{exp.title}</h4>
                        <div style={{ color: 'var(--text-secondary)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.2rem' }}>{exp.company}</div>
                        <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>{exp.date}</div>
                        {exp.description && (
                          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.5, whiteSpace: 'pre-wrap', marginTop: '0.5rem' }}>
                            {exp.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Tanulmányok */}
              {profile.education && profile.education.length > 0 && (
                <section>
                  <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', borderBottom: '1px solid var(--bg-tertiary)', paddingBottom: '0.5rem' }}>
                    <GraduationCap size={18} color="#0077b5" /> Tanulmányok
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {profile.education.map((edu: any, i: number) => (
                      <div key={i} style={{ paddingLeft: '1rem', borderLeft: '2px solid var(--bg-tertiary)' }}>
                        <h4 style={{ margin: '0 0 0.2rem 0', fontSize: '1.05rem', color: 'var(--text-primary)' }}>{edu.school}</h4>
                        <div style={{ color: 'var(--text-secondary)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.2rem' }}>{edu.degree}</div>
                        <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>{edu.date}</div>
                        {edu.description && (
                          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.5, whiteSpace: 'pre-wrap', marginTop: '0.5rem' }}>
                            {edu.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Készségek (All Skills) */}
              {profile.skills && profile.skills.length > 0 && (
                <section>
                  <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', borderBottom: '1px solid var(--bg-tertiary)', paddingBottom: '0.5rem' }}>
                    <Cpu size={18} color="#0077b5" /> Összes Készség
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {profile.skills.map((skill: string, i: number) => (
                      <span key={i} style={{ background: 'var(--bg-tertiary)', color: 'var(--text-primary)', padding: '0.3rem 0.8rem', borderRadius: '4px', fontSize: '0.85rem' }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </section>
              )}

              {/* Projektek */}
              {profile.projects && profile.projects.length > 0 && (
                <section>
                  <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', borderBottom: '1px solid var(--bg-tertiary)', paddingBottom: '0.5rem' }}>
                    <Code size={18} color="#0077b5" /> Projektek
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {profile.projects.map((proj: any, i: number) => (
                      <div key={i}>
                        <h4 style={{ margin: '0 0 0.2rem 0', fontSize: '1.05rem', color: 'var(--text-primary)' }}>{proj.title}</h4>
                        <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>{proj.date}</div>
                        {proj.description && (
                          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.5, whiteSpace: 'pre-wrap', marginTop: '0.5rem' }}>
                            {proj.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Ajánlások */}
              {profile.recommendations && profile.recommendations.length > 0 && (
                <section>
                  <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', borderBottom: '1px solid var(--bg-tertiary)', paddingBottom: '0.5rem' }}>
                    <ThumbsUp size={18} color="#0077b5" /> Ajánlások
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {profile.recommendations.map((rec: any, i: number) => (
                      <div key={i} style={{ background: 'var(--bg-secondary)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                          <h4 style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-primary)' }}>{rec.name}</h4>
                          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{rec.relation}</span>
                        </div>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontStyle: 'italic', lineHeight: 1.5, margin: 0 }}>
                          "{rec.text}"
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Nyelvek & Érdeklődés */}
              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                {profile.languages && profile.languages.length > 0 && (
                  <section style={{ flex: 1, minWidth: '200px' }}>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', borderBottom: '1px solid var(--bg-tertiary)', paddingBottom: '0.5rem' }}>
                      <Globe size={18} color="#0077b5" /> Nyelvtudás
                    </h3>
                    <ul style={{ margin: 0, paddingLeft: '1.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                      {profile.languages.map((lang: string, i: number) => (
                        <li key={i} style={{ marginBottom: '0.3rem' }}>{lang}</li>
                      ))}
                    </ul>
                  </section>
                )}

                {profile.interests && profile.interests.length > 0 && (
                  <section style={{ flex: 1, minWidth: '200px' }}>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', borderBottom: '1px solid var(--bg-tertiary)', paddingBottom: '0.5rem' }}>
                      Érdeklődési körök
                    </h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {profile.interests.map((interest: string, i: number) => (
                        <span key={i} style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.8rem', border: '1px solid var(--bg-tertiary)' }}>
                          {interest}
                        </span>
                      ))}
                    </div>
                  </section>
                )}
              </div>
            </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
