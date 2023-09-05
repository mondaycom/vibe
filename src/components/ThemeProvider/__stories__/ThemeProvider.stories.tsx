import React from "react";
import ThemeProvider, { ThemeProviderProps } from "../ThemeProvider";
import Button from "../../Button/Button";
import { Color, SystemTheme } from "../ThemeProviderConstants";

export const ThemeProviderTemplateOverview = (args: JSX.IntrinsicAttributes & ThemeProviderProps) => {
  return (
    <>
      <ThemeProvider {...args}>
        <Button>Themed</Button>
      </ThemeProvider>
    </>
  );
};

export const ThemeProviderThemingScopeTemplate = (_args: JSX.IntrinsicAttributes & ThemeProviderProps) => {
  return (
    <>
      <ThemeProvider
        theme={{
          name: "theming-scope-theme",
          colors: {
            [SystemTheme.LIGHT]: {
              [Color.primaryColor]: "green"
            },
            [SystemTheme.DARK]: {
              [Color.primaryColor]: "red"
            },
            black: {
              "primary-color": "orange"
            },
            hacker: {
              "primary-color": "#ff9191"
            }
          }
        }}
      >
        <Button>Themed</Button>
      </ThemeProvider>
      <Button>Not themed</Button>
    </>
  );
};
