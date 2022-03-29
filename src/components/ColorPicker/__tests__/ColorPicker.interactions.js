import { userEvent, within } from "@storybook/testing-library";
import { contentColorsByName } from "../../../utils/colors-vars-map";
import { interactionSuite, resetFocus } from "../../../__tests__/interactions-helper";
import { expect } from "@storybook/jest";

async function selectAndResetWithKeyboard(canvas) {
  await clickOnColor(canvas, contentColorsByName.BRIGHT_GREEN);
  await expectColorToBeSelected(canvas, contentColorsByName.BRIGHT_GREEN);

  //move to a color in the last row
  await keyboardMultipleTimes("{arrowDown}", 7);
  await expectColorToBeActive(canvas, contentColorsByName.STEEL);

  //move to a color in the last row
  await userEvent.keyboard(" ");
  await expectColorToBeActive(canvas, contentColorsByName.STEEL);
  await expectColorToBeSelected(canvas, contentColorsByName.STEEL);
  await expectColorToBeNotSelected(canvas, contentColorsByName.BRIGHT_GREEN);

  //move to the "Clear color" button
  await userEvent.keyboard("{arrowDown}");
  await expectColorToBeNotActive(canvas, contentColorsByName.STEEL);
  await userEvent.keyboard("{Enter}");
  await expectColorToBeNotSelected(canvas, contentColorsByName.STEEL);
}

export const noColorInteractionSuite = interactionSuite({
  tests: [selectAndResetWithKeyboard],
  afterEach: async () => {
    await resetFocus();
  }
});

async function clickOnColor(canvas, color) {
  const element = await getColorItem(canvas, color);
  const toClick = within(element).getByLabelText(color);
  await userEvent.click(toClick);
}

async function expectColorToBeSelected(canvas, color) {
  const element = await getColorItem(canvas, color);
  expect(element).toHaveClass("selected-color");
}

async function expectColorToBeNotSelected(canvas, color) {
  const element = await getColorItem(canvas, color);
  expect(element).not.toHaveClass("selected-color");
}

async function expectColorToBeActive(canvas, color) {
  const element = await getColorItem(canvas, color);
  expect(element).toHaveClass("active");
}

async function expectColorToBeNotActive(canvas, color) {
  const element = await getColorItem(canvas, color);
  expect(element).not.toHaveClass("active");
}

async function getColorItem(canvas, color) {
  return await canvas.getByTestId(`color-picker-item-${color}`);
}

async function keyboardMultipleTimes(text, times) {
  text = text.repeat(times);
  await userEvent.keyboard(text);
}
