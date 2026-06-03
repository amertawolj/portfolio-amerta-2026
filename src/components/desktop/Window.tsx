"use client";
import { motion, useDragControls } from "framer-motion";
import { X, Minus, Square } from "lucide-react";
import { useMobile } from "@/hooks/UseMobile";

type Props = {
  id: string;
  title: string;
  position: { x: number; y: number };
  onClose: () => void;
  onUpdatePosition: (id: string, pos: { x: number; y: number }) => void;
  children: React.ReactNode;
};

export default function Window({
  id,
  title,
  position,
  onClose,
  onUpdatePosition,
  children,
}: Props) {
  const dragControls = useDragControls();
  const isMobile = useMobile();

  if (isMobile) {
    return (
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "min(340px, 90vw)",
          minHeight: 360,
          maxHeight: "80dvh",
          background: "var(--glass-bg-strong)",
          backdropFilter: "var(--glass-blur)",
          border: "1px solid var(--glass-border)",
          boxShadow: "var(--glass-shadow)",
          borderRadius: 12,
          overflow: "hidden",
          zIndex: 9999,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Title Bar */}
        <div
          className="flex items-center px-4 py-2 select-none"
          style={{
            background: "rgba(255,255,255,0.3)",
            borderBottom: "1px solid var(--glass-border)",
            flexShrink: 0,
          }}
        >
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="w-3.5 h-3.5 rounded-full bg-red-400 hover:bg-red-500 flex items-center justify-center group"
            >
              <X size={8} className="opacity-0 group-hover:opacity-100" />
            </button>
            <button className="w-3.5 h-3.5 rounded-full bg-yellow-400 hover:bg-yellow-500" />
            <button className="w-3.5 h-3.5 rounded-full bg-green-400 hover:bg-green-500" />
          </div>
          <span
            className="text-sm font-medium absolute left-1/2 -translate-x-1/2"
            style={{ color: "#1a1a1a" }}
          >
            {title}
          </span>
        </div>

        {/* Content */}
        <div className="p-4 overflow-y-auto" style={{ flex: 1 }}>
          {children}
        </div>
      </div>
    );
  }

  const centerX = typeof window !== "undefined" ? (window.innerWidth - 720) / 2 : 100;
  const centerY = typeof window !== "undefined" ? (window.innerHeight - 400) / 2 : 100;

  return (
    <motion.div
      drag
      dragControls={dragControls}
      dragListener={false}
      dragMomentum={false}
      dragElastic={0}
      initial={{ opacity: 0, scale: 0.9, x: centerX, y: centerY }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.15 }}
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "min(720px, 90vw)",
        minHeight: 360,
        background: "var(--glass-bg-strong)",
        backdropFilter: "var(--glass-blur)",
        border: "1px solid var(--glass-border)",
        boxShadow: "var(--glass-shadow)",
        borderRadius: 12,
        overflow: "hidden",
        zIndex: 50,
      }}
    >
      {/* Title Bar */}
      <div
        className="flex items-center px-4 py-2 cursor-grab active:cursor-grabbing select-none"
        style={{
          background: "rgba(255,255,255,0.3)",
          borderBottom: "1px solid var(--glass-border)",
        }}
        onPointerDown={(e) => dragControls.start(e)}
      >
        <div className="flex items-center gap-2">
          <button
            onClick={onClose}
            className="w-3.5 h-3.5 rounded-full bg-red-400 hover:bg-red-500 flex items-center justify-center group"
          >
            <X size={8} className="opacity-0 group-hover:opacity-100" />
          </button>
          <button className="w-3.5 h-3.5 rounded-full bg-yellow-400 hover:bg-yellow-500 flex items-center justify-center group">
            <Minus size={8} className="opacity-0 group-hover:opacity-100" />
          </button>
          <button className="w-3.5 h-3.5 rounded-full bg-green-400 hover:bg-green-500 flex items-center justify-center group">
            <Square size={8} className="opacity-0 group-hover:opacity-100" />
          </button>
        </div>
        <span
          className="text-sm font-medium absolute left-1/2 -translate-x-1/2"
          style={{ color: "#1a1a1a" }}
        >
          {title}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 overflow-y-auto" style={{ maxHeight: "calc(80vh - 48px)" }}>
        {children}
      </div>
    </motion.div>
  );
}