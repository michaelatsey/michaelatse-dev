"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Retour en haut de page"
      className={cn(
        "fixed bottom-6 right-4 md:right-6 z-40",
        "flex items-center justify-center w-10 h-10 rounded-full",
        "border border-white/[0.12] bg-[#0a0b0c]/80 backdrop-blur-sm",
        "text-zinc-400 hover:text-white hover:border-white/25 hover:bg-white/[0.08]",
        "transition-all duration-300 cursor-pointer",
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-3 pointer-events-none"
      )}
    >
      <ChevronUp className="h-4 w-4" aria-hidden="true" />
    </button>
  );
}
