# CLAUDE.md

@AGENTS.md

# michaelatse.dev — Freelance Landing Page

Version: 2.0

---

# 1. PROJECT PURPOSE

This project is the personal freelance landing page of Michael Atse.

The website exists to:
- establish technical credibility
- generate qualified freelance leads
- communicate senior engineering capability
- showcase architectural/product thinking
- support the transition from employee → independent consultant

This is NOT:
- a startup SaaS frontend
- a corporate website
- an agency website
- a visual experimentation playground

This IS:
- a premium engineering portfolio
- a conversion-oriented landing page
- a professional technical identity

---

# 2. CURRENT CONTEXT

## Professional Context

- Michael is currently employed full-time in an ESN
- Freelance activity is currently complementary income
- No immediate financial pressure
- Long-term objective: gradual transition to independent consulting

This means:
- prioritize quality over speed
- build sustainable foundations
- avoid rushed technical decisions
- optimize long-term maintainability

---

## Technical Context

Environment:
- Windows 11
- WSL2 Ubuntu 24.04
- Username: cryxtol
- Machine: Home-MinisForum

Main development workflow:
- Claude Code
- VS Code
- Continue.dev
- Ollama
- PNPM
- GitHub
- Coolify

The development experience should remain:
- lightweight
- local-first
- productivity-oriented

---

# 3. PRODUCT POSITIONING

The positioning should communicate:

- senior freelance engineer
- SaaS-oriented mindset
- architecture expertise
- modern full-stack engineering
- product-oriented thinking
- execution capability

The landing page should feel:
- premium
- technical
- modern
- calm
- confident

NOT:
- loud
- flashy
- marketing-heavy
- startup cliché

---

# 4. TARGET CLIENTS

Primary targets:
- SaaS founders
- startups
- CTOs
- product companies
- technical teams
- companies needing architecture expertise

Secondary targets:
- agencies
- recruiters
- engineering leads
- collaborators

The site should attract:
- serious technical clients
- long-term missions
- architecture/product-oriented projects

NOT:
- low-budget mass freelancing
- generic outsourcing work

---

# 5. CORE PRODUCT GOALS

The landing page must:

1. Explain who Michael is quickly
2. Show technical credibility immediately
3. Demonstrate modern engineering maturity
4. Generate trust
5. Create direct contact opportunities
6. Stay technically elegant and performant

---

# 6. DESIGN PHILOSOPHY

The website must communicate:

- simplicity
- engineering quality
- restraint
- precision
- professionalism

The best reference mindset is:
> "Senior engineer portfolio"

NOT:
> "Creative agency showcase"

---

# 7. VISUAL IDENTITY

## Theme

Dark-first interface.

Primary background:
- #0a0b0c

Accent color:
- #3B82F6

Visual atmosphere:
- calm
- modern
- technical
- minimal

---

## Typography

Font:
- Geist

Typography priorities:
- large display titles
- clean hierarchy
- breathable spacing
- minimal font variation

Avoid:
- decorative typography
- over-stylized text
- cramped layouts

---

# 8. UX PRINCIPLES

UX must prioritize:

- readability
- clarity
- scanning speed
- responsiveness
- low cognitive load
- fast interactions

Visitors should understand:
- expertise
- services
- positioning
- stack
- contact method

within seconds.

---

# 9. MOBILE-FIRST RULES

Mobile is critical.

The website must:
- feel excellent on phones
- avoid layout overflow
- avoid tiny tap areas
- maintain strong spacing rhythm
- optimize content stacking

Mobile UX takes priority over:
- desktop visual experiments
- excessive animations
- oversized layouts

---

# 10. PERFORMANCE RULES

Performance is part of the brand.

The website must:
- load extremely fast
- avoid unnecessary JS
- minimize client components
- optimize assets aggressively
- remain lightweight

Preferred:
- Server Components
- static rendering
- optimized images
- lazy loading

Avoid:
- unnecessary animations
- large dependencies
- complex runtime logic

---

# 11. STACK RULES

Approved stack:

- Next.js 16+
- TypeScript
- TailwindCSS
- shadcn/ui
- Lucide
- Geist

Deployment:
- GitHub
- Coolify
- Hetzner VPS

Avoid adding:
- Redux
- unnecessary CMS
- heavy animation systems
- unnecessary backend
- database complexity

The project should remain:
- static-first
- simple
- maintainable

---

# 12. ARCHITECTURE PRINCIPLES

The architecture must remain:

- clean
- modular
- composable
- typed
- scalable

Preferred structure:

src/
 ├── app/
 ├── components/
 │    ├── ui/
 │    ├── layout/
 │    ├── sections/
 │    └── shared/
 ├── lib/
 ├── hooks/
 ├── data/
 ├── styles/
 ├── types/
 └── i18n/

---

# 13. COMPONENT RULES

Components must:
- have single responsibility
- stay small
- remain reusable
- remain typed

Avoid:
- giant JSX files
- duplicated logic
- unnecessary abstraction

Preferred:
- section isolation
- reusable primitives
- composable APIs

---

# 14. CONTENT STRATEGY

Tone:
- concise
- technical
- confident
- human
- direct

Avoid:
- buzzwords
- fake startup tone
- exaggerated claims
- generic marketing language

Preferred:
- concrete expertise
- real engineering vocabulary
- product-oriented communication

