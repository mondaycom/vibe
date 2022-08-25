import cx from "classnames";
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { forwardRef, useRef } from "react";
import NOOP from "lodash/noop";
import PropTypes from "prop-types";
import useMergeRefs from "../../hooks/useMergeRefs";
import { useKeyboardButtonPressedFunc } from "../../hooks/useKeyboardButtonPressedFunc";
import { ELEMENT_TYPES, getTestId } from "../../utils/test-utils";
import styles from "./Clickable.module.scss";

const CSS_BASE_CLASS = "monday-style-clickable";

const Clickable = forwardRef(
  (
    {
      elementType,
      className,
      id,
      children,
      role,
      onClick,
      enableTextSelection,
      onMouseDown,
      ariaLabel,
      ariaHidden,
      ariaHasPopup,
      ariaExpanded,
      tabIndex,
      disabled,
      style,
      dataTestId
    },
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });
    const onKeyDown = useKeyboardButtonPressedFunc(onClick);
    const Element = elementType;
    return (
      <Element
        ref={mergedRef}
        className={cx(styles.clickable, CSS_BASE_CLASS, className, {
          [styles.disabled]: disabled,
          ["disabled"]: disabled,
          [styles.disableTextSelection]: !enableTextSelection,
          ["monday-style-clickable--disable-text-selection"]: !enableTextSelection
        })}
        data-testid={dataTestId || getTestId(ELEMENT_TYPES.CLICKABLE, id)}
        role={role}
        onClick={disabled ? undefined : onClick}
        id={id}
        onKeyDown={disabled ? undefined : onKeyDown}
        tabIndex={disabled ? -1 : tabIndex}
        aria-label={ariaLabel}
        aria-hidden={ariaHidden}
        aria-haspopup={ariaHasPopup}
        aria-expanded={ariaExpanded}
        onMouseDown={onMouseDown}
        style={style}
      >
        {children}
      </Element>
    );
  }
);

Clickable.propTypes = {
  /**
   * class name to be add to the wrapper
   */
  className: PropTypes.string,
  /**
   * id to be add to the wrapper
   */
  id: PropTypes.string,
  role: PropTypes.string,
  onClick: PropTypes.func,
  onMouseDown: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  enableTextSelection: PropTypes.bool,
  disabled: PropTypes.bool,
  elementType: PropTypes.string,
  ariaLabel: PropTypes.string,
  ariaHidden: PropTypes.bool,
  ariaHasPopup: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  ariaExpanded: PropTypes.bool,
  tabIndex: PropTypes.string,
  style: PropTypes.object
};
Clickable.defaultProps = {
  className: "",
  id: undefined,
  role: "button",
  onClick: NOOP,
  onMouseDown: NOOP,
  children: undefined,
  disabled: false,
  enableTextSelection: false,
  elementType: "div",
  ariaLabel: undefined,
  ariaHidden: undefined,
  ariaHasPopup: undefined,
  ariaExpanded: undefined,
  tabIndex: "0",
  style: undefined
};

export default Clickable;
