import { describe, it, expect } from "vitest";
import { renderHook } from "@testing-library/react-hooks";
import usePrevious from "../index";

describe("usePrevious", () => {
  it("should return undefined on the first render", () => {
    const { result } = renderHook(() => usePrevious(0));
    expect(result.current).toBeUndefined();
  });

  it("should return the previous value after an update", () => {
    const { result, rerender } = renderHook(({ value }) => usePrevious(value), {
      initialProps: { value: 1 }
    });

    rerender({ value: 2 });
    expect(result.current).toBe(1);

    rerender({ value: 3 });
    expect(result.current).toBe(2);
  });
});
