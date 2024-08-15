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
import {
  BackgroundColor,
  BorderColor,
  BoxPropSize,
  BoxPropSizeWithAuto,
  BoxTextColor,
  Rounded,
  Shadow
} from "./Box.types";
import { VibeComponent, VibeComponentProps, withStaticProps, ElementContent } from "../../types";
import styles from "./Box.module.scss";

export interface BoxProps extends VibeComponentProps {
  elementType?: keyof JSX.IntrinsicElements | string;
  children?: ElementContent;
  disabled?: boolean;
  border?: boolean;
  borderColor?: BorderColor;
  rounded?: Rounded;
  shadow?: Shadow;
  margin?: BoxPropSizeWithAuto;
  marginX?: BoxPropSizeWithAuto;
  marginY?: BoxPropSizeWithAuto;
  marginTop?: BoxPropSizeWithAuto;
  marginEnd?: BoxPropSizeWithAuto;
  marginBottom?: BoxPropSize;
  marginStart?: BoxPropSize;
  padding?: BoxPropSize;
  paddingX?: BoxPropSize;
  paddingY?: BoxPropSize;
  paddingTop?: BoxPropSize;
  paddingEnd?: BoxPropSize;
  paddingBottom?: BoxPropSize;
  paddingStart?: BoxPropSize;
  backgroundColor?: BackgroundColor;
  textColor?: BoxTextColor;
  scrollable?: boolean;
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
  ({ className, id, elementType = "div", children, disabled, border, scrollable, style, ...props }: BoxProps, ref) => {
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
