import { calculatePageStep } from "../SliderHelpers";

describe("Check calculatePageStep helper", () => {
  // table: expected, min, max, step
  test.each([
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
    expect(calculatePageStep({ min, max, step })).toBe(expected);
  });
});
