/* eslint-disable react/default-props-match-prop-types,react/require-default-props */
import { camelCase } from "lodash-es";
import { getStyle } from "../../../../helpers/typesciptCssModulesHelper";
import { ComponentDefaultTestId, getTestId } from "../../../../tests/test-ids-utils";
import cx from "classnames";
import { keyCodes } from "../../../../constants/keyCodes";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import useEventListener from "../../../../hooks/useEventListener";
import useKeyEvent from "../../../../hooks/useKeyEvent";
import Icon from "../../../../components/Icon/Icon";
import Check from "../../../../components/Icon/Icons/components/Check";
import Divider from "../../../../components/Divider/Divider";
import { NOOP } from "../../../../utils/function-utils";
import HiddenText from "../../../../components/HiddenText/HiddenText";
import Clickable from "../../../../components/Clickable/Clickable";
import { Size, MultiStepType, StepStatus } from "../../MultiStepConstants";
import styles from "./StepIndicator.module.scss";
import classNames from "classnames";
import { SubIcon, VibeComponentProps } from "../../../../types";
import { IconType } from "../../../Icon/IconConstants";

const KEYS = [keyCodes.ENTER, keyCodes.SPACE];

export interface StepCircleDisplayProps {
  status: StepStatus;
  isFulfilledStepDisplayNumber: boolean;
  fulfilledStepIcon: SubIcon;
  fulfilledStepIconType: IconType.SVG | IconType.ICON_FONT;
  stepNumber: number;
}

const StepCircleDisplay: React.FC<StepCircleDisplayProps> = ({
  status,
  isFulfilledStepDisplayNumber,
  fulfilledStepIcon,
  fulfilledStepIconType,
  stepNumber
}) => {
  return status === StepStatus.FULFILLED && !isFulfilledStepDisplayNumber ? (
    <Icon
      icon={fulfilledStepIcon}
      className={classNames(styles.numberContainerTextCheckIcon)}
      iconType={fulfilledStepIconType}
      ignoreFocusStyle
      clickable={false}
      ariaHidden={true}
    />
  ) : (
    <>{stepNumber}</>
  );
};

export interface StepIndicatorProps extends VibeComponentProps {
  status: StepStatus;
  titleText: string;
  subtitleText?: string;
  stepNumber?: number;
  stepComponentClassName?: string;
  type?: MultiStepType;
  fulfilledStepIcon?: SubIcon;
  fulfilledStepIconType?: IconType.SVG | IconType.ICON_FONT;
  isFulfilledStepDisplayNumber?: boolean;
  onClick?: (stepNumber: number) => void;
  isFollowedByDivider?: boolean;
  stepDividerClassName?: string;
  isVertical?: boolean;
  size?: Size;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({
  stepComponentClassName,
  stepNumber = 1,
  status = StepStatus.PENDING,
  titleText = "Heading text",
  subtitleText = "Subtitle text",
  type = MultiStepType.PRIMARY,
  fulfilledStepIcon = Check,
  fulfilledStepIconType = IconType.SVG,
  isFulfilledStepDisplayNumber = false,
  onClick = NOOP,
  isFollowedByDivider = false,
  stepDividerClassName,
  isVertical = false,
  id,
  size = Size.REGULAR,
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

  const getClassNamesWithSuffix = (suffix: string) => {
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
      data-testid={dataTestId || getTestId(ComponentDefaultTestId.STEP_INDICATOR, id)}
    >
      <div className={cx(...getClassNamesWithSuffix("__number-divider-container"))}>
        <div
          className={cx(...getClassNamesWithSuffix("__number-container"))}
          ref={componentRef}
          tabIndex={0}
          role="button"
        >
          <SwitchTransition mode="out-in">
            <CSSTransition<undefined>
              // CSSTransition needs to be specified with the generic parameter to decide type for addEndListener's callback
              // otherwise, addEndListener cb has only `done` param (ts error)
              classNames={{
                enter: styles.swapEnter,
                enterActive: styles.swapEnterActive,
                exit: styles.swapExit,
                exitActive: styles.swapExitActive
              }}
              addEndListener={(node: HTMLElement, done: () => void) => {
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
        {size !== Size.COMPACT ? (
          <span className={cx(...getClassNamesWithSuffix("__text-container__subtitle__text"))}>{subtitleText}</span>
        ) : null}
      </div>
    </Clickable>
  );
};

export default StepIndicator;
