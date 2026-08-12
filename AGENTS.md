# Agent Instructions

## Kitchen Sink Vibe Sources

- **Original** must resolve `@vibe/*` component code from the pinned npm packages in `packages/kitchen-sink/published-vibe/node_modules`; never alias it to workspace source or apply Current-only component overrides.
- **Current** resolves `@vibe/*` from local workspace source and keeps the existing kitchen-sink development overrides.
- Keep the two runtimes isolated. Verify source-related changes with both `npm run build:original` and `npm run build:current` from `packages/kitchen-sink`.
