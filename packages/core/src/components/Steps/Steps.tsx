import React, { forwardRef, type ReactElement, useRef } from "react";
import cx from "classnames";
import { NOOP } from "../../utils/function-utils";
import useMergeRef from "../../hooks/useMergeRef";
import { StepsHeader } from "./StepsHeader";
import { StepsColor as StepsColorEnum, StepsType as StepsTypeEnum } from "./StepsConstants";
import { type StepsColor, type StepsType } from "./Steps.types";
import { type ButtonProps } from "@vibe/button";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import { withStaticProps, type VibeComponentProps } from "../../types";
import styles from "./Steps.module.scss";

export interface StepsProps extends VibeComponentProps {
  /**
   * The index of the currently active step.
   */
  activeStepIndex?: number;
  /**
   * Callback fired when the active step changes.
   */
  onChangeActiveStep?: (e: React.MouseEvent, stepIndex: number) => void;
  /**
   * If true, hides the navigation buttons.
   */
  areNavigationButtonsHidden?: boolean;
  /**
   * The list of steps in the steps component.
   */
  steps?: ReactElement[];
  /**
   * The visual style of the steps component.
   */
  type?: StepsType;
  /**
   * The color theme of the steps component.
   */
  color?: StepsColor;
  /**
   * If true, the content is displayed above the step navigation.
   */
  isContentOnTop?: boolean;
  /**
   * If true, hides the icons in the navigation buttons.
   */
  areButtonsIconsHidden?: boolean;
  /**
   * Props applied to the back button.
   */
  backButtonProps?: Partial<ButtonProps>;
  /**
   * Props applied to the next button.
   */
  nextButtonProps?: Partial<ButtonProps>;
  /**
   * Props applied to the finish button.
   */
  finishButtonProps?: Partial<ButtonProps>;
  /**
   * Callback fired when the finish button is clicked.
   */
  onFinish?: (e: React.MouseEvent | React.KeyboardEvent) => void;
}

const Steps = forwardRef(
  (
    {
      className,
      id,
      "data-testid": dataTestId,
      steps = [],
      activeStepIndex = 0,
      type = "gallery",
      onChangeActiveStep = NOOP,
      onFinish,
      color,
      areNavigationButtonsHidden = false,
      isContentOnTop = false,
      backButtonProps = {},
      nextButtonProps = {},
      finishButtonProps = {},
      areButtonsIconsHidden = false
    }: StepsProps,
    ref: React.ForwardedRef<HTMLElement>
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRef(ref, componentRef);

    return (
      <div
        ref={mergedRef}
        className={cx(styles.steps, className)}
        id={id}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.STEPS, id)}
      >
        {isContentOnTop && steps[activeStepIndex]}
        <StepsHeader
          onChangeActiveStep={onChangeActiveStep}
          type={type}
          activeStepIndex={activeStepIndex}
          stepsCount={steps.length}
          areNavigationButtonsHidden={areNavigationButtonsHidden}
          color={color}
          backButtonProps={backButtonProps}
          nextButtonProps={nextButtonProps}
          finishButtonProps={finishButtonProps}
          areButtonsIconsHidden={areButtonsIconsHidden}
          onFinish={onFinish}
          className={cx({
            [styles.contentOnTop]: isContentOnTop,
            [styles.contentOnBottom]: !isContentOnTop
          })}
        />
        {!isContentOnTop && steps[activeStepIndex]}
      </div>
    );
  }
);

interface StepsStaticProps {
  types: typeof StepsTypeEnum;
  colors: typeof StepsColorEnum;
}

export default withStaticProps<StepsProps, StepsStaticProps>(Steps, {
  types: StepsTypeEnum,
  colors: StepsColorEnum
});
