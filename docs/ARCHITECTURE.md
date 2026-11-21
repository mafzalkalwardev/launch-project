# Architecture

The runtime is the Cursor agent. It loads `skills/launch-project/SKILL.md`, then one reference file for the phase it is in.

| Path | Role |
| --- | --- |
| `skills/launch-project/SKILL.md` | Phase order, gates, token rules |
| `design.md`, `stack.md`, `docs.md`, `github.md`, `media.md`, `seo.md` | Phase references, same folder |
| `tests/skill.test.ts` | Contract test: name, description, line count, links |
| `.github/workflows/test.yml` | Runs `npm test` on push |

There is no database and no request path. The test reads the skill files from disk.
