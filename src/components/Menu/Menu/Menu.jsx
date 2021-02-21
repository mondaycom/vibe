import React, { useMemo, forwardRef, useState, useRef, useCallback, useEffect, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useMergeRefs from "../../../hooks/useMergeRefs";
import useClickOutside from "../../../hooks/useClickOutside";
import useSubMenuIndex from "./hooks/useSubMenuIndex";
import useOnCloseMenu from "./hooks/useOnCloseMenu";
import useCloseMenuOnKeyEvent from "./hooks/useCloseMenuOnKeyEvent";
import useMenuKeyboardNavigation from "./hooks/useMenuKeyboardNavigation";
import useMouseLeave from "./hooks/useMouseLeave";
import useMenuBlur from "./hooks/useMenuBlur";
import { MENU_SIZES } from "./MenuConstants";
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
      closeSubMenu,
      focusOnMount
    },
    forwardedRef
  ) => {
    const ref = useRef(null);
    const [activeItemIndex, setActiveItemIndex] = useState(-1);

    const children = useMemo(() => {
      return React.Children.toArray(originalChildren);
    }, [originalChildren]);

    const {
      setSubMenuIsOpenByIndex,
      hasOpenSubMenu,
      openSubMenuIndex,
      setOpenSubMenuIndex,
      resetOpenSubMenuIndex
    } = useSubMenuIndex();

    const onCloseMenu = useOnCloseMenu(setActiveItemIndex, setOpenSubMenuIndex, closeSubMenu);

    useClickOutside({ ref, callback: onCloseMenu });
    useCloseMenuOnKeyEvent(hasOpenSubMenu, onCloseMenu, ref, closeSubMenu);
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

    useMenuBlur(ref, resetOpenSubMenuIndex, hasOpenSubMenu, closeSubMenu);

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
              onCloseMenu,
              setActiveItemIndex,
              menuRef: ref,
              resetOpenSubMenuIndex,
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
Menu.supportFocusOnMount = true;

Menu.defaultProps = {
  id: undefined,
  focusOnMount: false,
  classname: "",
  size: MENU_SIZES.MEDIUM,
  tabIndex: -1,
  ariaLabel: "Menu",
  isVisible: true,
  closeSubMenu: undefined
};

Menu.propTypes = {
  id: PropTypes.string,
  classname: PropTypes.string,
  size: PropTypes.oneOf([MENU_SIZES.SMALL, MENU_SIZES.MEDIUM, MENU_SIZES.LARGE]),
  tabIndex: PropTypes.number,
  ariaLabel: PropTypes.string,
  focusOnMount: PropTypes.bool,
  isVisible: PropTypes.bool,
  closeSubMenu: PropTypes.func
};

export default Menu;
