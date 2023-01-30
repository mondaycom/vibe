import React, { FC, ForwardedRef, forwardRef } from "react";
import cx from "classnames";
import Icon from "../Icon/Icon";
import VibeComponentProps from "../../types/VibeComponentProps";
import "./FieldLabel.scss";
import { descriptionTypesMap } from "src/storybook/components/related-components/component-description-map";
import { Tooltip } from "monday-ui-react-core";
import { Info } from "../Icon/Icons";

interface FieldLabelProps extends VibeComponentProps {
  icon?: string | React.FunctionComponent | null;
  descriptionIcon?: string | React.FunctionComponent | null;
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
      descriptionIcon = undefined,
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

    const renderIconWithToolTip = () => {
      return (
        <Tooltip content={description}>
          <Icon
            icon={descriptionIcon ?? Info}
            clickable={false}
            iconType={Icon.type.ICON_FONT}
            className="label-component--tooltipicon"
          />
        </Tooltip>
      );
    };

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
        {description && renderIconWithToolTip()}
      </section>
    );
  }
);

export default FieldLabel;
