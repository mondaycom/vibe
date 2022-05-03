import { renderHook, cleanup, act } from "@testing-library/react-hooks";
import { fireEvent } from "@testing-library/react";
import useSetFocus from "../index";

describe("useSetFocus", () => {
  let element;
  const focusCallback = jest.fn();
  const blurCallback = jest.fn();

  describe("click", () => {
    beforeEach(() => {
      element = document.createElement("input");
      document.body.appendChild(element);
      renderHook(() =>
        useSetFocus({
          ref: { current: element },
          focusCallback: focusCallback,
          blurCallback: blurCallback
        })
      );
    });

    afterEach(() => {
      element.remove();
      cleanup();
    });

    it("should call focusCallback when moving mouse to the element", () => {
      act(() => {
        fireEvent.mouseOver(element);
      });
      expect(focusCallback.mock.calls.length).toBe(1);
      expect(blurCallback.mock.calls.length).toBe(0);
    });

    it("should call blurCallback when moving mouse out of the element", () => {
      act(() => {
        fireEvent.mouseOver(element);
        fireEvent.mouseLeave(element);
      });
      expect(focusCallback.mock.calls.length).toBe(1);
      expect(blurCallback.mock.calls.length).toBe(1);
    });

    it("should focus on the element when isActive = true", () => {
      act(() => {
        fireEvent.mouseOver(element);
      });

      expect(element).toHaveFocus();
    });
  });
});
