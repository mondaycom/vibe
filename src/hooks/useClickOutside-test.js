import React from "react";
import { sinon, expect } from "../test/test-helpers";
import { renderHook, cleanup, act } from "@testing-library/react-hooks";
import useOnClickOutside from "./useClickOutside";
import { fireEvent } from "@testing-library/react";

describe("useClickOutside", () => {
  let element;
  let callbackStub;

  beforeEach(() => {
    callbackStub = sinon.stub();
    element = document.createElement("div");
    document.body.appendChild(element);
    renderHook(() => useOnClickOutside({ ref: { current: element }, callback: callbackStub }));
  });

  afterEach(() => {
    element.remove();
    callbackStub.reset();
    cleanup();
  });
  describe("mouseDown", () => {
    it("should call the callback when click outside the element", () => {
      act(() => {
        fireEvent.click(document.body);
      });
      return expect(callbackStub).to.be.calledOnce;
    });

    it("should not call the callback when clicking the element", () => {
      act(() => {
        fireEvent.click(element);
      });
      return expect(callbackStub).to.not.be.called;
    });
  });

  describe("touchStart", () => {
    it("should call the callback when click outside the element", () => {
      act(() => {
        fireEvent.touchEnd(document.body);
      });
      return expect(callbackStub).to.be.calledOnce;
    });

    it("should not call the callback when clicking the element", () => {
      act(() => {
        fireEvent.touchEnd(element);
      });
      return expect(callbackStub).to.not.be.called;
    });
  });
});
