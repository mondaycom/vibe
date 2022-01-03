import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import NOOP from "lodash/noop";
import { BASE_TOGGLE_CLASS_NAME } from "./ToggleConstants";
import ToggleText from "./ToggleText";
import "./Toggle.scss";
import { useToggle } from "../../hooks/useToggle";
import { BEMClass } from "../../helpers/bem-helper";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";

const bemHelper = BEMClass(BASE_TOGGLE_CLASS_NAME);

const Toggle = ({
  id,
  // Backward compatibility for props naming
  componentClassName,
  className,
  isDefaultSelected,
  isSelected,
  onChange,
  value,
  name,
  disabled,
  // Backward compatibility for props naming
  isDisabled,
  ariaLabel,
  ariaControls,
  areLabelsHidden,
  onOverrideText,
  offOverrideText
}) => {
  const overrideClassName = backwardCompatibilityForProperties([className, componentClassName]);
  const overrideDisabled = backwardCompatibilityForProperties([disabled, isDisabled], false);
  const { inputProps, isChecked } = useToggle({
    id,
    isDefaultSelected,
    isSelected,
    onChange,
    value,
    name,
    isDisabled: overrideDisabled,
    ariaLabel,
    ariaControls
  });

  return (
    <label
      htmlFor={id}
      className={cx(bemHelper({ element: "wrapper" }), {
        [bemHelper({ element: "wrapper", state: "disabled" })]: overrideDisabled
      })}
    >
      {areLabelsHidden ? null : <ToggleText>{offOverrideText}</ToggleText>}
      <input {...inputProps} className={bemHelper({ element: "input" })} />
      <div
        className={cx(bemHelper({ element: "toggle" }), overrideClassName, {
          [bemHelper({ element: "toggle", state: "selected" })]: isChecked,
          [bemHelper({ element: "toggle", state: "not-selected" })]: !isChecked
        })}
        aria-hidden="true"
      />
      {areLabelsHidden ? null : <ToggleText>{onOverrideText}</ToggleText>}
    </label>
  );
};

Toggle.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  isDefaultSelected: PropTypes.bool,
  isSelected: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  areLabelsHidden: PropTypes.bool,
  onOverrideText: PropTypes.string,
  offOverrideText: PropTypes.string,
  ariaLabel: PropTypes.string,
  ariaControls: PropTypes.string
};

Toggle.defaultProps = {
  id: undefined,
  className: undefined,
  isDefaultSelected: true,
  isSelected: undefined,
  onChange: NOOP,
  value: undefined,
  name: undefined,
  disabled: undefined,
  areLabelsHidden: false,
  ariaLabel: undefined,
  ariaControls: undefined,
  onOverrideText: "On",
  offOverrideText: "Off"
};

export default Toggle;
