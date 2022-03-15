import { cleanup, renderHook } from "@testing-library/react-hooks";
import { NAV_DIRECTIONS } from "../../../hooks/useFullKeyboardListeners";
import { GridKeyboardNavigationContext, useGridKeyboardNavigationContext } from "../GridKeyboardNavigationContext";

describe("GridKeyboardNavigationContext", () => {
  let wrapperRef;
  let ref1;
  let ref2;
  let ref3;
  let ref4;
  let ref5;

  beforeEach(() => {
    ref1 = createElementRef();
    ref2 = createElementRef();
    ref3 = createElementRef();
    ref4 = createElementRef();
    ref5 = createElementRef();
  });

  afterEach(() => {
    [wrapperRef, ref1, ref2, ref3, ref4, ref5].forEach(ref => ref?.current?.remove());
    cleanup();
  });

  describe("useGridKeyboardNavigationContext", () => {
    it("should focus the element positioned on the direction of onOutboundNavigation", () => {
      const positions = [{ leftElement: ref2, rightElement: ref4 }];
      const keyboardDirection = NAV_DIRECTIONS.RIGHT;
      const { result } = renderHookForTest(positions);

      result.current.onOutboundNavigation(ref2, keyboardDirection);

      expect(ref2.current.blur).toHaveBeenCalled();
      expect(ref4.current.focus).toHaveBeenCalled();
    });

    it("should do nothing if there is no element on the direction of onOutboundNavigation", () => {
      const positions = [{ leftElement: ref2, rightElement: ref4 }];
      const keyboardDirection = NAV_DIRECTIONS.UP;
      const { result } = renderHookForTest(positions);

      result.current.onOutboundNavigation(ref2, keyboardDirection);

      expect(ref2.current.blur).not.toHaveBeenCalled();
      expect(ref4.current.dispatchEvent).not.toHaveBeenCalled();
    });

    it("should do nothing if onOutboundNavigation is called when disabled", () => {
      const positions = [{ leftElement: ref2, rightElement: ref4 }];
      const keyboardDirection = NAV_DIRECTIONS.RIGHT;
      const { result } = renderHookForTest(positions, true);

      result.current.onOutboundNavigation(ref2, keyboardDirection);

      expect(ref2.current.blur).not.toHaveBeenCalled();
      expect(ref2.current.dispatchEvent).not.toHaveBeenCalled();
      expect(ref4.current.blur).not.toHaveBeenCalled();
      expect(ref4.current.dispatchEvent).not.toHaveBeenCalled();
    });

    it("should call the upper context's onOutboundNavigation if there is no element in that direction", () => {
      const positions = [{ leftElement: ref2, rightElement: ref4 }];
      const keyboardDirection = NAV_DIRECTIONS.UP;
      const fakeUpperContext = { onOutboundNavigation: jest.fn() };
      const { result } = renderHookWithContext(positions, fakeUpperContext);

      result.current.onOutboundNavigation(ref2, keyboardDirection);

      expect(fakeUpperContext.onOutboundNavigation).toHaveBeenCalledWith(wrapperRef, keyboardDirection);
    });

    function renderHookForTest(positions, disabled = false) {
      wrapperRef = createElementRef();
      return renderHook(() => useGridKeyboardNavigationContext(positions, wrapperRef, { disabled }));
    }

    function renderHookWithContext(positions, contextValue) {
      wrapperRef = createElementRef();
      const wrapper = ({ children }) => (
        <GridKeyboardNavigationContext.Provider value={contextValue}>{children}</GridKeyboardNavigationContext.Provider>
      );
      return renderHook(() => useGridKeyboardNavigationContext(positions, wrapperRef), { wrapper });
    }
  });

  function createElementRef() {
    const element = document.createElement("div");
    document.body.appendChild(element);
    jest.spyOn(element, "blur");
    jest.spyOn(element, "focus");
    jest.spyOn(element, "dispatchEvent");
    return { current: element };
  }
});
