import { renderHook, cleanup, act } from "@testing-library/react-hooks";
import { fireEvent } from "@testing-library/react";
import useOnClickOutside from "../useClickOutside";

describe("useClickOutside", () => {
  let element: HTMLElement;
  let callbackStub: jest.Mock;

  beforeEach(() => {
    callbackStub = jest.fn();
    element = document.createElement("div");
    document.body.appendChild(element);
    renderHook(() => useOnClickOutside({ ref: { current: element }, callback: callbackStub }));
  });

  afterEach(() => {
    element.remove();
    cleanup();
  });
  describe("mouseDown", () => {
    it("should call the callback when click outside the element", () => {
      act(() => {
        fireEvent.click(document.body);
      });
      return expect(callbackStub.mock.calls.length).toEqual(1);
    });

    it("should not call the callback when clicking the element", () => {
      act(() => {
        fireEvent.click(element);
      });
      return expect(callbackStub.mock.calls.length).toEqual(0);
    });
  });

  describe("touchStart", () => {
    it("should call the callback when click outside the element", () => {
      act(() => {
        fireEvent.touchEnd(document.body);
      });
      return expect(callbackStub.mock.calls.length).toEqual(1);
    });

    it("should not call the callback when clicking the element", () => {
      act(() => {
        fireEvent.touchEnd(element);
      });
      return expect(callbackStub.mock.calls.length).toEqual(0);
    });
  });

  describe("contextMenu - using mousedown", () => {
    it("should not call the callback when click outside the element", () => {
      act(() => {
        fireEvent.mouseDown(document.body);
      });
      return expect(callbackStub.mock.calls.length).toEqual(0);
    });

    it("should call the callback when passing eventName mousedown", () => {
      callbackStub = jest.fn();
      element = document.createElement("div");
      document.body.appendChild(element);
      renderHook(() =>
        useOnClickOutside({ ref: { current: element }, callback: callbackStub, eventName: "mousedown" })
      );

      act(() => {
        fireEvent.mouseDown(document.body);
      });
      return expect(callbackStub.mock.calls.length).toEqual(1);
    });
  });
});
