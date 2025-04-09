import React, { forwardRef, useRef } from "react";
import { camelCase } from "lodash-es";
import cx from "classnames";
import useMergeRef from "../../hooks/useMergeRef";
import {
  BackgroundColor as BackgroundColorEnum,
  BorderColor as BorderColorEnum,
  BoxTextColor as BoxTextColorEnum,
  Margin as MarginEnum,
  MarginBottom as MarginBottomEnum,
  MarginEnd as MarginEndEnum,
  MarginStart as MarginStartEnum,
  MarginTop as MarginTopEnum,
  MarginX as MarginXEnum,
  MarginY as MarginYEnum,
  Padding as PaddingEnum,
  PaddingBottom as PaddingBottomEnum,
  PaddingEnd as PaddingEndEnum,
  PaddingStart as PaddingStartEnum,
  PaddingTop as PaddingTopEnum,
  PaddingX as PaddingXEnum,
  PaddingY as PaddingYEnum,
  Rounded as RoundedEnum,
  Shadow as ShadowEnum,
  SizePrefixMapping
} from "./BoxConstants";
import { BackgroundColor, BorderColor, BaseBoxSize, BoxSize, BoxTextColor, RoundedSize, Shadow } from "./Box.types";
import { VibeComponent, VibeComponentProps, withStaticProps, ElementContent } from "../../types";
import styles from "./Box.module.scss";
import { getTestId } from "../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../tests/constants";

export interface BoxProps extends VibeComponentProps {
  /**
   * The HTML element or custom component used as the root.
   */
  elementType?: keyof JSX.IntrinsicElements | string;
  /**
   * The content inside the box.
   */
  children?: ElementContent;
  /**
   * If true, the box is disabled.
   */
  disabled?: boolean;
  /**
   * If true, applies a border to the box.
   */
  border?: boolean;
  /**
   * The color of the border.
   */
  borderColor?: BorderColor;
  /**
   * The border radius of the box.
   */
  rounded?: RoundedSize;
  /**
   * The shadow style applied to the box.
   */
  shadow?: Shadow;
  /**
   * The margin applied to all sides.
   */
  margin?: BoxSize;
  /**
   * The horizontal margin.
   */
  marginX?: BoxSize;
  /**
   * The vertical margin.
   */
  marginY?: BoxSize;
  /**
   * The top margin.
   */
  marginTop?: BoxSize;
  /**
   * The end (right in LTR, left in RTL) margin.
   */
  marginEnd?: BoxSize;
  /**
   * The bottom margin.
   */
  marginBottom?: BaseBoxSize;
  /**
   * The start (left in LTR, right in RTL) margin.
   */
  marginStart?: BaseBoxSize;
  /**
   * The padding applied to all sides.
   */
  padding?: BaseBoxSize;
  /**
   * The horizontal padding.
   */
  paddingX?: BaseBoxSize;
  /**
   * The vertical padding.
   */
  paddingY?: BaseBoxSize;
  /**
   * The top padding.
   */
  paddingTop?: BaseBoxSize;
  /**
   * The end (right in LTR, left in RTL) padding.
   */
  paddingEnd?: BaseBoxSize;
  /**
   * The bottom padding.
   */
  paddingBottom?: BaseBoxSize;
  /**
   * The start (left in LTR, right in RTL) padding.
   */
  paddingStart?: BaseBoxSize;
  /**
   * The background color of the box.
   */
  backgroundColor?: BackgroundColor;
  /**
   * The text color inside the box.
   */
  textColor?: BoxTextColor;
  /**
   * If true, the box content is scrollable.
   */
  scrollable?: boolean;
  /**
   * Inline styles applied to the box.
   */
  style?: React.CSSProperties;
}

const Box: VibeComponent<BoxProps> & {
  borderColors?: typeof BorderColorEnum;
  roundeds?: typeof RoundedEnum;
  shadows?: typeof ShadowEnum;
  margins?: typeof MarginEnum;
  marginXs?: typeof MarginXEnum;
  marginYs?: typeof MarginYEnum;
  marginTops?: typeof MarginTopEnum;
  marginEnds?: typeof MarginEndEnum;
  marginBottoms?: typeof MarginBottomEnum;
  marginStarts?: typeof MarginStartEnum;
  paddings?: typeof PaddingEnum;
  paddingXs?: typeof PaddingXEnum;
  paddingYs?: typeof PaddingYEnum;
  paddingTops?: typeof PaddingTopEnum;
  paddingEnds?: typeof PaddingEndEnum;
  paddingBottoms?: typeof PaddingBottomEnum;
  paddingStarts?: typeof PaddingStartEnum;
  backgroundColors?: typeof BackgroundColorEnum;
  textColors?: typeof BoxTextColorEnum;
} = forwardRef(
  (
    {
      className,
      id,
      elementType = "div",
      children,
      disabled,
      border,
      scrollable,
      style,
      "data-testid": dataTestId,
      ...props
    }: BoxProps,
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRef(ref, componentRef);

    const getClassNames = (styles: Record<string, string>, props: Record<string, any | undefined>) => {
      return Object.keys(props)
        .filter(prop => props[prop])
        .map(prop => {
          const value = props[prop];
          const prefix = SizePrefixMapping[prop as keyof typeof SizePrefixMapping];
          return prefix && typeof value === "string" ? styles[camelCase(`${prefix}-${value}`)] : styles[value];
        })
        .filter(Boolean);
    };

    return React.createElement(
      elementType,
      {
        "data-testid": dataTestId || getTestId(ComponentDefaultTestId.BOX, id),
        ref: mergedRef,
        className: cx(
          styles.box,
          className,
          { [styles.opacityDisabled]: disabled, [styles.scrollable]: scrollable, [styles.border]: border },
          ...getClassNames(styles, props)
        ),
        id: id,
        style
      },
      children
    );
  }
);

export default withStaticProps(Box, {
  borderColors: BorderColorEnum,
  roundeds: RoundedEnum,
  shadows: ShadowEnum,
  margins: MarginEnum,
  marginXs: MarginXEnum,
  marginYs: MarginYEnum,
  marginTops: MarginTopEnum,
  marginEnds: MarginEndEnum,
  marginBottoms: MarginBottomEnum,
  marginStarts: MarginStartEnum,
  paddings: PaddingEnum,
  paddingXs: PaddingXEnum,
  paddingYs: PaddingYEnum,
  paddingTops: PaddingTopEnum,
  paddingEnds: PaddingEndEnum,
  paddingBottoms: PaddingBottomEnum,
  paddingStarts: PaddingStartEnum,
  backgroundColors: BackgroundColorEnum,
  textColors: BoxTextColorEnum
});
