import cx from "classnames";
import React, { forwardRef, useCallback, useMemo } from "react";
import { Check } from "@vibe/icons";
import Divider from "../../components/Divider/Divider";
import { NOOP } from "../../utils/function-utils";
import StepIndicator from "./components/StepIndicator/StepIndicator";
import {
  MultiStepType as MultiStepTypeEnum,
  Size as SizeEnum,
  StepStatus as StepStatusEnum,
  TextPlacement as TextPlacementEnum
} from "./MultiStepConstants";
import { MultiStepType, MultiStepSize, TextPlacement, Step } from "./MultiStep.types";
import { getTestId } from "../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../tests/constants";
import { SubIcon, VibeComponent, VibeComponentProps, withStaticProps } from "../../types";
import styles from "./MultiStepIndicator.module.scss";

export interface MultiStepIndicatorProps extends VibeComponentProps {
  /**
   * The list of steps in the multi-step indicator.
   */
  steps?: Step[];
  /**
   * The visual style of the multi-step indicator.
   */
  type?: MultiStepType;
  /**
   * Class name applied to each step component.
   */
  stepComponentClassName?: string;
  /**
   * Class name applied to the divider between steps.
   */
  dividerComponentClassName?: string;
  /**
   * The icon used for fulfilled steps.
   */
  fulfilledStepIcon?: SubIcon;
  /**
   * The type of the fulfilled step icon.
   */
  fulfilledStepIconType?: "svg" | "font";
  /**
   * If true, displays the step number instead of the fulfilled step icon.
   */
  isFulfilledStepDisplayNumber?: boolean;
  /**
   * Callback fired when a step is clicked.
   */
  onClick?: (stepNumber: number) => void;
  /**
   * The placement of the step text.
   */
  textPlacement?: TextPlacement;
  /**
   * The size of the multi-step indicator.
   */
  size?: MultiStepSize;
}

const MultiStepIndicator: VibeComponent<MultiStepIndicatorProps, HTMLOListElement> & {
  types?: typeof MultiStepTypeEnum;
  stepStatuses?: typeof StepStatusEnum;
  textPlacements?: typeof TextPlacementEnum;
  sizes?: typeof SizeEnum;
} = forwardRef(
  (
    {
      className,
      steps = [],
      type = "primary",
      stepComponentClassName,
      dividerComponentClassName,
      fulfilledStepIcon = Check,
      fulfilledStepIconType = "svg",
      isFulfilledStepDisplayNumber = false,
      onClick = NOOP,
      textPlacement = "horizontal",
      id,
      size,
      "data-testid": dataTestId
    }: MultiStepIndicatorProps,
    ref
  ) => {
    const finalSize = textPlacement === "vertical" ? "regular" : size;

    const renderHorizontalStepIndicator = useCallback(
      (step: Step, index: number) => {
        return (
          <React.Fragment key={`${step.titleText}_${index}`}>
            <StepIndicator
              {...step}
              stepNumber={index + 1}
              type={type}
              stepComponentClassName={stepComponentClassName}
              fulfilledStepIcon={fulfilledStepIcon}
              fulfilledStepIconType={fulfilledStepIconType}
              onClick={onClick}
              isFulfilledStepDisplayNumber={isFulfilledStepDisplayNumber}
              size={finalSize}
            />
            {index !== steps.length - 1 && (
              <Divider
                className={cx(styles.divider, dividerComponentClassName, {
                  [styles.compact]: finalSize === "compact"
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
        finalSize
      ]
    );

    const renderVerticalStepIndicator = useCallback(
      (step: Step, index: number) => {
        return (
          <StepIndicator
            {...step}
            key={`${step.titleText}_${index}`}
            stepNumber={index + 1}
            type={type}
            stepComponentClassName={stepComponentClassName}
            fulfilledStepIcon={fulfilledStepIcon}
            fulfilledStepIconType={fulfilledStepIconType}
            onClick={onClick}
            isFollowedByDivider={index !== steps.length - 1}
            stepDividerClassName={cx(styles.divider, dividerComponentClassName)}
            isVertical
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
      () => (textPlacement === "vertical" ? renderVerticalStepIndicator : renderHorizontalStepIndicator),
      [textPlacement, renderVerticalStepIndicator, renderHorizontalStepIndicator]
    );

    return (
      <ol
        ref={ref}
        id={id}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.MULTI_STEP_INDICATOR, id)}
        className={cx(styles.wrapper, className)}
      >
        {steps.map(stepRenderer)}
      </ol>
    );
  }
);

export default withStaticProps(MultiStepIndicator, {
  types: MultiStepTypeEnum,
  stepStatuses: StepStatusEnum,
  textPlacements: TextPlacementEnum,
  sizes: SizeEnum
});
