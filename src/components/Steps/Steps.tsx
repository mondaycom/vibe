import cx from "classnames";
import React, { forwardRef, ReactElement, useRef } from "react";
import { NOOP } from "../../utils/function-utils";
import useMergeRefs from "../../hooks/useMergeRefs";
import { StepsHeader } from "./StepsHeader";
import { ELEMENT_TYPES, getTestId } from "../../utils/test-utils";
import { StepsType } from "./StepsConstants";
import VibeComponentProps from "../../types/VibeComponentProps";
import { ButtonProps } from "../Button/Button";
import VibeComponent from "../../types/VibeComponent";
import styles from "./Steps.module.scss";

const STEPS_CSS_BASE_CLASS = "monday-style-steps";

interface StepsProps extends VibeComponentProps {
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
  isOnPrimary?: boolean;
  isContentOnTop?: boolean;
  areButtonsIconsHidden?: boolean;
  backButtonProps?: ButtonProps;
  nextButtonProps?: ButtonProps;
}

const Steps: VibeComponent<StepsProps> & { types?: typeof StepsType } = forwardRef(
  (
    {
      className,
      id,
      steps = [],
      activeStepIndex = 0,
      type = StepsType.GALLERY,
      onChangeActiveStep = NOOP,
      isOnPrimary = false,
      areNavigationButtonsHidden = false,
      isContentOnTop = false,
      backButtonProps = {},
      nextButtonProps = {},
      areButtonsIconsHidden = false,
      "data-testid": dataTestId
    },
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });
    return (
      <div
        ref={mergedRef}
        className={cx(STEPS_CSS_BASE_CLASS, className, {
          [styles.onPrimary]: isOnPrimary,
          ["monday-style-steps--on-primary"]: isOnPrimary,
          [styles.contentOnTop]: isContentOnTop,
          ["monday-style-steps--content-on-top"]: isContentOnTop,
          [styles.contentOnBottom]: !isContentOnTop,
          ["monday-style-steps--content-on-bottom"]: !isContentOnTop
        })}
        id={id}
        data-testid={dataTestId || getTestId(ELEMENT_TYPES.STEPS, id)}
      >
        {isContentOnTop && steps[activeStepIndex]}
        <StepsHeader
          onChangeActiveStep={onChangeActiveStep}
          type={type}
          activeStepIndex={activeStepIndex}
          stepsCount={steps.length}
          areNavigationButtonsHidden={areNavigationButtonsHidden}
          isOnPrimary={isOnPrimary}
          backButtonProps={backButtonProps}
          nextButtonProps={nextButtonProps}
          areButtonsIconsHidden={areButtonsIconsHidden}
        />
        {!isContentOnTop && steps[activeStepIndex]}
      </div>
    );
  }
);

Object.assign(Steps, {
  types: StepsType
});

export default Steps;
