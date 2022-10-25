import React, { FC } from "react";
import cx from "classnames";
import { ELEMENT_TYPES, getTestId } from "../../utils/test-utils";
import ToggleText from "./ToggleText";
import VibeComponentProps from "../../types/VibeComponentProps";
import styles from "./Toggle.module.scss";

export interface MockToggleProps extends VibeComponentProps {
  areLabelsHidden?: boolean;
  checked?: boolean;
  offOverrideText?: string;
  onOverrideText?: string;
}

export const MockToggle: FC<MockToggleProps> = ({
  areLabelsHidden,
  checked,
  offOverrideText,
  onOverrideText,
  className,
  id,
  "data-testid": dataTestId
}) => (
  <>
    {areLabelsHidden ? null : <ToggleText>{offOverrideText}</ToggleText>}
    <div
      id={id}
      data-testid={dataTestId || getTestId(ELEMENT_TYPES.MOCK_TOGGLE, id)}
      className={cx(styles.toggle, "monday-style-toggle_toggle", className, {
        [styles.selected]: checked,
        ["monday-style-toggle_toggle--selected"]: checked,
        [styles.notSelected]: !checked,
        ["monday-style-toggle_toggle--not-selected"]: !checked
      })}
      aria-hidden="true"
    />
    {areLabelsHidden ? null : <ToggleText>{onOverrideText}</ToggleText>}
  </>
);
