# Glaze theme spec

Editorial, refined, monday-aware design facelift. See the full component recipes in the source design doc; this file tracks **implementation decisions** for this prototype.

## Scoping rule

**All Glaze-specific UI changes must apply only when `glaze` is active** (`<html class="glaze">`). Do not change default theme styles globally.

| Approach | When to use |
|---|---|
| `:root.glaze { … }` in `globals.css` | Design tokens (colors, typography, radius, shadows) |
| `:global(html.glaze) { … }` in `*.module.scss` | Component layout and visual overrides |
| `:global(html.glaze) &` nested in a module class | Single-component tweaks |

Never set Glaze values on base selectors, never pass theme props for styling when a scoped CSS override suffices, and never change shared `Flex`/`Box` props (e.g. `gap`) for all themes.

## Surfaces

| Token | Value | CSS variable | Usage |
|---|---|---|---|
| Canvas / gap | `#F4F5F3` | `--primary-surface-color` | App background visible between floating panels, top bar area, navigation rail |
| Panel | `#FFFFFF` | `--secondary-background-color` | Workspace panel, main content — flat white cards, 16px radius, no shadow |
| UI rail | `#F2F3F2` | `--ui-background-color` | Segmented controls, toolbar surfaces |

Layout shells have **no borders and no elevation** (no `box-shadow`). The workspace panel and main content area are flat white surfaces separated by a **12px `#F4F5F3` gap** — applied only under `html.glaze` via `MainLayout.module.scss` (not on the `Flex` component, so other themes stay flush). Both panels use **16px** border radius (`var(--space-16)`).

## Borders

| Token | Light value | Usage |
|---|---|---|
| `--layout-border-color` | `#E9EBEA` | Board grid, table rows, structural dividers |
| `--ui-border-color` | `#E2E4E3` | Buttons, inputs, cards, segmented controls |
| `--glaze-input-focus-border-color` | `#BABBBC` | Input/dropdown hover, focus, and open states (overrides Vibe’s `--primary-color` border) |
| `--glaze-border-hairline` | `rgba(0, 0, 0, 0.04)` | Ultra-subtle dividers |

## Icon colors

Glaze uses **two icon tiers**. Do not collapse them into a single `--icon-color` without updating call sites.

| Tier | Value | CSS variable | When to use |
|---|---|---|---|
| **Primary** | `#676879` | `--glaze-icon-color-primary` | Icons on the **canvas surface** (`#F4F5F3`) — e.g. the left navigation rail |
| **Secondary** | `#BABBBC` | `--glaze-icon-color-secondary` | Default app-wide icon tier; maps to `--icon-color`. Icons on **white panels** and toolbars where they should sit behind text |

**Hover:** `--icon-hover` is `#676879` (same as primary tier) — icons lift to primary weight on interaction.

### Left navigation rail

The icon rail sits directly on the `#F4F5F3` canvas (not inside a white card). It **must use primary icon color**:

```scss
/* NavigationRail.module.scss */
:global(html.glaze) .rail {
  background-color: var(--primary-surface-color);
  --icon-color: var(--glaze-icon-color-primary);
}
```

Active rail items use `--glaze-rail-selected-color` (`#E0E2E1`, slightly darker than `#E6E8E7`) for the icon pill background; hover uses `--glaze-rail-selected-hover-color` (`#DADCDB`). Icon color stays `--primary-text-color` for selected-state contrast.

### Everywhere else

Toolbar, board header, workspace panel (white card), and top bar icons use the **secondary** tier via the global `--icon-color` token (`#BCBBBA`).

## Typography

**DM Sans** for body and display. Max weight: Medium (500).

## Border radius

| Element | Radius | CSS variable | Notes |
|---|---|---|---|
| Layout shells (workspace panel, main content) | **16px** | `var(--space-16)` | Set explicitly on layout — not via control tokens |
| **All buttons and inputs** | **8px** | `--glaze-radius-control` | Aliased to `--border-radius-small` and `--border-radius-medium` under `:root.glaze` so Vibe `Button`, `IconButton`, `SplitButton`, `TextField`, and project controls inherit 8px |
| Modals / prominent surfaces | 14px | `--border-radius-big` | Unchanged |

**Exceptions:** Pill-shaped controls keep their own radius (e.g. global search `100px`, avatars `50%`, notification badges `999px`).

## Board

| Element | Glaze value | Default (other themes) | File |
|---|---|---|---|
| Group accent stripe | **3px** width | 6px (`calc(var(--space-4) + var(--space-2))`) | `BoardGroup.module.scss` |
| Status / priority cells | **4px** radius, **2px** inset padding | Full-bleed fill, no radius | `StatusCell.module.scss` |
| Row column dividers | **None** (no vertical borders between cells) | `border-right` on each cell | `BoardGroup.module.scss` |

Iconic cell colors stay full saturation in Glaze; only geometry changes. Horizontal row separators remain.

## AI product pages (Sidekick, Agents, Vibe)

Under `html.glaze` only, the hero block (H1, subtitle, composer) is aligned across all three pages via `_productHeroGlaze.scss`: **34px** H1, **18px** subtitle, **88px** composer min-height, **720px** max-width, **48px** page padding. Other themes keep each page’s original layout and sizes.

## Implementation map

| Spec token | CSS variable |
|---|---|
| `--bg-canvas` | `--primary-surface-color` (`#F4F5F3`) |
| `--bg-surface` | `--secondary-background-color` (`#FFFFFF`) |
| `--text-primary` | `--primary-text-color` |
| `--text-secondary` | `--secondary-text-color` |
| `--icon-primary` | `--glaze-icon-color-primary` |
| `--icon-secondary` | `--glaze-icon-color-secondary` / `--icon-color` |
| `--border-layout` | `--layout-border-color` (`#E9EBEA`) |
| `--border-ui` | `--ui-border-color` (`#E2E4E3`) |
| `--primary` | `--primary-color` (`#404643`) |
| `--shadow-card` | `--glaze-shadow-card` |
| `--shadow-lift` | `--glaze-shadow-lift` |
| `--bg-rail-selected` | `--glaze-rail-selected-color` (`#E0E2E1`) |
| `--r-md` (controls) | `--glaze-radius-control` (`8px`) |

Theme class: `glaze` on `<html>`. Toggle via `ThemeSwitcher`.
