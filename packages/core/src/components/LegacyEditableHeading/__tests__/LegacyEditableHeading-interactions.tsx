import { expect } from "@storybook/jest";
import {
  Canvas,
  clearText,
  clickElement,
  delay,
  getByTestId,
  interactionSuite,
  typeText
} from "../../../tests/interactions-utils";
import { ComponentDefaultTestId } from "../../../tests/constants";
import { resetFocus } from "../../../__tests__/interactions-helper";

const CHANGES_DELAY = 50;

const getLegacyEditableHeadingHeading = async (canvas: Canvas) => {
  await resetFocus();
  return getByTestId(canvas, ComponentDefaultTestId.HEADING);
};

const getLegacyEditableHeadingInput = async (canvas: Canvas) => {
  await resetFocus();
  const editableHeadingElement = getByTestId(canvas, ComponentDefaultTestId.CLICKABLE);
  clickElement(editableHeadingElement);
  await delay(CHANGES_DELAY);
  return getByTestId(canvas, ComponentDefaultTestId.EDITABLE_INPUT);
};

async function textSimpleText(canvas: Canvas) {
  const editableHeadingInput = await getLegacyEditableHeadingInput(canvas);
  await clearText(editableHeadingInput);
  const text = "This heading is editable";
  await typeText(editableHeadingInput, text);
  expect(editableHeadingInput).toHaveAttribute("value", text);
  const editableHeading = await getLegacyEditableHeadingHeading(canvas);
  expect(editableHeading).toHaveTextContent(text);
}

export const overviewPlaySuite: ReturnType<typeof interactionSuite> = interactionSuite({
  tests: [textSimpleText]
});
