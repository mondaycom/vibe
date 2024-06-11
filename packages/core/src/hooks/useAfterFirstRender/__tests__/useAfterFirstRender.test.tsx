import { renderHook } from "@testing-library/react-hooks";
import useAfterFirstRender from "../";

describe("useAfterFirstRender", () => {
  it("should initially set isAfterFirstRender to false", () => {
    const { result } = renderHook(() => useAfterFirstRender());
    expect(result.current.current).toBeFalsy();
  });

  describe("when re-renders", () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    it("should set isAfterFirstRender to true after a delay", async () => {
      const { result } = renderHook(() => useAfterFirstRender());
      jest.advanceTimersByTime(1);
      expect(result.current.current).toBeTruthy();
    });

    it("should maintain isAfterFirstRender as true on subsequent renders", () => {
      const { result, rerender } = renderHook(() => useAfterFirstRender());

      jest.advanceTimersByTime(1);
      expect(result.current.current).toBeTruthy();

      rerender();
      expect(result.current.current).toBeTruthy();
    });
  });
});
