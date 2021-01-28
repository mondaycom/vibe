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
    const [activeItemIndex, setActiveItemIndex] = useState(-1);

    console.log("hasSubMenuOpen= ", hasSubMenuOpen);

    const onCloseMenu = useCallback(
      event => {
        console.log("onCloseMenu hasSubMenuOpen=", hasSubMenuOpen);
        if (hasSubMenuOpen) return false;
        event.preventDefault();
        event.stopPropagation();
        setActiveItemIndex(-1);
        if (closeSubMenu) closeSubMenu();
      },
      [closeSubMenu, hasSubMenuOpen]
    );

    const onArrowRight = useCallback(() => {
      console.log("onArrowRight");
      let newIndex;
      for (let offset = children.length - 1; offset > 0; offset--) {
        newIndex = (activeItemIndex + offset) % children.length;
        if (isChildSelectable(newIndex, children)) {
          break;
        }
      }
      console.log("setActiveItemIndex ", newIndex);
      newIndex && setActiveItemIndex(newIndex);
    }, [setActiveItemIndex, children, activeItemIndex]);

    const onArrowUp = useCallback(() => {
      console.log("on arrow up ****");
      let newIndex;

      console.log("children ", children);
      for (let offset = children.length - 1; offset > 0; offset--) {
        newIndex = (activeItemIndex + offset) % children.length;
        console.log("newIndex ", newIndex);
        if (isChildSelectable(newIndex, children)) {
          break;
        }
      }
      console.log("setActiveItemIndex ", newIndex);
      newIndex && setActiveItemIndex(newIndex);
    }, [setActiveItemIndex, children, activeItemIndex]);

    const onArrowDown = useCallback(() => {
      console.log(" on arrow down ***");
      let newIndex;

      if (!children) return;
      console.log("children ", children);
      for (let offset = 1; offset <= children.length; offset++) {
        console.log("children loop", offset);
        newIndex = (activeItemIndex + offset) % children.length;
        console.log("newIndex ", newIndex);
        if (isChildSelectable(newIndex, children)) {
          break;
        }
      }
      console.log("setActiveItemIndex ", newIndex);
      (newIndex || newIndex === 0) && setActiveItemIndex(newIndex);
    }, [setActiveItemIndex, children, activeItemIndex]);

    const onEnterClickCallback = useCallback(
      event => {
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

    // useKeyEvent({
    //   ref,
    //   name: "right arrow clicked",
    //   keys: ["ArrowRight"],
    //   callback: onArrowRight,
    //   stopPropagation: true,
    //   preventDefault: true
    // });

    const refElement = ref && ref.current;

    // const prevIsVisible = usePrevious(isVisible);
    // const prevRefElement = usePrevious(refElement);

    // useLayoutEffect(() => {
    //   if (!refElement || !isVisible) return;
    //   // console.log(id.toString().includes("menu-level-3"));
    //   // if (id.toString().includes("menu-level-3")) debugger;
    //   // console.log("add focus on ", refElement);
    //   requestAnimationFrame(() => {
    //     refElement && refElement.focus();
    //   });

    //   const isVisibleCahnged = prevIsVisible !== isVisible;
    //   const prevRefElementCjamged = prevRefElement !== refElement;
    //   refElement &&
    //     console.log(
    //       "focus **",

    //       id,
    //       "prevRefElementCjamged : ",
    //       prevRefElementCjamged,
    //       "isVisibleCahnged: ",
    //       isVisibleCahnged
    //     );
    // }, [refElement, isVisible, id]);

    // const onBlur = useCallback(() => {
    //   console.log("on blur");
    //   setActiveItemIndex(-1);
    // }, [setActiveItemIndex]);

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
              setActiveItemIndex: index => {
                console.log(" setActiveItemIndex index ", index);
                setActiveItemIndex(index);
              },
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
