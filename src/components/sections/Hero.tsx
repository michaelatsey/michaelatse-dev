import { ArrowRight, MapPin } from "lucide-react";
import { person } from "@/data/content";

export function Hero() {
  return (
    <section id="hero" className="scroll-mt-16 min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-16">
      <div className="max-w-5xl mx-auto w-full py-12 md:py-24">
        <div className="flex items-center gap-2.5 mb-10 opacity-0 animate-[fadeIn_0.6s_ease-out_0.1s_forwards]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          <span className="text-sm text-zinc-400">
            Disponible pour des missions freelance
          </span>
        </div>

        <h1
          className="text-[clamp(2.75rem,8vw,6.5rem)] font-bold tracking-tight leading-[1.04] mb-8 text-white opacity-0 animate-[fadeSlideIn_0.7s_ease-out_0.2s_forwards]"
        >
          Senior Full-Stack
          <br />
          <span className="text-blue-500">&amp; Software</span>
          <br />
          Architect.
        </h1>

        <p
          className="text-lg md:text-xl text-zinc-400 max-w-lg mb-12 leading-relaxed opacity-0 animate-[fadeSlideIn_0.7s_ease-out_0.35s_forwards]"
        >
          Je conçois des produits SaaS modernes et des architectures scalables
          pour des équipes techniques ambitieuses.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-[fadeSlideIn_0.7s_ease-out_0.5s_forwards]">
          <a
            href={`mailto:${person.email}`}
            className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3.5 rounded-lg transition-colors duration-200"
          >
            Me contacter
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={person.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-white/[0.15] hover:border-white/30 text-zinc-300 hover:text-white font-medium px-6 py-3.5 rounded-lg transition-colors duration-200"
          >
            GitHub
          </a>
        </div>

        <div className="mt-16 flex items-center gap-1.5 text-sm text-zinc-600 opacity-0 animate-[fadeIn_0.6s_ease-out_0.65s_forwards]">
          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
          <span>{person.location}</span>
        </div>
      </div>
    </section>
  );
}
