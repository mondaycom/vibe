import { act, cleanup, renderHook } from "@testing-library/react-hooks";
import useSetFocus from "../index";

describe("useSetFocus", () => {
  let element;
  const focusCallback = jest.fn();
  const blurCallback = jest.fn();

  describe("click", () => {
    afterEach(() => {
      element.remove();
      cleanup();
    });

    it("default isFocused value is false", () => {
      const { result } = renderHookForTest();
      expect(result.current.isFocused).toBe(false);
    });

    it("should call focusCallback when focusing the element", () => {
      const { result } = renderHookForTest();

      act(() => {
        element.focus();
      });

      expect(blurCallback.mock.calls.length).toBe(0);
      expect(focusCallback.mock.calls.length).toBe(1);
      expect(result.current.isFocused).toBe(true);
    });

    it("should call blurCallback when blur even happens to the element", () => {
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

    it("element should be focused after calling hook.focus()", () => {
      const { result } = renderHookForTest();

      act(() => {
        result.current.focus();
      });

      expect(blurCallback.mock.calls.length).toBe(0);
      expect(focusCallback.mock.calls.length).toBe(1);
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

      expect(blurCallback.mock.calls.length).toBe(1);
      expect(result.current.isFocused).toBe(false);
      expect(document.activeElement).not.toBe(element);
    });
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
