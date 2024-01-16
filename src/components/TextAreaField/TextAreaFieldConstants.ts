import styles from "./TextAreaField.module.scss";


export enum TextAreaFieldFeedbackState {
    ERROR = "error",
    SUCCESS = "success"
}

export enum TextAreaFieldAriaLabel {
    CHAR = "Input char count",
    VALIDATION_TEXT = "Additional helper text"
}
export const FEEDBACK_CLASSES = {
    [TextAreaFieldFeedbackState.ERROR]: styles.inputErrorValidation,
    [TextAreaFieldFeedbackState.SUCCESS]: styles.inputSuccessValidation
};
