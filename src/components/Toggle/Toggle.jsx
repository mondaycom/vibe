import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import NOOP from "lodash/noop";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { BASE_TOGGLE_CLASS_NAME } from "./ToggleConstants";
import ToggleText from "./ToggleText";
import "./Toggle.scss";
import { useToggle } from "../../hooks/useToggle";

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
  areLabelsHidden,
  onOverrideText,
  offOverrideText
}) => {
  const { inputProps, isChecked, isFocusVisible } = useToggle({
    id,
    isDefaultSelected,
    isSelected,
    onChange,
    value,
    name,
    isDisabled,
    ariaLabel,
    ariaControls
  });

  const className = classNames(`${BASE_TOGGLE_CLASS_NAME}__toggle`, componentClassName, {
    [`${BASE_TOGGLE_CLASS_NAME}__toggle--selected`]: isChecked,
    [`${BASE_TOGGLE_CLASS_NAME}__toggle--not-selected`]: !isChecked,
    [`${BASE_TOGGLE_CLASS_NAME}__toggle--disabled`]: isDisabled,
    [`${BASE_TOGGLE_CLASS_NAME}__toggle--focused`]: isFocusVisible
  });

  return (
    <label htmlFor={id} className={`${BASE_TOGGLE_CLASS_NAME}__wrapper`}>
      <VisuallyHidden>
        <input {...inputProps} />
      </VisuallyHidden>
      {areLabelsHidden ? null : <ToggleText>{offOverrideText}</ToggleText>}
      <div className={className} aria-hidden="true" />
      {areLabelsHidden ? null : <ToggleText>{onOverrideText}</ToggleText>}
    </label>
  );
};

Toggle.propTypes = {
  id: PropTypes.string,
  componentClassName: PropTypes.string,
  isDefaultSelected: PropTypes.bool,
  isSelected: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string,
  isDisabled: PropTypes.bool,
  areLabelsHidden: PropTypes.bool,
  onOverrideText: PropTypes.string,
  offOverrideText: PropTypes.string,
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
  areLabelsHidden: false,
  ariaLabel: undefined,
  ariaControls: undefined,
  onOverrideText: "On",
  offOverrideText: "Off"
};

export default Toggle;
