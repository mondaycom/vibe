import ToggleText from "./ToggleText";
import cx from "classnames";
import React, { FC } from "react";
import { BEMClass } from "../../helpers/bem-helper";
import { BASE_TOGGLE_CLASS_NAME } from "./ToggleConstants";
import VibeComponentProps from "../../types/VibeComponentProps";

const bemHelper = BEMClass(BASE_TOGGLE_CLASS_NAME);

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
  className
}) => (
  <>
    {areLabelsHidden ? null : <ToggleText>{offOverrideText}</ToggleText>}
    <div
      className={cx(bemHelper({ element: "toggle" }), className, {
        [bemHelper({ element: "toggle", state: "selected" })]: checked,
        [bemHelper({ element: "toggle", state: "not-selected" })]: !checked
      })}
      aria-hidden="true"
    />
    {areLabelsHidden ? null : <ToggleText>{onOverrideText}</ToggleText>}
  </>
);
