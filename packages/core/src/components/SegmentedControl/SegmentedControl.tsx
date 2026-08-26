import React, { forwardRef, useCallback, useRef, useState, type CSSProperties, type KeyboardEvent } from "react";
import cx from "classnames";
import { isNil } from "es-toolkit";
import { Icon } from "@vibe/icon";
import { Tooltip } from "@vibe/tooltip";
import useMergeRef from "../../hooks/useMergeRef";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import { ComponentVibeId } from "../../tests/constants";
import {
  type SegmentedControlOption,
  type SegmentedControlProps,
  type SegmentedControlSize
} from "./SegmentedControl.types";
import styles from "./SegmentedControl.module.scss";

const ICON_SIZE_BY_CONTROL_SIZE: Record<SegmentedControlSize, number> = {
  xs: 14,
  small: 16,
  medium: 16,
  large: 20
};

const SIZE_CLASS_MAP: Record<SegmentedControlSize, string> = {
  xs: styles.sizeXs,
  small: styles.sizeSmall,
  medium: styles.sizeMedium,
  large: styles.sizeLarge
};

type SegmentButtonProps = {
  option: SegmentedControlOption;
  index: number;
  isSelected: boolean;
  isDisabled: boolean;
  selectedIndex: number;
  iconSize: number;
  onSelect: (index: number) => void;
  onKeyDown: (event: KeyboardEvent<HTMLButtonElement>) => void;
  segmentRef: (element: HTMLButtonElement | null) => void;
};

const SegmentButton = ({
  option,
  index,
  isSelected,
  isDisabled,
  selectedIndex,
  iconSize,
  onSelect,
  onKeyDown,
  segmentRef
}: SegmentButtonProps) => {
  const button = (
    <button
      ref={segmentRef}
      type="button"
      role="radio"
      className={styles.segment}
      aria-checked={isSelected}
      aria-disabled={isDisabled || undefined}
      tabIndex={isSelected || (selectedIndex === -1 && index === 0) ? 0 : -1}
      onClick={() => onSelect(index)}
      onKeyDown={onKeyDown}
    >
      <span className={styles.segmentContent}>
        {option.icon && <Icon icon={option.icon} iconSize={iconSize} className={styles.segmentIcon} />}
        {option.label}
      </span>
    </button>
  );

  if (!isNil(option.tooltip)) {
    return (
      <Tooltip content={option.tooltip} showTrigger={["mouseenter"]} hideTrigger={["mouseleave"]}>
        {button}
      </Tooltip>
    );
  }

  return button;
};

const SegmentedControl = forwardRef(
  (
    {
      className,
      id,
      "data-testid": dataTestId,
      options,
      value,
      defaultValue,
      onChange,
      size = "medium",
      disabled = false,
      fullWidth = false,
      ariaLabel,
      "aria-labelledby": ariaLabelledby
    }: SegmentedControlProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue ?? options[0]?.value);
    const segmentRefs = useRef<Array<HTMLButtonElement | null>>([]);
    const internalRef = useRef<HTMLDivElement>(null);
    const mergedRef = useMergeRef(ref, internalRef);

    const isControlled = value !== undefined;
    const selectedValue = isControlled ? value : uncontrolledValue;
    const selectedIndex = options.findIndex(option => option.value === selectedValue);
    const resolvedSelectedIndex = selectedIndex === -1 ? 0 : selectedIndex;
    const iconSize = ICON_SIZE_BY_CONTROL_SIZE[size];

    const select = useCallback(
      (index: number) => {
        const option = options[index];
        if (!option || option.disabled || disabled) return;
        if (!isControlled) setUncontrolledValue(option.value);
        onChange?.(option.value);
        segmentRefs.current[index]?.focus();
      },
      [options, disabled, isControlled, onChange]
    );

    const moveBy = useCallback(
      (step: number) => {
        const count = options.length;
        const from = selectedIndex === -1 ? 0 : selectedIndex;
        for (let offset = 1; offset <= count; offset++) {
          const next = (from + step * offset + count * count) % count;
          if (!options[next]?.disabled) {
            select(next);
            return;
          }
        }
      },
      [options, selectedIndex, select]
    );

    const onKeyDown = useCallback(
      (event: KeyboardEvent<HTMLButtonElement>) => {
        if (disabled) return;

        switch (event.key) {
          case "ArrowRight":
          case "ArrowDown":
            event.preventDefault();
            moveBy(1);
            break;
          case "ArrowLeft":
          case "ArrowUp":
            event.preventDefault();
            moveBy(-1);
            break;
          case "Home":
            event.preventDefault();
            select(options.findIndex(option => !option.disabled));
            break;
          case "End": {
            event.preventDefault();
            const lastEnabled = [...options].reverse().findIndex(option => !option.disabled);
            if (lastEnabled !== -1) select(options.length - 1 - lastEnabled);
            break;
          }
          default:
            break;
        }
      },
      [disabled, moveBy, options, select]
    );

    return (
      <div
        ref={mergedRef}
        id={id}
        role="radiogroup"
        aria-label={ariaLabelledby ? undefined : ariaLabel}
        aria-labelledby={ariaLabelledby}
        aria-disabled={disabled || undefined}
        className={cx(styles.segmentedControl, SIZE_CLASS_MAP[size], className, {
          [styles.fullWidth]: fullWidth,
          [styles.disabled]: disabled
        })}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.SEGMENTED_CONTROL, id)}
        data-vibe={ComponentVibeId.SEGMENTED_CONTROL}
        data-size={size}
        style={
          {
            "--segment-count": options.length,
            "--selected-index": resolvedSelectedIndex
          } as CSSProperties
        }
      >
        <span
          aria-hidden="true"
          className={cx(styles.thumb, {
            [styles.thumbHidden]: selectedIndex === -1
          })}
        />
        {options.map((option, index) => {
          const isSelected = index === selectedIndex;
          const isDisabled = disabled || Boolean(option.disabled);

          return (
            <SegmentButton
              key={option.value}
              option={option}
              index={index}
              isSelected={isSelected}
              isDisabled={isDisabled}
              selectedIndex={selectedIndex}
              iconSize={iconSize}
              onSelect={select}
              onKeyDown={onKeyDown}
              segmentRef={element => {
                segmentRefs.current[index] = element;
              }}
            />
          );
        })}
      </div>
    );
  }
);

export default SegmentedControl;
