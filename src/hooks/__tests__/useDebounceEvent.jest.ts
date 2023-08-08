import { renderHook, cleanup, act, RenderHookResult } from "@testing-library/react-hooks";
import useDebounceEvent, { UseDebounceResult } from "../useDebounceEvent";
import { ChangeEvent } from "react";

describe("useDebounceEvent", () => {
  const delay = 0;
  const initialStateValue = "";
  let onChangeCallbackStub: jest.Mock;
  let hookResult: RenderHookResult<unknown, UseDebounceResult>;

  beforeEach(() => {
    onChangeCallbackStub = jest.fn();
    hookResult = renderHook(() =>
      useDebounceEvent({
        delay,
        initialStateValue,
        onChange: onChangeCallbackStub
      })
    );
  });

  afterEach(() => {
    cleanup();
  });

  describe("return types", () => {
    it("should give a callback function", () => {
      expect(typeof hookResult.result.current.onEventChanged).toEqual("function");
    });

    it("should give a clear function", () => {
      expect(typeof hookResult.result.current.clearValue).toEqual("function");
    });

    it("should give a update function", () => {
      expect(typeof hookResult.result.current.updateValue).toEqual("function");
    });

    it("should give the value ", () => {
      expect(typeof hookResult.result.current.inputValue).toEqual("string");
    });
  });
  describe("updating the value with input event", () => {
    it("should update the value", () => {
      const { onEventChanged } = hookResult.result.current;
      const newInputValue = "input value";

      act(() => {
        onEventChanged(getEventObject(newInputValue));
      });

      expect(hookResult.result.current.inputValue).toEqual(newInputValue);
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
      expect(hookRes.result.current.inputValue).toEqual(newInputValue.trim());
    });

    it("should clear the value", () => {
      const { clearValue } = hookResult.result.current;

      act(() => {
        clearValue();
      });

      expect(hookResult.result.current.inputValue).toEqual("");
    });

    it("should call onChange with the correct value", () => {
      const { onEventChanged } = hookResult.result.current;
      const newInputValue = "input value";

      act(() => {
        onEventChanged(getEventObject(newInputValue));
      });

      expect(onChangeCallbackStub.mock.calls[0][0]).toEqual(newInputValue);
    });
  });
  describe("debounced", () => {
    const additionalDelay = 200;

    beforeEach(() => {
      jest.useFakeTimers("modern");

      hookResult = renderHook(() =>
        useDebounceEvent({
          delay: additionalDelay,
          initialStateValue,
          onChange: onChangeCallbackStub
        })
      );
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    it("should not call the onChange immediately ", () => {
      const { onEventChanged } = hookResult.result.current;
      const newInputValue = "input value";
      act(() => {
        onEventChanged(getEventObject(newInputValue));
      });
      expect(onChangeCallbackStub.mock.calls.length).toEqual(0);
    });

    it("should not call the onChange before the timer passes ", () => {
      const { onEventChanged } = hookResult.result.current;
      const newInputValue = "input value";
      act(() => {
        onEventChanged(getEventObject(newInputValue));
      });
      jest.advanceTimersByTime(additionalDelay - 1);

      expect(onChangeCallbackStub.mock.calls.length).toEqual(0);
    });

    it("should be called after the timeout ", () => {
      const { onEventChanged } = hookResult.result.current;
      const newInputValue = "input value";
      act(() => {
        onEventChanged(getEventObject(newInputValue));
      });

      jest.runOnlyPendingTimers();

      expect(onChangeCallbackStub.mock.calls.length).toEqual(1);
    });
  });
});

function getEventObject(value: string): ChangeEvent<Partial<HTMLInputElement>> {
  return {
    bubbles: false,
    cancelable: false,
    currentTarget: undefined,
    defaultPrevented: false,
    eventPhase: 0,
    isTrusted: false,
    nativeEvent: undefined,
    timeStamp: 0,
    type: "",
    isDefaultPrevented(): boolean {
      return false;
    },
    isPropagationStopped(): boolean {
      return false;
    },
    persist(): void {},
    preventDefault(): void {},
    stopPropagation(): void {},
    target: {
      value,
      addEventListener(): void {},
      dispatchEvent(): boolean {
        return false;
      },
      removeEventListener(): void {}
    }
  };
}
