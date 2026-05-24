"use client";
import { motion } from "framer-motion";

const socials = [
  {
    id: "linkedin",
    label: "LinkedIn",
    icon: "/icons/linkedin.png",
    url: "https://www.linkedin.com/in/wa-ode-amerta-lambelu-jamaluddin",
  },
  {
    id: "instagram",
    label: "Instagram",
    icon: "/icons/instagram.png",
    url: "https://instagram.com/waodeamertalj",
  },
  {
    id: "email",
    label: "Email",
    icon: "/icons/email.png",
    url: "https://mail.google.com/mail/?view=cm&to=waodeamerta1@gmail.com",
  },
  {
    id: "cv",
    label: "CV",
    icon: "/icons/cv.png",
    url: "https://docs.google.com/document/d/1GI34O8lsfAyaIjzmNWAa6RjhyJVUcdUl/edit?usp=sharing&ouid=114274225155320206825&rtpof=true&sd=true",
  },
];

export default function SocialDock() {
  return (
    <div
      className="absolute bottom-6 flex items-end px-6 py-3"
      style={{
        left: "50%",
        transform: "translateX(-50%)",
        width: "calc(100vw - 32px)",
        maxWidth: 400,  // ← cap di desktop supaya tidak terlalu lebar
        justifyContent: "space-around",
        background: "rgba(255,255,255,0.2)",
        backdropFilter: "blur(20px)",
        borderRadius: 24,
        border: "1px solid rgba(255,255,255,0.5)",
        boxShadow: "0 8px 32px rgba(31,138,184,0.2)",
        zIndex: 20,
      }}
    >
      {socials.map((s) => (
        <motion.a
          key={s.id}
          href={s.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1"
          whileHover={{ scale: 1.25, y: -8 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          <img
            src={s.icon}
            alt={s.label}
            style={{
              width: 52,
              height: 52,
              borderRadius: 14,
              objectFit: "cover",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            }}
            className="md:w-[52px] md:h-[52px] w-[64px] h-[64px]"
          />
          <span
            className="text-xs"
            style={{
              color: "rgba(255,255,255,0.9)",
              textShadow: "0 1px 3px rgba(0,0,0,0.6)",
            }}
          >
            {s.label}
          </span>
        </motion.a>
      ))}
    </div>
  );
}