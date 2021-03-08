import { SIZES } from "../../constants/sizes";

export const FEEDBACK_STATES = {
  ERROR: "error",
  SUCCESS: "success"
};
export const FEEDBACK_CLASSES = {
  [FEEDBACK_STATES.ERROR]: "input-component__input--error-validation",
  [FEEDBACK_STATES.SUCCESS]: "input-component__input--success-validation"
};
export const sizeMapper = {
  [SIZES.SMALL]: "input-component__input-wrapper--size-small",
  [SIZES.MEDIUM]: "input-component__input-wrapper--size-medium",
  [SIZES.LARGE]: "input-component__input-wrapper--size-large"
};
