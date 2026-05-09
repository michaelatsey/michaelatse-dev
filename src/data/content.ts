export const person = {
  name: "Michael Atse",
  title: "Senior Full-Stack Engineer & Software Architect",
  location: "France",
  email: "michaelatsey@gmail.com",
  github: "https://github.com/michaelatsey",
  linkedin: "https://linkedin.com/in/michaelatse",
  available: true,
} as const;

export const services = [
  {
    id: "architecture",
    title: "Backend & Architecture Système",
    description:
      "Conception de plateformes backend scalables en .NET, systèmes distribués, Domain-Driven Design et architectures API résilientes. Pensées pour la performance, la maintenabilité et l'évolution à long terme.",
    icon: "server" as const,
    span: "md:col-span-2",
  },
  {
    id: "saas",
    title: "Ingénierie Produit SaaS",
    description:
      "Développement SaaS de bout en bout — de l'architecture au déploiement. Plateformes métier scalables orientées fiabilité, efficacité opérationnelle et besoins produit réels.",
    icon: "layers" as const,
    span: "md:col-span-1",
  },
  {
    id: "microservices",
    title: "Systèmes Distribués",
    description:
      "Conception de systèmes distribués, architectures modulaires, workflows event-driven et écosystèmes backend scalables basés sur les microservices et les patterns CQRS.",
    icon: "network" as const,
    span: "md:col-span-1",
  },
  {
    id: "fullstack",
    title: "Full-Stack Engineering",
    description:
      "Développement end-to-end couvrant backend, frontend, infrastructure et APIs avec les écosystèmes .NET et TypeScript. Accent fort sur React, Next.js, la performance et les architectures maintenables.",
    icon: "code-2" as const,
    span: "md:col-span-2",
  },
  {
    id: "technical-consulting",
    title: "Conseil & Architecture Review",
    description:
      "Audit d'architecture, revues de code et accompagnement technique pour les équipes qui souhaitent améliorer leur système, réduire leur dette technique ou structurer leur croissance.",
    icon: "clipboard-check" as const,
    span: "md:col-span-1",
  },
  {
    id: "mobile",
    title: "Applications Mobiles",
    description:
      "Applications mobiles cross-platform avec React Native et Expo. Focus sur les performances, les expériences offline-first, les codebases maintenables et la livraison rapide.",
    icon: "smartphone" as const,
    span: "md:col-span-1",
  },
] as const;

export const stack = {
  Backend: [
    ".NET",
    "ASP.NET Core",
    "C#",
    "PHP",
    "Laravel",
    "Node.js",
    "PostgreSQL",
    "SQL Server",
    "Entity Framework Core",
    "REST APIs",
    "Redis",
    "RabbitMQ",
    "MassTransit",
    "Microservices",
    "Modular Monoliths",
    "Domain-Driven Design",
    "CQRS",
    "Event-Driven Architecture",
    "Multi-Tenant SaaS",
  ],
  Frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "TailwindCSS",
    "shadcn/ui",
    "TanStack Query",
    "Zustand",
    "React Hook Form",
    "Framer Motion",
    "Vite",
  ],
  Mobile: ["React Native", "Expo", "Offline-first", "Xamarin"],
  DevOps: [
    "Docker",
    "CI/CD",
    "Nginx",
    "Traefik",
    "GitHub Actions",
    "Linux",
    "Cloudflare",
    "Hetzner",
    "Coolify",
  ],
} as const;

export const about = {
  bio: "Ingénieur senior basé en France, spécialisé dans la conception de plateformes SaaS modernes, les architectures backend et les systèmes distribués. J'interviens principalement sur des écosystèmes .NET et TypeScript, avec un accent fort sur la qualité logicielle, l'architecture propre et la fiabilité. Mon approche combine profondeur technique, pragmatisme architectural et maintenabilité à long terme.",
  focus: [
    "Architecture SaaS",
    "Architecture logicielle",
    "Systèmes distribués",
    "Ingénierie produit",
    "Conception d'APIs",
    "Développement frontend moderne",
    "Développement mobile",
  ],
} as const;
