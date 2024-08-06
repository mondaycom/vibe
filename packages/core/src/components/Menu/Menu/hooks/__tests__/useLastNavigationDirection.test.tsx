import { renderHook, act } from "@testing-library/react-hooks";
import userEvent from "@testing-library/user-event";
import { NavDirections } from "../../../../../hooks/useFullKeyboardListeners";
import { useLastNavigationDirection } from "../useLastNavigationDirection";

describe("useLastNavigationDirection", () => {
  it("should return undefined when no direction key was pressed yet", () => {
    const { result } = renderHookForTest();

    expect(result.current.lastNavigationDirectionRef.current).toBeUndefined();
  });

  it("should return undefined when only non-direction keys were pressed", () => {
    const { result } = renderHookForTest();

    act(() => {
      userEvent.keyboard("f");
    });

    expect(result.current.lastNavigationDirectionRef.current).toBeUndefined();
  });

  [
    { key: "ArrowUp", direction: NavDirections.UP },
    { key: "ArrowLeft", direction: NavDirections.LEFT },
    { key: "ArrowRight", direction: NavDirections.RIGHT },
    { key: "ArrowDown", direction: NavDirections.DOWN }
  ].forEach(({ key, direction }) => {
    it(`should return direction "${direction}" when pressing the key "${key}"`, () => {
      const { result } = renderHookForTest();

      act(() => {
        userEvent.keyboard(`{${key}}`);
      });

      expect(result.current.lastNavigationDirectionRef.current).toBe(direction);
    });

    it(`should return direction "${direction}" when pressing the key "${key}" after another direction key`, () => {
      const otherDirectionKey = key === "ArrowUp" ? "ArrowDown" : "ArrowUp";
      const { result } = renderHookForTest();

      act(() => {
        userEvent.keyboard(`{${otherDirectionKey}}{${key}}`);
      });

      expect(result.current.lastNavigationDirectionRef.current).toBe(direction);
    });

    it(`should return direction "${direction}" when pressing the key "${key}" after another non-direction keys`, () => {
      const { result } = renderHookForTest();

      act(() => {
        userEvent.keyboard(`something{${key}}`);
      });

      expect(result.current.lastNavigationDirectionRef.current).toBe(direction);
    });

    it(`should return direction "${direction}" when pressing the key "${key}" and THEN non-direction keys`, () => {
      const { result } = renderHookForTest();

      act(() => {
        userEvent.keyboard(`{${key}}something`);
      });

      expect(result.current.lastNavigationDirectionRef.current).toBe(direction);
    });
  });

  it("should clear the last navigation direction after using the mouse", () => {
    const { result } = renderHookForTest();

    act(() => {
      userEvent.keyboard("{ArrowUp}");
    });
    act(() => {
      userEvent.click(document.body);
    });

    expect(result.current.lastNavigationDirectionRef.current).toBe(undefined);
  });

  function renderHookForTest() {
    return renderHook(() => useLastNavigationDirection());
  }
});
