"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowLeft, ExternalLink } from "lucide-react";
import { Project } from "@/data/Projects";

type Props = {
  project: Project;
  onBack: () => void;
};

export default function ProjectDetail({ project, onBack }: Props) {
  const [currentImage, setCurrentImage] = useState(0);

  const prevImage = () =>
    setCurrentImage((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));

  const nextImage = () =>
    setCurrentImage((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));

  return (
    <div className="flex flex-col gap-4">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-1 text-sm w-fit"
        style={{ color: "rgba(0,0,0,0.5)" }}
      >
        <ArrowLeft size={14} />
        Back to Projects
      </button>

      {/* Image Slider */}
      <div
        className="relative w-full overflow-hidden"
        style={{ borderRadius: 10, height: 280, background: "rgba(0,0,0,0.08)" }}
      >
        {project.images.length > 0 ? (
          <>
            <img
              src={project.images[currentImage]}
              alt={`${project.title} ${currentImage + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />

            {/* Arrows */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 flex items-center justify-center"
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.7)",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center"
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.7)",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  <ChevronRight size={18} />
                </button>

                {/* Dots */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {project.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentImage(i)}
                      style={{
                        width: i === currentImage ? 16 : 6,
                        height: 6,
                        borderRadius: 99,
                        background:
                          i === currentImage
                            ? "rgba(255,255,255,1)"
                            : "rgba(255,255,255,0.5)",
                        transition: "all 0.2s",
                      }}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <div
            className="w-full h-full flex items-center justify-center text-sm"
            style={{ color: "rgba(0,0,0,0.3)" }}
          >
            No images
          </div>
        )}
      </div>

      {/* Title + Year */}
      <div className="flex items-start justify-between">
        <h2 className="font-bold text-lg" style={{ color: "#1a1a1a" }}>
          {project.title}
        </h2>
        <span className="text-sm" style={{ color: "rgba(0,0,0,0.4)" }}>
          {project.year}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed" style={{ color: "rgba(0,0,0,0.65)" }}>
        {project.description}
      </p>

      {/* Chips */}
      <div className="flex flex-wrap gap-2">
        {/* Role chips */}
        {project.role.split(",").map((r) => (
          <span
            key={r}
            className="text-xs px-3 py-1 rounded-full font-medium"
            style={{
              background: "rgba(77,184,232,0.2)",
              color: "rgba(26,111,168,1)",
              border: "1px solid rgba(77,184,232,0.4)",
            }}
          >
            {r.trim()}
          </span>
        ))}
        {/* Tools chips */}
        {project.tools.map((tool) => (
          <span
            key={tool}
            className="text-xs px-3 py-1 rounded-full font-medium"
            style={{
              background: "rgba(255,255,255,0.5)",
              color: "rgba(0,0,0,0.55)",
              border: "1px solid rgba(0,0,0,0.12)",
            }}
          >
            {tool}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-2 mt-2">
        {project.prototypeUrl && (
          <a
            href={project.prototypeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-medium"
            style={{
              background: "rgba(77,184,232,0.85)",
              color: "#fff",
              backdropFilter: "blur(4px)",
            }}
          >
            <ExternalLink size={14} />
            Open Prototype
          </a>
        )}
        {project.pitchdeckUrl && (
          <a
            href={project.pitchdeckUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-medium"
            style={{
              background: "rgba(255,255,255,0.5)",
              color: "rgba(0,0,0,0.7)",
              border: "1px solid rgba(0,0,0,0.12)",
              backdropFilter: "blur(4px)",
            }}
          >
            <ExternalLink size={14} />
            Open Pitch Deck
          </a>
        )}
      </div>
    </div>
  );
}
