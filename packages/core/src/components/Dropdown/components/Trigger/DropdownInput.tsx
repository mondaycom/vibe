import React, { useMemo, useRef, type RefObject } from "react";
import cx from "classnames";
import { BaseInput } from "@vibe/base";
import styles from "./Trigger.module.scss";
import { useDropdownContext } from "../../context/DropdownContext";
import { type BaseItemData } from "../../../BaseItem";
import { Text } from "@vibe/typography";

// Builds the screen-reader announcement of the current multi-select selection (the chip labels),
// surfaced to the combobox via aria-describedby + a visually hidden element. This is how the selected
// chips are made accessible without depending on the chip buttons themselves carrying the semantics.
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
  const inputRef = externalInputRef ?? internalRef;
  const hasSelection = multi ? selectedItems.length > 0 : !!selectedItem;
  // interactiveChips: menu is always open, so isOpen would permanently suppress Backspace chip-nav.
  // Instead suppress only when the input has text (Backspace should delete chars, not navigate chips).
  const preventKeyAction = interactiveChips ? !!(inputValue && inputValue.length > 0) : isOpen;
  const multipleSelectionDropdownProps = getDropdownProps ? getDropdownProps({ preventKeyAction }) : {};

  // Stable id for the visually hidden element that announces the current selection.
  // Only needed for multi-select chips; single-select already keeps the value inside the input.
  const selectedValueId = useRef(`dropdown-selected-${Math.random().toString(36).slice(2, 9)}`).current;
  const selectedValueText = useMemo(() => (multi ? getSelectedValueText(selectedItems) : ""), [multi, selectedItems]);

  // The combobox can be described by the helper text and/or the selection announcement.
  const describedBy =
    [helperTextId, selectedValueText ? selectedValueId : undefined].filter(Boolean).join(" ") || undefined;

  return (
    <>
      {searchable ? (
        <>
          <BaseInput
            {...getInputProps({
              "aria-labelledby": label ? getLabelProps().id : undefined,
              // When there is no visible label, the input must still have a name; fall back to the
              // field's aria-label so the input — and the chevron that points at it — are named.
              "aria-label": inputAriaLabel || (label ? undefined : ariaLabel),
              "aria-describedby": describedBy,
              // The menu is presented in a Dialog, so the combobox advertises a dialog popup.
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
          <span id={selectedValueId} className={styles.visuallyHidden}>
            {selectedValueText}
          </span>
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
