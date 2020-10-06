import React from "react";
import { renderHook, cleanup, act } from "@testing-library/react-hooks";
import { fireEvent } from "@testing-library/react";
import useKeyEvent from "./useKeyEvent";
import { sinon, expect } from "../test/test-helpers";

describe("useKeyEvent", () => {
  let element;
  let callbackStub;
  describe("single key", () => {
    const keys = ["Enter"];
    beforeEach(() => {
      callbackStub = sinon.stub();
      element = document.createElement("div");
      document.body.appendChild(element);
      renderHook(() =>
        useKeyEvent({
          keys,
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

    it(`should call the callback with the ${keys[0]} key`, () => {
      act(() => {
        fireEvent.keyUp(element, {
          key: keys[0]
        });
      });
      expect(callbackStub).to.be.calledOnce;
    });

    it(`should not call the callback with a different key`, () => {
      act(() => {
        fireEvent.keyUp(element, {
          key: "Escape"
        });
      });

      expect(callbackStub).to.not.be.called;
    });

    it("should not call on keyDown", () => {
      act(() => {
        fireEvent.keyUp(element, {
          key: keys[0]
        });
      });
      expect(callbackStub).to.be.calledOnce;
    });
  });

  describe("multiple keys", () => {
    const keys = ["Enter", "Esc", "Escape"];
    beforeEach(() => {
      callbackStub = sinon.stub();
      element = document.createElement("div");
      document.body.appendChild(element);
      renderHook(() => {
        useKeyEvent({
          keys,
          ref: { current: element },
          callback: callbackStub
        });
      });
    });

    afterEach(() => {
      element.remove();
      callbackStub.reset();
      cleanup();
    });

    it(`should call the callback with the ${keys[0]} key`, () => {
      act(() => {
        fireEvent.keyUp(element, {
          key: keys[0]
        });
      });
      expect(callbackStub).to.be.calledOnce;
    });

    it(`should call the callback with a different key - ${keys[1]}`, () => {
      act(() => {
        fireEvent.keyUp(element, {
          key: keys[1]
        });
      });

      expect(callbackStub).to.be.called;
    });
  });
});
