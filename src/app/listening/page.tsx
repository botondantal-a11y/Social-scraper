"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, Loader2, Radio, Download, FileJson, FileSpreadsheet, ExternalLink, Settings, AlertTriangle, MessageSquare, Save, Trash2, FolderOpen, Share2 } from "lucide-react";
import OwnerBadge from "@/components/OwnerBadge";

const PLATFORMS: { id: string; label: string; hint: string }[] = [
  { id: "facebook", label: "Facebook", hint: "Poszt URL-ek (facebook.com/.../posts/...)" },
  { id: "instagram", label: "Instagram", hint: "Poszt vagy reel URL-ek (instagram.com/p/...)" },
  { id: "tiktok", label: "TikTok", hint: "Videó URL-ek (tiktok.com/@.../video/...)" },
  { id: "youtube", label: "YouTube", hint: "Videó URL-ek (youtube.com/watch?v=...)" },
  { id: "google_maps", label: "Google Maps", hint: "Hely URL-ek (google.com/maps/place/...) – értékelések" },
  { id: "linkedin", label: "LinkedIn", hint: "Poszt URL-ek (linkedin.com/posts/...)" },
  { id: "reddit", label: "Reddit", hint: "Poszt URL-ek (reddit.com/r/.../comments/...)" },
];

type Comment = {
  author: string;
  authorUrl: string;
  text: string;
  date: string;
  likes: number | string;
  replies: number | string;
  url: string;
};

