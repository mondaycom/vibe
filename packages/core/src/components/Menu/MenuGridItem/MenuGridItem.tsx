import React, { forwardRef, ReactElement, useCallback, useRef } from "react";
import useMergeRef from "../../../hooks/useMergeRef";
import { GridKeyboardNavigationContext } from "../../GridKeyboardNavigationContext/GridKeyboardNavigationContext";
import { useMenuGridItemNavContext } from "./useMenuGridItemNavContext";
import { useFocusGridItemByActiveStatus } from "./useFocusGridItemByActiveStatus";
import { useFocusWithin } from "../../../hooks/useFocusWithin";
import { VibeComponent, VibeComponentProps } from "../../../types";
import { CloseMenuOption } from "../Menu/MenuConstants";
import { ComponentDefaultTestId, getTestId } from "../../../tests/test-ids-utils";

export interface MenuGridItemProps extends VibeComponentProps {
  children?: ReactElement | ReactElement[];
  /** if true, keyboard navigation will skip on this item. Also, this prop will be passed on to the child **/
  disabled?: boolean;
  /** a callback to close the wrapping menu **/
  closeMenu?: (option: CloseMenuOption) => void;
  /** the currently active index of the wrapping menu **/
  activeItemIndex?: number;
  setActiveItemIndex?: (index: number) => void;
  getNextSelectableIndex?: (activeItemIndex: number) => number;
  getPreviousSelectableIndex?: (activeItemIndex: number) => number;
  /** the index of this item **/
  index?: number;
  /** true if this item is under a submenu, and not a top-level menu **/
  isUnderSubMenu?: boolean;
  setSubMenuIsOpenByIndex?: (index: number, isOpen: boolean) => void;
  useDocumentEventListeners?: boolean;
}

const MenuGridItem: VibeComponent<MenuGridItemProps> & {
  isMenuChild?: boolean;
  isSelectable?: boolean;
} = forwardRef(
  (
    {
      className,
      id,
      children,
      index,
      activeItemIndex = -1,
      closeMenu,
      getNextSelectableIndex,
      getPreviousSelectableIndex,
      setActiveItemIndex,
      setSubMenuIsOpenByIndex,
      isUnderSubMenu = false,
      disabled = false,
      useDocumentEventListeners = false,
      "data-testid": dataTestId
    },
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRef(ref, componentRef);
    const childRef = useRef();

    const child = children && React.Children.only(children);
    if (!child) {
      console.error(
        "MenuGridItem can accept only a single element as first level child, this element is not valid: ",
        child
      );
    }

    const onFocusWithinChange = useCallback(
      (isFocusWithin: boolean) => {
        setSubMenuIsOpenByIndex(index, isFocusWithin);
        if (isFocusWithin) {
          setActiveItemIndex(index);
        }
      },
      [index, setActiveItemIndex, setSubMenuIsOpenByIndex]
    );
    const { focusWithinProps } = useFocusWithin({ onFocusWithinChange });

    useFocusGridItemByActiveStatus({
      wrapperRef: componentRef,
      childRef,
      activeItemIndex,
      index,
      useDocumentEventListeners
    });

    const keyboardContext = useMenuGridItemNavContext({
      wrapperRef: componentRef,
      setActiveItemIndex,
      getPreviousSelectableIndex,
      getNextSelectableIndex,
      activeItemIndex,
      isUnderSubMenu,
      closeMenu
    });

    return (
      <section
        ref={mergedRef}
        className={className}
        id={id}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.MENU_GRID_ITEM, id)}
        tabIndex={-1}
        role="grid"
        {...focusWithinProps}
      >
        <GridKeyboardNavigationContext.Provider value={keyboardContext}>
          {React.cloneElement(child, {
            ...child?.props,
            disabled,
            ref: childRef
          })}
        </GridKeyboardNavigationContext.Provider>
      </section>
    );
  }
);

Object.assign(MenuGridItem, {
  isMenuChild: true,
  isSelectable: true
});

export default MenuGridItem;
