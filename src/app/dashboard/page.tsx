"use client";

import React, { useEffect, useState } from "react";
import { Users, Briefcase, GraduationCap, ArrowRight, Search, BarChart3, ChevronDown, ChevronUp, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

export default function DashboardPage() {
  const [profiles, setProfiles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProfile, setSelectedProfile] = useState<any | null>(null);

  useEffect(() => {
    fetch("/api/profiles")
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setProfiles(data.data);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleDeleteProfile = async (url: string) => {
    if (!confirm("Biztosan törölni szeretnéd ezt a profilt?")) return;
    
    try {
      const res = await fetch("/api/profiles", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url })
      });
      const data = await res.json();
      if (data.success) {
        setProfiles(prev => prev.filter(p => p.url !== url));
        if (selectedProfile?.url === url) setSelectedProfile(null);
      } else {
        alert(data.error || "Hiba történt a törlés során.");
      }
    } catch (error) {
      alert("Hálózati hiba a törlés során.");
    }
  };

  // --- Statisztika Számítások ---

  const flowStats: { from: Record<string, number>, to: Record<string, number> } = { from: {}, to: {} };
  const educationStats: Record<string, number> = {};
  const majorStats: Record<string, number> = {};

  profiles.forEach(p => {
    // Oktatás
    if (p.education) {
      const uniqueSchools = new Set<string>();
      const uniqueMajors = new Set<string>();
      p.education.forEach((edu: any) => {
        const school = edu.school.toLowerCase();
        if (school && school.length > 3) {
          const key = school.split('-')[0].split(',')[0].trim();
          uniqueSchools.add(key);
        }
        
        const degreeStr = edu.degree || '';
        if (degreeStr.length > 3) {
          // Kiszedjük a vessző utáni részt (pl. "Master's degree, Public Relations" -> "Public Relations")
          let major = degreeStr.split(',').pop()?.trim() || degreeStr;
          // Ha nem volt vessző, vagy valami bennmaradt, kitisztítjuk a felesleget
          major = major.replace(/master's degree/gi, '')
                       .replace(/bachelor's degree/gi, '')
                       .replace(/bsc/gi, '')
                       .replace(/msc/gi, '').trim();
          if (major.length > 3) {
            // Nagybetűsítjük az elejét, hogy szép legyen
            major = major.charAt(0).toUpperCase() + major.slice(1).toLowerCase();
            uniqueMajors.add(major);
          }
        }
      });
      uniqueSchools.forEach(key => {
        educationStats[key] = (educationStats[key] || 0) + 1;
      });
      uniqueMajors.forEach(key => {
        majorStats[key] = (majorStats[key] || 0) + 1;
      });
    }

    // Tapasztalat áramlás
    if (p.experience && p.experience.length > 0) {
      const szrtIndex = p.experience.findIndex((e: any) => e.company.toLowerCase().includes('szerencsejáték') || e.company.toLowerCase().includes('tippmix'));
      
      if (szrtIndex !== -1) {
        // Honnan jött? (Időben a Szerencsejáték ELŐTTI munkahely, ami a tömbben UTÁNA jön, mert csökkenő sorrendben van)
        if (szrtIndex + 1 < p.experience.length) {
          const prevCompany = p.experience[szrtIndex + 1].company.split('·')[0].trim();
          flowStats.from[prevCompany] = (flowStats.from[prevCompany] || 0) + 1;
        }
        // Hova ment? (Időben a Szerencsejáték UTÁNI munkahely, ami a tömbben ELŐTTE jön)
        if (szrtIndex - 1 >= 0) {
          const nextCompany = p.experience[szrtIndex - 1].company.split('·')[0].trim();
          flowStats.to[nextCompany] = (flowStats.to[nextCompany] || 0) + 1;
        }
      }
    }
  });

  const topFrom = Object.entries(flowStats.from).sort((a, b) => b[1] - a[1]).slice(0, 5).map(x => ({ name: x[0], count: x[1] }));
  const topTo = Object.entries(flowStats.to).sort((a, b) => b[1] - a[1]).slice(0, 5).map(x => ({ name: x[0], count: x[1] }));
  const topSchools = Object.entries(educationStats).sort((a, b) => b[1] - a[1]).slice(0, 5).map(x => ({ name: x[0], value: x[1] }));
  const topMajors = Object.entries(majorStats).sort((a, b) => b[1] - a[1]).slice(0, 5).map(x => ({ name: x[0], value: x[1] }));

  const COLORS = ['#82c341', '#132267', '#f59e0b', '#0077b5', '#ef4444'];

  const filteredProfiles = profiles.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.headline?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1.5rem var(--spacing-lg)' }}>
      <header className="glass-panel" style={{ padding: '1.5rem var(--spacing-lg)', marginBottom: 'var(--spacing-xl)', display: 'flex', flexDirection: 'column', gap: '1.5rem', background: '#ffffff' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h1 style={{ margin: 0, fontSize: '1.8rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <BarChart3 size={28} color="var(--accent-primary)" /> Profil Dashboard & Statisztika
            </h1>
            <p style={{ margin: '0.5rem 0 0 0', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Az elmentett profilok összesített munkaerő-áramlási és végzettségi statisztikái.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="/linkedin" className="btn-primary" style={{ textDecoration: 'none' }}>+ Új Profil Hozzáadása</a>
            <a href="/" className="btn-secondary" style={{ textDecoration: 'none' }}>Vissza</a>
          </div>
        </div>
      </header>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '3rem' }}>Betöltés...</div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* Statisztikai Kártyák */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            <div className="glass-card" style={{ padding: '1.5rem' }}>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}><ArrowRight size={18} /> Honnan jönnek? (Top 5)</h3>
              <div style={{ height: '200px' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={topFrom} layout="vertical" margin={{ left: 50 }}>
                    <XAxis type="number" hide />
                    <YAxis dataKey="name" type="category" width={100} tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <Bar dataKey="count" fill="#132267" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="glass-card" style={{ padding: '1.5rem' }}>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}><ArrowRight size={18} /> Hova mennek tovább? (Top 5)</h3>
              <div style={{ height: '200px' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={topTo} layout="vertical" margin={{ left: 50 }}>
                    <XAxis type="number" hide />
                    <YAxis dataKey="name" type="category" width={100} tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <Bar dataKey="count" fill="#82c341" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="glass-card" style={{ padding: '1.5rem' }}>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}><GraduationCap size={18} /> Leggyakoribb Végzettségek</h3>
              <div style={{ height: '200px' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={topSchools} cx="50%" cy="50%" innerRadius={40} outerRadius={80} paddingAngle={5} dataKey="value">
                      {topSchools.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="glass-card" style={{ padding: '1.5rem' }}>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}><GraduationCap size={18} /> Leggyakoribb Szakok</h3>
              <div style={{ height: '200px' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={topMajors} cx="50%" cy="50%" innerRadius={40} outerRadius={80} paddingAngle={5} dataKey="value">
                      {topMajors.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[(index + 2) % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Profil Böngésző */}
          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: 0 }}><Users size={24} /> Mentett Profilok ({filteredProfiles.length})</h2>
              <div style={{ position: 'relative', width: '300px' }}>
                <input 
                  type="text" 
                  placeholder="Keresés név vagy pozíció alapján..." 
                  value={searchTerm} 
                  onChange={e => setSearchTerm(e.target.value)}
                  className="input-field" 
                  style={{ paddingRight: '2rem' }}
                />
                <Search size={18} style={{ position: 'absolute', right: '10px', top: '12px', color: '#999' }} />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem' }}>
              {filteredProfiles.map((p, idx) => (
                <div key={idx} style={{ border: '1px solid var(--bg-tertiary)', borderRadius: 'var(--radius-md)', padding: '1rem', transition: 'all 0.2s', background: selectedProfile?.url === p.url ? 'var(--bg-tertiary)' : '#fff', position: 'relative' }}>
                  <div onClick={() => setSelectedProfile(p)} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem', cursor: 'pointer' }}>
                    <img src={p.profilePicture || '/placeholder.png'} style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} />
                    <div style={{ flex: 1, paddingRight: '20px' }}>
                      <div style={{ fontWeight: 'bold', color: 'var(--text-primary)' }}>{p.name}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.headline}</div>
                    </div>
                  </div>
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleDeleteProfile(p.url); }}
                    style={{ position: 'absolute', top: '10px', right: '10px', background: 'transparent', border: 'none', color: '#ef4444', cursor: 'pointer', padding: '5px' }}
                    title="Profil törlése"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Részletek Nézet (Kiválasztott Profil) */}
          {selectedProfile && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card" style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--bg-tertiary)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
                <h2 style={{ margin: 0 }}>{selectedProfile.name} Önéletrajza</h2>
                <button onClick={() => setSelectedProfile(null)} className="btn-secondary" style={{ padding: '0.5rem 1rem' }}>Bezárás</button>
              </div>
              
              {selectedProfile.aiSummary && (
                <div style={{ background: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: 'var(--radius-md)', marginBottom: '2rem', borderLeft: '4px solid var(--accent-primary)' }}>
                  <h3 style={{ margin: '0 0 0.5rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)' }}>
                    ✨ AI Profil Összefoglaló
                  </h3>
                  <p style={{ margin: 0, lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                    {selectedProfile.aiSummary}
                  </p>
                </div>
              )}

              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                <div style={{ flex: '1', minWidth: '250px' }}>
                  <img src={selectedProfile.profilePicture || '/placeholder.png'} style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1rem' }} />
                  <p><strong>URL:</strong> <a href={selectedProfile.url} target="_blank">{selectedProfile.url}</a></p>
                  <p><strong>Cím:</strong> {selectedProfile.headline}</p>
                  <p><strong>Hely:</strong> {selectedProfile.location}</p>
                </div>
                
                <div style={{ flex: '2', minWidth: '300px' }}>
                  <h3 style={{ borderBottom: '1px solid var(--bg-tertiary)', paddingBottom: '0.5rem' }}>Tapasztalat</h3>
                  {selectedProfile.experience?.map((exp: any, i: number) => (
                    <div key={i} style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
                      {exp.logoUrl && <img src={exp.logoUrl} style={{ width: '40px', height: '40px', objectFit: 'contain' }} />}
                      <div>
                        <strong>{exp.title}</strong>
                        <div>{exp.company}</div>
                        <div style={{ fontSize: '0.85rem', color: '#666' }}>{exp.date}</div>
                      </div>
                    </div>
                  ))}

                  <h3 style={{ borderBottom: '1px solid var(--bg-tertiary)', paddingBottom: '0.5rem', marginTop: '2rem' }}>Tanulmányok</h3>
                  {selectedProfile.education?.map((edu: any, i: number) => (
                    <div key={i} style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
                      {edu.logoUrl && <img src={edu.logoUrl} style={{ width: '40px', height: '40px', objectFit: 'contain' }} />}
                      <div>
                        <strong>{edu.school}</strong>
                        <div>{edu.degree}</div>
                        <div style={{ fontSize: '0.85rem', color: '#666' }}>{edu.date}</div>
                      </div>
                    </div>
                  ))}

                  {selectedProfile.interests && selectedProfile.interests.length > 0 && (
                    <>
                      <h3 style={{ borderBottom: '1px solid var(--bg-tertiary)', paddingBottom: '0.5rem', marginTop: '2rem' }}>Érdeklődési körök (Cégek)</h3>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {selectedProfile.interests.map((interest: string, i: number) => (
                          <span key={i} style={{ background: 'var(--bg-tertiary)', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.85rem' }}>
                            {interest}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          )}

        </div>
      )}
    </div>
  );
}
