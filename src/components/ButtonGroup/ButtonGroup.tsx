import React, { forwardRef, useCallback, useEffect, useMemo, useRef, useState } from "react";
import cx from "classnames";
import Button from "../Button/Button";
import usePrevious from "../../hooks/usePrevious";
import useMergeRefs from "../../hooks/useMergeRefs";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";
import { ButtonWrapper } from "./ButtonWrapper";
import { ButtonValue } from "./ButtonGroupConstants";
import { BASE_SIZES, DialogPosition, SIZES } from "../../constants";
import { ButtonType, Size } from "../Button/ButtonConstants";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import { SubIcon, VibeComponentProps } from "../../types";
import { MoveBy } from "../../types/MoveBy";
import styles from "./ButtonGroup.module.scss";

const CSS_BASE_CLASS = "monday-style-button-group-component";

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

interface ButtonGroupProps extends VibeComponentProps {
  className?: string;
  /**
   * Backward compatibility for props naming - please use className instead
   */
  componentClassName?: string;
  options: Array<ButtonGroupOption>;
  value?: ButtonValue;
  onSelect?: (value: ButtonValue, name: string) => void;
  size?: Size;
  kind?: ButtonType.SECONDARY | ButtonType.TERTIARY;
  name?: string;
  disabled?: boolean;
  groupAriaLabel?: string;
  /**
   * Where the tooltip should be in reference to the children: Top, Left, Right, Bottom ...
   */
  tooltipPosition?: DialogPosition;
  tooltipHideDelay?: number;
  tooltipShowDelay?: number;
  tooltipContainerSelector?: string;
  tooltipMoveBy?: MoveBy;
}

const ButtonGroup: React.ForwardRefExoticComponent<ButtonGroupProps & React.PropsWithChildren<unknown>> & {
  sizes?: typeof SIZES;
  kinds?: typeof ButtonType;
} = forwardRef(
  (
    {
      className,
      // Backward compatibility for props naming
      componentClassName,
      options,
      name = "",
      disabled = false,
      value = "",
      onSelect,
      size = BASE_SIZES.SMALL,
      kind = ButtonType.SECONDARY,
      groupAriaLabel = "",
      tooltipPosition,
      tooltipHideDelay,
      tooltipShowDelay,
      tooltipContainerSelector,
      tooltipMoveBy,
      id,
      "data-testid": dataTestId
    },
    ref
  ) => {
    const overrideClassName = backwardCompatibilityForProperties([className, componentClassName]);
    const inputRef = useRef();
    const [valueState, setValueState] = useState(value);
    const prevValue = usePrevious(value);
    const mergedRef = useMergeRefs({ refs: [ref, inputRef] });

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
            id={id}
            data-testid={dataTestId || getTestId(ComponentDefaultTestId.BUTTON_GROUP, id)}
            key={option.value}
            size={size}
            onClick={() => onClick(option)}
            rightIcon={option.icon}
            leftIcon={option.leftIcon}
            active={isSelected}
            rightFlat={index !== options.length - 1}
            leftFlat={index !== 0}
            kind={Button.kinds.TERTIARY}
            preventClickAnimation
            ariaLabel={option.ariaLabel}
            tooltipContent={option.tooltipContent}
            tooltipPosition={tooltipPosition}
            tooltipHideDelay={tooltipHideDelay}
            tooltipShowDelay={tooltipShowDelay}
            tooltipContainerSelector={tooltipContainerSelector}
            tooltipMoveBy={tooltipMoveBy}
            className={cx(styles.optionText, `${CSS_BASE_CLASS}__option-text`, {
              [styles.selected]: isSelected,
              ["selected"]: isSelected,
              [styles.disabled]: disabled,
              ["disabled"]: disabled,
              [styles.buttonDisabled]: option.disabled,
              ["button-disabled"]: option.disabled
            })}
          >
            {option.text}
          </ButtonWrapper>
        );
      });
    }, [
      options,
      valueState,
      id,
      dataTestId,
      size,
      tooltipPosition,
      tooltipHideDelay,
      tooltipShowDelay,
      tooltipContainerSelector,
      tooltipMoveBy,
      disabled,
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
        className={cx(
          styles.groupComponent,
          CSS_BASE_CLASS,
          overrideClassName,
          getStyle(styles, kind),
          `${CSS_BASE_CLASS}--kind-${kind}`,
          {
            [styles.disabled]: disabled,
            ["disabled"]: disabled
          }
        )}
        ref={mergedRef}
      >
        <div
          role="group"
          aria-label={groupAriaLabel}
          className={cx(styles.buttonsContainer, `${CSS_BASE_CLASS}__buttons-container`)}
          aria-disabled={disabled}
        >
          {Buttons}
        </div>
        {selectedOption && selectedOption.subText && (
          <div className={cx(styles.subTextContainer, `${CSS_BASE_CLASS}__sub-text-container`)}>
            {selectedOption.subText}
          </div>
        )}
      </div>
    );
  }
);

ButtonGroup.sizes = Button.sizes;
ButtonGroup.kinds = Button.kinds;

export default ButtonGroup;
