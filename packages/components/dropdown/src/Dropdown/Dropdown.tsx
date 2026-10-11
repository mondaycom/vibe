import React, { useRef, forwardRef } from "react";
import { type BaseDropdownProps } from "./Dropdown.types";
import { useMergeRef } from "@vibe/shared";
import { type BaseItemData } from "@vibe/base-list";
import { renderDropdownController } from "./modes/renderDropdownController";
import DropdownLazyController from "./modes/DropdownLazyController";

const Dropdown = forwardRef(
  <Item extends BaseItemData<Record<string, unknown>>>(
    dropdownProps: BaseDropdownProps<Item>,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const dropdownInternalRef = useRef<HTMLDivElement>(null);
    const dropdownMergedRef = useMergeRef(ref, dropdownInternalRef);

    if (dropdownProps.lazy && !dropdownProps.boxMode) {
      return <DropdownLazyController dropdownProps={dropdownProps} dropdownRef={dropdownMergedRef} />;
    }

    return renderDropdownController(dropdownProps, dropdownMergedRef);
  }
);

export default Dropdown as <Item extends BaseItemData<Record<string, unknown>>>(
  props: BaseDropdownProps<Item> & { ref?: React.ForwardedRef<HTMLDivElement> }
) => React.ReactElement;
