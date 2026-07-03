"use client";

import { usePathname } from "next/navigation";
import React from "react";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isStatistics = pathname === "/statistics" || pathname?.startsWith("/statistics/");

  if (isStatistics) {
    return <>{children}</>;
  }

  return (
    <main className="container animate-fade-in" style={{ paddingTop: 'var(--spacing-2xl)', paddingBottom: 'var(--spacing-2xl)' }}>
      {children}
    </main>
  );
}
