import React, { forwardRef } from "react";
import cx from "classnames";
import VibeComponent from "../../types/VibeComponent";
import { withStaticProps } from "../../types";
import { HeadingType, HeadingWeight } from "./HeadingConstants";
import Typography, { TypographyProps } from "../Typography/Typography";
import { TypographyAlign, TypographyColor } from "../Typography/TypographyConstants";
import styles from "./Heading.module.scss";

export interface HeadingProps extends TypographyProps {
  type?: HeadingType;
  weight?: HeadingWeight;
  align?: TypographyAlign;
  color?: TypographyColor;
}

const Heading: VibeComponent<HeadingProps, HTMLElement> & {
  types?: typeof HeadingType;
  weights?: typeof HeadingWeight;
  colors?: typeof TypographyColor;
  align?: typeof TypographyAlign;
} = forwardRef(({ className, type = HeadingType.H1, weight = HeadingWeight.NORMAL, ...typographyProps }, ref) => {
  return (
    <Typography
      element={type}
      ref={ref}
      className={cx(styles.heading, styles[type], styles[weight], className)}
      {...typographyProps}
    />
  );
});

export default withStaticProps(Heading, {
  types: HeadingType,
  weights: HeadingWeight,
  align: TypographyAlign,
  colors: TypographyColor
});
