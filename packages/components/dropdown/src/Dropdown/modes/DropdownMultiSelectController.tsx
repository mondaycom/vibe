import React, { useState, useCallback, useMemo } from "react";
import { type DropdownMultiControllerProps } from "../Dropdown.types";
import useDropdownMultiSelect from "../hooks/useDropdownMultiSelect";
import { type BaseItemData } from "@vibe/base-list";
import { type DropdownContextProps } from "../context/DropdownContext.types";
import DropdownWrapperUI from "../components/DropdownWrapperUI";

const DropdownMultiSelectController = <Item extends BaseItemData<Record<string, unknown>>>(
  props: DropdownMultiControllerProps<Item>
) => {
  const {
    options,
    isMenuOpen: isMenuOpenProp,
    autoFocus,
    defaultValue,
    value,
    onChange,
    onMenuOpen,
    onMenuClose,
    onOptionSelect,
    clearable = true,
    showSelectedOptions = true,
    filterOption,
    dropdownRef,
    onClear,
    onOptionRemove,
    onFocus,
    onBlur,
    loading = false,
    size = "medium",
    id,
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
    tooltipProps,
    interactiveChips
  } = props;

  const initialMultiSelectedItems = Array.isArray(defaultValue) ? defaultValue : [];
  const [multiSelectedItemsState, setMultiSelectedItemsState] = useState<Item[]>(initialMultiSelectedItems);
  const [isFocused, setIsFocused] = useState(false);

  const {
    isOpen,
    highlightedIndex,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getItemProps,
    reset: hookReset,
    toggleMenu,
    filteredOptions,
    selectedItems: hookSelectedItems,
    addSelectedItem: hookAddSelectedItem,
    removeSelectedItem: hookRemoveSelectedItem,
    getDropdownProps
  } = useDropdownMultiSelect<Item>(
    options,
    multiSelectedItemsState,
    setMultiSelectedItemsState,
    isMenuOpenProp,
    autoFocus,
    defaultValue,
    value,
    onChange,
    onMenuOpen,
    onMenuClose,
    onOptionSelect,
    showSelectedOptions,
    filterOption,
    id
  );

  const wrappedGetToggleButtonProps = useCallback(
    (toggleOptions?: Record<string, any>) => {
      return getToggleButtonProps({
        ...(toggleOptions || {}),
        disabled: readOnly || disabled,
        onFocus: (event: React.FocusEvent<HTMLDivElement>) => {
          setIsFocused(true);
          onFocus?.(event);
        },
        onBlur: (event: React.FocusEvent<HTMLDivElement>) => {
          setIsFocused(false);
          onBlur?.(event);
        }
      });
    },
    [getToggleButtonProps, readOnly, disabled, onFocus, onBlur]
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
      multi: true,
      autoFocus,
      clearable,
      size,
      loading,
      id,
      isOpen,
      inputValue: null,
      highlightedIndex,
      selectedItem: undefined,
      selectedItems: hookSelectedItems || [],
      filteredOptions,
      getToggleButtonProps: wrappedGetToggleButtonProps,
      getLabelProps,
      getMenuProps,
      getItemProps,
      reset: hookReset,
      getDropdownProps,
      contextOnClear,
      contextOnOptionRemove,
      addSelectedItem: hookAddSelectedItem,
      removeSelectedItem: hookRemoveSelectedItem,
      toggleMenu,
      isFocused
    }),
    [
      label, required, className, ariaLabel, dataTestId, error, helperText, dir,
      disabled, readOnly, multiline, optionRenderer, menuRenderer, noOptionsMessage,
      placeholder, withGroupDivider, stickyGroupTitle, maxMenuHeight, inputAriaLabel,
      menuAriaLabel, clearAriaLabel, closeMenuOnSelect, menuWrapperClassName, minVisibleCount,
      boxMode, borderless, onKeyDown, onScroll, onClear, onFocus, onBlur, tooltipProps,
      interactiveChips, autoFocus, clearable, size, loading, id,
      isOpen, highlightedIndex, hookSelectedItems, filteredOptions,
      wrappedGetToggleButtonProps, getLabelProps, getMenuProps, getItemProps, hookReset,
      getDropdownProps, contextOnClear, contextOnOptionRemove,
      hookAddSelectedItem, hookRemoveSelectedItem, toggleMenu, isFocused
    ]
  );

  return <DropdownWrapperUI contextValue={contextValue} dropdownRef={dropdownRef} />;
};

export default DropdownMultiSelectController;
