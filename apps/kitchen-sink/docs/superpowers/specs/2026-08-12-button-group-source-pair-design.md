# Button Group ↔ Segmented Control source pair (kitchen sink)

**Date:** 2026-08-12  
**Status:** Approved design (kitchen sink only)  
**Scope:** `packages/kitchen-sink` navigation + galleries/sections. No `@vibe/core` API changes.

## Goal

Treat Segmented Control as the **Current** counterpart to Button Group so Original ↔ Current compares the same slot. Sidebar label stays **Button Group** in both sources.

## Behavior

| Vibe source | Nav label      | Gallery / grid demo                         |
|-------------|----------------|---------------------------------------------|
| Original    | Button Group   | `ButtonGroup` (npm / published)             |
| Current     | Button Group   | `SegmentedControl` (local workspace)        |

- One nav/gallery id: `button-group`.
- Remove the standalone **Segmented Control** nav entry (and hide/filter the separate `segmented-control` gallery id from the sidebar order).
- Switching Original ↔ Current while on Button Group keeps `componentSubPage: "button-group"` (existing state transfer already preserves view/theme/route).
- Components grid card for Button Group follows the same swap.
- Interactive section under the grid: Original uses `ButtonGroup.section`; Current uses Segmented Control demo content under the same `button-group` section id (or maps Current’s section renderer onto that id). Label remains **Button Group**.

## Non-goals

- Merging Segmented Control into Button Group in `@vibe/core`.
- Aligning every gallery card 1:1 between the two components.
- Changing published npm packages.

## Implementation notes

- `COMPONENT_GALLERY_ORDER`: drop `segmented-control`; keep `button-group`.
- `componentGalleries["button-group"]`: render `ButtonGroupGalleryView` when Original, `SegmentedControlGalleryView` when Current.
- `COMPONENT_GALLERY_LABELS["button-group"]`: always `"Button Group"`.
- Sections: stop listing `segmented-control` as its own nav/section entry; on Current, `button-group` section Demo should render Segmented Control (shared Day/Week/Month options where practical).
- Persist/migrate: if `componentSubPage === "segmented-control"`, coerce to `"button-group"` on load so old state still lands on the paired page.
- Keep `SegmentedControlGalleryView` / section module files; wire them through the pair rather than deleting.

## Success criteria

- Original sidebar shows Button Group only (no Segmented Control).
- Current sidebar shows Button Group only (no Segmented Control).
- On that page, Original shows Button Group UI; Current shows Segmented Control UI.
- Vibe switch preserves the Button Group page + theme/mode.
