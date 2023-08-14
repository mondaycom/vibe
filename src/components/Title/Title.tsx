import React, { forwardRef } from "react";
import cx from "classnames";
import VibeComponent from "../../types/VibeComponent";
import { TitleType, TitleWeight } from "./TitleConstants";
import Typography, { TypographyProps } from "../Typography/Typography";
import styles from "./Title.module.scss";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import { camelCase } from "lodash-es";

export interface TitleProps extends TypographyProps {
  type?: TitleType;
  weight?: TitleWeight;
}

const Title: VibeComponent<TitleProps, HTMLElement> = forwardRef(
  ({ className, type = "h1", weight = "normal", ...typographyProps }, ref) => {
    return (
      <Typography
        element={type}
        ref={ref}
        className={cx(styles.heading, getStyle(styles, camelCase(type + "-" + weight)), className)}
        {...typographyProps}
      />
    );
  }
);

export default Title;
