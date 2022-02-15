import { cleanup, renderHook } from "@testing-library/react-hooks";
import { NAV_DIRECTIONS } from "../../../../hooks/useFullKeyboardListeners";
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
    jest.resetAllMocks();
  });

  describe("onOutboundNavigation", () => {
    const outBoundingElement = document.createElement("span");

    it("should call the parent GridKeyboardNavigationContext", () => {
      const mockedInnerUseContext = { onOutboundNavigation: jest.fn() };
      const { result } = renderHookForTest({ mockedInnerUseContext });

      result.current.onOutboundNavigation(outBoundingElement, NAV_DIRECTIONS.UP);

      expect(mockedInnerUseContext.onOutboundNavigation).toHaveBeenCalledWith(outBoundingElement, NAV_DIRECTIONS.UP);
    });

    it("should set the previous item as active when navigating up", () => {
      const getPreviousSelectableIndex = jest.fn().mockReturnValue(10);
      const setActiveItemIndex = jest.fn();
      const { result } = renderHookForTest({ activeItemIndex: 15, getPreviousSelectableIndex, setActiveItemIndex });

      result.current.onOutboundNavigation(outBoundingElement, NAV_DIRECTIONS.UP);

      expect(getPreviousSelectableIndex).toHaveBeenCalledTimes(1);
      expect(getPreviousSelectableIndex).toHaveBeenCalledWith(15);
      expect(setActiveItemIndex).toHaveBeenCalledTimes(1);
      expect(setActiveItemIndex).toHaveBeenCalledWith(10);
    });

    it("should set the next item as active when navigating down", () => {
      const getNextSelectableIndex = jest.fn().mockReturnValue(20);
      const setActiveItemIndex = jest.fn();
      const { result } = renderHookForTest({ activeItemIndex: 15, getNextSelectableIndex, setActiveItemIndex });

      result.current.onOutboundNavigation(outBoundingElement, NAV_DIRECTIONS.DOWN);

      expect(getNextSelectableIndex).toHaveBeenCalledTimes(1);
      expect(getNextSelectableIndex).toHaveBeenCalledWith(15);
      expect(setActiveItemIndex).toHaveBeenCalledTimes(1);
      expect(setActiveItemIndex).toHaveBeenCalledWith(20);
    });

    it("should do nothing when not under a sub menu and pressing left", () => {
      const setActiveItemIndex = jest.fn();
      const closeMenu = jest.fn();
      const { result } = renderHookForTest({ setActiveItemIndex, closeMenu });

      result.current.onOutboundNavigation(outBoundingElement, NAV_DIRECTIONS.LEFT);

      expect(setActiveItemIndex).not.toHaveBeenCalled();
      expect(closeMenu).not.toHaveBeenCalled();
    });

    it("should close the sub menu and pressing left", () => {
      const closeMenu = jest.fn();
      const { result } = renderHookForTest({ closeMenu, isUnderSubMenu: true });

      result.current.onOutboundNavigation(outBoundingElement, NAV_DIRECTIONS.LEFT);

      expect(closeMenu).toHaveBeenCalledTimes(1);
    });

    function renderHookForTest({
      setActiveItemIndex = jest.fn(),
      getNextSelectableIndex = jest.fn(),
      getPreviousSelectableIndex = jest.fn(),
      activeItemIndex = 0,
      isUnderSubMenu = false,
      closeMenu = jest.fn(),
      mockedInnerUseContext = { onOutboundNavigation: jest.fn() }
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
