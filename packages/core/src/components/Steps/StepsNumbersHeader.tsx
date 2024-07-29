import cx from "classnames";
import React, { FC, useMemo } from "react";
import VibeComponentProps from "../../types/VibeComponentProps";
import Text from "../Text/Text";
import styles from "./StepsNumbersHeader.module.scss";
import { StepsColor } from "./Steps.types";

export interface StepsNumbersHeaderProps extends VibeComponentProps {
  activeStepIndex: number;
  stepsCount: number;
  color?: StepsColor;
}

export const StepsNumbersHeader: FC<StepsNumbersHeaderProps> = ({ activeStepIndex, stepsCount, color }) => {
  const textColor = useMemo(() => {
    if (color === "primary") {
      return color;
    } else {
      return color === "on-inverted-background" ? Text.colors.ON_INVERTED : Text.colors.ON_PRIMARY;
    }
  }, [color]);

  return (
    // @ts-ignore
    <Text type={Text.types.TEXT2} color={textColor} className={cx(styles.numbers)}>{`${
      activeStepIndex + 1
    } \\ ${stepsCount}`}</Text>
  );
};
