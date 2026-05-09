import { person } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-8 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-zinc-600">
          © {new Date().getFullYear()} {person.name}
        </p>
        <p className="text-sm text-zinc-600">{person.location}</p>
      </div>
    </footer>
  );
}
