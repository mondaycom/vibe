import React, { useRef, forwardRef, useMemo } from "react";
import cx from "classnames";
import useMergeRefs from "../../hooks/useMergeRefs";
import Clickable from "../Clickable/Clickable";
import { FLEX_JUSTIFY, FLEX_GAPS, FLEX_DIRECTIONS, FLEX_ALIGN } from "./FlexConstants";
import classes from "./Flex.module.scss";
import VibeComponentProps from "src/types/VibeComponentProps";
import VibeComponent from "src/types/VibeComponent";

export type FlexProps = VibeComponentProps & {
  /** class name to be add to the wrapper */
  className?: string;
  /** id to pass to the element */
  id?: string;
  style?: object;
  direction?: FLEX_DIRECTIONS;
  elementType?: React.ElementType;
  wrap?: boolean;
  children?: React.ReactElement;
  justify?: FLEX_JUSTIFY;
  align?: FLEX_ALIGN;
  gap?: FLEX_GAPS | number;
  ariaLabel?: string;
  tabIndex?: number;
  /** onClick function - MouseEvent */
  onClick?: React.MouseEventHandler;
  /** element id to describe the counter accordingly */
  ariaLabelledby?: string;
};

const Flex: VibeComponent<FlexProps, HTMLElement> = forwardRef(
  (
    {
      className,
      id,
      elementType = "div",
      direction = FLEX_DIRECTIONS.ROW,
      wrap = false,
      children,
      justify = FLEX_JUSTIFY.START,
      align = FLEX_ALIGN.CENTER,
      gap = FLEX_GAPS.NONE,
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

Flex.defaultProps = {
  className: "",
  id: undefined,
  elementType: "div",
  style: undefined,
  wrap: false,
  children: undefined,
  direction: FLEX_DIRECTIONS.ROW,
  justify: FLEX_JUSTIFY.START,
  align: FLEX_ALIGN.CENTER,
  gap: FLEX_GAPS.NONE,
  ariaLabel: undefined,
  tabIndex: undefined
};

export default {
  ...Flex,
  justify: FLEX_JUSTIFY,
  align: FLEX_ALIGN,
  gaps: FLEX_GAPS,
  directions: FLEX_DIRECTIONS
};