export default function ListeningPage() {
  const [platform, setPlatform] = useState("facebook");
  const [urlsText, setUrlsText] = useState("");
  const [limit, setLimit] = useState(50);
  const [actorOverride, setActorOverride] = useState("");
  const [showAdvanced, setShowAdvanced] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [meta, setMeta] = useState<{ actorUsed: string; rawCount: number } | null>(null);
  const [hasKey, setHasKey] = useState<boolean | null>(null);

  // Mentés / mentett lekérdezések
  const [saveName, setSaveName] = useState("");
  const [saveVisibility, setSaveVisibility] = useState<"private" | "shared">("private");
  const [savingQuery, setSavingQuery] = useState(false);
  const [saved, setSaved] = useState<any[]>([]);
  const [savedScope, setSavedScope] = useState<"all" | "mine" | "shared">("all");
  const [savedSharerFilter, setSavedSharerFilter] = useState("all");
  const [myUserId, setMyUserId] = useState<string | null>(null);
  const [loadedName, setLoadedName] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/user/apify-key")
      .then((r) => r.json())
      .then((d) => setHasKey(!!d.hasKey))
      .catch(() => setHasKey(false));
    fetch("/api/auth/session")
      .then((r) => r.json())
      .then((s) => setMyUserId(s?.user?.id || null))
      .catch(() => null);
  }, []);

  useEffect(() => {
    fetchSaved(savedScope);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [savedScope]);

  const fetchSaved = async (scope: string) => {
    try {
      const res = await fetch(scope === "all" ? "/api/listening/saved" : `/api/listening/saved?scope=${scope}`);
      if (res.ok) setSaved(await res.json());
    } catch {
      /* ignore */
    }
  };

  const handleSaveQuery = async () => {
    if (!saveName.trim()) {
      setError("Adj nevet a mentésnek.");
      return;
    }
    setSavingQuery(true);
    setError(null);
    try {
      const res = await fetch("/api/listening/saved", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: saveName.trim(),
          platform,
          urls: urlsText.split(/[\n,]+/).map((u) => u.trim()).filter(Boolean),
          limit,
          actorId: actorOverride || undefined,
          results: comments,
          visibility: saveVisibility,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setSaveName("");
        setLoadedName(null);
        fetchSaved(savedScope);
      } else {
        setError(data.error || "Hiba a mentés során.");
      }
    } catch {
      setError("Hálózati hiba a mentés során.");
    } finally {
      setSavingQuery(false);
    }
  };

  const loadSaved = async (id: string) => {
    setError(null);
    try {
      const res = await fetch(`/api/listening/saved?id=${id}`);
      const data = await res.json();
      if (res.ok) {
        setPlatform(data.platform);
        setUrlsText((data.urls || []).join("\n"));
        setLimit(data.limit || 50);
        setActorOverride(data.actorId || "");
        setComments(data.results || []);
        setMeta({ actorUsed: data.actorId || "(mentett)", rawCount: (data.results || []).length });
        setLoadedName(data.name);
      } else {
        setError(data.error || "Nem sikerült betölteni a mentést.");
      }
    } catch {
      setError("Hálózati hiba a betöltéskor.");
    }
  };

  const deleteSaved = async (id: string) => {
    if (!confirm("Biztosan törlöd ezt a mentett lekérdezést?")) return;
    try {
      const res = await fetch(`/api/listening/saved?id=${id}`, { method: "DELETE" });
      if (res.ok) setSaved((prev) => prev.filter((s) => s.id !== id));
    } catch {
      /* ignore */
    }
  };

  const toggleSavedVisibility = async (id: string, current: string) => {
    const next = current === "shared" ? "private" : "shared";
    try {
      const res = await fetch("/api/listening/saved", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, visibility: next }),
      });
      if (res.ok) setSaved((prev) => prev.map((s) => (s.id === id ? { ...s, visibility: next } : s)));
    } catch {
      /* ignore */
    }
  };

  const activePlatform = PLATFORMS.find((p) => p.id === platform)!;

  const handleRun = async () => {
    setError(null);
    const urls = urlsText
      .split(/[\n,]+/)
      .map((u) => u.trim())
      .filter(Boolean);

    if (urls.length === 0) {
      setError("Adj meg legalább egy URL-t.");
      return;
    }

    setLoading(true);
    setComments([]);
    setMeta(null);
    try {
      const res = await fetch("/api/listening", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ platform, urls, limit, actorId: actorOverride || undefined }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Hiba történt a lekérés során.");
      } else {
        setComments(data.comments || []);
        setMeta({ actorUsed: data.actorUsed, rawCount: data.rawCount });
        if ((data.comments || []).length === 0) {
          setError("A lekérés lefutott, de nem érkezett komment. Ellenőrizd az URL-t, vagy próbálj másik actort a Haladó beállításokban.");
        }
      }
    } catch (e) {
      setError("Hálózati hiba történt.");
    } finally {
      setLoading(false);
    }
  };

  const exportCsv = () => {
    const headers = ["author", "text", "date", "likes", "replies", "authorUrl", "url"];
    const escape = (v: any) => `"${String(v ?? "").replace(/"/g, '""')}"`;
    const rows = comments.map((c) => headers.map((h) => escape((c as any)[h])).join(","));
    const csv = [headers.join(","), ...rows].join("\n");
    downloadBlob(csv, `kommentek_${platform}_${Date.now()}.csv`, "text/csv;charset=utf-8;");
  };

  const exportJson = () => {
    downloadBlob(JSON.stringify(comments, null, 2), `kommentek_${platform}_${Date.now()}.json`, "application/json");
  };

  const exportXlsx = async () => {
    // SheetJS dinamikus importtal, hogy ne növelje feleslegesen a kezdeti bundle-t
    const XLSX = await import("xlsx");
    const rows = comments.map((c) => ({
      Szerző: c.author,
      Komment: c.text,
      Dátum: c.date,
      Like: c.likes,
      Válaszok: c.replies,
      "Szerző URL": c.authorUrl,
      URL: c.url,
    }));
    const ws = XLSX.utils.json_to_sheet(rows);
    ws["!cols"] = [{ wch: 22 }, { wch: 60 }, { wch: 18 }, { wch: 8 }, { wch: 10 }, { wch: 35 }, { wch: 35 }];
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Kommentek");
    XLSX.writeFile(wb, `kommentek_${platform}_${Date.now()}.xlsx`);
  };

  const downloadBlob = (content: string, filename: string, type: string) => {
    const blob = new Blob(["﻿" + content], { type });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
    URL.revokeObjectURL(link.href);
  };

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", paddingBottom: "3rem" }}>
      <header className="glass-panel" style={{ padding: "1.5rem var(--spacing-lg)", marginBottom: "var(--spacing-xl)", display: "flex", flexDirection: "column", gap: "1rem", background: "#ffffff" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <a href="/" className="btn-secondary" style={{ padding: "0.5rem", borderRadius: "50%", display: "flex", alignItems: "center" }}>
              <ArrowLeft size={20} />
            </a>
            <div>
              <h1 style={{ margin: 0, fontSize: "1.8rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Radio size={26} color="var(--accent-primary)" /> Social Listening
              </h1>
              <p style={{ margin: "0.25rem 0 0 0", color: "var(--text-muted)", fontSize: "0.9rem" }}>
                Kommentek strukturált letöltése Apify-jal – a saját API kulcsoddal.
              </p>
            </div>
          </div>
          <a href="/settings" className="btn-secondary" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Settings size={18} /> Apify kulcs
          </a>
        </div>

        {hasKey === false && (
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", background: "rgba(245, 158, 11, 0.1)", border: "1px solid #f59e0b", color: "#b45309", padding: "0.75rem 1rem", borderRadius: "8px", fontSize: "0.9rem" }}>
            <AlertTriangle size={18} /> Még nincs Apify API kulcsod. A <a href="/settings" style={{ color: "#b45309", fontWeight: 700, textDecoration: "underline" }}>Beállításokban</a> add meg a sajátodat a használathoz.
          </div>
        )}
      </header>

      <div className="glass-panel" style={{ padding: "1.5rem", marginBottom: "1.5rem", background: "white" }}>
        {/* Platform választó */}
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1rem" }}>
          {PLATFORMS.map((p) => (
            <button
              key={p.id}
              onClick={() => setPlatform(p.id)}
              style={{
                padding: "0.5rem 1rem",
                borderRadius: "999px",
                border: "1px solid " + (platform === p.id ? "var(--accent-primary)" : "var(--bg-tertiary)"),
                background: platform === p.id ? "var(--accent-primary)" : "transparent",
                color: platform === p.id ? "white" : "var(--text-secondary)",
                cursor: "pointer",
                fontWeight: 600,
                fontSize: "0.85rem",
              }}
            >
              {p.label}
            </button>
          ))}
        </div>

        <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.4rem", color: "var(--text-secondary)" }}>
          URL-ek (soronként vagy vesszővel elválasztva)
        </label>
        <textarea
          value={urlsText}
          onChange={(e) => setUrlsText(e.target.value)}
          placeholder={activePlatform.hint}
          rows={5}
          className="input-field"
          style={{ width: "100%", fontFamily: "monospace", fontSize: "0.85rem", resize: "vertical" }}
        />

        <div style={{ display: "flex", gap: "1rem", alignItems: "flex-end", flexWrap: "wrap", marginTop: "1rem" }}>
          <div>
            <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.4rem", color: "var(--text-secondary)" }}>
              Max. komment / URL
            </label>
            <input
              type="number"
              min={1}
              max={1000}
              value={limit}
              onChange={(e) => setLimit(parseInt(e.target.value, 10) || 50)}
              className="input-field"
              style={{ width: "140px" }}
            />
          </div>
          <button
            onClick={handleRun}
            disabled={loading || hasKey === false}
            className="btn-primary"
            style={{ display: "flex", alignItems: "center", gap: "0.5rem", opacity: loading || hasKey === false ? 0.6 : 1 }}
          >
            {loading ? <><Loader2 size={18} className="animate-spin" /> Lekérés fut…</> : <><Radio size={18} /> Kommentek letöltése</>}
          </button>
          <button onClick={() => setShowAdvanced((s) => !s)} className="btn-secondary" style={{ fontSize: "0.8rem" }}>
            {showAdvanced ? "Haladó elrejtése" : "Haladó beállítások"}
          </button>
        </div>

        {showAdvanced && (
          <div style={{ marginTop: "1rem", padding: "1rem", background: "var(--bg-secondary)", borderRadius: "8px" }}>
            <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.4rem", color: "var(--text-secondary)" }}>
              Apify actor felülírása (opcionális)
            </label>
            <input
              type="text"
              value={actorOverride}
              onChange={(e) => setActorOverride(e.target.value)}
              placeholder="pl. apify/facebook-comments-scraper"
              className="input-field"
              style={{ width: "100%", fontFamily: "monospace", fontSize: "0.85rem" }}
            />
            <p style={{ margin: "0.5rem 0 0 0", fontSize: "0.78rem", color: "var(--text-muted)" }}>
              Ha az alapértelmezett actor nem működik, illessz be egy másikat az Apify Store-ból (pl. „felhasználó/actor-nev" formában).
            </p>
          </div>
        )}

        {error && (
          <div style={{ marginTop: "1rem", display: "flex", alignItems: "center", gap: "0.5rem", background: "rgba(239, 68, 68, 0.08)", border: "1px solid rgba(239,68,68,0.3)", color: "var(--error)", padding: "0.75rem 1rem", borderRadius: "8px", fontSize: "0.88rem" }}>
            <AlertTriangle size={18} /> {error}
          </div>
        )}
      </div>

      {/* Mentett lekérdezések */}
      <div className="glass-panel" style={{ padding: "1.25rem 1.5rem", marginBottom: "1.5rem", background: "white" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem", marginBottom: saved.length ? "1rem" : 0 }}>
          <h2 style={{ margin: 0, display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "1.1rem" }}>
            <FolderOpen size={18} /> Mentett lekérdezések
          </h2>
          <div style={{ display: "flex", gap: "0.6rem", alignItems: "center", flexWrap: "wrap" }}>
            {(() => {
              const sharers = Array.from(new Set(saved.filter((s) => s.visibility === "shared" && s.owner?.name).map((s) => s.owner.name))).sort() as string[];
              return sharers.length > 0 ? (
                <select value={savedSharerFilter} onChange={(e) => setSavedSharerFilter(e.target.value)} className="input-field" style={{ width: "auto", padding: "0.3rem 0.6rem", fontSize: "0.78rem" }} title="Szűrés megosztóra">
                  <option value="all">Bárki osztotta meg</option>
                  {sharers.map((s) => (<option key={s} value={s}>Megosztó: {s}</option>))}
                </select>
              ) : null;
            })()}
            <div style={{ display: "flex", gap: "0.25rem", background: "var(--bg-secondary)", borderRadius: "999px", padding: "3px" }}>
              {([["all", "Minden"], ["mine", "Sajátom"], ["shared", "Közös"]] as const).map(([id, label]) => (
                <button key={id} onClick={() => setSavedScope(id)} style={{ padding: "0.35rem 0.8rem", borderRadius: "999px", border: "none", cursor: "pointer", fontSize: "0.78rem", fontWeight: 600, background: savedScope === id ? "var(--accent-primary)" : "transparent", color: savedScope === id ? "white" : "var(--text-secondary)" }}>
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {saved.length === 0 ? (
          <p style={{ margin: 0, color: "var(--text-muted)", fontSize: "0.85rem" }}>Még nincs mentett lekérdezés. Egy lekérés után add meg a nevét és mentsd el.</p>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {saved.filter((s) => savedSharerFilter === "all" ? true : (s.visibility === "shared" && s.owner?.name === savedSharerFilter)).map((s) => (
              <div key={s.id} style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.6rem 0.85rem", border: "1px solid var(--bg-tertiary)", borderRadius: "8px", flexWrap: "wrap" }}>
                <div style={{ flex: "1 1 200px", minWidth: 0 }}>
                  <div style={{ fontWeight: 600, fontSize: "0.9rem", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{s.name}</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
                    <span style={{ textTransform: "capitalize" }}>{s.platform.replace("_", " ")}</span>
                    <span>{s.commentCount} komment</span>
                    <span>{new Date(s.createdAt).toLocaleDateString("hu-HU")}</span>
                    <OwnerBadge visibility={s.visibility} owner={s.owner} sharedAt={s.sharedAt} fallbackDate={s.createdAt} showPrivate />
                  </div>
                </div>
                <div style={{ display: "flex", gap: "0.4rem" }}>
                  <button onClick={() => loadSaved(s.id)} className="btn-secondary" style={{ padding: "0.35rem 0.7rem", fontSize: "0.78rem", display: "flex", alignItems: "center", gap: "0.3rem" }}>
                    <FolderOpen size={13} /> Betöltés
                  </button>
                  {myUserId && s.ownerId === myUserId && (
                    <>
                      <button onClick={() => toggleSavedVisibility(s.id, s.visibility)} title={s.visibility === "shared" ? "Visszavonás priváttá" : "Közösbe"} className="btn-secondary" style={{ padding: "0.35rem 0.6rem", fontSize: "0.78rem", display: "flex", alignItems: "center", gap: "0.3rem" }}>
                        <Share2 size={13} /> {s.visibility === "shared" ? "Privát" : "Közösbe"}
                      </button>
                      <button onClick={() => deleteSaved(s.id)} title="Törlés" className="btn-secondary" style={{ padding: "0.35rem 0.5rem", fontSize: "0.78rem", color: "var(--error)", borderColor: "rgba(239,68,68,0.3)" }}>
                        <Trash2 size={13} />
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Eredmények */}
      {comments.length > 0 && (
        <div className="glass-panel" style={{ padding: "1.5rem", background: "white" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem", marginBottom: "1rem" }}>
            <h2 style={{ margin: 0, display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "1.2rem", flexWrap: "wrap" }}>
              <MessageSquare size={20} /> {comments.length} komment
              {loadedName && <span style={{ fontSize: "0.8rem", color: "var(--accent-primary)", fontWeight: 600 }}>· {loadedName}</span>}
              {meta && <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 400 }}>({meta.actorUsed})</span>}
            </h2>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              <button onClick={exportCsv} className="btn-secondary" style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.85rem" }}>
                <Download size={16} /> CSV
              </button>
              <button onClick={exportXlsx} className="btn-secondary" style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.85rem", borderColor: "#217346", color: "#217346" }}>
                <FileSpreadsheet size={16} /> Excel
              </button>
              <button onClick={exportJson} className="btn-secondary" style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.85rem" }}>
                <FileJson size={16} /> JSON
              </button>
            </div>
          </div>

          {/* Mentés néven */}
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", flexWrap: "wrap", padding: "0.75rem 1rem", background: "var(--bg-secondary)", borderRadius: "8px", marginBottom: "1rem" }}>
            <Save size={16} style={{ color: "var(--accent-primary)" }} />
            <input
              type="text"
              value={saveName}
              onChange={(e) => setSaveName(e.target.value)}
              placeholder="Lekérdezés neve (pl. Kampány kommentek – március)"
              className="input-field"
              style={{ flex: "1 1 260px", padding: "0.4rem 0.7rem", fontSize: "0.85rem" }}
            />
            <select value={saveVisibility} onChange={(e) => setSaveVisibility(e.target.value as "private" | "shared")} className="input-field" style={{ width: "auto", padding: "0.4rem 0.7rem", fontSize: "0.85rem" }}>
              <option value="private">Privát (csak nekem)</option>
              <option value="shared">Közös</option>
            </select>
            <button onClick={handleSaveQuery} disabled={savingQuery} className="btn-primary" style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.85rem" }}>
              {savingQuery ? <Loader2 size={15} className="animate-spin" /> : <Save size={15} />} Mentés
            </button>
          </div>

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85rem" }}>
              <thead>
                <tr style={{ textAlign: "left", borderBottom: "2px solid var(--bg-tertiary)" }}>
                  <th style={{ padding: "0.5rem", whiteSpace: "nowrap" }}>Szerző</th>
                  <th style={{ padding: "0.5rem", minWidth: "300px" }}>Komment</th>
                  <th style={{ padding: "0.5rem", whiteSpace: "nowrap" }}>Dátum</th>
                  <th style={{ padding: "0.5rem", textAlign: "right" }}>👍</th>
                  <th style={{ padding: "0.5rem", textAlign: "right" }}>💬</th>
                  <th style={{ padding: "0.5rem" }}></th>
                </tr>
              </thead>
              <tbody>
                {comments.map((c, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid var(--bg-tertiary)" }}>
                    <td style={{ padding: "0.5rem", fontWeight: 600, whiteSpace: "nowrap", maxWidth: "160px", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {c.authorUrl ? <a href={c.authorUrl} target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-primary)" }}>{c.author || "—"}</a> : (c.author || "—")}
                    </td>
                    <td style={{ padding: "0.5rem", lineHeight: 1.4 }}>{c.text}</td>
                    <td style={{ padding: "0.5rem", whiteSpace: "nowrap", color: "var(--text-muted)" }}>{c.date}</td>
                    <td style={{ padding: "0.5rem", textAlign: "right" }}>{c.likes !== "" ? c.likes : "–"}</td>
                    <td style={{ padding: "0.5rem", textAlign: "right" }}>{c.replies !== "" ? c.replies : "–"}</td>
                    <td style={{ padding: "0.5rem" }}>
                      {c.url && <a href={c.url} target="_blank" rel="noopener noreferrer" title="Megnyitás"><ExternalLink size={14} /></a>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
