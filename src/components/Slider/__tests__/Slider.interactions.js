import { expect } from "@storybook/jest";
import { within, userEvent } from "@storybook/testing-library";
import { delay, interactionSuite, resetFocus } from "../../../__tests__/interactions-helper";

const CHANGES_DELAY = 1;

// Decrease/Increase value by mouse click on Track/Rail of Slider
const changeSliderValueByClickingOnTrackTest = async canvas => {
  // prepare: take sizes of slider and waiting for render
  const elRail = canvas.getByTestId("monday-slider-show-value-s__rail");
  const rect = elRail.getBoundingClientRect();
  const elThumb = await within(elRail).findByRole("slider");
  // go to start
  userEvent.click(elRail, { clientX: Math.ceil(rect.left) });
  await delay(CHANGES_DELAY);
  await expect(elThumb.getAttribute("aria-valuenow")).toBe("0");
  // go to end
  userEvent.click(elRail, { clientX: Math.floor(rect.right) });
  await delay(CHANGES_DELAY);
  await expect(elThumb.getAttribute("aria-valuenow")).toBe("100");
  // go to middle
  userEvent.click(elRail, { clientX: Math.floor(rect.left + rect.width / 2) });
  await delay(CHANGES_DELAY);
  await expect(elThumb.getAttribute("aria-valuenow")).toBe("50");
};

export const nonRangedSliderMouseEventsPlaySuite = interactionSuite({
  tests: [changeSliderValueByClickingOnTrackTest],
  afterEach: async () => {
    await resetFocus();
  }
});
