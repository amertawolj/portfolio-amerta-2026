import Taskbar from "./Taskbar";
import IconGrid from "./IconGrid";

export default function Desktop() {
  return (
    <main
      className="relative w-screen h-screen overflow-hidden"
      style={{
        backgroundImage: "url('/wallpaper-desktop.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <IconGrid />
      <Taskbar />
    </main>
  );
}