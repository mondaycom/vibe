import React, { forwardRef, useState, useRef, useCallback } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useMergeRefs from "../../../hooks/useMergeRefs";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import useSubMenuIndex from "./hooks/useSubMenuIndex";
import useOnCloseMenu from "./hooks/useOnCloseMenu";
import useCloseMenuOnKeyEvent from "./hooks/useCloseMenuOnKeyEvent";
import useMenuKeyboardNavigation from "./hooks/useMenuKeyboardNavigation";
import { MENU_SIZES } from "./MenuConstants";
import "./Menu.scss";

const Menu = forwardRef(
  (
    { id, classname, size, tabIndex, ariaLabel, children: originalChildren, isVisible = true, closeSubMenu },
    forwardedRef
  ) => {
    const children = React.Children.toArray(originalChildren);
    const ref = useRef(null);
    const refElement = ref && ref.current;
    const [activeItemIndex, setActiveItemIndex] = useState(-1);
    const { setSubMenuIsOpenByIndex, hasOpenSubMenu, openSubMenuIndex, setOpenSubMenuIndex } = useSubMenuIndex();

    const onCloseMenu = useOnCloseMenu(setActiveItemIndex, setOpenSubMenuIndex, closeSubMenu);

    useOnClickOutside({ ref, callback: onCloseMenu });
    useCloseMenuOnKeyEvent(hasOpenSubMenu, onCloseMenu, refElement, closeSubMenu);
    useMenuKeyboardNavigation(hasOpenSubMenu, children, activeItemIndex, setActiveItemIndex, isVisible);

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
