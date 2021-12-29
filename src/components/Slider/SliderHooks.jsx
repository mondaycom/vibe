import React from "react";
import Label from "../Label/Label";
import Icon from "../Icon/Icon";

const defaultIconProps = {
  clickable: false,
  ignoreFocusStyle: true
};

function defineAdditionalComponent(additional, { indicateSelection, value, valueText }) {
  if (indicateSelection) {
    return [true, <Label text={valueText} color={Label.colors.DARK} kind={Label.kinds.LINE} />];
  }
  if (typeof additional === "object" && additional.icon) {
    const { icon, ...rest } = additional;
    const iconProps = { ...defaultIconProps, ...rest };
    return [true, <Icon icon={icon} {...iconProps} />];
  }
  if (typeof additional === "function") {
    return [true, additional(value, valueText)];
  }
  if (typeof additional === "undefined") {
    return [false, null];
  }
  return [true, additional];
}

export function usePrefix(prefix, options = {}) {
  return defineAdditionalComponent(prefix, options);
}

export function usePostfix(postfix, options = {}) {
  return defineAdditionalComponent(postfix, options);
}
