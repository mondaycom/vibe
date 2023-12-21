import { act, cleanup, renderHook } from "@testing-library/react-hooks";
import userEvent from "@testing-library/user-event";
import { NavDirections } from "../../../hooks/useFullKeyboardListeners";
import { GridKeyboardNavigationContext, useGridKeyboardNavigationContext } from "../GridKeyboardNavigationContext";

describe("GridKeyboardNavigationContext", () => {
  let wrapperRef;
  let ref1;
  let ref2;
  let ref3;
  let ref4;
  let ref5;

  beforeEach(() => {
    ref1 = createElementRef("ref1");
    ref2 = createElementRef("ref2");
    ref3 = createElementRef("ref3");
    ref4 = createElementRef("ref4");
    ref5 = createElementRef("ref5");
  });

  afterEach(() => {
    [wrapperRef, ref1, ref2, ref3, ref4, ref5].forEach(ref => ref?.current?.remove());
    cleanup();
  });

  describe("useGridKeyboardNavigationContext", () => {
    it("should focus the element positioned on the direction of onOutboundNavigation", () => {
      const positions = [{ leftElement: ref2, rightElement: ref4 }];
      const keyboardDirection = NavDirections.RIGHT;
      const { result } = renderHookForTest(positions);

      result.current.onOutboundNavigation(ref2, keyboardDirection);

      expect(ref2.current.blur).toHaveBeenCalled();
      expect(ref4.current.focus).toHaveBeenCalled();
    });

    it("should do nothing if there is no element on the direction of onOutboundNavigation", () => {
      const positions = [{ leftElement: ref2, rightElement: ref4 }];
      const keyboardDirection = NavDirections.UP;
      const { result } = renderHookForTest(positions);

      result.current.onOutboundNavigation(ref2, keyboardDirection);

      expect(ref2.current.blur).not.toHaveBeenCalled();
    });

    it("should do nothing if onOutboundNavigation is called when disabled", () => {
      const positions = [{ leftElement: ref2, rightElement: ref4 }];
      const keyboardDirection = NavDirections.RIGHT;
      const { result } = renderHookForTest(positions, true);

      result.current.onOutboundNavigation(ref2, keyboardDirection);

      expect(ref2.current.blur).not.toHaveBeenCalled();
      expect(ref4.current.blur).not.toHaveBeenCalled();
    });

    it("should call the upper context's onOutboundNavigation if there is no element in that direction", () => {
      const positions = [{ leftElement: ref2, rightElement: ref4 }];
      const keyboardDirection = NavDirections.UP;
      const fakeUpperContext = { onOutboundNavigation: jest.fn() };
      const { result } = renderHookWithContext(positions, fakeUpperContext);

      result.current.onOutboundNavigation(ref2, keyboardDirection);

      expect(fakeUpperContext.onOutboundNavigation).toHaveBeenCalledWith(wrapperRef, keyboardDirection);
    });

    it("should not focus any other element when the is no last direction of keyboard navigation, after the wrapper element is focused", () => {
      const positions = [
        { leftElement: ref2, rightElement: ref4 },
        { topElement: ref1, rightElement: ref3 }
      ];

      renderHookForTest(positions);
      focusWrapperElement();

      expect(ref1.current.focus).not.toHaveBeenCalled();
      expect(ref2.current.focus).not.toHaveBeenCalled();
      expect(ref3.current.focus).not.toHaveBeenCalled();
      expect(ref4.current.focus).not.toHaveBeenCalled();
    });

    it("should do nothing if the wrapper element is focused, and the hook is disabled", () => {
      const positions = [{ leftElement: ref2, rightElement: ref4 }];
      renderHookForTest(positions, true);

      act(() => {
        userEvent.keyboard("{ArrowLeft}"); // make sure there's a value for lastNavigationDirection
      });
      focusWrapperElement();

      expect(ref2.current.blur).not.toHaveBeenCalled();
      expect(ref4.current.blur).not.toHaveBeenCalled();
    });

    it("should focus the element in the last direction of keyboard navigation, when the wrapper element is focused", () => {
      const positions = [{ leftElement: ref2, rightElement: ref4 }];

      renderHookForTest(positions);

      act(() => {
        userEvent.keyboard("{ArrowLeft}"); // if the user navigated left, the right-most element should be focused
      });
      focusWrapperElement();

      expect(ref2.current.focus).not.toHaveBeenCalled();
      expect(ref4.current.focus).toHaveBeenCalled();
    });

    function renderHookForTest(positions, disabled = false) {
      wrapperRef = createElementRef("wrapper");
      return renderHook(() => useGridKeyboardNavigationContext(positions, wrapperRef, { disabled }));
    }

    function renderHookWithContext(positions, contextValue) {
      wrapperRef = createElementRef();
      const wrapper = ({ children }) => (
        <GridKeyboardNavigationContext.Provider value={contextValue}>{children}</GridKeyboardNavigationContext.Provider>
      );
      return renderHook(() => useGridKeyboardNavigationContext(positions, wrapperRef), { wrapper });
    }

    function focusWrapperElement() {
      act(() => {
        wrapperRef.current.dispatchEvent(new Event("focus")); //jsdom's .focus() isn't working as it should, so we fire our own event
      });
    }
  });

  function createElementRef(id) {
    const element = document.createElement("div");
    element.id = id;
    document.body.appendChild(element);
    jest.spyOn(element, "blur");
    jest.spyOn(element, "focus");
    return { current: element };
  }
});
