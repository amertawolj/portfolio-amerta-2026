"use client";
import { useEffect, useRef, useState } from "react";

export default function MusicWidget({ compact }: { compact?: boolean }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (!e.data) return;
      try {
        const data = typeof e.data === "string" ? JSON.parse(e.data) : e.data;
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
        width: compact ? "100%" : 280,
        borderRadius: 16,
        background: "rgba(255,255,255,0.25)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.5)",
        boxShadow: "0 8px 32px rgba(31,138,184,0.15)",
        overflow: "hidden",
        padding: compact ? 10 : 16,
      }}
    >
      {/* Hidden Spotify Embed — selalu ada supaya musik bisa play */}
      <iframe
        ref={iframeRef}
        src="https://open.spotify.com/embed/track/5mrIZ0lvgFr5wnrYbzV0C1?utm_source=generator"
        width="0"
        height="0"
        style={{ position: "absolute", opacity: 0, pointerEvents: "none" }}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />

      <div className="flex gap-3 items-center">
        {/* CD */}
        <div
          style={{
            width: compact ? 44 : 80,
            height: compact ? 44 : 80,
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
              width: compact ? 10 : 16,
              height: compact ? 10 : 16,
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
            style={{ fontSize: compact ? 9 : 11, color: "rgba(0,0,0,0.4)", textTransform: "uppercase", letterSpacing: "0.08em" }}
          >
            MY FAV MUSIC RN
          </span>
          <p
            className="font-bold truncate"
            style={{ fontSize: compact ? 12 : 14, color: "#1a1a1a" }}
          >
            TOGETHER!
          </p>
          <p className="truncate" style={{ fontSize: compact ? 10 : 12, color: "rgba(0,0,0,0.5)" }}>
            JANNABI
          </p>
          {/* Progress bar */}
          <div
            style={{
              marginTop: 4,
              height: 3,
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

        {/* Compact mode: play button inline */}
        {compact && (
          <button
            onClick={togglePlay}
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: isPlaying ? "rgba(255,255,255,0.4)" : "rgba(77,184,232,0.85)",
              border: "1px solid rgba(255,255,255,0.6)",
              color: isPlaying ? "rgba(0,0,0,0.6)" : "#fff",
              fontSize: 12,
              cursor: "pointer",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {isPlaying ? "⏸" : "▶"}
          </button>
        )}
      </div>

      {/* Full mode: play button di bawah */}
      {!compact && (
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
          }}
        >
          {isPlaying ? "⏸ Stop" : "▶ Play"}
        </button>
      )}
    </div>
  );
}