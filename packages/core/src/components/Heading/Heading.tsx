import React, { forwardRef, ReactNode } from "react";
import cx from "classnames";
import { camelCase } from "lodash-es";
import VibeComponent from "../../types/VibeComponent";
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
import { TypographyAlign, TypographyColor } from "../Typography/Typography.types";

const OVERFLOW_TOLERANCE_IN_PX = 4;

export interface HeadingProps extends TypographyProps {
  type?: HeadingType;
  weight?: HeadingWeight;
  align?: TypographyAlign;
  color?: TypographyColor;
  children: ReactNode;
}

const Heading: VibeComponent<HeadingProps, HTMLElement> & {
  types?: typeof HeadingTypeEnum;
  weights?: typeof HeadingWeightEnum;
  colors?: typeof TypographyColorEnum;
  align?: typeof TypographyAlignEnum;
} = forwardRef(({ className, type = "h1", weight = "normal", ...typographyProps }: HeadingProps, ref) => {
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
});

export default withStaticProps(Heading, {
  types: HeadingTypeEnum,
  weights: HeadingWeightEnum,
  align: TypographyAlignEnum,
  colors: TypographyColorEnum
});
