import React, { forwardRef, ReactElement, useRef } from "react";
import cx from "classnames";
import useMergeRefs from "../../hooks/useMergeRefs";
import {
  BACKGROUND_COLORS,
  BORDER,
  BORDER_COLOR,
  COLORS,
  DISABLED,
  MARGIN,
  MARGIN_BOTTOM,
  MARGIN_END,
  MARGIN_START,
  MARGIN_TOP,
  MARGIN_X,
  MARGIN_Y,
  PADDING,
  PADDING_BOTTOM,
  PADDING_END,
  PADDING_START,
  PADDING_TOP,
  PADDING_X,
  PADDING_Y,
  ROUNDED,
  SHADOW
} from "./BoxConstants";
import { VibeComponentProps } from "../../types";
import VibeComponent from "../../types/VibeComponent";
import styles from "./Box.module.scss";

interface BoxProps extends VibeComponentProps {
  elementType?: keyof JSX.IntrinsicElements | string;
  children?: ReactElement | ReactElement[];
  disabled?: boolean;
  border?: typeof BORDER;
  borderColor?: typeof BORDER_COLOR;
  rounded?: typeof ROUNDED;
  shadow?: typeof SHADOW;
  margin?: typeof MARGIN;
  marginX?: typeof MARGIN_X;
  marginY?: typeof MARGIN_Y;
  marginTop?: typeof MARGIN_TOP;
  marginEnd?: typeof MARGIN_END;
  marginBottom?: typeof MARGIN_BOTTOM;
  marginStart?: typeof MARGIN_START;
  padding?: typeof PADDING;
  paddingX?: typeof PADDING_X;
  paddingY?: typeof PADDING_Y;
  paddingTop?: typeof PADDING_TOP;
  paddingEnd?: typeof PADDING_END;
  paddingBottom?: typeof PADDING_BOTTOM;
  paddingStart?: typeof PADDING_START;
  backgroundColor?: typeof BACKGROUND_COLORS;
  textColor?: typeof COLORS;
}

const Box: VibeComponent<BoxProps> & {
  borders?: typeof BORDER;
  borderColors?: typeof BORDER_COLOR;
  roundeds?: typeof ROUNDED;
  shadows?: typeof SHADOW;
  margins?: typeof MARGIN;
  marginXs?: typeof MARGIN_X;
  marginYs?: typeof MARGIN_Y;
  marginTops?: typeof MARGIN_TOP;
  marginEnds?: typeof MARGIN_END;
  marginBottoms?: typeof MARGIN_BOTTOM;
  marginStarts?: typeof MARGIN_START;
  paddings?: typeof PADDING;
  paddingXs?: typeof PADDING_X;
  paddingYs?: typeof PADDING_Y;
  paddingTops?: typeof PADDING_TOP;
  paddingEnds?: typeof PADDING_END;
  paddingBottoms?: typeof PADDING_BOTTOM;
  paddingStarts?: typeof PADDING_START;
  backgroundColors?: typeof BACKGROUND_COLORS;
  textColors?: typeof COLORS;
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
      backgroundColor
    },
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });
    return React.createElement(
      elementType,
      {
        ref: mergedRef,
        className: cx(
          styles.box,
          className,
          { [DISABLED.DISABLED]: disabled },
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
        id: id
      },
      children
    );
  }
);

Object.assign(Box, {
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

export default Box;
