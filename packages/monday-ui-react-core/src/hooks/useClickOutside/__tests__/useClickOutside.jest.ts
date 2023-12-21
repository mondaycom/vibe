import { renderHook, cleanup, act } from "@testing-library/react-hooks";
import { fireEvent } from "@testing-library/react";
import useClickOutside from "../index";

describe("useClickOutside", () => {
  let element: HTMLElement;
  let callbackStub: jest.Mock;

  beforeEach(() => {
    callbackStub = jest.fn();
    element = document.createElement("div");
    document.body.appendChild(element);
    renderHook(() => useClickOutside({ ref: { current: element }, callback: callbackStub }));
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

  describe("contextMenu with overriding event name", () => {
    it("should not call the callback when click when overriding to differnet name", () => {
      element = document.createElement("div");
      document.body.appendChild(element);
      renderHook(() =>
        useClickOutside({ ref: { current: element }, callback: callbackStub, eventName: "contextmenu" })
      );
      act(() => {
        fireEvent.mouseDown(document.body);
      });
      return expect(callbackStub.mock.calls.length).toEqual(0);
    });

    it("should call the callback for override when passing eventName parameter", () => {
      callbackStub = jest.fn();
      element = document.createElement("div");
      document.body.appendChild(element);
      renderHook(() =>
        useClickOutside({ ref: { current: element }, callback: callbackStub, eventName: "contextmenu" })
      );

      act(() => {
        fireEvent.contextMenu(document.body);
      });
      return expect(callbackStub.mock.calls.length).toEqual(1);
    });
  });
});
