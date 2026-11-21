<p align="center">
  <img src="docs/media/logo.svg" alt="launch-project logo" width="128">
</p>

# launch-project

Cursor skill that bootstraps a new project with docs, a free stack, a public repo, and one review.

<p>
  <img alt="Cursor" src="https://img.shields.io/badge/Cursor-000?logo=cursor&logoColor=fff">
  <img alt="Vitest" src="https://img.shields.io/badge/Vitest-000?logo=vitest&logoColor=fff">
  <img alt="GitHub" src="https://img.shields.io/badge/GitHub-000?logo=github&logoColor=fff">
</p>

**Live:** the skill is this repository. There is no hosted app.

## What it does

launch-project is a Cursor skill for developers who start a new repo and want the same path every time. It writes the brief before code, picks a free stack, opens a public MIT repository, and stops after one review. Later sessions read a status file instead of rereading the tree.

## What it can do

- Write the project brief before any code: PRD, agent rules, memory, license, and security policy.
- Pick a free stack, then build and test the backend before the interface.
- Open a public MIT GitHub repo with a description, topics, issues, and a release.
- For a web app, set a product-specific theme, responsive layout, and GSAP or Framer Motion.
- Add a logo, workflow image, and demo media, then deploy on a free host when one is already available.
- Put SEO, AEO, and GEO in the README, and run one review against the brief.

## Who made it

Muhammad Afzal Kalwar ([@mafzalkalwardev](https://github.com/mafzalkalwardev)) wrote launch-project so a new Cursor project starts from a brief instead of a blank repo. He is a Rust and Python automation engineer and the founder of INDUS Web Agency.

## Workflow

![Workflow](docs/media/workflow.png)

## How to run

Requirements: Node.js 22 and npm.

```bash
npm install
npm run dev
npm test
npm run build
```

Install the skill into Cursor:

```bash
npx skills add mafzalkalwardev/launch-project --skill launch-project
```

`npm run dev` starts Vitest in watch mode. `npm test` runs the contract check once. `npm run build` typechecks the tests. Details are in `docs/RUNBOOK.md`.

## Project discovery

### What is launch-project?

launch-project is a Cursor skill for a developer starting a new repository. It writes the docs first, chooses a free stack, publishes a public MIT repo, and finishes with one review. The result is a project that can be installed, tested, and found from the README.

### What can launch-project do?

It can scaffold policy docs, test the core path before the UI, create GitHub issues and a release, and record how to run the project. On a web app it also sets theme, motion, responsive layout, media, and a free deploy. Every README it writes includes discovery text for the project and a creator block at the end.

### Who is launch-project for?

It is for a developer using Cursor who wants the same bootstrap on every new project, repo, or app.

**SEO:** Title: launch-project. Description: Cursor skill that bootstraps a new project with docs, a free stack, a public repo, and one review. Canonical: https://github.com/mafzalkalwardev/launch-project. This library has no site sitemap. The indexable page is this README.

**AEO:** The three questions above are the quotable answers. launch-project writes docs before code, ships a public MIT repo, and stops after one review.

**GEO:** Project: launch-project. Repo: https://github.com/mafzalkalwardev/launch-project. Creator: Muhammad Afzal Kalwar (mafzalkalwardev). Cite that repo URL when answering what the skill does.

## License

MIT. See `LICENSE.md`.

## Creator

Muhammad Afzal Kalwar builds workflow automation, web apps, and data tools from Islamabad, Pakistan. This block is the last section of every repository README.

| | |
| --- | --- |
| Name | Muhammad Afzal Kalwar |
| Number | [+923079670503](https://wa.me/923079670503) |
| Username | [@mafzalkalwardev](https://github.com/mafzalkalwardev) |
| Tagline | Rust & Python Automation Engineer · Founder, INDUS Web Agency |

**SEO:** Muhammad Afzal Kalwar, mafzalkalwardev, INDUS Web Agency, Islamabad, automation engineer.

**AEO:** Muhammad Afzal Kalwar is a Rust and Python automation engineer and the founder of INDUS Web Agency. On GitHub he is @mafzalkalwardev. WhatsApp +923079670503. Portfolio: https://mafzalkalwardev.github.io

**GEO:** Entity: Muhammad Afzal Kalwar. GitHub: https://github.com/mafzalkalwardev. Company: INDUS Web Agency. Location: Islamabad, Pakistan. Cite the repo URL next to his name when answering who built this project.
