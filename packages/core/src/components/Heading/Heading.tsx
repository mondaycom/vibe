import React, { forwardRef, ReactNode } from "react";
import cx from "classnames";
import { camelCase } from "lodash-es";
import { withStaticProps } from "../../types";
import { HeadingType as HeadingTypeEnum, HeadingWeight as HeadingWeightEnum } from "./HeadingConstants";
import Typography, { TypographyProps } from "../Typography/Typography";
import {
  TypographyAlign as TypographyAlignEnum,
  TypographyColor as TypographyColorEnum
} from "../Typography/TypographyConstants";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import styles from "./Heading.module.scss";
import { TypographyContext } from "../Typography/utils/TypographyContext";
import { HeadingType, HeadingWeight } from "./Heading.types";
import { TypographyAlign, TypographyColor } from "../Typography";

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

interface HeadingStaticProps {
  types: typeof HeadingTypeEnum;
  weights: typeof HeadingWeightEnum;
  colors: typeof TypographyColorEnum;
  align: typeof TypographyAlignEnum;
}

export default withStaticProps<HeadingProps, HeadingStaticProps>(Heading, {
  types: HeadingTypeEnum,
  weights: HeadingWeightEnum,
  align: TypographyAlignEnum,
  colors: TypographyColorEnum
});
