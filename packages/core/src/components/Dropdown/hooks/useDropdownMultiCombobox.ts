import { useMemo, useCallback } from "react";
import useDropdownFiltering from "./useDropdownFiltering";
import { useMultipleSelection, useCombobox } from "downshift";
import { type DropdownGroupOption } from "../Dropdown.types";
import { type BaseItemData } from "../../BaseItem";

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
  onOptionRemove?: (option: T) => void
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
    selectItem
  } = useCombobox<T>({
    items: flatOptions,
    itemToString: item => item?.label ?? "",
    itemToKey: item => (item?.value !== undefined ? String(item.value) : ""),
    isItemDisabled: item => Boolean(item.disabled),
    isOpen: isMenuOpen,
    initialIsOpen: autoFocus,
    initialInputValue: inputValueProp ?? "",
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
        // FunctionSelectItem (Space toggling the highlighted option, see getInputProps below) is
        // handled the same as Enter/click selection.
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
        case useCombobox.stateChangeTypes.FunctionSelectItem:
          // Keep the menu open and clear the input to restore the placeholder.
          return {
            ...changes,
            inputValue: null,
            isOpen: true,
            highlightedIndex: (changes.selectedItem?.index as number) ?? 0
          };
        case useCombobox.stateChangeTypes.InputBlur:
        case useCombobox.stateChangeTypes.ControlledPropUpdatedSelectedItem:
          return { ...changes, inputValue: null };
        default:
          if (!changes.isOpen && state.isOpen) {
            return { ...changes, inputValue: null };
          }
          return changes;
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
    getInputProps: (options?: Parameters<typeof getInputProps>[0]) =>
      getInputProps({
        ...options,
        onKeyDown: event => {
          options?.onKeyDown?.(event);
          // Space toggles the highlighted option instead of typing a literal space. It only applies
          // when the user has arrowed to an option (highlightedIndex set, i.e. aria-activedescendant
          // is set); while typing/filtering there is no highlight, so Space types normally.
          if (event.key === " " && !event.defaultPrevented && isOpen && highlightedIndex >= 0) {
            const item = flatOptions[highlightedIndex];
            if (item && !item.disabled) {
              event.preventDefault();
              selectItem(item);
            }
          }
        }
      }),
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
