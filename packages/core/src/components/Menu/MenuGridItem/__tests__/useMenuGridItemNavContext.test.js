import { cleanup, renderHook } from "@testing-library/react-hooks";
import { NavDirections } from "../../../../hooks/useFullKeyboardListeners";
import * as GridKeyboardNavigationContextModule from "../../../GridKeyboardNavigationContext/GridKeyboardNavigationContext";
import { useMenuGridItemNavContext } from "../useMenuGridItemNavContext";

describe("useMenuGridItemNavContext", () => {
  let element;
  let elementRef;

  beforeEach(() => {
    element = document.createElement("div");
    document.body.appendChild(element);

    elementRef = { current: element };
  });

  afterEach(() => {
    element.remove();
    cleanup();
    vi.resetAllMocks();
  });

  describe("onOutboundNavigation", () => {
    const outBoundingElement = document.createElement("span");

    it("should call the parent GridKeyboardNavigationContext", () => {
      const mockedInnerUseContext = { onOutboundNavigation: vi.fn() };
      const { result } = renderHookForTest({ mockedInnerUseContext });

      result.current.onOutboundNavigation(outBoundingElement, NavDirections.UP);

      expect(mockedInnerUseContext.onOutboundNavigation).toHaveBeenCalledWith(outBoundingElement, NavDirections.UP);
    });

    it("should set the previous item as active when navigating up", () => {
      const getPreviousSelectableIndex = vi.fn().mockReturnValue(10);
      const setActiveItemIndex = vi.fn();
      const { result } = renderHookForTest({ activeItemIndex: 15, getPreviousSelectableIndex, setActiveItemIndex });

      result.current.onOutboundNavigation(outBoundingElement, NavDirections.UP);

      expect(getPreviousSelectableIndex).toHaveBeenCalledTimes(1);
      expect(getPreviousSelectableIndex).toHaveBeenCalledWith(15);
      expect(setActiveItemIndex).toHaveBeenCalledTimes(1);
      expect(setActiveItemIndex).toHaveBeenCalledWith(10);
    });

    it("should set the next item as active when navigating down", () => {
      const getNextSelectableIndex = vi.fn().mockReturnValue(20);
      const setActiveItemIndex = vi.fn();
      const { result } = renderHookForTest({ activeItemIndex: 15, getNextSelectableIndex, setActiveItemIndex });

      result.current.onOutboundNavigation(outBoundingElement, NavDirections.DOWN);

      expect(getNextSelectableIndex).toHaveBeenCalledTimes(1);
      expect(getNextSelectableIndex).toHaveBeenCalledWith(15);
      expect(setActiveItemIndex).toHaveBeenCalledTimes(1);
      expect(setActiveItemIndex).toHaveBeenCalledWith(20);
    });

    it("should do nothing when not under a sub menu and pressing left", () => {
      const setActiveItemIndex = vi.fn();
      const closeMenu = vi.fn();
      const { result } = renderHookForTest({ setActiveItemIndex, closeMenu });

      result.current.onOutboundNavigation(outBoundingElement, NavDirections.LEFT);

      expect(setActiveItemIndex).not.toHaveBeenCalled();
      expect(closeMenu).not.toHaveBeenCalled();
    });

    it("should close the sub menu and pressing left", () => {
      const closeMenu = vi.fn();
      const { result } = renderHookForTest({ closeMenu, isUnderSubMenu: true });

      result.current.onOutboundNavigation(outBoundingElement, NavDirections.LEFT);

      expect(closeMenu).toHaveBeenCalledTimes(1);
    });

    function renderHookForTest({
      setActiveItemIndex = vi.fn(),
      getNextSelectableIndex = vi.fn(),
      getPreviousSelectableIndex = vi.fn(),
      activeItemIndex = 0,
      isUnderSubMenu = false,
      closeMenu = vi.fn(),
      mockedInnerUseContext = { onOutboundNavigation: vi.fn() }
    }) {
      jest
        .spyOn(GridKeyboardNavigationContextModule, "useGridKeyboardNavigationContext")
        .mockReturnValue(mockedInnerUseContext);

      return renderHook(() =>
        useMenuGridItemNavContext({
          wrapperRef: elementRef,
          setActiveItemIndex,
          getNextSelectableIndex,
          getPreviousSelectableIndex,
          activeItemIndex,
          isUnderSubMenu,
          closeMenu
        })
      );
    }
  });
});
