---
name: launch-project
description: >-
  Builds a new software project end to end: docs before code, a free stack,
  backend then frontend, a public MIT GitHub repo, logo and demo media, SEO
  AEO GEO, deploy, Matt Pocock issues, and one review. Use when the user
  starts a new project, repo, or app, or says launch-project, scaffold a
  project, or create a repository.
---

# Launch Project

Full-auto bootstrap. Defaults: public GitHub repo, MIT `LICENSE.md`. Pause only when a secret is required or a step would spend money. If `gh auth status` fails, stop and say what is missing.

Do not run `gsd-new-project` in this flow. Do not copy Matt Pocock skill text into the repo. Do not `npm publish`. Do not buy a domain, open a paid plan, or provision a VPS. Do not add a code of conduct. One review cycle.

## Resume

If `PROJECT_STATUS.md` exists, read it and continue at the first phase that is not `done` or `skipped`. Leave finished phases alone.

## Token rules

- Read only the reference file for the current phase.
- After `.planning/graphs/graph.json` exists, query before a broad search. Run `node "$HOME/.cursor/gsd-core/bin/gsd-tools.cjs" graphify query <term>` from the repo. On Windows the binary is `%USERPROFILE%/.cursor/gsd-core/bin/gsd-tools.cjs`.
- Subagents return a short summary.
- Do not paste images, GIFs, or video into chat.
- On PowerShell, pass multi-line `git` and `gh` bodies with a here-string. Bash HEREDOC is for bash.

## Phase 0 — Intake

Need a project name and a one-line idea. If either is missing, ask once, then continue. Kebab-case the folder and the repo name.

Infer `type`: `web`, `api`, `cli`, or `library`.

| Type | Skip |
| --- | --- |
| `web` | nothing |
| `api`, `cli`, `library` | `DESIGN.md`, theme, motion, screenshots, GIF, GitHub Pages |

Create `~/Projects` when it is missing, then `~/Projects/<kebab-name>`. On Windows that is `C:/Users/<user>/Projects/<kebab-name>`.

Call `move_agent_to_root` with `rootPath` set to that absolute path before any other file write. Then `git init`.

Copy the status checklist from [docs.md](docs.md) into `PROJECT_STATUS.md`. Mark skipped phases `skipped`.

## Phase 1 — Docs before code

Read [docs.md](docs.md) and write every required file. For `web`, also read [design.md](design.md) and write `DESIGN.md`, including the one-paragraph visual concept, before any component.

No application code until the required docs exist. Commit them as `docs: add project brief and policies`. If the commit fails because `user.name` or `user.email` is unset, stop and say so. Do not change git config.

## Phase 2 — GitHub

Read [github.md](github.md) through "Topics". Create the public repo, set the description and topics, and push.

## Phase 3 — Issues

If `setup-matt-pocock-skills` and `to-issues` are not installed:

```bash
npx skills add mattpocock/skills --skill setup-matt-pocock-skills --skill to-issues
```

If the CLI accepts one `--skill` per run, run it twice. Then follow those skills. Supply the answers yourself: GitHub tracker, canonical triage labels, single-context domain docs. The written `PRD.md` is the quiz approval. Do not stop for a second breakdown review.

Slice the PRD into tracer bullets. Each issue is one narrow path through schema, API, UI, and tests, demoable on its own. Prefer AFK slices. Publish blockers first with `gh issue create`. Backend slices block frontend slices (`gh issue create --blocked-by <number>`). Label AFK slices `ready-for-agent` and HITL slices `ready-for-human`. Create any missing label with `gh label create`. File issues only in this repo. Confirm `gh repo view --json nameWithOwner` before the first create.

Record issue numbers in `PROJECT_STATUS.md`.

## Phase 4 — Backend first

Read [stack.md](stack.md). Pick the default for this type. Record the choice and why in `MEMORY.md`. Add the GitHub Actions test workflow and Dependabot file from [github.md](github.md).

Scripts: `dev`, `test`, `lint`, `build`. Get API or core tests green before any UI. Fix failures in place. Commit as `feat: add working backend`.

## Phase 5 — Frontend

`web` only. Otherwise mark `skipped`.

Read [design.md](design.md). Keep the visual concept. If it matches the ban list, rewrite it before coding. Build responsive layouts at 320, 768, 1024, and 1440. Verify 320 and 1440 in the browser, and check 768 and 1024. GSAP for scroll and timelines. Framer Motion only when the stack is React, and only for enter, exit, and layout. Honor `prefers-reduced-motion`.

Commit as `feat: add responsive interface`.

## Phase 6 — One review

Check the build against the PRD acceptance criteria:

- Criteria met, or filed as an open follow-up issue
- Tests pass
- No secrets in git
- API errors return a clear status
- UI follows `DESIGN.md` when this is a web project
- README commands match `package.json` once phase 8 has run; if it has not, re-check after phase 8

Fix blockers once. Do not start a second review. Push.

## Phase 7 — Media

Read [media.md](media.md). Logo only when the repo has none. Always add favicon and Open Graph image for `web`. Screenshots and a GIF for `web`. A workflow PNG for every type. A demo video when the software runs.

## Phase 8 — README and discovery

Read [seo.md](seo.md). Write the README in that order. Include what the project can do, who made it, a project SEO / AEO / GEO section, and the creator block at the end. For `web`, implement title, description, canonical, Open Graph, JSON-LD, `sitemap.xml`, `robots.txt`, and `llms.txt` in the site.

## Phase 9 — Ship

Read [github.md](github.md) from "Release" through "Deploy". Set description, topics, and homepage. Tag `v0.1.0` when tests are green and the primary command or site runs. Deploy on the fastest free host already available. If deploy needs a secret or a paid tier, write the exact next step in `docs/RUNBOOK.md` and in `MEMORY.md` under "Paid later", then continue.

## Phase 10 — Closeout

Read [github.md](github.md) "Closeout". Comment on and close issues this build finished. Leave real follow-ups open.

Enable graphify. Merge this into `.planning/config.json` without dropping existing keys:

```json
{ "graphify": { "enabled": true } }
```

From the repo root, build inline. Do not spawn a subagent for the build. The binary is `~/.cursor/gsd-core/bin/gsd-tools.cjs` (on Windows, `$env:USERPROFILE/.cursor/gsd-core/bin/gsd-tools.cjs`).

Run `node <that-binary> graphify build`. When the JSON action is `spawn_agent`, continue in the same shell. That name is historical.

Run `graphify update .`. Create `.planning/graphs/` and copy in `graphify-out/graph.json`, `graphify-out/GRAPH_REPORT.md`, and `graphify-out/graph.html` when that file exists. Then run `node <that-binary> graphify build snapshot` and `node <that-binary> graphify status`.

If `graphify` is not on PATH, record the skip in `PROJECT_STATUS.md` and finish. A graph failure does not fail the launch.

Update `MEMORY.md` and mark phase 10 `done`. Push. Report the repo URL, the live URL when there is one, and any skipped step.
