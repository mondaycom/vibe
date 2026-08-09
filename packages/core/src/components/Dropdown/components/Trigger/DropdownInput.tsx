import React, { useMemo, useRef, type RefObject } from "react";
import cx from "classnames";
import { BaseInput } from "@vibe/base";
import styles from "./Trigger.module.scss";
import { useDropdownContext } from "../../context/DropdownContext";
import { type BaseItemData } from "../../../BaseItem";
import { Text } from "@vibe/typography";

// Screen-reader announcement of the current multi-select selection, surfaced via aria-describedby.
function getSelectedValueText(selectedItems: BaseItemData[]): string {
  return selectedItems
    .map(item => item.label || item.value || "")
    .filter(Boolean)
    .join(", ");
}

const DropdownInput = ({
  inputSize,
  fullWidth,
  onKeyDown: externalKeyDown,
  inputRef: externalInputRef
}: {
  inputSize?: "small" | "medium" | "large";
  fullWidth?: boolean;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  inputRef?: RefObject<HTMLInputElement>;
}) => {
  const {
    inputValue,
    autoFocus,
    disabled,
    readOnly,
    placeholder,
    multi,
    selectedItem,
    selectedItems = [],
    inputAriaLabel,
    "aria-label": ariaLabel,
    searchable,
    size,
    label,
    isOpen,
    getDropdownProps,
    getLabelProps,
    getInputProps,
    interactiveChips,
    helperTextId
  } = useDropdownContext<BaseItemData>();

  const internalRef = useRef<HTMLInputElement>(null);
  const selectedValueText = useMemo(() => (multi ? getSelectedValueText(selectedItems) : ""), [multi, selectedItems]);

  const inputRef = externalInputRef ?? internalRef;
  const hasSelection = multi ? selectedItems.length > 0 : !!selectedItem;
  // interactiveChips: suppress Backspace/Arrow chip-navigation only while the input has text (so those
  // keys edit the text); when the input is empty they reach the chips. Default multi gates it on isOpen.
  const preventKeyAction = interactiveChips ? !!(inputValue && inputValue.length > 0) : isOpen;
  const multipleSelectionDropdownProps = getDropdownProps ? getDropdownProps({ preventKeyAction }) : {};

  // Id for the visually hidden element that announces the current selection (multi-select chips only;
  // single-select keeps the value inside the input). Derived from the downshift-generated label id so
  // it's unique per dropdown instance and stable across SSR/hydration (no Math.random / useId).
  const selectedValueId = `${getLabelProps().id}-selected-value`;
  const describedBy =
    [helperTextId, selectedValueText ? selectedValueId : undefined].filter(Boolean).join(" ") || undefined;

  return (
    <>
      {searchable ? (
        <>
          <BaseInput
            {...getInputProps({
              "aria-labelledby": label ? getLabelProps().id : undefined,
              // Fall back to the field's aria-label so the input still has a name when there's no label.
              "aria-label": inputAriaLabel || (label ? undefined : ariaLabel),
              "aria-describedby": describedBy,
              "aria-haspopup": "dialog",
              placeholder: hasSelection ? "" : placeholder,
              ref: inputRef,
              onKeyDown: externalKeyDown,
              ...multipleSelectionDropdownProps
            })}
            inputRole="combobox"
            value={inputValue || ""}
            autoFocus={autoFocus}
            size={inputSize || size}
            className={cx(styles.inputWrapper, {
              [styles.hasSelected]: !multi && selectedItem && !inputValue,
              [styles.small]: inputSize === "small",
              [styles.multi]: multi && hasSelection,
              [styles.multiSelected]: multi && hasSelection && inputSize === "small",
              [styles.fullWidth]: fullWidth
            })}
            disabled={disabled}
            readOnly={readOnly}
          />
          {selectedValueText && (
            <span id={selectedValueId} className={styles.visuallyHidden}>
              {selectedValueText}
            </span>
          )}
        </>
      ) : (
        <>
          {!hasSelection && placeholder && (
            <Text
              color="secondary"
              className={cx(styles.placeholderText, {
                [styles.disabled]: !!disabled
              })}
              type={size === "small" ? "text2" : "text1"}
            >
              {placeholder}
            </Text>
          )}
        </>
      )}
    </>
  );
};

export default DropdownInput;
