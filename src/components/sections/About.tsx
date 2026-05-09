import { about, person } from "@/data/content";
import { SectionWrapper } from "@/components/shared/SectionWrapper";

export function About() {
  return (
    <SectionWrapper id="about" label="À propos">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {person.name}
          </h2>
          <p className="text-zinc-400 leading-relaxed text-[1.0625rem]">
            {about.bio}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-6">
            Domaines d&apos;expertise
          </p>
          <div className="space-y-4">
            {about.focus.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"
                  aria-hidden="true"
                />
                <span className="text-sm text-zinc-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
