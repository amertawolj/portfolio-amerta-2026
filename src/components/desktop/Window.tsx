"use client";
import { motion, useDragControls } from "framer-motion";
import { X, Minus, Square } from "lucide-react";

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
  children,
}: Props) {
  const dragControls = useDragControls();

  return (
    <motion.div
      drag
      dragControls={dragControls}
      dragListener={false}
      dragMomentum={false}
      dragElastic={0}
      initial={{ opacity: 0, scale: 0.9, x: position.x, y: position.y }}
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

      <div
        className="flex items-center justify-between px-4 py-2 cursor-grab active:cursor-grabbing select-none"
        style={{
          background: "rgba(255,255,255,0.3)",
          borderBottom: "1px solid var(--glass-border)",
        }}
        onPointerDown={(e) => dragControls.start(e)}
      >
        {/* Window Controls */}
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

      <div className="p-4 overflow-y-auto" style={{ maxHeight: "calc(80vh - 48px)" }}>
        {children}
      </div>
    </motion.div>
  );
}