import ToggleText from "./ToggleText";
import cx from "classnames";
import React, { FC } from "react";
import VibeComponentProps from "../../types/VibeComponentProps";
import styles from "./MockToggle.module.scss";
import { getTestId } from "../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../tests/constants";

export interface MockToggleProps extends VibeComponentProps {
  areLabelsHidden?: boolean;
  checked?: boolean;
  offOverrideText?: string;
  onOverrideText?: string;
  selectedClassName?: string;
  disabled: boolean;
}

export const MockToggle: FC<MockToggleProps> = ({
  areLabelsHidden,
  checked,
  offOverrideText,
  onOverrideText,
  className,
  selectedClassName,
  disabled
}) => (
  <>
    {areLabelsHidden ? null : <ToggleText disabled={disabled}>{offOverrideText}</ToggleText>}
    <div
      className={cx(styles.toggle, className, {
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
