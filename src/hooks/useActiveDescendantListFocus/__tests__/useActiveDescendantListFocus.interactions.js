import { resetFocus } from "../../../__tests__/interactions-helper";
import { expect } from "@storybook/jest";

import { getByTestId, interactionSuite, pressNavigationKey } from "../../../tests/interactions-utils";
import { ComponentDefaultTestId, NavigationCommand } from "../../../tests/constants";
import { getTestId } from "../../../tests/test-ids-utils";
import styles from "../__stories__/useActiveDescendantListFocus.module.scss";

export const overviewInteractionSuite = interactionSuite({
  tests: [keyboardNavAndFocusForVerticalList],
  afterEach: async () => {
    await resetFocus();
  }
});

async function getSearchElement(canvas) {
  return await getByTestId(canvas, getTestId(ComponentDefaultTestId.SEARCH, "search"));
}

async function expectElementToBeNaturallyFocused(element) {
  expect(document.activeElement).toEqual(element);
}
async function expectElementVisuallyFocusedByText(text) {
  const activeElements = document.getElementsByClassName(styles.visualFocus);
  expect(activeElements).toHaveLength(1);
  expect(activeElements[0]).toHaveTextContent(text);
}

async function keyboardNavAndFocusForVerticalList(canvas) {
  const element = await getSearchElement(canvas);

  // set focus on the list's element which in charge on natural focus element
  element.focus();
  // move visual focus to first item
  await pressNavigationKey(NavigationCommand.DOWN_ARROW);
  await expectElementVisuallyFocusedByText("Item 1");
  await expectElementToBeNaturallyFocused(element);

  // move visual focus to second item
  await pressNavigationKey(NavigationCommand.DOWN_ARROW);
  await expectElementVisuallyFocusedByText("Item 2");
  await expectElementToBeNaturallyFocused(element);

  // move visual focus to first item again
  await pressNavigationKey(NavigationCommand.UP_ARROW);
  await expectElementVisuallyFocusedByText("Item 1");
  await expectElementToBeNaturallyFocused(element);

  // move to last item by press up keyboard button
  await pressNavigationKey(NavigationCommand.UP_ARROW);
  await expectElementVisuallyFocusedByText("Item 3");
  await expectElementToBeNaturallyFocused(element);

  // move to first item again by press down keyboard button while visual focus is on the last item
  await pressNavigationKey(NavigationCommand.DOWN_ARROW);
  await expectElementVisuallyFocusedByText("Item 1");
  await expectElementToBeNaturallyFocused(element);
}
