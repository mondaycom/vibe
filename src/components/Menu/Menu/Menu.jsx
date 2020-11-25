import React, { useState, useRef, useCallback } from "react";
import useKeyEvent from "../../../hooks/useKeyEvent";
import PropTypes from "prop-types";
import cx from "classnames";
import { MENU_SIZES } from "./MenuConstants";
import "./Menu.scss";

const Menu = ({ classname, size, tabIndex, ariaLabel, children }) => {
  const ref = useRef(null);
  const [activeItemIndex, setActiveItemIndex] = useState(-1);

  const isChildSelectable = (newIndex) => {
    const child = children[newIndex];
    return child.type.isSelectable && !child.props.disabled;
  };
  const onArrowUp = useCallback(() => {
    let newIndex;
    for (let offset = children.length - 1; offset > 0; offset--) {
      newIndex = (activeItemIndex + offset) % children.length;
      if (isChildSelectable(newIndex)) {
        break;
      }
    }
    setActiveItemIndex(newIndex);
  }, [setActiveItemIndex, children, activeItemIndex]);

  const onArrowDown = useCallback(() => {
    let newIndex;
    for (let offset = 1; offset <= children.length; offset++) {
      newIndex = (activeItemIndex + offset) % children.length;
      if (isChildSelectable(newIndex)) {
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
      className={cx(
        "monday-style-menu",
        classname,
        `monday-style-menu--${size}`
      )}
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
            setActiveItemIndex,
          });
        })}
    </div>
  );
};

Menu.defaultProps = {
  classname: "",
  size: MENU_SIZES.MEDIUM,
  tabIndex: 0,
  ariaLabel: "Menu",
};
Menu.propTypes = {
  classname: PropTypes.string,
  size: PropTypes.oneOf([
    MENU_SIZES.SMALL,
    MENU_SIZES.MEDIUM,
    MENU_SIZES.LARGE,
  ]),
  tabIndex: PropTypes.number,
  ariaLabel: PropTypes.string,
};

export default Menu;
