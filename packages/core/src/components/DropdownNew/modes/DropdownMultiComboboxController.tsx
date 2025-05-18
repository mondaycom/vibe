import React, { useState } from "react";
import { DropdownControllerProps } from "../Dropdown.types";
import useDropdownMultiCombobox from "../hooks/useDropdownMultiCombobox";
import { BaseListItemData } from "../../BaseListItem";
import { DropdownContextProps } from "../context/DropdownContext.types";
import DropdownWrapperUI from "../components/DropdownWrapperUI";

const DropdownMultiComboboxController = <Item extends BaseListItemData<Record<string, unknown>>>(
  props: DropdownControllerProps<Item>
) => {
  const {
    options,
    isMenuOpen: isMenuOpenProp,
    autoFocus,
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
    multi = true,
    multiline,
    dropdownRef,
    closeMenuOnSelect = true
  } = props;

  const initialMultiSelectedItems = Array.isArray(defaultValue) ? defaultValue : [];
  const [multiSelectedItemsState, setMultiSelectedItemsState] = useState<Item[]>(initialMultiSelectedItems);
  const [isFocused, setIsFocused] = useState(false);

  const hookResult = useDropdownMultiCombobox<Item>(
    options,
    multiSelectedItemsState,
    setMultiSelectedItemsState,
    isMenuOpenProp,
    autoFocus,
    defaultValue as Item[],
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
    selectedItems: hookSelectedItems, // This comes from the hook, reflecting multiSelectedItemsState
    addSelectedItem: hookAddSelectedItem,
    removeSelectedItem: hookRemoveSelectedItem
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
    selectedItems: hookSelectedItems || [],
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
      setMultiSelectedItemsState([]); // Clear internal state
      onClear?.();
    },
    contextOnOptionRemove: (option: Item) => {
      if (hookRemoveSelectedItem) {
        hookRemoveSelectedItem(option); // This will update internal state via the hook
      }
      onOptionRemove?.(option);
    },
    addSelectedItem: hookAddSelectedItem, // This will update internal state via the hook
    removeSelectedItem: hookRemoveSelectedItem,
    searchable,
    multi,
    multiline,
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

export default DropdownMultiComboboxController;
