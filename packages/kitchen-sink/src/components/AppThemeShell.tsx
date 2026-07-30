import { ThemeProvider } from "@vibe/core";
import type { ReactNode } from "react";
import { useKitchenSink } from "../context/KitchenSinkContext";
import { buildThemeConfig } from "../lib/buildThemeConfig";
import { buildCssVarStyle } from "../lib/cssVarOverrides";

export function AppThemeShell({ children }: { children: ReactNode }) {
  const { systemTheme, tokenOverrides } = useKitchenSink();
  const themeConfig = buildThemeConfig(tokenOverrides);
  const cssVars = buildCssVarStyle(tokenOverrides, systemTheme);

  return (
    <ThemeProvider systemTheme={systemTheme} themeConfig={themeConfig}>
      <div className="app-root" style={cssVars}>
        {children}
      </div>
    </ThemeProvider>
  );
}
