# Docs before code

Write these files before application code. Fill every section with this product. Skip `DESIGN.md` for api, cli, and library projects.

Copyright holder: `git config user.name` when it is set. Otherwise use Tony.

## PROJECT_STATUS.md

```markdown
# Project status

type:
repo:
live:

- [ ] 0 intake
- [ ] 1 docs
- [ ] 2 github
- [ ] 3 issues
- [ ] 4 backend
- [ ] 5 frontend
- [ ] 6 review
- [ ] 7 media
- [ ] 8 readme
- [ ] 9 ship
- [ ] 10 closeout

## Notes
```

Mark a skipped phase with the word `skipped` on that line. Mark a finished phase `done`.

## PRD.md

```markdown
# PRD — <name>

## Problem
## Users
## Stories
- As a <user>, I want <action>, so that <outcome>.
## Non-goals
## Success
## Constraints
Free tools only unless a paid tool is listed under Paid later.
## Acceptance criteria
- [ ]
```

## DESIGN.md

Web only. Visual concept, type, color, layout, motion, and the four widths, from the design contract already read this phase.

## AGENTS.md

```markdown
# Agents

- Read `PROJECT_STATUS.md` and `MEMORY.md` before editing.
- Query graphify before a broad file search, once `.planning/graphs/graph.json` exists.
- Keep the theme in `DESIGN.md`. Change it only when the user asks.
- Prefer the free stack recorded in `MEMORY.md`.
- Docs: `PRD.md`, `docs/RUNBOOK.md`, `docs/ARCHITECTURE.md`, `SECURITY.md`.
```

## MEMORY.md

```markdown
# Memory

## Decisions
- YYYY-MM-DD — decision — why

## Stack
- choice — why

## Paid later
- suggestion — why it is not installed
```

Add a line when a decision is made. Do not dump logs or transcripts here.

## SKILLS.md

```markdown
# Skills this repo expects

- launch-project — bootstrap and resume
- setup-matt-pocock-skills — `docs/agents/` tracker config
- to-issues — vertical-slice GitHub issues from `PRD.md`
- gsd-graphify — query `.planning/graphs/` before broad search
```

Add a row when a skill was actually used. One line each: name and why.

## LICENSE.md

MIT. Year is the current year. Holder from the copyright rule above.

```markdown
MIT License

Copyright (c) <year> <holder>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## SECURITY.md

```markdown
# Security policy

## Reporting
Use GitHub private vulnerability reporting on this repository.
Do not open a public issue for a security report.
Do not include exploit details, credentials, or live customer data.

## Supported versions
| Version | Supported |
| --- | --- |
| 0.1.x | yes |

## Secrets
Runtime secrets belong in the host environment. `.env.example` lists keys with empty values.
```

## CONTRIBUTING.md

```markdown
# Contributing

- Read `PRD.md` and `AGENTS.md`.
- Branch from `main`. Conventional commits.
- `npm test` passes before a pull request.
- UI changes keep `DESIGN.md`, including reduced motion and the four widths.
```

## CHANGELOG.md

```markdown
# Changelog

## 0.1.0

- Initial public release.
```

Update this when cutting the release.

## docs/ARCHITECTURE.md

One page: runtime, request path, data store, and where tests live. Name modules. Skip a second copy of the PRD.

## docs/RUNBOOK.md

```markdown
# Run

## Requirements
## Setup
## Develop
## Test
## Build
## Deploy
## Environment
See `.env.example`.
```

The deploy section gets the live URL, or the exact unpaid next step when deploy was blocked.

## docs/WORKFLOW.md

A mermaid flowchart of the real runtime path: user action, API, data, response. This is the source for the workflow image. Keep node ids free of spaces.

## .env.example

One key per line, empty value, comment above each key explaining who reads it. Omit the file when the app has no configuration.
