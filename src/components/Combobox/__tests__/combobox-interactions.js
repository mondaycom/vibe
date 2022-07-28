import { expect } from "@storybook/jest";
import {
  ELEMENT_TYPES,
  getByLabelText,
  getByTestId,
  getByText,
  clickElement,
  resetFocus,
  typeText,
  interactionSuite,
  pressNavigationKey
} from "../../../__tests__/interactions-helper";
import { queryByText } from "@storybook/testing-library";
import { getTestId, NAVIGATIONS_COMMANDS } from "../../../utils/test-utils";

async function getComponentElements(canvas) {
  const comboboxElement = await getByTestId(canvas, ELEMENT_TYPES.COMBOBOX);
  const searchElement = await getByLabelText(comboboxElement, "Search for content");
  return { comboboxElement, searchElement };
}

async function onTypeFilterComboboxOptionsTest(canvas) {
  const { comboboxElement, searchElement } = await getComponentElements(canvas);
  await typeText(searchElement, "jjj");
  expect(queryByText(comboboxElement, "Option 1")).toBeNull();
}

async function onSelectExistFilterClearsFilterTest(canvas) {
  const { comboboxElement, searchElement } = await getComponentElements(canvas);
  await typeText(searchElement, "jjj");
  const cleanSearchButton = getByTestId(
    comboboxElement,
    getTestId(ELEMENT_TYPES.CLEAN_SEARCH_BUTTON, "combobox-search")
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
  await pressNavigationKey(NAVIGATIONS_COMMANDS.DOWN_ARROW);
  const option1 = getByText(comboboxElement, "Option 1").parentElement;

  // Check active option by aria is the one we navigate to it by keyboard
  let ariaActiveDescendant = searchElement.getAttribute("aria-activedescendant");
  expect(ariaActiveDescendant).toEqual(option1.id);

  // Navigate to second option with down arrow
  await pressNavigationKey(NAVIGATIONS_COMMANDS.DOWN_ARROW);
  const option2 = getByText(comboboxElement, "Option 2").parentElement;

  // Check active option by aria is the one we navigate to it by keyboard
  ariaActiveDescendant = searchElement.getAttribute("aria-activedescendant");
  expect(ariaActiveDescendant).toEqual(option2.id);

  // Navigate to first option with up arrow
  await pressNavigationKey(NAVIGATIONS_COMMANDS.UP_ARROW);

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
