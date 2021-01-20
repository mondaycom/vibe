import React, { useRef, forwardRef } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useMergeRefs from "../../hooks/useMergeRefs";
import Divider from "../Divider/Divider";
import StepIndicator from "./components/StepIndicator/StepIndicator";
import { MULTI_STEP_TYPES, STEP_STATUSES } from "./MultiStepConstants";
import "./MultiStepIndicator.scss";

const MultiStepIndicator = forwardRef(
  ({ className, type, steps, stepComponentClassName, dividerComponentClassName }, ref) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });
    const baseClassName = "multi-step-indicator--wrapper";
    const defaultDividerClassName = `${baseClassName}__divider`;
    return (
      <div ref={mergedRef} className={cx(baseClassName, className)}>
        {steps.map((step, index) => {
          return (
            <>
              <StepIndicator
                {...step}
                stepNumber={index + 1}
                type={type}
                stepComponentClassName={stepComponentClassName}
              />
              {index !== steps.length - 1 && (
                <Divider classname={cx(defaultDividerClassName, dividerComponentClassName)} />
              )}
            </>
          );
        })}
      </div>
    );
  }
);

MultiStepIndicator.types = MULTI_STEP_TYPES;
MultiStepIndicator.stepStatuses = STEP_STATUSES;

MultiStepIndicator.propTypes = {
  /** For overriding the container class styles. */
  className: PropTypes.string,
  type: PropTypes.oneOf([
    MultiStepIndicator.types.PRIMARY,
    MultiStepIndicator.types.SUCCESS,
    MultiStepIndicator.types.DANGER,
    MultiStepIndicator.types.DARK
  ]),
  /** Array of objects of the specified format. */
  steps: PropTypes.arrayOf({
    titleText: PropTypes.string,
    subtitleText: PropTypes.string,
    status: PropTypes.oneOf([
      MultiStepIndicator.stepStatuses.PENDING,
      MultiStepIndicator.stepStatuses.ACTIVE,
      MultiStepIndicator.stepStatuses.FULFILLED
    ])
  }).isRequired,
  /** For overriding the styles of the step component - container of number/check and texts. */
  stepComponentClassName: PropTypes.string,
  /** For overriding the step-dividers styles. */
  dividerComponentClassName: PropTypes.string
};

MultiStepIndicator.defaultProps = {
  className: "",
  stepComponentClassName: "",
  dividerComponentClassName: "",
  type: MultiStepIndicator.types.PRIMARY,
  steps: []
};

export default MultiStepIndicator;
