import React, { forwardRef } from "react";
import cx from "classnames";
import VibeComponent from "../../types/VibeComponent";
import { TitleType, TitleWeight } from "./TitleConstants";
import Typography, { TypographyProps } from "../Typography/Typography";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import { camelCase } from "lodash-es";
import styles from "./Title.module.scss";

export interface TitleProps extends TypographyProps {
  type?: TitleType;
  weight?: TitleWeight;
}

const Title: VibeComponent<TitleProps, HTMLElement> = forwardRef(
  ({ className, type = "h1", weight = "normal", ...typographyProps }, ref) => {
    const textGlobalClass = getStyle(styles, camelCase(`${type}-${weight}`));
    console.log(textGlobalClass, styles, camelCase(`${type}-${weight}`));
    return <Typography element={type} ref={ref} className={cx(textGlobalClass, className)} {...typographyProps} />;
  }
);

export default Title;
