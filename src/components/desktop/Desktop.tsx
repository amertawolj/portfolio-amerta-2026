"use client";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Taskbar from "./Taskbar";
import IconGrid from "./IconGrid";
import Window from "./Window";
import ProjectDetail from "./ProjectDetail";
import { useWindow } from "@/hooks/UseWindow";
import { projects, profile, awards, Project, Award } from "@/data/Projects";
import MusicWidget from "./MusicWidget";
import ClockWidget from "./ClockWidget";
import StickyNote from "./StickyNote";
import PhotoWidget from "./PhotoWidget";


export default function Desktop() {
  const { windows, openWindow, closeWindow, updatePosition } = useWindow();
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const getContent = (id: string) => {
    switch (id) {
      case "uiux":
        return activeProject && activeProject.category === "uiux" ? (
          <ProjectDetail
            project={activeProject}
            onBack={() => setActiveProject(null)}
          />
        ) : (
          <div className="grid grid-cols-2 gap-3">
            {projects
              .filter((p) => p.category === "uiux")
              .map((p) => (
                <div
                  key={p.id}
                  className="rounded-lg p-3 cursor-pointer"
                  style={{ background: "rgba(255,255,255,0.4)" }}
                  onClick={() => setActiveProject(p)}
                >
                  <div
                    className="w-full rounded-md mb-2 overflow-hidden"
                    style={{aspectRatio: "664/280", background: "rgba(77,184,232,0.3)" }}
                  >
                    <img
                      src={p.thumbnail}
                      alt={p.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
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
                    style={{ aspectRatio: "16/9", background: "rgba(90,181,52,0.3)" }}
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
                    style={{ aspectRatio: "16/9", background: "rgba(232,83,122,0.3)" }}
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
                padding: "12px 12px",
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
      case "award":
        return (
          <div className="grid grid-cols-2 gap-4">
            {awards.map((a) => (
              <div
                key={a.id}
                className="rounded-lg overflow-hidden cursor-pointer"
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
                {/* Info */}
                <div className="p-3">
                  <p className="text-sm font-medium text-gray-800">{a.title}</p>
                  <p className="text-xs text-gray-500 mt-1">{a.issuer}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{a.year}</p>
                </div>
              </div>
            ))}
          </div>
        );
        return null;
    }
  };

  const windowTitles: Record<string, string> = {
    uiux: "UI/UX Projects",
    graphic: "Graphic Design Projects",
    other: "Other Projects",
    about: "About Me",
    award: "Awards & Certificates",
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

      <div className="absolute" style={{ top: 64, right: 24, zIndex: 10 }}>
        <ClockWidget />
      </div>

      <div className="absolute" style={{ top: 50, right: "20%", zIndex: 10 }}>
        <MusicWidget />
      </div>

      <div className="absolute" style={{ top: 80, right: "41%", zIndex: 10 }}>
        <StickyNote text="welcome to amerta's personal space!" color="0" />
      </div>

      <div className="absolute" style={{ bottom: 80, right: "25%", zIndex: 10 }}>
        <PhotoWidget
          src="/photos/cat.jpg"
          caption="silly car 🐱"
          rotation={-3}
        />
      </div>

      <div className="absolute" style={{ bottom: 140, right: "35%", zIndex: 10 }}>
        <PhotoWidget
          src="/photos/jatinangor.jfif"
          caption="i miss nangor:(("
          rotation={2}
        />
      </div>

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