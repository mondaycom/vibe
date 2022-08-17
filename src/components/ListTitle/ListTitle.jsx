import React, { useRef, forwardRef } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useMergeRefs from "../../hooks/useMergeRefs";
import "./ListTitle.scss";

const ListTitle = forwardRef(({ className, id, children, tabIndex }, ref) => {
  const componentRef = useRef(null);
  const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

  return (
    <div
      aria-level="3"
      tabIndex={tabIndex}
      role="heading"
      ref={mergedRef}
      className={cx("list-title", className)}
      id={id}
    >
      {children}
    </div>
  );
});

ListTitle.propTypes = {
  /**
   * class name to be add to the wrapper
   */
  className: PropTypes.string,
  /**
   * id to be added to the wrapper
   */
  id: PropTypes.string
};
ListTitle.defaultProps = {
  className: "",
  id: undefined
};

export default ListTitle;
