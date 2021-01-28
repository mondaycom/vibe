import React, { forwardRef, useLayoutEffect, useState, useRef, useCallback } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useMergeRefs from "../../../hooks/useMergeRefs";
import useKeyEvent from "../../../hooks/useKeyEvent";
import { MENU_SIZES } from "./MenuConstants";
import "./Menu.scss";

export const usePrevious = value => {
  const ref = useRef();
  useLayoutEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

const isChildSelectable = (newIndex, children) => {
  const child = children[newIndex];
  return child.type.isSelectable && !child.props.disabled;
};

const Menu = forwardRef(
  (
    { id, classname, size, tabIndex, ariaLabel, children: originalChildren, isVisible = true, closeSubMenu },
    forwardRef
  ) => {
    const [hasSubMenuOpen, setHasSubMenuOpen] = useState(false);
    const children = React.Children.toArray(originalChildren);
    const ref = useRef(null);
    const refElement = ref && ref.current;
    const [activeItemIndex, setActiveItemIndex] = useState(-1);

    const onCloseMenu = useCallback(
      event => {
        if (hasSubMenuOpen) return false;
        setActiveItemIndex(-1);
        if (closeSubMenu) {
          event.preventDefault();
          event.stopPropagation();
          closeSubMenu();
        } else {
          refElement && refElement.blur();
        }
      },
      [closeSubMenu, hasSubMenuOpen, refElement]
    );

    const onArrowUp = useCallback(() => {
      let newIndex;

      for (let offset = children.length - 1; offset > 0; offset--) {
        newIndex = (activeItemIndex + offset) % children.length;
        if (isChildSelectable(newIndex, children)) {
          break;
        }
      }
      newIndex && setActiveItemIndex(newIndex);
    }, [setActiveItemIndex, children, activeItemIndex]);

    const onArrowDown = useCallback(() => {
      let newIndex;

      if (!children) return;
      for (let offset = 1; offset <= children.length; offset++) {
        newIndex = (activeItemIndex + offset) % children.length;
        if (isChildSelectable(newIndex, children)) {
          break;
        }
      }
      (newIndex || newIndex === 0) && setActiveItemIndex(newIndex);
    }, [setActiveItemIndex, children, activeItemIndex]);

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
      ref,
      name: "menu ArrowDown",
      keys: ["ArrowDown"],
      callback: onArrowDown,
      stopPropagation: true,
      preventDefault: true
    });

    useKeyEvent({
      ref,
      name: "menu arrow down",
      keys: ["ArrowUp"],
      callback: onArrowUp,
      stopPropagation: true,
      preventDefault: true
    });

    useKeyEvent({
      keys: ["Enter"],
      callback: onEnterClickCallback,
      stopPropagation: true,
      preventDefault: true
    });

    useKeyEvent({
      keys: ["Escape", "ArrowLeft"],
      callback: onCloseMenu
    });

    const focusParentMenu = useCallback(() => {
      refElement && refElement.focus();
    }, [refElement]);

    const mergedRef = useMergeRefs({ refs: [ref, forwardRef] });

    return (
      <div
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
              setHasSubMenuOpen,
              focusParentMenu,
              setActiveItemIndex,
              isParentMenuVisible: isVisible
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
