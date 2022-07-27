import ToggleText from "../../components/Toggle/ToggleText";
import cx from "classnames";
import React from "react";
import { BEMClass } from "../../helpers/bem-helper";
import { BASE_TOGGLE_CLASS_NAME } from "../../components/Toggle/ToggleConstants";

const bemHelper = BEMClass(BASE_TOGGLE_CLASS_NAME);
export const MockToggle = ({ areLabelsHidden, checked, offOverrideText, onOverrideText, className }) => (
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
