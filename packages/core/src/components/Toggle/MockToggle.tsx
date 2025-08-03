import ToggleText from "./ToggleText";
import cx from "classnames";
import React, { type FC } from "react";
import type VibeComponentProps from "../../types/VibeComponentProps";
import styles from "./MockToggle.module.scss";
import { getTestId } from "../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../tests/constants";
import { type ToggleSize } from "./Toggle.types";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";

export interface MockToggleProps extends VibeComponentProps {
  /**
   * If true, hides the on/off labels.
   */
  areLabelsHidden?: boolean;
  /**
   * If true, the toggle is in the "on" state.
   */
  checked?: boolean;
  /**
   * The text displayed when the toggle is in the "off" state.
   */
  offOverrideText?: string;
  /**
   * The text displayed when the toggle is in the "on" state.
   */
  onOverrideText?: string;
  /**
   * Class name applied when the toggle is selected.
   */
  selectedClassName?: string;
  /**
   * If true, disables the toggle.
   */
  disabled: boolean;
  /**
   * The size of the toggle.
   */
  size?: ToggleSize;
}

export const MockToggle: FC<MockToggleProps> = ({
  areLabelsHidden,
  checked,
  offOverrideText,
  onOverrideText,
  className,
  selectedClassName,
  disabled,
  size = "medium"
}) => (
  <>
    {areLabelsHidden ? null : <ToggleText disabled={disabled}>{offOverrideText}</ToggleText>}
    <div
      className={cx(styles.toggle, getStyle(styles, size), className, {
        [cx(styles.selected, selectedClassName)]: checked,
        [styles.notSelected]: !checked,
        [styles.disabled]: disabled
      })}
      aria-hidden="true"
      data-testid={getTestId(ComponentDefaultTestId.TOGGLE)}
    />
    {areLabelsHidden ? null : <ToggleText disabled={disabled}>{onOverrideText}</ToggleText>}
  </>
);
