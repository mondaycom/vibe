/* eslint-disable react/default-props-match-prop-types,react/require-default-props */
import { camelCase } from "lodash-es";
import { getStyle } from "../../../../helpers/typesciptCssModulesHelper";
import { ComponentDefaultTestId, getTestId } from "../../../../tests/test-ids-utils";
import cx from "classnames";
import { keyCodes } from "../../../../constants/keyCodes";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import PropTypes from "prop-types";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import useEventListener from "../../../../hooks/useKeyEvent";
import useKeyEvent from "../../../../hooks/useKeyEvent";
import Icon from "../../../../components/Icon/Icon";
import Check from "../../../../components/Icon/Icons/components/Check";
import Divider from "../../../../components/Divider/Divider";
import { NOOP } from "../../../../utils/function-utils";
import HiddenText from "../../../../components/HiddenText/HiddenText";
import Clickable from "../../../../components/Clickable/Clickable";
import { SIZES, MULTI_STEP_TYPES, STEP_STATUSES } from "../../MultiStepConstants";
import styles from "./StepIndicator.module.scss";
import classNames from "classnames";

const KEYS = [keyCodes.ENTER, keyCodes.SPACE];

const StepCircleDisplay = ({
  status,
  isFulfilledStepDisplayNumber,
  fulfilledStepIcon,
  fulfilledStepIconType,
  stepNumber,
  size
}) => {
  return status === STEP_STATUSES.FULFILLED && !isFulfilledStepDisplayNumber ? (
    <Icon
      icon={fulfilledStepIcon}
      className={classNames(styles.numberContainerTextCheckIcon, { [styles.compact]: size === SIZES.COMPACT })}
      iconLabel={STEP_STATUSES.FULFILLED}
      iconType={fulfilledStepIconType}
      ignoreFocusStyle
      clickable={false}
      ariaHidden={true}
    />
  ) : (
    stepNumber
  );
};

