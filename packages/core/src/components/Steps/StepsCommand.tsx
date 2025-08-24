import React, { type FC, useCallback, useMemo } from "react";
import cx from "classnames";
import { NavigationChevronRight, NavigationChevronLeft } from "@vibe/icons";
import { Icon } from "@vibe/icon";
import Button, { type ButtonProps } from "../../components/Button/Button";
import { NOOP } from "../../utils/function-utils";
import { BACK_TEXT, NEXT_TEXT } from "./StepsConstants";
import { type StepsColor } from "./Steps.types";
import type VibeComponentProps from "../../types/VibeComponentProps";
import { ComponentDefaultTestId } from "../../tests/constants";
import styles from "./StepsCommand.module.scss";
import { camelCase } from "lodash-es";
import { getStyle } from "../..//helpers/typesciptCssModulesHelper";

export interface StepsCommandProps extends VibeComponentProps {
  /**
   * If true, this button is for moving to the next step.
   */
  isNext?: boolean;
  /**
   * Callback fired when the active step changes.
   */
  onChangeActiveStep?: (e: React.MouseEvent, newStepIndex: number) => void;
  /**
   * The index of the currently active step.
   */
  activeStepIndex: number;
  /**
   * The total number of steps.
   */
  stepsCount: number;
  /**
   * If true, hides the navigation icon.
   */
  isIconHidden?: boolean;
  /**
   * Props applied to the button.
   */
  buttonProps?: Partial<ButtonProps>;
  /**
   * The color theme of the button.
   */
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
