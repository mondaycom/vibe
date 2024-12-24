import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import React, { forwardRef } from "react";
import { VibeComponent, VibeComponentProps, withStaticProps } from "../../types";
import styles from "./EditableText.module.scss";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import { camelCase } from "lodash-es";
import EditableTypography, { EditableTypographyImplementationProps } from "../EditableTypography/EditableTypography";
import { TextType as TextTypeEnum, TextWeight as TextWeightEnum } from "../Text/TextConstants";
import { TextType, TextWeight } from "../Text/Text.types";
import Text from "../Text/Text";
import cx from "classnames";

export interface EditableTextProps extends VibeComponentProps, EditableTypographyImplementationProps {
  /**
   * Sets the Text type
   * */
  type?: TextType;
  /** Sets the Text weight
   */
  weight?: TextWeight;
  /** Controls whether a textarea or a simple input would be rendered, allowing multi-lines
   */
  multiline?: boolean;
}

const EditableText: VibeComponent<EditableTextProps, HTMLElement> & {
  types?: typeof TextTypeEnum;
  weights?: typeof TextWeightEnum;
} = forwardRef(
  (
    {
      type = "text2",
      weight = "normal",
      "data-testid": dataTestId,
      id,
      multiline = false,
      ...editableTypographyProps
    }: EditableTextProps,
    ref
  ) => {
    return (
      <EditableTypography
        className={styles.editableText}
        ref={ref}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.EDITABLE_TEXT, id)}
        component={Text}
        typographyClassName={cx(getStyle(styles, camelCase(type + "-" + weight)), styles.typography)}
        clearable
        type={type}
        weight={weight}
        multiline={multiline}
        {...editableTypographyProps}
      />
    );
  }
);

export default withStaticProps(EditableText, {
  types: TextTypeEnum,
  weights: TextWeightEnum
});
