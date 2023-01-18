import React, { forwardRef, ReactElement, useRef } from "react";
import cx from "classnames";
import { BEMClass } from "../../helpers/bem-helper";
import { NOOP } from "../../utils/function-utils";
import useMergeRefs from "../../hooks/useMergeRefs";
import { StepsHeader } from "./StepsHeader";
import { STEPS_CSS_BASE_CLASS, StepsType } from "./StepsConstants";
import VibeComponentProps from "../../types/VibeComponentProps";
import { ButtonProps } from "../Button/Button";
import VibeComponent from "../../types/VibeComponent";
import "./Steps.scss";

const bemHelper = BEMClass(STEPS_CSS_BASE_CLASS);

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
      areButtonsIconsHidden = false
    },
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });
    return (
      <div
        ref={mergedRef}
        className={cx(STEPS_CSS_BASE_CLASS, className, {
          [bemHelper({ state: "on-primary" })]: isOnPrimary,
          [bemHelper({ state: "content-on-top" })]: isContentOnTop,
          [bemHelper({ state: "content-on-bottom" })]: !isContentOnTop
        })}
        id={id}
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
