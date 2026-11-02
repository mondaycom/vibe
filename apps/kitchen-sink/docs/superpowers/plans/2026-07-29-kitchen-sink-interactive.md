# Kitchen Sink Interactive Playground — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the static Facelift Kitchen Sink into an interactive redesign playground with left-pane navigation, per-component state controls (click-to-focus), theme token editing, Compare view, and full localStorage persistence.

**Architecture:** Single React app with `KitchenSinkContext` holding view, theme mode, token overrides, and component states. Vibe `ThemeProvider` handles color overrides; radius/spacing/typography applied via CSS custom properties on an app root wrapper. No router — view switching via context state.

**Tech Stack:** Vite 8, React 18, TypeScript 7, `@vibe/core` 4.5.3, `@vibe/icons` 4.1.0, Vitest (added for pure-function tests only)

## Global Constraints

- Component scope: exactly 9 components in this order — Icon Button, Button, Button Group, Tabs, Label, Chip, Text Field, Dropdown, Toast
- State controls: click card → highlight + control bar below grid
- Compare: Components page only; button in main area; side-by-side grids (default states vs current states); same theme on both sides; component states only (not theme comparison)
- No change counter
- Theme mode: Light / Dark / Black — global, always visible in left pane bottom
- Theme customization sub-pages: Colors, Radius, Spacing, Typography (indented under Theme in left pane)
- Navigation: left pane only — no center/top page nav; no component list in nav
- Grid: fixed 3×3, larger cards than today
- Persistence key: `facelift-kitchen-sink-state`; persist everything including focused card and compare mode off on reload (compareMode defaults false on load)
- No router; no URL hash sync in v1
- Verify with `npm run check` after every task; manual browser pass at end
- Prop names must match `@vibe/core` types — verify in `node_modules/@vibe/core/dist` during implementation

## Subagent model mapping

Use this when dispatching subagents via **subagent-driven development**. Between-task review stays with the parent agent (default model).

| Task | What it is | Model | Why |
| --- | --- | --- | --- |
| 1 | Vitest + shared types | `composer-2.5-fast` | Config + type definitions — low risk |
| 2 | Default states + token defs | `composer-2.5-fast` | Mostly data/constants |
| 3 | Persistence helpers (TDD) | `claude-sonnet-5-thinking-high` | Merge/migration logic needs careful edge-case handling |
| 4 | `KitchenSinkContext` | `claude-sonnet-5-thinking-high` | Central state — mistakes here affect everything |
| 5 | Theme shell + layout CSS | `claude-sonnet-5-thinking-high` | Vibe `ThemeProvider` + CSS vars need correct wiring |
| 6 | Left pane nav | `composer-2.5-fast` | Straightforward UI from a clear spec |
| 7 | Grid, control bar, error boundary | `claude-sonnet-5-thinking-high` | Several connected components; sets the interaction pattern |
| 8 | Upgrade all 9 sections | `gpt-5.6-terra-medium` | Largest task — 9 files, must match real `@vibe/core` prop names |
| 9 | Compare view | `composer-2.5-fast` | Builds on Task 7; mostly composition |
| 10 | Theme panel + preview | `claude-sonnet-5-thinking-high` | Token editors + live preview need correct state updates |
| 11 | README + final verification | `composer-2.5-fast` | Docs + running checks |

**Opus escalation (`claude-opus-5-thinking-high`):** Re-dispatch the task with Opus if the first pass fails verification:

- **Task 8** — more than 2 sections fail typecheck or render incorrectly
- **Task 5** — theme overrides do not visibly apply after first pass
- **Task 10** — token edits do not reflect in preview or Components grid after first pass

---

## File map

| File | Responsibility |
| --- | --- |
| `src/types.ts` | Shared types: `SystemTheme`, `AppState`, `ControlDef`, `Section` |
| `src/lib/defaultComponentStates.ts` | Default state bag per component id |
| `src/lib/tokenDefinitions.ts` | Token editor field definitions per theme sub-page |
| `src/lib/storage.ts` | Load/save/migrate `localStorage` |
| `src/lib/buildThemeConfig.ts` | Convert color overrides → Vibe `ThemeProvider` config |
| `src/lib/cssVarOverrides.ts` | Convert radius/spacing/typography → inline CSSProperties |
| `src/context/KitchenSinkContext.tsx` | Provider + hooks |
| `src/components/LeftPane.tsx` | Nav + theme mode toggles |
| `src/components/ComponentGrid.tsx` | 3×3 clickable cards |
| `src/components/ComponentControlBar.tsx` | Renders controls for focused section |
| `src/components/CompareView.tsx` | Side-by-side grids |
| `src/components/ThemePanel.tsx` | Token editors + preview strip |
| `src/components/ComponentCard.tsx` | Single card with error boundary |
| `src/components/ErrorBoundary.tsx` | Per-card render fallback |
| `src/sections/*.section.tsx` | Extended with `defaultState`, `controls`, stateful `Demo` |
| `src/section.ts` | Re-export `Section` from `types.ts` (keep import path stable) |
| `src/App.tsx` | Shell composing left pane + main views |
| `src/main.tsx` | Wrap with `KitchenSinkProvider` |
| `src/styles.css` | Layout: left pane, 3×3 grid, compare, control bar |
| `src/tests/storage.test.ts` | Vitest tests for persistence |
| `src/tests/cssVarOverrides.test.ts` | Vitest tests for CSS var builder |

---

### Task 1: Add Vitest and shared types — `composer-2.5-fast`

**Files:**
- Modify: `package.json`
- Create: `src/types.ts`
- Create: `vitest.config.ts`

**Interfaces:**
- Produces: `SystemTheme`, `ThemeSubPage`, `AppView`, `TokenOverrides`, `PersistedState`, `ControlDef`, `Section`

- [ ] **Step 1: Add Vitest dev dependency and test script**

Modify `package.json` scripts and devDependencies:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc --noEmit && vite build",
    "check": "tsc --noEmit && vite build",
    "test": "vitest run",
    "preview": "vite preview"
  },
  "devDependencies": {
    "@types/react": "^18.3.31",
    "@types/react-dom": "^18.3.7",
    "@vitejs/plugin-react": "^6.0.4",
    "typescript": "^7.0.2",
    "vite": "^8.1.5",
    "vitest": "^3.2.4"
  }
}
```

Run: `npm install`

- [ ] **Step 2: Create Vitest config**

Create `vitest.config.ts`:

```ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    include: ["src/tests/**/*.test.ts"],
  },
});
```

- [ ] **Step 3: Create shared types**

Create `src/types.ts`:

```ts
import type React from "react";
import type { ThemeColor } from "@vibe/core";

