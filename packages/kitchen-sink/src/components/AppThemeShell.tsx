import { ThemeProvider } from "@vibe/core";
import type { ReactNode } from "react";
import { useKitchenSink } from "../context/KitchenSinkContext";
import { buildThemeConfig } from "../lib/buildThemeConfig";
import { buildCssVarStyle } from "../lib/cssVarOverrides";

export function AppThemeShell({ children }: { children: ReactNode }) {
  const { systemTheme, tokenOverrides, faceliftTheme } = useKitchenSink();
  const themeConfig = buildThemeConfig(tokenOverrides);
  // Facelift theme uses CSS class variables — inline overrides would win the cascade and block them.
  const cssVars = faceliftTheme ? {} : buildCssVarStyle(tokenOverrides, systemTheme);

  return (
    <ThemeProvider systemTheme={systemTheme} themeConfig={themeConfig}>
      <div className={`app-root${faceliftTheme ? " facelift-theme" : ""}`} style={cssVars}>
        {children}
      </div>
    </ThemeProvider>
  );
}
