import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import NOOP from "lodash/noop";
import { Switch } from "../../components/Switch/Switch";
import { MockToggle } from "../../components/Toggle/MockToggle";
import { BEMClass } from "../../helpers/bem-helper";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";
import { BASE_TOGGLE_CLASS_NAME } from "./ToggleConstants";
import "./Toggle.scss";

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
  const wrapperClassName = cx(bemHelper({ element: "wrapper" }), {
    [bemHelper({ element: "wrapper", state: "disabled" })]: overrideDisabled
  });
  const inputClassName = bemHelper({ element: "input" });
  return (
    <Switch
      defaultChecked={isDefaultSelected}
      checked={isSelected}
      id={id}
      wrapperClassName={wrapperClassName}
      onChange={onChange}
      value={value}
      name={name}
      disabled={overrideDisabled}
      ariaLabel={ariaLabel}
      ariaControls={ariaControls}
      inputClassName={inputClassName}
    >
      <MockToggle
        areLabelsHidden={areLabelsHidden}
        offOverrideText={offOverrideText}
        className={overrideClassName}
        onOverrideText={onOverrideText}
      />
    </Switch>
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
