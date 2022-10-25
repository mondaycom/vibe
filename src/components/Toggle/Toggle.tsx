import React, { FC } from "react";
import cx from "classnames";
import NOOP from "lodash/noop";
import { Switch } from "../Switch/Switch";
import { MockToggle } from "./MockToggle";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";
import VibeComponentProps from "../../types/VibeComponentProps";
import { ELEMENT_TYPES, getTestId } from "../../utils/test-utils";
import styles from "./Toggle.module.scss";

interface ToggleProps extends VibeComponentProps {
  // Backward compatibility for props naming
  componentClassName?: string;
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
  offOverrideText = "Off",
  "data-testid": dataTestId
}) => {
  const overrideClassName = backwardCompatibilityForProperties([className, componentClassName]) as string;
  const overrideDisabled = backwardCompatibilityForProperties([disabled, isDisabled], false) as boolean;
  const wrapperClassName = cx(styles.wrapper, "monday-style-toggle_wrapper", {
    [styles.disabled]: overrideDisabled,
    ["monday-style-toggle_wrapper--disabled"]: overrideDisabled
  });
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
      inputClassName="monday-style-toggle_input"
      data-testid={dataTestId || getTestId(ELEMENT_TYPES.TOGGLE, id)}
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

export default Toggle;
