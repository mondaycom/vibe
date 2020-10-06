import React, { useCallback, useRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./Icon.scss";
import useKeyEvent from "../../hooks/useKeyEvent";
import useEventListener from "../../hooks/useEventListener";
import { keyCodes } from "../../constants/KeyCodes";

const NOOP = () => {};

const Icon = ({
  onClick,
  className,
  iconName,
  clickable = true,
  iconLabel = ""
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
  const iconNameString = typeof iconName === "function" ? "" : iconName;
  const tabindex = clickable ? 0 : -1;
  return (
    <span
      className={classNames("icon_component", iconNameString, className, "fa", {
        "icon_component--clickable": clickable
      })}
      onClick={onClickCallback}
      ref={iconRef}
      aria-label={iconLabel}
      tabIndex={tabindex}
    >
      {typeof iconName === "function" && iconName()}
    </span>
  );
};

Icon.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  iconName: PropTypes.any,
  clickable: PropTypes.bool
};

Icon.defaultProps = {
  onClick: NOOP,
  className: "",
  iconName: "",
  clickable: true
};
export default Icon;
