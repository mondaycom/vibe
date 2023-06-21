import React, { forwardRef } from "react";
import cx from "classnames";
import VibeComponent from "../../types/VibeComponent";
import { TextSize, TextWeight } from "./TextConstants";
import Typography, { TypographyProps } from "../Typography/Typography";

export interface TextProps extends TypographyProps {
  size?: TextSize;
  weight?: TextWeight;
}

const Text: VibeComponent<TextProps, HTMLElement> = forwardRef(
  ({ className, size = "medium", weight = "normal", ...typographyProps }, ref) => {
    const textGlobalClass = `vibe-text-${size}-${weight}`;
    return <Typography ref={ref} className={cx(textGlobalClass, className)} {...typographyProps} />;
  }
);

export default Text;
