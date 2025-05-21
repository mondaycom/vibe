import cx from "classnames";
import React, { ReactElement, useEffect, useMemo, useState } from "react";
import { SystemTheme as SystemThemeEnum, Theme, ThemeColor as ThemeColorEnum } from "./ThemeProviderConstants";
import { SystemTheme } from "./ThemeProvider.types";
import {
  addSystemThemeClassNameToBody,
  generateRandomAlphaString,
  generateThemeCssOverride,
  isAnySystemThemeClassNameOnBody,
  removeSystemThemeClassNameFromBody,
  shouldGenerateTheme
} from "./ThemeProviderUtils";
import useIsomorphicLayoutEffect from "../../hooks/ssr/useIsomorphicLayoutEffect";
import { withStaticPropsWithoutForwardRef } from "../../types";

export interface ThemeProviderProps {
  /**
   * The theme configuration to apply. It consists of a `name` (a unique CSS class name added to the children)
   * and an object of color overrides for each system theme.
   */
  themeConfig?: Theme;
  /**
   * The children to be rendered with the applied theme.
   */
  children: ReactElement;
  /**
   * A string added to the theme name selector to make it more specific, in case `themeConfig.name`
   * collides with another class name.
   */
  themeClassSpecifier?: string;
  /**
   * The system theme to apply to the `body` element on mount,
   * if there is no system theme class name on the body already.
   */
  systemTheme?: SystemTheme;
  /**
   * Class name applied to the wrapping `div`.
   */
  className?: string;
}

const ThemeProvider = ({
  themeConfig,
  children,
  themeClassSpecifier: customThemeClassSpecifier,
  systemTheme,
  className
}: ThemeProviderProps) => {
  const [stylesLoaded, setStylesLoaded] = useState(false);
  const themeClassSpecifier = useMemo(
    () => customThemeClassSpecifier || generateRandomAlphaString(),
    [customThemeClassSpecifier]
  );

  // Add the systemTheme class name to the body on mount
  useIsomorphicLayoutEffect(() => {
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
    if (!shouldGenerateTheme(themeConfig)) {
      return;
    }
    if (document.getElementById(themeConfig.name)) {
      setStylesLoaded(true);
      return;
    }

    const styleElement = document.createElement("style");
    styleElement.type = "text/css";
    styleElement.id = themeConfig.name;
    const themeCssOverride = generateThemeCssOverride(themeConfig, themeClassSpecifier);

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
  }, [themeClassSpecifier, themeConfig]);

  if (!stylesLoaded && shouldGenerateTheme(themeConfig)) {
    // Waiting for styles to load before children render
    return null;
  }

  // Pass the theme name as a class to the div wrapping children - to scope the effect of the theme
  return <div className={cx(themeConfig?.name, themeClassSpecifier, className)}>{children}</div>;
};

interface ThemeProviderStaticProps {
  systemThemes: typeof SystemThemeEnum;
  colors: typeof ThemeColorEnum;
}

export default withStaticPropsWithoutForwardRef<ThemeProviderProps, ThemeProviderStaticProps>(ThemeProvider, {
  systemThemes: SystemThemeEnum,
  colors: ThemeColorEnum
});
