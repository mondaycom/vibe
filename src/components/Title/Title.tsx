import React, { forwardRef } from "react";
import cx from "classnames";
import VibeComponent from "../../types/VibeComponent";
import { TitleType, TitleWeight } from "./TitleConstants";
import Typography, { TypographyProps } from "../Typography/Typography";

export interface TitleProps extends TypographyProps {
  type?: TitleType;
  weight?: TitleWeight;
}

const Title: VibeComponent<TitleProps, HTMLElement> = forwardRef(
  ({ className, type = "h1", weight = "normal", ...typographyProps }, ref) => {
    const textGlobalClass = `vibe-${type}-${weight}`;
    return <Typography element={type} ref={ref} className={cx(textGlobalClass, className)} {...typographyProps} />;
  }
);

export default Title;
