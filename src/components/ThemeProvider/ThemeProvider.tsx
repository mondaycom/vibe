import cx from "classnames";
import React, { FC, ReactElement, useEffect, useMemo, useState } from "react";
import { SystemTheme, Theme, ThemeColor } from "./ThemeProviderConstants";
import { generateRandomAlphaString, generateThemeCssOverride, shouldGenerateTheme } from "./ThemeProviderUtils";
import { withStaticProps } from "../../types";

export interface ThemeProviderProps {
  /**
   * The theme to apply, consists of name - name of css class that will be added to the children, which should be unique - and the object of colors overrides for each system theme.
   */
  theme?: Theme;
  /**
   * The children to render with the theme
   */
  children: ReactElement;
  /**
   * String which adds up to theme name selector to make it more specific (in case if theme.name is colliding with some other class name)
   */
  themeClassSpecifier?: string;
}

const ThemeProvider: FC<ThemeProviderProps> & {
  systemThemes?: typeof SystemTheme;
  colors?: typeof ThemeColor;
} = ({ theme, children, themeClassSpecifier: customThemeClassSpecifier }) => {
  const [stylesLoaded, setStylesLoaded] = useState(false);
  const themeClassSpecifier = useMemo(
    () => customThemeClassSpecifier || generateRandomAlphaString(),
    [customThemeClassSpecifier]
  );

  useEffect(() => {
    if (!shouldGenerateTheme(theme)) {
      return;
    }
    if (document.getElementById(theme.name)) {
      setStylesLoaded(true);
      return;
    }

    const styleElement = document.createElement("style");
    styleElement.type = "text/css";
    styleElement.id = theme.name;
    const themeCssOverride = generateThemeCssOverride(theme, themeClassSpecifier);

    try {
      styleElement.appendChild(document.createTextNode(themeCssOverride));
      document.head.appendChild(styleElement);
      setStylesLoaded(true);
    } catch (error) {
      console.error("vibe ThemeProvider: error inserting theme-generated css - ", error);
    }

    return () => {
      document.head.removeChild(styleElement);
    };
  }, [themeClassSpecifier, theme]);

  if (!stylesLoaded && shouldGenerateTheme(theme)) {
    // Waiting for styles to load before children render
    return null;
  }

  // Pass the theme name as a class to the children - to scope the effect of the theme
  return React.cloneElement(children, {
    className: cx(theme?.name, themeClassSpecifier, children?.props?.className)
  });
};

export default withStaticProps(ThemeProvider, {
  systemThemes: SystemTheme,
  colors: ThemeColor
});
