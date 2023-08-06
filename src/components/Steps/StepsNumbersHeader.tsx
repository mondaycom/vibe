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
    <Text
      type={Text.types.TEXT2}
      color={isOnPrimary ? Text.colors.ON_PRIMARY : Text.colors.PRIMARY}
      className={cx(styles.numbers)}
    >{`${activeStepIndex + 1} \\ ${stepsCount}`}</Text>
  );
};
