import { resolveComponentSubPage } from "../components/componentGalleries";
import { defaultComponentStates, mergeWithDefaults } from "./defaultComponentStates";
import { EMPTY_TOKEN_OVERRIDES } from "./tokenDefinitions";
import type {
  AppState,
  AppView,
  ComponentSubPage,
  PersistedState,
  ThemeColorOverrides,
  ThemeSubPage,
} from "../types";
import { STORAGE_KEY, STORAGE_VERSION } from "../types";

const VALID_THEME_SUBPAGES: ThemeSubPage[] = ["colors", "radius", "typography"];
const VALID_VIEWS: AppView[] = ["components", "theme", "screens"];

function normalizeView(value: unknown, fallback: AppView): AppView {
  if (typeof value === "string" && VALID_VIEWS.includes(value as AppView)) {
    return value as AppView;
  }
  return fallback;
}

function normalizeComponentSubPage(value: unknown, fallback: ComponentSubPage): ComponentSubPage {
  if (value === undefined || value === null) return fallback;

  const resolved = resolveComponentSubPage(value);
  // Unknown ids resolve to "grid"; keep the caller's fallback instead.
  if (resolved === "grid" && value !== "grid") return fallback;
  return resolved;
}

function isSystemThemeKey(key: string): key is "light" | "dark" | "black" {
  return key === "light" || key === "dark" || key === "black";
}

function migrateColorOverrides(colors: unknown): AppState["tokenOverrides"]["colors"] {
  if (!colors || typeof colors !== "object") {
    return {};
  }

  const record = colors as Record<string, unknown>;

  if ("original" in record || "facelift" in record) {
    return colors as AppState["tokenOverrides"]["colors"];
  }

  if (Object.keys(record).some(isSystemThemeKey)) {
    return { original: colors as ThemeColorOverrides };
  }

  return {};
}

function normalizeThemeSubPage(value: unknown, fallback: ThemeSubPage): ThemeSubPage {
  if (value === "spacing") return "typography";
  if (VALID_THEME_SUBPAGES.includes(value as ThemeSubPage)) return value as ThemeSubPage;
  return fallback;
}

export function createInitialAppState(): AppState {
  return {
    view: "components",
    themeSubPage: "colors",
    componentSubPage: "grid",
    systemTheme: "light",
    tokenOverrides: structuredClone(EMPTY_TOKEN_OVERRIDES),
    componentStates: mergeWithDefaults(undefined),
    focusedComponentId: "button",
    faceliftTheme: false,
  };
}

function toPersisted(state: AppState): PersistedState {
  return {
    version: STORAGE_VERSION,
    view: state.view,
    themeSubPage: state.themeSubPage,
    componentSubPage: state.componentSubPage,
    systemTheme: state.systemTheme,
    tokenOverrides: state.tokenOverrides,
    componentStates: state.componentStates,
    focusedComponentId: state.focusedComponentId,
    faceliftTheme: state.faceliftTheme,
  };
}

export function savePersistedState(state: AppState): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(toPersisted(state)));
}

function resetAndPersist(): AppState {
  const initial = createInitialAppState();
  savePersistedState(initial);
  return initial;
}

export function loadPersistedState(): AppState {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return resetAndPersist();

  try {
    const parsed = JSON.parse(raw) as Partial<PersistedState>;
    if (parsed.version !== STORAGE_VERSION) return resetAndPersist();

    const base = createInitialAppState();

    return {
      ...base,
      view: normalizeView(parsed.view, base.view),
      themeSubPage: normalizeThemeSubPage(parsed.themeSubPage, base.themeSubPage),
      componentSubPage: normalizeComponentSubPage(parsed.componentSubPage, base.componentSubPage),
      systemTheme: parsed.systemTheme ?? base.systemTheme,
      tokenOverrides: {
        ...base.tokenOverrides,
        ...parsed.tokenOverrides,
        colors: migrateColorOverrides(parsed.tokenOverrides?.colors),
        radius: parsed.tokenOverrides?.radius ?? base.tokenOverrides.radius,
        spacing: parsed.tokenOverrides?.spacing ?? base.tokenOverrides.spacing,
        typography: parsed.tokenOverrides?.typography ?? base.tokenOverrides.typography,
      },
      componentStates: mergeWithDefaults(parsed.componentStates),
      focusedComponentId: parsed.focusedComponentId ?? base.focusedComponentId,
      faceliftTheme: parsed.faceliftTheme ?? false,
    };
  } catch {
    return resetAndPersist();
  }
}

export { defaultComponentStates };
