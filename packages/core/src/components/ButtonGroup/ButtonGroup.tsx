import React, { forwardRef, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { camelCase } from "lodash-es";
import cx from "classnames";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import Button from "../Button/Button";
import usePrevious from "../../hooks/usePrevious";
import useMergeRef from "../../hooks/useMergeRef";
import { ButtonValue } from "./ButtonGroupConstants";
import { ButtonWrapper } from "./ButtonWrapper";
import { SIZES } from "../../constants";
import { ButtonType as ButtonTypeEnum } from "../Button/ButtonConstants";
import { ButtonType, ButtonSize } from "../Button/Button.types";
import { SubIcon, VibeComponent, VibeComponentProps, withStaticProps } from "../../types";
import { MoveBy } from "../../types/MoveBy";
import { getTestId } from "../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../tests/constants";
import styles from "./ButtonGroup.module.scss";
import { TooltipPositions } from "../Tooltip/Tooltip.types";

type ButtonGroupOption = {
  icon?: SubIcon;
  leftIcon?: SubIcon;
  ariaLabel?: string;
  subText?: string;
  value: ButtonValue;
  text: string;
  disabled?: boolean;
  tooltipContent?: string;
};

export interface ButtonGroupProps extends VibeComponentProps {
  options: Array<ButtonGroupOption>;
  value?: ButtonValue;
  onSelect?: (value: ButtonValue, name: string) => void;
  size?: ButtonSize;
  kind?: Extract<ButtonType, "secondary" | "tertiary">;
  name?: string;
  disabled?: boolean;
  groupAriaLabel?: string;
  /**
   * Where the tooltip should be in reference to the children: Top, Left, Right, Bottom ...
   */
  tooltipPosition?: TooltipPositions;
  tooltipHideDelay?: number;
  tooltipShowDelay?: number;
  tooltipContainerSelector?: string;
  tooltipMoveBy?: MoveBy;
  children?: React.ReactNode;
  fullWidth?: boolean;
  blurOnMouseUp?: boolean;
}

const ButtonGroup: VibeComponent<ButtonGroupProps, HTMLDivElement> & {
  sizes?: typeof SIZES;
  kinds?: typeof ButtonTypeEnum;
} = forwardRef(
  (
    {
      className,
      options,
      name = "",
      disabled = false,
      value = "",
      onSelect,
      size = "small",
      kind = "secondary",
      groupAriaLabel = "",
      tooltipPosition,
      tooltipHideDelay,
      tooltipShowDelay,
      tooltipContainerSelector,
      tooltipMoveBy,
      blurOnMouseUp = true,
      id,
      "data-testid": dataTestId,
      fullWidth = false
    }: ButtonGroupProps,
    ref
  ) => {
    const inputRef = useRef();
    const mergedRef = useMergeRef(ref, inputRef);

    const [valueState, setValueState] = useState(value);
    const prevValue = usePrevious(value);

    const onClick = useCallback(
      (option: ButtonGroupOption) => {
        const isDisabled = disabled || option.disabled;
        if (!isDisabled) {
          setValueState(option.value);
          if (onSelect) {
            onSelect(option.value, name);
          }
        }
      },
      [onSelect, disabled, name]
    );

    const selectedOption = useMemo(() => {
      return options.find(option => option.value === valueState);
    }, [options, valueState]);

    const Buttons = useMemo(() => {
      return options.map((option, index) => {
        const isSelected = option.value === valueState;
        return (
          <ButtonWrapper
            key={option.value}
            size={size}
            onClick={() => onClick(option)}
            rightIcon={option.icon}
            leftIcon={option.leftIcon}
            active={isSelected}
            rightFlat={index !== options.length - 1}
            leftFlat={index !== 0}
            kind="tertiary"
            preventClickAnimation
            ariaLabel={option.ariaLabel}
            tooltipContent={option.tooltipContent}
            tooltipPosition={tooltipPosition}
            tooltipHideDelay={tooltipHideDelay}
            tooltipShowDelay={tooltipShowDelay}
            tooltipContainerSelector={tooltipContainerSelector}
            tooltipMoveBy={tooltipMoveBy}
            blurOnMouseUp={blurOnMouseUp}
            className={cx(styles.button, styles.optionText, {
              [styles.selected]: isSelected,
              [styles.disabled]: disabled,
              [styles.buttonDisabled]: option.disabled,
              [styles.fullWidth]: fullWidth
            })}
            activeButtonClassName={styles.activeButton}
          >
            {option.text}
          </ButtonWrapper>
        );
      });
    }, [
      options,
      valueState,
      size,
      tooltipPosition,
      tooltipHideDelay,
      tooltipShowDelay,
      tooltipContainerSelector,
      tooltipMoveBy,
      blurOnMouseUp,
      disabled,
      fullWidth,
      onClick
    ]);

    // Effects
    useEffect(() => {
      // Update value if changed from props
      if (value !== prevValue && value !== valueState) {
        setValueState(value);
      }
    }, [value, prevValue, valueState, setValueState]);

    return (
      <div
        className={cx(styles.buttonGroup, className, getStyle(styles, camelCase("kind-" + kind)), {
          [styles.disabled]: disabled
        })}
        id={id}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.BUTTON_GROUP, id)}
        data-vibe={ComponentDefaultTestId.BUTTON_GROUP}
        ref={mergedRef}
      >
        <div role="group" aria-label={groupAriaLabel} className={cx(styles.buttonsContainer)} aria-disabled={disabled}>
          {Buttons}
        </div>
        {selectedOption && selectedOption.subText && (
          <div className={cx(styles.subTextContainer)}>{selectedOption.subText}</div>
        )}
      </div>
    );
  }
);

export default withStaticProps(ButtonGroup, { sizes: Button.sizes, kinds: Button.kinds });
