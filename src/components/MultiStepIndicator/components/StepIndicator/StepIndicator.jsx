import React, { useMemo } from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import Icon from "../../../Icon/Icon";
import Check from "../../../Icon/Icons/components/Check";
import { MULTI_STEP_TYPES, STEP_STATUSES } from "../../MultiStepConstants";
import { baseClassName } from "./StepIndicatorConstants";
import "./StepIndicator.scss";

const StepIndicator = ({ stepComponentClassName, stepNumber, status, titleText, subtitleText, type }) => {
  const ariaLabel = useMemo(() => {
    return `Step ${stepNumber}: ${titleText} - ${subtitleText}, status: ${status}`;
  }, [status]);

  const baseClassNameWithType = `${baseClassName}--type-${type}`;
  const baseClassNameWithStatus = `${baseClassName}--status-${status}`;

  const getClassnames = suffix => {
    return [`${baseClassName}${suffix}`, `${baseClassNameWithType}${suffix}`, `${baseClassNameWithStatus}${suffix}`];
  };

  return (
    <div className={cx(...getClassnames(""), stepComponentClassName)} aria-label={ariaLabel}>
      <div className={cx(...getClassnames("__number-container"))}>
        <span className={cx(...getClassnames("__number-container__text"))}>
          {status === STEP_STATUSES.FULFILLED ? (
            <Icon
              icon={Check}
              className={`${baseClassName}__number-container__text__check-icon`}
              iconLabel={STEP_STATUSES.FULFILLED}
            />
          ) : (
            stepNumber
          )}
        </span>
      </div>
      <div className={cx(...getClassnames("__text-container"))}>
        <div className={cx(...getClassnames("__text-container__title"))}>
          <span className="visually-hidden">{status}</span> {/* for accessibility */}
          <span className={cx(...getClassnames("__text-container__title__text"))}>{titleText}</span>
        </div>
        <span className={cx(...getClassnames("__text-container__subtitle__text"))}>{subtitleText}</span>
      </div>
    </div>
  );
};

StepIndicator.propTypes = {
  status: PropTypes.oneOf([STEP_STATUSES.PENDING, STEP_STATUSES.ACTIVE, STEP_STATUSES.FULFILLED]).isRequired,
  titleText: PropTypes.string.isRequired,
  subtitleText: PropTypes.string,
  stepNumber: PropTypes.number.isRequired,
  stepComponentClassName: PropTypes.string,
  type: PropTypes.oneOf(
    MULTI_STEP_TYPES.PRIMARY,
    MULTI_STEP_TYPES.SUCCESS,
    MULTI_STEP_TYPES.DANGER,
    MULTI_STEP_TYPES.DARK
  )
};

StepIndicator.defaultProps = {
  stepComponentClassName: "",
  stepNumber: 1,
  status: STEP_STATUSES.PENDING,
  titleText: "Title text",
  subtitleText: "Subtitle text",
  type: MULTI_STEP_TYPES.PRIMARY
};

export default StepIndicator;
