import { BASE_SIZES } from "../../constants";
import styles from "./TextField.module.scss";

export enum TextFieldAriaLabel {
  CHAR = "Input char count",
  VALIDATION_TEXT = "Additional helper text"
}

const OLD_TEXT_FIELD_SIZES = {
  s: BASE_SIZES.SMALL,
  md: BASE_SIZES.MEDIUM,
  l: BASE_SIZES.LARGE
};

export type TextFieldSize = (typeof BASE_SIZES)[keyof typeof BASE_SIZES] | keyof typeof OLD_TEXT_FIELD_SIZES;

export const FEEDBACK_CLASSES = {
  error: styles.inputErrorValidation,
  success: styles.inputSuccessValidation
};

export const SIZE_MAPPER = {
  [BASE_SIZES.SMALL]: styles.wrapperSizeSmall,
  [BASE_SIZES.MEDIUM]: styles.wrapperSizeMedium,
  [BASE_SIZES.LARGE]: styles.wrapperSizeLarge
};