export type SystemTheme = "light" | "dark" | "black";
export type AppView = "components" | "theme";
export type ThemeSubPage = "colors" | "radius" | "spacing" | "typography";

export type ThemeColorOverrides = Partial<Record<SystemTheme, Partial<Record<ThemeColor, string>>>>;

export type TokenOverrides = {
  colors: ThemeColorOverrides;
  radius: Record<string, string>;
  spacing: Record<string, string>;
  typography: Record<string, string>;
};

export type ComponentStateMap = Record<string, Record<string, unknown>>;

export type AppState = {
  view: AppView;
  themeSubPage: ThemeSubPage;
  systemTheme: SystemTheme;
  tokenOverrides: TokenOverrides;
  componentStates: ComponentStateMap;
  focusedComponentId: string | null;
  compareMode: boolean;
};

export const STORAGE_VERSION = 1;
export const STORAGE_KEY = "facelift-kitchen-sink-state";

export type PersistedState = {
  version: number;
  view: AppView;
  themeSubPage: ThemeSubPage;
  systemTheme: SystemTheme;
  tokenOverrides: TokenOverrides;
  componentStates: ComponentStateMap;
  focusedComponentId: string | null;
};

export type ControlOption = { value: string; label: string };

export type ControlDef =
  | {
      key: string;
      label: string;
      type: "select";
      options: ControlOption[];
    }
  | {
      key: string;
      label: string;
      type: "boolean";
    };

export interface Section {
  id: string;
  title: string;
  defaultState: Record<string, unknown>;
  controls: ControlDef[];
  Demo: React.FC<{ state: Record<string, unknown> }>;
}

export type TokenFieldDef =
  | { id: string; label: string; kind: "color"; cssVar: ThemeColor }
  | { id: string; label: string; kind: "css-var"; cssVar: string; unit?: string; defaultValue: string };
```

- [ ] **Step 4: Update section re-export**

Replace `src/section.ts` contents:

```ts
export type { Section, ControlDef, ControlOption } from "./types";
```

- [ ] **Step 5: Verify**

Run: `npm run check`
Expected: PASS (no tests yet)

- [ ] **Step 6: Commit**

```bash
git add package.json package-lock.json vitest.config.ts src/types.ts src/section.ts
git commit -m "chore: add vitest and shared kitchen sink types"
```

---

### Task 2: Default component states and token definitions — `composer-2.5-fast`

**Files:**
- Create: `src/lib/defaultComponentStates.ts`
- Create: `src/lib/tokenDefinitions.ts`

**Interfaces:**
- Consumes: `Section` ids from existing sections (fixed order list)
- Produces: `defaultComponentStates`, `EMPTY_TOKEN_OVERRIDES`, `TOKEN_FIELDS_BY_SUBPAGE`

- [ ] **Step 1: Create default component states**

Create `src/lib/defaultComponentStates.ts`:

```ts
import type { ComponentStateMap } from "../types";

export const defaultComponentStates: ComponentStateMap = {
  "icon-button": { kind: "primary", size: "medium", disabled: false },
  button: {
    kind: "primary",
    size: "medium",
    leftIcon: "none",
    rightIcon: "none",
    disabled: false,
    loading: false,
  },
  "button-group": { kind: "primary", size: "medium", disabled: false },
  tabs: { size: "medium", activeTab: 0 },
  label: { color: "primary", size: "medium" },
  chip: { color: "primary", size: "medium", disabled: false, readOnly: true },
  "text-field": {
    size: "medium",
    disabled: false,
    validation: "none",
    withTitle: false,
  },
  dropdown: { size: "medium", disabled: false, multi: false },
  toast: { type: "positive", withAction: false },
};

export function mergeWithDefaults(
  stored: ComponentStateMap | undefined
): ComponentStateMap {
  const result: ComponentStateMap = {};
  for (const [id, defaults] of Object.entries(defaultComponentStates)) {
    result[id] = { ...defaults, ...(stored?.[id] ?? {}) };
  }
  return result;
}
```

- [ ] **Step 2: Create token field definitions**

Create `src/lib/tokenDefinitions.ts`:

```ts
import type { ThemeSubPage, TokenFieldDef, TokenOverrides } from "../types";

export const EMPTY_TOKEN_OVERRIDES: TokenOverrides = {
  colors: {},
  radius: {},
  spacing: {},
  typography: {},
};

export const TOKEN_FIELDS_BY_SUBPAGE: Record<ThemeSubPage, TokenFieldDef[]> = {
  colors: [
    { id: "primary-color", label: "Primary", kind: "color", cssVar: "primary-color" },
    { id: "primary-hover-color", label: "Primary hover", kind: "color", cssVar: "primary-hover-color" },
    { id: "brand-color", label: "Brand", kind: "color", cssVar: "brand-color" },
    { id: "brand-hover-color", label: "Brand hover", kind: "color", cssVar: "brand-hover-color" },
    { id: "primary-selected-color", label: "Primary selected", kind: "color", cssVar: "primary-selected-color" },
  ],
  radius: [
    { id: "radius-small", label: "Small", kind: "css-var", cssVar: "--border-radius-small", unit: "px", defaultValue: "4" },
    { id: "radius-medium", label: "Medium", kind: "css-var", cssVar: "--border-radius-medium", unit: "px", defaultValue: "8" },
    { id: "radius-big", label: "Large", kind: "css-var", cssVar: "--border-radius-big", unit: "px", defaultValue: "16" },
  ],
  spacing: [
    { id: "space-8", label: "Space 8", kind: "css-var", cssVar: "--space-8", unit: "px", defaultValue: "8" },
    { id: "space-16", label: "Space 16", kind: "css-var", cssVar: "--space-16", unit: "px", defaultValue: "16" },
    { id: "space-24", label: "Space 24", kind: "css-var", cssVar: "--space-24", unit: "px", defaultValue: "24" },
  ],
  typography: [
    { id: "font-size-30", label: "Body size", kind: "css-var", cssVar: "--font-size-30", unit: "px", defaultValue: "16" },
    { id: "font-size-40", label: "Heading size", kind: "css-var", cssVar: "--font-size-40", unit: "px", defaultValue: "18" },
    { id: "font-weight-bold", label: "Bold weight", kind: "css-var", cssVar: "--font-weight-bold", defaultValue: "500" },
  ],
};
```

- [ ] **Step 3: Verify**

Run: `npm run check`
Expected: PASS

- [ ] **Step 4: Commit**

```bash
git add src/lib/defaultComponentStates.ts src/lib/tokenDefinitions.ts
git commit -m "feat: add default component states and token field definitions"
```

---

### Task 3: Persistence and CSS override helpers (TDD) — `claude-sonnet-5-thinking-high`

**Files:**
- Create: `src/lib/storage.ts`
- Create: `src/lib/cssVarOverrides.ts`
- Create: `src/lib/buildThemeConfig.ts`
- Create: `src/tests/storage.test.ts`
- Create: `src/tests/cssVarOverrides.test.ts`

**Interfaces:**
- Produces: `loadPersistedState()`, `savePersistedState(state)`, `createInitialAppState()`, `buildCssVarStyle(overrides)`, `buildThemeConfig(overrides, name)`

- [ ] **Step 1: Write failing storage tests**

Create `src/tests/storage.test.ts`:

```ts
import { describe, expect, it, beforeEach } from "vitest";
import { loadPersistedState, savePersistedState, createInitialAppState } from "../lib/storage";
import { STORAGE_KEY, STORAGE_VERSION } from "../types";

