import { BASE_POSITIONS } from "../../constants/positions";
import React, { useRef, forwardRef, useMemo } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useMergeRefs from "../../hooks/useMergeRefs";
import Clickable from "../../components/Clickable/Clickable";
import { FLEX_POSITIONS, FLEX_GAPS, FLEX_DIRECTIONS } from "./FlexConstants";
import classes from "./Flex.module.scss";

const Flex = forwardRef(
  (
    {
      className,
      id,
      elementType,
      direction,
      wrap,
      children,
      justify,
      align,
      gap,
      onClick,
      style,
      ariaLabelledby,
      ariaLabel,
      tabIndex
    },
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });
    const overrideStyle = useMemo(() => ({ ...style, gap: `${gap}px` }), [style, gap]);
    const onClickProps = useMemo(() => {
      if (onClick) return { elementType, ariaLabelledby };
      return { "aria-labelledby": ariaLabelledby };
    }, [onClick, elementType, ariaLabelledby]);
    const Element = onClick ? Clickable : elementType;

    return (
      <Element
        id={id}
        {...onClickProps}
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
        tabIndex={tabIndex}
        onClick={onClick}
        style={overrideStyle}
        aria-label={ariaLabel}
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
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]),
  justify: PropTypes.oneOf([
    Flex.justify.START,
    Flex.justify.CENTER,
    Flex.justify.END,
    Flex.justify.SPACE_BETWEEN,
    Flex.justify.SPACE_AROUND
  ]),
  align: PropTypes.oneOf([Flex.align.START, Flex.align.CENTER, Flex.align.END, Flex.align.STRETCH]),
  gap: PropTypes.oneOfType([
    PropTypes.oneOf([Flex.gaps.NONE, Flex.gaps.SMALL, Flex.gaps.MEDIUM, Flex.gaps.LARGE]),
    PropTypes.number
  ]),
  ariaLabel: PropTypes.string,
  tabIndex: PropTypes.number
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
  gap: Flex.gaps.NONE,
  ariaLabel: undefined,
  tabIndex: undefined
};

export default Flex;
