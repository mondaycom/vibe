import React from "react";
import { STEPS_CSS_BASE_CLASS } from "./StepsConstants";

const CSS_BASE_CLASS = `${STEPS_CSS_BASE_CLASS}-header_numbers`;

export const StepsNumbersHeader = ({ activeStepIndex, stepsCount }) => {
  return <div className={CSS_BASE_CLASS}>{`${activeStepIndex + 1} \\ ${stepsCount}`}</div>;
};
