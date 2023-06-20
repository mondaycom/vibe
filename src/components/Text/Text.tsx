import React, { forwardRef } from "react";
import cx from "classnames";
import VibeComponent from "../../types/VibeComponent";
import { TextSize, TextWeight } from "./TextConstants";
import Typography, { TypographyProps } from "../Typography/Typography";
import { withStaticProps } from "../../types";
import { TypographyAlign, TypographyColor } from "../Typography/TypographyConstants";

export interface TextProps extends TypographyProps {
  size?: TextSize;
  weight?: TextWeight;
}

const Text: VibeComponent<TextProps, HTMLElement> & {
  sizes?: typeof TextSize;
  weights?: typeof TextWeight;
  colors?: typeof TypographyColor;
  align?: typeof TypographyAlign;
} = forwardRef(({ className, size = TextSize.MEDIUM, weight = TextWeight.NORMAL, ...typographyProps }, ref) => {
  const textGlobalClass = `vibe-text-${size}-${weight}`;
  return <Typography ref={ref} className={cx(textGlobalClass, className)} {...typographyProps} />;
});

export default withStaticProps(Text, {
  sizes: TextSize,
  weights: TextWeight,
  colors: TypographyColor,
  align: TypographyAlign
});
