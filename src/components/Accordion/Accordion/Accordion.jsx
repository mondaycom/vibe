import React, { useMemo, forwardRef, useState, useRef, useCallback } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useMergeRefs from "../../../hooks/useMergeRefs";
import "./Accordion.scss";

const Accordion = forwardRef(
  ({ children: originalChildren, allowMultiple, "data-testid": dataTestId, defaultIndex, className, id }, ref) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

    const [expandedItems, setExpandedItems] = useState(defaultIndex);

    const children = useMemo(() => React.Children.toArray(originalChildren), [originalChildren]);

    const isChildExpanded = useCallback(
      itemIndex => {
        return expandedItems.includes(itemIndex);
      },
      [expandedItems]
    );

    const onChildClick = useCallback(
      itemIndex => {
        if (allowMultiple) {
          const newExpandedItems = [...expandedItems];
          if (isChildExpanded(itemIndex)) {
            const index = newExpandedItems.indexOf(itemIndex);
            if (index > -1) {
              newExpandedItems.splice(index, 1);
            }
          } else {
            newExpandedItems.push(itemIndex);
          }
          setExpandedItems(newExpandedItems);
          return;
        }

        setExpandedItems([itemIndex]);
      },
      [isChildExpanded, expandedItems, allowMultiple]
    );

    const renderChildElements = useMemo(() => {
      return React.Children.map(children, (child, itemIndex) => {
        return React.cloneElement(child, {
          ...child?.props,
          onClickAccordionCallback: () => {
            onChildClick(itemIndex);
          },
          open: isChildExpanded(itemIndex)
        });
      });
    }, [isChildExpanded, onChildClick, children]);

    return (
      <div ref={mergedRef} className={cx("accordion", className)} data-testid={dataTestId} id={id}>
        {children && renderChildElements}
      </div>
    );
  }
);

Accordion.propTypes = {
  /**
   * class name to be add to the wrapper
   */
  className: PropTypes.string,
  /**
   * id to be add to the wrapper
   */
  id: PropTypes.string,
  /**
   * is allowed multiple opened accordion items
   */
  allowMultiple: PropTypes.bool,
  /**
   * Array of initial expanded indexes
   */
  defaultIndex: PropTypes.array,
  /**
   * Unique TestId - can be used as Selector for integration tests and other needs (tracking, etc.)
   */
  "data-testid": PropTypes.string,
  /**
   * The value of the expandable section
   */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

Accordion.defaultProps = {
  className: "",
  id: undefined,
  allowMultiple: false,
  children: null,
  "data-testid": "monday-accordion",
  defaultIndex: []
};

export default Accordion;
