# Facelift Kitchen Sink

An interactive playground for exploring [@vibe/core](https://www.npmjs.com/package/@vibe/core) components. Click any card to tweak its state, customize theme tokens, compare your design against defaults, and pick up where you left off — everything persists in the browser.

## Run it

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run check` | Type-check and production build |
| `npm test` | Run Vitest unit tests (persistence + CSS override helpers) |

## Navigation

The **left pane** is the only navigation:

- **Components** — 3×3 grid of all nine demos with a control bar below for the focused card
- **Theme** — token editors with sub-pages: Colors, Radius, Spacing, Typography
- **Light / Dark / Black** — global theme mode toggles at the bottom of the left pane (always visible)

Click a component card to focus it and show its controls. Theme sub-pages appear indented under Theme when that view is active.

## Compare

On the Components page, use the **Compare** button in the main area to open a side-by-side view:

- **Original** — default component states
- **Your design** — your current saved states

Both columns share the same theme. Compare is component-state only (not a theme A/B). Reload always returns to the normal editing view.

## Persistence

All state is saved to `localStorage` under the key `facelift-kitchen-sink-state`:

- Active view and theme sub-page
- Light / Dark / Black mode
- Per-component control values
- Focused card
- Theme token overrides (colors, radius, spacing, typography)

Compare mode is **not** persisted — it resets to off on reload.

## Components (fixed order)

Icon Button, Button, Button Group, Tabs, Label, Chip, Text Field, Dropdown, Toast, Stroke Spotlight

Each lives in `src/sections/*.section.tsx` and exports `{ id, title, defaultState, controls, Demo }`. Files are auto-collected via `import.meta.glob` and sorted by the order above.

## Project layout

| Path | Purpose |
| --- | --- |
| `src/context/KitchenSinkContext.tsx` | App state + localStorage sync |
| `src/components/LeftPane.tsx` | Left navigation + theme mode |
| `src/components/ComponentsView.tsx` | Grid, control bar, Compare entry |
| `src/components/CompareView.tsx` | Side-by-side default vs current |
| `src/components/ThemePanel.tsx` | Token editors + preview strip |
| `src/lib/storage.ts` | Load/save/migrate persisted state |
| `src/tests/` | Vitest tests for pure helpers |
