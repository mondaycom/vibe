import React, { useMemo, forwardRef, useState, useRef, useCallback, useEffect, useLayoutEffect } from "react";
import { useFocusWithin } from "@react-aria/interactions";
import PropTypes from "prop-types";
import cx from "classnames";
import useMergeRefs from "../../../hooks/useMergeRefs";
import useClickOutside from "../../../hooks/useClickOutside";
import useSubMenuIndex from "./hooks/useSubMenuIndex";
import useOnCloseMenu from "./hooks/useOnCloseMenu";
import useCloseMenuOnKeyEvent from "./hooks/useCloseMenuOnKeyEvent";
import useMenuKeyboardNavigation from "./hooks/useMenuKeyboardNavigation";
import useMouseLeave from "./hooks/useMouseLeave";
import { SIZES } from "../../../constants/sizes";
import "./Menu.scss";

const Menu = forwardRef(
  (
    {
      id,
      classname,
      size,
      tabIndex,
      ariaLabel,
      children: originalChildren,
      isVisible = true,
      onClose,
      focusOnMount,
      focusItemIndex,
      isSubMenu
    },
    forwardedRef
  ) => {
    const ref = useRef(null);
    const [activeItemIndex, setActiveItemIndex] = useState(focusItemIndex);

    const children = useMemo(() => {
      const allChildren = React.Children.toArray(originalChildren);
      const menuChildren = allChildren.filter(child => {
        if (child.type.isMenuChild) return true;
        console.error(
          "Menu child must be a menuChild item (such as MenuItem, MenuDivider, MenuTitle, etc). This child is not supported: ",
          child
        );
        return false;
      });
      return menuChildren;
    }, [originalChildren]);

    const {
      setSubMenuIsOpenByIndex,
      hasOpenSubMenu,
      openSubMenuIndex,
      setOpenSubMenuIndex,
      resetOpenSubMenuIndex
    } = useSubMenuIndex();

    const onCloseMenu = useOnCloseMenu(setActiveItemIndex, setOpenSubMenuIndex, onClose);

    useClickOutside({ ref, callback: onCloseMenu });
    useCloseMenuOnKeyEvent(hasOpenSubMenu, onCloseMenu, ref, onClose, isSubMenu);
    useMenuKeyboardNavigation(
      hasOpenSubMenu,
      children,
      activeItemIndex,
      setActiveItemIndex,
      isVisible,
      ref,
      resetOpenSubMenuIndex
    );
    useMouseLeave(resetOpenSubMenuIndex, hasOpenSubMenu, ref, setActiveItemIndex);

    useLayoutEffect(() => {
      if (hasOpenSubMenu) return;
      if (activeItemIndex > -1) {
        requestAnimationFrame(() => {
          ref && ref.current && ref.current.focus();
        });
      }
    }, [activeItemIndex, hasOpenSubMenu]);

    useLayoutEffect(() => {
      if (!focusOnMount) return;
      requestAnimationFrame(() => {
        ref && ref.current && ref.current.focus();
      });
    }, [ref, focusOnMount]);

    const mergedRef = useMergeRefs({ refs: [ref, forwardedRef] });

    const { focusWithinProps } = useFocusWithin({
      onBlurWithin: _e => {
        onCloseMenu && onCloseMenu();
      }
    });

    return (
      <div
        onFocus={focusWithinProps.onFocus}
        onBlur={focusWithinProps.onBlur}
        id={id}
        className={cx("monday-style-menu", classname, `monday-style-menu--${size}`)}
        ref={mergedRef}
        tabIndex={tabIndex}
        aria-label={ariaLabel}
        role="menu"
      >
        {children &&
          React.Children.map(children, (child, index) => {
            return React.cloneElement(child, {
              ...child?.props,
              activeItemIndex,
              index,
              setActiveItemIndex,
              menuRef: ref,
              resetOpenSubMenuIndex,
              isParentMenuVisible: isVisible,
              setSubMenuIsOpenByIndex,
              hasOpenSubMenu: index === openSubMenuIndex,
              closeMenu: onCloseMenu
            });
          })}
      </div>
    );
  }
);

Menu.isMenu = true;
Menu.supportFocusOnMount = true;
Menu.sizes = SIZES;

Menu.defaultProps = {
  id: undefined,
  focusOnMount: false,
  classname: "",
  size: SIZES.MEDIUM,
  tabIndex: 0,
  ariaLabel: "Menu",
  isVisible: true,
  onClose: undefined,
  focusItemIndex: -1,
  isSubMenu: false
};

Menu.propTypes = {
  id: PropTypes.string,
  classname: PropTypes.string,
  size: PropTypes.oneOf([SIZES.SMALL, SIZES.MEDIUM, SIZES.LARGE]),
  tabIndex: PropTypes.number,
  ariaLabel: PropTypes.string,
  focusOnMount: PropTypes.bool,
  isVisible: PropTypes.bool,
  onClose: PropTypes.func,
  focusItemIndex: PropTypes.number,
  isSubMenu: PropTypes.bool
};

export default Menu;
