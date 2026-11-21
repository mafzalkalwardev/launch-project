# Run

## Requirements

Node.js 22 and npm. GitHub CLI for publishing.

## Setup

```bash
npm install
```

## Develop

```bash
npm run dev
```

## Test

```bash
npm test
```

## Build

```bash
npm run build
```

`build` typechecks the tests. The published artifact is the skill folder, not a bundle.

## Install the skill

```bash
npx skills add mafzalkalwardev/launch-project --skill launch-project
```

## Deploy

No host. This library is the GitHub repo. The release is `v0.1.0`.

## Environment

None. There is no `.env.example`.
