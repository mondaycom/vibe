import type React from "react";
import { type BaseItemData } from "@vibe/base-list";
import { useDropdownContext } from "../../context/DropdownContext";

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
    toggleMenu
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

  return labelId ? { ...toggleProps, "aria-labelledby": `${labelId} ${toggleProps.id}` } : toggleProps;
};

export default useTriggerToggleProps;
