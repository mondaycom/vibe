import React, { forwardRef, useLayoutEffect, useState, useRef, useCallback } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useMergeRefs from "../../../hooks/useMergeRefs";
import useKeyEvent from "../../../hooks/useKeyEvent";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import { MENU_SIZES } from "./MenuConstants";
import "./Menu.scss";

const isChildSelectable = (newIndex, children) => {
  const child = children[newIndex];
  return child.type.isSelectable && !child.props.disabled;
};

const Menu = forwardRef(
  (
    { id, classname, size, tabIndex, ariaLabel, children: originalChildren, isVisible = true, closeSubMenu },
    forwardedRef
  ) => {
    const children = React.Children.toArray(originalChildren);
    const ref = useRef(null);
    const refElement = ref && ref.current;
    const [activeItemIndex, setActiveItemIndex] = useState(-1);
    const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null);
    const hasOpenSubMenu = openSubMenuIndex || openSubMenuIndex === 0;

    const setSubMenuIsOpenByIndex = useCallback(
      (index, isOpen) => {
        if (hasOpenSubMenu && index !== openSubMenuIndex) return;

        const isOpenIndexValue = isOpen ? index : null;
        setOpenSubMenuIndex(isOpenIndexValue);
      },
      [openSubMenuIndex, setOpenSubMenuIndex, hasOpenSubMenu]
    );

    const onCloseMenu = useCallback(
      event => {
        setActiveItemIndex(-1);
        setOpenSubMenuIndex(null);
        closeSubMenu && closeSubMenu();
      },
      [closeSubMenu, setOpenSubMenuIndex]
    );

    const onEscapeClick = useCallback(
      event => {
        if (hasOpenSubMenu) return false;
        onCloseMenu();
        if (closeSubMenu) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          refElement && refElement.blur();
        }
      },
      [closeSubMenu, hasOpenSubMenu, refElement, setOpenSubMenuIndex, onCloseMenu]
    );

    useOnClickOutside({ ref, callback: onCloseMenu });

    const onArrowUp = useCallback(() => {
      let newIndex;
      if (hasOpenSubMenu) return false;
      for (let offset = children.length - 1; offset > 0; offset--) {
        newIndex = (activeItemIndex + offset) % children.length;
        if (isChildSelectable(newIndex, children)) {
          break;
        }
      }
      (newIndex || newIndex === 0) && setActiveItemIndex(newIndex);
    }, [setActiveItemIndex, children, activeItemIndex, hasOpenSubMenu]);

    const onArrowDown = useCallback(() => {
      if (hasOpenSubMenu) return false;
      let newIndex;

      if (!children) return;
      for (let offset = 1; offset <= children.length; offset++) {
        newIndex = (activeItemIndex + offset) % children.length;
        if (isChildSelectable(newIndex, children)) {
          break;
        }
      }
      (newIndex || newIndex === 0) && setActiveItemIndex(newIndex);
    }, [setActiveItemIndex, children, activeItemIndex, hasOpenSubMenu]);

    const onEnterClickCallback = useCallback(
      _event => {
        if (!isVisible) return;
        if (activeItemIndex === -1) {
          setActiveItemIndex(0);
        }
      },
      [setActiveItemIndex, activeItemIndex, isVisible]
    );

    useKeyEvent({
      name: "menu ArrowDown",
      keys: ["ArrowDown"],
      callback: onArrowDown
    });

    useKeyEvent({
      name: "menu arrow down",
      keys: ["ArrowUp"],
      callback: onArrowUp
    });

    useKeyEvent({
      keys: ["Enter"],
      callback: onEnterClickCallback
    });

    useKeyEvent({
      keys: ["Escape", "ArrowLeft"],
      callback: onEscapeClick
    });

    const focusParentMenu = useCallback(() => {
      refElement && refElement.focus();
    }, [refElement]);

    const mergedRef = useMergeRefs({ refs: [ref, forwardedRef] });

    return (
      <div
        id={id}
        className={cx("monday-style-menu", classname, `monday-style-menu--${size}`)}
        ref={mergedRef}
        tabIndex={tabIndex}
        aria-label={ariaLabel}
      >
        {children &&
          React.Children.map(children, (child, index) => {
            return React.cloneElement(child, {
              ...child?.props,
              activeItemIndex,
              index,
              focusParentMenu,
              setActiveItemIndex,
              isParentMenuVisible: isVisible,
              setSubMenuIsOpenByIndex,
              hasOpenSubMenu: index === openSubMenuIndex
            });
          })}
      </div>
    );
  }
);

Menu.sizes = MENU_SIZES;

Menu.defaultProps = {
  classname: "",
  size: MENU_SIZES.MEDIUM,
  tabIndex: 0,
  ariaLabel: "Menu"
};

Menu.propTypes = {
  classname: PropTypes.string,
  size: PropTypes.oneOf([MENU_SIZES.SMALL, MENU_SIZES.MEDIUM, MENU_SIZES.LARGE]),
  tabIndex: PropTypes.number,
  ariaLabel: PropTypes.string
};

export default Menu;
