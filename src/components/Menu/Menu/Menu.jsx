import React, { useState, useRef, useCallback } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useKeyEvent from "../../../hooks/useKeyEvent";
import { MENU_SIZES } from "./MenuConstants";
import "./Menu.scss";

const isChildSelectable = (newIndex, children) => {
  const child = children[newIndex];
  return child.type.isSelectable && !child.props.disabled;
};

const Menu = ({ classname, size, tabIndex, ariaLabel, children }) => {
  const ref = useRef(null);
  const [activeItemIndex, setActiveItemIndex] = useState(-1);

  const onArrowUp = useCallback(() => {
    let newIndex;
    for (let offset = children.length - 1; offset > 0; offset--) {
      newIndex = (activeItemIndex + offset) % children.length;
      if (isChildSelectable(newIndex, children)) {
        break;
      }
    }
    setActiveItemIndex(newIndex);
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
    setActiveItemIndex(newIndex);
  }, [setActiveItemIndex, children, activeItemIndex]);

  useKeyEvent({ keys: ["ArrowDown"], callback: onArrowDown });
  useKeyEvent({ keys: ["ArrowUp"], callback: onArrowUp });

  const onBlur = useCallback(() => {
    setActiveItemIndex(-1);
  }, [setActiveItemIndex]);

  return (
    <div
      className={cx("monday-style-menu", classname, `monday-style-menu--${size}`)}
      ref={ref}
      tabIndex={tabIndex}
      onBlur={onBlur}
      aria-label={ariaLabel}
    >
      {children &&
        React.Children.map(children, (child, index) => {
          return React.cloneElement(child, {
            ...child?.props,
            activeItemIndex,
            index,
            setActiveItemIndex
          });
        })}
    </div>
  );
};

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
