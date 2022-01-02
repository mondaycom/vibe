import React from "react";
import PropTypes from "prop-types";
import { bem, INFIX_KIND } from "./SliderCommons";
import { useSliderInfix, useSliderSelection } from "./SliderContext";
import Label from "../Label/Label";
import Icon from "../Icon/Icon";

const defaultIconProps = {
  clickable: false,
  ignoreFocusStyle: true
};

function useSliderInfixComponent(kind) {
  const { prefix, postfix, indicateSelection } = useSliderInfix();
  const { value, valueText } = useSliderSelection();
  const infix = kind === SliderInfix.kinds.POSTFIX ? postfix : prefix;

  if (indicateSelection && kind === SliderInfix.kinds.POSTFIX) {
    return [true, <Label text={valueText} color={Label.colors.DARK} kind={Label.kinds.LINE} />];
  }
  if (typeof infix === "object" && infix.icon) {
    const { icon, ...restIconProps } = infix;
    const iconProps = { ...defaultIconProps, ...restIconProps };
    return [true, <Icon icon={icon} {...iconProps} />];
  }
  if (typeof infix === "function") {
    return [true, infix(value, valueText)];
  }
  if (typeof infix === "undefined") {
    return [false, null];
  }
  return [true, infix];
}

const SliderInfix = ({ kind }) => {
  const [isShow, InfixComponent] = useSliderInfixComponent(kind);
  return isShow && <div className={bem(kind)}>{InfixComponent}</div>;
};

SliderInfix.kinds = INFIX_KIND;

SliderInfix.propTypes = {
  /**
   * kind (type/mode) of Infix prefix/postfix
   * Infix - additional inserted by Consumer - component/string/number etc.
   */
  kind: PropTypes.oneOf(Object.values(SliderInfix.kinds))
};

SliderInfix.defaultProps = {
  kind: SliderInfix.kinds.PREFIX
};

export default SliderInfix;
