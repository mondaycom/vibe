import { useMemo, useCallback, useRef } from "react";
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
  onOptionRemove?: (option: T) => void,
  textInput?: boolean,
  interactiveChips?: boolean
) {
  // Use controlled value if provided, otherwise use internal state
  const currentSelectedItems = value !== undefined ? value : selectedItems;
  // Used only in textInput/interactiveChips modes. The stateReducer resets selectedItem to null so
  // onStateChange fires even on repeat clicks; this ref carries the original item across that reset.
  const pendingToggleRef = useRef<T | null>(null);
  // textInput only: carries the clicked item across stateReducer's selectedItem:null reset.
  const enableToggle = textInput;

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
    onStateChange: ({ type, selectedItem: removedItem }) => {
      // Notify onOptionRemove for keyboard-driven chip deletion (× button uses contextOnOptionRemove).
      if (
        (type === useMultipleSelection.stateChangeTypes.SelectedItemKeyDownBackspace ||
          type === useMultipleSelection.stateChangeTypes.SelectedItemKeyDownDelete) &&
        removedItem
      ) {
        onOptionRemove?.(removedItem);
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
    closeMenu
  } = useCombobox<T>({
    items: flatOptions,
    itemToString: item => item?.label ?? "",
    itemToKey: item => (item?.value !== undefined ? String(item.value) : ""),
    isItemDisabled: item => Boolean(item.disabled),
    isOpen: isMenuOpen,
    initialIsOpen: autoFocus,
    initialInputValue: inputValueProp ?? (textInput ? currentSelectedItems.map(i => i.label).join(", ") : ""),
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
    // When enableToggle (textInput), stateReducer resets selectedItem to null so this fires with
    // null and exits early; onStateChange + pendingToggleRef handle selection instead.
    onSelectedItemChange: ({ selectedItem: newSelectedItem }) => {
      if (enableToggle || !newSelectedItem) return;
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
    onStateChange: ({ type }) => {
      if (!enableToggle) return;
      if (
        type !== useCombobox.stateChangeTypes.ItemClick &&
        type !== useCombobox.stateChangeTypes.InputKeyDownEnter
      )
        return;

      const clickedItem = pendingToggleRef.current;
      pendingToggleRef.current = null;
      if (!clickedItem) return;
      const existingItem = currentSelectedItems.find(i => i.value === clickedItem.value);
      if (existingItem) {
        removeSelectedItem(existingItem);
        onOptionRemove?.(existingItem);
      } else {
        addSelectedItem(clickedItem);
      }
      onOptionSelect?.(clickedItem);
      filterOptions("");
    },
    stateReducer: (state, actionAndChanges) => {
      const { type, changes } = actionAndChanges;
      // null clears the input and restores the placeholder (original multi-select behavior).
      // textInput mode shows a comma-separated summary instead.
      const closedInputValue = textInput ? currentSelectedItems.map(i => i.label).join(", ") : null;

      switch (type) {
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick: {
          if (enableToggle) {
            const clickedItem = changes.selectedItem;
            pendingToggleRef.current = clickedItem ?? null;
            const newItems = clickedItem
              ? currentSelectedItems.some(i => i.value === clickedItem.value)
                ? currentSelectedItems.filter(i => i.value !== clickedItem.value)
                : [...currentSelectedItems, clickedItem]
              : currentSelectedItems;
            const newInputValue = textInput ? newItems.map(i => i.label).join(", ") : null;
            return {
              ...changes,
              selectedItem: null,
              inputValue: newInputValue,
              isOpen: true,
              highlightedIndex: (changes.selectedItem?.index as number) ?? 0
            };
          }
          // Default mode: original behavior — keep the menu open, clear input to restore placeholder.
          return {
            ...changes,
            inputValue: null,
            isOpen: true,
            highlightedIndex: (changes.selectedItem?.index as number) ?? 0
          };
        }
        case useCombobox.stateChangeTypes.InputBlur:
        case useCombobox.stateChangeTypes.ControlledPropUpdatedSelectedItem:
          return { ...changes, inputValue: closedInputValue };
        default:
          if (!changes.isOpen && state.isOpen) {
            return { ...changes, inputValue: closedInputValue };
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
