import { useKitchenSink } from "../context/KitchenSinkContext";
import { ScreensApp } from "../screens/ScreensApp";
import type { RouteMode, RouteTheme } from "../screens/routing/hashRoute";

export function ScreensView() {
  const { faceliftTheme, systemTheme } = useKitchenSink();

  const externalTheme: RouteTheme = faceliftTheme ? "glaze" : "";
  const externalMode: RouteMode =
    systemTheme === "dark"
      ? "dark-app-theme"
      : systemTheme === "black"
        ? "black-app-theme"
        : "";

  return <ScreensApp externalTheme={externalTheme} externalMode={externalMode} />;
}
