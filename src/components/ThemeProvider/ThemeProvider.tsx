import cx from "classnames";
import React, { FC, ReactElement, useLayoutEffect } from "react";
import { ColorTokenValueMap, SystemTheme, SystemThemeClassMap, Theme } from "./ThemeProviderConstants";

export interface ThemeProviderProps {
  theme?: Theme;
  children: ReactElement;
}

function generateCss(object: ColorTokenValueMap, stack: string, parentSelector: string) {
  for (const key of Object.keys(object)) {
    if (typeof object[key as keyof ColorTokenValueMap] === "string") {
      stack += `--${key}: ${object[key as keyof ColorTokenValueMap]};`;
    }
  }

  if (stack !== "") {
    stack = parentSelector + " {" + stack + "}";
  }

  for (const key of Object.keys(object)) {
    if (typeof object[key as keyof ColorTokenValueMap] === "object") {
      const selector = `${parentSelector}.${key}`;
      stack += "\n" + generateCss(object[key as keyof ColorTokenValueMap] as ColorTokenValueMap, "", selector);
    }
  }

  return stack;
}

const generateThemeCssOverride = (theme: Theme) => {
  if (!theme.colors) {
    return null;
  }

  let css = "";
  for (const systemTheme of Object.keys(theme.colors) as SystemTheme[]) {
    css += generateCss(theme.colors[systemTheme], "", `.${SystemThemeClassMap[systemTheme]} .${theme.name}`) + "\n";
  }

  console.log("### css", css);
  return css;
};

const ThemeProvider: FC<ThemeProviderProps> = ({ theme, children }) => {
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

export default ThemeProvider;
