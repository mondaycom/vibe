import ToggleText from "./ToggleText";
import cx from "classnames";
import React, { FC } from "react";
import VibeComponentProps from "../../types/VibeComponentProps";
import styles from "./MockToggle.module.scss";
import { getTestId } from "../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../tests/constants";
import { Sizes } from "./Toggle.types";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";

export interface MockToggleProps extends VibeComponentProps {
  areLabelsHidden?: boolean;
  checked?: boolean;
  offOverrideText?: string;
  onOverrideText?: string;
  selectedClassName?: string;
  disabled: boolean;
  size?: Sizes;
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
