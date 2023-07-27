import React, { forwardRef } from "react";
import cx from "classnames";
import VibeComponent from "../../types/VibeComponent";
import { withStaticProps } from "../../types";
import { HeadingType, HeadingWeight } from "./HeadingConstants";
import Typography, { TypographyProps } from "../Typography/Typography";
import styles from "./Heading.module.scss";

export interface HeadingProps extends TypographyProps {
  type?: HeadingType;
  weight?: HeadingWeight;
}

const Heading: VibeComponent<HeadingProps, HTMLElement> & {
  types?: typeof HeadingType;
  weights?: typeof HeadingWeight;
} = forwardRef(({ className, type = "h1", weight = "normal", ...typographyProps }, ref) => {
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
  weights: HeadingWeight
});
