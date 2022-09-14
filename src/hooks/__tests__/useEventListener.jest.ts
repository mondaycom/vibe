import { renderHook, cleanup, act } from "@testing-library/react-hooks";
import { fireEvent } from "@testing-library/react";
import useEventListener from "../useEventListener";

describe("useEventListener", () => {
  let element: HTMLElement;
  let callbackStub: jest.Mock;
  describe("click", () => {
    beforeEach(() => {
      callbackStub = jest.fn();
      element = document.createElement("div");
      document.body.appendChild(element);
      renderHook(() =>
        useEventListener({
          eventName: "click",
          ref: { current: element },
          callback: callbackStub
        })
      );
    });

    afterEach(() => {
      element.remove();
      cleanup();
    });

    it("should call the callback when clicking", () => {
      act(() => {
        fireEvent.click(element);
      });
      return expect(callbackStub.mock.calls.length).toEqual(1);
    });

    it("should not call callback on a different (not click) event", () => {
      act(() => {
        fireEvent.keyDown(element);
      });
      return expect(callbackStub.mock.calls.length).toEqual(0);
    });
  });

  describe("custom event", () => {
    const customEventName = "testEvent";
    const differentEventName = "testEvent-different";
    beforeEach(() => {
      callbackStub = jest.fn();
      element = document.createElement("div");
      document.body.appendChild(element);
      renderHook(() =>
        useEventListener({
          eventName: customEventName,
          ref: { current: element },
          callback: callbackStub
        })
      );
    });

    afterEach(() => {
      element.remove();
      cleanup();
    });

    it("should call the callback when clicking", () => {
      act(() => {
        fireEvent(
          element,
          new Event(customEventName, {
            bubbles: true,
            cancelable: true
          })
        );
      });
      return expect(callbackStub.mock.calls.length).toEqual(1);
    });

    it("should not call callback on a different custom event event", () => {
      act(() => {
        fireEvent(
          element,
          new Event(differentEventName, {
            bubbles: true,
            cancelable: true
          })
        );
      });
      return expect(callbackStub.mock.calls.length).toEqual(0);
    });
  });
});
