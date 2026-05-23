"use client";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  label: string;
  icon: string;
  onClick?: () => void;
};

export default function FolderIcon({ label, icon, onClick }: Props) {
  return (
    <motion.div
      className="flex flex-col items-center gap-2 cursor-pointer w-28"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}   // ← ganti dari onDoubleClick
    >
      <Image
        src={icon}
        alt={label}
        width={64}   
        height={64}  
        className="drop-shadow-lg"
      />
      <span
        className="text-xs text-center leading-tight"
        style={{
          color: "var(--icon-label)",
          textShadow: "var(--icon-label-shadow)",
        }}
      >
        {label}
      </span>
    </motion.div>
  );
}