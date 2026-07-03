import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Trend {
  id: string;
  title: string;
  category: string;
  horizon: string;
  description: string;
  impactDetail?: string;
  signalType?: string;
}

interface RadarChartProps {
  trends: Trend[];
  onSelectTrend: (trend: Trend) => void;
}

const CATEGORIES = ["Political", "Economic", "Social", "Technological", "Environmental", "Legal"];
const HORIZONS = [2025, 2030, 2040];
const DEFAULT_COLORS = ["#10b981", "#ef4444", "#8b5cf6", "#3b82f6", "#f59e0b", "#ec4899", "#f97316", "#14b8a6"];

const getRandomPosition = (categoryIndex: number, totalCategories: number, radiusIndex: number, numRings: number, seed: number) => {
  const angleStart = (categoryIndex * 2 * Math.PI) / totalCategories;
  const angleEnd = ((categoryIndex + 1) * 2 * Math.PI) / totalCategories;
  const padding = 0.15;
  
  const pseudoRandom1 = Math.sin(seed * 1.1) * 0.5 + 0.5;
  const pseudoRandom2 = Math.cos(seed * 1.3) * 0.5 + 0.5;

  const angle = angleStart + padding + pseudoRandom1 * (angleEnd - angleStart - 2 * padding);
  const rMin = (radiusIndex / numRings);
  const rMax = ((radiusIndex + 1) / numRings);
  const radius = rMin + 0.1 + pseudoRandom2 * (rMax - rMin - 0.2);

  return { angle, radius };
};

