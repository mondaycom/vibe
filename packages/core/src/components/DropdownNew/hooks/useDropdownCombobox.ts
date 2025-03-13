import { useCallback, useMemo } from "react";
import { useCombobox } from "downshift";
import useDropdownFiltering from "./useDropdownFiltering";
import { BaseListItemProps } from "../../BaseListItem";
import { ListGroup } from "../../BaseList";

function useDropdownCombobox<T extends BaseListItemProps>(
  options: ListGroup<T>[] | T[],
  onInputChange?: (value: string) => void,
  onOptionSelect?: (option: T) => void
) {
  const { filteredOptions, filterOptions } = useDropdownFiltering(options);
  const flatOptions = useMemo(() => filteredOptions.flatMap(group => group.options), [filteredOptions]);

  const {
    isOpen,
    highlightedIndex,
    selectedItem,
    getToggleButtonProps,
    getMenuProps,
    getInputProps,
    getItemProps,
    reset
  } = useCombobox<T>({
    items: flatOptions,
    itemToString: item => item?.label ?? "",
    onInputValueChange: useCallback(
      ({ inputValue }) => {
        filterOptions(inputValue || "");
        onInputChange?.(inputValue || "");
      },
      [onInputChange, filterOptions]
    ),

    onSelectedItemChange: useCallback(
      ({ selectedItem }) => {
        if (selectedItem) {
          onOptionSelect?.(selectedItem);
          filterOptions("");
        }
      },
      [onOptionSelect, filterOptions]
    ),

    onStateChange: ({ inputValue }) => {
      if (typeof inputValue !== "string") return;
      filterOptions(inputValue);
    },

    isItemDisabled: item => Boolean(item.disabled),

    stateReducer: (state, actionAndChanges) => {
      switch (actionAndChanges.type) {
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
          return { ...actionAndChanges.changes, inputValue: "" };
        default:
          return actionAndChanges.changes;
      }
    }
  });

  return {
    isOpen,
    highlightedIndex,
    selectedItem,
    getToggleButtonProps,
    getMenuProps,
    getInputProps,
    getItemProps,
    reset,
    filteredOptions
  };
}

export default useDropdownCombobox;
