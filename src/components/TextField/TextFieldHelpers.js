import { SIZES } from "../../constants/sizes";
import cx from "classnames";
import styles from "./TextField.module.scss";

export const FEEDBACK_STATES = {
  ERROR: "error",
  SUCCESS: "success"
};
export const FEEDBACK_CLASSES = {
  [FEEDBACK_STATES.ERROR]: cx(styles.inputErrorValidation, "input-component__input--error-validation"),
  [FEEDBACK_STATES.SUCCESS]: cx(styles.inputSuccessValidation, "input-component__input--success-validation")
};
export const sizeMapper = {
  [SIZES.SMALL]: cx(styles.wrapperSizeSmall, "input-component__input-wrapper--size-small"),
  [SIZES.MEDIUM]: cx(styles.wrapperSizeMedium, "input-component__input-wrapper--size-medium"),
  [SIZES.LARGE]: cx(styles.wrapperSizeLarge, "input-component__input-wrapper--size-large")
};
