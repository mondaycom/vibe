# Facelift Kitchen Sink — Interactive Playground Design

**Date:** 2026-07-29  
**Owner:** Laure (Product Design Lead, monday.com)  
**Status:** Approved from brainstorming session

## Goal

Evolve the Facelift Kitchen Sink from a static component gallery into an interactive playground for reviewing a Vibe redesign. Designers can tweak component states, switch system themes, customize design tokens, and compare default vs. customized component states side by side — with all choices persisted between sessions.

## Locked decisions

| Decision | Choice |
| --- | --- |
| Component scope | Same 9 components, same order: Icon Button, Button, Button Group, Tabs, Label, Chip, Text Field, Dropdown, Toast |
| State controls | **Click-to-focus (C):** click a card → highlight + control bar below grid |
| Compare | On Components page only; button in main area (not nav); side-by-side grids — Original (default states) vs Your design (current states); same theme on both sides |
| Change counter | **Out of scope** — Compare button only, no change count |
| Theme mode | Light / Dark / Black — global, always visible |
| Theme customization | Full token playground: Colors, Radius, Spacing, Typography |
| Navigation | Left pane only — no center/top page nav |
| Theme sub-nav | Indented sub-pages under Theme in left pane |
| Grid | Fixed 3×3, larger cards than today |
| Persistence | Everything: theme mode, token overrides, per-component states, last focused card |
| Architecture | View state + shared React context + `localStorage`; no router dependency |
| Compare scope (v1) | Component states only — not theme comparison |

## Architecture

### Stack (unchanged)

- Vite + React 18 + TypeScript
- `@vibe/core` + `@vibe/icons`
- No router library; optional URL hash sync deferred to a future iteration

### State model

Single `KitchenSinkContext` (or equivalent) holds:

```ts
type SystemTheme = "light" | "dark" | "black";

type TokenOverrides = {
  colors: ThemeColorTokenValueMap;      // Vibe ThemeProvider shape
  radius: Record<string, string>;     // CSS var → value
  spacing: Record<string, string>;
  typography: Record<string, string>;
};

type ComponentStateMap = {
  [componentId: string]: Record<string, unknown>; // per-section prop bag
};

type AppState = {
  view: "components" | "theme";
  themeSubPage: "colors" | "radius" | "spacing" | "typography";
  systemTheme: SystemTheme;
  tokenOverrides: TokenOverrides;
  componentStates: ComponentStateMap;
  focusedComponentId: string | null;
  compareMode: boolean;
};
```

- Hydrate from `localStorage` on mount; debounced write on change.
- Provide `resetCategory(category)` and `resetComponentStates()` helpers (nice-to-have for v1, not blocking).

### Vibe integration

- Wrap app in `ThemeProvider` with `systemTheme` from context and `themeConfig` built from color overrides.
- Apply radius / spacing / typography overrides by injecting CSS custom properties on a root wrapper (or `:root` / `body`) — these are not covered by `ThemeProvider`'s color-only API.
- Import `@vibe/core/tokens` in `main.tsx` as today.

### File structure (target)

```
src/
  App.tsx                    # shell: left pane + main area
  context/
    KitchenSinkContext.tsx   # state + persistence
  components/
    LeftPane.tsx             # nav + theme mode + theme sub-nav
    ComponentGrid.tsx        # 3×3 grid
    ComponentControlBar.tsx  # focused component controls
    CompareView.tsx          # side-by-side grids
    ThemePanel.tsx           # token editors per sub-page
  sections/                  # existing *.section.tsx files, extended
  lib/
    defaultComponentStates.ts
    tokenDefinitions.ts      # which tokens appear on each theme sub-page
```

Each `*.section.tsx` exports `{ id, title, Demo, controls }` where `controls` defines the configurable props and `Demo` reads state from context (or receives props).

## Layout

### Left pane (always visible)

```
┌──────────────┐
│ Facelift     │
│ Kitchen Sink │
│              │
│ Components   │  ← top-level
│ Theme        │  ← top-level; expands when active:
│   Colors     │
│   Radius     │
│   Spacing    │
│   Typography │
│              │
│ ──────────── │
│ Light        │  ← system theme (one active)
│ Dark         │
│ Black        │
└──────────────┘
```

- Width ~240px, sticky, scrollable if Theme sub-nav overflows.
- Selecting **Components** sets `view = "components"`, collapses theme sub-nav highlight to Theme parent only.
- Selecting **Theme → {sub-page}** sets `view = "theme"` and `themeSubPage`.
- Light / Dark / Black toggle `systemTheme` immediately app-wide.

