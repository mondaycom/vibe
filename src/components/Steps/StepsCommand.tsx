import React, { FC, useCallback, useMemo } from "react";
import cx from "classnames";
import NavigationChevronRight from "../../components/Icon/Icons/components/NavigationChevronRight";
import NavigationChevronLeft from "../../components/Icon/Icons/components/NavigationChevronLeft";
import Icon from "../../components/Icon/Icon";
import Button, { ButtonProps } from "../../components/Button/Button";
import { NOOP } from "../../utils/function-utils";
import { BACK_COMMAND_TEST_ID, BACK_DESCRIPTION, NEXT_COMMAND_TEST_ID, NEXT_DESCRIPTION } from "./StepsConstants";
import VibeComponentProps from "../../types/VibeComponentProps";
import styles from "./StepsCommand.module.scss";

const CSS_BASE_CLASS = "monday-style-steps-command";

export interface StepsCommandProps extends VibeComponentProps {
  isNext?: boolean;
  onChangeActiveStep?: (e: React.MouseEvent, newStepIndex: number) => void;
  activeStepIndex: number;
  stepsCount: number;
  isIconHidden?: boolean;
  buttonProps?: ButtonProps;
  isOnPrimary?: boolean;
}

export const StepsCommand: FC<StepsCommandProps> = ({
  isNext = false,
  onChangeActiveStep = NOOP,
  activeStepIndex,
  stepsCount,
  isIconHidden = false,
  isOnPrimary = false,
  buttonProps = {},
  id
}) => {
  const { children: buttonChildren, ...otherButtonProps } = buttonProps;
  const description = useMemo(() => {
    if (buttonChildren) return buttonChildren;
    return isNext ? NEXT_DESCRIPTION : BACK_DESCRIPTION;
  }, [isNext, buttonChildren]);
  const buttonBaseColor = isOnPrimary ? Button.colors.ON_PRIMARY_COLOR : undefined;
  const newStepIndex = isNext ? activeStepIndex + 1 : activeStepIndex - 1;
  const onClick = useCallback(
    (e: React.MouseEvent) => onChangeActiveStep(e, newStepIndex),
    [newStepIndex, onChangeActiveStep]
  );
  const isDisable = (isNext && activeStepIndex === stepsCount - 1) || (!isNext && activeStepIndex === 0);

  const icon = isNext ? NavigationChevronRight : NavigationChevronLeft;
  return (
    <Button
      className={cx(
        styles.command,
        CSS_BASE_CLASS,
        isNext ? styles.forward : styles.backward,
        `${CSS_BASE_CLASS}--${isNext ? "forward" : "backward"}`
      )}
      data-testid={isNext ? NEXT_COMMAND_TEST_ID : BACK_COMMAND_TEST_ID}
      kind={Button.kinds.TERTIARY}
      onClick={onClick}
      disabled={isDisable}
      color={buttonBaseColor}
      {...otherButtonProps}
      id={id}
    >
      {description}
      {isIconHidden ? null : (
        <Icon icon={icon} clickable={false} className={cx(styles.icon, "monday-style-steps-command_icon")} />
      )}
    </Button>
  );
};
