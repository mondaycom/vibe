import React, { useRef, forwardRef } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import {
  STEPS_NUMBERS_TYPE,
  STEPS_GALLERY_TYPE,
  STEPS_CSS_BASE_CLASS,
  MAX_STEPS_FOR_GALLERY_TYPE
} from "./StepsConstants";
import useMergeRefs from "../../hooks/useMergeRefs";
import { StepsHeader } from "./StepsHeader";
import "./Steps.scss";
import { NOOP } from "../../utils/function-utils";
import { BEMClass } from "../../helpers/bem-helper";

const CSS_BASE_CLASS = `${STEPS_CSS_BASE_CLASS}-wrapper`;
const bemHelper = BEMClass(CSS_BASE_CLASS);

const Steps = forwardRef(({ className, id, steps, activeStepIndex, type, onChangeActiveStep, isOnPrimary }, ref) => {
  const componentRef = useRef(null);
  const mergedRef = useMergeRefs({ refs: [ref, componentRef] });
  const overrideType = steps.length > MAX_STEPS_FOR_GALLERY_TYPE ? STEPS_NUMBERS_TYPE : type;
  return (
    <div
      ref={mergedRef}
      className={cx(CSS_BASE_CLASS, className, { [bemHelper({ state: "on-primary" })]: isOnPrimary })}
      id={id}
    >
      <StepsHeader
        onChangeActiveStep={onChangeActiveStep}
        type={overrideType}
        activeStepIndex={activeStepIndex}
        stepsCount={steps.length}
      />
      {steps[activeStepIndex]}
    </div>
  );
});

Steps.types = [STEPS_NUMBERS_TYPE, STEPS_GALLERY_TYPE];

Steps.propTypes = {
  activeStepIndex: PropTypes.number,
  steps: PropTypes.arrayOf(PropTypes.element),
  className: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.oneOf([STEPS_GALLERY_TYPE, STEPS_NUMBERS_TYPE]),
  isOnPrimary: PropTypes.bool
};

Steps.defaultProps = {
  activeStepIndex: 1,
  isOnPrimary: false,
  steps: [],
  className: "",
  id: "",
  onChangeActiveStep: NOOP,
  type: STEPS_GALLERY_TYPE
};

export default Steps;
