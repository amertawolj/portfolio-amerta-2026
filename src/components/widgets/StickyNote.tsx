"use client";

type Props = {
  text: string;
  color?: string;
};

const COLORS = [
  { bg: "rgba(255,242,130,0.75)", border: "rgba(255,220,50,0.5)" },
  { bg: "rgba(180,230,255,0.75)", border: "rgba(100,190,255,0.5)" },
  { bg: "rgba(200,255,180,0.75)", border: "rgba(120,220,100,0.5)" },
  { bg: "rgba(255,200,220,0.75)", border: "rgba(255,150,180,0.5)" },
];

export default function StickyNote({ text, color = "0" }: Props) {
  const { bg, border } = COLORS[parseInt(color) % COLORS.length];

  return (
    <div
      style={{
        width: 200,
        borderRadius: 12,
        background: bg,
        backdropFilter: "blur(8px)",
        border: `1px solid ${border}`,
        boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div
        className="flex items-center px-3 py-2"
        style={{ background: border }}
      >
        <span className="text-xs font-medium" style={{ color: "rgba(0,0,0,0.5)" }}>
          Note
        </span>
      </div>

      {/* Content */}
      <div className="p-3">
        <p
          className="text-sm leading-relaxed whitespace-pre-wrap"
          style={{ color: "rgba(0,0,0,0.75)", minHeight: 80 }}
        >
          {text}
        </p>
      </div>
    </div>
  );
}