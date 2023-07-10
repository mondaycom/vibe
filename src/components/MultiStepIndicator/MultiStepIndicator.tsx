import cx from "classnames";
import React, { useRef, forwardRef, useMemo, useCallback } from "react";
import useMergeRefs from "../../hooks/useMergeRefs";
import Check from "../../components/Icon/Icons/components/Check";
import Divider from "../../components/Divider/Divider";
import { NOOP } from "../../utils/function-utils";
import StepIndicator from "./components/StepIndicator/StepIndicator";
import { SIZES, MULTI_STEP_TYPES, STEP_STATUSES, TEXT_PLACEMENTS } from "./MultiStepConstants";
import { getTestId } from "../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../tests/constants";
import styles from "./MultiStepIndicator.module.scss";
import { withStaticProps, VibeComponentProps, VibeComponent, SubIcon } from "../../types";
import { IconType } from "../Icon/IconConstants";

export type Step = {
  titleText: string;
  subtitleText: string;
  status: STEP_STATUSES;
};

interface MultiStepIndicatorProps extends VibeComponentProps {
  steps: Step[];
  type?: MULTI_STEP_TYPES;
  stepComponentClassName?: string;
  dividerComponentClassName?: string;
  fulfilledStepIcon?: SubIcon;
  fulfilledStepIconType?: IconType.SVG | IconType.ICON_FONT;
  isFulfilledStepDisplayNumber?: boolean;
  onClick?: (stepNumber: number) => void;
  textPlacement?: TEXT_PLACEMENTS;
  size?: SIZES;
}

const MultiStepIndicator: VibeComponent<MultiStepIndicatorProps> & {
  types?: typeof MULTI_STEP_TYPES;
  stepStatuses?: typeof STEP_STATUSES;
  textPlacements?: typeof TEXT_PLACEMENTS;
  sizes?: typeof SIZES;
} = forwardRef(
  (
    {
      className,
      steps,
      type = MULTI_STEP_TYPES.PRIMARY,
      stepComponentClassName,
      dividerComponentClassName,
      fulfilledStepIcon = Check,
      fulfilledStepIconType = IconType.SVG,
      isFulfilledStepDisplayNumber = false,
      onClick = NOOP,
      textPlacement = TEXT_PLACEMENTS.HORIZONTAL,
      id,
      size,
      "data-testid": dataTestId
    },
    ref
  ) => {
    const componentRef = useRef<HTMLInputElement>(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });
    const finalSize = textPlacement === TEXT_PLACEMENTS.VERTICAL ? SIZES.REGULAR : size;

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
                classname={cx(styles.divider, dividerComponentClassName, {
                  [styles.compact]: finalSize === SIZES.COMPACT
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

export default withStaticProps(MultiStepIndicator, {
  types: MULTI_STEP_TYPES,
  stepStatuses: STEP_STATUSES,
  textPlacements: TEXT_PLACEMENTS,
  sizes: SIZES
});
