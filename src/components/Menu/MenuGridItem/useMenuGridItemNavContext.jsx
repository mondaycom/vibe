import { useMemo } from "react";
import { NAV_DIRECTIONS } from "../../../hooks/useFullKeyboardListeners";
import { useGridKeyboardNavigationContext } from "../../GridKeyboardNavigationContext/GridKeyboardNavigationContext";

export const useMenuGridItemNavContext = ({
  wrapperRef,
  setActiveItemIndex,
  getPreviousSelectableIndex,
  getNextSelectableIndex,
  activeItemIndex,
  isUnderSubMenu,
  closeMenu
}) => {
  /*
   * This is an "adapter" between the Grid Keyboard Navigation mechanism and the Menu navigation mechanism.
   * Currently, the two mechanisms work a bit differently.
   * In the future, when the Menu component will use a GridKeyboardNavigationContext, this adapter shouldn't be needed anymore.
   */
  const innerKeyboardContext = useGridKeyboardNavigationContext([], wrapperRef);
  const keyboardContext = useMemo(
    () => ({
      onOutboundNavigation: (elementRef, direction) => {
        innerKeyboardContext.onOutboundNavigation(elementRef, direction);

        switch (direction) {
          case NAV_DIRECTIONS.UP:
            return setActiveItemIndex(getPreviousSelectableIndex(activeItemIndex));
          case NAV_DIRECTIONS.DOWN:
            return setActiveItemIndex(getNextSelectableIndex(activeItemIndex));
          case NAV_DIRECTIONS.LEFT:
            if (isUnderSubMenu) {
              closeMenu();
            }
        }
      }
    }),
    [
      innerKeyboardContext,
      setActiveItemIndex,
      getPreviousSelectableIndex,
      activeItemIndex,
      getNextSelectableIndex,
      isUnderSubMenu,
      closeMenu
    ]
  );

  return keyboardContext;
};
