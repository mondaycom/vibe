import { useCallback, useMemo, useRef, useState } from "react";
import { useCombobox } from "downshift";
import useDropdownFiltering from "./useDropdownFiltering";
import { type BaseItemData } from "../../../BaseItem";
import { type DropdownGroupOption } from "../Dropdown.types";

function useDropdownCombobox<T extends BaseItemData<Record<string, unknown>>>(
  options: DropdownGroupOption<T>,
  isMenuOpen?: boolean,
  autoFocus?: boolean,
  closeMenuOnSelect?: boolean,
  defaultValue?: T,
  value?: T,
  inputValueProp?: string,
  onChange?: (option: T | T[] | null) => void,
  onInputChange?: (value: string | null) => void,
  onMenuOpen?: () => void,
  onMenuClose?: () => void,
  onOptionSelect?: (option: T) => void,
  filterOption?: (option: T, inputValue: string) => boolean,
  showSelectedOptions?: boolean,
  id?: string
) {
  const [currentSelectedItem, setCurrentSelectedItem] = useState<T | null>(defaultValue || null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Use controlled value if provided, otherwise use internal state
  const selectedItem = value !== undefined ? value : currentSelectedItem;

  const memoizedSelectedItemForFiltering = useMemo(() => {
    return selectedItem ? [selectedItem] : [];
  }, [selectedItem]);

  const { filteredOptions, filterOptions } = useDropdownFiltering<T>(
    options,
    filterOption,
    showSelectedOptions,
    memoizedSelectedItemForFiltering
  );

  const flatOptions = useMemo(() => filteredOptions.flatMap(group => group.options), [filteredOptions]);
  const {
    isOpen,
    inputValue,
    highlightedIndex,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getItemProps,
    reset,
    openMenu,
    toggleMenu,
    closeMenu
  } = useCombobox<T>({
    items: flatOptions,
    itemToString: item => item?.label ?? "",
    itemToKey: item => (item?.value !== undefined ? String(item.value) : ""),
    isItemDisabled: item => Boolean(item.disabled),
    initialInputValue: inputValueProp || "",
    selectedItem: selectedItem,
    isOpen: isMenuOpen,
    initialIsOpen: autoFocus,
    id,
    onIsOpenChange: ({ isOpen }) => {
      isOpen ? onMenuClose?.() : onMenuOpen?.();
    },

    onInputValueChange: useCallback(
      ({ inputValue }) => {
        filterOptions(inputValue || "");
        onInputChange?.(inputValue);
      },
      [onInputChange, filterOptions]
    ),
    onSelectedItemChange: useCallback(
      ({ selectedItem }) => {
        if (value === undefined) {
          setCurrentSelectedItem(selectedItem || null);
        }
        if (selectedItem) {
          onOptionSelect?.(selectedItem);
          onChange?.(selectedItem);
          filterOptions("");
        } else {
          onChange?.(null);
          filterOptions("");
        }
      },
      [value, onOptionSelect, filterOptions, onChange]
    ),
    onStateChange: useCallback(
      ({ type }) => {
        // Blur input after selection via click or Enter key
        if (
          closeMenuOnSelect &&
          (type === useCombobox.stateChangeTypes.ItemClick || type === useCombobox.stateChangeTypes.InputKeyDownEnter)
        ) {
          inputRef.current?.blur();
        }
      },
      [closeMenuOnSelect]
    ),
    stateReducer: (state, actionAndChanges) => {
      switch (actionAndChanges.type) {
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
          return { ...actionAndChanges.changes, inputValue: null, isOpen: !closeMenuOnSelect };
        case useCombobox.stateChangeTypes.InputBlur:
        case useCombobox.stateChangeTypes.ControlledPropUpdatedSelectedItem:
          return { ...actionAndChanges.changes, inputValue: null };

        default:
          return actionAndChanges.changes;
      }
    }
  });

  return {
    isOpen,
    inputValue,
    highlightedIndex,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps: (options?: Parameters<typeof getInputProps>[0]) => getInputProps({ ...options, ref: inputRef }),
    getItemProps,
    reset: () => {
      if (value === undefined) {
        setCurrentSelectedItem(null);
      }
      reset();
      filterOptions("");
    },
    filteredOptions,
    openMenu,
    toggleMenu,
    closeMenu
  };
}

export default useDropdownCombobox;
