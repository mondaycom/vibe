import { renderHook, cleanup, act } from "@testing-library/react-hooks";
import { fireEvent } from "@testing-library/react";
import useSetFocus from "../useSetFocus";

describe("useSetFocus", () => {
  let element;
  const setActiveStub = jest.fn();
  const setUnActiveStub = jest.fn();
  const isActive = true;

  describe("click", () => {
    beforeEach(() => {
      element = document.createElement("div");
      document.body.appendChild(element);
      renderHook(() =>
        useSetFocus({
          ref: { current: element },
          setActive: setActiveStub,
          setUnActive: setUnActiveStub,
          isActive
        }));
    });

    afterEach(() => {
      element.remove();
      cleanup();
    });

    it("should call setActiveStub when moving mouse to the element", () => {
      act(() => {
        fireEvent.mouseOver(element);
      });
      expect(setActiveStub.mock.calls.length).toBe(1);
      expect(setUnActiveStub.mock.calls.length).toBe(0);
    });

    it("should call setUnActiveStub when moving mouse out of the element", () => {
      act(() => {
        fireEvent.mouseOver(element);
        fireEvent.mouseLeave(element);
      });
      expect(setActiveStub.mock.calls.length).toBe(1);
      expect(setUnActiveStub.mock.calls.length).toBe(1);
    });

    it("should focus on the element when isActive = true", () => {
      act(() => {
        fireEvent.mouseOver(element);
      });

      expect(element).toHaveFocus;
    });
  });
});
