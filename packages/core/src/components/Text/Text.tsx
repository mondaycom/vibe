import React, { forwardRef, ReactNode } from "react";
import cx from "classnames";
import { camelCase } from "lodash-es";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import VibeComponent from "../../types/VibeComponent";
import { TextType as TextTypeEnum, TextWeight as TextWeightEnum } from "./TextConstants";
import Typography, { TypographyProps } from "../Typography/Typography";
import {
  TypographyAlign as TypographyAlignEnum,
  TypographyColor as TypographyColorEnum
} from "../Typography/TypographyConstants";
import { TextType, TextWeight } from "./Text.types";
import { withStaticProps } from "../../types";
import styles from "./Text.module.scss";

export interface TextProps extends TypographyProps {
  type?: TextType;
  weight?: TextWeight;
  children: ReactNode;
}

const Text: VibeComponent<TextProps, HTMLElement> & {
  types?: typeof TextTypeEnum;
  weights?: typeof TextWeightEnum;
  colors?: typeof TypographyColorEnum;
  align?: typeof TypographyAlignEnum;
} = forwardRef(
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
  types: TextTypeEnum,
  weights: TextWeightEnum,
  colors: TypographyColorEnum,
  align: TypographyAlignEnum
});
