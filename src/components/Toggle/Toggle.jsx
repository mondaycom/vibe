import React, { useRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import NOOP from "lodash/noop";
import { useToggleState } from "@react-stately/toggle";
import { useSwitch } from "@react-aria/switch";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { BASE_TOGGLE_CLASS_NAME } from "./ToggleConstants";
import ToggleText from "./ToggleText";
import "./Toggle.scss";

const Toggle = ({
  id,
  componentClassName,
  isDefaultSelected,
  isSelected,
  onChange,
  value,
  name,
  isDisabled,
  ariaLabel,
  ariaControls,
  isHideLabels
}) => {
  const toggleRef = useRef();
  const toggleState = useToggleState({ defaultSelected: isDefaultSelected, isSelected });
  const { inputProps } = useSwitch(
    {
      id,
      defaultSelected: isDefaultSelected,
      isSelected,
      onChange,
      value,
      name,
      isDisabled,
      "aria-label": ariaLabel,
      "aria-controls": ariaControls
    },
    toggleState,
    toggleRef
  );
  const className = classNames(`${BASE_TOGGLE_CLASS_NAME}__toggle`, componentClassName, {
    [`${BASE_TOGGLE_CLASS_NAME}__toggle--selected`]: toggleState.isSelected,
    [`${BASE_TOGGLE_CLASS_NAME}__toggle--not-selected`]: !toggleState.isSelected,
    [`${BASE_TOGGLE_CLASS_NAME}__toggle--disabled`]: isDisabled
  });

  return (
    <label htmlFor={id} className={`${BASE_TOGGLE_CLASS_NAME}__wrapper`}>
      <VisuallyHidden>
        <input {...inputProps} />
      </VisuallyHidden>
      {isHideLabels ? null : <ToggleText>Off</ToggleText>}
      <div className={className} aria-hidden="true" />
      {isHideLabels ? null : <ToggleText>On</ToggleText>}
    </label>
  );
};

Toggle.propTypes = {
  /**
   * use toggle props
   */
  id: PropTypes.string,
  componentClassName: PropTypes.string,
  isDefaultSelected: PropTypes.bool,
  isSelected: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string,
  isDisabled: PropTypes.bool,
  isHideLabels: PropTypes.bool,
  /**
   * Aria props
   */
  ariaLabel: PropTypes.string,
  ariaControls: PropTypes.string
};

Toggle.defaultProps = {
  id: undefined,
  componentClassName: "",
  isDefaultSelected: true,
  isSelected: undefined,
  onChange: NOOP,
  value: undefined,
  name: undefined,
  isDisabled: false,
  isHideLabels: false,
  ariaLabel: undefined,
  ariaControls: undefined
};

export default Toggle;
