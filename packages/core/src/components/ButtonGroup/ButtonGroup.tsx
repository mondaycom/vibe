import React, { forwardRef, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { camelCase } from "es-toolkit";
import cx from "classnames";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import Button from "../Button/Button";
import usePrevious from "../../hooks/usePrevious";
import useMergeRef from "../../hooks/useMergeRef";
import { type ButtonValue } from "./ButtonGroupConstants";
import { ButtonWrapper } from "./ButtonWrapper";
import { type SIZES } from "../../constants";
import { type ButtonType as ButtonTypeEnum } from "../Button/ButtonConstants";
import { type ButtonType, type ButtonSize } from "../Button";
import { type SubIcon, type VibeComponentProps, withStaticProps } from "../../types";
import { type MoveBy } from "../../types/MoveBy";
import { getTestId } from "../../tests/test-ids-utils";
import { ComponentDefaultTestId, ComponentVibeId } from "../../tests/constants";
import styles from "./ButtonGroup.module.scss";
import { type TooltipPositions } from "../Tooltip";

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
  /**
   * The list of button options.
   */
  options: Array<ButtonGroupOption>;
  /**
   * The currently selected button value.
   */
  value?: ButtonValue;
  /**
   * Callback fired when a button is selected.
   */
  onSelect?: (value: ButtonValue, name: string) => void;
  /**
   * The size of the buttons.
   */
  size?: ButtonSize;
  /**
   * The style variant of the buttons.
   */
  kind?: Extract<ButtonType, "secondary" | "tertiary">;
  /**
   * The name of the button group.
   */
  name?: string;
  /**
   * If true, disables all buttons in the group.
   */
  disabled?: boolean;
  /**
   * The label of the button group for accessibility.
   */
  groupAriaLabel?: string;
  /**
   * The position of the tooltip relative to the button.
   */
  tooltipPosition?: TooltipPositions;
  /**
   * The delay in milliseconds before the tooltip hides.
   */
  tooltipHideDelay?: number;
  /**
   * The delay in milliseconds before the tooltip shows.
   */
  tooltipShowDelay?: number;
  /**
   * CSS selector for the tooltip container.
   */
  tooltipContainerSelector?: string;
  /**
   * Adjusts the tooltip position.
   */
  tooltipMoveBy?: MoveBy;
  /**
   * The content inside the button group.
   */
  children?: React.ReactNode;
  /**
   * If true, makes the button group take the full width of its container.
   */
  fullWidth?: boolean;
  /**
   * If true, removes focus from the button after clicking.
   */
  blurOnMouseUp?: boolean;
}

const ButtonGroup = forwardRef(
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
    ref: React.ForwardedRef<HTMLDivElement>
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

    const isOptionActive = (option?: ButtonGroupOption) => option?.value === valueState;

    const selectedOption = useMemo(() => {
      return options.find(option => isOptionActive(option));
    }, [options, valueState]);

    const Buttons = useMemo(() => {
      return options.map((option, index) => {
        const isSelected = isOptionActive(option);
        const isFirst = index === 0;
        const isLast = index === options.length - 1;
        const isNextOptionActive = isOptionActive(options[index + 1]);

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
            fullWidth={fullWidth}
            className={cx(styles.button, styles.optionText, {
              [styles.selected]: isSelected,
              [styles.disabled]: disabled,
              [styles.buttonDisabled]: option.disabled,
              [styles.fullWidth]: fullWidth,
              [styles.startBorder]: isFirst,
              [styles.endBorder]: isLast || !isNextOptionActive
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
          [styles.disabled]: disabled,
          [styles.fullWidth]: fullWidth
        })}
        id={id}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.BUTTON_GROUP, id)}
        data-vibe={ComponentVibeId.BUTTON_GROUP}
        ref={mergedRef}
      >
        <div
          role="group"
          aria-label={groupAriaLabel}
          className={cx(styles.buttonsContainer, { [styles.fullWidth]: fullWidth })}
          aria-disabled={disabled}
        >
          {Buttons}
        </div>
        {selectedOption && selectedOption.subText && (
          <div className={cx(styles.subTextContainer)}>{selectedOption.subText}</div>
        )}
      </div>
    );
  }
);

interface ButtonGroupStaticProps {
  sizes: typeof SIZES;
  kinds: typeof ButtonTypeEnum;
}

export default withStaticProps<ButtonGroupProps, ButtonGroupStaticProps>(ButtonGroup, {
  sizes: Button.sizes,
  kinds: Button.kinds
});
