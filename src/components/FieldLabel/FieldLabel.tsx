import React, { FC, ForwardedRef, forwardRef } from "react";
import cx from "classnames";
import Icon from "../Icon/Icon";
import VibeComponentProps from "../../types/VibeComponentProps";
import "./FieldLabel.scss";
import { Tooltip } from "monday-ui-react-core";
import { Info } from "../Icon/Icons";
import { SubIcon } from "monday-ui-react-core/dist/types/types";

interface FieldLabelProps extends VibeComponentProps {
  icon?: string | React.FunctionComponent | null;
  descriptionIcon?: SubIcon;
  description?: string;
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
      descriptionIcon = Info,
      description = "",
      iconLabel = "",
      labelText = "",
      labelFor = "",
      iconClassName = "",
      labelClassName = ""
    },
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
        {description && (
          <Tooltip content={description}>
            <Icon
              icon={descriptionIcon}
              clickable={false}
              iconType={Icon.type.SVG}
              className="label-component--tooltipicon"
            />
          </Tooltip>
        )}
      </section>
    );
  }
);

export default FieldLabel;
