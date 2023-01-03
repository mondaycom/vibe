import React, { FC } from "react";
import VibeComponentProps from "../../types/VibeComponentProps";
import cx from "classnames";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import styles from "./StepsNumbersHeader.module.scss";

const CSS_BASE_CLASS = "monday-style-steps-header_numbers";

export interface StepsNumbersHeaderProps extends VibeComponentProps {
  activeStepIndex: number;
  stepsCount: number;
}

export const StepsNumbersHeader: FC<StepsNumbersHeaderProps> = ({
  activeStepIndex,
  stepsCount,
  id,
  "data-testid": dataTestId
}) => {
  return (
    <div
      className={cx(styles.headerNumbers, CSS_BASE_CLASS)}
      id={id}
      data-testid={dataTestId || getTestId(ComponentDefaultTestId.STEPS_NUMBERS_HEADER, id)}
    >{`${activeStepIndex + 1} \\ ${stepsCount}`}</div>
  );
};
