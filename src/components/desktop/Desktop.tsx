"use client";
import { createPortal } from "react-dom";
import Taskbar from "./Taskbar";
import IconGrid from "./IconGrid";
import Window from "./Window";
import ProjectDetail from "./ProjectDetail";
import MobileIconGrid from "@/components/mobile/MobileIconGrid";
import MobileClockWidget from "@/components/mobile/MobileClockWidget";
import ClockWidget from "@/components/widgets/ClockWidget";
import MusicWidget from "@/components/widgets/MusicWidget";
import StickyNote from "@/components/widgets/StickyNote";
import PhotoWidget from "@/components/widgets/PhotoWidget";
import SocialDock from "@/components/widgets/SocialDock";
import { projects, profile, awards, Project } from "@/data/Projects";
import { useWindow } from "@/hooks/UseWindow";
import { useState, useEffect } from "react";
import { useMobile } from "@/hooks/UseMobile";
import { AnimatePresence } from "framer-motion";
import AboutMeContent from "@/components/shared/AboutMeContent";
import LoadingScreen from "@/components/shared/LoadingScreen";

export default function Desktop() {
  const { windows, openWindow, closeWindow, updatePosition } = useWindow();
  const [activeUiux, setActiveUiux] = useState<Project | null>(null);
  const [activeGraphic, setActiveGraphic] = useState<Project | null>(null);
  const isMobile = useMobile();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  const [booting, setBooting] = useState(true);

  if (booting) return <LoadingScreen onDone={() => setBooting(false)} />;
  
  if (isMobile === null)
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
      </main>
    );

  const getContent = (id: string) => {
    switch (id) {
      case "uiux":
        return activeUiux ? (
          <ProjectDetail
            project={activeUiux}
            onBack={() => setActiveUiux(null)}
          />
        ) : (
          <div className="grid grid-cols-2 gap-3">
            {projects
              .filter((p) => p.category === "uiux")
              .map((p) => (
                <div
                  key={p.id}
                  className="rounded-lg p-3 cursor-pointer hover:opacity-90 transition-opacity"
                  style={{ background: "rgba(255,255,255,0.4)" }}
                  onClick={() => setActiveUiux(p)}
                >
                  <div
                    className="w-full rounded-md mb-2 overflow-hidden"
                    style={{
                      aspectRatio: "664/280",
                      background: "rgba(77,184,232,0.3)",
                    }}
                  >
                    <img
                      src={p.thumbnail}
                      alt={p.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
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
                <a
                  key={p.id}
                  href={p.projectUrl ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg p-3 cursor-pointer hover:opacity-90 transition-opacity block"
                  style={{
                    background: "rgba(255,255,255,0.4)",
                    textDecoration: "none",
                  }}
                >
                  <div
                    className="w-full rounded-md mb-3 overflow-hidden"
                    style={{
                      aspectRatio: "664/280",
                      background: "rgba(232,83,122,0.3)",
                    }}
                  >
                    <img
                      src={p.thumbnail}
                      alt={p.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="flex items-start justify-between mb-1">
                    <p className="text-sm font-medium text-gray-800">
                      {p.title}
                    </p>
                    <p className="text-xs text-gray-400 shrink-0 ml-2">
                      {p.year}
                    </p>
                  </div>
                  <p
                    className="text-xs leading-relaxed mb-2 line-clamp-2"
                    style={{ color: "rgba(0,0,0,0.55)" }}
                  >
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {p.role.split(",").map((r) => (
                      <span
                        key={r}
                        className="text-xs px-2 py-0.5 rounded-full font-medium"
                        style={{
                          background: "rgba(77,184,232,0.2)",
                          color: "rgba(26,111,168,1)",
                          border: "1px solid rgba(77,184,232,0.4)",
                        }}
                      >
                        {r.trim()}
                      </span>
                    ))}
                    {p.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{
                          background: "rgba(255,255,255,0.5)",
                          color: "rgba(0,0,0,0.5)",
                          border: "1px solid rgba(0,0,0,0.1)",
                        }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
          </div>
        );

      case "about":
        return <AboutMeContent />;

      case "award":
        return (
          <div className="grid grid-cols-2 gap-4">
            {awards.map((a) => (
              <div
                key={a.id}
                className="rounded-lg overflow-hidden"
                style={{ background: "rgba(255,255,255,0.4)" }}
              >
                <div
                  className="w-full overflow-hidden"
                  style={{
                    aspectRatio: "1.414/1",
                    background: "rgba(255,248,220,0.5)",
                  }}
                >
                  <img
                    src={a.certificate}
                    alt={a.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <div className="p-3">
                  <p className="text-sm font-medium text-gray-800">{a.title}</p>
                  <p className="text-xs text-gray-500 mt-1">{a.issuer}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{a.year}</p>
                </div>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  const windowTitles: Record<string, string> = {
    uiux: "UI/UX Projects",
    graphic: "Graphic Design Projects",
    other: "Software Projects",
    about: "About Me",
    award: "Awards & Certificates",
  };

  return (
    <>
      <main
        className="relative w-screen h-screen overflow-hidden"
        style={{
          backgroundImage: "url('/wallpaper-desktop.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Taskbar />

        {!isMobile ? (
          // DESKTOP
          <>
            <div
              className="absolute"
              style={{ top: 64, right: 24, zIndex: 10 }}
            >
              <ClockWidget />
            </div>
            <div
              className="absolute"
              style={{ top: 50, right: "20%", zIndex: 10 }}
            >
              <MusicWidget />
            </div>
            <div
              className="absolute"
              style={{ top: 80, right: "41%", zIndex: 10 }}
            >
              <StickyNote
                text="welcome to amerta's personal space!"
                color="0"
              />
            </div>
            <div
              className="absolute"
              style={{ bottom: 80, right: "25%", zIndex: 10 }}
            >
              <PhotoWidget
                src="/photos/cat.jpg"
                caption="silly car 🐱"
                rotation={-3}
              />
            </div>
            <div
              className="absolute"
              style={{ bottom: 140, right: "35%", zIndex: 10 }}
            >
              <PhotoWidget
                src="/photos/jatinangor.jfif"
                caption="i miss nangor:(("
                rotation={2}
              />
            </div>
            <IconGrid onOpenWindow={openWindow} />
          </>
        ) : (
          // MOBILE
          <div
            className="flex flex-col"
            style={{
              paddingTop: 52,
              paddingBottom: 120,
              height: "100%",
              overflow: "auto",
            }}
          >
            {/* Icon Grid */}
            <div className="flex justify-center px-6 py-4">
              <MobileIconGrid onOpenWindow={openWindow} />
            </div>

            {/* Top widgets — clock + music */}
            <div className="flex items-start justify-between px-4 gap-3">
              <MobileClockWidget />
              <MusicWidget compact />
            </div>

            {/* Photos — vertikal, centered */}
            <div className="flex flex-col items-center gap-3 px-4 py-2">
              <PhotoWidget
                src="/photos/cat.jpg"
                caption="silly car 🐱"
                rotation={-3}
                size="small"
              />
              <PhotoWidget
                src="/photos/jatinangor.jfif"
                caption="i miss nangor:(("
                rotation={2}
                size="small"
              />
            </div>
          </div>
        )}

        <SocialDock />
      </main>

      {mounted && createPortal(
        <AnimatePresence>
          {windows.filter((w) => w.isOpen).map((w) => (
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
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}