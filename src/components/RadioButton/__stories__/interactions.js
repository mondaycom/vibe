import { expect } from "@storybook/jest";
import { clickElement, getByRole, getByText, testFunctionWrapper } from "../../../tests/interactions-utils";

export const clickRadioButton = testFunctionWrapper(async canvas => {
  const radioToClick = getByText(canvas, "I was mentioned");
  // Click the radio button
  await clickElement(radioToClick);
  // check it is selected
  const inputElement = radioToClick.parentElement.firstChild.firstChild;
  expect(inputElement.checked).toEqual(true);
});

export const controlRadioButton = testFunctionWrapper(async canvas => {
  // check first radio is selected
  let radioButton = getByText(canvas, "Radio 1");
  let inputElement = radioButton.parentElement.firstChild.firstChild;
  expect(inputElement.checked).toEqual(true);
  const button = getByRole(canvas, "button");
  // Click the button
  await clickElement(button);
  // check first radio is no selected
  expect(inputElement.checked).toEqual(false);
  // check second radio is selected
  radioButton = getByText(canvas, "Radio 2");
  inputElement = radioButton.parentElement.firstChild.firstChild;
  expect(inputElement.checked).toEqual(true);
});
