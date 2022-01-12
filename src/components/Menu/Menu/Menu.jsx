import React, { useMemo, forwardRef, useState, useRef, useEffect, useLayoutEffect, useCallback } from "react";
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
import { backwardCompatibilityForProperties } from "../../../helpers/backwardCompatibilityForProperties";

const Menu = forwardRef(
  (
    {
      id,
      className,
      // Backward compatibility for props naming
      classname,
      size,
      tabIndex,
      ariaLabel,
      ariaDescribedBy,
      children: originalChildren,
      isVisible = true,
      onClose,
      focusOnMount,
      focusItemIndex,
      focusItemIndexOnMount,
      isSubMenu,
      useDocumentEventListeners,
      shouldScrollMenu
    },
    forwardedRef
  ) => {
    const ref = useRef(null);
    const overrideClassName = backwardCompatibilityForProperties([className, classname]);
    const [activeItemIndex, setActiveItemIndex] = useState(focusItemIndex);
    const [isInitialSelectedState, setIsInitialSelectedState] = useState(false);

    const onSetActiveItemIndexCallback = useCallback(
      index => {
        setActiveItemIndex(index);
        setIsInitialSelectedState(false);
      },
      [setActiveItemIndex, setIsInitialSelectedState]
    );

    useEffect(() => {
      if (focusItemIndexOnMount === -1) {
        return;
      }
      setActiveItemIndex(focusItemIndexOnMount);
      setIsInitialSelectedState(true);
    }, [focusItemIndexOnMount, setIsInitialSelectedState]);

    const children = useMemo(() => {
      const allChildren = React.Children.toArray(originalChildren);
      return allChildren.filter(child => {
        if (child.type.isMenuChild) return true;
        console.error(
          "Menu child must be a menuChild item (such as MenuItem, MenuDivider, MenuTitle, etc). This child is not supported: ",
          child
        );
        return false;
      });
    }, [originalChildren]);

    const { setSubMenuIsOpenByIndex, hasOpenSubMenu, openSubMenuIndex, setOpenSubMenuIndex, resetOpenSubMenuIndex } = useSubMenuIndex();

    const onCloseMenu = useOnCloseMenu(onSetActiveItemIndexCallback, setOpenSubMenuIndex, onClose);

    useClickOutside({ ref, callback: onCloseMenu });
    useCloseMenuOnKeyEvent(hasOpenSubMenu, onCloseMenu, ref, onClose, isSubMenu, useDocumentEventListeners);
    useMenuKeyboardNavigation(
      hasOpenSubMenu,
      children,
      activeItemIndex,
      onSetActiveItemIndexCallback,
      isVisible,
      ref,
      resetOpenSubMenuIndex,
      useDocumentEventListeners
    );
    useMouseLeave(resetOpenSubMenuIndex, hasOpenSubMenu, ref, onSetActiveItemIndexCallback);

    const onMouseMove = useCallback(() => {
      setIsInitialSelectedState(true);
    }, [setIsInitialSelectedState]);

    useLayoutEffect(() => {
      if (hasOpenSubMenu || useDocumentEventListeners) return;
      if (activeItemIndex > -1) {
        requestAnimationFrame(() => {
          ref && ref.current && ref.current.focus();
        });
      }
    }, [activeItemIndex, hasOpenSubMenu, useDocumentEventListeners]);

    useLayoutEffect(() => {
      if (!focusOnMount || useDocumentEventListeners) return;
      requestAnimationFrame(() => {
        ref && ref.current && ref.current.focus();
      });
    }, [ref, focusOnMount, useDocumentEventListeners]);

    const mergedRef = useMergeRefs({ refs: [ref, forwardedRef] });

    const { focusWithinProps } = useFocusWithin({
      onBlurWithin: e => {
        onCloseMenu && onCloseMenu(e);
      }
    });

    return (
      // eslint-disable-next-line jsx-a11y/aria-activedescendant-has-tabindex
      <ul
        onFocus={focusWithinProps.onFocus}
        onBlur={focusWithinProps.onBlur}
        id={id}
        className={cx("monday-style-menu", overrideClassName, `monday-style-menu--${size}`)}
        ref={mergedRef}
        tabIndex={tabIndex}
        aria-label={ariaLabel}
        role="menu"
        aria-activedescendant={`${id}-${activeItemIndex}`}
        aria-describedby={ariaDescribedBy}
        onMouseOver={onMouseMove}
      >
        {children
          && React.Children.map(children, (child, index) => {
            return React.isValidElement(child)
              ? React.cloneElement(child, {
                ...child?.props,
                activeItemIndex,
                index,
                setActiveItemIndex,
                menuRef: ref,
                resetOpenSubMenuIndex,
                isParentMenuVisible: isVisible,
                setSubMenuIsOpenByIndex,
                hasOpenSubMenu: index === openSubMenuIndex,
                closeMenu: onCloseMenu,
                menuId: id,
                useDocumentEventListeners,
                isInitialSelectedState,
                shouldScrollMenu
              })
              : null;
          })}
      </ul>
    );
  }
);

Menu.isMenu = true;
Menu.supportFocusOnMount = true;
Menu.sizes = SIZES;

Menu.defaultProps = {
  id: undefined,
  focusOnMount: false,
  className: undefined,
  size: SIZES.MEDIUM,
  tabIndex: 0,
  ariaLabel: "Menu",
  ariaDescribedBy: undefined,
  isVisible: true,
  onClose: undefined,
  focusItemIndex: -1,
  isSubMenu: false,
  useDocumentEventListeners: false,
  focusItemIndexOnMount: -1,
  shouldScrollMenu: false
};

Menu.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.oneOf([SIZES.SMALL, SIZES.MEDIUM, SIZES.LARGE]),
  tabIndex: PropTypes.number,
  ariaLabel: PropTypes.string,
  ariaDescribedBy: PropTypes.string,
  focusOnMount: PropTypes.bool,
  isVisible: PropTypes.bool,
  onClose: PropTypes.func,
  focusItemIndex: PropTypes.number,
  isSubMenu: PropTypes.bool,
  useDocumentEventListeners: PropTypes.bool,
  focusItemIndexOnMount: PropTypes.number,
  shouldScrollMenu: PropTypes.bool
};

export default Menu;
