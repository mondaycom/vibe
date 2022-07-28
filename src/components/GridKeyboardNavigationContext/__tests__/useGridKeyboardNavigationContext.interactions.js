import { expect } from "@storybook/jest";
import {
  getByText,
  interactionSuite,
  clickElement,
  resetFocus,
  keyboardMultipleTimes
} from "../../../__tests__/interactions-helper";

//NOTE: this test may fail if it runs when the storybook page isn't focused. (For example, during an HMR refresh without focusing the storybook tab)
const multiGridLayoutKeyboardNavigation = async canvas => {
  const topLeft3Item = await getByText(canvas, "TL 3");
  clickElement(topLeft3Item);

  await keyboardMultipleTimes("{arrowRight}", 2);
  await assertElementWithTextToBeActive("TL 5");

  await keyboardMultipleTimes("{arrowRight}", 2);
  await assertElementWithTextToBeActive("TR 1");

  await keyboardMultipleTimes("{arrowDown}", 2);
  await assertElementWithTextToBeActive("TR 5");

  await keyboardMultipleTimes("{arrowLeft}", 3);
  await assertElementWithTextToBeActive("TL 1");

  await keyboardMultipleTimes("{arrowDown}", 4);
  await assertElementWithTextToBeActive("TB 5");

  await keyboardMultipleTimes("{arrowDown}", 1);
  await assertElementWithTextToBeActive("BL 1");

  await keyboardMultipleTimes("{arrowUp}", 1);
  await assertElementWithTextToBeActive("TB 5");

  await keyboardMultipleTimes("{arrowUp}", 3);
  await assertElementWithTextToBeActive("TL 4");
};

export const useGridContextMultipleDepthsPlaySuite = interactionSuite({
  tests: [multiGridLayoutKeyboardNavigation],
  afterEach: async () => {
    await resetFocus();
  }
});

async function assertElementWithTextToBeActive(text) {
  const activeElements = document.getElementsByClassName("active-item");
  expect(activeElements).toHaveLength(1);
  expect(activeElements[0]).toHaveTextContent(text);
}
