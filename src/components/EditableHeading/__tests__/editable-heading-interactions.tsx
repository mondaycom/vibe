import { expect } from "@storybook/jest";
import { resetFocus } from "../../../__tests__/interactions-helper";
import { getByLabelText, interactionSuite } from "../../../tests/interactions-utils";
import { fireEvent } from "@testing-library/react";

async function states_editableHeadingElementTest(canvas: HTMLCanvasElement) {
  const editableHeadingElement = await getByLabelText(canvas, "editableHeading");
  editableHeadingElement.click();
  expect(editableHeadingElement).toHaveFocus();
  fireEvent.change(editableHeadingElement, { target: { value: "Typed Text" } });
  expect(editableHeadingElement).toHaveAttribute("value", "Typed Text");
}

export const statesPlaySuite = interactionSuite({
  tests: [states_editableHeadingElementTest],
  afterEach: async () => {
    await resetFocus();
  }
});
