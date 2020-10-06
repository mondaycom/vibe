import React from "react";
import cx from "classnames";
import "./FieldLabel.scss";
import Icon from "../Icon/Icon";

const FieldLabel = ({
  iconName = "",
  iconLabel = "",
  labelText = "",
  labelFor = "",
  iconClassName = "",
  labelClassName = ""
}) => {
  if (!labelText) {
    return null;
  }

  return (
    <section className="label-component--wrapper">
      <Icon
        iconName={iconName}
        className={cx("label-component--icon", iconClassName)}
        id={labelFor}
        clickable={false}
        iconLabel={iconLabel}
      />
      <label
        htmlFor={labelFor}
        className={cx("label-component--text", labelClassName)}
      >
        {labelText}
      </label>
    </section>
  );
};

export default FieldLabel;
