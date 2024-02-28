import React, { forwardRef, useMemo, useRef } from "react";
import cx from "classnames";
import useMergeRef from "../../hooks/useMergeRef";
import Clickable from "../../components/Clickable/Clickable";
import { FlexAlign, FlexDirection, FlexGap, FlexJustify } from "./FlexConstants";
import { ElementContent, VibeComponent, VibeComponentProps, withStaticProps } from "../../types";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import styles from "./Flex.module.scss";

export interface FlexProps extends VibeComponentProps {
  style?: object;
  direction?: FlexDirection;
  elementType?: React.ElementType;
  wrap?: boolean;
  children?: ElementContent | ElementContent[];
  justify?: FlexJustify;
  align?: FlexAlign;
  gap?: FlexGap | number;
  ariaLabel?: string;
  tabIndex?: number;
  /** onClick function - MouseEvent */
  onClick?: (event: React.MouseEvent) => void;
  /** element id to describe the counter accordingly */
  ariaLabelledby?: string;
}

const Flex: VibeComponent<FlexProps> & {
  justify?: typeof FlexJustify;
  align?: typeof FlexAlign;
  gaps?: typeof FlexGap;
  directions?: typeof FlexDirection;
} = forwardRef(
  (
    {
      className,
      id,
      elementType = "div",
      direction = Flex.directions.ROW,
      wrap = false,
      children,
      justify = Flex.justify.START,
      align = Flex.align.CENTER,
      gap = Flex.gaps.NONE,
      onClick,
      style,
      ariaLabelledby,
      ariaLabel,
      tabIndex,
      "data-testid": dataTestId
    },
    ref
  ) => {
    const componentRef = useRef<HTMLElement>(null);
    const mergedRef = useMergeRef(ref, componentRef);

    const overrideStyle = useMemo(() => ({ ...style, gap: `${gap}px` }), [style, gap]);
    const onClickProps = useMemo(() => {
      if (onClick) return { elementType, ariaLabelledby };
      return { "aria-labelledby": ariaLabelledby };
    }, [onClick, elementType, ariaLabelledby]);
    const Element = onClick ? Clickable : elementType;

    return (
      <Element
        id={id}
        data-testid={dataTestId}
        {...onClickProps}
        ref={mergedRef}
        className={cx(
          styles.container,
          getStyle(styles, `direction${direction}`),
          getStyle(styles, `justify${justify}`),
          getStyle(styles, `align${align}`),
          className,
          {
            [styles.wrap]: wrap
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

export default withStaticProps(Flex, {
  justify: FlexJustify,
  align: FlexAlign,
  gaps: FlexGap,
  directions: FlexDirection
});
