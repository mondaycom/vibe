import React, { FC, ForwardedRef, forwardRef } from "react";
import cx from "classnames";
import Icon from "../Icon/Icon";
import VibeComponentProps from "../../types/VibeComponentProps";
import { ELEMENT_TYPES, getTestId } from "../../utils/test-utils";
import styles from "./FieldLabel.module.scss";

interface FieldLabelProps extends VibeComponentProps {
  icon?: string | React.FunctionComponent | null;
  iconLabel?: string;
  labelText?: string;
  labelFor?: string;
  iconClassName?: string;
  labelClassName?: string;
}

const FieldLabel: FC<FieldLabelProps> = forwardRef(
  (
    {
      icon = "",
      iconLabel = "",
      labelText = "",
      labelFor = "",
      iconClassName = "",
      labelClassName = "",
      id,
      "data-testid": dataTestId
    },
    ref: ForwardedRef<HTMLLabelElement>
  ) => {
    if (!labelText) {
      return null;
    }

    return (
      <section className={cx(styles.fieldLabel, "label-component--wrapper")}>
        <Icon
          icon={icon}
          className={cx(styles.icon, "label-component--icon", iconClassName)}
          id={labelFor}
          clickable={false}
          iconLabel={iconLabel}
          iconType={Icon.type.ICON_FONT}
        />
        <label
          htmlFor={labelFor}
          ref={ref}
          className={cx(styles.text, "label-component--text", labelClassName)}
          id={id}
          data-testid={dataTestId || getTestId(ELEMENT_TYPES.FIELD_LABEL, id)}
        >
          {labelText}
        </label>
      </section>
    );
  }
);

export default FieldLabel;
