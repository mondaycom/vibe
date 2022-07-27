import React, { useRef, forwardRef, useCallback } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useMergeRefs from "../../../hooks/useMergeRefs";
import "./MenuGridItem.scss";
import { GridKeyboardNavigationContext } from "../../GridKeyboardNavigationContext/GridKeyboardNavigationContext";
import { useMenuGridItemNavContext } from "./useMenuGridItemNavContext";
import { useFocusGridItemByActiveStatus } from "./useFocusGridItemByActiveStatus";
import { useFocusWithin } from "../../../hooks/useFocusWithin";

const MenuGridItem = forwardRef(
  (
    {
      className,
      id,
      children,
      index,
      activeItemIndex,
      closeMenu,
      getNextSelectableIndex,
      getPreviousSelectableIndex,
      setActiveItemIndex,
      setSubMenuIsOpenByIndex,
      isUnderSubMenu,
      disabled,
      useDocumentEventListeners
    },
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });
    const childRef = useRef();

    const child = children && React.Children.only(children);
    if (!child) {
      console.error(
        "MenuGridItem can accept only a single element as first level child, this element is not valid: ",
        child
      );
    }

    const onFocusWithinChange = useCallback(
      isFocusWithin => {
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
      wrapperRef: mergedRef,
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
        className={cx("menu-grid-item--wrapper", className)}
        id={id}
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

MenuGridItem.isMenuChild = true;
MenuGridItem.isSelectable = true;

MenuGridItem.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
  disabled: PropTypes.bool, // if true, keyboard navigation will skip on this item. Also, this prop will be passed on to the child
  closeMenu: PropTypes.func, // a callback to close the wrapping menu
  id: PropTypes.string,
  activeItemIndex: PropTypes.number, // the currently active index of the wrapping menu
  setActiveItemIndex: PropTypes.func,
  getNextSelectableIndex: PropTypes.func,
  getPreviousSelectableIndex: PropTypes.func,
  index: PropTypes.number, // the index of this item
  isUnderSubMenu: PropTypes.bool, // true if this item is under a submenu, and not a top-level menu
  setSubMenuIsOpenByIndex: PropTypes.func,
  useDocumentEventListeners: PropTypes.bool
};

MenuGridItem.defaultProps = {
  children: undefined,
  className: undefined,
  disabled: false,
  id: undefined,
  isUnderSubMenu: false,
  closeMenu: undefined,
  activeItemIndex: -1,
  setActiveItemIndex: undefined,
  index: undefined,
  setSubMenuIsOpenByIndex: undefined,
  getNextSelectableIndex: undefined,
  getPreviousSelectableIndex: undefined,
  useDocumentEventListeners: false
};

export default MenuGridItem;
