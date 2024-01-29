import cx from "classnames";
import React, { FC, ReactElement, useEffect, useLayoutEffect, useMemo, useState } from "react";
import { SystemTheme, Theme, ThemeColor } from "./ThemeProviderConstants";
import {
  addSystemThemeClassNameToBody,
  generateRandomAlphaString,
  generateThemeCssOverride,
  isAnySystemThemeClassNameOnBody,
  removeSystemThemeClassNameFromBody,
  shouldGenerateTheme
} from "./ThemeProviderUtils";
import { withStaticProps } from "../../types";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";

export interface ThemeProviderProps {
  /**
   * @deprecated use themeConfig instead
   */
  theme?: Theme;
  /**
   * The theme config to apply, consists of a "name" - the name of css class that will be added to the children, which should be unique, and the object of colors overrides for each system theme.
   */
  themeConfig?: Theme;
  /**
   * The children to render with the theme
   */
  children: ReactElement;
  /**
   * String which adds up to theme name selector to make it more specific (in case if themeConfig.name is colliding with some other class name)
   */
  themeClassSpecifier?: string;
  /**
   * The system theme to apply to the body element on mount, if there is no theme class name on the body element already
   */
  systemTheme?: SystemTheme;
  /**
   * ClassName to add to the wrapping div
   */
  className?: string;
}

const ThemeProvider: FC<ThemeProviderProps> & {
  systemThemes?: typeof SystemTheme;
  colors?: typeof ThemeColor;
} = ({ themeConfig, theme, children, themeClassSpecifier: customThemeClassSpecifier, systemTheme, className }) => {
  const overrideThemeConfig = backwardCompatibilityForProperties([themeConfig, theme]);
  const [stylesLoaded, setStylesLoaded] = useState(false);
  const themeClassSpecifier = useMemo(
    () => customThemeClassSpecifier || generateRandomAlphaString(),
    [customThemeClassSpecifier]
  );

  useEffect(() => {
    if (theme) {
      console.warn(
        "vibe ThemeProvider: theme prop is deprecated and will be removed soon, please use themeConfig prop instead - ",
        theme
      );
    }
  }, [theme]);

  // Add the systemTheme class name to the body on mount
  useLayoutEffect(() => {
    if (!systemTheme) {
      return;
    }

    if (isAnySystemThemeClassNameOnBody()) {
      // If there is already a systemTheme class name on the body, we don't want to override it
      return;
    }

    addSystemThemeClassNameToBody(systemTheme);

    return () => {
      // Cleanup the systemTheme class name from the body on ThemeProvider unmount
      removeSystemThemeClassNameFromBody(systemTheme);
    };
  }, [systemTheme]);

  useEffect(() => {
    if (!shouldGenerateTheme(overrideThemeConfig)) {
      return;
    }
    if (document.getElementById(overrideThemeConfig.name)) {
      setStylesLoaded(true);
      return;
    }

    const styleElement = document.createElement("style");
    styleElement.type = "text/css";
    styleElement.id = overrideThemeConfig.name;
    const themeCssOverride = generateThemeCssOverride(overrideThemeConfig, themeClassSpecifier);

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
  }, [themeClassSpecifier, overrideThemeConfig]);

  if (!stylesLoaded && shouldGenerateTheme(overrideThemeConfig)) {
    // Waiting for styles to load before children render
    return null;
  }

  // Pass the theme name as a class to the div wrapping children - to scope the effect of the theme
  return <div className={cx(overrideThemeConfig?.name, themeClassSpecifier, className)}>{children}</div>;
};

export default withStaticProps(ThemeProvider, {
  systemThemes: SystemTheme,
  colors: ThemeColor
});
