"use client";

import { Users, Lock } from "lucide-react";

type Owner = { name?: string | null; image?: string | null } | null | undefined;

type Props = {
  visibility?: string;
  owner?: Owner;
  sharedAt?: string | Date | null;
  fallbackDate?: string | Date | null;
  size?: "sm" | "md";
  // Ha privát elemnél is meg akarjuk mutatni a "Privát" jelzést
  showPrivate?: boolean;
};

function fmtDate(d?: string | Date | null): string {
  if (!d) return "";
  try {
    return new Date(d).toLocaleDateString("hu-HU", { year: "numeric", month: "short", day: "numeric" });
  } catch {
    return "";
  }
}

/**
 * Megjeleníti, hogy egy közös elemet ki és mikor osztott meg (avatar + név + dátum).
 * Privát elemnél opcionálisan egy "Privát" jelzést mutat.
 */
export default function OwnerBadge({ visibility, owner, sharedAt, fallbackDate, size = "sm", showPrivate = false }: Props) {
  const isShared = visibility === "shared";
  const avatarSize = size === "md" ? 22 : 18;
  const fontSize = size === "md" ? "0.85rem" : "0.72rem";

  if (!isShared) {
    if (!showPrivate) return null;
    return (
      <span style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem", fontSize, fontWeight: 600, color: "var(--text-muted)" }}>
        <Lock size={avatarSize - 4} /> Privát
      </span>
    );
  }

  const name = owner?.name || "Ismeretlen";
  const date = fmtDate(sharedAt || fallbackDate);

  return (
    <span
      title={`Megosztotta: ${name}${date ? ` · ${date}` : ""}`}
      style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem", fontSize, fontWeight: 600, color: "var(--success)" }}
    >
      {owner?.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={owner.image} alt="" referrerPolicy="no-referrer" style={{ width: avatarSize, height: avatarSize, borderRadius: "50%", objectFit: "cover" }} />
      ) : (
        <Users size={avatarSize - 2} />
      )}
      <span style={{ whiteSpace: "nowrap" }}>
        {name}
        {date && <span style={{ color: "var(--text-muted)", fontWeight: 400 }}> · {date}</span>}
      </span>
    </span>
  );
}
