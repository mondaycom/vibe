import { useKitchenSink } from "../context/KitchenSinkContext";
import { ThemeColorsPanel } from "./ThemeColorsPanel";
import { ThemeRadiusPanel } from "./ThemeRadiusPanel";
import { ThemeTypographyPanel } from "./ThemeTypographyPanel";

export function ThemePanel() {
  const { themeSubPage } = useKitchenSink();

  if (themeSubPage === "colors") {
    return <ThemeColorsPanel />;
  }

  if (themeSubPage === "typography") {
    return <ThemeTypographyPanel />;
  }

  return <ThemeRadiusPanel />;
}
