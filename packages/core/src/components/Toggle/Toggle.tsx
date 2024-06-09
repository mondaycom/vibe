import React, { forwardRef } from "react";
import cx from "classnames";
import { noop as NOOP } from "lodash-es";
import { Switch } from "../Switch/Switch";
import { MockToggle } from "./MockToggle";
import { VibeComponent, VibeComponentProps } from "../../types";
import styles from "./Toggle.module.scss";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";

export interface ToggleProps extends VibeComponentProps {
  /**
   * ClassName to override styles of selected toggle
   */
  toggleSelectedClassName?: string;
  isDefaultSelected?: boolean;
  isSelected?: boolean;
  onChange?: (value: boolean) => void;
  value?: string;
  name?: string;
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
      className,
      toggleSelectedClassName,
      isDefaultSelected = true,
      isSelected,
      onChange = NOOP,
      value,
      name,
      disabled,
      ariaLabel,
      ariaControls,
      areLabelsHidden = false,
      onOverrideText = "On",
      offOverrideText = "Off",
      "data-testid": dataTestId
    },
    ref
  ) => {
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
        disabled={disabled}
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
          disabled={disabled}
          className={className}
          selectedClassName={toggleSelectedClassName}
        />
      </Switch>
    );
  }
);

export default Toggle;
