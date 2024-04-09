import { forwardRef } from "react";
import cx from "classnames";
import styles from "./BaseInput.module.scss";
import { BaseInputProps } from "./BaseInput.types";
import VibeComponent from "../../types/VibeComponent";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";

const BaseInput: VibeComponent<BaseInputProps, HTMLInputElement> = forwardRef(
  ({ inputSize = "medium", leftRender, rightRender, withReadOnlyStyle, underline, success, error, ...props }, ref) => {
    const wrapperClassNames = cx(
      styles.wrapper,
      {
        [styles.rightThinnerPadding]: !rightRender,
        [styles.withReadOnlyStyle]: withReadOnlyStyle,
        [styles.underline]: underline,
        [styles.success]: success
      },
      getStyle(styles, inputSize)
    );

    return (
      <div className={wrapperClassNames}>
        {leftRender}
        <input {...props} ref={ref} className={cx(styles.input, props.className)} aria-invalid={error} />
        {rightRender}
      </div>
    );
  }
);

export default BaseInput;

const App = () => {
  return <BaseInput inputSize={"small"}></BaseInput>;
};
