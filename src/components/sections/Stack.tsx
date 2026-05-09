import { stack } from "@/data/content";
import { SectionWrapper } from "@/components/shared/SectionWrapper";

export function Stack() {
  return (
    <SectionWrapper id="stack" label="Technologies">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Stack technique
      </h2>
      <p className="text-zinc-400 mb-12 max-w-md leading-relaxed">
        Des technologies modernes choisies pour leur fiabilité, leurs
        performances et la qualité du développement.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {(Object.entries(stack) as [string, readonly string[]][]).map(
          ([category, techs]) => (
            <div key={category}>
              <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-4">
                {category}
              </p>
              <div className="flex flex-wrap gap-2">
                {techs.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm text-zinc-300 border border-white/[0.1] bg-white/[0.03] px-3.5 py-1.5 rounded-full transition-colors duration-200 hover:border-white/20 hover:text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </SectionWrapper>
  );
}
