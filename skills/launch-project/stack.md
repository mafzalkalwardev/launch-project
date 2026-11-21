# Free stack

Use the default for the project type. Switch only when the PRD names a stack or the default cannot meet a written requirement. Record the choice and the reason in `MEMORY.md`.

Package manager is npm unless the repo already has pnpm or bun.

## Defaults

**Web, public pages (SEO matters):** Next.js App Router, React, GSAP, Framer Motion. SQLite through Drizzle and `better-sqlite3` only when the PRD stores data. With no persistence, add no database.

**Web, and the user named Svelte:** SvelteKit and GSAP. Do not add Framer Motion.

**API:** Hono and Vitest. SQLite the same way, only when the PRD stores data. Use Fastify only when the PRD needs a plugin Hono does not provide. Record that reason.

**CLI:** Node, TypeScript, Vitest, a `bin` entry.

**Library:** TypeScript, Vitest, `package.json` `exports`. No GitHub Pages. No `npm publish`.

## Scripts

`package.json` scripts:

- `dev` — local server or watcher
- `test` — Vitest, one command, no watch mode in CI
- `lint` — the project's linter, or `tsc --noEmit` when there is no linter yet
- `build` — production build

## Tests

Vitest. Cover the main API or command before UI work. For web, add one test of the critical path. Add Playwright only when the PRD requires a browser test. Still verify the UI in the browser at 320, 768, 1024, and 1440.

## Workflow

Trunk-based on `main`. Conventional commits (`docs:`, `feat:`, `fix:`, `chore:`). Order of work: PRD, vertical issues, test-first slices, CI on push, free deploy. Fix a failing test before starting the next slice.

## Repo hygiene

`.gitignore` includes:

```
node_modules/
.env
.env.*
!.env.example
dist/
.next/
graphify-out/
```

Add `docs/media/demo.mp4` only when that file is over 10MB.

Commit `.env.example` with empty values and a comment per key. Never commit a real secret.

## Paid later

Do not install these. List any that the PRD would eventually need under `MEMORY.md` "Paid later", with one line on why they waited:

- Hosted Postgres
- Sentry or another paid error tracker
- A custom domain
- A VPS
- Paid auth
- Paid analytics

Accounts, when the PRD requires them: better-auth, or GitHub OAuth. Add no auth until the PRD says so.
