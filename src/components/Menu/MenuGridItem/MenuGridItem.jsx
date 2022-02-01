import React, { useRef, forwardRef, useCallback } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { useFocusWithin } from "@react-aria/interactions";
import useMergeRefs from "../../../hooks/useMergeRefs";
import "./MenuGridItem.scss";
import { GridKeyboardNavigationContext } from "../../GridKeyboardNavigationContext/GridKeyboardNavigationContext";
import { useMenuGridItemNavContext } from "./useMenuGridItemNavContext";
import { useFocusGridItemByActiveStatus } from "./useFocusGridItemByActiveStatus";

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
      disabled
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

    useFocusGridItemByActiveStatus({ wrapperRef: componentRef, childRef, activeItemIndex, index });

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
      <div
        ref={mergedRef}
        className={cx("menu-grid-item--wrapper", className)}
        id={id}
        tabIndex={-1}
        {...focusWithinProps}
      >
        <GridKeyboardNavigationContext.Provider value={keyboardContext}>
          {React.cloneElement(child, {
            ...child?.props,
            disabled,
            ref: childRef
          })}
        </GridKeyboardNavigationContext.Provider>
      </div>
    );
  }
);

MenuGridItem.isMenuChild = true;
MenuGridItem.isSelectable = true;

MenuGridItem.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool, // if true, keyboard navigation will skip on this item. Also, this prop will be passed on to the child
  closeMenu: PropTypes.func.isRequired, // a callback to close the wrapping menu
  id: PropTypes.string,
  activeItemIndex: PropTypes.number.isRequired, // the currently active index of the wrapping menu
  setActiveItemIndex: PropTypes.func.isRequired,
  getNextSelectableIndex: PropTypes.func.isRequired,
  getPreviousSelectableIndex: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired, // the index of this item
  isUnderSubMenu: PropTypes.bool, // true if this item is under a submenu, and not a top-level menu
  setSubMenuIsOpenByIndex: PropTypes.func.isRequired
};

MenuGridItem.defaultProps = {
  disabled: false,
  id: undefined,
  className: undefined,
  isUnderSubMenu: false
};

export default MenuGridItem;
