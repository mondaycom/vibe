import cx from "classnames";
import React, { FC, ForwardedRef, forwardRef } from "react";
import Icon from "../Icon/Icon";
import VibeComponentProps from "../../types/VibeComponentProps";
import styles from "./FieldLabel.module.scss";

export interface FieldLabelProps extends VibeComponentProps {
  icon?: string | React.FunctionComponent | null;
  labelText?: string;
  labelFor?: string;
  iconClassName?: string;
  labelClassName?: string;
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
        <Icon
          icon={icon}
          className={cx(styles.labelComponentIcon, iconClassName)}
          id={labelFor}
          clickable={false}
          iconType="font"
        />
        <label htmlFor={labelFor} ref={ref} className={cx(styles.labelComponentText, labelClassName)}>
          {labelText}
          {required && <span className={styles.required}> *</span>}
        </label>
      </section>
    );
  }
);

export default FieldLabel;
