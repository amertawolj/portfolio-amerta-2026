"use client";
import { profile } from "@/data/Projects";
import { useMobile } from "@/hooks/UseMobile";

export default function AboutMeContent() {
  const isMobile = useMobile();

  if (isMobile) {
    return (
      <div className="flex flex-col gap-4">
        {/* Photo — top, square, rounded */}
        <div
          className="mx-auto"
          style={{
            width: 140,
            height: 140,
            borderRadius: 20,
            overflow: "hidden",
            background: "rgba(200,200,200,0.2)",
            flexShrink: 0,
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

        {/* Name */}
        <div className="text-center">
          <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "rgba(0,0,0,0.45)" }}>
            Name
          </p>
          <h2 className="font-bold leading-tight" style={{ fontSize: 20, color: "#1a1a1a" }}>
            {profile.name}
          </h2>
        </div>

        {/* Role + Place */}
        <div className="flex justify-center gap-8">
          <div className="text-center">
            <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "rgba(0,0,0,0.45)" }}>Role</p>
            <p className="font-bold text-sm" style={{ color: "#1a1a1a" }}>{profile.role}</p>
          </div>
          <div className="text-center">
            <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "rgba(0,0,0,0.45)" }}>Place</p>
            <p className="font-bold text-sm" style={{ color: "#1a1a1a" }}>{profile.place}</p>
          </div>
        </div>

        {/* Bio */}
        <p className="text-sm leading-relaxed text-center" style={{ color: "rgba(0,0,0,0.7)" }}>
          {profile.bio}
        </p>

        {/* Tools */}
        <div
          className="flex flex-col items-center gap-3"
          style={{
            borderTop: "1px solid rgba(0,0,0,0.1)",
            background: "rgba(255,255,255,0.2)",
            borderRadius: 12,
            padding: "16px 12px",
          }}
        >
          <p className="text-xs uppercase tracking-widest" style={{ color: "rgba(0,0,0,0.45)" }}>
            Tools Used
          </p>
          <div className="flex gap-4">
            {profile.tools.map((tool) => (
              <div key={tool.name} className="flex flex-col items-center gap-1">
                <img
                  src={tool.icon}
                  alt={tool.name}
                  style={{ width: 48, height: 48, borderRadius: 12, objectFit: "contain" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Desktop layout
  return (
    <div className="flex flex-col" style={{ minHeight: 380 }}>
      <div className="flex" style={{ minHeight: 340 }}>
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
        <div className="flex flex-col justify-center gap-4 p-6" style={{ flex: 1 }}>
          <div>
            <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "rgba(0,0,0,0.45)" }}>Name</p>
            <h2 className="font-bold leading-tight" style={{ fontSize: 22, color: "#1a1a1a" }}>
              {profile.name}
            </h2>
          </div>
          <div className="flex gap-8">
            <div>
              <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "rgba(0,0,0,0.45)" }}>Role</p>
              <p className="font-bold text-sm" style={{ color: "#1a1a1a" }}>{profile.role}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "rgba(0,0,0,0.45)" }}>Place</p>
              <p className="font-bold text-sm" style={{ color: "#1a1a1a" }}>{profile.place}</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: "rgba(0,0,0,0.7)" }}>{profile.bio}</p>
        </div>
      </div>
      <div
        className="flex flex-col items-center gap-3"
        style={{
          borderTop: "1px solid rgba(0,0,0,0.1)",
          background: "rgba(255,255,255,0.2)",
          padding: "16px 12px",
          marginTop: "auto",
        }}
      >
        <p className="text-xs uppercase tracking-widest" style={{ color: "rgba(0,0,0,0.45)" }}>
          Software & Framework Used
        </p>
        <div className="flex gap-4">
          {profile.tools.map((tool) => (
            <div key={tool.name} className="flex flex-col items-center gap-1">
              <img
                src={tool.icon}
                alt={tool.name}
                style={{ width: 48, height: 48, borderRadius: 12, objectFit: "contain" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
