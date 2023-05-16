import cx from "classnames";
import { noop as NOOP } from "lodash-es";
import { StepsDotAriaCurrent } from "./StepsConstants";
import VibeComponentProps from "../../types/VibeComponentProps";
import React, { FC } from "react";
import styles from "./StepsDot.module.scss";

export interface StepsDotProps extends VibeComponentProps {
  onClick?: (e: React.MouseEvent) => void;
  ariaCurrent?: StepsDotAriaCurrent | boolean;
  isActive?: boolean;
  ariaLabel?: string;
  isOnPrimary?: boolean;
}

export const StepsDot: FC<StepsDotProps> = ({
  isActive,
  onClick = NOOP,
  ariaCurrent = StepsDotAriaCurrent.STEP,
  ariaLabel,
  isOnPrimary,
  className
}) => {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      aria-current={isActive ? ariaCurrent : false}
      className={cx(
        styles.dot,
        {
          [styles.isActive]: isActive,
          [styles.onPrimary]: isOnPrimary
        },
        className
      )}
      onClick={onClick}
    />
  );
};