beforeEach(() => {
  localStorage.clear();
});

describe("storage", () => {
  it("returns initial state when nothing stored", () => {
    const state = loadPersistedState();
    expect(state.view).toBe("components");
    expect(state.systemTheme).toBe("light");
    expect(state.componentStates.button.kind).toBe("primary");
  });

  it("round-trips persisted fields", () => {
    const initial = createInitialAppState();
    initial.systemTheme = "dark";
    initial.componentStates.button = { ...initial.componentStates.button, kind: "secondary" };
    savePersistedState(initial);

    const loaded = loadPersistedState();
    expect(loaded.systemTheme).toBe("dark");
    expect(loaded.componentStates.button.kind).toBe("secondary");
  });

  it("resets when version mismatches", () => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ version: 999, systemTheme: "black" })
    );
    const loaded = loadPersistedState();
    expect(loaded.systemTheme).toBe("light");
    expect(loaded.version).toBe(STORAGE_VERSION);
  });
});
```

- [ ] **Step 2: Run tests — expect fail**

Run: `npm test`
Expected: FAIL — module `../lib/storage` not found

- [ ] **Step 3: Implement storage**

Create `src/lib/storage.ts`:

```ts
import { defaultComponentStates, mergeWithDefaults } from "./defaultComponentStates";
import { EMPTY_TOKEN_OVERRIDES } from "./tokenDefinitions";
import type { AppState, PersistedState } from "../types";
import { STORAGE_KEY, STORAGE_VERSION } from "../types";

export function createInitialAppState(): AppState {
  return {
    view: "components",
    themeSubPage: "colors",
    systemTheme: "light",
    tokenOverrides: structuredClone(EMPTY_TOKEN_OVERRIDES),
    componentStates: mergeWithDefaults(undefined),
    focusedComponentId: "button",
    compareMode: false,
  };
}

function toPersisted(state: AppState): PersistedState {
  return {
    version: STORAGE_VERSION,
    view: state.view,
    themeSubPage: state.themeSubPage,
    systemTheme: state.systemTheme,
    tokenOverrides: state.tokenOverrides,
    componentStates: state.componentStates,
    focusedComponentId: state.focusedComponentId,
  };
}

export function savePersistedState(state: AppState): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(toPersisted(state)));
}

export function loadPersistedState(): AppState {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return createInitialAppState();

  try {
    const parsed = JSON.parse(raw) as Partial<PersistedState>;
    if (parsed.version !== STORAGE_VERSION) return createInitialAppState();

    const base = createInitialAppState();
    return {
      ...base,
      view: parsed.view ?? base.view,
      themeSubPage: parsed.themeSubPage ?? base.themeSubPage,
      systemTheme: parsed.systemTheme ?? base.systemTheme,
      tokenOverrides: {
        ...base.tokenOverrides,
        ...parsed.tokenOverrides,
        colors: parsed.tokenOverrides?.colors ?? base.tokenOverrides.colors,
        radius: parsed.tokenOverrides?.radius ?? base.tokenOverrides.radius,
        spacing: parsed.tokenOverrides?.spacing ?? base.tokenOverrides.spacing,
        typography: parsed.tokenOverrides?.typography ?? base.tokenOverrides.typography,
      },
      componentStates: mergeWithDefaults(parsed.componentStates),
      focusedComponentId: parsed.focusedComponentId ?? base.focusedComponentId,
      compareMode: false,
    };
  } catch {
    return createInitialAppState();
  }
}

export { defaultComponentStates };
```

- [ ] **Step 4: Write failing cssVarOverrides test**

Create `src/tests/cssVarOverrides.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import { buildCssVarStyle } from "../lib/cssVarOverrides";
import { EMPTY_TOKEN_OVERRIDES } from "../lib/tokenDefinitions";

describe("buildCssVarStyle", () => {
  it("maps radius spacing typography overrides to CSS properties", () => {
    const style = buildCssVarStyle({
      ...EMPTY_TOKEN_OVERRIDES,
      radius: { "--border-radius-medium": "12px" },
      spacing: { "--space-16": "20px" },
      typography: { "--font-size-30": "18px" },
    });
    expect(style["--border-radius-medium"]).toBe("12px");
    expect(style["--space-16"]).toBe("20px");
    expect(style["--font-size-30"]).toBe("18px");
  });
});
```

- [ ] **Step 5: Implement cssVarOverrides and buildThemeConfig**

Create `src/lib/cssVarOverrides.ts`:

```ts
import type { CSSProperties } from "react";
import type { TokenOverrides } from "../types";

export function buildCssVarStyle(overrides: TokenOverrides): CSSProperties {
  return {
    ...overrides.radius,
    ...overrides.spacing,
    ...overrides.typography,
  } as CSSProperties;
}
```

Create `src/lib/buildThemeConfig.ts`:

```ts
import type { Theme } from "@vibe/core";
import type { TokenOverrides } from "../types";

