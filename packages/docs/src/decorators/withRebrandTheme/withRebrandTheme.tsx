import React from "react";
import { type Decorator } from "@storybook/react";

const REBRAND_CLASS = "rebrand-theme";
const THEME_CLASSES: Record<string, string> = {
  Light: "light-app-theme",
  Dark: "dark-app-theme",
  Black: "black-app-theme"
};

/**
 * The rebrand overrides are scoped to `body.<theme>-app-theme.rebrand-theme`, while the themes addon puts the
 * theme class on <html>. This mirrors the active theme class onto <body> and toggles `rebrand-theme` there.
 *
 * The classes are applied while rendering, not in an effect: components that read computed colours on mount
 * (e.g. Button's on-primary text colour) must already see the rebrand tokens. The story is keyed by the
 * selection so those components mount again when the toolbar changes.
 */
const withRebrandTheme: Decorator = (Story, { globals }) => {
  const rebrand = globals.rebrand === "on";
  const themeClass = THEME_CLASSES[globals.theme] ?? THEME_CLASSES.Light;

  const { classList } = document.body;
  Object.values(THEME_CLASSES).forEach(className => classList.toggle(className, rebrand && className === themeClass));
  classList.toggle(REBRAND_CLASS, rebrand);

  return <Story key={`${rebrand ? "rebrand" : "stock"}-${themeClass}`} />;
};

export default withRebrandTheme;
