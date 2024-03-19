import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import React, { forwardRef } from "react";
import Heading from "../Heading/Heading";
import { VibeComponent, VibeComponentProps, withStaticProps } from "../../types";
import styles from "./EditableHeading.module.scss";
import { HeadingType, HeadingWeight } from "../Heading/HeadingConstants";
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
  types?: typeof Heading.types;
  weights?: typeof Heading.weights;
} = forwardRef(
  (
    {
      type = Heading.types.H1,
      weight = Heading.weights.NORMAL,
      id,
      "data-testid": dataTestId,
      ...editableTypographyProps
    },
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
  types: HeadingType,
  weights: HeadingWeight
});
