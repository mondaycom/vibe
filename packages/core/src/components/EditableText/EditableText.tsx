import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import React, { forwardRef } from "react";
import { type VibeComponentProps } from "../../types";
import styles from "./EditableText.module.scss";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import { camelCase } from "es-toolkit";
import EditableTypography, {
  type EditableTypographyImplementationProps
} from "../EditableTypography/EditableTypography";
import { Text, type TextType, type TextWeight } from "@vibe/typography";
import cx from "classnames";

export interface EditableTextProps extends VibeComponentProps, EditableTypographyImplementationProps {
  /**
   * The text style variant.
   */
  type?: TextType;
  /**
   * The font weight of the text.
   */
  weight?: TextWeight;
  /**
   * If true, enables editing multiple lines of text.
   */
  multiline?: boolean;
}

const EditableText = forwardRef(
  (
    {
      type = "text2",
      weight = "normal",
      "data-testid": dataTestId,
      id,
      multiline,
      ...editableTypographyProps
    }: EditableTextProps,
    ref: React.ForwardedRef<HTMLElement>
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

export default EditableText;
