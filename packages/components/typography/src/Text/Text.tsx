import React, { forwardRef, type ReactNode } from "react";
import cx from "classnames";
import { camelCase } from "es-toolkit";
import { getStyle } from "@vibe/shared";
import Typography, { type TypographyProps } from "../Typography/Typography";
import { type TextType, type TextWeight } from "./Text.types";
import styles from "./Text.module.scss";

export interface TextProps extends TypographyProps {
  /**
   * The text style variant.
   */
  type?: TextType;
  /**
   * The font weight of the text.
   */
  weight?: TextWeight;
  /**
   * The content inside the text component.
   */
  children: ReactNode;
}

const Text = forwardRef(
  (
    {
      className,
      type = "text2",
      weight = "normal",
      ellipsis,
      element = "div",
      children,
      ...typographyProps
    }: TextProps,
    ref: React.ForwardedRef<HTMLElement>
  ) => {
    const overrideEllipsis = ellipsis ?? element !== "p";
    return (
      <Typography
        ref={ref}
        className={cx(styles.text, getStyle(styles, camelCase(type + "-" + weight)), className)}
        ellipsis={overrideEllipsis}
        element={element}
        {...typographyProps}
      >
        {children}
      </Typography>
    );
  }
);

export default Text;
