import { Screen } from "@testing-library/react";
import { userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { interactionSuite } from "../../../tests/interactions-utils";
import { addAppThemeSuffix, getBodySystemThemeClassName } from "../ThemeProviderUtils";
import { getComputedVarColor, hexToRgb } from "../../../services/themes";
import { SystemTheme } from "../ThemeProviderConstants";

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
