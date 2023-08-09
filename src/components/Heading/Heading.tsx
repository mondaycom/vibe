import React, { forwardRef, ReactNode } from "react";
import cx from "classnames";
import { camelCase } from "lodash-es";
import VibeComponent from "../../types/VibeComponent";
import { withStaticProps } from "../../types";
import { HeadingType, HeadingWeight } from "./HeadingConstants";
import Typography, { TypographyProps } from "../Typography/Typography";
import { TypographyAlign, TypographyColor } from "../Typography/TypographyConstants";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import styles from "./Heading.module.scss";

export interface HeadingProps extends TypographyProps {
  type?: HeadingType;
  weight?: HeadingWeight;
  align?: TypographyAlign;
  color?: TypographyColor;
  children: ReactNode;
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
      className={cx(styles.heading, getStyle(styles, camelCase(type + "-" + weight)), className)}
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
