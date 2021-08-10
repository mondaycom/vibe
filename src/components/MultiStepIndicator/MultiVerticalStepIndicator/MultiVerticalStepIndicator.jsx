import React, { useRef, forwardRef } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useMergeRefs from "../../../hooks/useMergeRefs";
import Icon from "../../Icon/Icon";
import Check from "../../Icon/Icons/components/Check";
import VerticalStepIndicator from "./VerticalStepIndicator/VerticalStepIndicator";
import { MULTI_STEP_TYPES, STEP_STATUSES } from "./MultiVerticalStepConstants";
import "./MultiVerticalStepIndicator.scss";

const MultiVerticalStepIndicator = forwardRef(
  (
    {
      className,
      type,
      steps,
      stepComponentClassName,
      dividerComponentClassName,
      fulfilledStepIcon,
      fulfilledStepIconType,
      onClick
    },
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });
    const baseClassName = "multi-vertical-step-indicator--wrapper";
    const defaultDividerClassName = `${baseClassName}__divider`;
    return (
      <ol ref={mergedRef} className={cx(baseClassName, className)}>
        {steps.map((step, index) => {
          return (
            <>
              <VerticalStepIndicator
                {...step}
                stepNumber={index + 1}
                type={type}
                stepComponentClassName={stepComponentClassName}
                fulfilledStepIcon={fulfilledStepIcon}
                fulfilledStepIconType={fulfilledStepIconType}
                onClick={onClick}
                isFollowedByDivider={index !== steps.length - 1}
                stepDividerClassName={cx(defaultDividerClassName, dividerComponentClassName)}
              />
            </>
          );
        })}
      </ol>
    );
  }
);

MultiVerticalStepIndicator.types = MULTI_STEP_TYPES;
MultiVerticalStepIndicator.stepStatuses = STEP_STATUSES;

MultiVerticalStepIndicator.propTypes = {
  /** For overriding the container class styles. */
  className: PropTypes.string,
  type: PropTypes.oneOf([
    MultiVerticalStepIndicator.types.PRIMARY,
    MultiVerticalStepIndicator.types.SUCCESS,
    MultiVerticalStepIndicator.types.DANGER,
    MultiVerticalStepIndicator.types.DARK
  ]),
  /** Array of objects of the specified format. */
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      titleText: PropTypes.string,
      subtitleText: PropTypes.string,
      status: PropTypes.oneOf([
        MultiVerticalStepIndicator.stepStatuses.PENDING,
        MultiVerticalStepIndicator.stepStatuses.ACTIVE,
        MultiVerticalStepIndicator.stepStatuses.FULFILLED
      ])
    })
  ).isRequired,
  /** For overriding the styles of the step component - container of number/check and texts. */
  stepComponentClassName: PropTypes.string,
  /** For overriding the step-dividers styles. */
  dividerComponentClassName: PropTypes.string,
  /** For overriding the 'fulfilled' step's icon. Is passed directly to an Icon component. */
  fulfilledStepIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  /** For overriding the 'fulfilled' step's icon type. Necessary when passing a string in the "fulfilledStepIcon" prop. */
  fulfilledStepIconType: PropTypes.oneOf([Icon.type.SVG, Icon.type.ICON_FONT]),
  /** Callback for clicking each step. Function's parameter is the step's number. */
  onClick: PropTypes.func
};

MultiVerticalStepIndicator.defaultProps = {
  className: "",
  stepComponentClassName: "",
  dividerComponentClassName: "",
  type: MultiVerticalStepIndicator.types.PRIMARY,
  steps: [],
  fulfilledStepIcon: Check,
  fulfilledStepIconType: Icon.type.SVG,
  onClick: null
};

export default MultiVerticalStepIndicator;
