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

/**
 * @deprecated
 */
export enum TextFieldTextType {
  TEXT = "text",
  PASSWORD = "password",
  SEARCH = "search",
  DATE = "date",
  DATE_TIME = "datetime-local",
  NUMBER = "number",
  TEL = "tel",
  URL = "url",
  EMAIL = "email"
}

/**
 * @deprecated
 */
export enum TextFieldFeedbackState {
  ERROR = "error",
  SUCCESS = "success"
}

export const FEEDBACK_CLASSES = {
  [TextFieldFeedbackState.ERROR]: styles.inputErrorValidation,
  [TextFieldFeedbackState.SUCCESS]: styles.inputSuccessValidation
};

export const SIZE_MAPPER = {
  [BASE_SIZES.SMALL]: styles.wrapperSizeSmall,
  [BASE_SIZES.MEDIUM]: styles.wrapperSizeMedium,
  [BASE_SIZES.LARGE]: styles.wrapperSizeLarge
};
