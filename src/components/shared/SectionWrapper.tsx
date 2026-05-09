import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/shared/FadeIn";

interface SectionWrapperProps {
  id: string;
  label: string;
  children: ReactNode;
  className?: string;
}

export function SectionWrapper({
  id,
  label,
  children,
  className,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-16 py-12 md:py-24 px-6 md:px-12 lg:px-24", className)}
    >
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="text-xs font-semibold text-blue-500 uppercase tracking-widest mb-8">
            {label}
          </p>
          {children}
        </FadeIn>
      </div>
    </section>
  );
}
