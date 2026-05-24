import { useState } from "react";

export type WindowState = {
  id: string;
  isOpen: boolean;
  position: { x: number; y: number };
};

export function useWindow() {
  const [windows, setWindows] = useState<WindowState[]>([]);

  const openWindow = (id: string) => {
    setWindows((prev) => {
      const exists = prev.find((w) => w.id === id);
      if (exists) {
        return prev.map((w) =>
          w.id === id ? { ...w, isOpen: true } : w
        );
      }
      return [
        ...prev,
        {
          id,
          isOpen: true,
          position: {
            x: 80 + Math.random() * 100,
            y: 80 + Math.random() * 60,
          },
        },
      ];
    });
  };

  const closeWindow = (id: string) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, isOpen: false } : w))
    );
  };

  const updatePosition = (id: string, position: { x: number; y: number }) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, position } : w))
    );
  };

  return { windows, openWindow, closeWindow, updatePosition };
}