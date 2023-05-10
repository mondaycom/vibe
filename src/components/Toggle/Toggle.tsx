import React, { FC } from "react";
import cx from "classnames";
import { noop as NOOP } from "lodash-es";
import { Switch } from "../Switch/Switch";
import { MockToggle } from "./MockToggle";
import { BEMClass } from "../../helpers/bem-helper";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";
import { BASE_TOGGLE_CLASS_NAME } from "./ToggleConstants";
import VibeComponentProps from "../../types/VibeComponentProps";
import "./Toggle.scss";

const bemHelper = BEMClass(BASE_TOGGLE_CLASS_NAME);

interface ToggleProps extends VibeComponentProps {
  // Backward compatibility for props naming
  componentClassName?: string;
  /**
   * ClassName to override styles of selected toggle
   */
  toggleSelectedClassName?: string;
  isDefaultSelected?: boolean;
  isSelected?: boolean;
  onChange?: (value: boolean) => void;
  value?: string;
  name?: string;
  // Backward compatibility for props naming
  isDisabled?: boolean;
  disabled?: boolean;
  areLabelsHidden?: boolean;
  onOverrideText?: string;
  offOverrideText?: string;
  ariaLabel?: string;
  ariaControls?: string;
}

const Toggle: FC<ToggleProps> = ({
  id,
  // Backward compatibility for props naming
  componentClassName,
  className,
  toggleSelectedClassName,
  isDefaultSelected = true,
  isSelected,
  onChange = NOOP,
  value,
  name,
  disabled,
  // Backward compatibility for props naming
  isDisabled,
  ariaLabel,
  ariaControls,
  areLabelsHidden = false,
  onOverrideText = "On",
  offOverrideText = "Off"
}) => {
  const overrideClassName = backwardCompatibilityForProperties([className, componentClassName]) as string;
  const overrideDisabled = backwardCompatibilityForProperties([disabled, isDisabled], false) as boolean;
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
        selectedClassName={toggleSelectedClassName}
        onOverrideText={onOverrideText}
      />
    </Switch>
  );
};

export default Toggle;
