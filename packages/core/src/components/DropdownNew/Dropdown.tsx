import React, { useRef, forwardRef } from "react";
import { BaseDropdownProps } from "./Dropdown.types";
import useMergeRef from "../../hooks/useMergeRef";
import { BaseListItemData } from "../BaseListItem";
import DropdownComboboxController from "./modes/DropdownComboboxController";
import DropdownMultiComboboxController from "./modes/DropdownMultiComboboxController";
import DropdownSelectController from "./modes/DropdownSelectController";
import DropdownMultiSelectController from "./modes/DropdownMultiSelectController";

const Dropdown = forwardRef(
  <Item extends BaseListItemData<Record<string, unknown>>>(
    dropdownProps: BaseDropdownProps<Item>,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const isSearchable = dropdownProps.searchable === undefined ? true : dropdownProps.searchable;
    const isMulti = dropdownProps.multi || false;

    const dropdownInternalRef = useRef<HTMLDivElement>(null);
    const dropdownMergedRef = useMergeRef(ref, dropdownInternalRef);

    let ControllerComponent;

    if (isSearchable) {
      ControllerComponent = isMulti ? DropdownMultiComboboxController : DropdownComboboxController;
    } else {
      ControllerComponent = isMulti ? DropdownMultiSelectController : DropdownSelectController;
    }
    return <ControllerComponent {...dropdownProps} dropdownRef={dropdownMergedRef} />;
  }
);

export default Dropdown as <Item extends BaseListItemData<Record<string, unknown>>>(
  props: BaseDropdownProps<Item> & { ref?: React.ForwardedRef<HTMLDivElement> }
) => React.ReactElement;