export function buildThemeConfig(overrides: TokenOverrides): Theme | undefined {
  const colors = overrides.colors;
  if (!colors || Object.keys(colors).length === 0) return undefined;

  return {
    name: "facelift-custom-theme",
    colors,
  };
}
```

- [ ] **Step 6: Run tests**

Run: `npm test`
Expected: PASS (3 tests)

- [ ] **Step 7: Verify build**

Run: `npm run check`
Expected: PASS

- [ ] **Step 8: Commit**

```bash
git add src/lib/storage.ts src/lib/cssVarOverrides.ts src/lib/buildThemeConfig.ts src/tests/
git commit -m "feat: add persistence and theme override helpers"
```

---

### Task 4: KitchenSinkContext — `claude-sonnet-5-thinking-high`

**Files:**
- Create: `src/context/KitchenSinkContext.tsx`
- Modify: `src/main.tsx`

**Interfaces:**
- Consumes: `loadPersistedState`, `savePersistedState`, `createInitialAppState`
- Produces: `KitchenSinkProvider`, `useKitchenSink()`

- [ ] **Step 1: Implement context**

Create `src/context/KitchenSinkContext.tsx`:

```tsx
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { loadPersistedState, savePersistedState } from "../lib/storage";
import type {
  AppState,
  AppView,
  SystemTheme,
  ThemeSubPage,
  TokenOverrides,
} from "../types";

type KitchenSinkContextValue = AppState & {
  setView: (view: AppView) => void;
  setThemeSubPage: (page: ThemeSubPage) => void;
  setSystemTheme: (theme: SystemTheme) => void;
  setFocusedComponentId: (id: string | null) => void;
  setCompareMode: (enabled: boolean) => void;
  updateComponentState: (id: string, patch: Record<string, unknown>) => void;
  updateTokenOverrides: (patch: Partial<TokenOverrides>) => void;
  updateColorOverride: (theme: SystemTheme, key: string, value: string) => void;
};

const KitchenSinkContext = createContext<KitchenSinkContextValue | null>(null);

export function KitchenSinkProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState(loadPersistedState);

  useEffect(() => {
    const id = window.setTimeout(() => savePersistedState(state), 200);
    return () => window.clearTimeout(id);
  }, [state]);

  const setView = useCallback((view: AppView) => {
    setState((s) => ({ ...s, view, compareMode: false }));
  }, []);

  const setThemeSubPage = useCallback((themeSubPage: ThemeSubPage) => {
    setState((s) => ({ ...s, view: "theme", themeSubPage }));
  }, []);

  const setSystemTheme = useCallback((systemTheme: SystemTheme) => {
    setState((s) => ({ ...s, systemTheme }));
  }, []);

  const setFocusedComponentId = useCallback((focusedComponentId: string | null) => {
    setState((s) => ({ ...s, focusedComponentId, compareMode: false }));
  }, []);

  const setCompareMode = useCallback((compareMode: boolean) => {
    setState((s) => ({ ...s, compareMode }));
  }, []);

  const updateComponentState = useCallback((id: string, patch: Record<string, unknown>) => {
    setState((s) => ({
      ...s,
      componentStates: {
        ...s.componentStates,
        [id]: { ...s.componentStates[id], ...patch },
      },
    }));
  }, []);

  const updateTokenOverrides = useCallback((patch: Partial<TokenOverrides>) => {
    setState((s) => ({
      ...s,
      tokenOverrides: {
        colors: { ...s.tokenOverrides.colors, ...patch.colors },
        radius: { ...s.tokenOverrides.radius, ...patch.radius },
        spacing: { ...s.tokenOverrides.spacing, ...patch.spacing },
        typography: { ...s.tokenOverrides.typography, ...patch.typography },
      },
    }));
  }, []);

  const updateColorOverride = useCallback(
    (theme: SystemTheme, key: string, value: string) => {
      setState((s) => ({
        ...s,
        tokenOverrides: {
          ...s.tokenOverrides,
          colors: {
            ...s.tokenOverrides.colors,
            [theme]: {
              ...s.tokenOverrides.colors[theme],
              [key]: value,
            },
          },
        },
      }));
    },
    []
  );

  const value = useMemo(
    () => ({
      ...state,
      setView,
      setThemeSubPage,
      setSystemTheme,
      setFocusedComponentId,
      setCompareMode,
      updateComponentState,
      updateTokenOverrides,
      updateColorOverride,
    }),
    [
      state,
      setView,
      setThemeSubPage,
      setSystemTheme,
      setFocusedComponentId,
      setCompareMode,
      updateComponentState,
      updateTokenOverrides,
      updateColorOverride,
    ]
  );

  return (
    <KitchenSinkContext.Provider value={value}>{children}</KitchenSinkContext.Provider>
  );
}

export function useKitchenSink(): KitchenSinkContextValue {
  const ctx = useContext(KitchenSinkContext);
  if (!ctx) throw new Error("useKitchenSink must be used within KitchenSinkProvider");
  return ctx;
}
```

- [ ] **Step 2: Wrap app in provider (ThemeProvider added in Task 5)**

Modify `src/main.tsx`:

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "@vibe/core/tokens";
import "./styles.css";
import App from "./App";
import { KitchenSinkProvider } from "./context/KitchenSinkContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <KitchenSinkProvider>
      <App />
    </KitchenSinkProvider>
  </React.StrictMode>
);
```

- [ ] **Step 3: Verify**

Run: `npm run check && npm test`
Expected: PASS

- [ ] **Step 4: Commit**

```bash
git add src/context/KitchenSinkContext.tsx src/main.tsx
git commit -m "feat: add KitchenSinkContext with localStorage sync"
```

---

### Task 5: ThemeProvider wrapper and app shell styles — `claude-sonnet-5-thinking-high` *(Opus if theme overrides don't apply)*

**Files:**
- Create: `src/components/AppThemeShell.tsx`
- Modify: `src/styles.css`
- Modify: `src/App.tsx` (minimal shell stub)

**Interfaces:**
- Consumes: `useKitchenSink()`, `buildThemeConfig`, `buildCssVarStyle`
- Produces: `AppThemeShell` wrapping children with Vibe theme + CSS vars

- [ ] **Step 1: Create AppThemeShell**

Create `src/components/AppThemeShell.tsx`:

