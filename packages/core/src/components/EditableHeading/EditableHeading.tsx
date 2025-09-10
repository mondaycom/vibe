import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import React, { forwardRef } from "react";
import Heading from "../Heading/Heading";
import { withStaticProps } from "../../types";
import { type VibeComponentProps } from "@vibe/shared";
import styles from "./EditableHeading.module.scss";
import { HeadingType as HeadingTypeEnum, HeadingWeight as HeadingWeightEnum } from "../Heading/HeadingConstants";
import { type HeadingType, type HeadingWeight } from "../Heading";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import { camelCase } from "es-toolkit";
import EditableTypography, {
  type EditableTypographyImplementationProps
} from "../EditableTypography/EditableTypography";
import { ComponentVibeId } from "../../tests/constants";

export interface EditableHeadingProps extends VibeComponentProps, EditableTypographyImplementationProps {
  /**
   * The type of the heading element.
   */
  type?: HeadingType;
  /**
   * The font weight of the heading.
   */
  weight?: HeadingWeight;
}

const EditableHeading = forwardRef(
  (
    { type = "h1", weight = "normal", id, "data-testid": dataTestId, ...editableTypographyProps }: EditableHeadingProps,
    ref: React.ForwardedRef<HTMLElement>
  ) => {
    return (
      <EditableTypography
        ref={ref}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.EDITABLE_HEADING, id)}
        data-vibe={ComponentVibeId.EDITABLE_HEADING}
        component={Heading}
        typographyClassName={getStyle(styles, camelCase(type + "-" + weight))}
        type={type}
        weight={weight}
        {...editableTypographyProps}
      />
    );
  }
);

interface EditableHeadingStaticProps {
  types: typeof HeadingTypeEnum;
  weights: typeof HeadingWeightEnum;
}

export default withStaticProps<EditableHeadingProps, EditableHeadingStaticProps>(EditableHeading, {
  types: HeadingTypeEnum,
  weights: HeadingWeightEnum
});
