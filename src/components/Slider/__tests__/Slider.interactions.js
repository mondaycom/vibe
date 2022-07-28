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
const MOVE_DURATION = 100;

// Decrease/Increase value by mouse click on Track/Rail of Slider (NON-Ranged)
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
  userEvent.click(elRail, { clientX: Math.floor(rect.left + rect.width * 0.5) });
  await delay(CHANGES_DELAY);
  await expect(elThumb.getAttribute("aria-valuenow")).toBe("50");
};

// Decrease value by drug Thumb of Slider (NON-Ranged)
const changeSliderValueByDragThumbTest = async canvas => {
  const elRail = canvas.getByTestId("monday-slider-show-value-m__rail");
  const rect = elRail.getBoundingClientRect();
  const elThumb = await waitForElementVisible(() => within(elRail).getByRole("slider"));
  await drag(elThumb, {
    duration: MOVE_DURATION,
    toCoords: { x: Math.ceil(rect.left + rect.width * 0.25) }
  });
  await expect(elThumb.getAttribute("aria-valuenow")).toBe("25");
  await drag(elThumb, {
    duration: MOVE_DURATION,
    toCoords: { x: Math.ceil(rect.left + rect.width * 0.75) }
  });
  await expect(elThumb.getAttribute("aria-valuenow")).toBe("75");
};

// Decrease/Increase values by mouse click on Track/Rail of Ranged Slider
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
  userEvent.click(elRail, { clientX: Math.floor(rect.left + rect.width * 0.25) });
  await delay(CHANGES_DELAY);
  await expect(elThumbStart.getAttribute("aria-valuenow")).toBe("25");
  // Start Thumb to 3/4 (75)
  userEvent.click(elRail, { clientX: Math.floor(rect.left + rect.width * 0.75) });
  await delay(CHANGES_DELAY);
  await expect(elThumbEnd.getAttribute("aria-valuenow")).toBe("75");
};

// Change value by drug Thumbs of Ranged Slider
const changeRangedSliderValueByDragThumbTest = async canvas => {
  // prepare slider tests
  const elRail = canvas.getByTestId("monday-ranged-slider-s__rail");
  const rect = elRail.getBoundingClientRect();
  const elThumbStart = await within(elRail).findByTestId("monday-ranged-slider-s__thumb-0");
  const elThumbEnd = await within(elRail).findByTestId("monday-ranged-slider-s__thumb-1");

  // move Start Thumb from 0% to 25%
  await drag(elThumbStart, {
    duration: MOVE_DURATION,
    toCoords: { x: Math.ceil(rect.left + rect.width * 0.25) }
  });
  await expect(elThumbStart.getAttribute("aria-valuenow")).toBe("25");

  // move End Thumb from 100% to 65%
  await drag(elThumbEnd, {
    duration: MOVE_DURATION,
    toCoords: { x: Math.ceil(rect.left + rect.width * 0.65) }
  });
  await expect(elThumbEnd.getAttribute("aria-valuenow")).toBe("65");

  // move Start Thumb to 95% --> switch End/Start Thumbs when crossing
  await drag(elThumbStart, {
    duration: MOVE_DURATION,
    toCoords: { x: Math.ceil(rect.left + rect.width * 0.95) }
  });
  // drag Start Thumb but after crossing it switching to End Thumb - should be checked
  await expect(elThumbEnd.getAttribute("aria-valuenow")).toBe("95");

  // move Start Thumb from 75% to 5%
  await drag(elThumbStart, {
    duration: MOVE_DURATION,
    toCoords: { x: Math.ceil(rect.left + rect.width * 0.05) }
  });
  await expect(elThumbStart.getAttribute("aria-valuenow")).toBe("5");
};

export const nonRangedSliderMouseEventsPlaySuite = interactionSuite({
  tests: [changeSliderValueByClickingOnTrackTest, changeSliderValueByDragThumbTest],
  afterEach: async () => {
    await resetFocus();
  }
});

export const rangedSliderMouseEventsPlaySuite = interactionSuite({
  tests: [changeRangedSliderValueByClickingOnTrackTest, changeRangedSliderValueByDragThumbTest],
  afterEach: async () => {
    await resetFocus();
  }
});
