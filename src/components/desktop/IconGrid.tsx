import FolderIcon from "./FolderIcon";

type Props = {
  onOpenWindow: (id: string) => void;
};

const icons = [
  {
    id: "uiux",
    label: "UI/UX Projects",
    icon: "/icons/folder-uiux.png",
    position: { top: "12%", left: "6%" },
  },
  {
    id: "graphic",
    label: "Graphic Design",
    icon: "/icons/folder-graphicdesign.png",
    position: { top: "45%", left: "4%" },
  },
  {
    id: "other",
    label: "Other Projects",
    icon: "/icons/folder-other.png",
    position: { top: "18%", left: "20%" },
  },
  {
    id: "about",
    label: "About Me",
    icon: "/icons/folder-aboutme.png",
    position: { top: "50%", left: "20%" },
  },

  {
    id: "awards",
    label: "Awards",
    icon: "/icons/folder-awards.png",
    position: { top: "50%", left: "30%" },
  },
];

export default function IconGrid({ onOpenWindow }: Props) {
  return (
    <div className="absolute inset-0">
      {icons.map((icon) => (
        <div key={icon.id} className="absolute" style={icon.position}>
          <FolderIcon
            label={icon.label}
            icon={icon.icon}
            onClick={() => onOpenWindow(icon.id)}
          />
        </div>
      ))}
    </div>
  );
}