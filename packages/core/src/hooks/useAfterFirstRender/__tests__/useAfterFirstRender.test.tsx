import { vi, beforeEach, afterEach, describe, it, expect } from "vitest";
import { renderHook } from "@testing-library/react-hooks";
import useAfterFirstRender from "../";

describe("useAfterFirstRender", () => {
  it("should initially set isAfterFirstRender to false", () => {
    const { result } = renderHook(() => useAfterFirstRender());
    expect(result.current.current).toBeFalsy();
  });

  describe("when re-renders", () => {
    beforeEach(() => {
      vi.useFakeTimers();
    });

    afterEach(() => {
      vi.useRealTimers();
    });

    it("should set isAfterFirstRender to true after a delay", async () => {
      const { result } = renderHook(() => useAfterFirstRender());
      vi.advanceTimersByTime(1);
      expect(result.current.current).toBeTruthy();
    });

    it("should maintain isAfterFirstRender as true on subsequent renders", () => {
      const { result, rerender } = renderHook(() => useAfterFirstRender());

      vi.advanceTimersByTime(1);
      expect(result.current.current).toBeTruthy();

      rerender();
      expect(result.current.current).toBeTruthy();
    });
  });
});
