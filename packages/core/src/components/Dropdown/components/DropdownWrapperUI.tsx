import React from "react";
import { DropdownContext } from "../context/DropdownContext";
import { type DropdownContextProps } from "../context/DropdownContext.types";
import DropdownPopup from "./DropdownPopup/DropdownPopup";
import DropdownBoxMode from "./DropdownBoxMode/DropdownBoxMode";
import { type BaseItemData } from "../../BaseItem";
import DropdownBase from "./DropdownBase/DropdownBase";

interface DropdownWrapperUIProps<Item extends BaseItemData<Record<string, unknown>>> {
  contextValue: DropdownContextProps<Item>;
  dropdownRef: React.Ref<HTMLDivElement>;
}

const DropdownWrapperUI = <Item extends BaseItemData<Record<string, unknown>>>(props: DropdownWrapperUIProps<Item>) => {
  const { contextValue, dropdownRef } = props;

  // Id linking the helper text to the combobox/trigger via aria-describedby (WCAG SC 1.3.1).
  const helperTextId = contextValue.helperText && contextValue.id ? `${contextValue.id}-helper-text` : undefined;

  return (
    <DropdownContext.Provider value={{ ...contextValue, helperTextId }}>
      <DropdownBase dropdownRef={dropdownRef}>
        {contextValue.boxMode ? <DropdownBoxMode /> : <DropdownPopup />}
      </DropdownBase>
    </DropdownContext.Provider>
  );
};

export default DropdownWrapperUI;
