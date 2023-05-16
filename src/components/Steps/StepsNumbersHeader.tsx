import cx from "classnames";
import React, { FC } from "react";
import VibeComponentProps from "../../types/VibeComponentProps";
import styles from "./StepsNumbersHeader.module.scss";

export interface StepsNumbersHeaderProps extends VibeComponentProps {
  activeStepIndex: number;
  stepsCount: number;
  isOnPrimary?: boolean;
}

export const StepsNumbersHeader: FC<StepsNumbersHeaderProps> = ({ activeStepIndex, stepsCount, isOnPrimary }) => {
  return (
    <div className={cx(styles.numbers, { [styles.onPrimary]: isOnPrimary })}>{`${
      activeStepIndex + 1
    } \\ ${stepsCount}`}</div>
  );
};
