import React, { useMemo } from "react";
import cx from "classnames";
import { useButton } from "@react-aria/button";
import {
  FORWARD_DESCRIPTION,
  BACKWARD_DESCRIPTION,
  STEPS_CSS_BASE_CLASS,
  BACK_COMMAND_TEST_ID,
  NEXT_COMMAND_TEST_ID
} from "./StepsConstants";
import NavigationChevronRight from "../Icon/Icons/components/NavigationChevronRight";
import NavigationChevronLeft from "../Icon/Icons/components/NavigationChevronLeft";
import { BEMClass } from "../../helpers/bem-helper";
import Icon from "../Icon/Icon";
import { useChangeStepFunction } from "./hooks/useChangeStepFunction";

const CSS_BASE_CLASS = `${STEPS_CSS_BASE_CLASS}-command`;
const bemHelper = BEMClass(CSS_BASE_CLASS);

export const StepsCommand = ({ isForward, onChangeActiveStep, overrideDescription, activeStepIndex, stepsCount }) => {
  const description = useMemo(() => {
    if (overrideDescription) return overrideDescription;
    return isForward ? FORWARD_DESCRIPTION : BACKWARD_DESCRIPTION;
  }, [isForward, overrideDescription]);

  const overrideOnClick = useChangeStepFunction({
    onClickCallback: onChangeActiveStep,
    activeStepIndex,
    stepsCount,
    newStepIndex: isForward ? activeStepIndex + 1 : activeStepIndex - 1
  });

  const { buttonProps } = useButton({
    onPress: overrideOnClick,
    elementType: "div"
  });

  const icon = isForward ? NavigationChevronRight : NavigationChevronLeft;
  return (
    <div
      className={cx(CSS_BASE_CLASS, bemHelper({ state: isForward ? "forward" : "backward" }))}
      data-testid={isForward ? FORWARD_DESCRIPTION : BACK_COMMAND_TEST_ID}
      {...buttonProps}
    >
      <span className={bemHelper({ element: "text" })}>{description}</span>
      <Icon icon={icon} clickable={false} className={bemHelper({ element: "icon" })} />
    </div>
  );
};
