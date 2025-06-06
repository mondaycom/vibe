import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import React, { forwardRef } from "react";
import { VibeComponentProps, withStaticProps } from "../../types";
import styles from "./EditableText.module.scss";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import { camelCase } from "lodash-es";
import EditableTypography, { EditableTypographyImplementationProps } from "../EditableTypography/EditableTypography";
import { TextType as TextTypeEnum, TextWeight as TextWeightEnum } from "../Text/TextConstants";
import { TextType, TextWeight } from "../Text";
import Text from "../Text/Text";
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

interface EditableTextStaticProps {
  types: typeof TextTypeEnum;
  weights: typeof TextWeightEnum;
}

export default withStaticProps<EditableTextProps, EditableTextStaticProps>(EditableText, {
  types: TextTypeEnum,
  weights: TextWeightEnum
});