---

# 15. BILINGUAL STRATEGY

Languages:
- French
- English

Requirements:
- centralized translations
- maintainable dictionaries
- lightweight i18n

Avoid:
- duplicated pages
- hardcoded strings

---

# 16. BENTO GRID RULES

Bento layouts are part of the visual identity.

They should:
- structure scanning
- create rhythm
- highlight expertise/services

Avoid:
- visual clutter
- nested complexity
- uneven balance

The layout must stay:
- breathable
- minimal
- readable

---

# 17. SECTION STRATEGY

## Hero

Must communicate immediately:
- identity
- positioning
- expertise
- CTA

The hero must feel:
- premium
- calm
- technical

Avoid:
- giant paragraphs
- overloaded CTAs
- flashy gimmicks

---

## Services

Focus on:
- SaaS
- Backend
- Full-stack
- Architecture
- Mobile

Avoid:
- listing every technology
- generic agency wording

---

## Technical Stack

Goal:
- reassure technical decision makers

Avoid:
- logo overload
- skill bars
- meaningless percentages

---

## About

Must feel:
- human
- grounded
- experienced

Avoid:
- fake storytelling
- startup guru tone

---

## Contact

Must remain frictionless.

Preferred:
- email
- LinkedIn
- GitHub

Optional later:
- Calendly

Avoid:
- enterprise-style forms
- too many fields

---

# 18. SEO RULES

SEO should target:
- freelance developer
- full-stack engineer
- .NET developer
- Next.js developer
- SaaS architect

Requirements:
- metadata
- OpenGraph
- semantic HTML
- structured headings

---

# 19. ACCESSIBILITY RULES

Accessibility is mandatory.

Requirements:
- semantic HTML
- keyboard navigation
- proper contrast
- focus states
- accessible labels

Avoid:
- hover-only interactions
- low contrast
- inaccessible buttons

---

# 20. ANIMATION RULES

Animations should remain:
- subtle
- performant
- intentional

Preferred:
- fade
- micro transitions
- hover feedback

Avoid:
- animation-heavy UX
- parallax abuse
- scroll hijacking

If using Framer Motion:
- keep usage minimal

---

# 21. CODE QUALITY RULES

Code must:
- be strictly typed
- avoid any
- avoid dead code
- avoid duplicated logic
- remain readable

Preferred:
- typed constants
- extracted configuration
- utility functions
- predictable naming

---

# 22. DATA STRATEGY

Use:
- static typed data
- centralized content files

Avoid:
- backend complexity
- unnecessary APIs
- scattered hardcoded content

Preferred:
- reusable content objects
- maintainable structures

---

# 23. TOOLING & AI STRATEGY

## Primary AI Stack

Claude:
- architecture
- product reasoning
- UX structure
- copy refinement
- technical strategy

Cursor:
- implementation
- refactoring
- repetitive coding

Continue.dev + Ollama:
- local assistance
- autocomplete
- lightweight editing

GitHub Copilot:
- repetitive boilerplate
- utility generation

---

## Recommended External Tools

Design:
- Figma
- Mobbin
- Refero

Deployment:
- Coolify

Monitoring later:
- Sentry
- PostHog

Secrets:
- Doppler

---

# 24. BUSINESS CONTEXT RULES

The freelance business is still being structured.

Constraints:
- no SIRET yet
- low monthly budget
- infrastructure should remain cost-efficient

Therefore:
- avoid unnecessary SaaS subscriptions
- avoid overengineering
- prioritize lean tooling

---

# 25. STRATEGIC RULES

Do NOT:
- overbuild the landing page
- spend months polishing visuals
- chase trends
- build unnecessary backend systems

The landing page is:
- a credibility tool
- a conversion tool
- a portfolio

NOT:
- the final product business itself

---

# 26. LONG-TERM STRATEGY

This landing page should later support:
- reusable freelance templates
- future SaaS positioning
- technical authority
- content publishing
- project showcases

The project should evolve incrementally.

---

# 27. WHAT MUST NEVER HAPPEN

Never turn the project into:
- an overengineered frontend
- an animation showcase
- a generic template clone
- a bloated app

The project must remain:
- elegant
- fast
- technical
- focused

---

# 28. SUCCESS CRITERIA

The project succeeds if:
- the site feels premium
- performance is excellent
- the codebase remains clean
- technical credibility is obvious
- visitors understand the positioning instantly
- freelance opportunities are generated

---

# 29. DECISION FILTER

Before adding anything ask:

1. Does this improve credibility?
2. Does this improve clarity?
3. Does this improve conversion?
4. Does this improve UX?
5. Is this visually necessary?
6. Is this technically necessary?
7. Does this hurt performance?
8. Does this increase maintenance?
9. Would a senior engineer portfolio use this?
10. Is this simplicity or complexity?

If uncertain:
DO NOT ADD IT.

---

# 30. DUMMY DATA

Name: Michael Atse
Title: Senior Full-Stack & Mobile Engineer
Location: France
Email: michaelatsey@gmail.com
GitHub: github.com/michaelatsey
LinkedIn: linkedin.com/in/michaelatse (à confirmer)
Stack: Next.js, React Native, Supabase, Node.js, TypeScript
Services: SaaS Development, Backend Architecture, Mobile Apps