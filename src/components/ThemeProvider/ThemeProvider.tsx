import cx from "classnames";
import React, { FC, ReactElement, useEffect, useState } from "react";
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
   * Random string which adds up to theme name to make it more specific (in case if theme.name is colliding with some other class name)
   */
  randomStringSelector?: string;
}

const ThemeProvider: FC<ThemeProviderProps> & {
  systemThemes?: typeof SystemTheme;
  colors?: typeof ThemeColor;
} = ({ theme, children, randomStringSelector: customRandomStringSelector }) => {
  const [stylesLoaded, setStylesLoaded] = useState(false);
  // Using random string selector to secure selector by making it more specific - if theme name is not unique
  const randomStringSelector = useState(customRandomStringSelector || generateRandomAlphaString())[0];

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
    const themeCssOverride = generateThemeCssOverride(theme, randomStringSelector);

    try {
      styleElement.appendChild(document.createTextNode(themeCssOverride));
      document.head.appendChild(styleElement);
      setStylesLoaded(true);
    } catch (error) {
      console.error("vibe: error inserting theme-generated css - ", error);
    }

    return () => {
      document.head.removeChild(styleElement);
    };
  }, [randomStringSelector, theme]);

  if (!stylesLoaded && shouldGenerateTheme(theme)) {
    // Waiting for styles to load before children render
    return null;
  }

  // Pass the theme name as a class to the children - to scope the effect of the theme
  return React.cloneElement(children, {
    className: cx(theme?.name, randomStringSelector, children?.props?.className)
  });
};

export default withStaticProps(ThemeProvider, {
  systemThemes: SystemTheme,
  colors: ThemeColor
});
