import { renderHook, cleanup, act } from "@testing-library/react-hooks";
import { fireEvent } from "@testing-library/react";
import useKeyEvent from "../useKeyEvent";

describe("useKeyEvent", () => {
  let element: HTMLElement;
  let callbackStub: jest.Mock;
  describe("single key", () => {
    const keys = ["Enter"];
    beforeEach(() => {
      callbackStub = jest.fn();
      element = document.createElement("div");
      document.body.appendChild(element);
      renderHook(() =>
        useKeyEvent({
          keys,
          keyEventName: "keyup",
          ref: { current: element },
          callback: callbackStub
        })
      );
    });

    afterEach(() => {
      element.remove();
      cleanup();
    });

    it(`should call the callback with the ${keys[0]} key`, () => {
      act(() => {
        fireEvent.keyUp(element, {
          key: keys[0]
        });
      });
      expect(callbackStub.mock.calls.length).toEqual(1);
    });

    it(`should not call the callback with a different key`, () => {
      act(() => {
        fireEvent.keyUp(element, {
          key: "Escape"
        });
      });

      expect(callbackStub.mock.calls.length).toEqual(0);
    });

    it("should not call on keyDown", () => {
      act(() => {
        fireEvent.keyDown(element, {
          key: keys[0]
        });
      });
      expect(callbackStub.mock.calls.length).toEqual(0);
    });
  });

  describe("single key with ALT modifier", () => {
    const keys = ["Enter"];
    beforeEach(() => {
      callbackStub = jest.fn();
      element = document.createElement("div");
      document.body.appendChild(element);
      renderHook(() =>
        useKeyEvent({
          keys,
          keyEventName: "keyup",
          ref: { current: element },
          callback: callbackStub,
          modifier: useKeyEvent.modifiers.ALT
        })
      );
    });

    afterEach(() => {
      element.remove();
      cleanup();
    });

    it(`should call the callback with the ${keys[0]} key and ALT key`, () => {
      act(() => {
        fireEvent.keyUp(element, {
          key: keys[0],
          altKey: true
        });
      });
      expect(callbackStub.mock.calls.length).toEqual(1);
    });

    it(`should not call the callback with the key but without modifiers`, () => {
      act(() => {
        fireEvent.keyUp(element, {
          key: keys[0]
        });
      });

      expect(callbackStub.mock.calls.length).toEqual(0);
    });

    it(`should not call the callback with the key but with other modifier`, () => {
      act(() => {
        fireEvent.keyUp(element, {
          key: keys[0],
          shiftKey: true
        });
      });

      expect(callbackStub.mock.calls.length).toEqual(0);
    });
  });

  describe("single key with CTRL_OR_META modifier", () => {
    const keys = ["Enter"];
    beforeEach(() => {
      callbackStub = jest.fn();
      element = document.createElement("div");
      document.body.appendChild(element);
      renderHook(() =>
        useKeyEvent({
          keys,
          keyEventName: "keyup",
          ref: { current: element },
          callback: callbackStub,
          modifier: useKeyEvent.modifiers.CTRL_OR_META
        })
      );
    });

    afterEach(() => {
      element.remove();
      cleanup();
    });

    it(`should call the callback with the ${keys[0]} key and CTRL key`, () => {
      act(() => {
        fireEvent.keyUp(element, {
          key: keys[0],
          ctrlKey: true
        });
      });
      expect(callbackStub.mock.calls.length).toEqual(1);
    });

    it(`should call the callback with the ${keys[0]} key and META key`, () => {
      act(() => {
        fireEvent.keyUp(element, {
          key: keys[0],
          metaKey: true
        });
      });
      expect(callbackStub.mock.calls.length).toEqual(1);
    });

    it(`should not call the callback with the key but without modifiers`, () => {
      act(() => {
        fireEvent.keyUp(element, {
          key: keys[0]
        });
      });

      expect(callbackStub.mock.calls.length).toEqual(0);
    });

    it(`should not call the callback with the key but with other modifier`, () => {
      act(() => {
        fireEvent.keyUp(element, {
          key: keys[0],
          shiftKey: true
        });
      });

      expect(callbackStub.mock.calls.length).toEqual(0);
    });

    it(`should not call the callback with other key but with modifiers`, () => {
      act(() => {
        fireEvent.keyUp(element, {
          key: "Esc",
          metaKey: true
        });
      });

      expect(callbackStub.mock.calls.length).toEqual(0);
    });
  });

  describe("multiple keys", () => {
    const keys = ["Enter", "Esc", "Escape"];
    beforeEach(() => {
      callbackStub = jest.fn();
      element = document.createElement("div");
      document.body.appendChild(element);
      renderHook(() => {
        useKeyEvent({
          keys,
          keyEventName: "keyup",
          ref: { current: element },
          callback: callbackStub
        });
      });
    });

    afterEach(() => {
      element.remove();
      cleanup();
    });

    it(`should not call the callback with the ${keys[0]} key`, () => {
      act(() => {
        fireEvent.keyUp(element, {
          key: keys[0]
        });
      });
      expect(callbackStub.mock.calls.length).toEqual(1);
    });

    it(`should call the callback with a different key - ${keys[1]}`, () => {
      act(() => {
        fireEvent.keyUp(element, {
          key: keys[1]
        });
      });

      expect(callbackStub.mock.calls.length).toEqual(1);
    });
  });
});
