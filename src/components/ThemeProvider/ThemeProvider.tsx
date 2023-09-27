import cx from "classnames";
import React, { FC, ReactElement, useLayoutEffect } from "react";
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
  useLayoutEffect(() => {
    if (!theme) {
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
    className: cx(theme?.name, children?.props?.className)
  });
};

export default withStaticProps(ThemeProvider, {
  systemThemes: SystemTheme,
  colors: ThemeColor
});
