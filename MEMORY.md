# Memory

## Decisions

- 2026-11-21 — Treat this repo as a library. The product is a Cursor skill, so there is no web UI, no Pages site, and no `DESIGN.md`.
- 2026-11-21 — Keep the package private and do not `npm publish`. Install with the skills CLI from GitHub.
- 2026-11-21 — Use Vitest to check the skill contract. There is no server to boot.
- 2026-11-21 — Copyright holder is Muhammad Afzal, from `git config user.name`.

## Stack

- TypeScript and Vitest — the skill asks for that pair on a library, and the only code is the contract test.
- npm — the machine default. The repo did not already have pnpm or bun.

## Paid later

- None. A domain, a VPS, and error tracking wait until this skill grows a running service.
