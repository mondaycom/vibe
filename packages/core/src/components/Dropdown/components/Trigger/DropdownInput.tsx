import React, { useRef, type RefObject } from "react";
import cx from "classnames";
import { BaseInput } from "@vibe/base";
import styles from "./Trigger.module.scss";
import { useDropdownContext } from "../../context/DropdownContext";
import { type BaseItemData } from "../../../BaseItem";
import { Text } from "@vibe/typography";

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
    searchable,
    size,
    label,
    isOpen,
    getDropdownProps,
    getLabelProps,
    getInputProps,
    interactiveChips
  } = useDropdownContext<BaseItemData>();

  const internalRef = useRef<HTMLInputElement>(null);
  const inputRef = externalInputRef ?? internalRef;
  const hasSelection = multi ? selectedItems.length > 0 : !!selectedItem;
  // interactiveChips: menu is always open, so isOpen would permanently suppress Backspace chip-nav.
  // Instead suppress only when the input has text (Backspace should delete chars, not navigate chips).
  const preventKeyAction = interactiveChips ? !!(inputValue && inputValue.length > 0) : isOpen;
  const multipleSelectionDropdownProps = getDropdownProps ? getDropdownProps({ preventKeyAction }) : {};

return (
    <>
      {searchable ? (
        <BaseInput
          {...getInputProps({
            "aria-labelledby": label ? getLabelProps().id : undefined,
            "aria-label": inputAriaLabel || (label ? undefined : getLabelProps()?.id),
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
