import { camelCase } from "es-toolkit";
import { getStyle } from "../../../../helpers/typesciptCssModulesHelper";
import { ComponentDefaultTestId, getTestId } from "../../../../tests/test-ids-utils";
import cx from "classnames";
import { keyCodes } from "../../../../constants/keyCodes";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import useEventListener from "../../../../hooks/useEventListener";
import useKeyEvent from "../../../../hooks/useKeyEvent";
import { Icon } from "@vibe/icon";
import { Check } from "@vibe/icons";
import Divider from "../../../../components/Divider/Divider";
import { NOOP } from "../../../../utils/function-utils";
import HiddenText from "../../../../components/HiddenText/HiddenText";
import { Clickable } from "@vibe/clickable";
import { type MultiStepSize, type MultiStepType, type StepStatus } from "../../MultiStep.types";
import styles from "./StepIndicator.module.scss";
import classNames from "classnames";
import { type VibeComponentProps } from "../../../../types";
import { type SubIcon } from "@vibe/icon";

const KEYS = [keyCodes.ENTER, keyCodes.SPACE];

export interface StepCircleDisplayProps {
  /**
   * The status of the step.
   */
  status: StepStatus;
  /**
   * If true, displays the step number instead of the fulfilled step icon.
   */
  isFulfilledStepDisplayNumber: boolean;
  /**
   * The icon displayed when the step is fulfilled.
   */
  fulfilledStepIcon: SubIcon;
  /**
   * The type of icon used.
   */
  fulfilledStepIconType: "svg" | "font";
  /**
   * The step number in the sequence.
   */
  stepNumber: number;
}

const StepCircleDisplay: React.FC<StepCircleDisplayProps> = ({
  status,
  isFulfilledStepDisplayNumber,
  fulfilledStepIcon,
  fulfilledStepIconType,
  stepNumber
}) => {
  return status === "fulfilled" && !isFulfilledStepDisplayNumber ? (
    <Icon
      icon={fulfilledStepIcon}
      className={classNames(styles.numberContainerTextCheckIcon)}
      type={fulfilledStepIconType}
      ignoreFocusStyle
      ariaHidden={true}
    />
  ) : (
    <>{stepNumber}</>
  );
};

export interface StepIndicatorProps extends VibeComponentProps {
  /**
   * The status of the step.
   */
  status: StepStatus;
  /**
   * The main title text for the step.
   */
  titleText: string;
  /**
   * The subtitle text for the step.
   */
  subtitleText?: string;
  /**
   * The number of the step in the sequence.
   */
  stepNumber?: number;
  /**
   * Class name applied to the step component.
   */
  stepComponentClassName?: string;
  /**
   * The visual style of the step indicator.
   */
  type?: MultiStepType;
  /**
   * The icon used for a fulfilled step.
   */
  fulfilledStepIcon?: SubIcon;
  /**
   * The type of icon used.
   */
  fulfilledStepIconType?: "svg" | "font";
  /**
   * If true, displays the step number instead of the fulfilled step icon.
   */
  isFulfilledStepDisplayNumber?: boolean;
  /**
   * Callback fired when the step is clicked.
   */
  onClick?: (stepNumber: number) => void;
  /**
   * If true, adds a divider after the step.
   */
  isFollowedByDivider?: boolean;
  /**
   * Class name applied to the step divider.
   */
  stepDividerClassName?: string;
  /**
   * If true, the step indicator is displayed vertically.
   */
  isVertical?: boolean;
  /**
   * The size of the step indicator.
   */
  size?: MultiStepSize;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({
  stepComponentClassName,
  stepNumber = 1,
  status = "pending",
  titleText = "Heading text",
  subtitleText = "Subtitle text",
  type = "primary",
  fulfilledStepIcon = Check,
  fulfilledStepIconType = "svg",
  isFulfilledStepDisplayNumber = false,
  onClick = NOOP,
  isFollowedByDivider = false,
  stepDividerClassName,
  isVertical = false,
  id,
  size = "regular",
  "data-testid": dataTestId
}: StepIndicatorProps) => {
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
      tabIndex={-1}
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
        {size !== "compact" ? (
          <span className={cx(...getClassNamesWithSuffix("__text-container__subtitle__text"))}>{subtitleText}</span>
        ) : null}
      </div>
    </Clickable>
  );
};

export default StepIndicator;
