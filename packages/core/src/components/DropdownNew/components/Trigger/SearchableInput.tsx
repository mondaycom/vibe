import React from "react";
import cx from "classnames";
import { BaseInput } from "../../../BaseInput";
import { BaseInputProps } from "../../../BaseInput/BaseInput.types";
import styles from "./Trigger.module.scss";
import { useDropdownContext } from "../../context/DropdownContext";
import { BaseListItemData } from "../../../BaseListItem";
import { Text } from "../../../Text";

interface SearchableInputProps {
  inputProps?: Partial<BaseInputProps> & { "aria-label"?: string };
  className?: string;
}

const SearchableInput: React.FC<SearchableInputProps> = ({ inputProps = {}, className }) => {
  const {
    inputValue,
    getInputProps,
    autoFocus,
    size,
    disabled,
    readOnly,
    placeholder,
    multi,
    selectedItem,
    selectedItems = [],
    inputAriaLabel,
    searchable,
    getToggleButtonProps
  } = useDropdownContext<BaseListItemData>();

  const hasSelection = multi ? selectedItems.length > 0 : !!selectedItem;

  return (
    <>
      {searchable ? (
        <BaseInput
          style={{ padding: "0", border: "1px solid red" }}
          {...getInputProps({
            ...(inputAriaLabel && { "aria-label": inputAriaLabel }),
            placeholder: hasSelection ? "" : placeholder,
            ...inputProps
          })}
          value={inputValue || ""}
          autoFocus={autoFocus}
          size={size}
          className={cx(
            styles.inputWrapper,
            {
              [styles.hasSelected]: !multi && selectedItem && !inputValue
            },
            className
          )}
          disabled={disabled}
          readOnly={readOnly}
        />
      ) : (
        <>
          {!hasSelection && placeholder && (
            <Text color="secondary" className={styles.placeholderText} {...getToggleButtonProps()}>
              {placeholder}
            </Text>
          )}
        </>
      )}
    </>
  );
};

export default SearchableInput;
