import React, { FC, ForwardedRef, forwardRef } from "react";
import cx from "classnames";
import Icon from "../Icon/Icon";
import VibeComponentProps from "../../types/VibeComponentProps";
import "./FieldLabel.scss";

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
    { icon = "", iconLabel = "", labelText = "", labelFor = "", iconClassName = "", labelClassName = "" },
    ref: ForwardedRef<HTMLLabelElement>
  ) => {
    if (!labelText) {
      return null;
    }

    return (
      <section className="label-component--wrapper">
        <Icon
          icon={icon}
          className={cx("label-component--icon", iconClassName)}
          id={labelFor}
          clickable={false}
          iconLabel={iconLabel}
          iconType={Icon.type.ICON_FONT}
        />
        <label htmlFor={labelFor} ref={ref} className={cx("label-component--text", labelClassName)}>
          {labelText}
        </label>
      </section>
    );
  }
);

export default FieldLabel;
