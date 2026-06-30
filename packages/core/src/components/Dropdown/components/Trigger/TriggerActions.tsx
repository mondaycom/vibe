import React from "react";
import { CloseSmall, DropdownChevronDown, DropdownChevronUp } from "@vibe/icons";
import { IconButton } from "@vibe/icon-button";
import { Flex } from "@vibe/layout";
import { Loader } from "@vibe/loader";
import styles from "./Trigger.module.scss";
import { useDropdownContext } from "../../context/DropdownContext";
import { type BaseItemData } from "../../../BaseItem";

const sizeMap = {
  large: "medium",
  medium: "small",
  small: "xs"
} as const;

const TriggerActions = () => {
  const {
    isOpen,
    reset,
    contextOnClear,
    size,
    disabled,
    clearable,
    readOnly,
    multi,
    selectedItem,
    selectedItems = [],
    toggleMenu,
    getMenuProps,
    loading,
    clearAriaLabel,
    boxMode,
    label,
    getLabelProps,
    "aria-label": ariaLabel,
    inputAriaLabel
  } = useDropdownContext<BaseItemData>();

  const hasSelection = multi ? selectedItems?.length > 0 : !!selectedItem;
  const iconButtonSize = sizeMap[size] || "small";

  // The chevron is a focusable control, so it needs a real accessible name (WCAG 4.1.2). With a
  // visible label, reference it (a computed name via aria-labelledby); otherwise use the field's
  // aria-label string directly. Referencing the listbox or the input would not yield a usable label
  // (a textbox's name computes from its value, not its label), leaving the chevron effectively unnamed.
  const chevronLabelledBy = label ? getLabelProps().id : undefined;
  const chevronAriaLabel = label ? undefined : ariaLabel || inputAriaLabel;

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (contextOnClear) {
      contextOnClear();
    } else {
      reset();
    }
  };

  if (readOnly) {
    return null;
  }

  return (
    <div
      onKeyDown={e => {
        e.stopPropagation();
      }}
    >
      <Flex className={styles.actionsWrapper}>
        {loading && (
          <Loader size={iconButtonSize === "xs" ? 16 : iconButtonSize === "small" ? 20 : 24} color="secondary" />
        )}
        {hasSelection && clearable && !disabled && (
          <IconButton
            data-testid="dropdown-clear-button"
            icon={CloseSmall}
            onClick={handleClear}
            size={iconButtonSize}
            aria-label={clearAriaLabel}
            hideTooltip
          />
        )}
        {!boxMode && (
          <IconButton
            icon={isOpen ? DropdownChevronUp : DropdownChevronDown}
            size={iconButtonSize}
            disabled={disabled}
            aria-controls={getMenuProps().id}
            aria-expanded={isOpen}
            aria-labelledby={chevronLabelledBy}
            aria-label={chevronAriaLabel}
            tabIndex={-1}
            onClick={() => {
              toggleMenu();
            }}
          />
        )}
      </Flex>
    </div>
  );
};

export default TriggerActions;
