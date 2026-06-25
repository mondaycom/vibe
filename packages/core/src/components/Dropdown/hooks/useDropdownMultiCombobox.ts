import { useMemo, useCallback, useRef } from "react";
import useDropdownFiltering from "./useDropdownFiltering";
import { useMultipleSelection, useCombobox } from "downshift";
import { type DropdownGroupOption } from "../Dropdown.types";
import { type BaseItemData } from "../../BaseItem";

// Builds a short, screen-reader-friendly summary of the selection for the combobox value,
// e.g. "Chip one", "Chip one and 1 other", "Chip one and 3 others".
function buildSelectionSummary<T extends BaseItemData<Record<string, unknown>>>(items: T[]): string {
  if (!items.length) return "";
  const first = items[0]?.label ?? "";
  const othersCount = items.length - 1;
  if (othersCount === 0) return String(first);
  return `${first} and ${othersCount} other${othersCount > 1 ? "s" : ""}`;
}

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
  id?: string,
  onOptionRemove?: (option: T) => void,
  interactiveChips?: boolean
) {
  // Use controlled value if provided, otherwise use internal state
  const currentSelectedItems = value !== undefined ? value : selectedItems;
  // Lets the useMultipleSelection change handler (declared before useCombobox) push the
  // selection summary into the combobox input value.
  const setInputValueRef = useRef<((value: string) => void) | null>(null);

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
      // Keep the combobox value in sync with the selection so it is exposed to assistive tech.
      // Every selection change (menu, chip ×, keyboard) funnels through here.
      if (interactiveChips) {
        setInputValueRef.current?.(buildSelectionSummary(selectedItems || []));
      }
    },
    onStateChange: ({ type, selectedItems: newSelectedItems }) => {
      // Notify onOptionRemove for keyboard-driven chip deletion (× button uses contextOnOptionRemove).
      if (
        (type === useMultipleSelection.stateChangeTypes.SelectedItemKeyDownBackspace ||
          type === useMultipleSelection.stateChangeTypes.SelectedItemKeyDownDelete) &&
        newSelectedItems
      ) {
        const removedItem = currentSelectedItems.find(item => !newSelectedItems.some(si => si.value === item.value));
        if (removedItem) onOptionRemove?.(removedItem);
      }
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
    closeMenu,
    setInputValue
  } = useCombobox<T>({
    items: flatOptions,
    itemToString: item => item?.label ?? "",
    itemToKey: item => (item?.value !== undefined ? String(item.value) : ""),
    isItemDisabled: item => Boolean(item.disabled),
    isOpen: isMenuOpen,
    initialIsOpen: autoFocus,
    initialInputValue: inputValueProp ?? (interactiveChips ? buildSelectionSummary(currentSelectedItems) : ""),
    id,
    onIsOpenChange: ({ isOpen }) => {
      // Reset the text filter on any open/close change so the full list is always ready.
      filterOptions("");
      isOpen ? onMenuClose?.() : onMenuOpen?.();
    },
    onInputValueChange: useCallback(
      ({ inputValue, type }) => {
        // Only filter on actual user typing. Downshift also writes values into the input on
        // open/close/selection — those changes must not filter the list.
        if (type === useCombobox.stateChangeTypes.InputChange) {
          filterOptions(inputValue || "");
        }
        onInputChange?.(inputValue);
      },
      [onInputChange, filterOptions]
    ),
    onSelectedItemChange: ({ selectedItem: newSelectedItem }) => {
      if (!newSelectedItem) return;
      const existingItem = currentSelectedItems.find(item => item.value === newSelectedItem.value);
      if (existingItem) {
        removeSelectedItem(existingItem);
        onOptionRemove?.(existingItem);
      } else {
        addSelectedItem(newSelectedItem);
      }
      onOptionSelect?.(newSelectedItem);
      filterOptions("");
    },
    stateReducer: (state, actionAndChanges) => {
      const { type, changes } = actionAndChanges;

      switch (type) {
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
          // Keep the menu open and clear the input to restore the placeholder.
          return {
            ...changes,
            inputValue: null,
            isOpen: true,
            highlightedIndex: (changes.selectedItem?.index as number) ?? 0
          };
        case useCombobox.stateChangeTypes.InputBlur:
        case useCombobox.stateChangeTypes.ControlledPropUpdatedSelectedItem:
          return { ...changes, inputValue: interactiveChips ? buildSelectionSummary(currentSelectedItems) : null };
        default:
          if (!changes.isOpen && state.isOpen) {
            return { ...changes, inputValue: interactiveChips ? buildSelectionSummary(currentSelectedItems) : null };
          }
          return changes;
      }
    }
  });

  // Expose setInputValue to the useMultipleSelection change handler above.
  setInputValueRef.current = setInputValue;

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
