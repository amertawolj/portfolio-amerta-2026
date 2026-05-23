"use client";
import { AnimatePresence } from "framer-motion";
import Taskbar from "./Taskbar";
import IconGrid from "./IconGrid";
import Window from "./Window";
import { useWindow } from "@/hooks/UseWindow";
import { projects, profile } from "@/data/Projects";

const windowConfig: Record<string, { title: string; content: React.ReactNode }> = {};

export default function Desktop() {
  const { windows, openWindow, closeWindow, updatePosition } = useWindow();

  const getContent = (id: string) => {
    switch (id) {
      case "uiux":
        return (
          <div className="grid grid-cols-2 gap-3">
            {projects
              .filter((p) => p.category === "uiux")
              .map((p) => (
                <div
                  key={p.id}
                  className="rounded-lg p-3"
                  style={{ background: "rgba(255,255,255,0.4)" }}
                >
                  <div
                    className="w-full h-24 rounded-md mb-2"
                    style={{ background: "rgba(77,184,232,0.3)" }}
                  />
                  <p className="text-sm font-medium text-gray-800">{p.title}</p>
                  <p className="text-xs text-gray-500 mt-1">{p.year}</p>
                </div>
              ))}
          </div>
        );
      case "graphic":
        return (
          <div className="grid grid-cols-2 gap-3">
            {projects
              .filter((p) => p.category === "graphic")
              .map((p) => (
                <div
                  key={p.id}
                  className="rounded-lg p-3"
                  style={{ background: "rgba(255,255,255,0.4)" }}
                >
                  <div
                    className="w-full h-24 rounded-md mb-2"
                    style={{ background: "rgba(90,181,52,0.3)" }}
                  />
                  <p className="text-sm font-medium text-gray-800">{p.title}</p>
                  <p className="text-xs text-gray-500 mt-1">{p.year}</p>
                </div>
              ))}
          </div>
        );
      case "other":
        return (
          <div className="grid grid-cols-2 gap-3">
            {projects
              .filter((p) => p.category === "other")
              .map((p) => (
                <div
                  key={p.id}
                  className="rounded-lg p-3"
                  style={{ background: "rgba(255,255,255,0.4)" }}
                >
                  <div
                    className="w-full h-24 rounded-md mb-2"
                    style={{ background: "rgba(232,83,122,0.3)" }}
                  />
                  <p className="text-sm font-medium text-gray-800">{p.title}</p>
                  <p className="text-xs text-gray-500 mt-1">{p.year}</p>
                </div>
              ))}
          </div>
        );
      case "about":
        return (
          <div className="flex flex-col" style={{ minHeight: 380 }}>
            {/* Top Section */}
            <div className="flex" style={{ minHeight: 340 }}>
              {/* Photo */}
              <div
                className="flex-shrink-0"
                style={{
                  width: 240,
                  height: 320,
                  borderRadius: 12,
                  background: "rgba(200,200,200,0.2)",
                  overflow: "hidden",
                }}
              >
                <img
                  src={profile.photo}
                  alt={profile.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                  }}
                />
              </div>

              {/* Info */}
              <div
                className="flex flex-col justify-center gap-4 p-6"
                style={{ flex: 1 }}
              >
                {/* Name */}
                <div>
                  <p
                    className="text-xs uppercase tracking-widest mb-1"
                    style={{ color: "rgba(0,0,0,0.45)" }}
                  >
                    Name
                  </p>
                  <h2
                    className="font-bold leading-tight"
                    style={{ fontSize: 22, color: "#1a1a1a" }}
                  >
                    {profile.name}
                  </h2>
                </div>

                {/* Role + Place */}
                <div className="flex gap-8">
                  <div>
                    <p
                      className="text-xs uppercase tracking-widest mb-1"
                      style={{ color: "rgba(0,0,0,0.45)" }}
                    >
                      Role
                    </p>
                    <p className="font-bold text-sm" style={{ color: "#1a1a1a" }}>
                      {profile.role}
                    </p>
                  </div>
                  <div>
                    <p
                      className="text-xs uppercase tracking-widest mb-1"
                      style={{ color: "rgba(0,0,0,0.45)" }}
                    >
                      Place
                    </p>
                    <p className="font-bold text-sm" style={{ color: "#1a1a1a" }}>
                      {profile.place}
                    </p>
                  </div>
                </div>

                {/* Bio */}
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(0,0,0,0.7)" }}
                >
                  {profile.bio}
                </p>
              </div>
            </div>

            {/* Bottom — Tools */}
            <div
              className="flex flex-col items-center gap-3 py-6"
              style={{
                borderTop: "1px solid rgba(0,0,0,0.1)",
                background: "rgba(255,255,255,0.2)",
                borderRadius: "12px 12px 12px 12px",
                padding: "24px 16px",
                marginTop: "auto",
              }}
            >
              <p
                className="text-xs uppercase tracking-widest"
                style={{ color: "rgba(0,0,0,0.45)" }}
              >
                Software & Framework Used
              </p>
              <div className="flex gap-4">
                {profile.tools.map((tool) => (
                  <div key={tool.name} className="flex flex-col items-center gap-1">
                    <img
                      src={tool.icon}
                      alt={tool.name}
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: 12,
                        objectFit: "contain",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const windowTitles: Record<string, string> = {
    uiux: "UI/UX Projects",
    graphic: "Graphic Design Projects",
    other: "Other Projects",
    about: "About Me",
  };

  return (
    <main
      className="relative w-screen h-screen overflow-hidden"
      style={{
        backgroundImage: "url('/wallpaper-desktop.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Taskbar />
      <IconGrid onOpenWindow={openWindow} />

      <AnimatePresence>
        {windows
          .filter((w) => w.isOpen)
          .map((w) => (
            <Window
              key={w.id}
              id={w.id}
              title={windowTitles[w.id] || w.id}
              position={w.position}
              onClose={() => closeWindow(w.id)}
              onUpdatePosition={updatePosition}
            >
              {getContent(w.id)}
            </Window>
          ))}
      </AnimatePresence>
    </main>
  );
}