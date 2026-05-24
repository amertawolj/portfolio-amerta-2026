"use client";
import { useEffect, useState } from "react";

export default function ClockWidget() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  if (!now) return null;

  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  const dayName = now.toLocaleDateString("en-US", { weekday: "long" });
  const dateStr = now.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const year = now.getFullYear();
  const month = now.getMonth();
  const today = now.getDate();

  const monthName = now.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const blanks = Array(firstDay).fill(null);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const allCells = [...blanks, ...days];

  return (
    <div
      className="flex flex-col gap-3 p-4"
      style={{
        width: 260,
        borderRadius: 16,
        background: "rgba(255,255,255,0.25)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.5)",
        boxShadow: "0 8px 32px rgba(31,138,184,0.15)",
      }}
    >
      {/* Clock */}
      <div className="flex flex-col items-center">
        <div
          className="font-bold tracking-tight"
          style={{ fontSize: 52, color: "#1a1a1a", lineHeight: 1 }}
        >
          {hours}:{minutes}
          <span style={{ fontSize: 28, color: "rgba(0,0,0,0.35)" }}>:{seconds}</span>
        </div>
        <p className="text-sm mt-1" style={{ color: "rgba(0,0,0,0.5)" }}>
          {dayName}, {dateStr}
        </p>
      </div>

      {/* Divider */}
      <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }} />

      {/* Calendar */}
      <div>
        <p
          className="text-xs uppercase tracking-widest text-center mb-2"
          style={{ color: "rgba(0,0,0,0.35)" }}
        >
          {monthName}
        </p>

        <div className="grid grid-cols-7 mb-1">
          {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
            <div
              key={d}
              className="text-center"
              style={{ fontSize: 10, color: "rgba(0,0,0,0.35)" }}
            >
              {d}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-y-0.5">
          {allCells.map((day, i) => (
            <div
              key={i}
              className="flex items-center justify-center"
              style={{ height: 24 }}
            >
              {day && (
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    fontSize: 11,
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
    </div>
  );
}