import React, { useRef, forwardRef } from "react";
import NOOP from "lodash/noop";
import PropTypes from "prop-types";
import cx from "classnames";
import useMergeRefs from "../../hooks/useMergeRefs";
import "./Clickable.scss";
import { BEMClass } from "../../helpers/bem-helper";
import { useKeyboardButtonPressedFunc } from "../../hooks/useKeyboardButtonPressedFunc";

const CSS_BASE_CLASS = "monday-style-clickable";
const bemHelper = BEMClass(CSS_BASE_CLASS);

const Clickable = forwardRef(({ className, id, children, role, onClick, enableTextSelection, ariaLabel }, ref) => {
  const componentRef = useRef(null);
  const mergedRef = useMergeRefs({ refs: [ref, componentRef] });
  const onKeyDown = useKeyboardButtonPressedFunc(onClick);

  return (
    <div
      ref={mergedRef}
      className={cx(CSS_BASE_CLASS, className, {
        [bemHelper({ state: "disable-text-selection" })]: !enableTextSelection
      })}
      role={role}
      onClick={onClick}
      id={id}
      onKeyDown={onKeyDown}
      tabIndex={0}
      aria-label={ariaLabel}
    >
      {children}
    </div>
  );
});

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
  ariaLabel: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  enableTextSelection: PropTypes.bool
};
Clickable.defaultProps = {
  className: "",
  id: undefined,
  role: "button",
  ariaLabel: undefined,
  onClick: NOOP,
  children: undefined,
  enableTextSelection: false
};

export default Clickable;
