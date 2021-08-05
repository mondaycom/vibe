import React, { useCallback, useMemo } from "react";
import cx from "classnames";
import PropTypes from "prop-types";
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
import Button from "../Button/Button";
import { NOOP } from "../../utils/function-utils";

const CSS_BASE_CLASS = `${STEPS_CSS_BASE_CLASS}-command`;
const bemHelper = BEMClass(CSS_BASE_CLASS);

export const StepsCommand = ({
  isForward,
  onChangeActiveStep,
  activeStepIndex,
  stepsCount,
  isIconHidden,
  isOnPrimary,
  buttonProps
}) => {
  const { children: buttonChildren, ...otherButtonProps } = buttonProps;
  const description = useMemo(() => {
    if (buttonChildren) return buttonChildren;
    return isForward ? FORWARD_DESCRIPTION : BACKWARD_DESCRIPTION;
  }, [isForward, buttonChildren]);
  const buttonBaseColor = isOnPrimary ? Button.colors.ON_PRIMARY_COLOR : undefined;
  const newStepIndex = isForward ? activeStepIndex + 1 : activeStepIndex - 1;
  const onClick = useCallback(e => onChangeActiveStep(e, newStepIndex), [newStepIndex, onChangeActiveStep]);
  const isDisable = (isForward && activeStepIndex === stepsCount - 1) || (!isForward && activeStepIndex === 0);

  const icon = isForward ? NavigationChevronRight : NavigationChevronLeft;
  return (
    <Button
      className={cx(CSS_BASE_CLASS, bemHelper({ state: isForward ? "forward" : "backward" }))}
      dataTestId={isForward ? NEXT_COMMAND_TEST_ID : BACK_COMMAND_TEST_ID}
      kind={Button.kinds.TERTIARY}
      onClick={onClick}
      disabled={isDisable}
      color={buttonBaseColor}
      {...otherButtonProps}
    >
      {description}
      {isIconHidden ? null : <Icon icon={icon} clickable={false} className={bemHelper({ element: "icon" })} />}
    </Button>
  );
};

StepsCommand.propTyps = {
  isForward: PropTypes.bool,
  onChangeActiveStep: PropTypes.func,
  activeStepIndex: PropTypes.number.isRequired,
  stepsCount: PropTypes.number.isRequired,
  isIconHidden: PropTypes.bool,
  buttonProps: PropTypes.object,
  isOnPrimary: PropTypes.bool
};
StepsCommand.defaultProps = {
  isForward: false,
  onChangeActiveStep: NOOP,
  isIconHidden: false,
  isOnPrimary: false,
  buttonProps: {}
};
