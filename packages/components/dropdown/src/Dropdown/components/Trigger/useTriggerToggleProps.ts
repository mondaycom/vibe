import type React from "react";
import { type BaseItemData } from "@vibe/base-list";
import { useDropdownContext } from "../../context/DropdownContext";
import { getSelectedValueId } from "../../utils/dropdownUtils";

const OPEN_MENU_KEYS = ["Enter", " ", "ArrowDown", "ArrowUp"];

const useTriggerToggleProps = (): Record<string, unknown> => {
  const {
    searchable,
    searchInMenu,
    getToggleButtonProps,
    label,
    getLabelProps,
    "aria-label": ariaLabel,
    helperTextId,
    disabled,
    readOnly,
    error,
    isOpen,
    toggleMenu,
    multi,
    selectedItems = []
  } = useDropdownContext<BaseItemData>();

  if (searchable && !searchInMenu) {
    return {};
  }

  const labelId = label ? getLabelProps().id : undefined;
  const baseProps = {
    "aria-haspopup": "dialog",
    "aria-labelledby": labelId,
    "aria-label": label ? undefined : ariaLabel,
    "aria-describedby": helperTextId,
    "aria-disabled": disabled ? "true" : undefined,
    "aria-invalid": error ? "true" : undefined,
    "aria-readonly": readOnly ? "true" : undefined
  };

  if (!searchInMenu) {
    return getToggleButtonProps(baseProps);
  }

  const toggleProps = getToggleButtonProps({
    ...baseProps,
    role: "button",
    "aria-haspopup": "listbox",
    "aria-activedescendant": undefined,
    tabIndex: 0,
    disabled: disabled || readOnly,
    onKeyDown: (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.target !== event.currentTarget || isOpen || disabled || readOnly) {
        return;
      }
      if (OPEN_MENU_KEYS.includes(event.key)) {
        event.preventDefault();
        toggleMenu();
      }
    }
  });

  // Chips are wrapped in a labelled group, which would replace their text in the computed name, so a
  // multi-select with a selection references a visually hidden list of the selected values instead.
  const selectedValueId = multi && selectedItems.length > 0 ? getSelectedValueId(getLabelProps().id) : undefined;

  if (labelId) {
    return { ...toggleProps, "aria-labelledby": `${labelId} ${selectedValueId ?? toggleProps.id}` };
  }
  if (selectedValueId) {
    const describedBy = [helperTextId, selectedValueId].filter(Boolean).join(" ");
    return { ...toggleProps, "aria-describedby": describedBy };
  }
  return toggleProps;
};

export default useTriggerToggleProps;
