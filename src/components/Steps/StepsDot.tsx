import cx from "classnames";
import { noop as NOOP } from "lodash-es";
import { BEMClass } from "../../helpers/bem-helper";
import { STEPS_CSS_BASE_CLASS, StepsDotAriaCurrent } from "./StepsConstants";
import VibeComponentProps from "../../types/VibeComponentProps";
import React, { FC } from "react";

const CSS_BASE_CLASS = `${STEPS_CSS_BASE_CLASS}-header`;
const bemHelper = BEMClass(CSS_BASE_CLASS);

export interface StepsDotProps extends VibeComponentProps {
  onClick?: (e: React.MouseEvent) => void;
  ariaCurrent?: StepsDotAriaCurrent | boolean;
  isActive?: boolean;
  ariaLabel?: string;
}

export const StepsDot: FC<StepsDotProps> = ({
  isActive,
  onClick = NOOP,
  ariaCurrent = StepsDotAriaCurrent.STEP,
  ariaLabel
}) => {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      aria-current={isActive ? ariaCurrent : false}
      className={cx(bemHelper({ element: "dot" }), {
        [bemHelper({ element: "dot", state: "is-active" })]: isActive
      })}
      onClick={onClick}
    />
  );
};
