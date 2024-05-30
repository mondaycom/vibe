import React, { forwardRef, useRef } from "react";
import cx from "classnames";
import useMergeRef from "../../hooks/useMergeRef";
import {
  BACKGROUND_COLORS,
  BackgroundColor,
  BORDER,
  Border,
  BORDER_COLOR,
  BorderColor,
  COLORS,
  Color,
  MARGIN,
  Margin,
  MARGIN_BOTTOM,
  MarginBottom,
  MARGIN_END,
  MarginEnd,
  MARGIN_START,
  MarginStart,
  MARGIN_TOP,
  MarginTop,
  MARGIN_X,
  MarginX,
  MARGIN_Y,
  MarginY,
  PADDING,
  Padding,
  PADDING_BOTTOM,
  PaddingBottom,
  PADDING_END,
  PaddingEnd,
  PADDING_START,
  PaddingStart,
  PADDING_TOP,
  PaddingTop,
  PADDING_X,
  PaddingX,
  PADDING_Y,
  PaddingY,
  ROUNDED,
  Rounded,
  SHADOW,
  Shadow,
  DISABLED
} from "./BoxConstants";
import { ValueOf, VibeComponent, VibeComponentProps, withStaticProps, ElementContent } from "../../types";
import styles from "./Box.module.scss";

export interface BoxProps extends VibeComponentProps {
  elementType?: keyof JSX.IntrinsicElements | string;
  children?: ElementContent;
  disabled?: boolean;
  border?: ValueOf<Border>;
  borderColor?: ValueOf<BorderColor>;
  rounded?: ValueOf<Rounded>;
  shadow?: ValueOf<Shadow>;
  margin?: ValueOf<Margin>;
  marginX?: ValueOf<MarginX>;
  marginY?: ValueOf<MarginY>;
  marginTop?: ValueOf<MarginTop>;
  marginEnd?: ValueOf<MarginEnd>;
  marginBottom?: ValueOf<MarginBottom>;
  marginStart?: ValueOf<MarginStart>;
  padding?: ValueOf<Padding>;
  paddingX?: ValueOf<PaddingX>;
  paddingY?: ValueOf<PaddingY>;
  paddingTop?: ValueOf<PaddingTop>;
  paddingEnd?: ValueOf<PaddingEnd>;
  paddingBottom?: ValueOf<PaddingBottom>;
  paddingStart?: ValueOf<PaddingStart>;
  backgroundColor?: ValueOf<BackgroundColor>;
  textColor?: ValueOf<Color>;
  /**
   * TODO: make default in next major version
   */
  scrollable?: boolean;
  style?: React.CSSProperties;
}

const Box: VibeComponent<BoxProps> & {
  borders?: Border;
  borderColors?: BorderColor;
  roundeds?: Rounded;
  shadows?: Shadow;
  margins?: Margin;
  marginXs?: MarginX;
  marginYs?: MarginY;
  marginTops?: MarginTop;
  marginEnds?: MarginEnd;
  marginBottoms?: MarginBottom;
  marginStarts?: MarginStart;
  paddings?: Padding;
  paddingXs?: PaddingX;
  paddingYs?: PaddingY;
  paddingTops?: PaddingTop;
  paddingEnds?: PaddingEnd;
  paddingBottoms?: PaddingBottom;
  paddingStarts?: PaddingStart;
  backgroundColors?: BackgroundColor;
  textColors?: Color;
} = forwardRef(
  (
    {
      className,
      id,
      elementType = "div",
      children,
      disabled,
      border,
      borderColor,
      rounded,
      shadow,
      margin,
      marginX,
      marginY,
      marginTop,
      marginEnd,
      marginBottom,
      marginStart,
      padding,
      paddingX,
      paddingY,
      paddingTop,
      paddingEnd,
      paddingBottom,
      paddingStart,
      textColor,
      backgroundColor,
      scrollable,
      style
    },
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRef(ref, componentRef);
    return React.createElement(
      elementType,
      {
        ref: mergedRef,
        className: cx(
          styles.box,
          className,
          { [DISABLED.DISABLED]: disabled, [styles.scrollable]: scrollable },
          border,
          borderColor,
          rounded,
          shadow,
          margin,
          marginX,
          marginY,
          marginTop,
          marginEnd,
          marginBottom,
          marginStart,
          padding,
          paddingX,
          paddingY,
          paddingTop,
          paddingEnd,
          paddingBottom,
          paddingStart,
          textColor,
          backgroundColor
        ),
        id: id,
        style
      },
      children
    );
  }
);

export default withStaticProps(Box, {
  borders: BORDER,
  borderColors: BORDER_COLOR,
  roundeds: ROUNDED,
  shadows: SHADOW,
  margins: MARGIN,
  marginXs: MARGIN_X,
  marginYs: MARGIN_Y,
  marginTops: MARGIN_TOP,
  marginEnds: MARGIN_END,
  marginBottoms: MARGIN_BOTTOM,
  marginStarts: MARGIN_START,
  paddings: PADDING,
  paddingXs: PADDING_X,
  paddingYs: PADDING_Y,
  paddingTops: PADDING_TOP,
  paddingEnds: PADDING_END,
  paddingBottoms: PADDING_BOTTOM,
  paddingStarts: PADDING_START,
  backgroundColors: BACKGROUND_COLORS,
  textColors: COLORS
});
