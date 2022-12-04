import { userEvent } from "@storybook/testing-library";
import {
  getByRole,
  getByText,
  clickElement,
  typeText,
  getFirstByClassName,
  interactionSuite
} from "../../../tests/interactions-utils";
import { expect } from "@storybook/jest";

const selectAndClearTest = async canvas => {
  const dropdownElement = await getByRole(canvas, "textbox");
  // Open the dropdown
  await clickElement(dropdownElement);
  // Filter it
  await typeText(dropdownElement, "Option");
  // Select the option
  const optionToSelect = getByText(canvas, "Option 1");
  await clickElement(optionToSelect);
  // click the clear button
  const clearButton = getFirstByClassName("clear-indicator");
  await clickElement(clearButton);
  // Validate we see the placeholder again
  getByText(canvas, "Placeholder text here");
};

const hideDropdownWhenPressingEscape = async canvas => {
  const dropdownElement = await getByRole(canvas, "textbox");
  // Open the dropdown
  await clickElement(dropdownElement);
  // Validate open dropdown
  await getByText(canvas, "Option 1");
  // Close the dropdown
  await typeText(dropdownElement, "{escape}");

  const optionElement = await canvas.queryByText("Option 1");
  expect(optionElement).toBeNull(); //expect not to exist
};

export const overviewPlaySuite = interactionSuite({
  beforeEach: async canvas => {
    const dropdownElement = await getByRole(canvas, "textbox");
    await userEvent.clear(dropdownElement);
    expect(dropdownElement.value).toEqual("");
    await typeText(dropdownElement, "{escape}");

    const optionElement = await canvas.queryByText("Option 1");
    expect(optionElement).toBeNull(); //expect not to exist
  },
  tests: [selectAndClearTest, hideDropdownWhenPressingEscape]
});
