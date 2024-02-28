import { userEvent, within } from "@storybook/testing-library";
import { ContentColorByName } from "../../../utils/colors-vars-map";
import { resetFocus } from "../../../__tests__/interactions-helper";
import { ComponentDefaultTestId } from "../../../tests/constants";
import { typeMultipleTimes, interactionSuite } from "../../../tests/interactions-utils";
import { expect } from "@storybook/jest";
import { getTestId } from "../../../tests/test-ids-utils";

async function selectAndResetWithKeyboard(canvas) {
  await clickOnColor(canvas, ContentColorByName.BRIGHT_GREEN);
  await expectColorToBeSelected(canvas, ContentColorByName.BRIGHT_GREEN);

  //move to a color in the last row
  await typeMultipleTimes("{arrowDown}", 7);
  await expectColorToBeActive(canvas, ContentColorByName.STEEL);

  //move to a color in the last row
  await userEvent.keyboard(" ");
  await expectColorToBeActive(canvas, ContentColorByName.STEEL);
  await expectColorToBeSelected(canvas, ContentColorByName.STEEL);
  await expectColorToBeNotSelected(canvas, ContentColorByName.BRIGHT_GREEN);

  //move to the "Clear color" button
  await userEvent.keyboard("{arrowDown}");
  await expectColorToBeNotActive(canvas, ContentColorByName.STEEL);
  await userEvent.keyboard("{Enter}");
  await expectColorToBeNotSelected(canvas, ContentColorByName.STEEL);
}

export const noColorInteractionSuite = interactionSuite({
  tests: [selectAndResetWithKeyboard],
  afterEach: async () => {
    await resetFocus();
  }
});

async function selectMultiColorsWithKeyboardAndMouse(canvas) {
  await clickOnColor(canvas, ContentColorByName.DARK_PURPLE);
  await expectColorToBeSelected(canvas, ContentColorByName.DARK_PURPLE);

  //move with keyboard to a different color
  await typeMultipleTimes("{arrowRight}", 3);
  await expectColorToBeActive(canvas, ContentColorByName.INDIGO);

  //select this color as well
  await userEvent.keyboard("{Enter}");
  await expectColorToBeSelected(canvas, ContentColorByName.DARK_PURPLE);
  await expectColorToBeSelected(canvas, ContentColorByName.INDIGO);
  await expectColorToBeActive(canvas, ContentColorByName.INDIGO);

  //cancel the selection of the first color
  await clickOnColor(canvas, ContentColorByName.DARK_PURPLE);
  await expectColorToBeNotSelected(canvas, ContentColorByName.DARK_PURPLE);
  await expectColorToBeSelected(canvas, ContentColorByName.INDIGO);

  //since we used the mouse, the "active" indicator should be removed
  await expectColorToBeNotActive(canvas, ContentColorByName.DARK_PURPLE);
  await expectColorToBeNotActive(canvas, ContentColorByName.INDIGO);
}

export const multiSelectionInteractionSuite = interactionSuite({
  tests: [selectMultiColorsWithKeyboardAndMouse],
  afterEach: async () => {
    await resetFocus();
  }
});

async function clickOnColor(canvas, color) {
  const element = await findColorItem(canvas, color);
  const toClick = await within(element).findByLabelText(color);
  await userEvent.click(toClick);
}

async function expectColorToBeSelected(canvas, color) {
  const element = await findColorItem(canvas, color);
  expect(element.getAttribute("class")).toContain("selectedColor");
}

async function expectColorToBeNotSelected(canvas, color) {
  const element = await findColorItem(canvas, color);
  expect(element.getAttribute("class")).not.toContain("selectedColor");
}

async function expectColorToBeActive(canvas, color) {
  const element = await findColorItem(canvas, color);
  expect(element.getAttribute("class")).toContain("active");
}

async function expectColorToBeNotActive(canvas, color) {
  const element = await findColorItem(canvas, color);
  expect(element.getAttribute("class")).not.toContain("active");
}

async function findColorItem(canvas, color) {
  return await canvas.findByTestId(getTestId(ComponentDefaultTestId.COLOR_PICKER_ITEM, color));
}
