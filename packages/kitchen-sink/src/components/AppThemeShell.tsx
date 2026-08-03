import { ThemeProvider } from "@vibe/core";
import { useEffect, type ReactNode } from "react";
import { useKitchenSink } from "../context/KitchenSinkContext";
import { buildThemeConfig } from "../lib/buildThemeConfig";
import { buildCssVarStyle } from "../lib/cssVarOverrides";
import { getThemeFamily, type SystemTheme } from "../types";

const DEFAULT_THEME_CLASSES: SystemTheme[] = ["light", "dark", "black"];
const FACELIFT_THEME_CLASSES = DEFAULT_THEME_CLASSES.map((theme) => `facelift-${theme}-app-theme`);

function getBodyThemeClass(faceliftTheme: boolean, systemTheme: SystemTheme): string {
  return faceliftTheme ? `facelift-${systemTheme}-app-theme` : `${systemTheme}-app-theme`;
}

export function AppThemeShell({ children }: { children: ReactNode }) {
  const { systemTheme, tokenOverrides, faceliftTheme } = useKitchenSink();
  const themeFamily = getThemeFamily(faceliftTheme);
  const themeConfig = buildThemeConfig(tokenOverrides, themeFamily);
  const cssVars = buildCssVarStyle(tokenOverrides, systemTheme, themeFamily);

  useEffect(() => {
    DEFAULT_THEME_CLASSES.forEach((theme) => {
      document.body.classList.remove(`${theme}-app-theme`);
    });
    FACELIFT_THEME_CLASSES.forEach((themeClass) => {
      document.body.classList.remove(themeClass);
    });
    document.body.classList.add(getBodyThemeClass(faceliftTheme, systemTheme));
  }, [faceliftTheme, systemTheme]);

  return (
    <ThemeProvider themeConfig={themeConfig}>
      <div className="app-root" style={cssVars}>
        {children}
      </div>
    </ThemeProvider>
  );
}
