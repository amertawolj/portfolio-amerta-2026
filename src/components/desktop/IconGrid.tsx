"use client";
import FolderIcon from "@/components/shared/FolderIcon";

type Props = {
  onOpenWindow: (id: string) => void;
};

const icons = [
  {
    id: "uiux",
    label: "UI/UX Projects",
    icon: "/icons/folder-uiux.png",
    position: { top: "17%", left: "6%" },
    externalUrl: null,
  },
  {
    id: "graphic",
    label: "Graphic Design",
    icon: "/icons/folder-graphicdesign.png",
    position: { top: "50%", left: "4%" },
    externalUrl: "https://canva.link/bg5v7tcde0l2xm7", 
  },
  {
    id: "other",
    label: "Software Projects",
    icon: "/icons/folder-other.png",
    position: { top: "23%", left: "20%" },
    externalUrl: null,
  },
  {
    id: "about",
    label: "About Me",
    icon: "/icons/folder-aboutme.png",
    position: { top: "65%", left: "20%" },
    externalUrl: null,
  },
  {
    id: "award",
    label: "Awards",
    icon: "/icons/folder-awards.png",
    position: { top: "40%", left: "30%" },
    externalUrl: null,
  },
];

export default function IconGrid({ onOpenWindow }: Props) {
  return (
    <div className="absolute inset-0">
      {icons.map((icon) => (
        <div
          key={icon.id}
          className="absolute"
          style={icon.position}
        >
          <FolderIcon
            label={icon.label}
            icon={icon.icon}
            onClick={() => {
              if (icon.externalUrl) {
                window.open(icon.externalUrl, "_blank");
              } else {
                onOpenWindow(icon.id);
              }
            }}
          />
        </div>
      ))}
    </div>
  );
}