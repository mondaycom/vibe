import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import React, { forwardRef } from "react";
import { VibeComponent, VibeComponentProps, withStaticProps } from "../../types";
import styles from "./EditableText.module.scss";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import { camelCase } from "lodash-es";
import EditableTypography, { EditableTypographyImplementationProps } from "../EditableTypography/EditableTypography";
import { TextType, TextWeight } from "../Text/TextConstants";
import Text from "../Text/Text";
import cx from "classnames";

export interface EditableTextProps extends VibeComponentProps, EditableTypographyImplementationProps {
  /**
   * Sets the Text type
   * @type {TextType}
   * */
  type?: TextType;
  /** Sets the Text weight
   * @type {TextWeight}
   */
  weight?: TextWeight;
}

const EditableText: VibeComponent<EditableTextProps, HTMLElement> & {
  types?: typeof Text.types;
  weights?: typeof Text.weights;
} = forwardRef(
  (
    {
      type = Text.types.TEXT2,
      weight = Text.weights.NORMAL,
      "data-testid": dataTestId,
      id,
      ...editableTypographyProps
    },
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
        {...editableTypographyProps}
      />
    );
  }
);

export default withStaticProps(EditableText, {
  types: TextType,
  weights: TextWeight
});
