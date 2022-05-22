import { act, cleanup, renderHook } from "@testing-library/react-hooks";
import useSetFocus from "../index";

describe("useSetFocus", () => {
  let element;
  const focusCallback = jest.fn();
  const blurCallback = jest.fn();

  afterEach(() => {
    element.remove();
    cleanup();
  });

  it("default isFocused value is false", () => {
    const { result } = renderHookForTest();
    expect(result.current.isFocused).toBe(false);
  });

  it("focusCallback should be called after focusing the element", () => {
    renderHookForTest();

    act(() => {
      element.focus();
    });

    expect(focusCallback.mock.calls.length).toBe(1);
  });

  it("isFocused should be true after focusing the element", () => {
    const { result } = renderHookForTest();

    act(() => {
      element.focus();
    });

    expect(result.current.isFocused).toBe(true);
  });

  it("blurCallback should not be called after focusing the element", () => {
    renderHookForTest();

    act(() => {
      element.focus();
    });

    expect(blurCallback.mock.calls.length).toBe(0);
  });

  it("blurCallback should be called after blurring element", () => {
    const { result } = renderHookForTest();

    act(() => {
      element.focus();
    });

    act(() => {
      element.blur();
    });

    expect(blurCallback.mock.calls.length).toBe(1);
    expect(result.current.isFocused).toBe(false);
  });

  it("isFocused should be false after blurring element", () => {
    const { result } = renderHookForTest();

    act(() => {
      element.focus();
    });

    act(() => {
      element.blur();
    });

    expect(result.current.isFocused).toBe(false);
  });

  it("element should be focused after calling hook.focus()", () => {
    const { result } = renderHookForTest();

    act(() => {
      result.current.focus();
    });

    expect(result.current.isFocused).toBe(true);
    expect(document.activeElement).toBe(element);
  });

  it("element should not be focused after calling hook.blur()", () => {
    const { result } = renderHookForTest();

    act(() => {
      result.current.focus();
    });

    act(() => {
      result.current.blur();
    });

    expect(result.current.isFocused).toBe(false);
    expect(document.activeElement).not.toBe(element);
  });

  function renderHookForTest() {
    element = document.createElement("input");
    document.body.appendChild(element);

    return renderHook(() =>
      useSetFocus({
        ref: { current: element },
        focusCallback: focusCallback,
        blurCallback: blurCallback
      })
    );
  }
});
