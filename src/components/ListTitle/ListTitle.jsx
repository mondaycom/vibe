import cx from "classnames";
import React, { forwardRef, useRef } from "react";
import PropTypes from "prop-types";
import useMergeRefs from "../../hooks/useMergeRefs";
import { ELEMENT_TYPES, getTestId } from "../../utils/test-utils";
import styles from "./ListTitle.module.scss";

const ListTitle = forwardRef(({ className, id, children, tabIndex, "data-testid": dataTestId }, ref) => {
  const componentRef = useRef(null);
  const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

  return (
    <div
      aria-level="3"
      tabIndex={tabIndex}
      role="heading"
      ref={mergedRef}
      className={cx(styles.listTitle, "list-title", className)}
      id={id}
      data-testid={dataTestId || getTestId(ELEMENT_TYPES.LIST_TITLE, id)}
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
// Used by VirtualizedListItems
ListTitle.displayName = "ListTitle";

export default ListTitle;
