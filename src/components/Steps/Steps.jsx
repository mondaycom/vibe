import cx from "classnames";
import React, { forwardRef, useRef } from "react";
import PropTypes from "prop-types";
import { NOOP } from "../../utils/function-utils";
import useMergeRefs from "../../hooks/useMergeRefs";
import { StepsHeader } from "./StepsHeader";
import { STEPS_GALLERY_TYPE, STEPS_TYPES } from "./StepsConstants";
import styles from "./Steps.module.scss";
import { ELEMENT_TYPES, getTestId } from "../../utils/test-utils";

const STEPS_CSS_BASE_CLASS = "monday-style-steps";

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
      areButtonsIconsHidden,
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
