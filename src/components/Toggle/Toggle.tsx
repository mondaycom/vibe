import React, { forwardRef } from "react";
import cx from "classnames";
import { noop as NOOP } from "lodash-es";
import { Switch } from "../Switch/Switch";
import { MockToggle } from "./MockToggle";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";
import { VibeComponent, VibeComponentProps } from "../../types";
import styles from "./Toggle.module.scss";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";

interface ToggleProps extends VibeComponentProps {
  /**
   * @deprecated - use className instead
   */
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
  /**
   * @deprecated - use disabled instead
   */
  isDisabled?: boolean;
  disabled?: boolean;
  areLabelsHidden?: boolean;
  onOverrideText?: string;
  offOverrideText?: string;
  ariaLabel?: string;
  ariaControls?: string;
}

const Toggle: VibeComponent<ToggleProps, HTMLInputElement> = forwardRef(
  (
    {
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
      offOverrideText = "Off",
      "data-testid": dataTestId
    },
    ref
  ) => {
    const overrideClassName = backwardCompatibilityForProperties([className, componentClassName]) as string;
    const overrideDisabled = backwardCompatibilityForProperties([disabled, isDisabled], false) as boolean;
    const wrapperClassName = cx(styles.wrapper);
    const inputClassName = cx(styles.toggleInput);

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
        ref={ref}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.TOGGLE)}
      >
        <MockToggle
          areLabelsHidden={areLabelsHidden}
          offOverrideText={offOverrideText}
          onOverrideText={onOverrideText}
          disabled={overrideDisabled}
          className={overrideClassName}
          selectedClassName={toggleSelectedClassName}
        />
      </Switch>
    );
  }
);

export default Toggle;
