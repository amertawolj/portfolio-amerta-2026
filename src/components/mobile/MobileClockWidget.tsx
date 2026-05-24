"use client";
import { useEffect, useState } from "react";

export default function MobileClockWidget() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  if (!now) return null;

  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const today = now.getDate();
  const month = now.getMonth();
  const year = now.getFullYear();
  const monthName = now.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const allCells = [...Array(firstDay).fill(null), ...Array.from({ length: daysInMonth }, (_, i) => i + 1)];

  return (
    <div
      style={{
        width: 160,
        borderRadius: 14,
        background: "rgba(255,255,255,0.25)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.5)",
        boxShadow: "0 8px 32px rgba(31,138,184,0.15)",
        padding: 10,
        flexShrink: 0,
      }}
    >
      {/* Clock */}
      <div className="font-bold" style={{ fontSize: 28, color: "#1a1a1a", lineHeight: 1 }}>
        {hours}:{minutes}
      </div>

      <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)", margin: "6px 0" }} />

      {/* Mini Calendar */}
      <p className="text-center" style={{ fontSize: 8, color: "rgba(0,0,0,0.35)", marginBottom: 4 }}>
        {monthName.toUpperCase()}
      </p>
      <div className="grid grid-cols-7" style={{ gap: 1 }}>
        {["S","M","T","W","T","F","S"].map((d, i) => (
          <div key={i} className="text-center" style={{ fontSize: 7, color: "rgba(0,0,0,0.35)" }}>{d}</div>
        ))}
        {allCells.map((day, i) => (
          <div key={i} className="flex items-center justify-center" style={{ height: 16 }}>
            {day && (
              <div
                className="flex items-center justify-center"
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  fontSize: 7,
                  background: day === today ? "rgba(77,184,232,0.85)" : "transparent",
                  color: day === today ? "#fff" : "rgba(0,0,0,0.65)",
                  fontWeight: day === today ? 700 : 400,
                }}
              >
                {day}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}