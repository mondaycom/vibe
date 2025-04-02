import React, { forwardRef, useMemo, useRef } from "react";
import cx from "classnames";
import useMergeRef from "../../hooks/useMergeRef";
import Clickable from "../../components/Clickable/Clickable";
import {
  FlexAlign as FlexAlignEnum,
  FlexDirection as FlexDirectionEnum,
  FlexGap as FlexGapEnum,
  FlexJustify as FlexJustifyEnum
} from "./FlexConstants";
import { FlexDirection, FlexJustify, FlexAlign, FlexGap } from "./Flex.types";
import { ElementContent, VibeComponent, VibeComponentProps, withStaticProps } from "../../types";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import styles from "./Flex.module.scss";
import { camelCase } from "lodash-es";

export interface FlexProps extends VibeComponentProps {
  /**
   * Inline styles applied to the flex container.
   */
  style?: object;
  /**
   * The direction of the flex container.
   */
  direction?: FlexDirection;
  /**
   * The HTML element or component used as the root.
   */
  elementType?: React.ElementType;
  /**
   * If true, allows wrapping of flex items.
   */
  wrap?: boolean;
  /**
   * The content inside the flex container.
   */
  children?: ElementContent | ElementContent[];
  /**
   * Defines how flex items are aligned along the main axis.
   */
  justify?: FlexJustify;
  /**
   * Defines how flex items are aligned along the cross axis.
   */
  align?: FlexAlign;
  /**
   * The gap between flex items.
   */
  gap?: FlexGap | number;
  /**
   * The label of the flex container for accessibility.
   */
  ariaLabel?: string;
  /**
   * The tab order of the element.
   */
  tabIndex?: number;
  /**
   * Callback fired when the flex container is clicked.
   */
  onClick?: (event: React.MouseEvent) => void;
  /**
   * ID of the element describing the flex container.
   */
  ariaLabelledby?: string;
}

const Flex: VibeComponent<FlexProps> & {
  justify?: typeof FlexJustifyEnum;
  align?: typeof FlexAlignEnum;
  gaps?: typeof FlexGapEnum;
  directions?: typeof FlexDirectionEnum;
} = forwardRef(
  (
    {
      className,
      id,
      elementType = "div",
      direction = "row",
      wrap = false,
      children,
      justify = "start",
      align = "center",
      gap,
      onClick,
      style,
      ariaLabelledby,
      ariaLabel,
      tabIndex,
      "data-testid": dataTestId
    }: FlexProps,
    ref
  ) => {
    const componentRef = useRef<HTMLElement>(null);
    const mergedRef = useMergeRef(ref, componentRef);

    const gapStyle = useMemo(() => {
      if (!gap) {
        return;
      }
      if (typeof gap === "number") {
        return { gap: `${gap}px` };
      }
      return { gap: `var(--spacing-${gap})` };
    }, [gap]);

    const overrideStyle = useMemo(() => ({ ...style, ...gapStyle }), [style, gapStyle]);
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
          getStyle(styles, camelCase(`direction-${direction}`)),
          getStyle(styles, camelCase(`justify-${justify}`)),
          getStyle(styles, camelCase(`align-${align}`)),
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
  justify: FlexJustifyEnum,
  align: FlexAlignEnum,
  gaps: FlexGapEnum,
  directions: FlexDirectionEnum
});
