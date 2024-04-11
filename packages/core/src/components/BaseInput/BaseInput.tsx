import React, { forwardRef } from "react";
import cx from "classnames";
import styles from "./BaseInput.module.scss";
import { BaseInputComponent } from "./BaseInput.types";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";

const BaseInput: BaseInputComponent = forwardRef(
  (
    {
      size = "medium",
      leftRender,
      rightRender,
      withReadOnlyStyle,
      success,
      error,
      wrapperRole,
      inputRole,
      className,
      wrapperClassName,
      ...props
    },
    ref
  ) => {
    const wrapperClassNames = cx(
      styles.wrapper,
      {
        [styles.rightThinnerPadding]: !rightRender,
        [styles.withReadOnlyStyle]: withReadOnlyStyle,
        [styles.success]: success
      },
      getStyle(styles, size),
      wrapperClassName
    );

    return (
      <div className={wrapperClassNames} role={wrapperRole}>
        {leftRender}
        <input {...props} ref={ref} className={cx(styles.input, className)} aria-invalid={error} role={inputRole} />
        {rightRender}
      </div>
    );
  }
);

export default BaseInput;
