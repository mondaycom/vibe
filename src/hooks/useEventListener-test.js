import React from "react";
import { sinon, expect } from "../test/test-helpers";
import { renderHook, cleanup, act } from "@testing-library/react-hooks";
import useEventListener from "./useEventListener";
import { fireEvent } from "@testing-library/react";

describe("useEventListener", () => {
  let element;
  let callbackStub;
  describe("click", () => {
    beforeEach(() => {
      callbackStub = sinon.stub();
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
      callbackStub.reset();
      cleanup();
    });

    it("should call the callback when clicking", () => {
      act(() => {
        fireEvent.click(element);
      });
      return expect(callbackStub).to.be.calledOnce;
    });

    it("should not call callback on a different (not click) event", () => {
      act(() => {
        fireEvent.keyDown(element);
      });
      return expect(callbackStub).to.not.be.calledOnce;
    });
  });

  describe("custom event", () => {
    const customEventName = "testEvent";
    const differentEventName = "testEvent-different";
    beforeEach(() => {
      callbackStub = sinon.stub();
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
      callbackStub.reset();
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
      return expect(callbackStub).to.be.calledOnce;
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
      return expect(callbackStub).to.not.be.calledOnce;
    });
  });
});
