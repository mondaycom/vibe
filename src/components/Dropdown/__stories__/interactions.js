import { expect } from "@storybook/jest";
import {
  getByRole,
  getByText,
  clickElement,
  testFunctionWrapper,
  typeText,
  getByClassName
} from "../../../__tests__/interactions-helper";

export const selectAndClearTest = testFunctionWrapper(async canvas => {
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
  const placeholderText = getByText(canvas, "Placeholder text here");
  expect(placeholderText.innerText).toBe("Placeholder text here");
});
