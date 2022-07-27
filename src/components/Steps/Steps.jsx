import React, { useRef, forwardRef } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { BEMClass } from "../../helpers/bem-helper";
import { NOOP } from "../../utils/function-utils";
import useMergeRefs from "../../hooks/useMergeRefs";
import { StepsHeader } from "./StepsHeader";
import { STEPS_GALLERY_TYPE, STEPS_CSS_BASE_CLASS, STEPS_TYPES } from "./StepsConstants";
import "./Steps.scss";

const bemHelper = BEMClass(STEPS_CSS_BASE_CLASS);

const Steps = forwardRef(
  (
    {
      className,
      id,
      steps,
      activeStepIndex,
      type,
      onChangeActiveStep,
      isOnPrimary,
      areNavigationButtonsHidden,
      isContentOnTop,
      backButtonProps,
      nextButtonProps,
      areButtonsIconsHidden
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

Steps.types = STEPS_TYPES;

Steps.propTypes = {
  /**
   * The index of the current displayed step
   */
  activeStepIndex: PropTypes.number,
  /**
   * A callback which called when the active step is changed
   */
  onChangeActiveStep: PropTypes.func,
  areNavigationButtonsHidden: PropTypes.bool,
  steps: PropTypes.arrayOf(PropTypes.element),
  className: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.oneOf([Steps.types.GALLERY, Steps.types.NUMBERS]),
  isOnPrimary: PropTypes.bool,
  isContentOnTop: PropTypes.bool,
  areButtonsIconsHidden: PropTypes.bool
};

Steps.defaultProps = {
  activeStepIndex: 0,
  isOnPrimary: false,
  steps: [],
  className: "",
  id: "",
  onChangeActiveStep: NOOP,
  areNavigationButtonsHidden: false,
  type: STEPS_GALLERY_TYPE,
  isContentOnTop: false,
  areButtonsIconsHidden: false
};

export default Steps;