```tsx
import { ThemeProvider } from "@vibe/core";
import type { ReactNode } from "react";
import { useKitchenSink } from "../context/KitchenSinkContext";
import { buildThemeConfig } from "../lib/buildThemeConfig";
import { buildCssVarStyle } from "../lib/cssVarOverrides";

export function AppThemeShell({ children }: { children: ReactNode }) {
  const { systemTheme, tokenOverrides } = useKitchenSink();
  const themeConfig = buildThemeConfig(tokenOverrides);
  const cssVars = buildCssVarStyle(tokenOverrides);

  return (
    <ThemeProvider systemTheme={systemTheme} themeConfig={themeConfig}>
      <div className="app-root" style={cssVars}>
        {children}
      </div>
    </ThemeProvider>
  );
}
```

- [ ] **Step 2: Replace styles.css layout foundation**

Replace `src/styles.css` with layout rules (keep Vibe-friendly fonts):

```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Figtree, Roboto, -apple-system, BlinkMacSystemFont, sans-serif;
  background: var(--primary-background-color, #f6f7fb);
  color: var(--primary-text-color, #323338);
}

.layout {
  display: flex;
  min-height: 100vh;
}

.left-pane {
  position: sticky;
  top: 0;
  width: 240px;
  flex-shrink: 0;
  height: 100vh;
  overflow-y: auto;
  padding: 24px 16px;
  background: var(--secondary-background-color, #ffffff);
  border-right: 1px solid var(--layout-border-color, #e6e9ef);
  display: flex;
  flex-direction: column;
}

.left-pane-title {
  margin: 0 0 20px;
  font-size: 18px;
  font-weight: 700;
}

.left-pane-nav {
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
}

.left-pane-link,
.left-pane-sublink,
.left-pane-theme-mode {
  padding: 7px 10px;
  border: none;
  border-radius: 4px;
  background: none;
  font: inherit;
  font-size: 14px;
  text-align: left;
  cursor: pointer;
  color: var(--primary-text-color, #323338);
}

.left-pane-sublink {
  padding-left: 24px;
  font-size: 13px;
}

.left-pane-link:hover,
.left-pane-sublink:hover,
.left-pane-theme-mode:hover {
  background: var(--primary-background-hover-color, #eff1f8);
}

.left-pane-link.is-active,
.left-pane-sublink.is-active,
.left-pane-theme-mode.is-active {
  background: var(--primary-selected-color, #cce5ff);
  font-weight: 600;
}

.left-pane-footer {
  margin-top: auto;
  padding-top: 16px;
  border-top: 1px solid var(--layout-border-color, #e6e9ef);
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.main-area {
  flex: 1;
  min-height: 100vh;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.component-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.component-card {
  position: relative;
  min-height: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--secondary-background-color, #ffffff);
  border: 1px solid var(--layout-border-color, #e6e9ef);
  border-radius: var(--border-radius-medium, 8px);
  padding: 16px;
  cursor: pointer;
}

.component-card.is-focused {
  border-color: var(--primary-color, #0073ea);
  outline: 2px solid var(--primary-selected-color, #cce5ff);
}

.component-card-title {
  position: absolute;
  top: 16px;
  left: 16px;
  margin: 0;
  font-size: 13px;
  font-weight: 600;
  color: var(--secondary-text-color, #676879);
  text-transform: uppercase;
  letter-spacing: 0.4px;
}

.component-card-demo {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 24px;
}

.control-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
  padding: 16px;
  border: 1px solid var(--layout-border-color, #e6e9ef);
  border-radius: var(--border-radius-medium, 8px);
  background: var(--secondary-background-color, #ffffff);
}

.control-bar-label {
  font-size: 14px;
  font-weight: 600;
  margin-right: 8px;
}

.compare-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.compare-column-title {
  margin: 0 0 12px;
  font-size: 16px;
  font-weight: 600;
}

.compare-toolbar {
  display: flex;
  justify-content: flex-end;
}

.theme-panel {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 720px;
}

.theme-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.theme-preview-strip {
  display: flex;
  gap: 16px;
  align-items: center;
  padding: 16px;
  border: 1px dashed var(--layout-border-color, #e6e9ef);
  border-radius: var(--border-radius-medium, 8px);
}

.card-error {
  font-size: 12px;
  color: var(--negative-color, #d83a52);
  text-align: center;
  padding: 8px;
}
```

- [ ] **Step 3: Stub App.tsx with shell**

Replace `src/App.tsx`:

```tsx
import { AppThemeShell } from "./components/AppThemeShell";
import { LeftPane } from "./components/LeftPane";
import { useKitchenSink } from "./context/KitchenSinkContext";
import { ComponentsView } from "./components/ComponentsView";
import { ThemePanel } from "./components/ThemePanel";

export default function App() {
  const { view } = useKitchenSink();

  return (
    <AppThemeShell>
      <div className="layout">
        <LeftPane />
        <main className="main-area">
          {view === "components" ? <ComponentsView /> : <ThemePanel />}
        </main>
      </div>
    </AppThemeShell>
  );
}
```

Create placeholder exports to unblock compile (filled in Tasks 6–8):

`src/components/LeftPane.tsx`, `src/components/ComponentsView.tsx`, `src/components/ThemePanel.tsx` — each exports minimal `() => null` until implemented.

- [ ] **Step 4: Verify**

Run: `npm run check`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/components/AppThemeShell.tsx src/components/LeftPane.tsx src/components/ComponentsView.tsx src/components/ThemePanel.tsx src/App.tsx src/styles.css
git commit -m "feat: add theme shell and layout styles"
```

---

### Task 6: LeftPane navigation — `composer-2.5-fast`

**Files:**
- Modify: `src/components/LeftPane.tsx`

**Interfaces:**
- Consumes: `useKitchenSink()` — `view`, `themeSubPage`, `systemTheme`, setters

- [ ] **Step 1: Implement LeftPane**

Replace `src/components/LeftPane.tsx`:

```tsx
import { useKitchenSink } from "../context/KitchenSinkContext";
import type { SystemTheme, ThemeSubPage } from "../types";

const THEME_SUBPAGES: { id: ThemeSubPage; label: string }[] = [
  { id: "colors", label: "Colors" },
  { id: "radius", label: "Radius" },
  { id: "spacing", label: "Spacing" },
  { id: "typography", label: "Typography" },
];

const SYSTEM_THEMES: SystemTheme[] = ["light", "dark", "black"];

