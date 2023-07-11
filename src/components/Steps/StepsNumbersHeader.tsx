import cx from "classnames";
import React, { FC } from "react";
import VibeComponentProps from "../../types/VibeComponentProps";
import Text from "../Text/Text";
import styles from "./StepsNumbersHeader.module.scss";

export interface StepsNumbersHeaderProps extends VibeComponentProps {
  activeStepIndex: number;
  stepsCount: number;
  isOnPrimary?: boolean;
}

export const StepsNumbersHeader: FC<StepsNumbersHeaderProps> = ({ activeStepIndex, stepsCount, isOnPrimary }) => {
  return (
    <Text element="div" color={isOnPrimary ? "onPrimary" : "primary"} className={cx(styles.numbers)}>{`${
      activeStepIndex + 1
    } \\ ${stepsCount}`}</Text>
  );
};
