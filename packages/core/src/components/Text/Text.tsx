import React, { forwardRef, ReactNode } from "react";
import cx from "classnames";
import { camelCase } from "lodash-es";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
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

interface TextStaticProps {
  types: typeof TextTypeEnum;
  weights: typeof TextWeightEnum;
  colors: typeof TypographyColorEnum;
  align: typeof TypographyAlignEnum;
}

export default withStaticProps<TextProps, TextStaticProps>(Text, {
  types: TextTypeEnum,
  weights: TextWeightEnum,
  colors: TypographyColorEnum,
  align: TypographyAlignEnum
});
