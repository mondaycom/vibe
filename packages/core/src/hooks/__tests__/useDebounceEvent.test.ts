import { vi, beforeEach, afterEach, describe, it, expect, type Mock } from "vitest";
import { renderHook, cleanup, act, type RenderHookResult } from "@testing-library/react-hooks";
import useDebounceEvent, { type UseDebounceResult } from "../useDebounceEvent";
import { type ChangeEvent } from "react";

describe("useDebounceEvent", () => {
  const delay = 0;
  let onChangeCallbackStub: Mock;
  let hookResult: RenderHookResult<unknown, UseDebounceResult>;

  beforeEach(() => {
    onChangeCallbackStub = vi.fn();
    hookResult = renderHook(() =>
      useDebounceEvent({
        delay,
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
  });

  describe("callback invocation", () => {
    it("should call onChange with the correct value", () => {
      const { onEventChanged } = hookResult.result.current;
      const newInputValue = "input value";

      act(() => {
        onEventChanged(getEventObject(newInputValue));
      });

      expect(onChangeCallbackStub).toHaveBeenCalledWith(newInputValue);
    });

    it("should call onChange with trimmed value when trim is enabled", () => {
      const hookRes = renderHook(() =>
        useDebounceEvent({
          delay: 0,
          trim: true,
          onChange: onChangeCallbackStub
        })
      );

      const { onEventChanged } = hookRes.result.current;
      const newInputValue = "value     ";
      act(() => {
        onEventChanged(getEventObject(newInputValue));
      });
      expect(onChangeCallbackStub).toHaveBeenCalledWith(newInputValue.trim());
    });

    it("should call onChange with empty string when clearValue is called", () => {
      const { clearValue } = hookResult.result.current;

      act(() => {
        clearValue();
      });

      expect(onChangeCallbackStub).toHaveBeenCalledWith("");
    });
  });

  describe("debounced", () => {
    const additionalDelay = 200;

    beforeEach(() => {
      vi.useFakeTimers();

      hookResult = renderHook(() =>
        useDebounceEvent({
          delay: additionalDelay,
          onChange: onChangeCallbackStub
        })
      );
    });

    afterEach(() => {
      vi.useRealTimers();
    });

    it("should not call the onChange immediately", () => {
      const { onEventChanged } = hookResult.result.current;
      const newInputValue = "input value";
      act(() => {
        onEventChanged(getEventObject(newInputValue));
      });
      expect(onChangeCallbackStub.mock.calls.length).toEqual(0);
    });

    it("should not call the onChange before the timer passes", () => {
      const { onEventChanged } = hookResult.result.current;
      const newInputValue = "input value";
      act(() => {
        onEventChanged(getEventObject(newInputValue));
      });
      vi.advanceTimersByTime(additionalDelay - 1);

      expect(onChangeCallbackStub.mock.calls.length).toEqual(0);
    });

    it("should be called after the timeout", () => {
      const { onEventChanged } = hookResult.result.current;
      const newInputValue = "input value";
      act(() => {
        onEventChanged(getEventObject(newInputValue));
      });

      vi.runOnlyPendingTimers();

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
