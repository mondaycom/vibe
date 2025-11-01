import { expect } from "@storybook/jest";
import {
  type Canvas,
  clearText,
  clickElement,
  getByTestId,
  getByRole,
  interactionSuite,
  typeText,
  delay,
  resetFocus
} from "@vibe/core/interactionsTests";
import { ComponentDefaultTestId } from "@vibe/shared";

const CHANGES_DELAY = 200;
const text = "This heading is an editable heading";

function getComponent(canvas: Canvas) {
  return getByTestId(canvas, ComponentDefaultTestId.EDITABLE_HEADING);
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
  const heading = getComponent(canvas);
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
  const heading = getComponent(canvas);
  expect(heading).toHaveTextContent(text);
}

async function clearInput(canvas: Canvas) {
  const compponent = getComponent(canvas);
  clickElement(compponent);
  await delay(CHANGES_DELAY);

  const input = getInput(canvas);
  await clearText(input);

  await resetFocus();
  const heading = getComponent(canvas);
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

  const heading = getComponent(canvas);
  expect(heading).toHaveTextContent(text);
}

export const overviewPlaySuite: ReturnType<typeof interactionSuite> = interactionSuite({
  tests: [changeModes, editAndChangeToValidText, clearInput, cancelEditing]
});
