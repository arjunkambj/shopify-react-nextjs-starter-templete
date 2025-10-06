# Repository Guidelines

## Project Structure & Module Organization

- `src/app/` – Next.js App Router routes (RSC), layouts, metadata, API routes.
- `src/components/` – Reusable UI (cart, carousel, grids, layout, icons).
- `src/lib/shopify/` – Storefront API GraphQL fragments, queries, mutations, types.
- `src/styles/` – Global styles (Tailwind CSS 4) imported from `src/app/layout.tsx`.
- `public/` – Static assets (favicons, og images).

## Build, Test, and Development Commands

- `bun dev` – Start local dev server with Turbopack at `http://localhost:3000`.
- `bun build` – Create a production build (`.next/`).
- `bun start` – Run the production server locally.
- `bun lint` – Lint using ESLint config in `eslint.config.mjs`.
- `bun check-types` - check for types error.

Environment: copy `.env.example` → `.env.local` and set Shopify keys before `dev`/`build`.

## Coding Style & Naming Conventions

- Language: TypeScript + React 19, Next.js 15 (App Router).
- Indentation: 2 spaces; prefer explicit return types in libs.
- Files/folders: kebab-case (`product-description.tsx`), components export PascalCase.
- Hooks: `useXyz` naming; avoid `any`; use `@/*` path alias (see `tsconfig.json`).
- Linting: follow Next.js + TypeScript rules from `eslint.config.mjs`. Fix warnings before PR.

### UI Libraries

- Icons: Use `@iconify/react`'s `Icon` component for all icons. Prefer `import { Icon } from '@iconify/react'` and avoid inline SVGs unless there's a strong reason (custom one-off or performance-critical case).
- HeroUI: Import all components and utilities from `@heroui/react` only (no deep or subpath imports). The app is wrapped by `HeroProvider` from `src/components/HeroUIProvider.tsx`; keep that pattern for consistent theming and provider setup.

## Testing Guidelines

- No test framework is bundled yet. When adding tests:
  - Unit: Jest + React Testing Library; name files `*.test.ts(x)` near source.
  - E2E: Playwright; place in `tests/` with `e2e/*.spec.ts`.
  - Aim for critical-path coverage (cart, product page, search).
  - Add `bun test` scripts if you introduce a runner.

## Commit & Pull Request Guidelines

- Commits: concise imperative subject (max ~72 chars).
  - Example: `fix: prevent duplicate cart mutations`.
- PRs: include summary, screenshots for UI changes, steps to test, and linked issues.
- Keep PRs focused and small; update docs when behavior/config changes.

## Security & Configuration Tips

- Secrets live in `.env.local` (gitignored). Keys used: `SHOPIFY_STORE_DOMAIN`, `SHOPIFY_STOREFRONT_ACCESS_TOKEN`, `SHOPIFY_REVALIDATION_SECRET`.
- Protect ISR revalidation via `/api/revalidate?secret=...` (see `README.md`).

## Agent-Specific Instructions

- Scope: Only modify files relevant to the task; prefer minimal diffs.
- Reads: Check `README.md`, `next.config.ts`, `tsconfig.json` before changes.
- Writes: Run `bun lint` locally; do not introduce new tools without discussion.
