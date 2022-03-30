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

// Decrease value by drug Thumb of Slider
const decreaseSliderValueByDragThumbTest = async canvas => {
  const elRail = canvas.getByTestId("monday-slider-show-value-m__rail");
  const elThumb = await waitForElementVisible(() => within(elRail).getByRole("slider"));
  // const before = elThumb.getAttribute("aria-valuenow");
  await drag(elThumb, { delta: { x: -50, y: 0 } });
  // const after = elThumb.getAttribute("aria-valuenow");
  // await expect(before).not.toBe(after);
};

// Decrease/Increase value by mouse click on Track/Rail of Slider
const changeRangedSliderValueByClickingOnTrackTest = async canvas => {
  // prepare: take sizes of slider and waiting for render
  const elRail = canvas.getByTestId("monday-ranged-slider-m__rail");
  const rect = elRail.getBoundingClientRect();
  const elThumbStart = await within(elRail).findByTestId("monday-ranged-slider-m__thumb-0");
  const elThumbEnd = await within(elRail).findByTestId("monday-ranged-slider-m__thumb-1");
  // Start Thumb to Start (0)
  userEvent.click(elRail, { clientX: Math.ceil(rect.left) });
  await delay(CHANGES_DELAY);
  await expect(elThumbStart.getAttribute("aria-valuenow")).toBe("0");
  // End Thumb to End (100)
  userEvent.click(elRail, { clientX: Math.floor(rect.right) });
  await delay(CHANGES_DELAY);
  await expect(elThumbEnd.getAttribute("aria-valuenow")).toBe("100");
  // Start Thumb to 1/3 (33)
  userEvent.click(elRail, { clientX: Math.floor(rect.left + rect.width / 3) });
  await delay(CHANGES_DELAY);
  await expect(elThumbStart.getAttribute("aria-valuenow")).toBe("33");
  // Start Thumb to 3/4 (75)
  userEvent.click(elRail, { clientX: Math.floor(rect.left + rect.width * (3 / 4)) });
  await delay(CHANGES_DELAY);
  await expect(elThumbEnd.getAttribute("aria-valuenow")).toBe("75");
};

export const nonRangedSliderMouseEventsPlaySuite = interactionSuite({
  tests: [changeSliderValueByClickingOnTrackTest, decreaseSliderValueByDragThumbTest],
  afterEach: async () => {
    await resetFocus();
  }
});

export const rangedSliderMouseEventsPlaySuite = interactionSuite({
  tests: [changeRangedSliderValueByClickingOnTrackTest],
  afterEach: async () => {
    await resetFocus();
  }
});
