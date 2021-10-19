import React, { useRef, forwardRef } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useMergeRefs from "../../hooks/useMergeRefs";
import "./Accordion.scss";

const Accordion = forwardRef(({ children: originalChildren, allowMultiple, className, id }, ref) => {
  const componentRef = useRef(null);
  const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

  const [expandedItems, setExpandedItems] = useState([]);

  const children = useMemo(() => {
    const allChildren = React.Children.toArray(originalChildren);
    return allChildren.filter(child => {
      if (child.type.isAccordionChild) return true;
      console.error(
        "Accordion child must be a accordionChild item (such as AccordionItem). This child is not supported: ",
        child
      );
      return false;
    });
  }, [originalChildren]);

  const isChildExpanded = index => {
    return expandedItems.contains(index);
  };

  const onChildClick = index => {
    if (allowMultiple) {
      if (isChildExpanded(index)) {
        openItemsIndex.pop(index);
      } else {
        openItemsIndex.push(index);
      }
      setExpandedItems(openItemsIndex);
      return;
    }
    setExpandedItems([index]);
  };

  return (
    <div ref={mergedRef} className={cx("accordion--wrapper", className)} id={id}>
      {children &&
        React.Children.map(children, (child, index) => {
          return React.isValidElement(child)
            ? React.cloneElement(child, {
                ...child?.props,
                onClick: () => {
                  onChildClick(index);
                },
                open: isChildExpanded(index)
              })
            : null;
        })}
    </div>
  );
});

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
  allowMultiple: PropTypes.bool
};

Accordion.defaultProps = {
  className: "",
  id: undefined,
  allowMultiple: false
};

export default Accordion;
