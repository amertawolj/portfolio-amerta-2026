"use client";
import { useEffect, useState } from "react";
import { projects, profile, awards } from "@/data/Projects";

const BOOT_LINES = [
  "// INITIALIZING SYSTEM...",
  "// LOADING AMERTA'S PORTFOLIO...",
  "// DECRYPTING DATA STREAMS...",
  "// SYNCHRONIZING COMPONENTS...",
  "// UNLOCKING DIGITAL DIMENSIONS...",
  "// YOU'RE ABOUT TO ENTER AMERTA'S PERSONAL SPACE...",
];

// Kumpulkan semua URL gambar dari data
function getAllImageUrls(): string[] {
  const urls: string[] = [];

  if (profile.photo) urls.push(profile.photo);
  profile.tools?.forEach((t) => t.icon && urls.push(t.icon));
  projects.forEach((p) => {
    if (p.thumbnail) urls.push(p.thumbnail);
  });
  awards.forEach((a) => {
    if (a.certificate) urls.push(a.certificate);
  });

  // foto statis
  urls.push("/photos/cat.jpg", "/photos/jatinangor.jfif");

  return [...new Set(urls)]; // dedupe
}

function preloadImages(urls: string[]): Promise<void> {
  return Promise.all(
    urls.map(
      (src) =>
        new Promise<void>((resolve) => {
          const img = new Image();
          img.onload = () => resolve();
          img.onerror = () => resolve(); // tetap lanjut meski gagal
          img.src = src;
        })
    )
  ).then(() => {});
}

type Props = { onDone: () => void };

export default function LoadingScreen({ onDone }: Props) {
  const [visibleLines, setVisibleLines] = useState(0);
  const [assetsReady, setAssetsReady] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  // Preload semua aset
  useEffect(() => {
    preloadImages(getAllImageUrls()).then(() => setAssetsReady(true));
  }, []);

  // Munculkan teks satu per satu
  useEffect(() => {
    if (visibleLines < BOOT_LINES.length) {
      const t = setTimeout(() => setVisibleLines((v) => v + 1), 350);
      return () => clearTimeout(t);
    }
  }, [visibleLines]);

  // Baru fade out kalau KEDUA kondisi terpenuhi: semua line muncul + aset ready
  useEffect(() => {
    if (visibleLines === BOOT_LINES.length && assetsReady) {
      const t = setTimeout(() => setFadeOut(true), 400);
      return () => clearTimeout(t);
    }
  }, [visibleLines, assetsReady]);

  useEffect(() => {
    if (fadeOut) {
      const t = setTimeout(() => onDone(), 600);
      return () => clearTimeout(t);
    }
  }, [fadeOut]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#0a1f6e",
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 0.6s ease",
      }}
    >
      <div
        style={{
          fontFamily: "'Courier New', Courier, monospace",
          color: "#a0b8ff",
          fontSize: "clamp(11px, 2vw, 15px)",
          lineHeight: 2,
          padding: "0 8vw",
          width: "100%",
          maxWidth: 640,
        }}
      >
        {BOOT_LINES.slice(0, visibleLines).map((line, i) => (
          <div
            key={i}
            style={{
              background:
                i === visibleLines - 1 ? "rgba(160,184,255,0.2)" : "transparent",
              paddingLeft: 4,
              paddingRight: 4,
            }}
          >
            {line}
          </div>
        ))}

        {/* Kalau teks sudah habis tapi aset belum ready, tampilkan status */}
        {visibleLines === BOOT_LINES.length && !assetsReady && (
          <div style={{ color: "#a0b8ff", marginTop: 8 }}>
            // LOADING ASSETS...
          </div>
        )}

        {visibleLines === BOOT_LINES.length && assetsReady && (
          <div style={{ marginTop: 24, color: "#ffffff", letterSpacing: 4 }}>
            ( DONE )
          </div>
        )}
      </div>
    </div>
  );
}