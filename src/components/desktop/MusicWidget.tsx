"use client";
import { useEffect, useRef, useState } from "react";

export default function MusicWidget() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Listen pesan dari Spotify iframe
  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (!e.data) return;
      try {
        const data = typeof e.data === "string" ? JSON.parse(e.data) : e.data;

        // Spotify kirim playback_update
        if (data.type === "playback_update") {
          const { position, duration, isPaused } = data.payload ?? data;
          if (duration > 0) {
            setProgress((position / duration) * 100);
          }
          setIsPlaying(!isPaused);
          if (position >= duration && duration > 0) {
            setIsPlaying(false);
            setProgress(0);
          }
        }
      } catch {
        // ignore non-JSON messages
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  const togglePlay = () => {
    if (!iframeRef.current) return;
    iframeRef.current.contentWindow?.postMessage(
      { command: isPlaying ? "pause" : "play" },
      "*"
    );
  };

  return (
    <div
      style={{
        width: 280,
        borderRadius: 16,
        background: "rgba(255,255,255,0.25)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.5)",
        boxShadow: "0 8px 32px rgba(31,138,184,0.15)",
        overflow: "hidden",
        padding: 16,
        zIndex: 20,
      }}
    >
      {/* Hidden Spotify Embed */}
      <iframe
        ref={iframeRef}
        src="https://open.spotify.com/embed/track/5mrIZ0lvgFr5wnrYbzV0C1?utm_source=generator"
        width="0"
        height="0"
        style={{ position: "absolute", opacity: 0, pointerEvents: "none" }}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />

      <div className="flex gap-4 items-center">
        {/* CD */}
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            flexShrink: 0,
            position: "relative",
            animation: isPlaying ? "spin 4s linear infinite" : "none",
            background:
              "conic-gradient(from 0deg, #c0c0c0, #e8e8e8, #a0a0a0, #d0d0d0, #888, #e0e0e0, #c0c0c0)",
            boxShadow: "0 4px 16px rgba(0,0,0,0.3), inset 0 0 8px rgba(0,0,0,0.2)",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 16,
              height: 16,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.9)",
              boxShadow: "0 0 4px rgba(0,0,0,0.3)",
              zIndex: 2,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              background:
                "radial-gradient(circle at 35% 35%, rgba(255,255,255,0.4) 0%, transparent 60%)",
            }}
          />
        </div>

        {/* Info */}
        <div className="flex flex-col gap-1 overflow-hidden flex-1">
          <span
            className="text-xs uppercase tracking-widest"
            style={{ color: "rgba(0,0,0,0.4)" }}
          >
            MY FAV MUSIC RN
          </span>
          <p className="text-sm font-bold truncate" style={{ color: "#1a1a1a" }}>
            TOGETHER!
          </p>
          <p className="text-xs truncate" style={{ color: "rgba(0,0,0,0.5)" }}>
            JANNABI
          </p>
          <div
            style={{
              marginTop: 4,
              height: 4,
              borderRadius: 99,
              background: "rgba(0,0,0,0.1)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${progress}%`,
                borderRadius: 99,
                background: "rgba(77,184,232,0.85)",
                transition: "width 0.1s linear",
              }}
            />
          </div>
        </div>
      </div>

      {/* Play/Pause Button */}
      <button
        onClick={togglePlay}
        className="w-full flex items-center justify-center mt-4"
        style={{
          height: 36,
          borderRadius: 99,
          background: isPlaying ? "rgba(255,255,255,0.4)" : "rgba(77,184,232,0.85)",
          border: "1px solid rgba(255,255,255,0.6)",
          color: isPlaying ? "rgba(0,0,0,0.6)" : "#fff",
          fontSize: 13,
          fontWeight: 600,
          cursor: "pointer",
          transition: "all 0.2s",
          zIndex: 20,
        }}
      >
        {isPlaying ? "⏸ Stop" : "▶ Play"}
      </button>
    </div>
  );
}