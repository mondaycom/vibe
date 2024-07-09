import cx from "classnames";
import React, { FC, ForwardedRef, forwardRef } from "react";
import Icon from "../Icon/Icon";
import VibeComponentProps from "../../types/VibeComponentProps";
import styles from "./FieldLabel.module.scss";

export interface FieldLabelProps extends VibeComponentProps {
  icon?: string | React.FunctionComponent | null;
  /// TODO Remove in next major as breaking change
  iconLabel?: string;
  labelText?: string;
  labelFor?: string;
  iconClassName?: string;
  labelClassName?: string;
  requiredAsterisk?: boolean;
}

const FieldLabel: FC<FieldLabelProps> = forwardRef(
  (
    {
      icon = "",
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      iconLabel = "",
      labelText = "",
      labelFor = "",
      iconClassName = "",
      labelClassName = "",
      requiredAsterisk = false
    },
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
          iconType={Icon.type.ICON_FONT}
        />
        <label htmlFor={labelFor} ref={ref} className={cx(styles.labelComponentText, labelClassName)}>
          {labelText}
          {requiredAsterisk && <span className={styles.requiredAsterisk}> *</span>}{" "}
          {/* Render asterisk based on the prop */}
        </label>
      </section>
    );
  }
);

export default FieldLabel;
