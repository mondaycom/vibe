import React, { forwardRef } from "react";
import cx from "classnames";
import VibeComponent from "../../types/VibeComponent";
import { TextSize, TextWeight } from "./TextConstants";
import Typography, { TypographyProps } from "../Typography/Typography";

export interface TextProps extends TypographyProps {
  size?: TextSize;
  weight?: TextWeight;
  paragraph?: boolean;
}

const Text: VibeComponent<TextProps, HTMLElement> = forwardRef(
  ({ className, size = "medium", weight = "normal", ellipsis, paragraph, ...typographyProps }, ref) => {
    const overrideEllipsis = ellipsis || !paragraph;
    const overrideElement = paragraph ? "p" : "span";
    const textGlobalClass = `vibe-text-${size}-${weight}`;
    return (
      <Typography
        ref={ref}
        className={cx(textGlobalClass, className)}
        ellipsis={overrideEllipsis}
        element={overrideElement}
        {...typographyProps}
      />
    );
  }
);

export default Text;
