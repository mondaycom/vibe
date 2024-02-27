import cx from "classnames";
import React, { forwardRef, useCallback, useMemo } from "react";
import Check from "../../components/Icon/Icons/components/Check";
import Divider from "../../components/Divider/Divider";
import { NOOP } from "../../utils/function-utils";
import StepIndicator from "./components/StepIndicator/StepIndicator";
import { MultiStepType, Size, StepStatus, TextPlacement } from "./MultiStepConstants";
import { getTestId } from "../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../tests/constants";
import { SubIcon, VibeComponent, VibeComponentProps, withStaticProps } from "../../types";
import { IconType } from "../Icon/IconConstants";
import styles from "./MultiStepIndicator.module.scss";

export type Step = {
  titleText: string;
  subtitleText: string;
  status: StepStatus;
};

export interface MultiStepIndicatorProps extends VibeComponentProps {
  steps?: Step[];
  type?: MultiStepType;
  stepComponentClassName?: string;
  dividerComponentClassName?: string;
  fulfilledStepIcon?: SubIcon;
  fulfilledStepIconType?: IconType.SVG | IconType.ICON_FONT;
  isFulfilledStepDisplayNumber?: boolean;
  onClick?: (stepNumber: number) => void;
  textPlacement?: TextPlacement;
  size?: Size;
}

const MultiStepIndicator: VibeComponent<MultiStepIndicatorProps, HTMLOListElement> & {
  types?: typeof MultiStepType;
  stepStatuses?: typeof StepStatus;
  textPlacements?: typeof TextPlacement;
  sizes?: typeof Size;
} = forwardRef(
  (
    {
      className,
      steps = [],
      type = MultiStepType.PRIMARY,
      stepComponentClassName,
      dividerComponentClassName,
      fulfilledStepIcon = Check,
      fulfilledStepIconType = IconType.SVG,
      isFulfilledStepDisplayNumber = false,
      onClick = NOOP,
      textPlacement = TextPlacement.HORIZONTAL,
      id,
      size,
      "data-testid": dataTestId
    },
    ref
  ) => {
    const finalSize = textPlacement === TextPlacement.VERTICAL ? Size.REGULAR : size;

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
                  [styles.compact]: finalSize === Size.COMPACT
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
      () => (textPlacement === TextPlacement.VERTICAL ? renderVerticalStepIndicator : renderHorizontalStepIndicator),
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
  types: MultiStepType,
  stepStatuses: StepStatus,
  textPlacements: TextPlacement,
  sizes: Size
});
