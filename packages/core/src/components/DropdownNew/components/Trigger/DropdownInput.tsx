import React from "react";
import cx from "classnames";
import { BaseInput } from "../../../BaseInput";
import styles from "./Trigger.module.scss";
import { useDropdownContext } from "../../context/DropdownContext";
import { BaseListItemData } from "../../../BaseListItem";
import { Text } from "../../../Text";

const DropdownInput = ({ inputSize }: { inputSize?: "small" | "medium" | "large" }) => {
  const {
    inputValue,
    getInputProps,
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
    getToggleButtonProps,
    getDropdownProps,
    isOpen
  } = useDropdownContext<BaseListItemData>();

  const hasSelection = multi ? selectedItems.length > 0 : !!selectedItem;

  const multipleSelectionDropdownProps = getDropdownProps ? getDropdownProps({ preventKeyAction: isOpen }) : {};

  return (
    <>
      {searchable ? (
        <BaseInput
          {...getInputProps({
            ...(inputAriaLabel && { "aria-label": inputAriaLabel }),
            placeholder: hasSelection ? "" : placeholder,
            ...multipleSelectionDropdownProps
          })}
          value={inputValue || ""}
          autoFocus={autoFocus}
          size={inputSize || size}
          className={cx(styles.inputWrapper, {
            [styles.hasSelected]: !multi && selectedItem && !inputValue,
            [styles.small]: inputSize === "small",
            [styles.multi]: multi && hasSelection
          })}
          disabled={disabled}
          readOnly={readOnly}
        />
      ) : (
        <>
          {!hasSelection && placeholder && (
            <Text
              color="secondary"
              className={styles.placeholderText}
              {...getToggleButtonProps(multipleSelectionDropdownProps)}
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
