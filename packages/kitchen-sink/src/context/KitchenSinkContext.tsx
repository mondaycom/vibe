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
    setState((s) => ({ ...s, view }));
  }, []);

  const setThemeSubPage = useCallback((themeSubPage: ThemeSubPage) => {
    setState((s) => ({ ...s, view: "theme", themeSubPage }));
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
        const themeColors = { ...s.tokenOverrides.colors[theme] };
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
              [theme]: themeColors,
            },
          },
        };
      });
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
