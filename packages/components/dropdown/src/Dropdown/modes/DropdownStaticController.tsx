import React, { useState } from "react";
import { type BaseItemData } from "@vibe/base-list";
import { type BaseDropdownProps, type DropdownLazyRootProps } from "../Dropdown.types";
import { type DropdownContextProps } from "../context/DropdownContext.types";
import DropdownWrapperUI from "../components/DropdownWrapperUI";

type DropdownStaticControllerProps<Item extends BaseItemData<Record<string, unknown>>> = {
  dropdownProps: BaseDropdownProps<Item>;
  selectedValue: Item | Item[] | null | undefined;
  dropdownRef: React.Ref<HTMLDivElement>;
  lazyRootProps: DropdownLazyRootProps;
};

let staticIdCounter = 0;

const useStaticBaseId: (id?: string) => string =
  "useId" in React
    ? (id?: string) => {
        const reactId = (React as unknown as { useId: () => string }).useId();
        return id || `dropdown-static-${reactId}`;
      }
    : (id?: string) => {
        const [generatedId] = useState(() => `dropdown-static-${++staticIdCounter}`);
        return id || generatedId;
      };

const noop = () => {};
const emptyProps = () => ({});

const DropdownStaticController = <Item extends BaseItemData<Record<string, unknown>>>({
  dropdownProps,
  selectedValue,
  dropdownRef,
  lazyRootProps
}: DropdownStaticControllerProps<Item>) => {
  const {
    id,
    multi = false,
    searchable = false,
    inlineSelectedValue = false,
    inputValue: inputValueProp,
    disabled,
    readOnly,
    clearable = true,
    loading = false,
    size = "medium",
    closeMenuOnSelect = true
  } = dropdownProps;

  const baseId = useStaticBaseId(id);
  const labelId = `${baseId}-label`;
  const inputId = `${baseId}-input`;
  const toggleButtonId = `${baseId}-toggle-button`;

  const selectedItems = multi ? (Array.isArray(selectedValue) ? selectedValue : []) : [];
  const selectedItem = multi ? undefined : (selectedValue as Item | null | undefined) ?? null;

  let inputValue: string | null = null;
  if (searchable) {
    inputValue = multi
      ? inputValueProp ?? ""
      : inputValueProp || (inlineSelectedValue ? selectedItem?.label : undefined) || "";
  }

  const contextValue: DropdownContextProps<Item> = {
    ...dropdownProps,
    isOpen: false,
    inputValue,
    highlightedIndex: -1,
    selectedItem,
    selectedItems,
    filteredOptions: [],
    getLabelProps: () => ({ id: labelId, htmlFor: searchable ? inputId : toggleButtonId }),
    getToggleButtonProps: (toggleOptions?: Record<string, unknown>) => ({
      "aria-activedescendant": "",
      "aria-expanded": false,
      "aria-haspopup": "listbox",
      "aria-labelledby": toggleOptions?.["aria-label"] ? undefined : labelId,
      id: toggleButtonId,
      role: "combobox",
      tabIndex: 0,
      ...toggleOptions,
      disabled: readOnly || disabled
    }),
    getInputProps: (inputOptions?: Record<string, unknown>) => ({
      "aria-activedescendant": "",
      "aria-autocomplete": "list",
      "aria-expanded": false,
      "aria-labelledby": inputOptions?.["aria-label"] ? undefined : labelId,
      autoComplete: "off",
      id: inputId,
      role: "combobox",
      value: inputValue ?? "",
      onChange: noop,
      ...inputOptions,
      disabled: readOnly || disabled
    }),
    getMenuProps: emptyProps,
    getItemProps: emptyProps,
    getDropdownProps: multi && searchable ? emptyProps : undefined,
    getSelectedItemProps: multi && searchable ? () => ({ tabIndex: -1 }) : undefined,
    reset: noop,
    toggleMenu: noop,
    contextOnClear: noop,
    contextOnOptionRemove: noop,
    addSelectedItem: undefined,
    removeSelectedItem: undefined,
    isFocused: false,
    clearable,
    searchable,
    multi,
    closeMenuOnSelect,
    size,
    loading,
    autoFocus: false,
    lazyRootProps
  };

  return <DropdownWrapperUI contextValue={contextValue} dropdownRef={dropdownRef} isStatic />;
};

export default DropdownStaticController;
