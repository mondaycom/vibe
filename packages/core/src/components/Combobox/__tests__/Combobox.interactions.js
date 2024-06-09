import { expect } from "@storybook/jest";
import { queryByText } from "@storybook/testing-library";
import { resetFocus } from "../../../__tests__/interactions-helper";
import {
  getByLabelText,
  getByTestId,
  getByText,
  clickElement,
  typeText,
  interactionSuite,
  pressNavigationKey
} from "../../../tests/interactions-utils";
import { getTestId } from "../../../tests/test-ids-utils";
import { ComponentDefaultTestId, NavigationCommand } from "../../../tests/constants";
async function getComponentElements(canvas) {
  const comboboxElement = getByTestId(canvas, ComponentDefaultTestId.COMBOBOX);
  const searchElement = getByLabelText(comboboxElement, "Search for content");
  return { comboboxElement, searchElement };
}

async function onTypeFilterComboboxOptionsTest(canvas) {
  const { comboboxElement, searchElement } = await getComponentElements(canvas);
  await typeText(searchElement, "jjj", 400);
  expect(queryByText(comboboxElement, "Option 1")).toBeNull();
}

async function onSelectExistFilterClearsFilterTest(canvas) {
  const { comboboxElement, searchElement } = await getComponentElements(canvas);
  await typeText(searchElement, "jjj", 400);
  const cleanSearchButton = getByTestId(
    comboboxElement,
    getTestId(ComponentDefaultTestId.CLEAN_SEARCH_BUTTON, "combobox-search")
  );
  await clickElement(cleanSearchButton);
  expect(searchElement).toHaveValue("");
  const option1 = getByText(comboboxElement, "Option 1");
  expect(option1).toBeInTheDocument();
}

// there is no story which is not overview which activate this ability
// eslint-disable-next-line no-unused-vars
async function onSelectOptionClearsFilterTest(canvas) {
  const { comboboxElement, searchElement } = await getComponentElements(canvas);
  await typeText(searchElement, "Option");
  const optionToClick = getByText(comboboxElement, "Option 1");
  await clickElement(optionToClick);
  expect(searchElement).toHaveValue("");
  const option1 = getByText("Option 1");
  expect(option1).toBeTruthy();
}

async function onNavigateBetweenOptionsByArrowsAriaUpdates(canvas) {
  const { comboboxElement, searchElement } = await getComponentElements(canvas);

  // Press on list for initial focus
  await clickElement(searchElement);

  // Navigate to first option with down arrow
  await pressNavigationKey(NavigationCommand.DOWN_ARROW);
  const option1 = getByText(comboboxElement, "Option 1").parentElement;

  // Check active option by aria is the one we navigate to it by keyboard
  let ariaActiveDescendant = searchElement.getAttribute("aria-activedescendant");
  expect(ariaActiveDescendant).toEqual(option1.id);

  // Navigate to second option with down arrow
  await pressNavigationKey(NavigationCommand.DOWN_ARROW);
  const option2 = getByText(comboboxElement, "Option 2").parentElement;

  // Check active option by aria is the one we navigate to it by keyboard
  ariaActiveDescendant = searchElement.getAttribute("aria-activedescendant");
  expect(ariaActiveDescendant).toEqual(option2.id);

  // Navigate to first option with up arrow
  await pressNavigationKey(NavigationCommand.UP_ARROW);

  // Check active option by aria is the one we navigate to it by keyboard
  ariaActiveDescendant = searchElement.getAttribute("aria-activedescendant");
  expect(ariaActiveDescendant).toEqual(option1.id);
}

export const defaultPlaySuite = interactionSuite({
  tests: [
    onNavigateBetweenOptionsByArrowsAriaUpdates,
    onTypeFilterComboboxOptionsTest,
    onSelectExistFilterClearsFilterTest
  ],
  afterEach: async () => {
    await resetFocus();
  }
});
