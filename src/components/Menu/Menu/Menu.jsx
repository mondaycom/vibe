import React, { useMemo, forwardRef, useState, useRef, useCallback } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useMergeRefs from "../../../hooks/useMergeRefs";
import useClickOutside from "../../../hooks/useClickOutside";
import useSubMenuIndex from "./hooks/useSubMenuIndex";
import useOnCloseMenu from "./hooks/useOnCloseMenu";
import useCloseMenuOnKeyEvent from "./hooks/useCloseMenuOnKeyEvent";
import useMenuKeyboardNavigation from "./hooks/useMenuKeyboardNavigation";
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
      closeSubMenu,
      focusItemIndex
    },
    forwardedRef
  ) => {
    const ref = useRef(null);
    const refElement = ref && ref.current;
    const [activeItemIndex, setActiveItemIndex] = useState(focusItemIndex);

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

Menu.sizes = SIZES;

Menu.defaultProps = {
  id: undefined,
  classname: "",
  size: SIZES.MEDIUM,
  tabIndex: 0,
  ariaLabel: "Menu",
  isVisible: true,
  closeSubMenu: undefined,
  focusItemIndex: -1
};

Menu.propTypes = {
  id: PropTypes.string,
  classname: PropTypes.string,
  size: PropTypes.oneOf([SIZES.SMALL, SIZES.MEDIUM, SIZES.LARGE]),
  tabIndex: PropTypes.number,
  ariaLabel: PropTypes.string,
  isVisible: PropTypes.bool,
  closeSubMenu: PropTypes.func,
  focusItemIndex: PropTypes.number
};

export default Menu;
