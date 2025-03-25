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
import { FlexDirection, FlexJustify, FlexAlign, FlexGap, FlexShorthand } from "./Flex.types";
import { ElementContent, VibeComponent, VibeComponentProps, withStaticProps } from "../../types";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import styles from "./Flex.module.scss";
import { camelCase } from "lodash-es";

export interface FlexProps extends VibeComponentProps {
  style?: object;
  direction?: FlexDirection;
  elementType?: React.ElementType;
  wrap?: boolean;
  children?: ElementContent | ElementContent[];
  justify?: FlexJustify;
  align?: FlexAlign;
  gap?: FlexGap | number;
  flex?: FlexShorthand;
  ariaLabel?: string;
  tabIndex?: number;
  /** onClick function - MouseEvent */
  onClick?: (event: React.MouseEvent) => void;
  /** element id to describe the counter accordingly */
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
      flex,
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

    const flexStyle = useMemo(() => {
      if (!flex) return {};

      if (["string, number"].includes(typeof flex)) {
        return { flex };
      }

      return {
        flexGrow: flex.grow,
        flexShrink: flex.shrink,
        flexBasis: flex.basis
      };
    }, [flex]);

    const overrideStyle = useMemo(() => ({ ...style, ...gapStyle, ...flexStyle }), [style, gapStyle, flexStyle]);
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
