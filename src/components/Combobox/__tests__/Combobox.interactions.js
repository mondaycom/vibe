import { expect } from "@storybook/jest";
import {
  ELEMENT_TYPES,
  getByLabelText,
  getByTestId,
  getByText,
  clickElement,
  testFunctionWrapper,
  typeText
} from "../../../__tests__/interactions-helper";

export const onSelectClearsFilterTest = testFunctionWrapper(async canvas => {
  const comboboxElement = await getByTestId(canvas, ELEMENT_TYPES.COMBOBOX);
  const filterInput = await getByLabelText(comboboxElement, "Search for content");
  await typeText(filterInput, "Option");
  const optionToClick = getByText(comboboxElement, "Option 1");
  await clickElement(optionToClick);
  expect(filterInput).toHaveValue("12321");
});
