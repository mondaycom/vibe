import cx from "classnames";
import React, { FC, ForwardedRef, forwardRef } from "react";
import Icon from "../Icon/Icon";
import VibeComponentProps from "../../types/VibeComponentProps";
import styles from "./FieldLabel.module.scss";

export interface FieldLabelProps extends VibeComponentProps {
  /**
   * The icon displayed next to the label.
   */
  icon?: string | React.FunctionComponent | null;
  /**
   * The text content of the label.
   */
  labelText?: string;
  /**
   * The ID of the associated input element.
   */
  labelFor?: string;
  /**
   * Class name applied to the icon.
   */
  iconClassName?: string;
  /**
   * Class name applied to the label text.
   */
  labelClassName?: string;
  /**
   * If true, displays an asterisk to indicate a required field.
   */
  required?: boolean;
}

const FieldLabel: FC<FieldLabelProps> = forwardRef(
  (
    { icon = "", labelText = "", labelFor = "", iconClassName = "", labelClassName = "", required = false },
    ref: ForwardedRef<HTMLLabelElement>
  ) => {
    if (!labelText) {
      return null;
    }

    return (
      <section className={cx(styles.labelComponentWrapper)}>
        <Icon icon={icon} className={cx(styles.labelComponentIcon, iconClassName)} id={labelFor} iconType="font" />
        <label htmlFor={labelFor} ref={ref} className={cx(styles.labelComponentText, labelClassName)}>
          {labelText}
          {required && <span className={styles.required}> *</span>}
        </label>
      </section>
    );
  }
);

export default FieldLabel;
