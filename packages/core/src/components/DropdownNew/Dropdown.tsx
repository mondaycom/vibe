import React, { useMemo, useRef, forwardRef, useState } from "react";
import { BaseDropdownProps } from "./Dropdown.types";
import useDropdownCombobox from "./hooks/useDropdownCombobox";
import useDropdownMultiCombobox from "./hooks/useDropdownMultiCombobox";
import useDropdownSelect from "./hooks/useDropdownSelect";
import useDropdownMultiSelect from "./hooks/useDropdownMultiSelect";
import useMergeRef from "../../hooks/useMergeRef";
import { BaseListItemData } from "../BaseListItem";
import DropdownPopup from "./components/DropdownPopup/DropdownPopup";
import DropdownStructure from "./components/DropdownStructure/DropdownStructure";
import { DropdownContext } from "./context/DropdownContext";
import { DropdownContextProps } from "./context/DropdownContext.types";

const Dropdown = forwardRef(
  <Item extends BaseListItemData<Record<string, unknown>>>(
    {
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
      options,
      size,
      optionRenderer,
      valueRenderer,
      noOptionsMessage,
      placeholder,
      withGroupDivider,
      stickyGroupTitle,
      maxMenuHeight,
      isMenuOpen: isMenuOpenProp,
      closeMenuOnSelect = true,
      autoFocus,
      clearable = true,
      showSelectedOptions = false,
      searchable = true,
      ariaLabel,
      inputAriaLabel,
      menuAriaLabel,
      defaultValue,
      inputValue: inputValueProp,
      filterOption,
      onBlur,
      onChange,
      onClear,
      onFocus,
      onInputChange,
      onKeyDown,
      onMenuOpen,
      onMenuClose,
      onOptionSelect,
      onOptionRemove,
      onScroll,
      multi,
      multiline
    }: BaseDropdownProps<Item>,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const dropdownInternalRef = useRef<HTMLDivElement>(null);
    const dropdownMergedRef = useMergeRef(ref, dropdownInternalRef);

    const [isFocused, setIsFocused] = useState(false);
    const [multiSelectedItemsState, setMultiSelectedItemsState] = useState<Item[]>((defaultValue as Item[]) ?? []);

    const singleDropdownHook = useDropdownCombobox<Item>(
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

    const multiDropdownHook = useDropdownMultiCombobox<Item>(
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

    const singleSelectHook = useDropdownSelect<Item>(
      options,
      autoFocus,
      isMenuOpenProp,
      defaultValue as Item,
      onChange,
      onMenuOpen,
      onMenuClose,
      onOptionSelect,
      showSelectedOptions,
      filterOption
    );

    const multiSelectHook = useDropdownMultiSelect<Item>(
      options,
      multiSelectedItemsState,
      setMultiSelectedItemsState,
      isMenuOpenProp,
      autoFocus,
      defaultValue as Item[],
      onChange,
      onMenuOpen,
      onMenuClose,
      onOptionSelect,
      showSelectedOptions,
      filterOption
    );

    const activeHookResult = useMemo(() => {
      if (searchable) {
        return multi ? multiDropdownHook : singleDropdownHook;
      }
      return multi ? multiSelectHook : singleSelectHook;
    }, [searchable, multi, multiDropdownHook, singleDropdownHook, multiSelectHook, singleSelectHook]);

    const {
      isOpen,
      inputValue,
      highlightedIndex,
      getToggleButtonProps,
      getLabelProps,
      getMenuProps,
      getItemProps,
      reset,
      filteredOptions
    } = activeHookResult;

    const currentSelectedItem = !multi
      ? searchable
        ? singleDropdownHook.selectedItem
        : singleSelectHook.selectedItem
      : undefined;
    const currentSelectedItems = multi
      ? searchable
        ? multiDropdownHook.selectedItems
        : multiSelectHook.selectedItems
      : [];

    const addSelectedItem = multi
      ? searchable
        ? multiDropdownHook.addSelectedItem
        : multiSelectHook.addSelectedItem
      : undefined;
    const removeSelectedItem = multi
      ? searchable
        ? multiDropdownHook.removeSelectedItem
        : multiSelectHook.removeSelectedItem
      : undefined;

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
      inputValue: inputValue ?? null,
      highlightedIndex,
      selectedItem: currentSelectedItem,
      selectedItems: currentSelectedItems,
      filteredOptions,
      getToggleButtonProps,
      getLabelProps,
      getMenuProps,
      getItemProps,
      getInputProps: (options?: any) => {
        return activeHookResult.getInputProps({
          ...(options || {}),
          onFocus: (event: React.FocusEvent<HTMLInputElement>) => {
            setIsFocused(true);
            onFocus?.(event as any);
          },
          onBlur: (_event: React.FocusEvent<HTMLInputElement>) => {
            setIsFocused(false);
            onBlur?.();
          },
          onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => {
            onKeyDown?.(event);
          }
        });
      },
      reset,
      contextOnClear: () => {
        reset();
        if (multi) {
          setMultiSelectedItemsState([]);
        }
        onClear?.();
      },
      contextOnOptionRemove: (option: Item) => {
        if (removeSelectedItem) {
          removeSelectedItem(option);
        }
        onOptionRemove?.(option);
      },
      addSelectedItem,
      removeSelectedItem,
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

    return (
      <DropdownContext.Provider value={contextValue}>
        <DropdownStructure dropdownRef={dropdownMergedRef}>
          <DropdownPopup />
        </DropdownStructure>
      </DropdownContext.Provider>
    );
  }
);

export default Dropdown as <Item extends BaseListItemData<Record<string, unknown>>>(
  props: BaseDropdownProps<Item> & { ref?: React.ForwardedRef<HTMLDivElement> }
) => React.ReactElement;
