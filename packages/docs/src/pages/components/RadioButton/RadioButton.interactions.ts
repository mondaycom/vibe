import { expect } from "@storybook/jest";
import { clickElement, delay, getByRole, getByText, interactionSuite } from "@vibe/core/interactionsTests";

const CHANGES_DELAY = 100;

const isRadioButtonSelected = (canvas: HTMLElement, text: string): boolean => {
  const radioToClick = getByText(canvas, text) as HTMLElement;
  const inputElement = radioToClick.parentElement.firstChild.firstChild as HTMLInputElement;
  return inputElement.checked;
};

const clickNextButton = async (canvas: HTMLElement): Promise<void> => {
  const nextButton = getByRole(canvas, "button") as HTMLElement;
  await clickElement(nextButton);
  await delay(CHANGES_DELAY);
};

const clickRadioButton = async (canvas: HTMLElement): Promise<void> => {
  const radioToClick = getByText(canvas, "I was mentioned") as HTMLElement;
  // Click the radio button
  await clickElement(radioToClick);
  await delay(CHANGES_DELAY);
  // check it is selected
  expect(isRadioButtonSelected(canvas, "I was mentioned")).toBe(true);
};

export const controlRadioButton = async (canvas: HTMLElement): Promise<void> => {
  // check first radio is selected
  await expect(isRadioButtonSelected(canvas, "Radio 1")).toBe(true);

  await clickNextButton(canvas);

  // check first radio is not selected
  await expect(isRadioButtonSelected(canvas, "Radio 1")).toBe(false);
  await expect(isRadioButtonSelected(canvas, "Radio 2")).toBe(true);

  await clickNextButton(canvas);

  await expect(isRadioButtonSelected(canvas, "Radio 2")).toBe(false);
  await expect(isRadioButtonSelected(canvas, "Radio 3")).toBe(true);

  // Comeback to the first radio to cleanup
  await clickNextButton(canvas);
};

export const clickRadioButtonPlaySuite = interactionSuite({
  tests: [clickRadioButton]
});

export const controlRadioButtonPlaySuite = interactionSuite({
  tests: [controlRadioButton]
});
