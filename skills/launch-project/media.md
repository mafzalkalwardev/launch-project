# Media

Store files in `docs/media/`. Do not paste images, GIFs, or video into chat. Commit rasters that the README displays. Screenshots and the GIF are web only. Record any skipped file in `PROJECT_STATUS.md`.

## Logo

Search the repo for an existing logo, favicon, or app icon. If one exists, reuse it.

If none exists, use the environment's image generation tool for a distinctive mark from the `DESIGN.md` colors and motif. Ban a sparkle, a robot, and a generic gradient orb. Save:

- `docs/media/logo.png` — square, readable at 128px
- `public/favicon.ico` or `app/icon.png`, whichever the stack serves
- `docs/media/og.png` — 1200x630, product name plus the mark

Also write `docs/media/logo.svg` tracing the same mark when the generator returns only a raster, so the README stays sharp. The SVG uses the same hex values as `DESIGN.md`.

## Screenshots

Web only. Run the app and capture:

- `docs/media/phone.png` at 390x844
- `docs/media/desktop.png` at 1440x900

Show the real primary screen with real copy from the PRD. Capture a state a user can reach, after any loading motion has settled.

## GIF

Web only. `docs/media/demo.gif`, under 2MB, of the primary flow.

```bash
ffmpeg -y -i docs/media/demo.mp4 -vf "fps=12,scale=800:-1:flags=lanczos,palettegen" docs/media/palette.png
ffmpeg -y -i docs/media/demo.mp4 -i docs/media/palette.png -lavfi "fps=12,scale=800:-1:flags=lanczos[x];[x][1:v]paletteuse" docs/media/demo.gif
```

Delete `docs/media/palette.png` after the GIF exists. If the GIF is over 2MB, drop the frame rate to 8 and the width to 640 and run the same two commands again.

## Workflow image

Every project type. `docs/WORKFLOW.md` holds one mermaid flowchart. Extract that fence into `docs/media/workflow.mmd` and render:

```bash
npx -y @mermaid-js/mermaid-cli -i docs/media/workflow.mmd -o docs/media/workflow.png
```

If the CLI cannot render, keep the mermaid in the README and record the miss in `PROJECT_STATUS.md`.

## Demo video

When the software runs, record the happy path to `docs/media/demo.mp4`. A browser or screen capture is enough. If no recorder is available, export a short frame sequence of the same path and assemble it:

```bash
ffmpeg -y -framerate 8 -i docs/media/frame-%02d.png -c:v libx264 -pix_fmt yuv420p docs/media/demo.mp4
```

Keep the file at or under 10MB (shorter take, 1280px wide, CRF 28). When it stays over 10MB, do not commit it. Attach it to the `v0.1.0` release and link that asset from the README. Add the mp4 path to `.gitignore` in that case.

If ffmpeg is missing, keep the screenshots, record the gap, and continue.
