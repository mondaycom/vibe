import React, { forwardRef } from "react";
import cx from "classnames";
import VibeComponent from "../../types/VibeComponent";
import { TitleType, TitleWeight } from "./HeadingConstants";
import Typography, { TypographyProps } from "../Typography/Typography";
import styles from "./Heading.module.scss";

export interface TitleProps extends TypographyProps {
  type?: TitleType;
  weight?: TitleWeight;
}

const Heading: VibeComponent<TitleProps, HTMLElement> = forwardRef(
  ({ className, type = "h1", weight = "normal", ...typographyProps }, ref) => {
    return (
      <Typography
        element={type}
        ref={ref}
        className={cx(styles.heading, styles[type], styles[weight], className)}
        {...typographyProps}
      />
    );
  }
);

export default Heading;
