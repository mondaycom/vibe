import { userEvent } from "@storybook/testing-library";
import {
  getByRole,
  getByText,
  clickElement,
  typeText,
  getByClassName,
  interactionSuite
} from "../../../__tests__/interactions-helper";
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
  const clearButton = getByClassName("clear-indicator");
  await clickElement(clearButton);
  // Validate we see the placeholder again
  getByText(canvas, "Placeholder text here");
};

const inputLetterA = async canvas => {
  const dropdownElement = await getByRole(canvas, "textbox");
  // Open the dropdown
  await clickElement(dropdownElement);
  // Filter it
  await typeText(dropdownElement, "A");
  expect(dropdownElement.value).toEqual("A");
};

const inputLetterB = async canvas => {
  const dropdownElement = await getByRole(canvas, "textbox");
  // Open the dropdown
  await clickElement(dropdownElement);
  // Filter it
  await typeText(dropdownElement, "B");
  expect(dropdownElement.value).toEqual("B");
};

export const overviewPlaySuite = interactionSuite({
  beforeEach: async canvas => {
    const dropdownElement = await getByRole(canvas, "textbox");
    await userEvent.clear(dropdownElement);
    expect(dropdownElement.value).toEqual("");
  },
  tests: [inputLetterA, inputLetterB, selectAndClearTest]
});
