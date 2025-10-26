import { type Screen } from "@testing-library/react";
import { userEvent } from "@storybook/test";
import { expect } from "@storybook/jest";
import { interactionSuite } from "@vibe/core/interactionsTests";
import { type SystemTheme } from "@vibe/core";

// TODO: move to @vibe/shared
const APP_THEME_SUFFIX = "-app-theme";

const isAppThemeClassName = (className: string) => {
  return className.endsWith(APP_THEME_SUFFIX);
};

export const addAppThemeSuffix = (systemTheme: SystemTheme) => {
  return `${systemTheme}${APP_THEME_SUFFIX}`;
};

export const getBodySystemThemeClassName = () => {
  const classList = document.body.classList;
  for (const className of Array.from(classList)) {
    if (isAppThemeClassName(className)) {
      return className;
    }
  }
  return null;
};

// These utilities are imported from the helper file which re-exports them
const getComputedVarColor = (element: HTMLElement, varName: string) => {
  return getComputedStyle(element).getPropertyValue(`--${varName}`).trim();
};

// TODO: move these utilities to the colorUtils
const hexToRgb = (hex: string) => {
  // Remove # if present
  hex = hex.replace(/^#/, "");

  // Parse hex to RGB
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return `rgb(${r}, ${g}, ${b})`;
};

const getVariableHexColor = (variableName: string) => {
  return hexToRgb(getComputedVarColor(document.body, variableName));
};

const getSystemThemeToggleButton = async (canvas: Screen) => {
  return await canvas.findByTestId("system-theme-toggle-button");
};

const getElementBackgroundColor = async (element: HTMLElement) => {
  return window.getComputedStyle(element).getPropertyValue("background-color");
};

const PRIMARY_COLOR = getVariableHexColor("primary-color");
const POSITIVE_COLOR = getVariableHexColor("positive-color");
const DARK_APP_THEME_CLASS_NAME = addAppThemeSuffix(SystemTheme.DARK);

async function checkSystemTheme(canvas: Screen) {
  expect(getBodySystemThemeClassName()).toBeNull();

  const systemThemeToggleButton = await getSystemThemeToggleButton(canvas);
  const colorBeforeToggle = await getElementBackgroundColor(systemThemeToggleButton);
  expect(colorBeforeToggle).toBe(PRIMARY_COLOR);

  await userEvent.click(systemThemeToggleButton);

  const bodySystemThemeClassName = getBodySystemThemeClassName();
  expect(bodySystemThemeClassName).toBe(DARK_APP_THEME_CLASS_NAME);

  const systemThemeToggleButtonAfterToggle = await getSystemThemeToggleButton(canvas);
  const colorAfterToggle = await getElementBackgroundColor(systemThemeToggleButtonAfterToggle);
  expect(colorAfterToggle).toBe(POSITIVE_COLOR);
}

export const themeProviderSystemThemeSuite: ReturnType<typeof interactionSuite> = interactionSuite({
  tests: [checkSystemTheme]
});
