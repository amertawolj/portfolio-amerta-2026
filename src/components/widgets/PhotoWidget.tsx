"use client";
import { useState } from "react";

type Props = {
  src: string;
  alt?: string;
  caption?: string;
  rotation?: number;
  size?: "normal" | "small";
};

export default function PhotoWidget({ src, alt = "photo", caption, rotation = 0, size = "normal" }: Props) {
  const [hovered, setHovered] = useState(false);
  const width = size === "small" ? 120 : 180;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width,
        padding: size === "small" ? 6 : 10,
        background: "rgba(255,255,255,0.9)",
        borderRadius: 4,
        boxShadow: hovered ? "0 12px 32px rgba(0,0,0,0.25)" : "0 4px 16px rgba(0,0,0,0.15)",
        transform: `rotate(${hovered ? 0 : rotation}deg) scale(${hovered ? 1.05 : 1})`,
        transition: "all 0.2s ease",
        cursor: "pointer",
      }}
    >
      <div style={{ width: "100%", aspectRatio: "1/1", overflow: "hidden", background: "rgba(0,0,0,0.05)" }}>
        <img src={src} alt={alt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      {caption && (
        <p className="text-center mt-1" style={{ fontSize: size === "small" ? 9 : 12, color: "rgba(0,0,0,0.5)" }}>
          {caption}
        </p>
      )}
    </div>
  );
}