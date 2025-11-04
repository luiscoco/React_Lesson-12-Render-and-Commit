# React Render & Commit Demo (Vite + React 19)

A minimal playground to explore React's lifecycle from your presentation:
**Trigger → Render → Commit → Paint**.

## Quickstart

```bash
npm install
npm run dev
# open the URL printed in your terminal
```

Build and preview production:

```bash
npm run build
npm run preview
```

## What to try

- Click the **Counter** button and watch only the Counter re-render.
- See the **Clock** update every second (prop-driven re-renders).
- Open **DevTools Console** to observe `[Render]` and `[Commit]` logs.
- Type in the input inside Clock — it keeps its value across commits.

## Files

- `src/App.jsx` — Counter, Clock, Gallery, Image components with console logs.
- `src/main.jsx` — React root setup.
- `index.html` — Root HTML.
- `vite.config.js` — Vite + React SWC plugin.
- `src/styles.css` — Simple, clean styling.

## Notes

- Requires a recent Node.js LTS (>=18 recommended).
- If your environment doesn't have React 19 yet, change the versions in `package.json` to a compatible React version (e.g. 18) — the code still works the same.
