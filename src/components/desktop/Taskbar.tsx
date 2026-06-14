"use client";
import { useEffect, useState } from "react";

export default function Taskbar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
        })
      );
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="absolute top-0 left-0 right-0 flex items-center justify-between px-4"
      style={{
        height: "var(--taskbar-height)",
        background: "var(--taskbar-bg)",
        borderBottom: "1px solid var(--taskbar-border)",
        backdropFilter: "var(--glass-blur)",
        zIndex: 30,
      }}
    >
      <span
        className="text-sm font-medium"
        style={{
          color: "var(--icon-label)",
          textShadow: "var(--icon-label-shadow)",
        }}
      >
        Amerta's Personal Space
      </span>
      <span
        className="text-sm"
        style={{
          color: "var(--icon-label)",
          textShadow: "var(--icon-label-shadow)",
        }}
      >
        {time}
      </span>
    </div>
  );
}