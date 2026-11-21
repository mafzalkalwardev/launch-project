# GitHub

On PowerShell, use a here-string for multi-line bodies.

```powershell
gh issue create --title "Title" --body @"
Body

"@
```

Confirm `gh auth status` before the first write. If it fails, stop.

## Create

From the project root, after the docs commit:

```bash
gh repo create <kebab-name> --public --description "<one sentence, 350 characters or fewer>" --source=. --remote=origin --push
```

Description comes from the PRD problem statement, in one sentence.

If the repo name is taken, stop and report the error. Do not rename the local folder to force a match unless the user picks a new name.

## Topics

Five to eight lowercase topics from the domain and the stack. Hyphens are fine. GitHub topics have no spaces.

```bash
gh repo edit --add-topic <topic> --add-topic <topic>
gh repo edit -d "<same one-sentence description>"
```

Set the homepage after deploy:

```bash
gh repo edit --homepage "<live url>"
```

## CI

`.github/workflows/test.yml`:

```yaml
name: test
on:
  push:
  pull_request:
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - run: npm ci
      - run: npm test
```

`.github/dependabot.yml`:

```yaml
version: 2
updates:
  - package-ecosystem: npm
    directory: /
    schedule:
      interval: weekly
```

`.github/ISSUE_TEMPLATE/task.md`:

```markdown
---
name: Task
about: A bug or a change
title: ""
labels: ""
---

## What happened or what should change

## Acceptance criteria

- [ ]
```

## Release

When tests are green and the primary command or site runs:

```bash
gh release create v0.1.0 --title "v0.1.0" --notes-file CHANGELOG.md
```

If `docs/media/demo.mp4` is over 10MB, do not commit it. Attach it here and link the release asset from the README:

```bash
gh release create v0.1.0 docs/media/demo.mp4 --title "v0.1.0" --notes-file CHANGELOG.md
```

Do not `npm publish`.

## Deploy

Pick the fastest free host that can run this build and is already authenticated.

- Static export or SSG: GitHub Pages.
- Server app, and `npx vercel whoami` already prints a user: Vercel hobby, `npx vercel --yes --prod`.
- API, CLI, or library: no Pages site. The runbook is the delivery. The release above still happens when tests are green.

For Pages, static-export the site (`output: 'export'` on Next.js, adapter-static on SvelteKit). On a project site (`https://<user>.github.io/<repo>/`), set `basePath` and `assetPrefix` to `/<repo>`. Upload path is `out` for Next.js and `build` for Vite or SvelteKit.

Enable the workflow once. A 409 means Pages is already on.

```bash
gh api --method POST repos/{owner}/{repo}/pages -f build_type=workflow
```

`.github/workflows/pages.yml`:

```yaml
name: pages
on:
  push:
    branches: [main]
permissions:
  contents: read
  pages: write
  id-token: write
concurrency:
  group: pages
  cancel-in-progress: true
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: out
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

Change `path: out` to the directory the build writes. After the action finishes, put that URL in `PROJECT_STATUS.md`, the README, and `gh repo edit --homepage`.

If `vercel whoami` asks for a login or a paid plan, skip Vercel and use Pages when the app can be static. When deploy needs a secret or a paid tier, write the exact command and the missing key in `docs/RUNBOOK.md`. Continue the launch.

## Closeout

For each issue this build finished:

```bash
gh issue comment <number> --body "Done in <commit sha>. <one sentence of evidence>."
gh issue close <number>
```

Leave follow-ups open, including anything the review could not fix in one pass.
