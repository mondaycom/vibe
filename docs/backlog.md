# EZDS Backlog

Items here are scoped, ready to pick up, but not yet scheduled.

---

## [TOKEN-SYNC] Automate Figma → Code Token Sync (Option 2)

**What it does:**
A GitHub Action runs every morning, reads all EZDS variables directly from Figma via the Figma REST API, compares them to the current token files in code, and automatically opens a pull request if anything has changed.

**Why it matters:**
Without this, designers and developers rely on memory to stay in sync. A color can change in Figma and the app won't reflect it until someone manually notices and runs the sync script. This closes that gap automatically, within 24 hours of any Figma publish.

**How it works (the flow):**
1. Designer updates variables in Figma and clicks "Publish"
2. GitHub Action wakes up at 9am (configurable)
3. Calls Figma API → reads all current variable values
4. Compares to `packages/tokens/src/*.ts` files in the repo
5. If anything changed → regenerates token files + theme CSS files
6. Opens a PR titled e.g. "chore: sync Figma tokens (2026-03-10)" with a diff
7. Developer or designer reviews and merges (one click)
8. Done — code matches Figma

**What needs to be built:**
- [ ] Script: `scripts/sync-figma-tokens.mjs` — calls Figma Variables REST API, diffs against current token files, writes updates
- [ ] GitHub Action: `.github/workflows/sync-tokens.yml` — runs on schedule (cron), calls the script, creates a PR if there are changes
- [ ] GitHub Secrets to add (one-time setup by a repo admin):
  - `FIGMA_ACCESS_TOKEN` — personal access token from Figma account settings (Settings → Security → Personal access tokens)
  - `FIGMA_FILE_KEY` — the key from the EZDS Figma file URL (e.g. `figma.com/design/XXXXXXXX/...` — the `XXXXXXXX` part)

**Important pre-requisite:**
Designers must click **"Publish changes"** in Figma after updating variables — not just save. Unpublished drafts are invisible to the API.

**Estimated effort:** ~1 day of development work

**APIs involved:**
- `GET https://api.figma.com/v1/files/:file_key/variables/local` — reads all variable collections and values
- GitHub Actions `peter-evans/create-pull-request` action — opens the PR automatically

---

## [DARK-TOKENS] Define Dark & Black Theme Colors in Figma

**What it does:**
Currently the dark and black themes in EZDS have the same colors as light mode — because those modes haven't been configured in Figma yet. Once a designer fills them in, one script regenerates all three theme CSS files.

**Why it matters:**
Any consumer who switches to `data-theme="dark"` today gets the same light colors, which looks broken.

**What needs to happen:**
- [ ] Designer opens the EZDS Figma file → Variables panel → selects the "dark" and "black" modes
- [ ] Fills in the correct color values for each variable (override the light defaults)
- [ ] Publishes the changes
- [ ] Developer runs: `node packages/web/scripts/generate-css-vars.mjs`
- [ ] Opens a PR with the updated `dark.css` and `black.css` files

**Effort:** Design work (no code changes needed — the pipeline is already built)

---

## [CONTENT-COLORS] Map or Replace Monday.com Content Colors

**What it does:**
There are 40 "Content Color" values inherited from Monday.com's palette (colors like `grass_green`, `sunset`, `lipstick`, `bubble`, etc.) that were not mapped to EZDS equivalents. They sit in `packages/web/scripts/var-mapping.json` under `"unmapped"`.

**Decision needed (design team):**
- Keep them as-is (fine if apps use them for status/label coloring)
- Replace with EZCORP-specific brand colors
- Remove them (if EZCORP apps don't use item color coding)

**Effort:** Design decision first, then ~2 hours of code to map or remove them

---

## [THEMES] Implement Dark and Black Token Values

**Priority:** High — all users are affected
**Background:** `packages/tokens/src/colors.ts` currently exports:
```ts
export const colors = { light: lightColors, dark: { ...lightColors }, black: { ...lightColors } }
```
Dark and black modes are shallow copies of light mode, so `[data-theme="dark"]` and `[data-theme="black"]` render the light color palette. The `darkTheme` and `blackTheme` objects in `@ezds/native` are also identical to `lightTheme`.

**What needs to be done:**
- [ ] Extract actual dark and black hex values from Figma file `q4OabtnoR0FyFHl4RCJUba` (use figma-console MCP `figma_execute` to resolve all 250 `colors` collection variables for dark and black modes)
- [ ] Populate `packages/tokens/src/colors.ts` with real dark/black values (separate `darkColors` and `blackColors` objects)
- [ ] Re-run `node packages/web/scripts/generate-css-vars.mjs` to regenerate `light.css`, `dark.css`, `black.css`
- [ ] Verify theme switching in Storybook — component should visually change between light/dark/black
- [ ] Add a test: `expect(colors.dark).not.toEqual(colors.light)`

---

## [BUILD] Add CJS Dual Build to `@ezds/tokens` and `@ezds/native`

**Priority:** Medium — affects Jest default config and older bundlers
**Background:** Both `@ezds/tokens` and `@ezds/native` are `"type": "module"` with only `import`/`default` conditions in their `exports` map. CommonJS consumers (Jest without ESM config, older Webpack, Metro bundler older versions) cannot load these packages.

**What needs to be done:**
- [ ] Update `packages/tokens/rollup.config.mjs` to output both ESM (`dist/*.js`) and CJS (`dist/cjs/*.js`)
- [ ] Update `packages/native/rollup.config.mjs` similarly
- [ ] Add `require` condition to each subpath in `package.json` exports maps pointing to CJS dist files
- [ ] Add `"main"` field pointing to CJS root entry for maximum compatibility
- [ ] Update Jest configs in consuming packages to either use `extensionsToTreatAsEsm` or the CJS build
- [ ] Verify: `const { colors } = require('@ezds/tokens')` works in a Node CJS context
