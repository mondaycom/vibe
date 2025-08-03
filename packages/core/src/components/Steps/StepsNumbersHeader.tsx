import cx from "classnames";
import React, { type FC, useMemo } from "react";
import type VibeComponentProps from "../../types/VibeComponentProps";
import Text from "../Text/Text";
import styles from "./StepsNumbersHeader.module.scss";
import { type StepsColor } from "./Steps.types";

export interface StepsNumbersHeaderProps extends VibeComponentProps {
  /**
   * The index of the currently active step.
   */
  activeStepIndex: number;
  /**
   * The total number of steps.
   */
  stepsCount: number;
  /**
   * The color theme of the steps numbers header.
   */
  color?: StepsColor;
}

export const StepsNumbersHeader: FC<StepsNumbersHeaderProps> = ({ activeStepIndex, stepsCount, color }) => {
  const textColor = useMemo(() => {
    if (color === "primary") {
      return color;
    } else {
      return color === "on-inverted-background" ? "onInverted" : "onPrimary";
    }
  }, [color]);

  return (
    <Text type="text2" color={textColor} className={cx(styles.numbers)}>{`${
      activeStepIndex + 1
    } \\ ${stepsCount}`}</Text>
  );
};
