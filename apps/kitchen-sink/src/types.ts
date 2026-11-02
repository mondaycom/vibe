import type React from "react";

export type SystemTheme = "light" | "dark" | "black";
export type ThemeFamily = "original" | "facelift";
export type AppView = "components" | "theme" | "screens";
export type ThemeSubPage = "colors" | "radius" | "typography";
export type ComponentGalleryId =
  | "icon-button"
  | "button"
  | "button-group"
  | "segmented-control"
  | "tabs"
  | "label"
  | "chip"
  | "menu"
  | "text-field"
  | "dropdown"
  | "menu"
  | "toast"
  | "stroke-spotlight";

export type ComponentSubPage = "grid" | ComponentGalleryId;

export type ThemeColorOverrides = Partial<Record<SystemTheme, Record<string, string>>>;

export type TokenOverrides = {
  colors: Partial<Record<ThemeFamily, ThemeColorOverrides>>;
  radius: Record<string, string>;
  spacing: Record<string, string>;
  typography: Record<string, string>;
};

export type ComponentStateMap = Record<string, Record<string, unknown>>;

export type AppState = {
  view: AppView;
  themeSubPage: ThemeSubPage;
  componentSubPage: ComponentSubPage;
  systemTheme: SystemTheme;
  tokenOverrides: TokenOverrides;
  componentStates: ComponentStateMap;
  focusedComponentId: string | null;
  faceliftTheme: boolean;
};

export const STORAGE_VERSION = 2;
export const STORAGE_KEY = "facelift-kitchen-sink-state";

export type PersistedState = {
  version: number;
  view: AppView;
  themeSubPage: ThemeSubPage;
  componentSubPage?: ComponentSubPage;
  systemTheme: SystemTheme;
  tokenOverrides: TokenOverrides;
  componentStates: ComponentStateMap;
  focusedComponentId: string | null;
  faceliftTheme: boolean;
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

export function getThemeFamily(faceliftTheme: boolean): ThemeFamily {
  return faceliftTheme ? "facelift" : "original";
}

export type TokenFieldDef =
  | { id: string; label: string; kind: "css-var"; cssVar: string; unit?: string; defaultValue: string; description?: string };
