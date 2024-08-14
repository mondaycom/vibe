import React, { forwardRef, useRef } from "react";
import cx from "classnames";
import useMergeRef from "../../hooks/useMergeRef";
import {
  BackgroundColor as BackgroundColorEnum,
  Border as BorderEnum,
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
  Shadow as ShadowEnum
} from "./BoxConstants";
import {
  BackgroundColor,
  Border,
  BorderColor,
  BoxTextColor,
  Margin,
  MarginBottom,
  MarginEnd,
  MarginStart,
  MarginTop,
  MarginX,
  MarginY,
  Padding,
  PaddingBottom,
  PaddingEnd,
  PaddingStart,
  PaddingTop,
  PaddingX,
  PaddingY,
  Rounded,
  Shadow
} from "./Box.types";
import { VibeComponent, VibeComponentProps, withStaticProps, ElementContent } from "../../types";
import styles from "./Box.module.scss";

export interface BoxProps extends VibeComponentProps {
  elementType?: keyof JSX.IntrinsicElements | string;
  children?: ElementContent;
  disabled?: boolean;
  border?: Border;
  borderColor?: BorderColor;
  rounded?: Rounded;
  shadow?: Shadow;
  margin?: Margin;
  marginX?: MarginX;
  marginY?: MarginY;
  marginTop?: MarginTop;
  marginEnd?: MarginEnd;
  marginBottom?: MarginBottom;
  marginStart?: MarginStart;
  padding?: Padding;
  paddingX?: PaddingX;
  paddingY?: PaddingY;
  paddingTop?: PaddingTop;
  paddingEnd?: PaddingEnd;
  paddingBottom?: PaddingBottom;
  paddingStart?: PaddingStart;
  backgroundColor?: BackgroundColor;
  textColor?: BoxTextColor;
  scrollable?: boolean;
  style?: React.CSSProperties;
}

const Box: VibeComponent<BoxProps> & {
  borders?: typeof BorderEnum;
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
    }: BoxProps,
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRef(ref, componentRef);
    const stylesTyped: Record<string, string> = styles;
    const getStyleByProp = (propValue: string): string | undefined =>
      propValue in stylesTyped ? stylesTyped[propValue] : undefined;

    return React.createElement(
      elementType,
      {
        ref: mergedRef,
        className: cx(
          styles.box,
          className,
          { [styles.opacityDisabled]: disabled, [styles.scrollable]: scrollable },
          getStyleByProp(border),
          getStyleByProp(borderColor),
          getStyleByProp(rounded),
          getStyleByProp(shadow),
          getStyleByProp(margin),
          getStyleByProp(marginX),
          getStyleByProp(marginY),
          getStyleByProp(marginTop),
          getStyleByProp(marginEnd),
          getStyleByProp(marginBottom),
          getStyleByProp(marginStart),
          getStyleByProp(padding),
          getStyleByProp(paddingX),
          getStyleByProp(paddingY),
          getStyleByProp(paddingTop),
          getStyleByProp(paddingEnd),
          getStyleByProp(paddingBottom),
          getStyleByProp(paddingStart),
          getStyleByProp(textColor),
          getStyleByProp(backgroundColor)
        ),
        id: id,
        style
      },
      children
    );
  }
);

export default withStaticProps(Box, {
  borders: BorderEnum,
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
