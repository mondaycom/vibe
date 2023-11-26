import { expect } from "@storybook/jest";
import {
  Canvas,
  clearText,
  clickElement,
  getByTestId,
  getByRole,
  interactionSuite,
  typeText,
  delay
} from "../../../tests/interactions-utils";

import { ComponentDefaultTestId } from "../../../tests/constants";
import { resetFocus } from "../../../__tests__/interactions-helper";

const CHANGES_DELAY = 200;
const text = "This heading is an editable heading";

function getComponent(canvas: Canvas) {
  return getByTestId(canvas, ComponentDefaultTestId.CLICKABLE);
}
function getHeading(canvas: Canvas) {
  return getByTestId(canvas, ComponentDefaultTestId.CLICKABLE);
}

function getInput(canvas: Canvas) {
  return getByRole(canvas, "input");
}

async function changeModes(canvas: Canvas) {
  await delay(CHANGES_DELAY); // needed the tests would run correctly on page refresh
  const compponent = getComponent(canvas);
  clickElement(compponent);
  await delay(CHANGES_DELAY);

  const input = getInput(canvas);
  expect(input).toHaveAttribute("value", text);

  await resetFocus();
  const heading = getHeading(canvas);
  expect(heading).toHaveTextContent(text);
}

async function editAndChangeToValidText(canvas: Canvas) {
  const compponent = getComponent(canvas);
  clickElement(compponent);
  await delay(CHANGES_DELAY);

  const input = getInput(canvas);
  await clearText(input);
  await typeText(input, text);
  expect(input).toHaveAttribute("value", text);

  await resetFocus();
  const heading = getHeading(canvas);
  expect(heading).toHaveTextContent(text);
}

async function clearInput(canvas: Canvas) {
  const compponent = getComponent(canvas);
  clickElement(compponent);
  await delay(CHANGES_DELAY);

  const input = getInput(canvas);
  await clearText(input);

  await resetFocus();
  const heading = getHeading(canvas);
  expect(heading).toHaveTextContent(text);
}

async function cancelEditing(canvas: Canvas) {
  const compponent = getComponent(canvas);
  clickElement(compponent);
  await delay(CHANGES_DELAY);

  const input = getInput(canvas);
  await clearText(input);
  await delay(CHANGES_DELAY);

  const textToChange = "test";
  await typeText(input, textToChange);
  expect(input).toHaveAttribute("value", textToChange);

  await typeText(input, "{Escape}");

  const heading = getHeading(canvas);
  expect(heading).toHaveTextContent(text);
}

export const overviewPlaySuite = interactionSuite({
  tests: [changeModes, editAndChangeToValidText, clearInput, cancelEditing]
});
