# Plan: Button Group source pair (kitchen sink)

Spec: `packages/kitchen-sink/docs/superpowers/specs/2026-08-12-button-group-source-pair-design.md`

## Task 1 — Gallery nav pairing + state migrate

Files:
- `src/components/componentGalleries.tsx`
- `src/types.ts` (optional: keep `segmented-control` in type for migration, or remove from `ComponentGalleryId` and coerce string)
- `src/context/KitchenSinkContext.tsx`
- `src/lib/defaultComponentStates.ts`
- `src/components/SegmentedControlGalleryView.tsx` (title → "Button Group"; description can mention Segmented Control)

Acceptance:
- `COMPONENT_GALLERY_ORDER` has no `segmented-control`
- `componentGalleries["button-group"]` is ButtonGroup gallery on Original, SegmentedControl gallery on Current
- Label always "Button Group"
- Persisted / transferred / hash `segmented-control` coerces to `button-group`
- Do **not** git commit

## Task 2 — Components grid section pairing

Files:
- `src/sections/ButtonGroup.section.tsx`
- `src/sections/index.ts`
- Keep `SegmentedControl.section.tsx` on disk but exclude from `SECTION_ORDER`

Acceptance:
- Only one section id `button-group` in the grid
- Original Demo/controls = ButtonGroup
- Current Demo/controls = SegmentedControl (reuse logic from SegmentedControl.section)
- Title "Button Group"
- Do **not** git commit

## Task 3 — Review

Verify Original/Current nav and grid match the spec; no standalone Segmented Control entry.
