import React, { useState, useCallback, useMemo } from "react";
import { type DropdownMultiControllerProps } from "../Dropdown.types";
import useDropdownMultiCombobox from "../hooks/useDropdownMultiCombobox";
import { type BaseItemData } from "@vibe/base-list";
import { type DropdownContextProps } from "../context/DropdownContext.types";
import DropdownWrapperUI from "../components/DropdownWrapperUI";

const DropdownMultiComboboxController = <Item extends BaseItemData<Record<string, unknown>>>(
  props: DropdownMultiControllerProps<Item>
) => {
  const {
    options,
    isMenuOpen: isMenuOpenProp,
    autoFocus,
    defaultValue,
    value,
    inputValue: inputValueProp,
    onChange,
    onInputChange,
    onMenuClose,
    onMenuOpen,
    onOptionSelect,
    filterOption,
    showSelectedOptions = true,
    clearable = true,
    searchable = true,
    multi = true,
    closeMenuOnSelect = true,
    dropdownRef,
    onFocus,
    onBlur,
    onKeyDown,
    onClear,
    onOptionRemove,
    loading = false,
    size = "medium",
    id,
    boxMode = false,
    interactiveChips,
    label,
    required,
    className,
    "aria-label": ariaLabel,
    "data-testid": dataTestId,
    error,
    helperText,
    dir,
    disabled,
    readOnly,
    multiline,
    optionRenderer,
    menuRenderer,
    noOptionsMessage,
    placeholder,
    withGroupDivider,
    stickyGroupTitle,
    maxMenuHeight,
    inputAriaLabel,
    menuAriaLabel,
    clearAriaLabel,
    menuWrapperClassName,
    minVisibleCount,
    borderless,
    onScroll,
    tooltipProps
  } = props;

  const initialMultiSelectedItems = Array.isArray(defaultValue) ? defaultValue : [];
  const [multiSelectedItemsState, setMultiSelectedItemsState] = useState<Item[]>(initialMultiSelectedItems);
  const [isFocused, setIsFocused] = useState(false);

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
    toggleMenu,
    filteredOptions,
    selectedItems: hookSelectedItems,
    addSelectedItem: hookAddSelectedItem,
    removeSelectedItem: hookRemoveSelectedItem,
    getDropdownProps,
    getSelectedItemProps: hookGetSelectedItemProps
  } = useDropdownMultiCombobox<Item>(
    options,
    multiSelectedItemsState,
    setMultiSelectedItemsState,
    boxMode ? undefined : isMenuOpenProp,
    autoFocus,
    defaultValue,
    value,
    inputValueProp,
    onChange,
    onInputChange,
    onMenuClose,
    onMenuOpen,
    onOptionSelect,
    filterOption,
    showSelectedOptions,
    id,
    onOptionRemove
  );

  const wrappedGetInputProps = useCallback(
    (inputOptions?: any) => {
      return hookGetInputProps!({
        ...(inputOptions || {}),
        disabled: readOnly || disabled,
        onFocus: (event: React.FocusEvent<HTMLInputElement>) => {
          setIsFocused(true);
          onFocus?.(event as any);
          inputOptions?.onFocus?.(event);
        },
        onBlur: (event: React.FocusEvent<HTMLInputElement>) => {
          setIsFocused(false);
          onBlur?.(event);
          inputOptions?.onBlur?.(event);
        },
        onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => {
          onKeyDown?.(event);
          inputOptions?.onKeyDown?.(event);
        }
      });
    },
    [hookGetInputProps, readOnly, disabled, onFocus, onBlur, onKeyDown]
  );

  const contextOnClear = useCallback(() => {
    const current = value ?? multiSelectedItemsState;
    const retained = current.filter(item => item.removable === false);
    hookReset(retained);
    onClear?.();
  }, [hookReset, value, multiSelectedItemsState, onClear]);

  const contextOnOptionRemove = useCallback(
    (option: Item) => {
      if (option.removable === false) return;
      hookRemoveSelectedItem?.(option);
      onOptionRemove?.(option);
    },
    [hookRemoveSelectedItem, onOptionRemove]
  );

  const contextValue = useMemo<DropdownContextProps<Item>>(
    () => ({
      label,
      required,
      className,
      "aria-label": ariaLabel,
      "data-testid": dataTestId,
      error,
      helperText,
      dir,
      disabled,
      readOnly,
      multiline,
      optionRenderer,
      menuRenderer,
      noOptionsMessage,
      placeholder,
      withGroupDivider,
      stickyGroupTitle,
      maxMenuHeight,
      inputAriaLabel,
      menuAriaLabel,
      clearAriaLabel,
      closeMenuOnSelect,
      menuWrapperClassName,
      minVisibleCount,
      boxMode,
      borderless,
      onKeyDown,
      onScroll,
      onClear,
      onFocus,
      onBlur,
      tooltipProps,
      interactiveChips,
      multi,
      searchable,
      autoFocus,
      clearable,
      size,
      loading,
      id,
      isOpen: boxMode ? true : isOpen,
      inputValue: hookInputValue ?? null,
      highlightedIndex,
      selectedItems: hookSelectedItems || [],
      filteredOptions,
      getToggleButtonProps,
      getLabelProps,
      getMenuProps,
      getItemProps,
      getInputProps: wrappedGetInputProps,
      reset: hookReset,
      contextOnClear,
      contextOnOptionRemove,
      addSelectedItem: hookAddSelectedItem,
      removeSelectedItem: hookRemoveSelectedItem,
      getSelectedItemProps: hookGetSelectedItemProps,
      isFocused,
      getDropdownProps,
      toggleMenu
    }),
    [
      label, required, className, ariaLabel, dataTestId, error, helperText, dir,
      disabled, readOnly, multiline, optionRenderer, menuRenderer, noOptionsMessage,
      placeholder, withGroupDivider, stickyGroupTitle, maxMenuHeight, inputAriaLabel,
      menuAriaLabel, clearAriaLabel, closeMenuOnSelect, menuWrapperClassName, minVisibleCount,
      boxMode, borderless, onKeyDown, onScroll, onClear, onFocus, onBlur, tooltipProps,
      interactiveChips, multi, searchable, autoFocus, clearable, size, loading, id,
      isOpen, hookInputValue, highlightedIndex, hookSelectedItems, filteredOptions,
      getToggleButtonProps, getLabelProps, getMenuProps, getItemProps,
      wrappedGetInputProps, hookReset, contextOnClear, contextOnOptionRemove,
      hookAddSelectedItem, hookRemoveSelectedItem, hookGetSelectedItemProps,
      isFocused, getDropdownProps, toggleMenu
    ]
  );

  return <DropdownWrapperUI contextValue={contextValue} dropdownRef={dropdownRef} />;
};

export default DropdownMultiComboboxController;
