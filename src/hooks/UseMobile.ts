"use client";
import { useEffect, useState } from "react";

export function useMobile() {
  const [isMobile, setMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isMobile;
}