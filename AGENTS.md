<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project Overview

- **Framework**: Next.js 16.4.3 (App Router) with React 19.3.0
- **Styling**: Tailwind CSS v4 via `@tailwindcss/turbopack` + `tw-animate-css`
- **UI Library**: shadcn/ui (base-nova style) with `@base-ui/react` and `@shadcn/react`
- **Build Tool**: Turbopack (enabled in `next.config.ts`)
- **Compiler**: React Compiler (`babel-plugin-react-compiler`) enabled
- **TypeScript**: Strict mode, path aliases `@/*` → `./src/*`

## Commands

```bash
npm run dev      # Start dev server with Turbopack
npm run build    # Production build
npm run start    # Run production server
npm run lint     # ESLint (next/core-web-vitals + next/typescript)
```

No test suite configured. No typecheck script — rely on `npm run build` for type errors.

## Key Config Files

| File | Purpose |
|------|---------|
| `next.config.ts` | Turbopack CSS rules, React Compiler, partial prefetching, agent feedback |
| `tsconfig.json` | Strict TS, bundler module resolution, `@/*` aliases |
| `eslint.config.mjs` | Flat config extending `eslint-config-next` |
| `components.json` | shadcn/ui registry config (base-nova, RSC, CSS variables) |
| `src/app/globals.css` | Tailwind v4 imports, theme tokens, dark mode via `.dark` class |

## Architecture Notes

- **App Router only** — `src/app/` with `layout.tsx` and `page.tsx`
- **RSC by default** — components are Server Components unless `"use client"` directive
- **Path aliases**: `@/components`, `@/lib`, `@/hooks`, `@/components/ui` (see `components.json`)
- **Fonts**: Geist Sans + Geist Mono via `next/font/google` (CSS variables)
- **Dark mode**: Class-based (`.dark` on `<html>`), not media query
- **CSS**: Tailwind v4 syntax (`@import "tailwindcss"`, `@theme inline`, `@custom-variant`)

## shadcn/ui Specifics

- Components in `src/components/ui/` (50+ components pre-installed)
- Style: `base-nova` (not default/new-york)
- CSS variables enabled (`cssVariables: true`)
- Icon library: `lucide-react`
- Utils: `cn` from `cn` package (re-exported from `@/lib/utils`)

## Experimental Features Enabled

- `reactCompiler: true` — React 19 compiler (no `useMemo`/`useCallback` needed)
- `partialPrefetching: true` — Partial prerendering
- `cacheComponents: true` — Component caching
- `experimental.agentFeedback: true` — AI agent feedback integration

## Gotchas

- **No `tailwind.config.ts`** — Tailwind v4 config lives in `globals.css` via `@theme inline`
- **No `postcss.config.js`** — Not needed with Turbopack + `@tailwindcss/turbopack`
- **React Compiler** handles memoization automatically; avoid manual `useMemo`/`useCallback`
- **Turbopack** is the default dev server; some webpack loaders/plugins won't work
- **Next.js 16** has breaking changes vs 15 — check `node_modules/next/dist/docs/` for migration guides