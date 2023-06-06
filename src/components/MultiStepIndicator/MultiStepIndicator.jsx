/* eslint-disable react/require-default-props */
import cx from "classnames";
import React, { useRef, forwardRef, useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import useMergeRefs from "../../hooks/useMergeRefs";
import Icon from "../../components/Icon/Icon";
import Check from "../../components/Icon/Icons/components/Check";
import Divider from "../../components/Divider/Divider";
import { NOOP } from "../../utils/function-utils";
import StepIndicator from "./components/StepIndicator/StepIndicator";
import { MODES, MULTI_STEP_TYPES, STEP_STATUSES, TEXT_PLACEMENTS } from "./MultiStepConstants";
import { getTestId } from "../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../tests/constants";
import styles from "./MultiStepIndicator.module.scss";

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
      isFulfilledStepDisplayNumber,
      onClick,
      textPlacement,
      id,
      mode,
      "data-testid": dataTestId
    },
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });
    const finalMode = useMemo(
      () => (textPlacement === TEXT_PLACEMENTS.VERTICAL ? MODES.REGULAR : mode),
      [mode, textPlacement]
    );

    const renderHorizontalStepIndicator = useCallback(
      (step, index) => {
        return (
          <React.Fragment key={index}>
            <StepIndicator
              {...step}
              stepNumber={index + 1}
              type={type}
              stepComponentClassName={stepComponentClassName}
              fulfilledStepIcon={fulfilledStepIcon}
              fulfilledStepIconType={fulfilledStepIconType}
              onClick={onClick}
              isFulfilledStepDisplayNumber={isFulfilledStepDisplayNumber}
              mode={finalMode}
            />
            {index !== steps.length - 1 && (
              <Divider
                classname={cx(styles.divider, dividerComponentClassName, {
                  [styles.compact]: finalMode === MODES.COMPACT
                })}
              />
            )}
          </React.Fragment>
        );
      },
      [
        onClick,
        isFulfilledStepDisplayNumber,
        type,
        stepComponentClassName,
        fulfilledStepIcon,
        fulfilledStepIconType,
        dividerComponentClassName,
        steps.length,
        finalMode
      ]
    );

    const renderVerticalStepIndicator = useCallback(
      (step, index) => {
        return (
          <StepIndicator
            {...step}
            key={index}
            stepNumber={index + 1}
            type={type}
            stepComponentClassName={stepComponentClassName}
            fulfilledStepIcon={fulfilledStepIcon}
            fulfilledStepIconType={fulfilledStepIconType}
            onClick={onClick}
            isFollowedByDivider={index !== steps.length - 1}
            stepDividerClassName={cx(styles.divider, dividerComponentClassName)}
            isVertical={true}
            isFulfilledStepDisplayNumber={isFulfilledStepDisplayNumber}
          />
        );
      },
      [
        onClick,
        isFulfilledStepDisplayNumber,
        type,
        stepComponentClassName,
        fulfilledStepIcon,
        fulfilledStepIconType,
        dividerComponentClassName,
        steps.length
      ]
    );

    const stepRenderer = useMemo(
      () => (textPlacement === TEXT_PLACEMENTS.VERTICAL ? renderVerticalStepIndicator : renderHorizontalStepIndicator),
      [textPlacement, renderVerticalStepIndicator, renderHorizontalStepIndicator]
    );

    return (
      <ol
        ref={mergedRef}
        id={id}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.MULTI_STEP_INDICATOR, id)}
        className={cx(styles.wrapper, className)}
      >
        {steps.map(stepRenderer)}
      </ol>
    );
  }
);

MultiStepIndicator.types = MULTI_STEP_TYPES;
MultiStepIndicator.stepStatuses = STEP_STATUSES;
MultiStepIndicator.textPlacements = TEXT_PLACEMENTS;
MultiStepIndicator.modes = MODES;

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
  /** For showing the number instead of the fulfilled step icon */
  isFulfilledStepDisplayNumber: PropTypes.bool,
  /** Callback for clicking each step. The callback is sent one parameter - the step's number. */
  onClick: PropTypes.func,
  /** Determines the step's text placement. Either to the left of the indicator(horizontal) or under it(vertical). */
  textPlacement: PropTypes.oneOf([
    MultiStepIndicator.textPlacements.HORIZONTAL,
    MultiStepIndicator.textPlacements.VERTICAL
  ]),
  mode: PropTypes.oneOf([MultiStepIndicator.modes.REGULAR, MultiStepIndicator.modes.COMPACT])
};

MultiStepIndicator.defaultProps = {
  className: "",
  stepComponentClassName: "",
  dividerComponentClassName: "",
  type: MultiStepIndicator.types.PRIMARY,
  // eslint-disable-next-line react/default-props-match-prop-types
  steps: [],
  fulfilledStepIcon: Check,
  fulfilledStepIconType: Icon.type.SVG,
  isFulfilledStepDisplayNumber: false,
  onClick: NOOP,
  textPlacement: MultiStepIndicator.textPlacements.HORIZONTAL,
  mode: MultiStepIndicator.modes.REGULAR
};

export default MultiStepIndicator;
