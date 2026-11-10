import React from "react";
import { Search } from "@vibe/search";
import { type BaseItemData } from "@vibe/base-list";
import { useDropdownContext } from "../../context/DropdownContext";

const MenuSearch = () => {
  const {
    getInputProps,
    getDropdownProps,
    focusTrigger,
    size,
    label,
    "aria-label": ariaLabel,
    inputAriaLabel,
    disabled,
    readOnly
  } = useDropdownContext<BaseItemData>();

  const multipleSelectionProps = getDropdownProps ? getDropdownProps({ preventKeyAction: true }) : {};

  const {
    ref,
    id,
    value,
    onChange,
    onKeyDown,
    onBlur,
    onFocus,
    "aria-activedescendant": activeDescendant,
    "aria-controls": menuId,
    "aria-expanded": isExpanded
  } = getInputProps({
    ...multipleSelectionProps,
    "aria-label": inputAriaLabel || label || ariaLabel,
    onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Tab") {
        if (event.shiftKey) {
          event.preventDefault();
        }
        focusTrigger?.();
      }
      multipleSelectionProps.onKeyDown?.(event);
    }
  });

  return (
    <Search
      ref={ref}
      id={id}
      value={value ?? ""}
      size={size}
      debounceRate={0}
      disabled={disabled || readOnly}
      inputAriaLabel={inputAriaLabel || label || ariaLabel}
      searchResultsContainerId={menuId}
      currentAriaResultId={activeDescendant || undefined}
      aria-expanded={isExpanded}
      onChange={(nextValue: string) => onChange?.({ target: { value: nextValue } })}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
      onFocus={onFocus}
    />
  );
};

export default MenuSearch;
