<!-- BEGIN:nextjs-agent-rules -->
# Next.js Runtime Rules

This is NOT the Next.js you know.

Always verify:
- App Router conventions
- Server Component rules
- latest Next.js APIs
- deprecations
- async request APIs

Before implementing:
- read local Next.js docs in node_modules/next/dist/docs/
- prefer latest stable patterns
- avoid deprecated APIs
<!-- END:nextjs-agent-rules -->

---

# Project AI Rules

This project prioritizes:

1. Performance
2. Simplicity
3. Maintainability
4. Accessibility
5. Mobile-first UX

Always:
- prefer Server Components
- minimize client components
- avoid unnecessary dependencies
- optimize bundle size
- keep components small and typed
- favor readability over abstraction

Never:
- introduce Redux or complex state management
- introduce unnecessary abstractions
- introduce heavy animation systems
- overcomplicate architecture
- over-engineer simple solutions
- use premature optimization

---

# Constraints

- static-first

---

# Decision Hierarchy

When making decisions prioritize:

1. Performance
2. Simplicity
3. UX clarity
4. Maintainability
5. Visual polish

If a feature hurts:
- performance
- simplicity
- maintainability

it should probably NOT be added.