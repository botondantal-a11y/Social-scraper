// Auth-enabled layout
import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "./ClientLayout";
import UserMenu from "@/components/UserMenu";

export const metadata: Metadata = {
  title: "OmniScrape | AI Social Media & News Summarizer",
  description: "Scrape and summarize content from Facebook, Instagram, Reddit, and News websites using AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <body>
        <UserMenu />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
