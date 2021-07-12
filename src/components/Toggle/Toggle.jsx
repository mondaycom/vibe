import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import NOOP from "lodash/noop";
import { BASE_TOGGLE_CLASS_NAME } from "./ToggleConstants";
import ToggleText from "./ToggleText";
import "./Toggle.scss";
import { useToggle } from "../../hooks/useToggle";
import { BEMClass } from "../../helpers/bem-helper";

const bemHelper = BEMClass(BASE_TOGGLE_CLASS_NAME);

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
  const { inputProps, isChecked } = useToggle({
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

  const className = classNames(bemHelper({ element: "toggle" }), componentClassName, {
    [bemHelper({ element: "toggle", state: "selected" })]: isChecked,
    [bemHelper({ element: "toggle", state: "not-selected" })]: !isChecked,
    [bemHelper({ element: "toggle", state: "disabled" })]: isDisabled
  });

  return (
    <label htmlFor={id} className={bemHelper({ element: "wrapper" })}>
      {areLabelsHidden ? null : <ToggleText>{offOverrideText}</ToggleText>}
      <input {...inputProps} className={bemHelper({ element: "input" })} />
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
