import React, { forwardRef } from "react";
import cx from "classnames";
import VibeComponent from "../../types/VibeComponent";
import { TitleType, TitleWeight } from "./TitleConstants";
import Typography, { TypographyProps } from "../Typography/Typography";
import { withStaticProps } from "../../types";
import { TypographyAlign, TypographyColor } from "../Typography/TypographyConstants";

export interface TitleProps extends TypographyProps {
  type?: TitleType;
  weight?: TitleWeight;
}

const Title: VibeComponent<TitleProps, HTMLElement> & {
  types?: typeof TitleType;
  weights?: typeof TitleWeight;
  colors?: typeof TypographyColor;
  align?: typeof TypographyAlign;
} = forwardRef(({ className, type = TitleType.H1, weight = TitleWeight.NORMAL, ...typographyProps }, ref) => {
  const textGlobalClass = `vibe-${type}-${weight}`;
  return <Typography ref={ref} className={cx(textGlobalClass, className)} {...typographyProps} />;
});

export default withStaticProps(Title, {
  types: TitleType,
  weights: TitleWeight,
  colors: TypographyColor,
  align: TypographyAlign
});
