import React, { forwardRef, type ReactNode } from "react";
import cx from "classnames";
import { camelCase } from "es-toolkit";
import { getStyle } from "@vibe/shared";
import Typography, { type TypographyProps } from "../Typography/Typography";
import { TypographyContext } from "../Typography/TypographyContext";
import styles from "./Heading.module.scss";
import { type HeadingType, type HeadingWeight } from "./Heading.types";
import { type TypographyAlign, type TypographyColor } from "../Typography/Typography.types";

const OVERFLOW_TOLERANCE_IN_PX = 4;

export interface HeadingProps extends TypographyProps {
  /**
   * The heading type.
   */
  type?: HeadingType;
  /**
   * The font weight of the heading.
   */
  weight?: HeadingWeight;
  /**
   * The text alignment.
   */
  align?: TypographyAlign;
  /**
   * The text color.
   */
  color?: TypographyColor;
  /**
   * The content inside the heading.
   */
  children: ReactNode;
}

const Heading = forwardRef(
  (
    { className, type = "h1", weight = "normal", ...typographyProps }: HeadingProps,
    ref: React.ForwardedRef<HTMLElement>
  ) => {
    return (
      <TypographyContext.Provider value={{ overflowTolerance: OVERFLOW_TOLERANCE_IN_PX }}>
        <Typography
          element={type}
          ref={ref}
          className={cx(styles.heading, getStyle(styles, camelCase(type + "-" + weight)), className)}
          {...typographyProps}
        />
      </TypographyContext.Provider>
    );
  }
);

export default Heading;
