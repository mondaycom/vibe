import React, { FC, useCallback, useMemo } from "react";
import cx from "classnames";
import { NavigationChevronRight, NavigationChevronLeft } from "@vibe/icons";
import Icon from "../../components/Icon/Icon";
import Button, { ButtonProps } from "../../components/Button/Button";
import { NOOP } from "../../utils/function-utils";
import { BACK_TEXT, NEXT_TEXT } from "./StepsConstants";
import { StepsColor } from "./Steps.types";
import VibeComponentProps from "../../types/VibeComponentProps";
import { ComponentDefaultTestId } from "../../tests/constants";
import styles from "./StepsCommand.module.scss";
import { camelCase } from "lodash-es";
import { getStyle } from "../..//helpers/typesciptCssModulesHelper";

export interface StepsCommandProps extends VibeComponentProps {
  isNext?: boolean;
  onChangeActiveStep?: (e: React.MouseEvent, newStepIndex: number) => void;
  activeStepIndex: number;
  stepsCount: number;
  isIconHidden?: boolean;
  buttonProps?: Partial<ButtonProps>;
  color?: StepsColor;
}

export const StepsCommand: FC<StepsCommandProps> = ({
  isNext = false,
  onChangeActiveStep = NOOP,
  activeStepIndex,
  stepsCount,
  isIconHidden = false,
  buttonProps = {},
  color = "primary"
}: StepsCommandProps) => {
  const { children: buttonChildren, ...otherButtonProps } = buttonProps;
  const description = useMemo(() => {
    if (buttonChildren) return buttonChildren;
    return isNext ? NEXT_TEXT : BACK_TEXT;
  }, [isNext, buttonChildren]);
  const newStepIndex = isNext ? activeStepIndex + 1 : activeStepIndex - 1;
  const onClick = useCallback(
    (e: React.MouseEvent) => onChangeActiveStep(e, newStepIndex),
    [newStepIndex, onChangeActiveStep]
  );
  const isDisabled = (isNext && activeStepIndex === stepsCount - 1) || (!isNext && activeStepIndex === 0);

  const icon = isNext ? NavigationChevronRight : NavigationChevronLeft;
  return (
    <Button
      className={cx(styles.command, { [styles.backward]: !isNext })}
      data-testid={
        isNext ? ComponentDefaultTestId.STEPS_FORWARD_COMMAND : ComponentDefaultTestId.STEPS_BACKWARD_COMMAND
      }
      kind="tertiary"
      onClick={onClick}
      disabled={isDisabled}
      // @ts-ignore
      color={color}
      {...otherButtonProps}
    >
      {description}
      {isIconHidden ? null : (
        <Icon
          icon={icon}
          className={cx(styles.icon, getStyle(styles, camelCase("color-" + color)), {
            [styles.disabled]: isDisabled
          })}
        />
      )}
    </Button>
  );
};
