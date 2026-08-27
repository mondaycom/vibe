import { describe, it, expect } from "vitest";
import { calculatePageStep, moveToPx } from "../SliderHelpers";

describe("Check moveToPx helper", () => {
  const railCoords = { width: 200 };

  // table: expected, offsetInPx, min, max, step
  it.each([
    // integer step, min=0 - existing behavior preserved
    [0, 0, 0, 100, 1],
    [50, 100, 0, 100, 1],
    [100, 200, 0, 100, 1],
    [25, 50, 0, 100, 1],
    // integer step, shifted min - existing behavior preserved
    [10, 0, 10, 20, 1],
    [15, 100, 10, 20, 1],
    [20, 200, 10, 20, 1],
    // fractional step - must snap to sub-integer values
    [2.5, 50, 0, 10, 0.5],
    [5, 100, 0, 10, 0.5],
    [7.5, 150, 0, 10, 0.5],
    [0.5, 10, 0, 10, 0.5],
    // fractional step with 0.1 granularity
    [1.2, 24, 0, 10, 0.1],
    [5, 100, 0, 10, 0.1],
    // clamp to min/max
    [0, -50, 0, 100, 1],
    [100, 300, 0, 100, 1],
    [0, -10, 0, 10, 0.5],
    [10, 500, 0, 10, 0.5]
  ])("should return (%s) for: offsetInPx=%i, min=%i, max=%i, step=%s", (expected, offsetInPx, min, max, step) => {
    expect(moveToPx(offsetInPx, min, max, railCoords, step)).toBeCloseTo(expected, 5);
  });
});

describe("Check calculatePageStep helper", () => {
  // table: expected, min, max, step
  it.each([
    // calculated pageStep less than step - slider step big enough
    [1, 0, 8, 1],
    [2, 1, 10, 2],
    [20, 0, 100, 20],
    [10, 20, 80, 10],
    [3, 0, 24, 3],
    // many steps with fixedPageStep - multiply it
    [12, 10, 80, 3],
    [10, 20, 80, 5],
    [2, 0, 12, 1],
    [6, 0, 36, 3],
    // common/default use-case simple calculated pageStep
    [10, 0, 100, 1],
    [8, 10, 90, 2],
    [6, 0, 60, 3],
    [10, 0, 100, 10]
  ])("pageStep should be (%i) for: min=%i, max=%i, step=%i", (expected, min, max, step) => {
    expect(calculatePageStep(max, min, step)).toBe(expected);
  });
});
