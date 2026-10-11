import React from "react";
import { type BaseItemData } from "@vibe/base-list";
import {
  type BaseDropdownProps,
  type DropdownLazyRootProps,
  type DropdownMultiControllerProps,
  type DropdownSingleControllerProps
} from "../Dropdown.types";
import DropdownComboboxController from "./DropdownComboboxController";
import DropdownMultiComboboxController from "./DropdownMultiComboboxController";
import DropdownSelectController from "./DropdownSelectController";
import DropdownMultiSelectController from "./DropdownMultiSelectController";

export function renderDropdownController<Item extends BaseItemData<Record<string, unknown>>>(
  dropdownProps: BaseDropdownProps<Item> & { lazyRootProps?: DropdownLazyRootProps },
  dropdownRef: React.Ref<HTMLDivElement>
) {
  const isSearchable = Boolean(dropdownProps.searchable);

  if (isMultiType(dropdownProps)) {
    return isSearchable ? (
      <DropdownMultiComboboxController {...dropdownProps} dropdownRef={dropdownRef} />
    ) : (
      <DropdownMultiSelectController {...dropdownProps} dropdownRef={dropdownRef} />
    );
  }

  if (isSingleType(dropdownProps)) {
    return isSearchable ? (
      <DropdownComboboxController {...dropdownProps} dropdownRef={dropdownRef} />
    ) : (
      <DropdownSelectController {...dropdownProps} dropdownRef={dropdownRef} />
    );
  }

  return null;
}

function isMultiType(dropdownProps: BaseDropdownProps<any>): dropdownProps is DropdownMultiControllerProps<any> {
  return dropdownProps.multi;
}

function isSingleType(dropdownProps: BaseDropdownProps<any>): dropdownProps is DropdownSingleControllerProps<any> {
  return !dropdownProps.multi;
}
