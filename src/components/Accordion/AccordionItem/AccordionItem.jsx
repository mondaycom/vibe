import React, { useRef, useCallback, forwardRef } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useMergeRefs from "../../../hooks/useMergeRefs";
import ExpandCollapse from "../../ExpandCollapse/ExpandCollapse";

const AccordionItem = forwardRef(
  ({ children, title, className, iconSize, id, open, onClick, onClickAccordionCallback }, ref) => {
    // Change onClick param name to onClickCallback in 1.0.0
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

    const onClickCallback = useCallback(() => {
      onClickAccordionCallback && onClickAccordionCallback();
      onClick && onClick();
    }, [onClickAccordionCallback, onClick]);

    return (
      <div ref={mergedRef} className={cx("accordion-item", className)} id={id}>
        <ExpandCollapse
          iconSize={iconSize}
          id={`expand-collapse--${id}`}
          onClick={onClickCallback}
          open={open}
          title={title}
        >
          {children}
        </ExpandCollapse>
      </div>
    );
  }
);

AccordionItem.propTypes = {
  /**
   * custom style
   */
  className: PropTypes.string,
  /**
   * id to be add to the wrapper
   */
  id: PropTypes.string,
  /**
   * Header title
   */
  title: PropTypes.string,
  /**
   * The value of the expandable section
   */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  /**
   * The expand icon font size
   */
  iconSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * On click callback
   */
  onClick: PropTypes.func
};

AccordionItem.defaultProps = {
  className: "",
  id: undefined,
  iconSize: 24,
  title: "",
  onClick: undefined,
  children: null
};

export default AccordionItem;
