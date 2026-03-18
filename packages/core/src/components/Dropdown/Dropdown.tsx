import React, { useRef, forwardRef } from "react";
import {
  type BaseDropdownProps,
  type DropdownMultiControllerProps,
  type DropdownSingleControllerProps
} from "./Dropdown.types";
import useMergeRef from "../../hooks/useMergeRef";
import { type BaseItemData } from "../BaseItem";
import DropdownComboboxController from "./modes/DropdownComboboxController";
import DropdownMultiComboboxController from "./modes/DropdownMultiComboboxController";
import DropdownSelectController from "./modes/DropdownSelectController";
import DropdownMultiSelectController from "./modes/DropdownMultiSelectController";

const Dropdown = forwardRef(
  <Item extends BaseItemData<Record<string, unknown>>>(
    dropdownProps: BaseDropdownProps<Item>,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const isSearchable = Boolean(dropdownProps.searchable);

    const dropdownInternalRef = useRef<HTMLDivElement>(null);
    const dropdownMergedRef = useMergeRef(ref, dropdownInternalRef);

    if (isMultiType(dropdownProps)) {
      return isSearchable ? (
        <DropdownMultiComboboxController {...dropdownProps} dropdownRef={dropdownMergedRef} />
      ) : (
        <DropdownMultiSelectController {...dropdownProps} dropdownRef={dropdownMergedRef} />
      );
    }

    if (isSingleType(dropdownProps)) {
      return isSearchable ? (
        <DropdownComboboxController {...dropdownProps} dropdownRef={dropdownMergedRef} />
      ) : (
        <DropdownSelectController {...dropdownProps} dropdownRef={dropdownMergedRef} />
      );
    }

    return null;
  }
);

export default Dropdown as <Item extends BaseItemData<Record<string, unknown>>>(
  props: BaseDropdownProps<Item> & { ref?: React.ForwardedRef<HTMLDivElement> }
) => React.ReactElement;

function isMultiType(dropdownProps: BaseDropdownProps<any>): dropdownProps is DropdownMultiControllerProps<any> {
  return dropdownProps.multi;
}

function isSingleType(dropdownProps: BaseDropdownProps<any>): dropdownProps is DropdownSingleControllerProps<any> {
  return !dropdownProps.multi;
}
