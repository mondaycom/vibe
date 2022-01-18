import React, { useRef, forwardRef, useMemo } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useMergeRefs from "../../hooks/useMergeRefs";
import { FLEX_POSITIONS, FLEX_GAPS, FLEX_DIRECTIONS } from "./FlexConstants";
import { BASE_POSITIONS } from "../../constants/positions";
import Clickable from "../Clickable/Clickable";
import classes from "./Flex.module.scss";

const Flex = forwardRef(
  ({ className, id, elementType, direction, wrap, children, justify, align, gap, onClick, style }, ref) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });
    const overrideStyle = useMemo(() => ({ ...style, gap: `${gap}px` }), [style, gap]);
    const Element = onClick ? Clickable : elementType;

    return (
      <Element
        id={id}
        // in case the element is clickable, we will pass the real element type in this prop
        elementType={elementType}
        ref={mergedRef}
        className={cx(
          classes.container,
          classes[`direction${direction}`],
          classes[`justify${justify}`],
          classes[`align${align}`],
          className,
          {
            [classes.wrap]: wrap
          }
        )}
        onClick={onClick}
        style={overrideStyle}
      >
        {children}
      </Element>
    );
  }
);

Flex.justify = FLEX_POSITIONS;
Flex.align = BASE_POSITIONS;
Flex.gaps = FLEX_GAPS;
Flex.directions = FLEX_DIRECTIONS;

Flex.propTypes = {
  /**
   * class name to be add to the wrapper
   */
  className: PropTypes.string,
  /**
   * id to be add to the wrapper
   */
  id: PropTypes.string,
  style: PropTypes.object,
  direction: PropTypes.oneOf([Flex.directions.ROW, Flex.directions.COLUMN]),
  elementType: PropTypes.string,
  wrap: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
  justify: PropTypes.oneOf([
    Flex.justify.START,
    Flex.justify.CENTER,
    Flex.justify.END,
    Flex.justify.SPACE_BETWEEN,
    Flex.justify.SPACE_AROUND
  ]),
  align: PropTypes.oneOf([Flex.align.START, Flex.align.CENTER, Flex.align.END]),
  gap: PropTypes.oneOfType([
    PropTypes.oneOf([Flex.gaps.NONE, Flex.gaps.SMALL, Flex.gaps.MEDIUM, Flex.gaps.LARGE]),
    PropTypes.number
  ])
};

Flex.defaultProps = {
  className: "",
  id: undefined,
  elementType: "div",
  style: undefined,
  wrap: false,
  children: undefined,
  direction: Flex.directions.ROW,
  justify: Flex.justify.START,
  align: Flex.align.CENTER,
  gap: Flex.gaps.NONE
};

export default Flex;
