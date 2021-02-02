import React from "react";
import { sinon, expect } from "../test/test-helpers";
import { renderHook, cleanup, act } from "@testing-library/react-hooks";
import useDebounceEvent from "./useDebounceEvent";

describe("useDebounceEvent", () => {
  const delay = 0;
  const initialStateValue = "";
  let onChangeCallbackStub;
  let hookResult;

  beforeEach(() => {
    onChangeCallbackStub = sinon.stub();
    hookResult = renderHook(() =>
      useDebounceEvent({
        delay,
        initialStateValue,
        onChange: onChangeCallbackStub
      })
    );
  });

  afterEach(() => {
    onChangeCallbackStub.reset();
    cleanup();
  });

  describe("return types", () => {
    it("should give a callback function", () => {
      expect(typeof hookResult.result.current.onEventChanged).to.equal("function");
    });

    it("should give a clear function", () => {
      expect(typeof hookResult.result.current.clearValue).to.equal("function");
    });

    it("should give a update function", () => {
      expect(typeof hookResult.result.current.updateValue).to.equal("function");
    });

    it("should give the value ", () => {
      expect(typeof hookResult.result.current.inputValue).to.equal("string");
    });
  });
  describe("updating the value with input event", () => {
    it("should update the value", () => {
      const { onEventChanged } = hookResult.result.current;
      const newInputValue = "input value";

      act(() => {
        onEventChanged(getEventObject(newInputValue));
      });

      expect(hookResult.result.current.inputValue).to.equal(newInputValue);
    });

    it("should trim the value", () => {
      const hookRes = renderHook(() =>
        useDebounceEvent({
          delay: 0,
          trim: true,
          onChange: onChangeCallbackStub,
          initialStateValue: ""
        })
      );

      const { onEventChanged } = hookRes.result.current;
      const newInputValue = "value     ";
      act(() => {
        onEventChanged(getEventObject(newInputValue));
      });
      expect(hookRes.result.current.inputValue).to.equal(newInputValue.trim());
    });

    it("should clear the value", () => {
      const { clearValue } = hookResult.result.current;

      act(() => {
        clearValue();
      });

      expect(hookResult.result.current.inputValue).to.equal("");
    });

    it("should call onChange with the correct value", () => {
      const { onEventChanged } = hookResult.result.current;
      const newInputValue = "input value";

      act(() => {
        onEventChanged(getEventObject(newInputValue));
      });

      expect(onChangeCallbackStub).to.be.calledWith(newInputValue);
    });
  });
  describe("debounced", () => {
    const additionalDelay = 200;
    let clock;
    beforeEach(() => {
      clock = sinon.useFakeTimers();
      hookResult = renderHook(() =>
        useDebounceEvent({
          delay: additionalDelay,
          initialStateValue,
          onChange: onChangeCallbackStub
        })
      );
    });

    afterEach(() => {
      clock.reset();
    });

    it("should not call the onChange immediately ", () => {
      const { onEventChanged } = hookResult.result.current;
      const newInputValue = "input value";
      act(() => {
        onEventChanged(getEventObject(newInputValue));
      });
      expect(onChangeCallbackStub).to.not.be.called;
    });

    it("should not call the onChange before the timer passes ", () => {
      const { onEventChanged } = hookResult.result.current;
      const newInputValue = "input value";
      act(() => {
        onEventChanged(getEventObject(newInputValue));
      });
      clock.tick(additionalDelay - 1);

      expect(onChangeCallbackStub).to.not.be.called;
    });

    it("should not call the onChange immediately ", () => {
      const { onEventChanged } = hookResult.result.current;
      const newInputValue = "input value";
      act(() => {
        onEventChanged(getEventObject(newInputValue));
      });
      clock.tick(additionalDelay + 1);
      expect(onChangeCallbackStub).to.be.called;
    });
  });
});

function getEventObject(value) {
  return {
    target: { value }
  };
}
