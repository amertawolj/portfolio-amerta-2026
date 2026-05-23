export default function Taskbar() {
  const time = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });

  return (
    <div
      className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-4"
      style={{
        height: "var(--taskbar-height)",
        background: "var(--taskbar-bg)",
        borderTop: "1px solid var(--taskbar-border)",
        backdropFilter: "var(--glass-blur)",
      }}
    >
      <span
        className="text-sm font-medium"
        style={{
          color: "var(--icon-label)",
          textShadow: "var(--icon-label-shadow)",
        }}
      >
        Amerta's Portfolio
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