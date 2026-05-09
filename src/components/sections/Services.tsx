import {
  Layers,
  Server,
  Smartphone,
  Code2,
  Network,
  ClipboardCheck,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/data/content";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { cn } from "@/lib/utils";

const iconMap = {
  layers: Layers,
  server: Server,
  smartphone: Smartphone,
  network: Network,
  "clipboard-check": ClipboardCheck,
  "code-2": Code2,
} satisfies Record<string, LucideIcon>;

type ServiceItem = (typeof services)[number];

function BentoCard({
  service,
  className,
  size = "default",
}: {
  service: ServiceItem;
  className?: string;
  size?: "large" | "compact" | "default";
}) {
  const Icon = iconMap[service.icon];
  return (
    <div
      className={cn(
        "rounded-xl border border-white/[0.08] bg-white/[0.02]",
        "hover:bg-white/[0.05] hover:border-white/[0.14] hover:-translate-y-0.5",
        "transition-all duration-300",
        size === "large" ? "p-8" : size === "compact" ? "p-5" : "p-6",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center justify-center rounded-lg bg-blue-500/10 border border-blue-500/20",
          size === "large" ? "w-12 h-12 mb-6" : "w-10 h-10 mb-4"
        )}
      >
        <Icon
          className={cn(
            "text-blue-400",
            size === "large" ? "h-6 w-6" : "h-5 w-5"
          )}
          aria-hidden="true"
        />
      </div>
      <h3
        className={cn(
          "font-semibold text-white",
          size === "large" ? "text-xl mb-3" : "text-base mb-2"
        )}
      >
        {service.title}
      </h3>
      <p
        className={cn(
          "text-zinc-400 leading-relaxed",
          size === "large" ? "text-[0.9375rem]" : "text-sm"
        )}
      >
        {service.description}
      </p>
    </div>
  );
}

export function Services() {
  const [arch, saas, micro, fullStack, consulting, mobile] = services;

  return (
    <SectionWrapper id="services" label="Services">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Ce que je construis
      </h2>
      <p className="text-zinc-400 mb-12 max-w-md leading-relaxed">
        Spécialisé dans l&apos;ingénierie full-stack, les architectures backend
        et les produits SaaS pour des équipes techniques ambitieuses.
      </p>

      {/* Bento grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* Row 1: Architecture (2/3) + right column (1/3) */}
        <BentoCard
          service={arch}
          size="large"
          className="md:col-span-2 min-h-[260px]"
        />
        <div className="flex flex-col gap-3">
          <BentoCard service={saas} size="compact" className="flex-1" />
          <BentoCard service={micro} size="compact" className="flex-1" />
        </div>

        {/* Row 2: Full-Stack (full width) */}
        <BentoCard service={fullStack} className="md:col-span-3" />

        {/* Row 3: Technical (1/3) + Mobile (2/3) */}
        <BentoCard service={consulting} />
        <BentoCard service={mobile} className="md:col-span-2" />
      </div>
    </SectionWrapper>
  );
}
