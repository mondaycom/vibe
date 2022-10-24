import React, { FC } from "react";
import { STEPS_CSS_BASE_CLASS } from "./StepsConstants";
import VibeComponentProps from "../../types/VibeComponentProps";

const CSS_BASE_CLASS = `${STEPS_CSS_BASE_CLASS}-header_numbers`;

export interface StepsNumbersHeaderProps extends VibeComponentProps {
  activeStepIndex: number;
  stepsCount: number;
}

export const StepsNumbersHeader: FC<StepsNumbersHeaderProps> = ({ activeStepIndex, stepsCount }) => {
  return <div className={CSS_BASE_CLASS}>{`${activeStepIndex + 1} \\ ${stepsCount}`}</div>;
};
