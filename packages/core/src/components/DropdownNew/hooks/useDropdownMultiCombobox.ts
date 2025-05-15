import { useMemo } from "react";
import useDropdownFiltering from "./useDropdownFiltering";
import { useMultipleSelection, useCombobox } from "downshift";
import { DropdownGroupOption } from "../Dropdown.types";
import { BaseListItemData } from "../../BaseListItem";

function useDropdownMultiCombobox<T extends BaseListItemData<Record<string, unknown>>>(
  options: DropdownGroupOption<T>,
  selectedItems: T[],
  setSelectedItems: (items: T[]) => void,
  autoFocus?: boolean,
  onChange?: (options: T[]) => void,
  onInputChange?: (value: string) => void,
  onMenuOpen?: () => void,
  onMenuClose?: () => void,
  onOptionSelect?: (option: T) => void,
  filterOption?: (option: T, inputValue: string) => boolean,
  showSelectedOptions?: boolean
) {
  const { filteredOptions, filterOptions } = useDropdownFiltering<T>(
    options,
    filterOption,
    showSelectedOptions,
    selectedItems
  );
  const flatOptions = useMemo(() => filteredOptions.flatMap(group => group.options), [filteredOptions]);

  const { getSelectedItemProps, getDropdownProps, addSelectedItem, removeSelectedItem } = useMultipleSelection({
    selectedItems,
    onSelectedItemsChange: ({ selectedItems }) => {
      setSelectedItems(selectedItems || []);
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
    reset
  } = useCombobox<T>({
    items: flatOptions,
    itemToString: item => item?.label ?? "",
    selectedItem: null,
    isOpen: autoFocus,
    onIsOpenChange: ({ isOpen }) => {
      isOpen ? onMenuClose?.() : onMenuOpen?.();
    },
    onInputValueChange: ({ inputValue }) => {
      filterOptions(inputValue || "");
      onInputChange?.(inputValue || "");
    },
    onSelectedItemChange: ({ selectedItem: newSelectedItem }) => {
      if (!newSelectedItem) return;
      const itemWasSelected = selectedItems.some(item => item.value === newSelectedItem.value);
      if (itemWasSelected) {
        removeSelectedItem(newSelectedItem);
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
          return { ...actionAndChanges.changes, inputValue: "", isOpen: true };
        default:
          return actionAndChanges.changes;
      }
    }
  });

  return {
    isOpen,
    inputValue,
    highlightedIndex,
    selectedItems,
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
    filteredOptions
  };
}

export default useDropdownMultiCombobox;
