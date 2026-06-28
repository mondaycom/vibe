import { expect, userEvent, waitFor } from "@storybook/test";
import {
  getByTestId,
  interactionSuite,
  pressNavigationKey,
  NavigationCommand,
  resetFocus
} from "@vibe/core/interactionsTests";
import styles from "./useActiveDescendantListFocus.module.scss";
import { getTestId, ComponentDefaultTestId } from "@vibe/shared";

export const overviewInteractionSuite = interactionSuite({
  tests: [keyboardNavAndFocusForVerticalList],
  afterEach: async () => {
    await resetFocus();
  }
});

async function getSearchElement(canvas) {
  return await getByTestId(canvas, getTestId(ComponentDefaultTestId.SEARCH));
}

async function expectElementToBeNaturallyFocused(element) {
  await waitFor(() => {
    expect(document.activeElement).toEqual(element);
  });
}

async function expectElementVisuallyFocusedByText(text) {
  await waitFor(() => {
    const activeElements = document.getElementsByClassName(styles.visualFocus);
    expect(activeElements).toHaveLength(1);
    expect(activeElements[0]).toHaveTextContent(text);
  });
}

async function keyboardNavAndFocusForVerticalList(canvas) {
  const element = await getSearchElement(canvas);

  await userEvent.tab();
  await expectElementToBeNaturallyFocused(element);

  await pressNavigationKey(NavigationCommand.DOWN_ARROW);
  await expectElementVisuallyFocusedByText("Item 1");
  await expectElementToBeNaturallyFocused(element);

  await pressNavigationKey(NavigationCommand.DOWN_ARROW);
  await expectElementVisuallyFocusedByText("Item 2");
  await expectElementToBeNaturallyFocused(element);

  await pressNavigationKey(NavigationCommand.UP_ARROW);
  await expectElementVisuallyFocusedByText("Item 1");
  await expectElementToBeNaturallyFocused(element);

  await pressNavigationKey(NavigationCommand.UP_ARROW);
  await expectElementVisuallyFocusedByText("Item 3");
  await expectElementToBeNaturallyFocused(element);

  await pressNavigationKey(NavigationCommand.DOWN_ARROW);
  await expectElementVisuallyFocusedByText("Item 1");
  await expectElementToBeNaturallyFocused(element);
}
