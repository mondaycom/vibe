import { ELEMENT_TYPES, getTestId } from "../../utils/test-utils";
import cx from "classnames";
import NOOP from "lodash/noop";
import VibeComponentProps from "../../types/VibeComponentProps";
import React, { FC } from "react";
import { StepsDotAriaCurrent } from "./StepsConstants";
import styles from "./StepsDot.module.scss";

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
  ariaLabel,
  id,
  "data-testid": dataTestId
}) => {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      aria-current={isActive ? ariaCurrent : false}
      className={cx(styles.headerDot, "monday-style-steps-header_dot", {
        [styles.headerDotIsActive]: isActive,
        ["monday-style-steps-header_dot--is-active"]: isActive
      })}
      onClick={onClick}
      id={id}
      data-testid={dataTestId || getTestId(ELEMENT_TYPES.STEPS_DOT, id)}
    />
  );
};
