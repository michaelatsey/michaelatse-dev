"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const sections = [
  { id: "hero", label: "Hero" },
  { id: "services", label: "Services" },
  { id: "stack", label: "Stack" },
  { id: "about", label: "À propos" },
  { id: "contact", label: "Contact" },
] as const;

export function ScrollDots() {
  const [active, setActive] = useState<string>("hero");

  useEffect(() => {
    const update = () => {
      const vh = window.innerHeight;
      let current: string = sections[0].id;

      for (const { id } of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= vh * 0.5) {
          current = id;
        }
      }

      setActive(current);
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      aria-label="Navigation par sections"
      className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col items-end gap-3.5"
    >
      {sections.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          aria-label={`Aller à ${label}`}
          className="group flex items-center gap-2.5 cursor-pointer"
        >
          <span
            className={cn(
              "text-xs whitespace-nowrap transition-opacity duration-200 hidden md:block",
              active === id
                ? "opacity-100 text-blue-400"
                : "opacity-0 group-hover:opacity-100 text-zinc-500"
            )}
          >
            {label}
          </span>
          <span className="flex items-center justify-center w-3 h-3">
            <span
              className={cn(
                "block rounded-full transition-all duration-300",
                active === id
                  ? "w-2.5 h-2.5 bg-blue-500"
                  : "w-1.5 h-1.5 bg-zinc-600 group-hover:bg-zinc-400"
              )}
            />
          </span>
        </button>
      ))}
    </nav>
  );
}
