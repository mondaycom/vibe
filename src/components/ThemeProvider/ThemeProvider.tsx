import React, { FC, ReactElement, useLayoutEffect } from "react";
import { Color, SystemTheme, SystemThemeClassMap, Theme } from "./ThemeProviderConstants";
import cx from "classnames";

export interface ThemeProviderProps {
  theme?: Theme;
  children: ReactElement;
}

const getThemeProviderClassname = (themeName: string) => {
  if (!themeName) {
    return null;
  }
  return `theme-provider_${themeName}`;
};

const generateThemeCssOverride = (theme: Theme) => {
  let css = "";
  for (const systemTheme of Object.keys(theme.colors) as SystemTheme[]) {
    for (const colorToken of Object.keys(theme.colors[systemTheme]) as Color[]) {
      css += `
        .${SystemThemeClassMap[systemTheme]} {
          .${getThemeProviderClassname(theme.name)} {
            --${colorToken}: ${theme.colors[systemTheme][colorToken]};
          }
        }
      `;
    }
  }

  return css;
};

const ThemeProvider: FC<ThemeProviderProps> = ({ theme, children }) => {
  useLayoutEffect(() => {
    if (!theme || !theme.colors) {
      return;
    }

    // Create a new style element
    const styleElement = document.createElement("style");
    styleElement.type = "text/css";
    const themeCssOverride = generateThemeCssOverride(theme);

    try {
      // Set the innerText property of the style element with the dynamic CSS
      styleElement.appendChild(document.createTextNode(themeCssOverride));

      // Append the style element to the document head
      document.head.appendChild(styleElement);
    } catch (error) {
      console.error("Error loading dynamic CSS:", error);
    }

    // Cleanup: Remove the style element when the component unmounts
    return () => {
      document.head.removeChild(styleElement);
    };
  }, [theme]);

  // Pass the theme name as a class to the children - to scope the effect of the theme
  return React.cloneElement(children, {
    className: cx(getThemeProviderClassname(theme?.name), children?.props?.className)
  });
};

export default ThemeProvider;
