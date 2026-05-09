import { Mail, Globe, GitBranch, type LucideIcon } from "lucide-react";
import { person } from "@/data/content";
import { SectionWrapper } from "@/components/shared/SectionWrapper";

const contactLinks: {
  label: string;
  value: string;
  href: string;
  icon: LucideIcon;
  external?: boolean;
}[] = [
  {
    label: "Email",
    value: person.email,
    href: `mailto:${person.email}`,
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/michaelatsey",
    href: person.github,
    icon: GitBranch,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/michaelatse",
    href: person.linkedin,
    icon: Globe,
    external: true,
  },
];

export function Contact() {
  return (
    <SectionWrapper id="contact" label="Contact">
      <div className="max-w-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Travaillons ensemble
        </h2>
        <p className="text-zinc-400 mb-12 leading-relaxed">
          Disponible pour des missions freelance. Si vous avez un projet ou
          avez besoin d&apos;expertise en ingénierie, n&apos;hésitez pas à me
          contacter.
        </p>

        <div className="space-y-3">
          {contactLinks.map(({ label, value, href, icon: Icon, external }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-4 p-5 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.14] hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex-shrink-0">
                <Icon className="h-5 w-5 text-blue-400" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs text-zinc-500 mb-0.5">{label}</p>
                <p className="text-sm text-zinc-300 group-hover:text-white transition-colors duration-200">
                  {value}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