export function LeftPane() {
  const {
    view,
    themeSubPage,
    systemTheme,
    setView,
    setThemeSubPage,
    setSystemTheme,
  } = useKitchenSink();

  return (
    <aside className="left-pane">
      <h1 className="left-pane-title">Facelift Kitchen Sink</h1>
      <nav className="left-pane-nav">
        <button
          type="button"
          className={`left-pane-link${view === "components" ? " is-active" : ""}`}
          onClick={() => setView("components")}
        >
          Components
        </button>
        <button
          type="button"
          className={`left-pane-link${view === "theme" ? " is-active" : ""}`}
          onClick={() => setThemeSubPage(themeSubPage)}
        >
          Theme
        </button>
        {view === "theme" &&
          THEME_SUBPAGES.map((page) => (
            <button
              key={page.id}
              type="button"
              className={`left-pane-sublink${themeSubPage === page.id ? " is-active" : ""}`}
              onClick={() => setThemeSubPage(page.id)}
            >
              {page.label}
            </button>
          ))}
      </nav>
      <div className="left-pane-footer">
        {SYSTEM_THEMES.map((theme) => (
          <button
            key={theme}
            type="button"
            className={`left-pane-theme-mode${systemTheme === theme ? " is-active" : ""}`}
            onClick={() => setSystemTheme(theme)}
          >
            {theme.charAt(0).toUpperCase() + theme.slice(1)}
          </button>
        ))}
      </div>
    </aside>
  );
}
```

- [ ] **Step 2: Manual check**

Run: `npm run dev`
Click: Components / Theme / sub-pages / Light Dark Black
Expected: active styles switch; no console errors

- [ ] **Step 3: Commit**

```bash
git add src/components/LeftPane.tsx
git commit -m "feat: add left pane navigation and theme mode toggles"
```

---

### Task 7: Component grid, control bar, and error boundary — `claude-sonnet-5-thinking-high`

**Files:**
- Create: `src/components/ErrorBoundary.tsx`
- Create: `src/components/ComponentCard.tsx`
- Create: `src/components/ComponentGrid.tsx`
- Create: `src/components/ComponentControlBar.tsx`
- Create: `src/components/ComponentsView.tsx`

**Interfaces:**
- Consumes: `sections` from `./sections`, `useKitchenSink()`, `defaultComponentStates`

- [ ] **Step 1: ErrorBoundary**

Create `src/components/ErrorBoundary.tsx`:

```tsx
import { Component, type ErrorInfo, type ReactNode } from "react";

type Props = { fallback: ReactNode; children: ReactNode };
type State = { hasError: boolean };

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Component demo error:", error, info);
  }

  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}
```

- [ ] **Step 2: ComponentCard**

Create `src/components/ComponentCard.tsx`:

```tsx
import type { Section } from "../types";
import { ErrorBoundary } from "./ErrorBoundary";

type Props = {
  section: Section;
  state: Record<string, unknown>;
  focused: boolean;
  onFocus: () => void;
};

export function ComponentCard({ section, state, focused, onFocus }: Props) {
  const { Demo, title } = section;

  return (
    <article
      className={`component-card${focused ? " is-focused" : ""}`}
      onClick={onFocus}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onFocus();
      }}
    >
      <h2 className="component-card-title">{title}</h2>
      <div className="component-card-demo">
        <ErrorBoundary fallback={<p className="card-error">Could not render this state</p>}>
          <Demo state={state} />
        </ErrorBoundary>
      </div>
    </article>
  );
}
```

- [ ] **Step 3: ComponentGrid**

Create `src/components/ComponentGrid.tsx`:

```tsx
import { sections } from "../sections";
import { ComponentCard } from "./ComponentCard";

type Props = {
  componentStates: Record<string, Record<string, unknown>>;
  focusedComponentId: string | null;
  onFocus: (id: string) => void;
};

export function ComponentGrid({ componentStates, focusedComponentId, onFocus }: Props) {
  return (
    <div className="component-grid">
      {sections.map((section) => (
        <ComponentCard
          key={section.id}
          section={section}
          state={componentStates[section.id] ?? section.defaultState}
          focused={focusedComponentId === section.id}
          onFocus={() => onFocus(section.id)}
        />
      ))}
    </div>
  );
}
```

- [ ] **Step 4: ComponentControlBar**

Create `src/components/ComponentControlBar.tsx`:

```tsx
import { Dropdown, Flex, Text, Toggle } from "@vibe/core";
import type { Section } from "../types";

type Props = {
  section: Section;
  state: Record<string, unknown>;
  onChange: (patch: Record<string, unknown>) => void;
};

export function ComponentControlBar({ section, state, onChange }: Props) {
  return (
    <div className="control-bar">
      <span className="control-bar-label">{section.title} controls</span>
      <Flex gap="medium" wrap>
        {section.controls.map((control) => {
          if (control.type === "boolean") {
            return (
              <Flex key={control.key} gap="small" align={Flex.align.CENTER}>
                <Text>{control.label}</Text>
                <Toggle
                  isSelected={Boolean(state[control.key])}
                  onChange={(val) => onChange({ [control.key]: val })}
                />
              </Flex>
            );
          }

          const options = control.options.map((o) => ({ value: o.value, label: o.label }));
          const selected = options.find((o) => o.value === String(state[control.key])) ?? options[0];

          return (
            <Flex key={control.key} gap="small" align={Flex.align.CENTER}>
              <Text>{control.label}</Text>
              <div style={{ width: 160 }}>
                <Dropdown
                  options={options}
                  value={selected}
                  onChange={(opt) => onChange({ [control.key]: opt?.value })}
                  clearable={false}
                />
              </div>
            </Flex>
          );
        })}
      </Flex>
    </div>
  );
}
```

- [ ] **Step 5: ComponentsView**

Create `src/components/ComponentsView.tsx`:

```tsx
import { Button } from "@vibe/core";
import { useKitchenSink } from "../context/KitchenSinkContext";
import { sections } from "../sections";
import { CompareView } from "./CompareView";
import { ComponentControlBar } from "./ComponentControlBar";
import { ComponentGrid } from "./ComponentGrid";

