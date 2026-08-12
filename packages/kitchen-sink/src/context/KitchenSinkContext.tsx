import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { resolveComponentSubPage } from "../components/componentGalleries";
import { loadPersistedState, savePersistedState } from "../lib/storage";
import {
  clearTransferredVibeState,
  isCurrentVibeSource,
  readTransferredVibeState,
} from "../lib/vibeSource";
import type {
  AppState,
  AppView,
  ComponentSubPage,
  SystemTheme,
  ThemeFamily,
  ThemeSubPage,
  TokenOverrides,
} from "../types";
import { STORAGE_KEY } from "../types";

type KitchenSinkContextValue = AppState & {
  setView: (view: AppView) => void;
  setThemeSubPage: (page: ThemeSubPage) => void;
  setComponentSubPage: (page: ComponentSubPage) => void;
  setSystemTheme: (theme: SystemTheme) => void;
  setFocusedComponentId: (id: string | null) => void;
  updateComponentState: (id: string, patch: Record<string, unknown>) => void;
  updateTokenOverrides: (patch: Partial<TokenOverrides>) => void;
  updateColorOverride: (theme: SystemTheme, key: string, value: string) => void;
  setFaceliftTheme: (on: boolean) => void;
};

const KitchenSinkContext = createContext<KitchenSinkContextValue | null>(null);

function readRawPersistedComponentSubPage(): unknown {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return undefined;

  try {
    return (JSON.parse(raw) as { componentSubPage?: unknown }).componentSubPage;
  } catch {
    return undefined;
  }
}

export function KitchenSinkProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState(() => {
    const transferred = readTransferredVibeState();
    const initialState = transferred ?? loadPersistedState();
    const subPageSource = transferred
      ? transferred.componentSubPage
      : (readRawPersistedComponentSubPage() ?? initialState.componentSubPage);
    const componentSubPage = resolveComponentSubPage(subPageSource);

    return {
      ...initialState,
      componentSubPage,
      faceliftTheme: isCurrentVibeSource
    };
  });

  useEffect(() => {
    clearTransferredVibeState();
  }, []);

  useEffect(() => {
    const id = window.setTimeout(() => savePersistedState(state), 200);
    return () => window.clearTimeout(id);
  }, [state]);

  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, "");
    const componentSubPage = resolveComponentSubPage(hash);
    if (componentSubPage !== "grid") {
      setState((s) => ({ ...s, view: "components", componentSubPage }));
    }
  }, []);

  const setView = useCallback((view: AppView) => {
    setState((s) => ({
      ...s,
      view,
      componentSubPage: view === "components" ? "grid" : s.componentSubPage,
    }));
  }, []);

  const setThemeSubPage = useCallback((themeSubPage: ThemeSubPage) => {
    setState((s) => ({ ...s, view: "theme", themeSubPage }));
  }, []);

  const setComponentSubPage = useCallback((componentSubPage: ComponentSubPage) => {
    setState((s) => ({
      ...s,
      view: "components",
      componentSubPage: resolveComponentSubPage(componentSubPage),
    }));
  }, []);

  const setSystemTheme = useCallback((systemTheme: SystemTheme) => {
    setState((s) => ({ ...s, systemTheme }));
  }, []);

  const setFocusedComponentId = useCallback((focusedComponentId: string | null) => {
    setState((s) => ({ ...s, focusedComponentId }));
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
      setState((s) => {
        const themeFamily: ThemeFamily = s.faceliftTheme ? "facelift" : "original";
        const familyColors = { ...(s.tokenOverrides.colors[themeFamily] ?? {}) };
        const themeColors = { ...(familyColors[theme] ?? {}) };
        if (value) {
          themeColors[key] = value;
        } else {
          delete themeColors[key];
        }
        return {
          ...s,
          tokenOverrides: {
            ...s.tokenOverrides,
            colors: {
              ...s.tokenOverrides.colors,
              [themeFamily]: {
                ...familyColors,
                [theme]: themeColors,
              },
            },
          },
        };
      });
    },
    []
  );

  const setFaceliftTheme = useCallback((on: boolean) => {
    setState((s) => ({ ...s, faceliftTheme: on }));
  }, []);

  const value = useMemo(
    () => ({
      ...state,
      setView,
      setThemeSubPage,
      setComponentSubPage,
      setSystemTheme,
      setFocusedComponentId,
      updateComponentState,
      updateTokenOverrides,
      updateColorOverride,
      setFaceliftTheme,
    }),
    [
      state,
      setView,
      setThemeSubPage,
      setComponentSubPage,
      setSystemTheme,
      setFocusedComponentId,
      updateComponentState,
      updateTokenOverrides,
      updateColorOverride,
      setFaceliftTheme,
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
