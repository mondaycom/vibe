import React, { forwardRef } from "react";
import cx from "classnames";
import styles from "./BaseInput.module.scss";
import { BaseInputProps } from "./BaseInput.types";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";

const BaseInput = forwardRef(
  (
    {
      size = "medium",
      renderLeft,
      renderRight,
      success,
      error,
      wrapperRole,
      inputRole,
      className,
      inputClassName,
      ...props
    }: BaseInputProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const wrapperClassNames = cx(
      styles.wrapper,
      {
        [styles.rightThinnerPadding]: !renderRight,
        [styles.error]: error,
        [styles.success]: success,
        [styles.readOnly]: props.readOnly,
        [styles.disabled]: props.disabled
      },
      getStyle(styles, size),
      className
    );

    return (
      <div className={wrapperClassNames} role={wrapperRole}>
        {renderLeft}
        <input
          {...props}
          ref={ref}
          className={cx(styles.input, inputClassName)}
          aria-invalid={error}
          role={inputRole}
        />
        {renderRight}
      </div>
    );
  }
);

export default BaseInput;
