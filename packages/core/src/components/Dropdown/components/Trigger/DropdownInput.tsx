import React, { useRef } from "react";
import cx from "classnames";
import { BaseInput } from "@vibe/base";
import { Text } from "@vibe/typography";
import { useDropdownContext } from "../../context/DropdownContext";
import { type BaseItemData } from "../../../BaseItem";
import styles from "./Trigger.module.scss";

const DropdownInput = ({
  inputSize,
  fullWidth,
  selectedItemsDescriptionId
}: {
  inputSize?: "small" | "medium" | "large";
  fullWidth?: boolean;
  selectedItemsDescriptionId?: string;
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
    getInputProps
  } = useDropdownContext<BaseItemData>();

  const inputRef = useRef<HTMLInputElement>(null);
  const hasSelection = multi ? selectedItems.length > 0 : !!selectedItem;
  const multipleSelectionDropdownProps = getDropdownProps ? getDropdownProps({ preventKeyAction: isOpen }) : {};
  const inputLabel = inputAriaLabel || (label ? undefined : ariaLabel);

  return (
    <>
      {searchable ? (
        <BaseInput
          {...getInputProps({
            "aria-labelledby": label ? getLabelProps().id : undefined,
            "aria-label": label ? undefined : inputLabel,
            "aria-describedby": selectedItemsDescriptionId,
            placeholder: hasSelection ? "" : placeholder,
            ref: inputRef,
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
