import {
  ELEMENT_TYPES,
  getByTestId,
  interactionSuite,
  pressNavigationKey,
  resetFocus
} from "../../../__tests__/interactions-helper";
import { expect } from "@storybook/jest";
import { getTestId, NAVIGATIONS_COMMANDS } from "../../../utils/test-utils";
import styles from "../__stories__/useActiveDescendantListFocus.module.scss";

export const overviewInteractionSuite = interactionSuite({
  tests: [keyboardNavAndFocusForVerticalList],
  afterEach: async () => {
    await resetFocus();
  }
});

async function getSearchElement(canvas) {
  return await getByTestId(canvas, getTestId(ELEMENT_TYPES.SEARCH, "search"));
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
  await pressNavigationKey(NAVIGATIONS_COMMANDS.DOWN_ARROW);
  await expectElementVisuallyFocusedByText("Item 1");
  await expectElementToBeNaturallyFocused(search);

  // move visual focus to second item
  await pressNavigationKey(NAVIGATIONS_COMMANDS.DOWN_ARROW);
  await expectElementVisuallyFocusedByText("Item 2");
  await expectElementToBeNaturallyFocused(search);

  // move visual focus to first item again
  await pressNavigationKey(NAVIGATIONS_COMMANDS.UP_ARROW);
  await expectElementVisuallyFocusedByText("Item 1");
  await expectElementToBeNaturallyFocused(search);

  // move to last item by press up keyboard button
  await pressNavigationKey(NAVIGATIONS_COMMANDS.UP_ARROW);
  await expectElementVisuallyFocusedByText("Item 3");
  await expectElementToBeNaturallyFocused(search);

  // move to first item again by press down keyboard button while visual focus is on the last item
  await pressNavigationKey(NAVIGATIONS_COMMANDS.DOWN_ARROW);
  await expectElementVisuallyFocusedByText("Item 1");
  await expectElementToBeNaturallyFocused(search);
}
