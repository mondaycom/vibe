import cx from "classnames";
import React, { FC, ReactElement, useEffect, useState } from "react";
import { SystemTheme, Theme, ThemeColor } from "./ThemeProviderConstants";
import { generateThemeCssOverride } from "./ThemeProviderUtils";
import { withStaticProps } from "../../types";

export interface ThemeProviderProps {
  theme?: Theme;
  children: ReactElement;
}

const ThemeProvider: FC<ThemeProviderProps> & { systemThemes?: typeof SystemTheme; colors?: typeof ThemeColor } = ({
  theme,
  children
}) => {
  const [stylesLoaded, setStylesLoaded] = useState(false);

  useEffect(() => {
    if (!theme) {
      return;
    }
    if (document.getElementById(theme.name)) {
      setStylesLoaded(true);
      return;
    }

    const styleElement = document.createElement("style");
    styleElement.type = "text/css";
    styleElement.id = theme.name;
    const themeCssOverride = generateThemeCssOverride(theme);

    try {
      styleElement.appendChild(document.createTextNode(themeCssOverride));
      document.head.appendChild(styleElement);
      setStylesLoaded(true);
    } catch (error) {
      console.error("vibe: error inserting theme-generated css - ", error);
    }

    // Cleanup: Remove the style element when the component unmounts
    return () => {
      document.head.removeChild(styleElement);
    };
  }, [theme]);

  if (!stylesLoaded && theme) {
    // Waiting for styles to load before children render
    return null;
  }

  // Pass the theme name as a class to the children - to scope the effect of the theme
  return React.cloneElement(children, {
    className: cx(theme?.name, children?.props?.className)
  });
};

export default withStaticProps(ThemeProvider, {
  systemThemes: SystemTheme,
  colors: ThemeColor
});
