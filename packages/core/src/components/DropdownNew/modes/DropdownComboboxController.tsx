import React, { useState } from "react";
import { DropdownControllerProps } from "../Dropdown.types";
import useDropdownCombobox from "../hooks/useDropdownCombobox";
import { BaseListItemData } from "../../BaseListItem";
import { DropdownContextProps } from "../context/DropdownContext.types";
import DropdownWrapperUI from "../components/DropdownWrapperUI";

const DropdownComboboxController = <Item extends BaseListItemData<Record<string, unknown>>>(
  props: DropdownControllerProps<Item>
) => {
  const {
    options,
    isMenuOpen: isMenuOpenProp,
    autoFocus,
    closeMenuOnSelect = true,
    defaultValue,
    inputValue: inputValueProp,
    onChange,
    onInputChange,
    onMenuClose,
    onMenuOpen,
    onOptionSelect,
    filterOption,
    showSelectedOptions = false,

    className,
    id,
    "data-testid": dataTestId,
    label,
    required,
    helperText,
    error,
    disabled,
    readOnly,
    dir,
    size,
    optionRenderer,
    valueRenderer,
    noOptionsMessage,
    placeholder,
    withGroupDivider,
    stickyGroupTitle,
    maxMenuHeight,
    clearable = true,
    searchable = true,
    ariaLabel,
    inputAriaLabel,
    menuAriaLabel,
    onBlur,
    onClear,
    onFocus,
    onKeyDown,
    onOptionRemove,
    onScroll,
    multi = false,
    dropdownRef
  } = props;

  const [isFocused, setIsFocused] = useState(false);

  const hookResult = useDropdownCombobox<Item>(
    options,
    isMenuOpenProp,
    autoFocus,
    closeMenuOnSelect,
    defaultValue as Item,
    inputValueProp,
    onChange,
    onInputChange,
    onMenuClose,
    onMenuOpen,
    onOptionSelect,
    filterOption,
    showSelectedOptions
  );

  const {
    isOpen,
    inputValue: hookInputValue,
    highlightedIndex,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getItemProps,
    getInputProps: hookGetInputProps,
    reset: hookReset,
    filteredOptions,
    selectedItem: hookSelectedItem
  } = hookResult;

  const contextValue: DropdownContextProps<Item> = {
    label,
    required,
    className,
    id,
    "data-testid": dataTestId,
    ariaLabel,
    error,
    helperText,
    isOpen,
    inputValue: hookInputValue ?? null,
    highlightedIndex,
    selectedItem: hookSelectedItem,
    selectedItems: [],
    filteredOptions,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getItemProps,
    getInputProps: (inputOptions?: any) => {
      return hookGetInputProps!({
        ...(inputOptions || {}),
        onFocus: (event: React.FocusEvent<HTMLInputElement>) => {
          setIsFocused(true);
          onFocus?.(event as any);
          inputOptions?.onFocus?.(event);
        },
        onBlur: (event: React.FocusEvent<HTMLInputElement>) => {
          setIsFocused(false);
          onBlur?.();
          inputOptions?.onBlur?.(event);
        },
        onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => {
          onKeyDown?.(event);
          inputOptions?.onKeyDown?.(event);
        }
      });
    },
    reset: hookReset,
    contextOnClear: () => {
      hookReset();
      onClear?.();
    },
    contextOnOptionRemove: (option: Item) => {
      onOptionRemove?.(option);
    },
    addSelectedItem: undefined,
    removeSelectedItem: undefined,
    searchable,
    multi,
    disabled,
    readOnly,
    size,
    optionRenderer,
    valueRenderer,
    noOptionsMessage,
    placeholder,
    withGroupDivider,
    stickyGroupTitle,
    maxMenuHeight,
    clearable,
    autoFocus,
    inputAriaLabel,
    menuAriaLabel,
    closeMenuOnSelect,
    dir,
    isFocused,
    onFocus,
    onBlur,
    onKeyDown,
    onScroll,
    onClear
  };

  return <DropdownWrapperUI contextValue={contextValue} dropdownRef={dropdownRef} />;
};

export default DropdownComboboxController;
