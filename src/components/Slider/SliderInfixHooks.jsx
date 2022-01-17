import React from "react";
import { INFIX_KIND } from "./SliderConstants";
import { useSliderInfix, useSliderSelection } from "./SliderContext";
import Label from "../Label/Label";
import Icon from "../Icon/Icon";

const defaultIconProps = {
  clickable: false,
  iconSize: 18,
  ignoreFocusStyle: true
};

function getCurrentLabel({ isPostfix, ranged, valueText }) {
  if (!ranged) {
    return valueText;
  }
  if (isPostfix) {
    return valueText[1];
  }
  return valueText[0];
}

export function useSliderInfixComponent(kind) {
  const { prefix, postfix, indicateSelection } = useSliderInfix();
  const { ranged, value, valueText } = useSliderSelection();
  const infix = kind === INFIX_KIND.POSTFIX ? postfix : prefix;

  const isPostfix = kind === INFIX_KIND.POSTFIX;
  if (indicateSelection && (isPostfix || ranged)) {
    const currentLabel = getCurrentLabel({ isPostfix, ranged, valueText });
    // noinspection JSValidateTypes
    return [true, "", <Label text={currentLabel} color={Label.colors.DARK} kind={Label.kinds.LINE} />];
  }
  if (typeof infix === "object" && infix.icon) {
    const { icon, ...restIconProps } = infix;
    const iconProps = { ...defaultIconProps, ...restIconProps };
    return [true, "", <Icon icon={icon} {...iconProps} />];
  }
  if (typeof infix === "function") {
    return [true, "", infix(value, valueText)];
  }
  if (typeof infix === "string") {
    return [true, "txt", infix];
  }
  if (typeof infix === "undefined") {
    return [false, "", null];
  }
  return [true, "", infix];
}