### Components view (main area)

- **Compare** button top-right of main area.
- **3×3 grid** — 9 cards, one per component. Cards are taller/wider than current `minmax(320px, 1fr)` auto-fill layout. Use `grid-template-columns: repeat(3, 1fr)` with a generous `min-height` per card.
- **Click a card** → `focusedComponentId` updates, card gets accent border, control bar renders below the grid.
- **Control bar** renders controls defined by the focused section's `controls` config (dropdowns, toggles — Vibe `Dropdown`, `Toggle`, `Checkbox` where possible).
- Clicking empty space or another card moves focus.

### Compare mode (Components view)

Triggered by Compare button; replaces grid + control bar with:

```
┌─────────────────────┬─────────────────────┐
│ Original            │ Your design         │
│ default states      │ persisted states    │
│ 3×3 grid            │ 3×3 grid            │
└─────────────────────┴─────────────────────┘
```

- Both grids use the **current** `systemTheme` and **current** token overrides — only component prop states differ.
- "Original" grid always renders `defaultComponentStates`; "Your design" grid renders `componentStates` from context.
- Exit Compare (same button toggles, or explicit "Back to editing" label) restores normal Components view with prior focus preserved.

### Theme view (main area)

- Renders `ThemePanel` for the active `themeSubPage`.
- Each sub-page shows labeled controls for its token group (sliders, text inputs, color pickers).
- Live preview: main area can show a small sample strip (Button + Chip + Text Field) below the editors, or editors alone if space is tight — **prefer a live preview strip** so changes are visible without switching back to Components.

## Component controls (v1)

| Component | Configurable props |
| --- | --- |
| Icon Button | `kind` (primary / secondary / tertiary), `size`, `disabled` |
| Button | `kind`, `size`, `leftIcon` (none / left), `rightIcon` (none / right), `disabled`, `loading` |
| Button Group | `kind`, `size`, `disabled` |
| Tabs | `size`, active tab index |
| Label | `color`, `size` |
| Chip | `color`, `size`, `disabled`, `readOnly` |
| Text Field | `size`, `disabled`, validation state, `title` / icon presence |
| Dropdown | `size`, `disabled`, multi-select |
| Toast | `type` (positive / negative / neutral), action button presence |

Exact prop names must match `@vibe/core` exports; verify against package types during implementation.

## Theme token playground (v1)

### Colors

Use Vibe `ThemeProvider` `themeConfig.colors` keyed by `SystemTheme`. Expose at minimum:

- `primary-color`, `primary-hover-color`
- `brand-color`, `brand-hover-color`
- `primary-selected-color`

One set of pickers applies to the active system theme, or global overrides across all three — **implement per active system theme** so Light / Dark / Black can diverge.

### Radius

Override CSS variables on the app root, e.g.:

- `--border-radius-small`
- `--border-radius-medium`
- `--border-radius-large`

Sliders or numeric inputs with px/rem suffix.

### Spacing

Override spacing-related CSS variables used by Vibe components (confirm exact var names from `@vibe/core/tokens` during implementation). Start with 2–3 high-impact tokens rather than exhaustive coverage.

### Typography

Override font-size / weight variables for body and heading scales. Start with 2–3 tokens; expand if needed.

## Persistence

- **Key:** `facelift-kitchen-sink-state` in `localStorage`.
- **Serialize:** full `AppState` minus transient UI if any.
- **Migrate:** if stored JSON version mismatches, reset to defaults (version field in stored object).
- **Defaults:** Vibe default theme, empty token overrides, `defaultComponentStates` for all nine components.

## Error handling

- If a component fails to render with a given state combo, fall back to default state for that component and show a one-line error in the card (do not crash the grid).
- Invalid stored state on load → reset affected component to defaults.

## Out of scope (v1)

- Change counter
- Theme comparison in Compare view
- Router / shareable URLs
- Reset-all button (nice-to-have)
- Search filter (removed with old sidebar component list)
- Components beyond the fixed list of 9
- Deployment / hosting changes

## Verification

- `npm run check` passes (typecheck + build).
- Manual pass:
  1. Left pane switches Components ↔ Theme sub-pages.
  2. Light / Dark / Black updates all views.
  3. Click card → control bar updates; states persist on reload.
  4. Theme token edits visible on Components grid after return.
  5. Compare shows two 3×3 grids; Original uses defaults, Your design uses saved states.
  6. 3×3 grid fills viewport cleanly at desktop width.

## Implementation handoff

Next step: invoke **writing-plans** skill to produce a step-by-step implementation plan from this spec.
