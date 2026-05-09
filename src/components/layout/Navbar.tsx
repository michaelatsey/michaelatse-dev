import Link from "next/link";
import { person } from "@/data/content";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#stack", label: "Stack" },
  { href: "#about", label: "À propos" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-[#0a0b0c]/90 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-24 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-semibold text-white tracking-tight"
        >
          {person.name}
        </Link>
        <nav className="hidden md:flex items-center gap-8" aria-label="Navigation principale">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-400 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <a
          href={`mailto:${person.email}`}
          className="text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition-colors duration-200"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
