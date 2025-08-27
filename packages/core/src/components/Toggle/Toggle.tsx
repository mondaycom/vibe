import React, { type ChangeEvent, forwardRef } from "react";
import cx from "classnames";
import { noop as NOOP } from "lodash-es";
import Switch from "../Switch/Switch";
import { MockToggle } from "./MockToggle";
import { type VibeComponentProps } from "../../types";
import styles from "./Toggle.module.scss";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import { type ToggleSize } from "./Toggle.types";
import { ComponentVibeId } from "../../tests/constants";

export interface ToggleProps extends VibeComponentProps {
  /**
   * Class name applied when the toggle is selected.
   */
  toggleSelectedClassName?: string;
  /**
   * If true, the toggle is selected by default.
   */
  isDefaultSelected?: boolean;
  /**
   * Controls the selected state of the toggle.
   */
  isSelected?: boolean;
  /**
   * Callback fired when the toggle state changes.
   */
  onChange?: (value: boolean, event: ChangeEvent<HTMLInputElement>) => void;
  /**
   * The value associated with the toggle.
   */
  value?: string;
  /**
   * The name attribute of the toggle input.
   */
  name?: string;
  /**
   * If true, disables the toggle.
   */
  disabled?: boolean;
  /**
   * If true, hides the on/off labels.
   */
  areLabelsHidden?: boolean;
  /**
   * If true, removes the horizontal spacing around the toggle.
   */
  noSpacing?: boolean;
  /**
   * The text displayed when the toggle is in the "on" position.
   */
  onOverrideText?: string;
  /**
   * The text displayed when the toggle is in the "off" position.
   */
  offOverrideText?: string;
  /**
   * The ARIA label for accessibility.
   */
  ariaLabel?: string;
  /**
   * The ID of the element controlled by the toggle.
   */
  ariaControls?: string;
  /**
   * The size of the toggle.
   */
  size?: ToggleSize;
}

const Toggle = forwardRef(
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
      noSpacing,
      onOverrideText = "On",
      offOverrideText = "Off",
      size = "medium",
      "data-testid": dataTestId
    }: ToggleProps,
    ref: React.ForwardedRef<HTMLInputElement>
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
        data-vibe={ComponentVibeId.TOGGLE}
      >
        <MockToggle
          areLabelsHidden={areLabelsHidden}
          noSpacing={noSpacing}
          offOverrideText={offOverrideText}
          onOverrideText={onOverrideText}
          disabled={disabled}
          className={className}
          selectedClassName={toggleSelectedClassName}
          size={size}
        />
      </Switch>
    );
  }
);

export default Toggle;
