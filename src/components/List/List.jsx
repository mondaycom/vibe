import React, { useRef, forwardRef, useMemo } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useMergeRefs from "../../hooks/useMergeRefs";
import "./List.scss";
import { VirtualizedLIstItems } from "components/List/VirtualizedListItems/VirtualizedLIstItems";

const List = forwardRef(
  ({ className, id, component, children, dense, ariaLabel, ariaDescribedBy, renderOnlyVisibleItems }, ref) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });
    const Component = useMemo(() => component, [component]);
    let overrideChildren = children;

    if (renderOnlyVisibleItems) {
      overrideChildren = <VirtualizedLIstItems>{children}</VirtualizedLIstItems>;
    }

    return (
      <Component
        ref={mergedRef}
        className={cx("monday-style-list", className, {
          "monday-style-list--dense": dense,
          "monday-style-list": !renderOnlyVisibleItems,
          "monday-style-list-container": renderOnlyVisibleItems
        })}
        id={id}
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedBy}
      >
        {overrideChildren}
      </Component>
    );
  }
);

List.propTypes = {
  /**
   * class name to be add to the wrapper
   */
  className: PropTypes.string,
  /**
   * id to be add to the wrapper
   */
  id: PropTypes.string,
  /**
   * the wrapping component to wrap the List Items [div, nav, ul, ol]
   */
  component: PropTypes.string,
  /**
   * remove the side padding
   */
  dense: PropTypes.bool,
  /**
   * ARIA label string to describe to list
   */
  ariaLabel: PropTypes.string,
  /**
   * ARIA described by string to reference an id to describe by
   */
  ariaDescribedBy: PropTypes.string,
  children: PropTypes.any,
  /**
   * Using virtualized list for rendering only the items which visible to the user in any given user (performance optimization)
   */
  renderOnlyVisibleItems: PropTypes.bool
};
List.defaultProps = {
  className: "",
  id: undefined,
  component: "ul",
  dense: false,
  ariaLabel: undefined,
  ariaDescribedBy: undefined,
  children: undefined,
  renderOnlyVisibleItems: false
};

export default List;
