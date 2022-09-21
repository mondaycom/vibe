import cx from "classnames";
import ToggleText from "../../components/Toggle/ToggleText";
import React from "react";
import styles from "./Toggle.module.scss";
import { ELEMENT_TYPES, getTestId } from "../../utils/test-utils";

export const MockToggle = ({
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
