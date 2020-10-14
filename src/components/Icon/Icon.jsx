import React, { useCallback, useMemo, useRef } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import "./Icon.scss";
import useKeyEvent from "../../hooks/useKeyEvent";
import useEventListener from "../../hooks/useEventListener";
import { keyCodes } from "../../constants/KeyCodes";
import { ICON_TYPES } from "./IconConstants";
import FontIcon from "./FontIcon/FontIcon";

const NOOP = () => {};

const Icon = ({
  onClick,
  className,
  iconName,
  clickable,
  iconLabel,
  iconType
}) => {
  const iconRef = useRef(null);

  const onEnterCallback = useCallback(
    event => {
      const isActive = document.activeElement === iconRef.current;
      if (!isActive) {
        return;
      }
      onClick(event);
    },
    [iconRef, onClick]
  );

  const onMouseDown = useCallback(event => {
    event.preventDefault();
  }, []);

  const computedClassName = useMemo(() => {
    return cx("icon_component", className, {
      "icon_component--clickable": clickable
    });
  }, [clickable, className]);

  useEventListener({
    eventName: "mousedown",
    callback: onMouseDown,
    ref: iconRef
  });

  useKeyEvent({
    keys: [keyCodes.ENTER, keyCodes.SPACE],
    ref: iconRef,
    callback: onEnterCallback,
    ignoreDocumentFallback: true,
    capture: true,
    stopPropagation: true,
    preventDefault: true
  });

  const onClickCallback = useCallback(
    event => {
      const callback = onClick || NOOP;
      callback(event);
    },
    [onClick]
  );

  if (!iconName) {
    return null;
  }
  const tabindex = clickable ? 0 : -1;
  if (iconType === ICON_TYPES.SVG) {
    const IconComponent = iconName;
    return (
      <span tabIndex={tabindex} className={computedClassName} ref={iconRef}>
        <IconComponent size={20} onClick={onClick} />
      </span>
    );
  }

  const iconNameString = typeof iconName === "function" ? "" : iconName;
  return (
    <FontIcon
      className={cx(iconNameString, computedClassName)}
      onClick={onClickCallback}
      ref={iconRef}
      iconLabel={iconLabel}
      tabIndex={tabindex}
      clickable={clickable}
    />
  );
};

Icon.type = ICON_TYPES;

Icon.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  iconName: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  clickable: PropTypes.bool,
  iconLabel: PropTypes.string,
  iconType: PropTypes.oneOf([ICON_TYPES.SVG, ICON_TYPES.ICON_FONT])
};

Icon.defaultProps = {
  onClick: NOOP,
  className: "",
  iconName: "",
  clickable: true,
  iconLabel: "",
  iconType: ICON_TYPES.SVG
};

export default Icon;
