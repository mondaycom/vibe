import React, { forwardRef, ReactElement, useRef } from "react";
import cx from "classnames";
import { NOOP } from "../../utils/function-utils";
import useMergeRef from "../../hooks/useMergeRef";
import { StepsHeader } from "./StepsHeader";
import { StepsColor, StepsType } from "./StepsConstants";
import { ButtonProps } from "../Button/Button";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import { withStaticProps, VibeComponent, VibeComponentProps } from "../../types";
import styles from "./Steps.module.scss";

export interface StepsProps extends VibeComponentProps {
  /**
   * The index of the current displayed step
   */
  activeStepIndex?: number;
  /**
   * A callback which called when the active step is changed
   */
  onChangeActiveStep?: (e: React.MouseEvent, stepIndex: number) => void;
  areNavigationButtonsHidden?: boolean;
  steps?: ReactElement[];
  type?: StepsType;
  color?: StepsColor;
  isContentOnTop?: boolean;
  areButtonsIconsHidden?: boolean;
  backButtonProps?: ButtonProps;
  nextButtonProps?: ButtonProps;
  finishButtonProps?: ButtonProps;
  onFinish?: (e: React.MouseEvent | React.KeyboardEvent) => void;
}

const Steps: VibeComponent<StepsProps> & { types?: typeof StepsType } = forwardRef(
  (
    {
      className,
      id,
      "data-testid": dataTestId,
      steps = [],
      activeStepIndex = 0,
      type = StepsType.GALLERY,
      onChangeActiveStep = NOOP,
      onFinish,
      color,
      areNavigationButtonsHidden = false,
      isContentOnTop = false,
      backButtonProps = {},
      nextButtonProps = {},
      finishButtonProps = {},
      areButtonsIconsHidden = false
    },
    ref
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

export default withStaticProps(Steps, {
  types: StepsType
});
