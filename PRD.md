# PRD — launch-project

## Problem

A new Cursor project starts without a brief, a free stack, repo metadata, or a single review. The agent improvises, repeats work, and spends tokens rereading the repo.

## Users

A developer using Cursor who starts a new project, repo, or app and wants the same bootstrap every time.

## Stories

- As a developer, I want docs written before code, so that the build follows a brief.
- As a developer, I want a public MIT GitHub repo with a description and topics, so that the project is findable.
- As a developer, I want backend tests green before interface work, so that the core path is real.
- As a developer, I want one review against the brief, so that leftovers become issues instead of a second rewrite.

## Non-goals

- A hosted web app for this repository. The product is the skill.
- npm publish.
- Paid hosting, a custom domain, or a VPS.
- Replacing Matt Pocock's issue skills or GSD by copying their text into this repo.

## Success

- `skills/launch-project/SKILL.md` is present, named `launch-project`, and under 500 lines.
- Its description says what the skill does and when to use it.
- Every reference file it links exists in the same folder.
- `npm test` passes.
- The GitHub repo is public, MIT-licensed, and has a description and topics.

## Constraints

Free tools only. GitHub, GitHub Actions, and Vitest. No paid service is installed.

## Acceptance criteria

- [ ] Skill folder matches the personal-store source for this version
- [ ] Policy docs exist: `LICENSE.md`, `SECURITY.md`, `AGENTS.md`, `MEMORY.md`, `SKILLS.md`
- [ ] Validator tests pass in CI
- [ ] README states what the skill does, how to install it, and how to run the tests
- [ ] Repo description and topics are set
- [ ] `v0.1.0` is released when tests are green
