import React, { CSSProperties, ReactElement } from "react";
import Icon from "../../components/Icon/Icon";
import { InfixKind } from "./SliderConstants";
import { useSliderInfix, useSliderSelection } from "./SliderContext";
import SelectionIndicator from "./SelectionIndicator";
import { IconType } from "../Icon/IconConstants";

const defaultIconProps = {
  clickable: false,
  iconSize: 18,
  ignoreFocusStyle: true
};

export function useSliderInfixComponent(kind: InfixKind): [boolean, string[], ReactElement, CSSProperties] {
  const isPostfix = kind === InfixKind.POSTFIX;
  const { prefix, postfix, indicateSelection, selectionIndicatorWidth } = useSliderInfix();
  const { ranged, value, valueText } = useSliderSelection();
  const infix = isPostfix ? postfix : prefix;

  if (indicateSelection && (isPostfix || ranged)) {
    return [true, [], <SelectionIndicator key={kind} kind={kind} />, { width: selectionIndicatorWidth }];
  }
  if (typeof infix === "object" && (infix as { icon: IconType }).icon) {
    const { icon, ...restIconProps } = infix as { icon: IconType };
    const iconProps = { ...defaultIconProps, ...restIconProps };
    return [true, [], <Icon key="infix-icon" icon={icon} {...iconProps} />, {}];
  }
  if (typeof infix === "function") {
    return [true, [], infix(value, valueText), {}];
  }
  if (typeof infix === "string") {
    return [true, ["txt"], <>{infix}</>, {}];
  }
  if (typeof infix === "undefined") {
    return [false, [], null, {}];
  }
  return [true, [], <>{infix}</>, {}];
}
