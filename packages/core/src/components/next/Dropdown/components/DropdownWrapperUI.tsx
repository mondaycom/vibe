import React from "react";
import { DropdownContext } from "../context/DropdownContext";
import { type DropdownContextProps } from "../context/DropdownContext.types";
import DropdownPopup from "./DropdownPopup/DropdownPopup";
import { type BaseListItemData } from "../../../BaseListItem";
import DropdownBase from "./DropdownBase/DropdownBase";

interface DropdownWrapperUIProps<Item extends BaseListItemData<Record<string, unknown>>> {
  contextValue: DropdownContextProps<Item>;
  dropdownRef: React.Ref<HTMLDivElement>;
}

const DropdownWrapperUI = <Item extends BaseListItemData<Record<string, unknown>>>(
  props: DropdownWrapperUIProps<Item>
) => {
  const { contextValue, dropdownRef } = props;

  return (
    <DropdownContext.Provider value={contextValue}>
      <DropdownBase dropdownRef={dropdownRef}>
        <DropdownPopup />
      </DropdownBase>
    </DropdownContext.Provider>
  );
};

export default DropdownWrapperUI;
