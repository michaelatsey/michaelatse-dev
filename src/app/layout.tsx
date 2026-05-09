import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://michaelatse.dev"),
  title: "Michael Atse — Senior Full-Stack Engineer & Software Architect",
  description:
    "Ingénieur freelance senior spécialisé en développement SaaS, architecture backend, systèmes distribués et applications mobiles. Basé en France. Disponible pour des missions freelance.",
  keywords: [
    "développeur freelance",
    "ingénieur full-stack",
    "développeur Next.js",
    "architecte SaaS",
    "développeur .NET",
    "ingénieur TypeScript",
    "freelance France",
    "architecture logicielle",
  ],
  authors: [{ name: "Michael Atse" }],
  openGraph: {
    title: "Michael Atse — Senior Full-Stack Engineer & Software Architect",
    description:
      "Ingénieur freelance senior spécialisé en développement SaaS, architecture backend et systèmes distribués.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Michael Atse — Senior Full-Stack Engineer & Software Architect",
    description:
      "Ingénieur freelance senior spécialisé en développement SaaS, architecture backend et systèmes distribués.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
