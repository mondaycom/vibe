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
  /**
   * The content of the menu grid item.
   */
  children?: ReactElement | ReactElement[];
  /**
   * If true, keyboard navigation will skip this item. This prop is also passed to the child.
   */
  disabled?: boolean;
  /**
   * A callback function to close the wrapping menu.
   */
  closeMenu?: (option: CloseMenuOption) => void;
  /**
   * The currently active index of the wrapping menu.
   */
  activeItemIndex?: number;
  /**
   * Callback function to set the active item index.
   */
  setActiveItemIndex?: (index: number) => void;
  /**
   * Function to get the next selectable index.
   */
  getNextSelectableIndex?: (activeItemIndex: number) => number;
  /**
   * Function to get the previous selectable index.
   */
  getPreviousSelectableIndex?: (activeItemIndex: number) => number;
  /**
   * The index of this menu grid item.
   */
  index?: number;
  /**
   * If true, this item is under a submenu instead of a top-level menu.
   */
  isUnderSubMenu?: boolean;
  /**
   * Callback function to open or close a submenu by its index.
   */
  setSubMenuIsOpenByIndex?: (index: number, isOpen: boolean) => void;
  /**
   * If true, event listeners will be attached to the document.
   */
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
    }: MenuGridItemProps,
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
