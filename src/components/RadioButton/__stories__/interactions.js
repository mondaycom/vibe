import { expect } from "@storybook/jest";
import { getByText, clickElement, testFunctionWrapper } from "../../../__tests__/interactions-helper";

export const clickRadioButton = testFunctionWrapper(async canvas => {
  const radioToClick = getByText(canvas, "I was mentioned");
  // Click the radio button
  await clickElement(radioToClick);
  // check it is selected
  const inputElement = radioToClick.parentElement.firstChild.firstChild;
  expect(inputElement.checked).toEqual(true);
});
