import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import React, { forwardRef } from "react";
import Heading from "../Heading/Heading";
import { VibeComponent, VibeComponentProps, withStaticProps } from "../../types";
import styles from "./EditableHeading.module.scss";
import { HeadingType as HeadingTypeEnum, HeadingWeight as HeadingWeightEnum } from "../Heading/HeadingConstants";
import { HeadingType, HeadingWeight } from "../Heading/Heading.types";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import { camelCase } from "lodash-es";
import EditableTypography, { EditableTypographyImplementationProps } from "../EditableTypography/EditableTypography";

export interface EditableHeadingProps extends VibeComponentProps, EditableTypographyImplementationProps {
  /**
   * Sets the Heading type
   * @type {HeadingType}
   * */
  type?: HeadingType;
  /** Sets the Heading weight
   * @type {HeadingWeight}
   */
  weight?: HeadingWeight;
}

const EditableHeading: VibeComponent<EditableHeadingProps, HTMLElement> & {
  types?: typeof HeadingTypeEnum;
  weights?: typeof HeadingWeightEnum;
} = forwardRef(
  (
    { type = "h1", weight = "normal", id, "data-testid": dataTestId, ...editableTypographyProps }: EditableHeadingProps,
    ref
  ) => {
    return (
      <EditableTypography
        ref={ref}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.EDITABLE_HEADING, id)}
        component={Heading}
        typographyClassName={getStyle(styles, camelCase(type + "-" + weight))}
        type={type}
        weight={weight}
        {...editableTypographyProps}
      />
    );
  }
);

export default withStaticProps(EditableHeading, {
  types: HeadingTypeEnum,
  weights: HeadingWeightEnum
});
