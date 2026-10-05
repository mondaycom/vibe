import { calculateSteppedValue } from "../calcValue";

describe("calculateSteppedValue", () => {
  it("should increment the value by the step", () => {
    expect(calculateSteppedValue({ value: 5, direction: 1, step: 1 })).toBe(6);
  });

  it("should decrement the value by the step", () => {
    expect(calculateSteppedValue({ value: 5, direction: -1, step: 1 })).toBe(4);
  });

  it("should handle different step values", () => {
    expect(calculateSteppedValue({ value: 10, direction: 1, step: 5 })).toBe(15);
    expect(calculateSteppedValue({ value: 10, direction: -1, step: 5 })).toBe(5);
  });

  it("should treat null value as 0", () => {
    expect(calculateSteppedValue({ value: null, direction: 1, step: 1 })).toBe(1);
    expect(calculateSteppedValue({ value: null, direction: -1, step: 1 })).toBe(-1);
  });

  it("should not exceed the max value", () => {
    expect(calculateSteppedValue({ value: 9, direction: 1, step: 1, min: 0, max: 10 })).toBe(10);
    expect(calculateSteppedValue({ value: 10, direction: 1, step: 1, min: 0, max: 10 })).toBe(10);
  });

  it("should not go below the min value", () => {
    expect(calculateSteppedValue({ value: 1, direction: -1, step: 1, min: 0, max: 10 })).toBe(0);
    expect(calculateSteppedValue({ value: 0, direction: -1, step: 1, min: 0, max: 10 })).toBe(0);
  });

  it("should allow values out of bounds when allowOutOfBounds is true", () => {
    expect(calculateSteppedValue({ value: 10, direction: 1, step: 1, min: 0, max: 10, allowOutOfBounds: true })).toBe(
      11
    );
    expect(calculateSteppedValue({ value: 0, direction: -1, step: 1, min: 0, max: 10, allowOutOfBounds: true })).toBe(
      -1
    );
  });

  it("should work with negative numbers", () => {
    expect(calculateSteppedValue({ value: -5, direction: 1, step: 1 })).toBe(-4);
    expect(calculateSteppedValue({ value: -5, direction: -1, step: 1 })).toBe(-6);
  });

  it("should clamp correctly with negative min/max values", () => {
    expect(calculateSteppedValue({ value: -1, direction: 1, step: 1, min: -10, max: -1 })).toBe(-1);
    expect(calculateSteppedValue({ value: -9, direction: -1, step: 1, min: -10, max: -1 })).toBe(-10);
  });

  it("should handle floating point numbers correctly", () => {
    expect(calculateSteppedValue({ value: 1.5, direction: 1, step: 0.5 })).toBe(2.0);
    expect(calculateSteppedValue({ value: 1.5, direction: -1, step: 0.5 })).toBe(1.0);
    expect(calculateSteppedValue({ value: 1.2, direction: 1, step: 0.1 })).toBeCloseTo(1.3);
    expect(calculateSteppedValue({ value: 1.2, direction: -1, step: 0.1 })).toBeCloseTo(1.1);
  });
});
