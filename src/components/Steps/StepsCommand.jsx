import cx from "classnames";
import React, { useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import NavigationChevronRight from "../../components/Icon/Icons/components/NavigationChevronRight";
import NavigationChevronLeft from "../../components/Icon/Icons/components/NavigationChevronLeft";
import Icon from "../../components/Icon/Icon";
import Button from "../../components/Button/Button";
import { NOOP } from "../../utils/function-utils";
import { BACK_COMMAND_TEST_ID, BACK_DESCRIPTION, NEXT_COMMAND_TEST_ID, NEXT_DESCRIPTION } from "./StepsConstants";
import styles from "./StepsCommand.module.scss";

const CSS_BASE_CLASS = "monday-style-steps-command";

export const StepsCommand = ({
  isNext,
  onChangeActiveStep,
  activeStepIndex,
  stepsCount,
  isIconHidden,
  isOnPrimary,
  buttonProps,
  id
}) => {
  const { children: buttonChildren, ...otherButtonProps } = buttonProps;
  const description = useMemo(() => {
    if (buttonChildren) return buttonChildren;
    return isNext ? NEXT_DESCRIPTION : BACK_DESCRIPTION;
  }, [isNext, buttonChildren]);
  const buttonBaseColor = isOnPrimary ? Button.colors.ON_PRIMARY_COLOR : undefined;
  const newStepIndex = isNext ? activeStepIndex + 1 : activeStepIndex - 1;
  const onClick = useCallback(e => onChangeActiveStep(e, newStepIndex), [newStepIndex, onChangeActiveStep]);
  const isDisable = (isNext && activeStepIndex === stepsCount - 1) || (!isNext && activeStepIndex === 0);

  const icon = isNext ? NavigationChevronRight : NavigationChevronLeft;
  return (
    <Button
      className={cx(styles.command, CSS_BASE_CLASS)}
      dataTestId={isNext ? NEXT_COMMAND_TEST_ID : BACK_COMMAND_TEST_ID}
      kind={Button.kinds.TERTIARY}
      onClick={onClick}
      disabled={isDisable}
      color={buttonBaseColor}
      {...otherButtonProps}
      id={id}
    >
      {description}
      {isIconHidden ? null : (
        <Icon icon={icon} clickable={false} className={cx(styles.commandIcon, "monday-style-steps-command_icon")} />
      )}
    </Button>
  );
};

StepsCommand.propTyps = {
  isNext: PropTypes.bool,
  onChangeActiveStep: PropTypes.func,
  activeStepIndex: PropTypes.number.isRequired,
  stepsCount: PropTypes.number.isRequired,
  isIconHidden: PropTypes.bool,
  buttonProps: PropTypes.object,
  isOnPrimary: PropTypes.bool
};
StepsCommand.defaultProps = {
  isNext: false,
  onChangeActiveStep: NOOP,
  isIconHidden: false,
  isOnPrimary: false,
  buttonProps: {}
};
