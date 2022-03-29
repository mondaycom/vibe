import { expect } from "@storybook/jest";
import { userEvent, within } from "@storybook/testing-library";
import {
  delay,
  drag,
  interactionSuite,
  resetFocus,
  waitForElementVisible
} from "../../../__tests__/interactions-helper";

const CHANGES_DELAY = 1;

// Decrease/Increase value by mouse click on Track/Rail of Slider
const changeSliderValueByClickingOnTrackTest = async canvas => {
  // prepare: take sizes of slider and waiting for render
  const elRail = canvas.getByTestId("monday-slider-show-value-s__rail");
  const rect = elRail.getBoundingClientRect();
  const elThumb = await waitForElementVisible(() => within(elRail).getByRole("slider"));
  // go to start
  userEvent.click(elRail, { clientX: Math.ceil(rect.left) });
  await delay(CHANGES_DELAY);
  await expect(elThumb.getAttribute("aria-valuenow")).toBe("0");
  // got to end
  userEvent.click(elRail, { clientX: Math.floor(rect.right) });
  await delay(CHANGES_DELAY);
  await expect(elThumb.getAttribute("aria-valuenow")).toBe("100");
  // got to middle
  userEvent.click(elRail, { clientX: Math.floor(rect.left + rect.width / 2) });
  await delay(CHANGES_DELAY);
  await expect(elThumb.getAttribute("aria-valuenow")).toBe("50");
};

// Decrease value by drug Thumb of Slider
const decreaseSliderValueByDragThumbTest = async canvas => {
  const elRail = canvas.getByTestId("monday-slider-show-value-m__rail");
  const elThumb = await waitForElementVisible(() => within(elRail).getByRole("slider"));
  // const before = elThumb.getAttribute("aria-valuenow");
  await drag(elThumb, { delta: { x: -50, y: 0 } });
  // const after = elThumb.getAttribute("aria-valuenow");
  // await expect(before).not.toBe(after);
};

export const nonRangedSliderMouseEventsPlaySuite = interactionSuite({
  tests: [changeSliderValueByClickingOnTrackTest, decreaseSliderValueByDragThumbTest],
  afterEach: async () => {
    await resetFocus();
  }
});
