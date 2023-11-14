import { generateThemeCssOverride } from "../ThemeProviderUtils";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { ThemeProvider, Button, Flex } from "../../index";

const THEME_NAME = "test-theme-name";
const ADDITIONAL_STRING_SELECTOR = "test-random-string-selector";

describe("ThemeProvider tests", () => {
  it("renders children correctly", () => {
    const theme = {
      name: THEME_NAME
    };
    const { getByTestId } = render(
      <ThemeProvider theme={theme} themeClassSpecifier={ADDITIONAL_STRING_SELECTOR}>
        <Flex data-testid={"container"}>
          <Button data-testid={"button"} />
        </Flex>
      </ThemeProvider>
    );

    const container = getByTestId("container");
    const button = getByTestId("button");
    expect(container).toBeInTheDocument();
    expect(container).toHaveClass(theme.name);
    expect(button).toBeInTheDocument();
  });

  it("renders children correctly with empty theme", () => {
    const theme = null;
    const { getByTestId } = render(
      <ThemeProvider theme={theme} themeClassSpecifier={ADDITIONAL_STRING_SELECTOR}>
        <Flex data-testid={"container"}>
          <Button data-testid={"button"} />
        </Flex>
      </ThemeProvider>
    );

    const container = getByTestId("container");
    const button = getByTestId("button");
    expect(container).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  describe("ThemeProviderUtils tests", () => {
    it("theme with no colors", () => {
      const theme = {
        name: THEME_NAME
      };
      const css = generateThemeCssOverride(theme, ADDITIONAL_STRING_SELECTOR);
      expect(css).toBeNull();
    });

    it("theme with empty colors", () => {
      const theme = {
        name: THEME_NAME,
        colors: {}
      };
      const css = generateThemeCssOverride(theme, ADDITIONAL_STRING_SELECTOR);
      expect(css).toBe("");
    });

    it("theme with only one override", () => {
      const theme = {
        name: THEME_NAME,
        colors: {
          light: {
            "primary-color": "#d14900"
          }
        }
      };
      const css = generateThemeCssOverride(theme, ADDITIONAL_STRING_SELECTOR);
      expect(css).toBe(`.light-app-theme .${ADDITIONAL_STRING_SELECTOR}.${theme.name} {--primary-color: #d14900;}
`);
    });

    it("basic theme", () => {
      const theme = {
        name: THEME_NAME,
        colors: {
          light: {
            "primary-color": "#d14900",
            "primary-hover-color": "#ad4005",
            "primary-selected-color": "#f8dccf",
            "primary-selected-hover-color": "#f1d3c4"
          },
          dark: {
            "primary-color": "#d14901",
            "primary-hover-color": "#ad4006",
            "primary-selected-color": "#6d2702",
            "primary-selected-hover-color": "#491b03"
          },
          black: {
            "primary-color": "#d14902",
            "primary-hover-color": "#ad4007",
            "primary-selected-color": "#6d2703",
            "primary-selected-hover-color": "#491b04"
          }
        }
      };
      const css = generateThemeCssOverride(theme, ADDITIONAL_STRING_SELECTOR);
      expect(css).toBe(
        `.light-app-theme .${ADDITIONAL_STRING_SELECTOR}.${theme.name} {--primary-color: #d14900;--primary-hover-color: #ad4005;--primary-selected-color: #f8dccf;--primary-selected-hover-color: #f1d3c4;}\n` +
          `.dark-app-theme .${ADDITIONAL_STRING_SELECTOR}.${theme.name} {--primary-color: #d14901;--primary-hover-color: #ad4006;--primary-selected-color: #6d2702;--primary-selected-hover-color: #491b03;}\n` +
          `.black-app-theme .${ADDITIONAL_STRING_SELECTOR}.${theme.name} {--primary-color: #d14902;--primary-hover-color: #ad4007;--primary-selected-color: #6d2703;--primary-selected-hover-color: #491b04;}\n`
      );
    });

    it("theme with custom classes and variables", () => {
      const theme = {
        name: THEME_NAME,
        colors: {
          light: {
            "primary-color": "#d14900",
            "brand-colors": {
              "brand-color": "#ad4005",
              "custom-class": {
                "custom-value-override": "#da1234"
              }
            }
          }
        }
      };
      const css = generateThemeCssOverride(theme, ADDITIONAL_STRING_SELECTOR);
      expect(css).toBe(
        `.light-app-theme .${ADDITIONAL_STRING_SELECTOR}.${theme.name} {--primary-color: #d14900;}\n` +
          `.light-app-theme .${ADDITIONAL_STRING_SELECTOR}.${theme.name} .brand-colors {--brand-color: #ad4005;}\n` +
          `.light-app-theme .${ADDITIONAL_STRING_SELECTOR}.${theme.name} .brand-colors .custom-class {--custom-value-override: #da1234;}\n`
      );
    });
  });
});
