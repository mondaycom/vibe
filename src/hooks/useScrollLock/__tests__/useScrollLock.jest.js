import { renderHook } from "@testing-library/react-hooks";
import useScrollLock from "..";

describe("useScrollLock", () => {
  let addEventListenerSpy;
  let removeEventListenerSpy;

  beforeEach(() => {
    addEventListenerSpy = jest.spyOn(document, "addEventListener");
    removeEventListenerSpy = jest.spyOn(document, "removeEventListener");
  });

  afterEach(() => {
    addEventListenerSpy.mockRestore();
    removeEventListenerSpy.mockRestore();
  });

  test("should add event listeners when lockScroll is called", () => {
    const { result } = renderHook(() => useScrollLock(".scrollable"));

    result.current.lockScroll();

    expect(addEventListenerSpy).toHaveBeenCalledTimes(1);
    expect(addEventListenerSpy).toHaveBeenCalledWith("wheel", expect.any(Function));
  });

  test("should remove event listeners when unlockScroll is called", () => {
    const { result } = renderHook(() => useScrollLock(".scrollable"));

    result.current.unlockScroll();

    expect(removeEventListenerSpy).toHaveBeenCalledTimes(1);
    expect(removeEventListenerSpy).toHaveBeenCalledWith("wheel", expect.any(Function));
  });

  test("should not throw an error when unlockScroll is called after unmounting", () => {
    const { result, unmount } = renderHook(() => useScrollLock(".scrollable"));

    unmount();

    expect(() => {
      result.current.unlockScroll();
    }).not.toThrow();
  });
});