export function ComponentsView() {
  const {
    componentStates,
    focusedComponentId,
    compareMode,
    setFocusedComponentId,
    setCompareMode,
    updateComponentState,
  } = useKitchenSink();

  const focusedSection = sections.find((s) => s.id === focusedComponentId) ?? sections[0];

  if (compareMode) {
    return <CompareView onExit={() => setCompareMode(false)} />;
  }

  return (
    <>
      <div className="compare-toolbar">
        <Button kind={Button.kinds.SECONDARY} onClick={() => setCompareMode(true)}>
          Compare
        </Button>
      </div>
      <ComponentGrid
        componentStates={componentStates}
        focusedComponentId={focusedComponentId}
        onFocus={setFocusedComponentId}
      />
      {focusedSection && (
        <ComponentControlBar
          section={focusedSection}
          state={componentStates[focusedSection.id] ?? focusedSection.defaultState}
          onChange={(patch) => updateComponentState(focusedSection.id, patch)}
        />
      )}
    </>
  );
}
```

Create stub `src/components/CompareView.tsx`:

```tsx
export function CompareView({ onExit }: { onExit: () => void }) {
  return null;
}
```

- [ ] **Step 6: Verify**

Run: `npm run check`
Expected: PASS (sections still old shape — fixed in Task 8)

- [ ] **Step 7: Commit**

```bash
git add src/components/ErrorBoundary.tsx src/components/ComponentCard.tsx src/components/ComponentGrid.tsx src/components/ComponentControlBar.tsx src/components/ComponentsView.tsx src/components/CompareView.tsx
git commit -m "feat: add component grid, control bar, and error boundary"
```

---

### Task 8: Upgrade all nine sections — `gpt-5.6-terra-medium` *(Opus if >2 sections fail typecheck or render)*

**Files:**
- Modify: all `src/sections/*.section.tsx`
- Modify: `src/sections/index.ts` (if needed — should still glob)

**Interfaces:**
- Each section exports `defaultState`, `controls`, and `Demo({ state })`

- [ ] **Step 1: Update Button.section.tsx (reference implementation)**

Replace `src/sections/Button.section.tsx`:

```tsx
import { Button } from "@vibe/core";
import { Bolt } from "@vibe/icons";
import type { Section } from "../section";

const controls: Section["controls"] = [
  {
    key: "kind",
    label: "Kind",
    type: "select",
    options: [
      { value: "primary", label: "Primary" },
      { value: "secondary", label: "Secondary" },
      { value: "tertiary", label: "Tertiary" },
    ],
  },
  {
    key: "size",
    label: "Size",
    type: "select",
    options: [
      { value: "small", label: "Small" },
      { value: "medium", label: "Medium" },
      { value: "large", label: "Large" },
    ],
  },
  {
    key: "leftIcon",
    label: "Left icon",
    type: "select",
    options: [
      { value: "none", label: "None" },
      { value: "left", label: "Left" },
    ],
  },
  {
    key: "rightIcon",
    label: "Right icon",
    type: "select",
    options: [
      { value: "none", label: "None" },
      { value: "right", label: "Right" },
    ],
  },
  { key: "disabled", label: "Disabled", type: "boolean" },
  { key: "loading", label: "Loading", type: "boolean" },
];

const defaultState = {
  kind: "primary",
  size: "medium",
  leftIcon: "none",
  rightIcon: "none",
  disabled: false,
  loading: false,
};

const Demo: Section["Demo"] = ({ state }) => (
  <Button
    kind={state.kind as "primary" | "secondary" | "tertiary"}
    size={state.size as "small" | "medium" | "large"}
    leftIcon={state.leftIcon === "left" ? Bolt : undefined}
    rightIcon={state.rightIcon === "right" ? Bolt : undefined}
    disabled={Boolean(state.disabled)}
    loading={Boolean(state.loading)}
    onClick={() => {}}
  >
    Click me
  </Button>
);

const section: Section = {
  id: "button",
  title: "Button",
  defaultState,
  controls,
  Demo,
};

export default section;
```

- [ ] **Step 2: Update remaining eight sections**

Apply the same pattern to each file. Verify prop names against `@vibe/core` types before coding. Minimum spec per file:

| File | `defaultState` keys | Notes |
| --- | --- | --- |
| `IconButton.section.tsx` | `kind`, `size`, `disabled` | Use `IconButton` + `Bolt` icon |
| `ButtonGroup.section.tsx` | `kind`, `size`, `disabled` | Render 2–3 grouped buttons |
| `Tabs.section.tsx` | `size`, `activeTab` | Control active tab via state index |
| `Label.section.tsx` | `color`, `size` | Map color/size to Vibe Label props |
| `Chip.section.tsx` | `color`, `size`, `disabled`, `readOnly` | Component export is `Chips` |
| `TextField.section.tsx` | `size`, `disabled`, `validation`, `withTitle` | Map validation to success/error props |
| `Dropdown.section.tsx` | `size`, `disabled`, `multi` | Keep existing options array |
| `Toast.section.tsx` | `type`, `withAction` | Keep open trigger button; toast reflects type |

- [ ] **Step 3: Verify**

Run: `npm run check`
Expected: PASS

Run: `npm run dev`
Click each card, change controls, reload page
Expected: states persist

- [ ] **Step 4: Commit**

```bash
git add src/sections/
git commit -m "feat: make all section demos stateful with control definitions"
```

---

### Task 9: Compare view — `composer-2.5-fast`

**Files:**
- Modify: `src/components/CompareView.tsx`

**Interfaces:**
- Consumes: `sections`, `componentStates`, `defaultComponentStates` via context

- [ ] **Step 1: Implement CompareView**

Replace `src/components/CompareView.tsx`:

```tsx
import { Button } from "@vibe/core";
import { useKitchenSink } from "../context/KitchenSinkContext";
import { defaultComponentStates } from "../lib/defaultComponentStates";
import { sections } from "../sections";
import { ComponentGrid } from "./ComponentGrid";

export function CompareView({ onExit }: { onExit: () => void }) {
  const { componentStates } = useKitchenSink();

  return (
    <>
      <div className="compare-toolbar">
        <Button kind={Button.kinds.SECONDARY} onClick={onExit}>
          Back to editing
        </Button>
      </div>
      <div className="compare-layout">
        <section>
          <h3 className="compare-column-title">Original</h3>
          <ComponentGrid
            componentStates={Object.fromEntries(
              sections.map((s) => [s.id, s.defaultState])
            )}
            focusedComponentId={null}
            onFocus={() => {}}
          />
        </section>
        <section>
          <h3 className="compare-column-title">Your design</h3>
          <ComponentGrid
            componentStates={componentStates}
            focusedComponentId={null}
            onFocus={() => {}}
          />
        </section>
      </div>
    </>
  );
}
```

Remove unused import if `defaultComponentStates` not needed (use `s.defaultState`).

- [ ] **Step 2: Disable focus ring in compare mode**

Add optional prop `interactive?: boolean` to `ComponentGrid` / `ComponentCard` — when `false`, skip `cursor: pointer`, focus handlers, and `is-focused` class. Pass `interactive={false}` from CompareView.

- [ ] **Step 3: Manual check**

Run: `npm run dev`
Change Button to secondary → Compare
Expected: left grid shows primary default; right shows secondary

- [ ] **Step 4: Commit**

```bash
git add src/components/CompareView.tsx src/components/ComponentGrid.tsx src/components/ComponentCard.tsx src/styles.css
git commit -m "feat: add side-by-side compare view for component states"
```

---

### Task 10: Theme panel with live preview — `claude-sonnet-5-thinking-high` *(Opus if token edits don't reflect in UI)*

**Files:**
- Modify: `src/components/ThemePanel.tsx`

**Interfaces:**
- Consumes: `TOKEN_FIELDS_BY_SUBPAGE`, `useKitchenSink()`, `updateColorOverride`, `updateTokenOverrides`

- [ ] **Step 1: Implement ThemePanel**

Replace `src/components/ThemePanel.tsx`:

```tsx
import { Button, Chips, TextField, Text } from "@vibe/core";
import { TOKEN_FIELDS_BY_SUBPAGE } from "../lib/tokenDefinitions";
import { useKitchenSink } from "../context/KitchenSinkContext";

export function ThemePanel() {
  const { themeSubPage, systemTheme, tokenOverrides, updateColorOverride, updateTokenOverrides } =
    useKitchenSink();

  const fields = TOKEN_FIELDS_BY_SUBPAGE[themeSubPage];

  return (
    <div className="theme-panel">
      <Text type={Text.types.TEXT1} weight={Text.weights.BOLD}>
        {themeSubPage.charAt(0).toUpperCase() + themeSubPage.slice(1)} ({systemTheme})
      </Text>

      {fields.map((field) => {
        if (field.kind === "color") {
          const value =
            tokenOverrides.colors[systemTheme]?.[field.cssVar] ?? "";
          return (
            <label key={field.id} className="theme-field">
              <Text>{field.label}</Text>
              <input
                type="color"
                value={value || "#0073ea"}
                onChange={(e) => updateColorOverride(systemTheme, field.cssVar, e.target.value)}
              />
            </label>
          );
        }

        const bucket =
          themeSubPage === "radius"
            ? tokenOverrides.radius
            : themeSubPage === "spacing"
              ? tokenOverrides.spacing
              : tokenOverrides.typography;

        const stored = bucket[field.cssVar]?.replace(field.unit ?? "", "") ?? field.defaultValue;

        return (
          <label key={field.id} className="theme-field">
            <Text>{field.label}</Text>
            <TextField
              value={String(stored)}
              onChange={(val) => {
                const next = `${val}${field.unit ?? ""}`;
                const patch =
                  themeSubPage === "radius"
                    ? { radius: { ...tokenOverrides.radius, [field.cssVar]: next } }
                    : themeSubPage === "spacing"
                      ? { spacing: { ...tokenOverrides.spacing, [field.cssVar]: next } }
                      : { typography: { ...tokenOverrides.typography, [field.cssVar]: next } };
                updateTokenOverrides(patch);
              }}
            />
          </label>
        );
      })}

      <div className="theme-preview-strip">
        <Button onClick={() => {}}>Preview button</Button>
        <Chips label="Preview chip" readOnly />
        <TextField placeholder="Preview field" />
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Manual check**

Run: `npm run dev`
Theme → Colors → change primary → Components
Expected: button colors reflect override

- [ ] **Step 3: Commit**

```bash
git add src/components/ThemePanel.tsx
git commit -m "feat: add theme token panel with live preview strip"
```

---

### Task 11: Final integration, README, and verification — `composer-2.5-fast`

**Files:**
- Modify: `README.md`
- Modify: `src/sections/index.ts` (remove any stale search references if present)

- [ ] **Step 1: Update README**

Update `README.md` to describe:
- Left pane navigation (Components / Theme sub-pages)
- Compare button on Components page
- Persistence via localStorage
- Scripts: `npm run dev`, `npm run check`, `npm test`

- [ ] **Step 2: Full verification**

Run: `npm test && npm run check`
Expected: all tests PASS, build PASS

Manual checklist (from spec):
1. Left pane switches Components ↔ Theme sub-pages
2. Light / Dark / Black updates all views
3. Click card → control bar updates; states persist on reload
4. Theme token edits visible on Components grid after return
5. Compare shows two 3×3 grids; Original = defaults, Your design = saved states
6. 3×3 grid fills desktop width cleanly

- [ ] **Step 3: Commit**

```bash
git add README.md
git commit -m "docs: update README for interactive kitchen sink"
```

---

## Spec coverage self-review

| Spec requirement | Task |
| --- | --- |
| 9 components fixed order | Task 2, 8 |
| Click-to-focus control bar | Task 7, 8 |
| Compare side-by-side component states | Task 9 |
| No change counter | — (not implemented) |
| Light/Dark/Black global | Task 6 |
| Theme sub-pages in left pane | Task 6, 10 |
| Left pane nav only | Task 5, 6 |
| 3×3 larger grid | Task 5, 7 |
| Full persistence | Task 3, 4 |
| ThemeProvider colors | Task 5 |
| CSS var radius/spacing/typography | Task 3, 10 |
| Theme live preview strip | Task 10 |
| Per-card error fallback | Task 7 |
| `npm run check` verification | All tasks |

## Placeholder scan

No TBD/TODO steps. Each task includes file paths, code, and verification commands.

## Type consistency

- `Section.Demo` always `(props: { state: Record<string, unknown> }) => JSX`
- `ComponentStateMap` keys match section `id` strings
- `PersistedState.version` === `STORAGE_VERSION` (1)
- `compareMode` never persisted; always `false` on load

---

**Plan complete and saved to `docs/superpowers/plans/2026-07-29-kitchen-sink-interactive.md`. Two execution options:**

**1. Subagent-Driven (recommended)** — I dispatch a fresh subagent per task, review between tasks, fast iteration

**2. Inline Execution** — Execute tasks in this session using executing-plans, batch execution with checkpoints

**Which approach?**
