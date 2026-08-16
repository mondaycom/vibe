# Vibe Kitchen Sink — Design

**Date:** 2026-07-26
**Owner:** Laure (Product Design Lead, monday.com)
**Status:** Approved decisions from brainstorming session

## Goal

A single custom webpage (not Storybook) that renders a selected set of
components from the open-source Vibe design system (`@vibe/core`,
github.com/mondaycom/vibe) in one place, for quick visual reference.

## Component scope (exact list, locked)

Exactly these 15 components, using their `@vibe/core` export names:

`IconButton`, `ButtonGroup`, `Button`, `Label`, `Chips` (the Chip component),
`Modal`, `Avatar`, `Counter`, `Tabs` (composed with `TabList`/`Tab`/`TabPanel`),
`TextField`, `Dropdown`, `Toggle`, `Checkbox`, `Tooltip`, `Toast`.

No other components. The coverage script validates against this fixed list,
not against all `@vibe/core` exports.

## Decisions (locked)

| Decision | Choice |
| --- | --- |
| Location | Standalone repo `vibe-kitchen-sink` (this repo), private on GitHub |
| Component source | `@vibe/core` + `@vibe/icons` installed from npm |
| Scope | Fixed list of 15 components (see above) |
| Depth | One representative rendering per component |
| Verification | Typecheck + lint + build + coverage script + browser screenshot self-review |
| Execution | 2 parallel cloud agents overnight, unattended; merge next morning |

## Architecture

- **Stack:** Vite + React 18 + TypeScript. No router, no state library.
- **Page layout:** left sidebar listing all components with a text search
  filter; main area with one titled, anchor-linked section per component;
  light/dark theme toggle using Vibe tokens.
- **Demo contract:** one file per component at `src/demos/<Component>.demo.tsx`.
  Each file default-exports a small React component rendering one representative
  usage, plus a named export `meta = { name: "<Component>" }`.
- **Auto-discovery:** the app collects demos with
  `import.meta.glob('./demos/*.demo.tsx')`. There is **no shared registry file**
  — agents only add new files, so parallel branches merge without conflicts by
  construction.

## Verify gate (loop engineering)

- `scripts/coverage.mjs`: holds the fixed 15-component list, diffs it against
  existing `*.demo.tsx` files, prints missing components, and exits non-zero
  if any component is missing.
- `npm run verify` = coverage + `tsc --noEmit` + lint + `vite build`.
- Agents loop until their slice passes `verify`. "Done" is machine-checked, not
  self-declared.
- Additionally, each batch is screenshot-reviewed in a real browser by the
  agent before being committed.

## Execution plan

1. **Scaffold (tonight, local):** app shell, theme toggle, sidebar, glob
   loader, coverage script, lint/typecheck config, 1 example demo (Button),
   `AGENTS.md` playbook for the cloud agents. Push to GitHub `main`.
2. **Dispatch (tonight):** 2 cloud agents, each assigned a disjoint slice of
   7 components (Button is done in the scaffold as the reference example).
   Each agent:
   - writes only its own `*.demo.tsx` files (never edits shared files),
   - runs `npm run verify`,
   - screenshots its sections and self-reviews rendering,
   - commits after every 3-4 components on its own branch (crash loses
     little progress).
3. **Wrap-up (tomorrow morning, one user message):** merge the 2 branches
   (conflict-free by design), run full `verify`, visual pass over the whole
   page, backfill anything missed.

## Error handling

- A component that cannot render standalone gets a placeholder card explaining
  why, and an entry in `KNOWN_ISSUES.md`. Nothing is silently skipped.
- Coverage script is the source of truth for completeness; the morning wrap-up
  re-runs it against the merged result.

## Out of scope

- Any `@vibe/core` component not in the fixed 15-component list.
- Multiple variants or prop playgrounds per component.
- Deployment/hosting (local `npm run dev` only, for now).
- Internal monorepo packages (`vibe-internal`) — open-source `@vibe/core` only.
