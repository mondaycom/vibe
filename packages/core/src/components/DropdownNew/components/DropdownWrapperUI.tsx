import React from "react";
import { DropdownContext } from "../context/DropdownContext"; // Corrected path
import { DropdownContextProps } from "../context/DropdownContext.types"; // Corrected path
import DropdownStructure from "./DropdownStructure/DropdownStructure";
import DropdownPopup from "./DropdownPopup/DropdownPopup";
import { BaseListItemData } from "../../BaseListItem"; // Corrected path

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
      <DropdownStructure dropdownRef={dropdownRef}>
        <DropdownPopup />
      </DropdownStructure>
    </DropdownContext.Provider>
  );
};

export default DropdownWrapperUI;
