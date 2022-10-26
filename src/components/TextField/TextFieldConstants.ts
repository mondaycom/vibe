import { BASE_SIZES } from "../../constants/sizes";

export enum TextFieldAriaLabel {
  CHAR = "Input char count",
  VALIDATION_TEXT = "Additional helper text"
}

const OLD_TEXT_FIELD_SIZES = {
  s: BASE_SIZES.SMALL,
  md: BASE_SIZES.MEDIUM,
  l: BASE_SIZES.LARGE
};

export type TextFieldSize = typeof BASE_SIZES[keyof typeof BASE_SIZES] | keyof typeof OLD_TEXT_FIELD_SIZES;

// Support old sizes (backward compatible)
export const getActualSize = (size: TextFieldSize): keyof typeof SIZE_MAPPER => {
  if (size in OLD_TEXT_FIELD_SIZES) {
    return OLD_TEXT_FIELD_SIZES[size as keyof typeof OLD_TEXT_FIELD_SIZES] as keyof typeof SIZE_MAPPER;
  }
  return size as keyof typeof SIZE_MAPPER;
};

export enum TextFieldTextType {
  TEXT = "text",
  PASSWORD = "password",
  SEARCH = "search",
  DATE = "date",
  DATE_TIME = "datetime-local"
}

export enum TextFieldFeedbackState {
  ERROR = "error",
  SUCCESS = "success"
}

export const FEEDBACK_CLASSES = {
  [TextFieldFeedbackState.ERROR]: "input-component__input--error-validation",
  [TextFieldFeedbackState.SUCCESS]: "input-component__input--success-validation"
};

export const SIZE_MAPPER = {
  [BASE_SIZES.SMALL]: "input-component__input-wrapper--size-small",
  [BASE_SIZES.MEDIUM]: "input-component__input-wrapper--size-medium",
  [BASE_SIZES.LARGE]: "input-component__input-wrapper--size-large"
};
