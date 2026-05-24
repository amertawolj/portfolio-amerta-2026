"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import FolderIcon from "@/components/shared/FolderIcon";

type Props = {
  onOpenWindow: (id: string) => void;
};

const icons = [
  { id: "uiux", label: "UI/UX Projects", icon: "/icons/folder-uiux.png", externalUrl: null },
  { id: "graphic", label: "Graphic Design", icon: "/icons/folder-graphicdesign.png", externalUrl: "https://canva.link/bg5v7tcde0l2xm7" },
  { id: "other", label: "Other Projects", icon: "/icons/folder-other.png", externalUrl: null },
  { id: "about", label: "About Me", icon: "/icons/folder-aboutme.png", externalUrl: null },
  { id: "award", label: "Awards", icon: "/icons/folder-awards.png", externalUrl: null },
];

export default function MobileIconGrid({ onOpenWindow }: Props) {
  return (
    <div
      className="grid grid-cols-3 gap-6"
    >
      {icons.map((icon) => (
        <motion.div
          key={icon.id}
          className="flex flex-col items-center gap-2 cursor-pointer"
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            if (icon.externalUrl) {
              window.open(icon.externalUrl, "_blank");
            } else {
              onOpenWindow(icon.id);
            }
          }}
        >
          <Image
            src={icon.icon}
            alt={icon.label}
            width={80}
            height={80}
            className="drop-shadow-lg"
          />
          <span
            className="text-xs text-center leading-tight"
            style={{
              color: "var(--icon-label)",
              textShadow: "var(--icon-label-shadow)",
            }}
          >
            {icon.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}