export default function RadarChart({ trends, onSelectTrend }: RadarChartProps) {
  const [hoveredTrend, setHoveredTrend] = useState<any>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  const size = 800;
  const center = size / 2;
  const maxRadius = 340; // Slightly smaller to leave room for text

  const signalColors = useMemo(() => {
    const colors: Record<string, string> = {};
    let colorIndex = 3;
    const predefined: Record<string, string> = { "STRENGTHENING": "#10b981", "WEAKENING": "#ef4444", "WILD CARD": "#8b5cf6" };

    trends.forEach(t => {
      const type = t.signalType?.toUpperCase() || "ISMERETLEN";
      if (!colors[type]) {
        if (predefined[type]) colors[type] = predefined[type];
        else {
          colors[type] = DEFAULT_COLORS[colorIndex % DEFAULT_COLORS.length];
          colorIndex++;
        }
      }
    });
    return colors;
  }, [trends]);

  const mappedTrends = useMemo(() => {
    return trends.map((trend, i) => {
      let catIndex = CATEGORIES.findIndex(c => c.toLowerCase() === trend.category.toLowerCase());
      if (catIndex === -1) catIndex = 0;
      
      const years = trend.horizon?.match(/\d{4}/g);
      const maxYear = years ? Math.max(...years.map(Number)) : 2030;
      
      let horizIndex = 0;
      if (maxYear > 2025 && maxYear <= 2030) horizIndex = 1;
      else if (maxYear > 2030) horizIndex = 2;

      const pos = getRandomPosition(catIndex, CATEGORIES.length, horizIndex, HORIZONS.length, i + 100);
      const x = center + Math.cos(pos.angle) * pos.radius * maxRadius;
      const y = center + Math.sin(pos.angle) * pos.radius * maxRadius;

      return { ...trend, x, y, color: signalColors[trend.signalType?.toUpperCase() || "ISMERETLEN"] || "#8b5cf6" };
    });
  }, [trends, signalColors]);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  // Íves útvonal generálása a kategória címkéknek
  const createTextPath = (i: number, total: number, radius: number) => {
    const angleStart = (i * 2 * Math.PI) / total;
    const angleEnd = ((i + 1) * 2 * Math.PI) / total;
    // Calculate arc coordinates
    const startX = center + Math.cos(angleStart) * radius;
    const startY = center + Math.sin(angleStart) * radius;
    const endX = center + Math.cos(angleEnd) * radius;
    const endY = center + Math.sin(angleEnd) * radius;
    
    // Check if path is in the bottom half of the circle. If so, draw it backwards to keep text upright
    const midAngle = (angleStart + angleEnd) / 2;
    const isBottomHalf = Math.sin(midAngle) > 0;

    if (isBottomHalf) {
      return `M ${endX} ${endY} A ${radius} ${radius} 0 0 0 ${startX} ${startY}`;
    }
    return `M ${startX} ${startY} A ${radius} ${radius} 0 0 1 ${endX} ${endY}`;
  };

  return (
    <div 
      className="relative w-full max-w-[800px] aspect-square mx-auto rounded-full shadow-[0_0_80px_rgba(30,41,59,0.5)] border border-[#1e293b] bg-[#020617] overflow-hidden" 
      onMouseMove={handleMouseMove}
      style={{
        background: 'radial-gradient(circle at center, #0f172a 0%, #020617 80%)'
      }}
    >
      <svg width="100%" height="100%" viewBox={`0 0 ${size} ${size}`} className="relative z-10 drop-shadow-lg">
        <defs>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          
          {/* Text paths for categories */}
          {CATEGORIES.map((cat, i) => (
            <path key={`path-${i}`} id={`textPath-${i}`} d={createTextPath(i, CATEGORIES.length, maxRadius + 20)} fill="none" />
          ))}
        </defs>

        {/* Háttér háló (Grid) */}
        <circle cx={center} cy={center} r={maxRadius} fill="none" stroke="rgba(51, 65, 85, 0.3)" strokeWidth="1" />

        {/* Radar gyűrűk és évszámok */}
        {HORIZONS.map((h, i) => {
          const r = ((i + 1) / HORIZONS.length) * maxRadius;
          return (
            <g key={`ring-${h}`}>
              <circle cx={center} cy={center} r={r} fill="none" stroke="rgba(51, 65, 85, 0.5)" strokeWidth="1.5" strokeDasharray="4 6" />
              <rect x={center - 20} y={center - r - 10} width="40" height="20" fill="#020617" />
              <text x={center} y={center - r + 4} textAnchor="middle" fill="#64748b" fontSize="13" fontWeight="bold" className="select-none tracking-widest">
                {h}
              </text>
            </g>
          );
        })}

        {/* Kategória elválasztó vonalak és ívelt címkék */}
        {CATEGORIES.map((cat, i) => {
          const angle = (i * 2 * Math.PI) / CATEGORIES.length;
          const x2 = center + Math.cos(angle) * maxRadius;
          const y2 = center + Math.sin(angle) * maxRadius;

          return (
            <g key={`cat-${i}`}>
              <line x1={center} y1={center} x2={x2} y2={y2} stroke="rgba(51, 65, 85, 0.4)" strokeWidth="1" />
              <text fill="#94a3b8" fontSize="12" fontWeight="bold" letterSpacing="0.2em" textAnchor="middle" className="select-none uppercase">
                <textPath href={`#textPath-${i}`} startOffset="50%">
                  {cat}
                </textPath>
              </text>
            </g>
          );
        })}

        {/* Középső mag */}
        <circle cx={center} cy={center} r={28} fill="#020617" stroke="#334155" strokeWidth="2" />
        <circle cx={center} cy={center} r={8} fill="#3b82f6" filter="url(#glow)" opacity="0.8" />

        {/* Trend buborékok (Statikus elhelyezés) */}
        {mappedTrends.map((t) => {
          const isHovered = hoveredTrend?.id === t.id;
          return (
            <g 
              key={t.id} 
              className="cursor-pointer outline-none group" 
              onClick={(e) => {
                e.stopPropagation();
                onSelectTrend(t);
              }}
              onMouseEnter={() => setHoveredTrend(t)}
              onMouseLeave={() => setHoveredTrend(null)}
              style={{ pointerEvents: 'bounding-box' as any }}
            >
              {/* Outer soft glow when hovered */}
              {isHovered && (
                <circle cx={t.x} cy={t.y} r={24} fill={t.color} fillOpacity="0.2" filter="url(#glow)" pointerEvents="none" />
              )}
              {/* Main dot */}
              <circle 
                cx={t.x} 
                cy={t.y} 
                r={isHovered ? 12 : 8} 
                fill={t.color} 
                stroke="#0f172a" 
                strokeWidth="2" 
                filter={isHovered ? "url(#glow)" : "none"}
                style={{ transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)' }}
                pointerEvents="all"
              />
            </g>
          );
        })}
      </svg>

      {/* FIXED POSITION Hover Tooltip - Contains Title + Summary */}
      <AnimatePresence>
        {hoveredTrend && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="fixed z-[9999] pointer-events-none"
            style={{
              left: mousePos.x + 20, // Offset from mouse to prevent overlapping and flickering
              top: mousePos.y + 20,
            }}
          >
            <div className="bg-[#0f172a]/95 backdrop-blur-md border border-[#334155] p-4 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.6)] w-[320px]">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: hoveredTrend.color, boxShadow: `0 0 8px ${hoveredTrend.color}` }}></span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{hoveredTrend.category}</span>
                </div>
                <span className="bg-slate-800 text-slate-300 px-2 py-0.5 rounded text-[10px] font-bold border border-slate-700">
                  {hoveredTrend.horizon}
                </span>
              </div>
              
              <h4 className="text-white font-bold text-sm leading-tight mb-2">{hoveredTrend.title}</h4>
              
              {hoveredTrend.description && (
                <div className="text-xs text-slate-400 leading-relaxed mb-3 line-clamp-3">
                  {hoveredTrend.description}
                </div>
              )}

              {hoveredTrend.signalType && (
                <div className="inline-block bg-[#1e293b] text-slate-300 px-2 py-1 rounded text-[10px] font-bold border border-slate-700 uppercase tracking-wider">
                  Signal: <span style={{ color: hoveredTrend.color }}>{hoveredTrend.signalType}</span>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Jelmagyarázat */}
      <div className="absolute bottom-6 left-6 bg-[#0f172a]/90 backdrop-blur-md p-4 rounded-xl border border-[#334155] shadow-xl z-20 pointer-events-none">
        <p className="font-bold mb-3 text-white text-xs uppercase tracking-widest opacity-80 border-b border-[#334155] pb-2">Jelzések</p>
        <div className="flex flex-col gap-2 max-h-[150px] overflow-y-auto pr-2 custom-scrollbar">
          {Object.entries(signalColors).map(([type, color]) => (
            <div key={type} className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color, boxShadow: `0 0 10px ${color}` }}></div> 
              <span className="truncate max-w-[120px] text-xs font-semibold text-slate-300">{type}</span>
            </div>
          ))}
          {Object.keys(signalColors).length === 0 && (
            <div className="text-slate-500 italic text-xs">Nincs adat</div>
          )}
        </div>
      </div>
    </div>
  );
}
