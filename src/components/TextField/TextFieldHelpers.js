import { SIZES } from "../../constants/sizes";
import cx from "classnames";
import styles from "./TextField.module.scss";

export const FEEDBACK_STATES = {
  ERROR: "error",
  SUCCESS: "success"
};
export const FEEDBACK_CLASSES = {
  [FEEDBACK_STATES.ERROR]: cx(styles.inputComponentInputErrorValidation, "input-component__input--error-validation"),
  [FEEDBACK_STATES.SUCCESS]: cx(
    styles.inputComponentInputSuccessValidation,
    "input-component__input--success-validation"
  )
};
export const sizeMapper = {
  [SIZES.SMALL]: cx(styles.inputComponentInputWrapperSizeSmall, "input-component__input-wrapper--size-small"),
  [SIZES.MEDIUM]: cx(styles.inputComponentInputWrapperSizeMedium, "input-component__input-wrapper--size-medium"),
  [SIZES.LARGE]: cx(styles.inputComponentInputWrapperSizeLarge, "input-component__input-wrapper--size-large")
};
