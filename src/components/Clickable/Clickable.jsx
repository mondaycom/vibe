import React, { useRef, forwardRef, useCallback } from "react";
import NOOP from "lodash/noop";
import PropTypes from "prop-types";
import cx from "classnames";
import useMergeRefs from "../../hooks/useMergeRefs";
import "./Clickable.scss";

const KEYDOWN_SPACE_EVENT = 32;
const KEYDOWN_ENTER_EVENT = 13;

const Clickable = forwardRef(({ className, id, children, role, onClick }, ref) => {
  const componentRef = useRef(null);
  const mergedRef = useMergeRefs({ refs: [ref, componentRef] });
  const onKeyDown = useCallback(
    e => {
      if (e.keyCode === KEYDOWN_SPACE_EVENT || e.keyCode === KEYDOWN_ENTER_EVENT) {
        onClick(e);
      }
    },
    [onClick]
  );

  return (
    <div
      ref={mergedRef}
      className={cx("monday-style-clickable", className)}
      role={role}
      onClick={onClick}
      id={id}
      onKeyDown={onKeyDown}
      tabIndex={0}
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
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
Clickable.defaultProps = {
  className: "",
  id: undefined,
  role: "button",
  onClick: () => NOOP,
  children: undefined
};

export default Clickable;
