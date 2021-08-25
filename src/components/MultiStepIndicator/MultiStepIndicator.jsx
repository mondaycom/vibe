import React, { useRef, forwardRef, useMemo } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useMergeRefs from "../../hooks/useMergeRefs";
import Icon from "../Icon/Icon";
import Check from "../Icon/Icons/components/Check";
import Divider from "../Divider/Divider";
import StepIndicator from "./components/StepIndicator/StepIndicator";
import VerticalStepIndicator from "./components/VerticalStepIndicator/VerticalStepIndicator";
import { MULTI_STEP_TYPES, STEP_STATUSES, TEXT_PLACEMENTS } from "./MultiStepConstants";
import { NOOP } from "../../utils/function-utils";
import "./MultiStepIndicator.scss";

const MultiStepIndicator = forwardRef(
  (
    {
      className,
      type,
      steps,
      stepComponentClassName,
      dividerComponentClassName,
      fulfilledStepIcon,
      fulfilledStepIconType,
      onClick,
      textPlacement
    },
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });
    const baseClassName = "multi-step-indicator--wrapper";
    const defaultDividerClassName = `${baseClassName}__divider`;

    const renderHorizontalStepIndicator = (step, index) => {
      return (
        <>
          <StepIndicator
            {...step}
            stepNumber={index + 1}
            type={type}
            stepComponentClassName={stepComponentClassName}
            fulfilledStepIcon={fulfilledStepIcon}
            fulfilledStepIconType={fulfilledStepIconType}
            onClick={onClick}
          />
          {index !== steps.length - 1 && <Divider classname={cx(defaultDividerClassName, dividerComponentClassName)} />}
        </>
      );
    };

    const renderVerticalStepIndicator = (step, index) => {
      return (
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
      );
    };

    const stepRenderer = useMemo(
      () => (textPlacement === TEXT_PLACEMENTS.VERTICAL ? renderVerticalStepIndicator : renderHorizontalStepIndicator),
      [textPlacement, renderVerticalStepIndicator, renderHorizontalStepIndicator]
    );

    return (
      <ol ref={mergedRef} className={cx(baseClassName, className)}>
        {steps.map(stepRenderer)}
      </ol>
    );
  }
);

MultiStepIndicator.types = MULTI_STEP_TYPES;
MultiStepIndicator.stepStatuses = STEP_STATUSES;
MultiStepIndicator.textPlacements = TEXT_PLACEMENTS;

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
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      titleText: PropTypes.string,
      subtitleText: PropTypes.string,
      status: PropTypes.oneOf([
        MultiStepIndicator.stepStatuses.PENDING,
        MultiStepIndicator.stepStatuses.ACTIVE,
        MultiStepIndicator.stepStatuses.FULFILLED
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
  /** Callback for clicking each step. The callback is sent one parameter - the step's number. */
  onClick: PropTypes.func,
  /** Determines the step's text placement. Either to the left of the indicator(horizontal) or under it(vertical). */
  textPlacement: PropTypes.oneOf([
    MultiStepIndicator.textPlacements.HORIZONTAL,
    MultiStepIndicator.textPlacements.VERTICAL
  ])
};

MultiStepIndicator.defaultProps = {
  className: "",
  stepComponentClassName: "",
  dividerComponentClassName: "",
  type: MultiStepIndicator.types.PRIMARY,
  steps: [],
  fulfilledStepIcon: Check,
  fulfilledStepIconType: Icon.type.SVG,
  onClick: NOOP,
  textPlacement: MultiStepIndicator.textPlacements.HORIZONTAL
};

export default MultiStepIndicator;
