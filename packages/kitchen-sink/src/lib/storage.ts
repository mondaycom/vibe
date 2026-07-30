import { defaultComponentStates, mergeWithDefaults } from "./defaultComponentStates";
import { EMPTY_TOKEN_OVERRIDES } from "./tokenDefinitions";
import type { AppState, PersistedState, ThemeSubPage } from "../types";
import { STORAGE_KEY, STORAGE_VERSION } from "../types";

const VALID_THEME_SUBPAGES: ThemeSubPage[] = ["colors", "radius", "typography"];

function normalizeThemeSubPage(value: unknown, fallback: ThemeSubPage): ThemeSubPage {
  if (value === "spacing") return "typography";
  if (VALID_THEME_SUBPAGES.includes(value as ThemeSubPage)) return value as ThemeSubPage;
  return fallback;
}

export function createInitialAppState(): AppState {
  return {
    view: "components",
    themeSubPage: "colors",
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
      view: parsed.view ?? base.view,
      themeSubPage: normalizeThemeSubPage(parsed.themeSubPage, base.themeSubPage),
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
      faceliftTheme: parsed.faceliftTheme ?? false,
    };
  } catch {
    return resetAndPersist();
  }
}

export { defaultComponentStates };
