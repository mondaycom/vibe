import React, { useRef, forwardRef, useMemo, useState, useCallback } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useMergeRefs from "../../hooks/useMergeRefs";
import { VirtualizedListItems } from "../../components/List/VirtualizedListItems/VirtualizedListItems";
import "./List.scss";
import { keyCodes } from "../../constants/KeyCodes";

const List = forwardRef(
  ({ className, id, component, children, dense, ariaLabel, ariaDescribedBy, renderOnlyVisibleItems, style }, ref) => {
    const componentRef = useRef(null);
    const [focusIndex, setFocusIndex] = useState(0);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });
    const Component = component;
    const childrenRefs = useRef([]);
    const onKeyDown = useCallback(
      event => {
        const isUpKey = event.keyCode === keyCodes.UP_ARROW;
        const isDownKey = event.keyCode === keyCodes.DOWN_ARROW;
        let overrideFocusIndex = undefined;
        if (isUpKey || isDownKey) {
          if (isDownKey && focusIndex + 1 < childrenRefs.current.length) {
            overrideFocusIndex = focusIndex + 1;
          } else if (isUpKey && focusIndex > 0) {
            overrideFocusIndex = focusIndex - 1;
          }
          event.preventDefault();
          if (overrideFocusIndex !== undefined) {
            setFocusIndex(overrideFocusIndex);
            childrenRefs.current[overrideFocusIndex].focus();
          }
        }
      },
      [focusIndex]
    );
    const overrideChildren = useMemo(() => {
      let override = children;
      if (renderOnlyVisibleItems) {
        override = <VirtualizedListItems>{override}</VirtualizedListItems>;
      } else {
        childrenRefs.current = childrenRefs.current.slice(0, override?.length);
        override = React.Children.map(override, (child, index) => {
          if (!React.isValidElement(child)) {
            return child;
          }
          return typeof child === "string"
            ? child
            : React.cloneElement(child, {
                ref: ref => (childrenRefs.current[index] = ref),
                tabIndex: focusIndex === index ? 0 : -1
              });
        });
      }

      return override;
    }, [children, focusIndex, renderOnlyVisibleItems]);

    return (
      <Component
        ref={mergedRef}
        style={style}
        onKeyDown={!renderOnlyVisibleItems ? onKeyDown : undefined}
        className={cx("monday-style-list", className, {
          "monday-style-list--dense": dense,
          "monday-style-list-container": renderOnlyVisibleItems
        })}
        id={id}
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedBy}
        tabIndex={-1}
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
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  /**
   * Using virtualized list for rendering only the items which visible to the user in any given user (performance optimization)
   */
  renderOnlyVisibleItems: PropTypes.bool,
  style: PropTypes.object
};
List.defaultProps = {
  className: "",
  id: undefined,
  component: "ul",
  dense: false,
  ariaLabel: undefined,
  ariaDescribedBy: undefined,
  children: undefined,
  renderOnlyVisibleItems: false,
  style: undefined
};

export default List;