const StepIndicator = ({
  stepComponentClassName,
  stepNumber,
  status,
  titleText,
  subtitleText,
  type,
  fulfilledStepIcon,
  fulfilledStepIconType,
  isFulfilledStepDisplayNumber,
  onClick,
  isFollowedByDivider,
  stepDividerClassName,
  isVertical,
  id,
  size,
  "data-testid": dataTestId
}) => {
  // Animations state
  const [statusChangeAnimationState, setStatusChangeAnimationState] = useState(false);

  // Refs
  const componentRef = useRef(null);
  const prevStatusRef = useRef(status);

  // Callbacks for modifying animation state
  const enableStatusChangeAnimation = useCallback(() => {
    setStatusChangeAnimationState(true);
  }, [setStatusChangeAnimationState]);

  const disableStatusChangeAnimation = useCallback(() => {
    setStatusChangeAnimationState(false);
  }, [setStatusChangeAnimationState]);

  const isStatusTransition = useCallback(() => prevStatusRef.current !== status, [prevStatusRef, status]);

  const handleClick = useCallback(() => {
    if (onClick) onClick(stepNumber);
  }, [onClick, stepNumber]);

  // Event listeners for removing animation.
  useEventListener({
    eventName: "animationend",
    callback: disableStatusChangeAnimation,
    ref: componentRef
  });

  useKeyEvent({
    keys: KEYS,
    callback: handleClick,
    ref: componentRef
  });

  // Effect - triggering animation when necessary.
  useEffect(() => {
    if (isStatusTransition()) {
      enableStatusChangeAnimation();
    }
  }, [status, isStatusTransition, enableStatusChangeAnimation]);

  // Effect - updating previous status ref value (for animation) after component update.
  useEffect(() => {
    prevStatusRef.current = status;
  }, [status]);

  const ariaLabel = useMemo(() => {
    return `Step ${stepNumber}: ${titleText} - ${subtitleText}, status: ${status}`;
  }, [status, titleText, stepNumber, subtitleText]);

  const getClassNamesWithSuffix = suffix => {
    return [
      getStyle(styles, camelCase(suffix || "indicator")),
      getStyle(styles, camelCase(`type-${type}${suffix}`)),
      getStyle(styles, camelCase(`status-${status}${suffix}`)),
      getStyle(styles, camelCase(`size-${size}${suffix}`))
    ];
  };

  return (
    <Clickable
      tabIndex="-1"
      elementType="li"
      className={cx(...getClassNamesWithSuffix(""), stepComponentClassName, {
        [styles.withAnimation]: statusChangeAnimationState,
        [styles.clickable]: onClick,
        [styles.textPlacementVertical]: isVertical
      })}
      aria-label={ariaLabel}
      onClick={handleClick}
      dataTestId={dataTestId || getTestId(ComponentDefaultTestId.STEP_INDICATOR, id)}
    >
      <div className={cx(...getClassNamesWithSuffix("__number-divider-container"))}>
        <div
          className={cx(...getClassNamesWithSuffix("__number-container"))}
          ref={componentRef}
          tabIndex="0"
          role="button"
        >
          <SwitchTransition mode="out-in">
            <CSSTransition
              classNames={{
                enter: styles.swapEnter,
                enterActive: styles.swapEnterActive,
                exit: styles.swapExit,
                exitActive: styles.swapExitActive
              }}
              addEndListener={(node, done) => {
                node.addEventListener("transitionend", done, false);
              }}
              key={status}
            >
              <span className={cx(...getClassNamesWithSuffix("__number-container__text"))}>
                <StepCircleDisplay
                  fulfilledStepIcon={fulfilledStepIcon}
                  fulfilledStepIconType={fulfilledStepIconType}
                  isFulfilledStepDisplayNumber={isFulfilledStepDisplayNumber}
                  stepNumber={stepNumber}
                  status={status}
                  size={size}
                />
              </span>
            </CSSTransition>
          </SwitchTransition>
        </div>
        {isFollowedByDivider && isVertical && <Divider className={cx(styles.divider, stepDividerClassName)} />}
      </div>
      <div className={cx(...getClassNamesWithSuffix("__text-container"))}>
        <div className={cx(...getClassNamesWithSuffix("__text-container__title"))}>
          <HiddenText text={status} /> {/* for accessibility */}
          <span className={cx(...getClassNamesWithSuffix("__text-container__title__text"))}>{titleText}</span>
        </div>
        {size !== SIZES.COMPACT ? (
          <span className={cx(...getClassNamesWithSuffix("__text-container__subtitle__text"))}>{subtitleText}</span>
        ) : null}
      </div>
    </Clickable>
  );
};

StepIndicator.propTypes = {
  status: PropTypes.oneOf([STEP_STATUSES.PENDING, STEP_STATUSES.ACTIVE, STEP_STATUSES.FULFILLED]).isRequired,
  titleText: PropTypes.string.isRequired,
  subtitleText: PropTypes.string,
  stepNumber: PropTypes.number.isRequired,
  stepComponentClassName: PropTypes.string,
  type: PropTypes.oneOf([
    MULTI_STEP_TYPES.PRIMARY,
    MULTI_STEP_TYPES.SUCCESS,
    MULTI_STEP_TYPES.DANGER,
    MULTI_STEP_TYPES.DARK
  ]),
  fulfilledStepIcon: PropTypes.func,
  fulfilledStepIconType: PropTypes.oneOf([Icon.type.SVG, Icon.type.ICON_FONT]),
  isFulfilledStepDisplayNumber: PropTypes.bool,
  onClick: PropTypes.func,
  isVertical: PropTypes.bool,
  size: PropTypes.oneOf([SIZES.REGULAR, SIZES.COMPACT])
};

StepIndicator.defaultProps = {
  stepComponentClassName: "",
  stepNumber: 1,
  status: STEP_STATUSES.PENDING,
  titleText: "Title text",
  subtitleText: "Subtitle text",
  type: MULTI_STEP_TYPES.PRIMARY,
  fulfilledStepIcon: Check,
  fulfilledStepIconType: Icon.type.SVG,
  isFulfilledStepDisplayNumber: false,
  onClick: NOOP,
  isVertical: false,
  size: SIZES.REGULAR
};

export default StepIndicator;
