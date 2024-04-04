import React, { forwardRef, ReactNode } from "react";
import cx from "classnames";
import { camelCase } from "lodash-es";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import VibeComponent from "../../types/VibeComponent";
import { TextType, TextWeight } from "./TextConstants";
import Typography, { TypographyProps } from "../Typography/Typography";
import { TypographyAlign, TypographyColor } from "../Typography/TypographyConstants";
import { withStaticProps } from "../../types";
import styles from "./Text.module.scss";

export interface TextProps extends TypographyProps {
  type?: TextType;
  weight?: TextWeight;
  children: ReactNode;
}

const Text: VibeComponent<TextProps, HTMLElement> & {
  types?: typeof TextType;
  weights?: typeof TextWeight;
  colors?: typeof TypographyColor;
  align?: typeof TypographyAlign;
} = forwardRef(
  (
    {
      className,
      type = TextType.TEXT2,
      weight = TextWeight.NORMAL,
      ellipsis,
      element = "div",
      children,
      ...typographyProps
    },
    ref
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

export default withStaticProps(Text, {
  types: TextType,
  weights: TextWeight,
  colors: TypographyColor,
  align: TypographyAlign
});
