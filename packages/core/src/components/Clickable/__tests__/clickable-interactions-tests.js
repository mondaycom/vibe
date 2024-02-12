import { expect } from "@storybook/jest";
import { resetFocus } from "../../../__tests__/interactions-helper";
import { getByLabelText, pressNavigationKey, interactionSuite } from "../../../tests/interactions-utils";
import { NavigationCommand } from "../../../tests/constants";
async function states_onClickTabFocusElementTest(canvas) {
  const CLICKABLE_LABEL = "clickable button";
  const CLICKABLE_DISABLED_LABEL = "disabled clickable button";
  const clickableElement = await getByLabelText(canvas, CLICKABLE_LABEL);
  const disabledClickableElement = await getByLabelText(canvas, CLICKABLE_DISABLED_LABEL);
  await pressNavigationKey(NavigationCommand.TAB);
  expect(document.activeElement).toEqual(clickableElement);
  await pressNavigationKey(NavigationCommand.TAB);
  expect(document.activeElement).not.toEqual(disabledClickableElement);
  expect(canvas).not.toContain(document.activeElement);
}

export const statesPlaySuite = interactionSuite({
  tests: [states_onClickTabFocusElementTest],
  afterEach: async () => {
    await resetFocus();
  }
});
