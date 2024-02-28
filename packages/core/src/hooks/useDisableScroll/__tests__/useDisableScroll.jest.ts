import { renderHook } from "@testing-library/react-hooks";
import useDisableScroll from "..";

describe("useDisableScroll", () => {
  let addEventListenerSpy: jest.SpyInstance;
  let removeEventListenerSpy: jest.SpyInstance;

  beforeEach(() => {
    addEventListenerSpy = jest.spyOn(document.body, "addEventListener");
    removeEventListenerSpy = jest.spyOn(document.body, "removeEventListener");
  });

  afterEach(() => {
    addEventListenerSpy.mockRestore();
    removeEventListenerSpy.mockRestore();
  });

  test("should add event listeners when disableScroll is called", () => {
    const { result } = renderHook(() => useDisableScroll("body"));

    result.current.disableScroll();

    expect(addEventListenerSpy).toHaveBeenCalledTimes(1);
    expect(addEventListenerSpy).toHaveBeenCalledWith("wheel", expect.any(Function));
  });

  test("should remove event listeners when disableScroll is called", () => {
    const { result } = renderHook(() => useDisableScroll("body"));

    result.current.enableScroll();

    expect(removeEventListenerSpy).toHaveBeenCalledTimes(1);
    expect(removeEventListenerSpy).toHaveBeenCalledWith("wheel", expect.any(Function));
  });

  test("should not throw an error when disableScroll is called after unmounting", () => {
    const { result, unmount } = renderHook(() => useDisableScroll("body"));

    unmount();

    expect(() => {
      result.current.disableScroll();
    }).not.toThrow();
  });

  test("should not throw an error when disableScroll is called after unmounting when selector empty", () => {
    const { result, unmount } = renderHook(() => useDisableScroll(""));

    unmount();

    expect(() => {
      result.current.disableScroll();
    }).not.toThrow();
  });

  test("should not throw an error when disableScroll is called after unmounting when selector undefined", () => {
    // @ts-ignore
    const { result, unmount } = renderHook(() => useDisableScroll());

    unmount();

    expect(() => {
      result.current.disableScroll();
    }).not.toThrow();
  });
});
