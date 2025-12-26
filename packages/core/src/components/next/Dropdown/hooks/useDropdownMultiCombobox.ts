import { useMemo, useCallback } from "react";
import useDropdownFiltering from "./useDropdownFiltering";
import { useMultipleSelection, useCombobox } from "downshift";
import { type DropdownGroupOption } from "../Dropdown.types";
import { type BaseItemData } from "../../../BaseItem";

function useDropdownMultiCombobox<T extends BaseItemData<Record<string, unknown>>>(
  options: DropdownGroupOption<T>,
  selectedItems: T[],
  setSelectedItems: (items: T[]) => void,
  isMenuOpen: boolean,
  autoFocus?: boolean,
  defaultValue?: T[],
  value?: T[],
  inputValueProp?: string,
  onChange?: (options: T[]) => void,
  onInputChange?: (value: string | null) => void,
  onMenuOpen?: () => void,
  onMenuClose?: () => void,
  onOptionSelect?: (option: T) => void,
  filterOption?: (option: T, inputValue: string) => boolean,
  showSelectedOptions?: boolean,
  id?: string
) {
  // Use controlled value if provided, otherwise use internal state
  const currentSelectedItems = value !== undefined ? value : selectedItems;

  const { filteredOptions, filterOptions } = useDropdownFiltering<T>(
    options,
    filterOption,
    showSelectedOptions,
    currentSelectedItems
  );
  const flatOptions = useMemo(() => filteredOptions.flatMap(group => group.options), [filteredOptions]);
  const { getSelectedItemProps, getDropdownProps, addSelectedItem, removeSelectedItem } = useMultipleSelection<T>({
    selectedItems: currentSelectedItems,
    initialSelectedItems: defaultValue,
    onSelectedItemsChange: ({ selectedItems }) => {
      if (value === undefined) {
        setSelectedItems(selectedItems || []);
      }
      onChange?.(selectedItems || []);
    }
  });

  const {
    isOpen,
    inputValue,
    highlightedIndex,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getItemProps,
    reset: downshiftReset,
    openMenu,
    toggleMenu,
    closeMenu
  } = useCombobox<T>({
    items: flatOptions,
    itemToString: item => item?.label ?? "",
    itemToKey: item => (item?.value !== undefined ? String(item.value) : ""),
    isItemDisabled: item => Boolean(item.disabled),
    isOpen: isMenuOpen,
    initialIsOpen: autoFocus,
    initialInputValue: inputValueProp || "",
    id,
    onIsOpenChange: ({ isOpen }) => {
      isOpen ? onMenuClose?.() : onMenuOpen?.();
    },
    onInputValueChange: ({ inputValue }) => {
      filterOptions(inputValue || "");
      onInputChange?.(inputValue);
    },
    onSelectedItemChange: ({ selectedItem: newSelectedItem }) => {
      if (!newSelectedItem) return;
      const existingItem = currentSelectedItems.find(item => item.value === newSelectedItem.value);
      if (existingItem) {
        removeSelectedItem(existingItem);
      } else {
        addSelectedItem(newSelectedItem);
      }
      onOptionSelect?.(newSelectedItem);
      filterOptions("");
    },
    stateReducer: (state, actionAndChanges) => {
      switch (actionAndChanges.type) {
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
          return {
            ...actionAndChanges.changes,
            inputValue: null,
            isOpen: true,
            highlightedIndex: (actionAndChanges.changes.selectedItem?.index as number) ?? 0
          };
        case useCombobox.stateChangeTypes.InputBlur:
        case useCombobox.stateChangeTypes.ControlledPropUpdatedSelectedItem:
          return { ...actionAndChanges.changes, inputValue: null };
        default:
          return actionAndChanges.changes;
      }
    }
  });

  const reset = useCallback(() => {
    if (value === undefined) {
      setSelectedItems([]);
    }
    downshiftReset();
    onChange?.([]);
  }, [value, setSelectedItems, downshiftReset, onChange]);

  return {
    isOpen,
    inputValue,
    highlightedIndex,
    selectedItems: currentSelectedItems,
    getSelectedItemProps,
    getDropdownProps,
    addSelectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getItemProps,
    reset,
    removeSelectedItem,
    filteredOptions,
    openMenu,
    toggleMenu,
    closeMenu
  };
}

export default useDropdownMultiCombobox;
